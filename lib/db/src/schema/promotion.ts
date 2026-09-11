import {
  bigint,
  bigserial,
  boolean,
  decimal,
  index,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * The promotion tables are deliberately kept in a separate schema module.
 * The API uses parameterized SQL for the reporting queries (which keeps the
 * query planner happy for optional filters), while these definitions keep the
 * database contract available to other workspace packages and migrations.
 */
export const promotionCampaignsTable = pgTable(
  "promotion_campaigns",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    campaignId: varchar("campaign_id", { length: 120 }).notNull().unique(),
    experimentId: varchar("experiment_id", { length: 120 }).notNull(),
    enabled: boolean("enabled").notNull().default(false),
    campaignName: text("campaign_name").notNull(),
    timezone: varchar("timezone", { length: 80 }).notNull(),
    recurrenceMode: varchar("recurrence_mode", { length: 20 }).notNull().default("manual"),
    startDateTime: timestamp("start_date_time", { withTimezone: true }),
    endDateTime: timestamp("end_date_time", { withTimezone: true }),
    deadlineDisplayText: text("deadline_display_text"),
    eligiblePagePaths: jsonb("eligible_page_paths").$type<string[]>().notNull(),
    trafficAllocationControl: integer("traffic_allocation_control").notNull(),
    trafficAllocationVariantA: integer("traffic_allocation_variant_a").notNull(),
    trafficAllocationVariantB: integer("traffic_allocation_variant_b").notNull(),
    triggerMinimumSeconds: integer("trigger_minimum_seconds").notNull(),
    triggerMinimumScrollDepth: decimal("trigger_minimum_scroll_depth", {
      precision: 5,
      scale: 4,
    }).notNull(),
    dismissalFrequencyCapDays: integer("dismissal_frequency_cap_days").notNull(),
    popupEnabled: boolean("popup_enabled").notNull().default(true),
    dashboardEnabled: boolean("dashboard_enabled").notNull().default(true),
    manualKillSwitch: boolean("manual_kill_switch").notNull().default(false),
    standardBuildFeeDisplayValue: text("standard_build_fee_display_value"),
    monthlyPlanDisclosure: text("monthly_plan_disclosure"),
    legalTermsUrl: text("legal_terms_url"),
    privacyPolicyUrl: text("privacy_policy_url"),
    stage: varchar("stage", { length: 40 }).notNull().default("stage1"),
    minEvaluationDays: integer("min_evaluation_days").notNull().default(14),
    minEligibleVisitors: integer("min_eligible_visitors").notNull().default(200),
    version: integer("version").notNull().default(1),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index("idx_promotion_campaigns_experiment_id").on(table.experimentId),
    index("idx_promotion_campaigns_enabled").on(table.enabled),
  ],
);

export const promotionCampaignVersionsTable = pgTable(
  "promotion_campaign_versions",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    campaignId: bigint("campaign_id", { mode: "number" })
      .notNull()
      .references(() => promotionCampaignsTable.id, { onDelete: "cascade" }),
    version: integer("version").notNull(),
    config: jsonb("config").notNull(),
    changedBy: text("changed_by"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("idx_promotion_campaign_versions_unique").on(
      table.campaignId,
      table.version,
    ),
  ],
);

export const promotionAssignmentsTable = pgTable(
  "experiment_assignments",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    campaignId: bigint("campaign_id", { mode: "number" })
      .notNull()
      .references(() => promotionCampaignsTable.id, { onDelete: "cascade" }),
    experimentId: varchar("experiment_id", { length: 120 }).notNull(),
    anonymousVisitorId: varchar("anonymous_visitor_id", { length: 160 }).notNull(),
    experimentVariant: varchar("experiment_variant", { length: 30 }).notNull(),
    assignmentToken: varchar("assignment_token", { length: 160 }).notNull().unique(),
    landingPage: text("landing_page"),
    referrer: text("referrer"),
    utmSource: varchar("utm_source", { length: 100 }),
    utmMedium: varchar("utm_medium", { length: 100 }),
    utmCampaign: varchar("utm_campaign", { length: 100 }),
    utmTerm: varchar("utm_term", { length: 100 }),
    utmContent: varchar("utm_content", { length: 100 }),
    deviceType: varchar("device_type", { length: 30 }),
    firstTouchSource: varchar("first_touch_source", { length: 100 }),
    lastTouchSource: varchar("last_touch_source", { length: 100 }),
    assignedAt: timestamp("assigned_at", { withTimezone: true }).defaultNow().notNull(),
    dismissedAt: timestamp("dismissed_at", { withTimezone: true }),
    ctaClickedAt: timestamp("cta_clicked_at", { withTimezone: true }),
    convertedAt: timestamp("converted_at", { withTimezone: true }),
  },
  (table) => [
    uniqueIndex("idx_experiment_assignments_sticky").on(
      table.campaignId,
      table.experimentId,
      table.anonymousVisitorId,
    ),
    index("idx_experiment_assignments_variant").on(table.campaignId, table.experimentVariant),
  ],
);

