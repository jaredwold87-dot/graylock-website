import { Router, type Request, type Response } from "express";
import { randomUUID } from "node:crypto";
import { Resend } from "resend";
import { eq, sql } from "drizzle-orm";
import {
  db,
  leadMagnetEmailsTable,
  suppressedEmailsTable,
} from "@workspace/db";
import { logger } from "../lib/logger";
import { isDisposableEmail } from "../lib/disposableEmails";
import { createRateLimiter } from "../lib/rateLimit";

const leadMagnetRouter = Router();

const RATE_LIMIT_WINDOW_MS = Number(process.env.LEAD_MAGNET_RATE_WINDOW_MS) || 10 * 60 * 1000;
const RATE_LIMIT_MAX = Number(process.env.LEAD_MAGNET_RATE_MAX) || 5;

const leadMagnetRateLimit = createRateLimiter({
  windowMs: RATE_LIMIT_WINDOW_MS,
  max: RATE_LIMIT_MAX,
  keyPrefix: "lead-magnet",
});

interface LeadMagnetPayload {
  first_name: string;
  email: string;
  consent: boolean;
  submitted_at?: string;
}

const PDF_PUBLIC_URL = "https://graylockdigital.com/website-playbook.pdf";
const LEAD_MAGNET_NAME = "Private Practice Website Playbook";

