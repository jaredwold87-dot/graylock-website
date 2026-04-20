import { Resend } from "resend";
import { eq, sql } from "drizzle-orm";
import {
  db,
  leadMagnetEmailsTable,
  suppressedEmailsTable,
} from "@workspace/db";
import { logger } from "./logger";

const PDF_PUBLIC_URL = "https://graylockdigital.com/website-playbook.pdf";
const LEAD_MAGNET_NAME = "Private Practice Website Playbook";
const REMINDER_DELAY_MS = 3 * 24 * 60 * 60 * 1000;
const RUN_INTERVAL_MS = 24 * 60 * 60 * 1000;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildReminderHtml(firstName: string): string {
  return `<!DOCTYPE html>
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
          <h1 style="margin:0 0 16px; font-size:22px; line-height:1.3; color:#1a1a1a;">Hi ${escapeHtml(firstName)} — did the Playbook get buried?</h1>
          <p style="margin:0 0 16px; font-size:16px; line-height:1.6; color:#444;">Just a quick nudge: a few days ago you grabbed <strong>The Private Practice Website Playbook</strong>, and we noticed it might have slipped past you.</p>
          <p style="margin:0 0 28px; font-size:16px; line-height:1.6; color:#444;">Here's the link again, in case you'd like to take a look:</p>
          <p style="margin:0 0 28px;">
            <a href="${PDF_PUBLIC_URL}" style="display:inline-block; background:#2E7BB4; color:#ffffff; text-decoration:none; font-weight:700; padding:14px 28px; border-radius:6px; font-size:15px;">Download the Playbook (PDF)</a>
          </p>
          <p style="margin:0 0 16px; font-size:15px; line-height:1.6; color:#444;">If you'd rather just chat through what's on your homepage today, hit reply — we read every message.</p>
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
}

function buildReminderText(firstName: string): string {
  return `Hi ${firstName},

Just a quick nudge: a few days ago you grabbed The Private Practice Website Playbook, and we noticed it might have slipped past you.

Here's the link again, in case you'd like to take a look:
${PDF_PUBLIC_URL}

If you'd rather just chat through what's on your homepage today, hit reply — we read every message.

— The Graylock Digital Team`;
}

// Event types from `lead_magnet_email_events` that indicate the lead has
// already engaged with us through some other channel and so doesn't need a
// nudge. `email.replied` covers inbound-reply parsing if/when wired up;
// `lead.contacted` / `lead.responded` are reserved for GOS-driven signals
// (e.g. a sales rep marking the lead as contacted) recorded into the same
// events table.
const ENGAGEMENT_EVENT_TYPES = [
  "email.replied",
  "lead.contacted",
  "lead.responded",
];

export async function runReminderJob(): Promise<{
  claimed: number;
  sent: number;
  skipped: number;
  skippedEngaged: number;
  failed: number;
}> {
  const stats = {
    claimed: 0,
    sent: 0,
    skipped: 0,
    skippedEngaged: 0,
    failed: 0,
  };
  const cutoffMs = REMINDER_DELAY_MS;

  // Atomically claim eligible rows by stamping reminder_sent_at. Doing the
  // claim and the read in a single UPDATE...RETURNING means concurrent
  // runners (or overlapping runs) can't double-send: only one process wins
  // each row. We also dedupe per email here so multi-download leads get a
  // single nudge — non-winning rows for the same address are claimed but
  // returned as "skipped" so they aren't sent.
  let claimed: Array<{
    id: number;
    email: string;
    firstName: string;
    isWinner: boolean;
    isSuppressed: boolean;
    isEngaged: boolean;
  }> = [];

  try {
    const result = await db.execute(sql`
      WITH eligible AS (
        SELECT id, email, first_name
        FROM lead_magnet_emails
        WHERE kind = 'initial'
          AND status IN ('sent', 'delivered')
          AND sent_at < (NOW() - (${cutoffMs} || ' milliseconds')::interval)
          AND reminder_sent_at IS NULL
          AND NOT EXISTS (
            SELECT 1 FROM lead_magnet_emails prior
            WHERE prior.email = lead_magnet_emails.email
              AND prior.reminder_sent_at IS NOT NULL
          )
        FOR UPDATE SKIP LOCKED
      ),
      ranked AS (
        SELECT
          id,
          email,
          first_name,
          ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
        FROM eligible
      ),
      claimed AS (
        UPDATE lead_magnet_emails lme
        SET reminder_sent_at = NOW(), updated_at = NOW()
        FROM ranked
        WHERE lme.id = ranked.id
        RETURNING lme.id, lme.email, lme.first_name, ranked.rn
      )
      SELECT
        c.id,
        c.email,
        c.first_name AS "firstName",
        (c.rn = 1) AS "isWinner",
        EXISTS (
          SELECT 1 FROM suppressed_emails s WHERE s.email = c.email
        ) AS "isSuppressed",
        (
          EXISTS (
            SELECT 1 FROM chat_conversations cc
            WHERE LOWER(cc.visitor_email) = c.email
          )
          OR EXISTS (
            SELECT 1 FROM lead_magnet_email_events e
            WHERE e.event_type IN (${sql.join(
              ENGAGEMENT_EVENT_TYPES.map((t) => sql`${t}`),
              sql`, `,
            )})
              AND (
                e.email = c.email
                OR EXISTS (
                  SELECT 1 FROM lead_magnet_emails sib
                  WHERE sib.email = c.email
                    AND sib.id = e.lead_magnet_email_id
                )
              )
          )
        ) AS "isEngaged"
      FROM claimed c
    `);
    const rows = (result as unknown as { rows?: unknown[] }).rows
      ?? (result as unknown as unknown[]);
    claimed = (rows as Array<Record<string, unknown>>).map((r) => ({
      id: Number(r.id),
      email: String(r.email),
      firstName: String(r.firstName),
      isWinner: Boolean(r.isWinner),
      isSuppressed: Boolean(r.isSuppressed),
      isEngaged: Boolean(r.isEngaged),
    }));
  } catch (err) {
    logger.error({ err }, "Reminder job: failed to claim candidate rows");
    return stats;
  }

  stats.claimed = claimed.length;
  if (claimed.length === 0) return stats;

  const sendable = claimed.filter(
    (c) => c.isWinner && !c.isSuppressed && !c.isEngaged,
  );
  stats.skipped = claimed.length - sendable.length;
  stats.skippedEngaged = claimed.filter(
    (c) => c.isWinner && !c.isSuppressed && c.isEngaged,
  ).length;

  for (const lead of claimed) {
    if (lead.isWinner && !lead.isSuppressed && lead.isEngaged) {
      logger.info(
        { email: lead.email, leadId: lead.id },
        "Reminder job: skipping nudge — lead already engaged (chat or recorded reply/contact event)",
      );
    }
  }

  if (sendable.length === 0) {
    logger.info(stats, "Reminder job run complete");
    return stats;
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    logger.error(
      "Reminder job: RESEND_API_KEY not set — releasing claims for retry",
    );
    // Release the claims we made on sendable rows so the next run can retry.
    try {
      await db
        .update(leadMagnetEmailsTable)
        .set({ reminderSentAt: null, updatedAt: new Date() })
        .where(
          sql`${leadMagnetEmailsTable.id} IN (${sql.join(
            sendable.map((s) => sql`${s.id}`),
            sql`, `,
          )})`,
        );
    } catch (err) {
      logger.error({ err }, "Reminder job: failed to release claims");
    }
    stats.failed = sendable.length;
    return stats;
  }
  const resend = new Resend(resendKey);

  for (const lead of sendable) {
    try {
      const result = await resend.emails.send({
        from: "Graylock Digital <noreply@graylockdigital.com>",
        to: [lead.email],
        replyTo: "hello@graylockdigital.com",
        subject: "Did the Practice Growth Guide get buried?",
        html: buildReminderHtml(lead.firstName),
        text: buildReminderText(lead.firstName),
      });
      if (result?.error) {
        logger.error(
          { err: result.error, email: lead.email },
          "Reminder job: Resend returned an error — releasing claim",
        );
        await db
          .update(leadMagnetEmailsTable)
          .set({ reminderSentAt: null, updatedAt: new Date() })
          .where(eq(leadMagnetEmailsTable.id, lead.id));
        stats.failed += 1;
        continue;
      }
      const reminderResendId = result?.data?.id ?? null;
      // Insert a child row representing the nudge itself. The Resend webhook
      // looks up rows by resend_email_id, so giving the reminder its own row
      // means delivered/opened/clicked events for the nudge get attributed
      // separately from the original Playbook send. The send already
      // succeeded at this point, so we retry briefly on transient DB errors
      // to avoid losing attribution for a nudge that did go out.
      let inserted = false;
      let lastInsertErr: unknown = null;
      for (let attempt = 0; attempt < 3 && !inserted; attempt += 1) {
        try {
          await db.insert(leadMagnetEmailsTable).values({
            email: lead.email,
            firstName: lead.firstName,
            resendEmailId: reminderResendId ?? undefined,
            leadMagnet: LEAD_MAGNET_NAME,
            status: "sent",
            kind: "reminder",
            parentEmailId: lead.id,
          });
          inserted = true;
        } catch (err) {
          lastInsertErr = err;
          if (attempt < 2) {
            await new Promise((r) => setTimeout(r, 250 * (attempt + 1)));
          }
        }
      }
      if (!inserted) {
        // Loud log so the resend_email_id can be reconciled manually if
        // webhook events arrive before we're able to record the row.
        logger.error(
          {
            err: lastInsertErr,
            leadId: lead.id,
            reminderResendId,
            email: lead.email,
          },
          "Reminder job: failed to record reminder row after retries (nudge was sent)",
        );
      }
      stats.sent += 1;
      logger.info(
        { email: lead.email, leadId: lead.id, reminderResendId },
        "Reminder job: nudge email sent",
      );
    } catch (err) {
      logger.error(
        { err, email: lead.email },
        "Reminder job: failed to send nudge email — releasing claim",
      );
      try {
        await db
          .update(leadMagnetEmailsTable)
          .set({ reminderSentAt: null, updatedAt: new Date() })
          .where(eq(leadMagnetEmailsTable.id, lead.id));
      } catch (releaseErr) {
        logger.error(
          { err: releaseErr, leadId: lead.id },
          "Reminder job: failed to release claim after send error",
        );
      }
      stats.failed += 1;
    }
  }

  logger.info(stats, "Reminder job run complete");
  return stats;
}

let timer: NodeJS.Timeout | null = null;

export function startReminderScheduler(): void {
  if (process.env.LEAD_MAGNET_REMINDER_DISABLED === "true") {
    logger.info("Reminder scheduler disabled via LEAD_MAGNET_REMINDER_DISABLED");
    return;
  }
  if (timer) return;

  const tick = () => {
    runReminderJob().catch((err) => {
      logger.error({ err }, "Reminder job tick failed");
    });
  };

  // Delay first run a bit so the server is fully up.
  setTimeout(tick, 30 * 1000);
  timer = setInterval(tick, RUN_INTERVAL_MS);
  logger.info(
    { intervalMs: RUN_INTERVAL_MS },
    "Lead-magnet reminder scheduler started",
  );
}