export const promotionEventsTable = pgTable(
  "promotion_events",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    assignmentId: bigint("assignment_id", { mode: "number" })
      .notNull()
      .references(() => promotionAssignmentsTable.id, { onDelete: "cascade" }),
    eventId: varchar("event_id", { length: 160 }).notNull(),
    eventName: varchar("event_name", { length: 80 }).notNull(),
    eventTimestamp: timestamp("event_timestamp", { withTimezone: true }).defaultNow().notNull(),
    source: varchar("source", { length: 100 }),
    pagePath: text("page_path"),
    landingPage: text("landing_page"),
    referrer: text("referrer"),
    utmSource: varchar("utm_source", { length: 100 }),
    utmMedium: varchar("utm_medium", { length: 100 }),
    utmCampaign: varchar("utm_campaign", { length: 100 }),
    utmTerm: varchar("utm_term", { length: 100 }),
    utmContent: varchar("utm_content", { length: 100 }),
    deviceType: varchar("device_type", { length: 30 }),
    triggerType: varchar("trigger_type", { length: 50 }),
    secondsOnPage: integer("seconds_on_page"),
    scrollDepth: decimal("scroll_depth", { precision: 5, scale: 4 }),
    ctaLabel: varchar("cta_label", { length: 120 }),
    dismissalType: varchar("dismissal_type", { length: 40 }),
    statusReason: varchar("status_reason", { length: 80 }),
  },
  (table) => [
    uniqueIndex("idx_promotion_events_assignment_event").on(
      table.assignmentId,
      table.eventId,
    ),
    uniqueIndex("idx_promotion_events_assignment_name").on(
      table.assignmentId,
      table.eventName,
    ),
    index("idx_promotion_events_funnel").on(table.assignmentId, table.eventName),
  ],
);

