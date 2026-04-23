import { Router, type Request, type Response } from "express";
import { Resend } from "resend";
import { logger } from "../lib/logger";

const playbookRouter = Router();

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "trashmail.com",
  "yopmail.com",
  "throwaway.email",
  "sharklasers.com",
  "getnada.com",
  "maildrop.cc",
  "fakeinbox.com",
  "temp-mail.org",
  "tempinbox.com",
  "dispostable.com",
  "mintemail.com",
  "spamgourmet.com",
  "mailnesia.com",
  "moakt.com",
  "emailondeck.com",
  "tempmailaddress.com",
]);

const ROLE_LOCAL_PARTS = new Set([
  "admin",
  "administrator",
  "info",
  "support",
  "sales",
  "contact",
  "noreply",
  "no-reply",
  "postmaster",
  "webmaster",
  "abuse",
  "billing",
  "help",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email: string): { ok: true } | { ok: false; reason: string } {
  const trimmed = email.trim().toLowerCase();
  if (!EMAIL_RE.test(trimmed)) {
    return { ok: false, reason: "Please enter a valid email address." };
  }
  const [local, domain] = trimmed.split("@");
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return { ok: false, reason: "Please use a permanent email address — disposable inboxes aren't accepted." };
  }
  if (ROLE_LOCAL_PARTS.has(local)) {
    return { ok: false, reason: "Please use a personal email address (not a role-based inbox like info@ or admin@)." };
  }
  return { ok: true };
}

interface PlaybookPayload {
  first_name?: string;
  email?: string;
  source?: string;
}

playbookRouter.post("/playbook-lead", async (req: Request, res: Response) => {
  const payload: PlaybookPayload = req.body ?? {};
  const firstName = (payload.first_name || "").toString().trim();
  const email = (payload.email || "").toString().trim();
  const source = (payload.source || "home-builders-playbook").toString();

  if (!firstName || firstName.length < 1) {
    return res.status(400).json({ success: false, error: "First name is required." });
  }
  const emailCheck = validateEmail(email);
  if (!emailCheck.ok) {
    return res.status(400).json({ success: false, error: emailCheck.reason });
  }

  const submittedAt = new Date().toISOString();
  const playbookUrl = "https://graylockdigital.com/home-builders-playbook.pdf";

  const teamSubject = `New Playbook Lead: ${firstName} (${source})`;
  const teamBody = `New free playbook download from graylockdigital.com

Name: ${firstName}
Email: ${email}
Source: ${source}
Submitted: ${submittedAt}

---
Reply directly to this email to reach the lead.`;

  const recipients = ["jared@graylockdigital.com"];
  if (process.env.TEAM_EMAIL_TIM) {
    recipients.push(process.env.TEAM_EMAIL_TIM);
  }

  const resendKey = process.env.RESEND_API_KEY;
  const resend = resendKey ? new Resend(resendKey) : null;

  const teamEmailPromise = (async () => {
    if (!resend) {
      logger.error("RESEND_API_KEY not set, skipping team notification");
      return;
    }
    try {
      await resend.emails.send({
        from: "noreply@graylockdigital.com",
        to: recipients,
        replyTo: email,
        subject: teamSubject,
        text: teamBody,
      });
      logger.info({ email }, "Playbook team email sent");
    } catch (err) {
      logger.error({ err }, "Failed to send playbook team email");
    }
  })();

  const leadEmailPromise = (async () => {
    if (!resend) return;
    try {
      const text = `Hi ${firstName},

Thanks for grabbing The Home Builder Growth Series: The Website Playbook.

Download it here:
${playbookUrl}

Inside, you'll find the 5 reasons most home builder websites are losing custom builds to larger competitors — and exactly how to fix each one.

If you'd like to see what a high-converting website would look like for your firm, we build a custom homepage demo for free, before you ever spend a dollar with us:
https://graylockdigital.com/get-started

Talk soon,
Jared
Graylock Digital`;

      const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1a1a1a;max-width:560px;line-height:1.55;font-size:16px;">
  <p>Hi ${firstName},</p>
  <p>Thanks for grabbing <strong>The Home Builder Growth Series: The Website Playbook</strong>.</p>
  <p style="margin:28px 0;"><a href="${playbookUrl}" style="background:#2e7bb4;color:#ffffff;text-decoration:none;font-weight:600;padding:14px 22px;border-radius:6px;display:inline-block;">Download the Playbook (PDF)</a></p>
  <p>Inside, you'll find the 5 reasons most home builder websites are losing custom builds to larger competitors — and exactly how to fix each one.</p>
  <p>If you'd like to see what a high-converting website would look like for your firm, we build a custom homepage demo for free, before you ever spend a dollar with us: <a href="https://graylockdigital.com/get-started" style="color:#2e7bb4;">claim your free homepage demo</a>.</p>
  <p>Talk soon,<br/>Jared<br/><span style="color:#6b7280;">Graylock Digital</span></p>
</div>`;

      await resend.emails.send({
        from: "Jared at Graylock Digital <jared@graylockdigital.com>",
        to: [email],
        replyTo: "jared@graylockdigital.com",
        subject: "Your Home Builder Website Playbook (download inside)",
        text,
        html,
      });
      logger.info({ email }, "Playbook lead confirmation email sent");
    } catch (err) {
      logger.error({ err }, "Failed to send playbook confirmation email");
    }
  })();

  const gosPromise = (async () => {
    try {
      const gosUrl = process.env.GRAYLOCK_API_URL;
      if (!gosUrl) {
        logger.warn("GRAYLOCK_API_URL not set, skipping GOS webhook");
        return;
      }
      const response = await fetch(`${gosUrl}/api/webhook/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          businessName: "",
          email,
          phone: "",
          serviceArea: "",
          hasWebsite: false,
          websiteUrl: "",
          primaryGoal: "Free playbook download",
          idealCustomer: "",
          brandingNotes: "",
          heardAboutUs: "",
          source,
          submittedAt,
        }),
      });
      const responseBody = await response.text();
      logger.info({ status: response.status, body: responseBody }, "GOS playbook webhook response");
    } catch (err) {
      logger.error({ err }, "Failed to POST playbook lead to GOS webhook");
    }
  })();

  await Promise.allSettled([teamEmailPromise, leadEmailPromise, gosPromise]);

  return res.json({ success: true });
});

export default playbookRouter;
