import { Router, type Request, type Response } from "express";
import crypto from "node:crypto";
import { eq, sql } from "drizzle-orm";
import {
  db,
  leadMagnetEmailsTable,
  leadMagnetEmailEventsTable,
  suppressedEmailsTable,
} from "@workspace/db";
import { logger } from "../lib/logger";

const resendWebhookRouter = Router();

interface ResendEvent {
  type: string;
  created_at?: string;
  data?: {
    email_id?: string;
    to?: string[] | string;
    bounce?: { type?: string; subType?: string; message?: string };
    [k: string]: unknown;
  };
}

function verifySignature(
  rawBody: Buffer,
  svixId: string,
  svixTimestamp: string,
  svixSignature: string,
  secret: string,
): boolean {
  const secretBytes = secret.startsWith("whsec_")
    ? Buffer.from(secret.slice("whsec_".length), "base64")
    : Buffer.from(secret, "utf8");

  const signedPayload = `${svixId}.${svixTimestamp}.${rawBody.toString("utf8")}`;
  const expected = crypto
    .createHmac("sha256", secretBytes)
    .update(signedPayload)
    .digest("base64");

  const provided = svixSignature
    .split(" ")
    .map((s) => s.trim())
    .filter((s) => s.startsWith("v1,"))
    .map((s) => s.slice("v1,".length));

  for (const sig of provided) {
    try {
      const a = Buffer.from(expected, "utf8");
      const b = Buffer.from(sig, "utf8");
      if (a.length === b.length && crypto.timingSafeEqual(a, b)) return true;
    } catch {
      // ignore and keep trying
    }
  }
  return false;
}