export const promotionLeadAttributionTable = pgTable(
  "promotion_lead_attribution",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    submissionId: varchar("submission_id", { length: 160 }).notNull().unique(),
    submissionPayloadHash: varchar("submission_payload_hash", { length: 64 }),
    internalLeadId: varchar("internal_lead_id", { length: 100 }).notNull().unique(),
    assignmentId: bigint("assignment_id", { mode: "number" })
      .references(() => promotionAssignmentsTable.id, { onDelete: "set null" }),
    campaignId: varchar("campaign_id", { length: 120 }),
    experimentId: varchar("experiment_id", { length: 120 }),
    experimentVariant: varchar("experiment_variant", { length: 30 }),
    anonymousVisitorId: varchar("anonymous_visitor_id", { length: 160 }),
    promotionSource: varchar("promotion_source", { length: 60 }).notNull().default("standard_homepage_cta"),
    popupTriggerType: varchar("popup_trigger_type", { length: 50 }),
    popupImpressionTimestamp: timestamp("popup_impression_timestamp", { withTimezone: true }),
    popupCtaClickedTimestamp: timestamp("popup_cta_clicked_timestamp", { withTimezone: true }),
    firstTouchSource: varchar("first_touch_source", { length: 100 }),
    lastTouchSource: varchar("last_touch_source", { length: 100 }),
    utmSource: varchar("utm_source", { length: 100 }),
    utmMedium: varchar("utm_medium", { length: 100 }),
    utmCampaign: varchar("utm_campaign", { length: 100 }),
    utmTerm: varchar("utm_term", { length: 100 }),
    utmContent: varchar("utm_content", { length: 100 }),
    referrer: text("referrer"),
    landingPage: text("landing_page"),
    deviceType: varchar("device_type", { length: 30 }),
    businessName: text("business_name"),
    firstName: varchar("first_name", { length: 120 }),
    email: varchar("email", { length: 320 }),
    phone: varchar("phone", { length: 80 }),
    note: text("note"),
    websiteUrl: text("website_url"),
    primaryGoal: text("primary_goal"),
    serviceArea: text("service_area"),
    hasWebsite: boolean("has_website"),
    idealCustomer: text("ideal_customer"),
    brandingNotes: text("branding_notes"),
    heardAboutUs: text("heard_about_us"),
    submittedAt: timestamp("submitted_at", { withTimezone: true }),
    businessCategory: varchar("business_category", { length: 120 }),
    declaredWebsiteGoal: text("declared_website_goal"),
    declaredTiming: varchar("declared_timing", { length: 120 }),
    leadStatus: varchar("lead_status", { length: 60 }).notNull().default("new"),
    qualificationStatus: varchar("qualification_status", { length: 60 }),
    noFitReason: varchar("no_fit_reason", { length: 80 }),
    notes: text("notes"),
    fitCallDate: timestamp("fit_call_date", { withTimezone: true }),
    fitCallStatus: varchar("fit_call_status", { length: 60 }),
    directionStatus: varchar("direction_status", { length: 60 }),
    promotionAcceptanceStatus: varchar("promotion_acceptance_status", { length: 60 }),
    waivedBuildFeeAmount: decimal("waived_build_fee_amount", { precision: 12, scale: 2 }),
    monthlyPlan: varchar("monthly_plan", { length: 120 }),
    firstPaymentStatus: varchar("first_payment_status", { length: 60 }),
    launchStatus: varchar("launch_status", { length: 60 }),
    refundCancellationStatus: varchar("refund_cancellation_status", { length: 80 }),
    assignedTeamMember: varchar("assigned_team_member", { length: 120 }),
    emailNotificationStatus: varchar("email_notification_status", { length: 40 })
      .notNull()
      .default("pending"),
    emailNotificationError: text("email_notification_error"),
    emailNotificationSentAt: timestamp("email_notification_sent_at", { withTimezone: true }),
    emailNotificationLeaseUntil: timestamp("email_notification_lease_until", { withTimezone: true }),
    emailNotificationAttemptedAt: timestamp("email_notification_attempted_at", { withTimezone: true }),
    emailNotificationIdempotencyKey: varchar("email_notification_idempotency_key", { length: 160 }),
    emailNotificationPayload: jsonb("email_notification_payload"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index("idx_promotion_lead_attribution_campaign").on(table.campaignId, table.experimentVariant),
    index("idx_promotion_lead_attribution_status").on(table.leadStatus),
    uniqueIndex("idx_promotion_lead_attribution_assignment_unique").on(table.assignmentId),
  ],
);

export const promotionLeadStatusHistoryTable = pgTable(
  "promotion_lead_status_history",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    leadId: bigint("lead_id", { mode: "number" })
      .notNull()
      .references(() => promotionLeadAttributionTable.id, { onDelete: "cascade" }),
    internalLeadId: varchar("internal_lead_id", { length: 100 }).notNull(),
    fieldName: varchar("field_name", { length: 80 }).notNull(),
    oldValue: text("old_value"),
    newValue: text("new_value"),
    changedBy: text("changed_by"),
    changedAt: timestamp("changed_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [index("idx_promotion_lead_history_lead").on(table.leadId, table.changedAt)],
);

export const promotionEconomicRecordsTable = pgTable(
  "promotion_economic_records",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    leadId: bigint("lead_id", { mode: "number" })
      .notNull()
      .references(() => promotionLeadAttributionTable.id, { onDelete: "cascade" }),
    internalLeadId: varchar("internal_lead_id", { length: 100 }).notNull(),
    kind: varchar("kind", { length: 30 }).notNull(),
    amount: decimal("amount", { precision: 12, scale: 2 }).notNull(),
    costsComplete: boolean("costs_complete").notNull().default(false),
    createdBy: text("created_by"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index("idx_promotion_economics_lead").on(table.leadId),
    index("idx_promotion_economics_kind").on(table.kind),
  ],
);
