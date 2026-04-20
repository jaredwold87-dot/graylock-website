import { Router, type Request, type Response } from "express";
import crypto from "node:crypto";
import { and, desc, eq, inArray } from "drizzle-orm";
import {
  db,
  leadMagnetEmailsTable,
  leadMagnetEmailEventsTable,
} from "@workspace/db";
import { logger } from "../lib/logger";

const leadMagnetInboundReplyRouter = Router();

interface InboundReplyPayload {
  from?: string;
  to?: string | string[];
  subject?: string;
  message_id?: string;
  in_reply_to?: string;
  references?: string | string[];
  text?: string;
  html?: string;
  received_at?: string;
}

function extractEmail(addr: string): string {
  const match = addr.match(/<([^>]+)>/);
  const raw = (match ? match[1] : addr).trim().toLowerCase();
  return raw;
}

function normalizeMessageId(raw: string): string {
  const t = raw.trim();
  if (!t) return "";
  if (t.startsWith("<") && t.endsWith(">")) return t;
  return `<${t}>`;
}

function collectMessageIdCandidates(payload: InboundReplyPayload): string[] {
  const candidates = new Set<string>();
  const add = (s: string | undefined) => {
    if (!s) return;
    // Different inbound providers concatenate Message-IDs with whitespace,
    // commas, or semicolons. Tokenize on any of those so the matcher
    // doesn't silently fall back to email-only matching.
    for (const tok of s.split(/[\s,;]+/)) {
      const norm = normalizeMessageId(tok);
      if (norm && norm !== "<>") candidates.add(norm);
    }
  };
  add(payload.in_reply_to);
  if (Array.isArray(payload.references)) {
    for (const r of payload.references) add(r);
  } else {
    add(payload.references);
  }
  return [...candidates];
}

function timingSafeStringEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a, "utf8");
  const bb = Buffer.from(b, "utf8");
  if (ab.length !== bb.length) return false;
  return crypto.timingSafeEqual(ab, bb);
}

leadMagnetInboundReplyRouter.post(
  "/lead-magnet/inbound-reply",
  async (req: Request, res: Response) => {
    const secret = process.env.LEAD_MAGNET_INBOUND_SECRET;
    if (!secret) {
      logger.error(
        "LEAD_MAGNET_INBOUND_SECRET not set — rejecting inbound reply",
      );
      res
        .status(500)
        .json({ success: false, error: "Inbound reply not configured" });
      return;
    }

    const auth = String(req.header("authorization") || "");
    const headerToken = String(req.header("x-inbound-token") || "");
    const provided = auth.startsWith("Bearer ")
      ? auth.slice("Bearer ".length).trim()
      : headerToken.trim();

    if (!provided || !timingSafeStringEqual(provided, secret)) {
      logger.warn("Inbound reply: missing or invalid auth token");
      res.status(401).json({ success: false, error: "Unauthorized" });
      return;
    }

    const payload = (req.body || {}) as InboundReplyPayload;
    const fromRaw = typeof payload.from === "string" ? payload.from : "";
    if (!fromRaw) {
      res.status(400).json({ success: false, error: "Missing from" });
      return;
    }
    const fromEmail = extractEmail(fromRaw);
    if (!fromEmail.includes("@")) {
      res.status(400).json({ success: false, error: "Invalid from address" });
      return;
    }

    const occurredAt = payload.received_at
      ? new Date(payload.received_at)
      : new Date();
    const occurredAtSafe = isNaN(occurredAt.getTime())
      ? new Date()
      : occurredAt;

    const messageIdCandidates = collectMessageIdCandidates(payload);

    // Prefer matching the original send by Message-Id (linked via the reply's
    // In-Reply-To / References headers). Falling back to most-recent initial
    // send for the sender keeps things working when the inbound source can't
    // give us headers (forwarding rules, manual paste, etc).
    let parent:
      | {
          id: number;
          email: string;
          kind: string | null;
          parentEmailId: number | null;
        }
      | null = null;
    let matchedBy: "message_id" | "from_email" | null = null;

    if (messageIdCandidates.length > 0) {
      try {
        const rows = await db
          .select({
            id: leadMagnetEmailsTable.id,
            email: leadMagnetEmailsTable.email,
            kind: leadMagnetEmailsTable.kind,
            parentEmailId: leadMagnetEmailsTable.parentEmailId,
          })
          .from(leadMagnetEmailsTable)
          .where(inArray(leadMagnetEmailsTable.messageId, messageIdCandidates))
          .limit(1);
        if (rows[0]) {
          parent = rows[0];
          matchedBy = "message_id";
        }
      } catch (err) {
        logger.error(
          { err },
          "Inbound reply: Message-Id lookup failed, falling back to email match",
        );
      }
    }

    if (!parent) {
      try {
        const rows = await db
          .select({
            id: leadMagnetEmailsTable.id,
            email: leadMagnetEmailsTable.email,
            kind: leadMagnetEmailsTable.kind,
            parentEmailId: leadMagnetEmailsTable.parentEmailId,
          })
          .from(leadMagnetEmailsTable)
          .where(
            and(
              eq(leadMagnetEmailsTable.email, fromEmail),
              eq(leadMagnetEmailsTable.kind, "initial"),
            ),
          )
          .orderBy(desc(leadMagnetEmailsTable.sentAt))
          .limit(1);
        if (rows[0]) {
          parent = rows[0];
          matchedBy = "from_email";
        }
      } catch (err) {
        logger.error({ err }, "Inbound reply: fallback email lookup failed");
      }
    }

    // Use the inbound message-id (or a synthetic one) as the dedupe key so
    // duplicate forwards don't create duplicate engagement events.
    const inboundMessageId = payload.message_id
      ? normalizeMessageId(payload.message_id)
      : `<inbound-${fromEmail}-${occurredAtSafe.getTime()}>`;
    const dedupeKey = `inbound:${inboundMessageId}`;

    try {
      await db
        .insert(leadMagnetEmailEventsTable)
        .values({
          leadMagnetEmailId: parent?.id ?? null,
          resendEmailId: null,
          email: fromEmail,
          eventType: "email.replied",
          svixId: dedupeKey,
          payload: {
            source: "inbound-reply",
            matchedBy,
            from: fromRaw,
            to: payload.to ?? null,
            subject: payload.subject ?? null,
            messageId: payload.message_id ?? null,
            inReplyTo: payload.in_reply_to ?? null,
            references: payload.references ?? null,
            messageIdCandidates,
            // Avoid storing the entire body — a snippet is enough for triage
            // and keeps PII exposure small.
            textSnippet:
              typeof payload.text === "string"
                ? payload.text.slice(0, 500)
                : null,
          } as unknown as object,
          occurredAt: occurredAtSafe,
        })
        .onConflictDoNothing({ target: leadMagnetEmailEventsTable.svixId });
    } catch (err) {
      logger.error({ err }, "Failed to record inbound reply event");
      res
        .status(500)
        .json({ success: false, error: "Failed to record reply" });
      return;
    }

    if (parent) {
      logger.info(
        {
          email: fromEmail,
          parentEmailId: parent.id,
          matchedBy,
        },
        "Inbound reply recorded — lead will be excluded from future nudges",
      );
    } else {
      logger.warn(
        { email: fromEmail, messageIdCandidates },
        "Inbound reply recorded but no matching Playbook send found",
      );
    }

    res.json({
      success: true,
      tracked: Boolean(parent),
      matchedBy,
      parentEmailId: parent?.id ?? null,
    });
  },
);

export default leadMagnetInboundReplyRouter;
