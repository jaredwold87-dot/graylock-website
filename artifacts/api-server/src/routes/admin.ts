import { Router, type Request, type Response } from "express";
import { desc, eq, inArray, sql } from "drizzle-orm";
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

      const rows = await (requestedStatuses.length > 0
        ? baseQuery.where(inArray(leadMagnetEmailsTable.status, requestedStatuses))
        : baseQuery);

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

      res.json({
        success: true,
        total,
        statusCounts,
        leads: rows,
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
