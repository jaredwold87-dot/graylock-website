import { Router, type Request, type Response } from "express";
import { Resend } from "resend";
import { logger } from "../lib/logger";

const leadMagnetRouter = Router();

interface LeadMagnetPayload {
  first_name: string;
  email: string;
  consent: boolean;
}

const PDF_PUBLIC_URL = "https://graylockdigital.com/website-playbook.pdf";

leadMagnetRouter.post("/lead-magnet", async (req: Request, res: Response) => {
  const payload: LeadMagnetPayload = req.body;
  const submittedAt = new Date().toISOString();

  if (
    !payload ||
    typeof payload.first_name !== "string" ||
    typeof payload.email !== "string" ||
    typeof payload.consent !== "boolean"
  ) {
    res.status(400).json({ success: false, error: "Invalid payload" });
    return;
  }

  const firstName = payload.first_name.trim();
  const email = payload.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!firstName || firstName.length > 100) {
    res.status(400).json({ success: false, error: "Invalid first_name" });
    return;
  }
  if (!email || email.length > 254 || !emailRegex.test(email)) {
    res.status(400).json({ success: false, error: "Invalid email" });
    return;
  }
  if (payload.consent !== true) {
    res.status(400).json({ success: false, error: "Consent is required" });
    return;
  }

  const userEmailHtml = `<!DOCTYPE html>
<html>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; background:#F2F3F5; margin:0; padding:24px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e5e7eb;">
      <tr>
        <td style="background:#0F1E35; padding:28px 32px; text-align:left;">
          <p style="margin:0; color:#2E7BB4; font-size:12px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase;">Graylock Digital</p>
        </td>
      </tr>
      <tr>
        <td style="padding:32px;">
          <h1 style="margin:0 0 16px; font-size:24px; line-height:1.3; color:#1a1a1a;">Hi ${escapeHtml(firstName)} — here's your Playbook.</h1>
          <p style="margin:0 0 16px; font-size:16px; line-height:1.6; color:#444;">Thanks for downloading <strong>The Private Practice Website Playbook</strong>. Inside you'll find five reasons most private practice websites quietly lose patients — and exactly how to fix each one.</p>
          <p style="margin:0 0 28px; font-size:16px; line-height:1.6; color:#444;">Click below to grab your copy:</p>
          <p style="margin:0 0 28px;">
            <a href="${PDF_PUBLIC_URL}" style="display:inline-block; background:#2E7BB4; color:#ffffff; text-decoration:none; font-weight:700; padding:14px 28px; border-radius:6px; font-size:15px;">Download the Playbook (PDF)</a>
          </p>
          <p style="margin:0 0 16px; font-size:15px; line-height:1.6; color:#444;">If you'd like to see what your own homepage could look like — for free — just reply to this email or book a free demo at <a href="https://graylockdigital.com/get-started" style="color:#2E7BB4;">graylockdigital.com/get-started</a>.</p>
          <p style="margin:24px 0 0; font-size:15px; line-height:1.6; color:#444;">— The Graylock Digital Team</p>
        </td>
      </tr>
      <tr>
        <td style="background:#fafafa; padding:18px 32px; text-align:center; border-top:1px solid #eee;">
          <p style="margin:0; color:#888; font-size:12px;">Graylock Digital · Custom websites for private practices</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const userEmailText = `Hi ${firstName},

Thanks for downloading The Private Practice Website Playbook. Inside you'll find five reasons most private practice websites quietly lose patients — and exactly how to fix each one.

Download your copy: ${PDF_PUBLIC_URL}

If you'd like to see what your own homepage could look like — for free — just reply to this email or book a free demo at https://graylockdigital.com/get-started.

— The Graylock Digital Team`;

  const teamEmailBody = `New Playbook download from graylockdigital.com

First name: ${firstName}
Email: ${email}
Consent: ${payload.consent ? "Yes" : "No"}
Submitted: ${submittedAt}

---
Reply directly to this email to reach the lead.`;

  const teamRecipients = ["jared@graylockdigital.com"];
  if (process.env.TEAM_EMAIL_TIM) {
    teamRecipients.push(process.env.TEAM_EMAIL_TIM);
  }

  const userEmailPromise = (async () => {
    try {
      const resendKey = process.env.RESEND_API_KEY;
      if (!resendKey) {
        logger.error("RESEND_API_KEY not set — cannot email user");
        return;
      }
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "Graylock Digital <hello@graylockdigital.com>",
        to: [email],
        replyTo: "hello@graylockdigital.com",
        subject: "Your Free Practice Growth Guide from Graylock Digital",
        html: userEmailHtml,
        text: userEmailText,
      });
      logger.info({ email }, "Lead magnet user email sent");
    } catch (err) {
      logger.error({ err }, "Failed to send lead magnet user email");
    }
  })();

  const teamEmailPromise = (async () => {
    try {
      const resendKey = process.env.RESEND_API_KEY;
      if (!resendKey) return;
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "noreply@graylockdigital.com",
        to: teamRecipients,
        replyTo: email,
        subject: `New Playbook Download: ${firstName} <${email}>`,
        text: teamEmailBody,
      });
      logger.info({ email }, "Lead magnet team notification sent");
    } catch (err) {
      logger.error({ err }, "Failed to send lead magnet team notification");
    }
  })();

  const gosPromise = (async () => {
    try {
      const gosUrl = process.env.GRAYLOCK_API_URL;
      if (!gosUrl) {
        logger.warn("GRAYLOCK_API_URL not set — skipping GOS webhook");
        return;
      }
      const response = await fetch(`${gosUrl}/api/webhook/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          consent: payload.consent,
          source: "graylockdigital.com",
          leadType: "lead-magnet",
          leadMagnet: "Private Practice Website Playbook",
          submittedAt,
        }),
      });
      logger.info({ status: response.status }, "GOS webhook (lead-magnet) response");
    } catch (err) {
      logger.error({ err }, "Failed to POST lead-magnet to GOS webhook");
    }
  })();

  await Promise.allSettled([userEmailPromise, teamEmailPromise, gosPromise]);

  res.json({ success: true });
});

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default leadMagnetRouter;
