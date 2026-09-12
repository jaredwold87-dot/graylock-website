import assert from "node:assert/strict";
import test from "node:test";

// The route module only creates a pg pool at import time. A syntactically valid
// URL lets these tests exercise pure validation/auth helpers without opening a
// database connection or sending a lead.
process.env.DATABASE_URL ??= "postgres://promotion-test.invalid/promotion";

const promotion = await import("./promotion");
const migrations = await import("../lib/promotion-migrations");
const leads = await import("./leads");

test("campaign dismissal hides the popup even after caps or deadlines change", async () => {
  const assignment = { dismissedAt: "2026-01-01T00:00:00Z", ctaClickedAt: null, convertedAt: null };
  for (const dismissalFrequencyCapDays of [0, 1, 30]) {
    assert.equal(await promotion.suppressionFor(
      assignment as never, { dismissalFrequencyCapDays } as never, new Date("2026-10-01"),
    ), true);
  }
  assert.equal(await promotion.suppressionFor(
    { ...assignment, dismissedAt: null } as never, {} as never,
  ), false);
});

test("weighted allocation safety accepts only a complete 100% allocation", () => {
  const campaign = {
    trafficAllocationControl: 50,
    trafficAllocationVariantA: 50,
    trafficAllocationVariantB: 0,
  } as never;
  assert.equal(promotion.allocationsAreValid(campaign), true);
  assert.equal(
    promotion.allocationsAreValid({
      trafficAllocationControl: 50,
      trafficAllocationVariantA: 40,
      trafficAllocationVariantB: 0,
    } as never),
    false,
  );
});

test("popup wording comparison allocates every visitor to A or B, never control", () => {
  const campaign = {
    trafficAllocationControl: 0,
    trafficAllocationVariantA: 50,
    trafficAllocationVariantB: 50,
  } as never;
  for (let i = 0; i < 1000; i++) {
    assert.ok(["savings_led", "direction_led"].includes(promotion.chooseVariant(campaign)));
  }
  assert.equal(promotion.chooseVariant({
    trafficAllocationControl: 0, trafficAllocationVariantA: 100, trafficAllocationVariantB: 0,
  } as never), "savings_led");
  assert.equal(promotion.chooseVariant({
    trafficAllocationControl: 0, trafficAllocationVariantA: 0, trafficAllocationVariantB: 100,
  } as never), "direction_led");
});

test("popup-only migration preserves enablement and history while retiring unused control assignments", async () => {
  const queries: string[] = [];
  await migrations.runPromotionMigrations({
    async query<T = unknown>(text: string) {
      queries.push(text);
      if (text.includes("MAX(version)")) return { rows: [{ version: 4 }] } as T;
      return {} as T;
    },
  });
  const update = queries.find(q => q.includes("UPDATE promotion_campaigns"))!;
  assert.match(update, /traffic_allocation_control = 0/);
  assert.match(update, /traffic_allocation_variant_a = 50/);
  assert.match(update, /traffic_allocation_variant_b = 50/);
  assert.doesNotMatch(update, /enabled\s*=|trigger_minimum|manual_kill_switch\s*=/);
  const archive = queries.find(q => q.includes("UPDATE experiment_assignments"))!;
  assert.match(archive, /experiment_variant = 'control'/);
  assert.match(archive, /a\.converted_at IS NULL/);
  assert.match(archive, /a\.dismissed_at IS NULL/);
  assert.match(archive, /a\.cta_clicked_at IS NULL/);
  assert.doesNotMatch(queries.join("\n"), /DELETE FROM|TRUNCATE/);
  assert.ok(queries.includes("INSERT INTO promotion_schema_migrations (version) VALUES (5)"));
});

