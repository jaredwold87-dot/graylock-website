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

      // The set of ids that should show a "Replied" indicator: either the
      // event matched this row directly, or the event matched a nudge whose
      // chain rolls up to this row (the initial send). We compute it once
      // here so the `?replied=true` filter stays consistent with what the
      // rolled-up indicator surfaces below.
      let repliedIdSet: Set<number> | null = null;
      if (repliedOnly) {
        const repliedRows = await db.execute<{ id: number }>(sql`
          WITH RECURSIVE chain AS (
            SELECT id, parent_email_id, id AS root_id
            FROM lead_magnet_emails
            WHERE parent_email_id IS NULL
            UNION ALL
            SELECT e.id, e.parent_email_id, c.root_id
            FROM lead_magnet_emails e
            JOIN chain c ON e.parent_email_id = c.id
          )
          SELECT DISTINCT id FROM (
            SELECT ev.lead_magnet_email_id AS id
            FROM lead_magnet_email_events ev
            WHERE ev.event_type = 'email.replied'
              AND ev.lead_magnet_email_id IS NOT NULL
            UNION
            SELECT c.root_id AS id
            FROM lead_magnet_email_events ev
            JOIN chain c ON c.id = ev.lead_magnet_email_id
            WHERE ev.event_type = 'email.replied'
          ) t
        `);
        const repliedIds = repliedRows.rows
          .map((r) => Number(r.id))
          .filter((n) => Number.isFinite(n));
        repliedIdSet = new Set(repliedIds);
      }

      const conditions = [];
      if (requestedStatuses.length > 0) {
        conditions.push(inArray(leadMagnetEmailsTable.status, requestedStatuses));
      }
      if (repliedOnly) {
        const ids = repliedIdSet ? [...repliedIdSet] : [];
        if (ids.length === 0) {
          // No replies anywhere — short-circuit to an empty result while
          // still returning the usual counts payload.
          conditions.push(sql`false`);
        } else {
          conditions.push(inArray(leadMagnetEmailsTable.id, ids));
        }
      }

      const rows = await (conditions.length > 0
        ? baseQuery.where(conditions.length === 1 ? conditions[0] : and(...conditions))
        : baseQuery);

      // Pull the earliest reply event per lead-magnet email so we can surface
      // a "Replied" indicator (date + first reply snippet) on each row.
      // A reply that matched a nudge is also rolled up to the initial send
      // (the root of the parentEmailId chain) so the indicator appears on
      // the lead's original Playbook send row, not just the nudge row.
      const leadIds = rows.map((r) => r.id);
      const replyMap = new Map<
        number,
        { occurredAt: Date; snippet: string | null }
      >();
      if (leadIds.length > 0) {
        const replyRows = await db.execute<{
          lead_magnet_email_id: number | null;
          root_id: number | null;
          occurred_at: Date | string;
          payload: unknown;
        }>(sql`
          WITH RECURSIVE chain AS (
            SELECT id, parent_email_id, id AS root_id
            FROM lead_magnet_emails
            WHERE parent_email_id IS NULL
            UNION ALL
            SELECT e.id, e.parent_email_id, c.root_id
            FROM lead_magnet_emails e
            JOIN chain c ON e.parent_email_id = c.id
          )
          SELECT
            ev.lead_magnet_email_id,
            c.root_id,
            ev.occurred_at,
            ev.payload
          FROM lead_magnet_email_events ev
          LEFT JOIN chain c ON c.id = ev.lead_magnet_email_id
          WHERE ev.event_type = 'email.replied'
            AND (
              ev.lead_magnet_email_id = ANY(${leadIds}::int[])
              OR c.root_id = ANY(${leadIds}::int[])
            )
          ORDER BY ev.occurred_at ASC
        `);

        const recordReply = (
          targetId: number,
          occurredAt: Date,
          payload: unknown,
        ) => {
          if (replyMap.has(targetId)) return;
          const snippetRaw =
            payload && typeof payload === "object"
              ? (payload as { textSnippet?: unknown }).textSnippet
              : null;
          const snippet =
            typeof snippetRaw === "string" ? snippetRaw.slice(0, 240) : null;
          replyMap.set(targetId, { occurredAt, snippet });
        };

        const leadIdSet = new Set(leadIds);
        const eventRows = (replyRows as unknown as {
          rows: Array<{
            lead_magnet_email_id: number | null;
            root_id: number | null;
            occurred_at: Date | string;
            payload: unknown;
          }>;
        }).rows;

        for (const row of eventRows) {
          const directId = row.lead_magnet_email_id;
          const rootId = row.root_id;
          const occurredAt =
            row.occurred_at instanceof Date
              ? row.occurred_at
              : new Date(row.occurred_at);
          // Surface the reply on the row it was matched to (existing behavior)…
          if (directId != null && leadIdSet.has(directId)) {
            recordReply(directId, occurredAt, row.payload);
          }
          // …and roll it up to the initial send at the root of the chain so
          // teams see "this lead replied" on the original Playbook send too.
          if (
            rootId != null &&
            rootId !== directId &&
            leadIdSet.has(rootId)
          ) {
            recordReply(rootId, occurredAt, row.payload);
          }
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
