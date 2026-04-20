import {
  pgTable,
  text,
  serial,
  timestamp,
  integer,
  jsonb,
  index,
} from "drizzle-orm/pg-core";

export const leadMagnetEmailsTable = pgTable(
  "lead_magnet_emails",
  {
    id: serial("id").primaryKey(),
    email: text("email").notNull(),
    firstName: text("first_name").notNull(),
    resendEmailId: text("resend_email_id").unique(),
    leadMagnet: text("lead_magnet").notNull(),
    status: text("status").notNull().default("queued"),
    bounceType: text("bounce_type"),
    sentAt: timestamp("sent_at").defaultNow().notNull(),
    deliveredAt: timestamp("delivered_at"),
    openedAt: timestamp("opened_at"),
    clickedAt: timestamp("clicked_at"),
    bouncedAt: timestamp("bounced_at"),
    complainedAt: timestamp("complained_at"),
    deliveryDelayedAt: timestamp("delivery_delayed_at"),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => ({
    emailIdx: index("idx_lead_magnet_emails_email").on(table.email),
  }),
);

export type LeadMagnetEmail = typeof leadMagnetEmailsTable.$inferSelect;

export const leadMagnetEmailEventsTable = pgTable(
  "lead_magnet_email_events",
  {
    id: serial("id").primaryKey(),
    leadMagnetEmailId: integer("lead_magnet_email_id").references(
      () => leadMagnetEmailsTable.id,
    ),
    resendEmailId: text("resend_email_id"),
    email: text("email"),
    eventType: text("event_type").notNull(),
    svixId: text("svix_id").unique(),
    payload: jsonb("payload").notNull(),
    occurredAt: timestamp("occurred_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    emailIdIdx: index("idx_lead_magnet_email_events_lme_id").on(
      table.leadMagnetEmailId,
    ),
  }),
);

export type LeadMagnetEmailEvent = typeof leadMagnetEmailEventsTable.$inferSelect;

export const suppressedEmailsTable = pgTable("suppressed_emails", {
  email: text("email").primaryKey(),
  reason: text("reason").notNull(),
  bounceType: text("bounce_type"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type SuppressedEmail = typeof suppressedEmailsTable.$inferSelect;