test("public path and tracking sanitizers remove navigation suffixes and reject PII", () => {
  assert.equal(promotion.sanitizePath("/pricing?email=person@example.com#plans", "page"), "/pricing");
  assert.equal(promotion.sanitizeTracking("newsletter-2026", "utm"), "newsletter-2026");
  assert.throws(
    () => promotion.sanitizeTracking("person@example.com", "utm"),
    /invalid value/,
  );
  assert.throws(
    () => promotion.sanitizePath("https://example.com/page", "page"),
    /must be a path/,
  );
});

test("constant-time credential helper distinguishes invalid credentials", () => {
  assert.equal(promotion.constantTimeEqual("admin", "admin"), true);
  assert.equal(promotion.constantTimeEqual("admin", "not-admin"), false);
  assert.equal(promotion.constantTimeEqual("admin", "ad"), false);
});

test("campaign activity is false without real date bounds", () => {
  const base = {
    enabled: true,
    manualKillSwitch: false,
    startDateTime: null,
    endDateTime: null,
  } as never;
  assert.equal(promotion.campaignIsLive(base), false);
});

test("monthly periods use Los Angeles calendar midnights across leap, DST, and year boundaries", () => {
  const leapFebruary = promotion.monthlyPeriodFor(
    "America/Los_Angeles",
    new Date("2024-02-29T20:00:00.000Z"),
  );
  assert.deepEqual(leapFebruary, {
    occurrenceKey: "2024-02",
    startDateTime: "2024-02-01T08:00:00.000Z",
    endDateTime: "2024-03-01T08:00:00.000Z",
    deadlineDisplayText: "February 29, 2024, 11:59 PM America/Los_Angeles",
  });
  const monthlyCampaign = {
    enabled: true,
    manualKillSwitch: false,
    recurrenceMode: "monthly",
    experimentId: "build-fee-waiver-v1",
    timezone: "America/Los_Angeles",
    startDateTime: null,
    endDateTime: null,
  } as never;
  assert.equal(
    promotion.campaignIsLive(monthlyCampaign, new Date(leapFebruary.startDateTime)),
    true,
  );
  const inLeapFebruaryOccurrence = (instant: string) => {
    const timestamp = new Date(instant).getTime();
    return timestamp >= new Date(leapFebruary.startDateTime).getTime() &&
      timestamp < new Date(leapFebruary.endDateTime).getTime();
  };
  assert.equal(
    inLeapFebruaryOccurrence(leapFebruary.endDateTime),
    false,
  );

  const dstMonth = promotion.monthlyPeriodFor(
    "America/Los_Angeles",
    new Date("2024-03-15T19:00:00.000Z"),
  );
  assert.equal(dstMonth.startDateTime, "2024-03-01T08:00:00.000Z");
  assert.equal(dstMonth.endDateTime, "2024-04-01T07:00:00.000Z");

  const december = promotion.monthlyPeriodFor(
    "America/Los_Angeles",
    new Date("2024-12-15T20:00:00.000Z"),
  );
  assert.equal(december.occurrenceKey, "2024-12");
  assert.equal(december.startDateTime, "2024-12-01T08:00:00.000Z");
  assert.equal(december.endDateTime, "2025-01-01T08:00:00.000Z");
});

test("recurring assignment IDs and report occurrence filters select an isolated month", () => {
  const campaign = {
    experimentId: "build-fee-waiver-v1",
    recurrenceMode: "monthly",
    timezone: "America/Los_Angeles",
    enabled: true,
    manualKillSwitch: false,
    startDateTime: null,
    endDateTime: null,
  } as never;
  const resolved = promotion.resolveCampaignForPublic(
    campaign,
    new Date("2025-01-02T12:00:00.000Z"),
  );
  assert.equal(resolved.occurrenceKey, "2025-01");
  assert.equal(resolved.experimentId, "build-fee-waiver-v1:2025-01");
  assert.equal(
    promotion.assignmentIsCurrentOccurrence(
      { experimentId: "build-fee-waiver-v1:2024-12" } as never,
      campaign,
      new Date("2025-01-02T12:00:00.000Z"),
    ),
    false,
  );
  assert.equal(
    promotion.occurrenceKeyForExperimentId("build-fee-waiver-v1", resolved.experimentId),
    "2025-01",
  );
  const filters = promotion.readReportFilters({ query: { occurrenceKey: "2025-01" } } as never);
  assert.equal(filters.occurrenceKey, "2025-01");
  assert.throws(
    () => promotion.parseOccurrenceKey("2025-13"),
    /occurrenceKey must be YYYY-MM/,
  );
});

