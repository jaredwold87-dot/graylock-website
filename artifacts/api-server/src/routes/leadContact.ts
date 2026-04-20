import { Router, type Request, type Response } from "express";
import crypto from "node:crypto";
import { desc, eq } from "drizzle-orm";
import {
  db,
  leadMagnetEmailsTable,
  leadMagnetEmailEventsTable,
} from "@workspace/db";
import { logger } from "../lib/logger";

const leadContactRouter = Router();

function timingSafeEqualStr(a: string, b: string): boolean {
  const aBuf = Buffer.from(a, "utf8");
  const bBuf = Buffer.from(b, "utf8");
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
}

function extractBearerToken(req: Request): string | null {
  const header = req.header("authorization") || req.header("Authorization");
  if (!header) return null;
  const match = /^Bearer\s+(.+)$/i.exec(header.trim());
  return match ? match[1].trim() : null;
}

interface MarkContactedBody {
  email?: unknown;
  occurredAt?: unknown;
  note?: unknown;
  eventType?: unknown;
}

leadContactRouter.post(
  "/lead-magnet/mark-contacted",
  async (req: Request, res: Response) => {
    const secret = process.env.GOS_INBOUND_WEBHOOK_SECRET;
    if (!secret) {
      logger.error(
        "GOS_INBOUND_WEBHOOK_SECRET not set — rejecting mark-contacted call",
      );
      res
        .status(500)
        .json({ success: false, error: "Endpoint not configured" });
      return;
    }

    const token = extractBearerToken(req);
    if (!token || !timingSafeEqualStr(token, secret)) {
      res.status(401).json({ success: false, error: "Unauthorized" });
      return;
    }

    const body = (req.body ?? {}) as MarkContactedBody;
    const rawEmail = typeof body.email === "string" ? body.email : "";
    const email = rawEmail.trim().toLowerCase();
    if (!email || !email.includes("@")) {
      res
        .status(400)
        .json({ success: false, error: "Valid `email` is required" });
      return;
    }

    const requestedType =
      typeof body.eventType === "string" ? body.eventType : "lead.contacted";
    const eventType =
      requestedType === "lead.responded" ? "lead.responded" : "lead.contacted";

    const occurredAtRaw =
      typeof body.occurredAt === "string" ? body.occurredAt : null;
    let occurredAt = occurredAtRaw ? new Date(occurredAtRaw) : new Date();
    if (isNaN(occurredAt.getTime())) occurredAt = new Date();

    const note = typeof body.note === "string" ? body.note : null;

    // Link the event to the lead's most recent lead_magnet_emails row when
    // one exists. The reminder job also matches on the bare email, so this
    // link is best-effort; a missing match still suppresses future nudges.
    let leadMagnetEmailId: number | null = null;
    try {
      const rows = await db
        .select({ id: leadMagnetEmailsTable.id })
        .from(leadMagnetEmailsTable)
        .where(eq(leadMagnetEmailsTable.email, email))
        .orderBy(desc(leadMagnetEmailsTable.id))
        .limit(1);
      if (rows[0]) leadMagnetEmailId = rows[0].id;
    } catch (err) {
      logger.error(
        { err, email },
        "mark-contacted: failed to look up lead_magnet_emails row",
      );
    }

    // Stable svix_id so repeat calls for the same lead/event/day are
    // deduped by the unique index on lead_magnet_email_events.svix_id.
    const dayKey = occurredAt.toISOString().slice(0, 10);
    const svixId = `gos-${eventType}-${crypto
      .createHash("sha256")
      .update(`${email}|${eventType}|${dayKey}`)
      .digest("hex")
      .slice(0, 32)}`;

    const payload = {
      source: "gos",
      email,
      eventType,
      occurredAt: occurredAt.toISOString(),
      note,
    };

    try {
      await db
        .insert(leadMagnetEmailEventsTable)
        .values({
          leadMagnetEmailId: leadMagnetEmailId ?? undefined,
          email,
          eventType,
          svixId,
          payload,
          occurredAt,
        })
        .onConflictDoNothing({ target: leadMagnetEmailEventsTable.svixId });
    } catch (err) {
      logger.error(
        { err, email },
        "mark-contacted: failed to insert lead engagement event",
      );
      res
        .status(500)
        .json({ success: false, error: "Failed to record event" });
      return;
    }

    logger.info(
      { email, eventType, leadMagnetEmailId },
      "mark-contacted: recorded GOS engagement event",
    );

    res.json({
      success: true,
      eventType,
      linkedLeadMagnetEmailId: leadMagnetEmailId,
    });
  },
);

export default leadContactRouter;