leadMagnetRouter.post("/lead-magnet", leadMagnetRateLimit, async (req: Request, res: Response) => {
  const payload: LeadMagnetPayload = req.body;

  if (
    !payload ||
    typeof payload.first_name !== "string" ||
    typeof payload.email !== "string" ||
    typeof payload.consent !== "boolean"
  ) {
    res.status(400).json({ success: false, error: "Invalid payload" });
    return;
  }

  let submittedAt = new Date().toISOString();
  if (typeof payload.submitted_at === "string") {
    const parsed = new Date(payload.submitted_at);
    if (!isNaN(parsed.getTime())) {
      submittedAt = parsed.toISOString();
    }
  }

  const firstName = payload.first_name.trim();
  const email = payload.email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!firstName || firstName.length > 100) {
    res.status(400).json({ success: false, error: "Invalid first_name" });
    return;
  }
  if (!email || email.length > 254 || !emailRegex.test(email)) {
    res.status(400).json({ success: false, error: "Invalid email" });
    return;
  }
  if (isDisposableEmail(email)) {
    logger.info({ email }, "Lead magnet rejected: disposable email domain");
    res.status(400).json({
      success: false,
      error:
        "Please use your work or practice email — we can't deliver the guide to disposable inboxes.",
      code: "DISPOSABLE_EMAIL",
    });
    return;
  }
  if (payload.consent !== true) {
    res.status(400).json({ success: false, error: "Consent is required" });
    return;
  }

  let suppressed = false;
  try {
    const rows = await db
      .select()
      .from(suppressedEmailsTable)
      .where(eq(suppressedEmailsTable.email, email));
    suppressed = rows.length > 0;
    if (suppressed) {
      logger.warn(
        { email, reason: rows[0]?.reason },
        "Skipping lead-magnet user email — address is suppressed",
      );
    }
  } catch (err) {
    logger.error({ err }, "Failed to check suppression list — proceeding");
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
${suppressed ? "\nNOTE: This address is on the suppression list — playbook email was NOT sent.\n" : ""}
---
Reply directly to this email to reach the lead.`;

  const teamRecipients = [
    "jared@graylockdigital.com",
    process.env.TEAM_EMAIL_TIM || "tim@graylockdigital.com",
  ];
  if (!process.env.TEAM_EMAIL_TIM) {
    logger.warn(
      "TEAM_EMAIL_TIM env var not set — falling back to tim@graylockdigital.com for lead-magnet notifications.",
    );
  }

  const userEmailPromise = (async () => {
    if (suppressed) {
      try {
        await db.insert(leadMagnetEmailsTable).values({
          email,
          firstName,
          leadMagnet: LEAD_MAGNET_NAME,
          status: "suppressed",
        });
      } catch (err) {
        logger.error({ err }, "Failed to record suppressed lead-magnet send");
      }
      return;
    }
    try {
      const resendKey = process.env.RESEND_API_KEY;
      if (!resendKey) {
        logger.error("RESEND_API_KEY not set — cannot email user");
        return;
      }
      const resend = new Resend(resendKey);
      // Set a deterministic Message-Id we control so inbound replies
      // (which arrive with this value in their In-Reply-To/References
      // headers) can be linked back to the exact original send.
      const messageId = `<lm-${randomUUID()}@graylockdigital.com>`;
      const result = await resend.emails.send({
        from: "Graylock Digital <noreply@graylockdigital.com>",
        to: [email],
        replyTo: "hello@graylockdigital.com",
        subject: "Your Free Practice Growth Guide from Graylock Digital",
        html: userEmailHtml,
        text: userEmailText,
        headers: { "Message-Id": messageId },
      });
      if (result?.error) {
        logger.error(
          { err: result.error, email },
          "Resend returned an error for lead magnet user email",
        );
        return;
      }
      const resendEmailId = result?.data?.id ?? null;
      logger.info({ email, resendEmailId, messageId }, "Lead magnet user email sent");
      try {
        await db.insert(leadMagnetEmailsTable).values({
          email,
          firstName,
          resendEmailId: resendEmailId ?? undefined,
          leadMagnet: LEAD_MAGNET_NAME,
          status: "sent",
          messageId,
        });
      } catch (err) {
        logger.error({ err }, "Failed to record lead-magnet send in DB");
      }
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
          leadMagnet: LEAD_MAGNET_NAME,
          submittedAt,
          emailSuppressed: suppressed,
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

// Aggregate stats for the 3-day nudge so the team can see whether it actually
// recovers leads. Returns counts for both the original Playbook send and the
// reminder nudge so they can be compared side by side.
//
// Optionally protected with a shared token via LEAD_MAGNET_STATS_TOKEN; if the
// env var is set, requests must pass it as ?token=... or the
// `x-stats-token` header.
leadMagnetRouter.get(
  "/lead-magnet/reminder-stats",
  async (req: Request, res: Response) => {
    const requiredToken = process.env.LEAD_MAGNET_STATS_TOKEN;
    if (requiredToken) {
      const provided =
        (typeof req.query.token === "string" ? req.query.token : "") ||
        String(req.header("x-stats-token") || "");
      if (provided !== requiredToken) {
        res.status(401).json({ success: false, error: "Unauthorized" });
        return;
      }
    }

    try {
      const result = await db.execute(sql`
        SELECT
          kind,
          COUNT(*)::int AS sent,
          COUNT(delivered_at)::int AS delivered,
          COUNT(opened_at)::int AS opened,
          COUNT(clicked_at)::int AS clicked,
          COUNT(bounced_at)::int AS bounced,
          COUNT(complained_at)::int AS complained
        FROM lead_magnet_emails
        WHERE status <> 'suppressed'
        GROUP BY kind
      `);
      const rows = ((result as unknown as { rows?: unknown[] }).rows ??
        (result as unknown as unknown[])) as Array<Record<string, unknown>>;

      const buckets: Record<
        string,
        {
          sent: number;
          delivered: number;
          opened: number;
          clicked: number;
          bounced: number;
          complained: number;
        }
      > = {
        initial: { sent: 0, delivered: 0, opened: 0, clicked: 0, bounced: 0, complained: 0 },
        reminder: { sent: 0, delivered: 0, opened: 0, clicked: 0, bounced: 0, complained: 0 },
      };
      for (const r of rows) {
        const k = String(r.kind ?? "initial");
        if (!buckets[k]) {
          buckets[k] = { sent: 0, delivered: 0, opened: 0, clicked: 0, bounced: 0, complained: 0 };
        }
        buckets[k].sent = Number(r.sent ?? 0);
        buckets[k].delivered = Number(r.delivered ?? 0);
        buckets[k].opened = Number(r.opened ?? 0);
        buckets[k].clicked = Number(r.clicked ?? 0);
        buckets[k].bounced = Number(r.bounced ?? 0);
        buckets[k].complained = Number(r.complained ?? 0);
      }

      const pct = (num: number, denom: number) =>
        denom > 0 ? Math.round((num / denom) * 1000) / 10 : 0;

      const initial = buckets.initial;
      const reminder = buckets.reminder;

      // Recovery: of leads who got a nudge, how many opened/clicked the nudge
      // when they had not opened/clicked the original. We compute this in a
      // separate query to compare paired rows.
      const recoveryResult = await db.execute(sql`
        SELECT
          COUNT(*) FILTER (
            WHERE r.opened_at IS NOT NULL AND p.opened_at IS NULL
          )::int AS opened_only_after_nudge,
          COUNT(*) FILTER (
            WHERE r.clicked_at IS NOT NULL AND p.clicked_at IS NULL
          )::int AS clicked_only_after_nudge,
          COUNT(*)::int AS reminders_with_parent
        FROM lead_magnet_emails r
        JOIN lead_magnet_emails p ON p.id = r.parent_email_id
        WHERE r.kind = 'reminder'
      `);
      const recRows = ((recoveryResult as unknown as { rows?: unknown[] }).rows ??
        (recoveryResult as unknown as unknown[])) as Array<Record<string, unknown>>;
      const rec = recRows[0] ?? {};

      res.json({
        success: true,
        initial: {
          ...initial,
          deliveredRate: pct(initial.delivered, initial.sent),
          openRate: pct(initial.opened, initial.delivered || initial.sent),
          clickRate: pct(initial.clicked, initial.delivered || initial.sent),
        },
        reminder: {
          ...reminder,
          deliveredRate: pct(reminder.delivered, reminder.sent),
          openRate: pct(reminder.opened, reminder.delivered || reminder.sent),
          clickRate: pct(reminder.clicked, reminder.delivered || reminder.sent),
        },
        recovery: {
          remindersWithParent: Number(rec.reminders_with_parent ?? 0),
          openedOnlyAfterNudge: Number(rec.opened_only_after_nudge ?? 0),
          clickedOnlyAfterNudge: Number(rec.clicked_only_after_nudge ?? 0),
        },
      });
    } catch (err) {
      logger.error({ err }, "Failed to compute lead-magnet reminder stats");
      res
        .status(500)
        .json({ success: false, error: "Failed to compute stats" });
    }
  },
);

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default leadMagnetRouter;
