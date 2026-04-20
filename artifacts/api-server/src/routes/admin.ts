import { Router, type Request, type Response } from "express";
import { and, desc, eq, inArray, sql } from "drizzle-orm";
import { db, leadMagnetEmailsTable, leadMagnetEmailEventsTable } from "@workspace/db";
import { adminAuth } from "../middlewares/adminAuth";
import { logger } from "../lib/logger";

const adminRouter = Router();

const KNOWN_STATUSES = new Set([
  "queued",
  "suppressed",
  "sent",
  "delivery_delayed",
  "delivered",
  "opened",
  "clicked",
  "bounced",
  "complained",
]);

adminRouter.get(
  "/admin/lead-magnet-emails",
  adminAuth,
  async (req: Request, res: Response) => {
    const limitRaw = Number(req.query.limit);
    const limit =
      Number.isFinite(limitRaw) && limitRaw > 0 && limitRaw <= 500
        ? Math.floor(limitRaw)
        : 200;

    const statusParam = typeof req.query.status === "string" ? req.query.status : "";
    const requestedStatuses = statusParam
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter((s) => s && KNOWN_STATUSES.has(s));

    const repliedOnly =
      typeof req.query.replied === "string" &&
      ["1", "true", "yes"].includes(req.query.replied.toLowerCase());

    try {
      const baseQuery = db
        .select({
          id: leadMagnetEmailsTable.id,
          email: leadMagnetEmailsTable.email,
          firstName: leadMagnetEmailsTable.firstName,
          leadMagnet: leadMagnetEmailsTable.leadMagnet,
          status: leadMagnetEmailsTable.status,
          bounceType: leadMagnetEmailsTable.bounceType,
          resendEmailId: leadMagnetEmailsTable.resendEmailId,
          sentAt: leadMagnetEmailsTable.sentAt,
          deliveredAt: leadMagnetEmailsTable.deliveredAt,
          openedAt: leadMagnetEmailsTable.openedAt,
          clickedAt: leadMagnetEmailsTable.clickedAt,
          bouncedAt: leadMagnetEmailsTable.bouncedAt,
          complainedAt: leadMagnetEmailsTable.complainedAt,
          deliveryDelayedAt: leadMagnetEmailsTable.deliveryDelayedAt,
          updatedAt: leadMagnetEmailsTable.updatedAt,
        })
        .from(leadMagnetEmailsTable)
        .orderBy(desc(leadMagnetEmailsTable.sentAt))
        .limit(limit);

      const repliedExists = sql`EXISTS (SELECT 1 FROM ${leadMagnetEmailEventsTable} WHERE ${leadMagnetEmailEventsTable.leadMagnetEmailId} = ${leadMagnetEmailsTable.id} AND ${leadMagnetEmailEventsTable.eventType} = 'email.replied')`;

      const conditions = [];
      if (requestedStatuses.length > 0) {
        conditions.push(inArray(leadMagnetEmailsTable.status, requestedStatuses));
      }
      if (repliedOnly) {
        conditions.push(repliedExists);
      }

      const rows = await (conditions.length > 0
        ? baseQuery.where(conditions.length === 1 ? conditions[0] : and(...conditions))
        : baseQuery);

      // Pull the earliest reply event per lead-magnet email so we can surface
      // a "Replied" indicator (date + first reply snippet) on each row.
      const leadIds = rows.map((r) => r.id);
      const replyMap = new Map<
        number,
        { occurredAt: Date; snippet: string | null }
      >();
      if (leadIds.length > 0) {
        const replyRows = await db
          .select({
            leadMagnetEmailId: leadMagnetEmailEventsTable.leadMagnetEmailId,
            occurredAt: leadMagnetEmailEventsTable.occurredAt,
            payload: leadMagnetEmailEventsTable.payload,
          })
          .from(leadMagnetEmailEventsTable)
          .where(
            and(
              eq(leadMagnetEmailEventsTable.eventType, "email.replied"),
              inArray(
                leadMagnetEmailEventsTable.leadMagnetEmailId,
                leadIds,
              ),
            ),
          )
          .orderBy(leadMagnetEmailEventsTable.occurredAt);
        for (const row of replyRows) {
          if (row.leadMagnetEmailId == null) continue;
          if (replyMap.has(row.leadMagnetEmailId)) continue;
          const payload = row.payload as { textSnippet?: unknown } | null;
          const snippetRaw =
            payload && typeof payload === "object"
              ? (payload as { textSnippet?: unknown }).textSnippet
              : null;
          const snippet =
            typeof snippetRaw === "string" ? snippetRaw.slice(0, 240) : null;
          replyMap.set(row.leadMagnetEmailId, {
            occurredAt: row.occurredAt,
            snippet,
          });
        }
      }

      const rowsWithReply = rows.map((r) => {
        const reply = replyMap.get(r.id);
        return {
          ...r,
          firstRepliedAt: reply ? reply.occurredAt : null,
          firstReplySnippet: reply ? reply.snippet : null,
        };
      });

      const counts = await db
        .select({
          status: leadMagnetEmailsTable.status,
          count: sql<number>`count(*)::int`,
        })
        .from(leadMagnetEmailsTable)
        .groupBy(leadMagnetEmailsTable.status);

      const statusCounts: Record<string, number> = {};
      let total = 0;
      for (const row of counts) {
        statusCounts[row.status] = Number(row.count);
        total += Number(row.count);
      }

      const repliedRows = await db
        .select({ count: sql<number>`count(distinct ${leadMagnetEmailEventsTable.leadMagnetEmailId})::int` })
        .from(leadMagnetEmailEventsTable)
        .where(eq(leadMagnetEmailEventsTable.eventType, "email.replied"));
      const repliedCount = Number(repliedRows[0]?.count ?? 0);

      res.json({
        success: true,
        total,
        statusCounts,
        repliedCount,
        leads: rowsWithReply,
      });
    } catch (err) {
      logger.error({ err }, "Failed to load admin lead-magnet emails");
      res.status(500).json({ success: false, error: "Failed to load leads" });
    }
  },
);

adminRouter.get(
  "/admin/lead-magnet-emails/:id/events",
  adminAuth,
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!Number.isFinite(id) || id <= 0) {
      res.status(400).json({ success: false, error: "Invalid id" });
      return;
    }
    try {
      const events = await db
        .select({
          id: leadMagnetEmailEventsTable.id,
          eventType: leadMagnetEmailEventsTable.eventType,
          occurredAt: leadMagnetEmailEventsTable.occurredAt,
          payload: leadMagnetEmailEventsTable.payload,
        })
        .from(leadMagnetEmailEventsTable)
        .where(eq(leadMagnetEmailEventsTable.leadMagnetEmailId, id))
        .orderBy(desc(leadMagnetEmailEventsTable.occurredAt));
      res.json({ success: true, events });
    } catch (err) {
      logger.error({ err }, "Failed to load lead-magnet email events");
      res.status(500).json({ success: false, error: "Failed to load events" });
    }
  },
);

export default adminRouter;