test("an old monthly assignment is rejected after recurrence changes back to manual", () => {
  const manualCampaign = {
    experimentId: "build-fee-waiver-v1",
    recurrenceMode: "manual",
    timezone: "America/Los_Angeles",
    startDateTime: "2025-01-01T08:00:00.000Z",
    endDateTime: "2025-02-01T08:00:00.000Z",
  } as never;
  assert.equal(
    promotion.assignmentIsCurrentOccurrence(
      { experimentId: "build-fee-waiver-v1:2024-12" } as never,
      manualCampaign,
    ),
    false,
  );
  assert.equal(
    promotion.assignmentIsCurrentOccurrence(
      { experimentId: "build-fee-waiver-v1" } as never,
      manualCampaign,
    ),
    true,
  );
});

test("lead report serialization and CSV headers retain the monthly occurrence", () => {
  const currentLead = promotion.leadRowToApi({
    id: 7,
    experiment_id: "build-fee-waiver-v1:2025-03",
    campaign_base_experiment_id: "build-fee-waiver-v1",
  });
  const historicalLead = promotion.leadRowToApi({
    id: 8,
    experiment_id: "build-fee-waiver-v1",
    campaign_base_experiment_id: "build-fee-waiver-v1",
  });
  assert.equal(currentLead.experimentId, "build-fee-waiver-v1:2025-03");
  assert.equal(currentLead.occurrenceKey, "2025-03");
  assert.equal(historicalLead.occurrenceKey, null);
  assert.equal(promotion.LEAD_EXPORT_HEADERS.includes("experimentId"), true);
  assert.equal(promotion.LEAD_EXPORT_HEADERS.includes("occurrenceKey"), true);
});

test("monthly report evaluation has a period start for selected and current-month scopes", () => {
  const campaign = {
    recurrenceMode: "monthly",
    timezone: "America/Los_Angeles",
    startDateTime: null,
  } as never;
  assert.deepEqual(
    promotion.evaluationPeriodFor(campaign, "2024-02"),
    {
      occurrenceKey: "2024-02",
      startDateTime: "2024-02-01T08:00:00.000Z",
      scope: "selected_occurrence",
    },
  );
  assert.deepEqual(
    promotion.evaluationPeriodFor(campaign, undefined, new Date("2024-03-15T19:00:00.000Z")),
    {
      occurrenceKey: "2024-03",
      startDateTime: "2024-03-01T08:00:00.000Z",
      scope: "current_month",
    },
  );
});

test("report filter contract accepts every documented cohort filter", () => {
  const filters = promotion.readReportFilters({
    query: {
      startDate: "2026-09-01",
      endDate: "2026-09-30",
      campaignId: "september-build-fee-waiver",
      stage: "stage1",
      variant: "savings_led",
      trafficSource: "newsletter",
      utmCampaign: "september",
      deviceType: "desktop",
      businessCategory: "accounting",
      leadStatus: "qualified",
      assignedTeamMember: "team-member",
      monthlyPlan: "standard",
      occurrenceKey: "2026-09",
    },
  } as never);
  assert.equal(filters.variant, "savings_led");
  assert.equal(filters.assignedTeamMember, "team-member");
  assert.equal(filters.monthlyPlan, "standard");
  assert.equal(filters.occurrenceKey, "2026-09");
});

test("lead status and reason allowlists reject arbitrary workflow states", () => {
  assert.equal(promotion.LEAD_STATUSES.has("qualified"), true);
  assert.equal(promotion.NO_FIT_REASONS.has("timeline_mismatch"), true);
  assert.equal(promotion.LEAD_STATUSES.has("winner"), false);
  assert.equal(promotion.NO_FIT_REASONS.has("free_text"), false);
});