resendWebhookRouter.post(
  "/lead-magnet/resend-webhook",
  async (req: Request, res: Response) => {
    const rawBody: Buffer =
      (req as unknown as { rawBody?: Buffer }).rawBody ?? Buffer.from("");

    const svixId = String(req.header("svix-id") || "");
    const svixTimestamp = String(req.header("svix-timestamp") || "");
    const svixSignature = String(req.header("svix-signature") || "");
    const secret = process.env.RESEND_WEBHOOK_SECRET;

    if (!secret) {
      logger.error("RESEND_WEBHOOK_SECRET not set — rejecting webhook");
      res.status(500).json({ success: false, error: "Webhook not configured" });
      return;
    }

    if (!svixId || !svixTimestamp || !svixSignature) {
      res.status(400).json({ success: false, error: "Missing svix headers" });
      return;
    }

    const tsSeconds = Number(svixTimestamp);
    if (
      !Number.isFinite(tsSeconds) ||
      Math.abs(Date.now() / 1000 - tsSeconds) > 60 * 5
    ) {
      res.status(400).json({ success: false, error: "Stale timestamp" });
      return;
    }

    if (
      !verifySignature(rawBody, svixId, svixTimestamp, svixSignature, secret)
    ) {
      logger.warn({ svixId }, "Resend webhook signature verification failed");
      res.status(401).json({ success: false, error: "Invalid signature" });
      return;
    }

    let event: ResendEvent;
    try {
      event = JSON.parse(rawBody.toString("utf8"));
    } catch {
      res.status(400).json({ success: false, error: "Invalid JSON" });
      return;
    }

    const eventType = event.type;
    const resendEmailId = event.data?.email_id;
    const occurredAt = event.created_at
      ? new Date(event.created_at)
      : new Date();
    const occurredAtSafe = isNaN(occurredAt.getTime())
      ? new Date()
      : occurredAt;

    const toRaw = event.data?.to;
    const recipientEmail = (
      Array.isArray(toRaw) ? toRaw[0] : typeof toRaw === "string" ? toRaw : ""
    )
      .toString()
      .trim()
      .toLowerCase();

    let leadMagnetEmailId: number | null = null;
    if (resendEmailId) {
      try {
        const rows = await db
          .select({ id: leadMagnetEmailsTable.id })
          .from(leadMagnetEmailsTable)
          .where(eq(leadMagnetEmailsTable.resendEmailId, resendEmailId));
        if (rows[0]) leadMagnetEmailId = rows[0].id;
      } catch (err) {
        logger.error({ err }, "Failed to look up lead magnet email row");
      }
    }

    if (!leadMagnetEmailId) {
      // Not one of ours (or sent before tracking) — log the event and ack.
      try {
        await db
          .insert(leadMagnetEmailEventsTable)
          .values({
            resendEmailId: resendEmailId ?? null,
            email: recipientEmail || null,
            eventType,
            svixId,
            payload: event as unknown as object,
            occurredAt: occurredAtSafe,
          })
          .onConflictDoNothing({
            target: leadMagnetEmailEventsTable.svixId,
          });
      } catch (err) {
        logger.error({ err }, "Failed to record orphan resend event");
      }
      res.json({ success: true, tracked: false });
      return;
    }

    try {
      await db
        .insert(leadMagnetEmailEventsTable)
        .values({
          leadMagnetEmailId,
          resendEmailId: resendEmailId ?? null,
          email: recipientEmail || null,
          eventType,
          svixId,
          payload: event as unknown as object,
          occurredAt: occurredAtSafe,
        })
        .onConflictDoNothing({ target: leadMagnetEmailEventsTable.svixId });
    } catch (err) {
      logger.error({ err }, "Failed to insert lead-magnet email event");
    }

    const updates: Record<string, unknown> = { updatedAt: new Date() };
    let newStatus: string | null = null;
    let suppressionReason: "bounced" | "complained" | null = null;
    let bounceType: string | null = null;

    switch (eventType) {
      case "email.delivered":
        updates.deliveredAt = occurredAtSafe;
        newStatus = "delivered";
        break;
      case "email.opened":
        updates.openedAt = occurredAtSafe;
        newStatus = "opened";
        break;
      case "email.clicked":
        updates.clickedAt = occurredAtSafe;
        newStatus = "clicked";
        break;
      case "email.bounced":
        updates.bouncedAt = occurredAtSafe;
        bounceType = event.data?.bounce?.type ?? null;
        if (bounceType) updates.bounceType = bounceType;
        newStatus = "bounced";
        if (bounceType?.toLowerCase() !== "transient") {
          suppressionReason = "bounced";
        }
        break;
      case "email.complained":
        updates.complainedAt = occurredAtSafe;
        newStatus = "complained";
        suppressionReason = "complained";
        break;
      case "email.delivery_delayed":
        updates.deliveryDelayedAt = occurredAtSafe;
        newStatus = "delivery_delayed";
        break;
      case "email.sent":
        if (!updates.sentAt) updates.sentAt = occurredAtSafe;
        break;
      default:
        logger.info({ eventType }, "Unhandled Resend event type");
    }

    if (newStatus) {
      // Only advance status — don't overwrite a later state with an earlier one.
      const rank: Record<string, number> = {
        queued: 0,
        suppressed: 0,
        sent: 1,
        delivery_delayed: 2,
        delivered: 3,
        opened: 4,
        clicked: 5,
        bounced: 6,
        complained: 6,
      };
      updates.status = sql`CASE WHEN ${leadMagnetEmailsTable.status} IS NULL OR ${rank[newStatus] ?? 0} >= COALESCE(
        CASE ${leadMagnetEmailsTable.status}
          WHEN 'queued' THEN 0
          WHEN 'suppressed' THEN 0
          WHEN 'sent' THEN 1
          WHEN 'delivery_delayed' THEN 2
          WHEN 'delivered' THEN 3
          WHEN 'opened' THEN 4
          WHEN 'clicked' THEN 5
          WHEN 'bounced' THEN 6
          WHEN 'complained' THEN 6
          ELSE 0
        END, 0)
        THEN ${newStatus} ELSE ${leadMagnetEmailsTable.status} END`;
    }

    try {
      await db
        .update(leadMagnetEmailsTable)
        .set(updates)
        .where(eq(leadMagnetEmailsTable.id, leadMagnetEmailId));
    } catch (err) {
      logger.error({ err }, "Failed to update lead-magnet email row");
    }

    if (suppressionReason && recipientEmail) {
      try {
        await db
          .insert(suppressedEmailsTable)
          .values({
            email: recipientEmail,
            reason: suppressionReason,
            bounceType: bounceType ?? undefined,
          })
          .onConflictDoNothing({ target: suppressedEmailsTable.email });
        logger.warn(
          { email: recipientEmail, reason: suppressionReason, bounceType },
          "Email address added to suppression list",
        );
      } catch (err) {
        logger.error({ err }, "Failed to add address to suppression list");
      }
    }

    // For click events, surface which URL was clicked so GOS can tell a
    // PDF download apart from any other link in the email.
    const clickedUrl =
      eventType === "email.clicked"
        ? (() => {
            const click = (event.data as { click?: { link?: string } })?.click;
            return typeof click?.link === "string" ? click.link : null;
          })()
        : null;
    const isPdfClick =
      typeof clickedUrl === "string" && /website-playbook\.pdf/i.test(clickedUrl);

    // Forward the event to GOS so Jared can see per-lead delivery state.
    try {
      const gosUrl = process.env.GRAYLOCK_API_URL;
      if (gosUrl) {
        const response = await fetch(
          `${gosUrl}/api/webhook/lead-magnet-event`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              source: "graylockdigital.com",
              leadMagnet: "Private Practice Website Playbook",
              email: recipientEmail,
              resendEmailId,
              eventType,
              occurredAt: occurredAtSafe.toISOString(),
              bounceType,
              status: newStatus,
              clickedUrl,
              isPdfClick,
            }),
          },
        );
        logger.info(
          { status: response.status, eventType },
          "GOS webhook (lead-magnet-event) response",
        );
      }
    } catch (err) {
      logger.error({ err }, "Failed to forward lead-magnet event to GOS");
    }

    res.json({ success: true, tracked: true });
  },
);

export default resendWebhookRouter;
