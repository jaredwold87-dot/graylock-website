import assert from "node:assert/strict";
import test from "node:test";

// The route module only creates a pg pool at import time. A syntactically valid
// URL lets these tests exercise pure validation/auth helpers without opening a
// database connection or sending a lead.
process.env.DATABASE_URL ??= "postgres://promotion-test.invalid/promotion";

const promotion = await import("./promotion");
const migrations = await import("../lib/promotion-migrations");
const leads = await import("./leads");

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
    },
  } as never);
  assert.equal(filters.variant, "savings_led");
  assert.equal(filters.assignedTeamMember, "team-member");
  assert.equal(filters.monthlyPlan, "standard");
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