test("all outcome-bearing status fields map to deduplicated funnel events", () => {
  assert.equal(promotion.outcomeFor("fitCallStatus", "booked"), "fit_call_booked");
  assert.equal(promotion.outcomeFor("fitCallStatus", "held"), "fit_call_held");
  assert.equal(promotion.outcomeFor("firstPaymentStatus", "failed"), "payment_failed");
  assert.equal(
    promotion.outcomeFor("refundCancellationStatus", "cancelled"),
    "cancellation_or_payment_failure",
  );
});

test("promotion migrations commit under the advisory lock and roll back failures", async () => {
  const successfulQueries: string[] = [];
  await migrations.runPromotionMigrations({
    async query<T = unknown>(text: string) {
      successfulQueries.push(text);
      if (text.includes("MAX(version)")) return { rows: [{ version: 2 }] } as T;
      return {} as T;
    },
  });
  assert.equal(successfulQueries[0], "BEGIN");
  assert.equal(successfulQueries.some((query) => query.includes("pg_advisory_xact_lock")), true);
  assert.equal(successfulQueries.at(-1), "COMMIT");

  const failedQueries: string[] = [];
  await assert.rejects(
    migrations.runPromotionMigrations({
      async query<T = unknown>(text: string) {
        failedQueries.push(text);
        if (text.includes("pg_advisory_xact_lock")) throw new Error("mock database failure");
        return {} as T;
      },
    }),
    /mock database failure/,
  );
  assert.equal(failedQueries.at(-1), "ROLLBACK");
});

test("lead conflict resolution handles duplicate assignment and reused keys", () => {
  const existing = [{
    internal_lead_id: "lead-existing",
    assignment_id: 42,
    submission_id: "old-key",
    submission_payload_hash: "same-hash",
  }];
  assert.deepEqual(
    leads.resolveLeadConflict(existing, 42, "new-key", "different-hash"),
    { conflict: false, internalLeadId: "lead-existing" },
  );
  assert.deepEqual(
    leads.resolveLeadConflict(existing, 99, "old-key", "same-hash"),
    { conflict: true },
  );
  assert.deepEqual(
    leads.resolveLeadConflict(
      [{ ...existing[0], assignment_id: null, submission_id: "same-key" }],
      42,
      "same-key",
      "different-hash",
    ),
    { conflict: true },
  );
});

test("notification lease recovery and Resend idempotency are safe under races", async () => {
  const now = Date.now();
  assert.equal(leads.notificationLeaseDecision("sending", new Date(now + 60_000), new Date(now), now), "busy");
  assert.equal(leads.notificationLeaseDecision("sending", new Date(now - 60_000), new Date(now), now), "retryable");
  assert.equal(
    leads.notificationLeaseDecision("sending", new Date(now - 60_000), new Date(now - 25 * 60 * 60 * 1000), now),
    "manual_review",
  );
  assert.equal(leads.notificationLeaseDecision("sent", null, null, now), "sent");

  const calls: Array<{ payload: Record<string, unknown>; key: string }> = [];
  const resendMock = {
    async send(payload: Record<string, unknown>, options: { idempotencyKey: string }) {
      calls.push({ payload, key: options.idempotencyKey });
      return { data: { id: "mock-provider-id" } };
    },
  };
  const snapshot = { from: "server@example.invalid", to: ["ops@example.invalid"], text: "snapshot" };
  await Promise.all([
    leads.sendNotificationWithIdempotency(resendMock, snapshot, "lead-notification-lead-existing"),
    leads.sendNotificationWithIdempotency(resendMock, snapshot, "lead-notification-lead-existing"),
  ]);
  assert.equal(calls.length, 2);
  assert.equal(calls[0].key, calls[1].key);
  assert.deepEqual(calls[0].payload, calls[1].payload);
});