import assert from "node:assert/strict";
import test from "node:test";
import { Resend } from "resend";

process.env.DATABASE_URL ??= "postgres://promotion-test.invalid/promotion";

const { pool } = await import("@workspace/db");
const { default: leadsRouter } = await import("./leads");

type LeadRecord = {
  id: number;
  internal_lead_id: string;
  assignment_id: number;
  submission_id: string;
  submission_payload_hash: string;
  email_notification_status: string;
  email_notification_lease_until: null;
  email_notification_attempted_at: string;
  email_notification_idempotency_key: string;
  email_notification_payload: Record<string, unknown> | null;
};

type QueryResult = {
  rows: Array<Record<string, unknown>>;
  rowCount?: number;
};

type QueryClient = {
  query: (text: string, values?: unknown[]) => Promise<QueryResult>;
  release: () => void;
};

type LeadRoute = {
  route?: {
    path?: string;
    stack: Array<{ handle: (req: unknown, res: unknown, next: () => void) => Promise<void> }>;
  };
};

function leadHandler(): NonNullable<LeadRoute["route"]>["stack"][number]["handle"] {
  const layer = (leadsRouter as unknown as { stack: LeadRoute[] }).stack.find(
    (candidate) => candidate.route?.path === "/leads",
  );
  const handler = layer?.route?.stack[0]?.handle;
  if (!handler) throw new Error("The /leads route handler was not found");
  return handler;
}

function responseRecorder(): {
  statusCode: number;
  body: Record<string, unknown> | undefined;
  status: (code: number) => unknown;
  json: (value: Record<string, unknown>) => unknown;
} {
  const response = {
    statusCode: 200,
    body: undefined as Record<string, unknown> | undefined,
    status(code: number) {
      response.statusCode = code;
      return response;
    },
    json(value: Record<string, unknown>) {
      response.body = value;
      return response;
    },
  };
  return response;
}

function fixtureAssignment(): Record<string, unknown> {
  const now = new Date().toISOString();
  return {
    id: 42,
    campaign_id: 9,
    campaign_id_text: "september-build-fee-waiver",
    experiment_id: "build-fee-waiver-v1",
    campaign_experiment_id: "build-fee-waiver-v1",
    anonymous_visitor_id: "visitor-1",
    experiment_variant: "savings_led",
    assignment_token: "assignment-token",
    assigned_at: now,
    dismissed_at: null,
    cta_clicked_at: now,
    converted_at: null,
    landing_page: "/",
    referrer: null,
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_term: null,
    utm_content: null,
    device_type: "desktop",
    first_touch_source: "direct",
    last_touch_source: "direct",
    campaign_name: "September Build-Fee Waiver",
    enabled: true,
    timezone: "America/Los_Angeles",
    recurrence_mode: "manual",
    start_date_time: null,
    end_date_time: null,
    deadline_display_text: null,
    eligible_page_paths: ["/"],
    traffic_allocation_control: 0,
    traffic_allocation_variant_a: 50,
    traffic_allocation_variant_b: 50,
    trigger_minimum_seconds: 25,
    trigger_minimum_scroll_depth: 0.55,
    dismissal_frequency_cap_days: 30,
    popup_enabled: true,
    dashboard_enabled: true,
    manual_kill_switch: false,
    standard_build_fee_display_value: "from $799",
    monthly_plan_disclosure: "Applicable monthly plan, scope, and terms apply.",
    legal_terms_url: null,
    privacy_policy_url: null,
    stage: "stage1",
    min_evaluation_days: 14,
    min_eligible_visitors: 200,
    version: 1,
    created_at: now,
    updated_at: now,
  };
}

function payload(
  idempotencyKey: string,
  promotionSource: "build_fee_waiver_popup" | "standard_homepage_cta",
): Record<string, unknown> {
  return {
    idempotency_key: idempotencyKey,
    first_name: promotionSource === "build_fee_waiver_popup" ? "Popup" : "Header",
    business_name: "Same Assignment LLC",
    email: `${promotionSource === "build_fee_waiver_popup" ? "popup" : "header"}@example.com`,
    assignment_token: "assignment-token",
    campaign_id: "september-build-fee-waiver",
    experiment_id: "build-fee-waiver-v1",
    experiment_variant: "savings_led",
    anonymous_visitor_id: "visitor-1",
    promotion_source: promotionSource,
  };
}

test("promotion and standard submissions share an assignment without sharing a lead or email", async () => {
  const assignment = fixtureAssignment();
  const leads: LeadRecord[] = [];
  const providerCalls: Array<{ payload: Record<string, unknown>; key: string }> = [];
  let nextLeadId = 1;
  const findLead = (internalLeadId: string) =>
    leads.find((lead) => lead.internal_lead_id === internalLeadId);

  const executeQuery = async (text: string, values: unknown[] = []): Promise<QueryResult> => {
    if (text.includes("FROM experiment_assignments a") && text.includes("a.assignment_token")) {
      return { rows: [assignment], rowCount: 1 };
    }
    if (text.includes("INSERT INTO promotion_lead_attribution")) {
      const [submissionId, hash, internalLeadId, assignmentId, ...rest] = values;
      if (leads.some((lead) => lead.submission_id === submissionId)) {
        return { rows: [], rowCount: 0 };
      }
      const record: LeadRecord = {
        id: nextLeadId++,
        internal_lead_id: String(internalLeadId),
        assignment_id: Number(assignmentId),
        submission_id: String(submissionId),
        submission_payload_hash: String(hash),
        email_notification_status: "pending",
        email_notification_lease_until: null,
        email_notification_attempted_at: new Date().toISOString(),
        email_notification_idempotency_key: String(rest.at(-1)),
        email_notification_payload: null,
      };
      leads.push(record);
      return { rows: [{ internal_lead_id: record.internal_lead_id }], rowCount: 1 };
    }
    if (text.includes("SELECT internal_lead_id, assignment_id, submission_id")) {
      const lead = leads.find((candidate) => candidate.submission_id === values[0]);
      return { rows: lead ? [lead] : [], rowCount: lead ? 1 : 0 };
    }
    if (text.includes("SELECT email_notification_status, email_notification_lease_until")) {
      const lead = findLead(String(values[0]));
      return {
        rows: lead ? [{
          email_notification_status: lead.email_notification_status,
          email_notification_lease_until: lead.email_notification_lease_until,
          email_notification_attempted_at: lead.email_notification_attempted_at,
        }] : [],
        rowCount: lead ? 1 : 0,
      };
    }
    if (text.includes("SELECT email_notification_idempotency_key, email_notification_payload")) {
      const lead = findLead(String(values[0]));
      return {
        rows: lead ? [{
          email_notification_idempotency_key: lead.email_notification_idempotency_key,
          email_notification_payload: lead.email_notification_payload,
        }] : [],
        rowCount: lead ? 1 : 0,
      };
    }
    if (text.includes("SET email_notification_status='sending'")) {
      const lead = findLead(String(values[0]));
      if (!lead || lead.email_notification_status !== "pending") {
        return { rows: [], rowCount: 0 };
      }
      lead.email_notification_status = "sending";
      return { rows: [{ internal_lead_id: lead.internal_lead_id }], rowCount: 1 };
    }
    if (text.includes("SET email_notification_payload=$2")) {
      const lead = findLead(String(values[0]));
      if (lead) lead.email_notification_payload = JSON.parse(String(values[1]));
      return { rows: [], rowCount: lead ? 1 : 0 };
    }
    if (text.includes("SET email_notification_status='sent'")) {
      const lead = findLead(String(values[0]));
      if (lead) lead.email_notification_status = "sent";
      return { rows: [], rowCount: lead ? 1 : 0 };
    }
    if (text.includes("INSERT INTO promotion_events")) {
      return { rows: [], rowCount: 1 };
    }
    return { rows: [], rowCount: 0 };
  };

  const poolLike = pool as unknown as {
    query: (text: string, values?: unknown[]) => Promise<QueryResult>;
    connect: () => Promise<QueryClient>;
  };
  const originalPoolQuery = poolLike.query;
  const originalPoolConnect = poolLike.connect;
  const originalConfiguration = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    LEADS_RECIPIENT_EMAIL: process.env.LEADS_RECIPIENT_EMAIL,
  };
  const emailsPrototype = Object.getPrototypeOf(new Resend("fixture").emails) as {
    send: (payload: Record<string, unknown>, options: { idempotencyKey: string }) => Promise<unknown>;
  };
  const originalEmailSend = emailsPrototype.send;

  process.env.RESEND_API_KEY = "fixture";
  process.env.RESEND_FROM_EMAIL = "sender@example.com";
  process.env.LEADS_RECIPIENT_EMAIL = "team@example.com";
  poolLike.query = executeQuery;
  poolLike.connect = async () => ({
    query: executeQuery,
    release() {},
  });
  emailsPrototype.send = async (emailPayload, options) => {
    providerCalls.push({ payload: emailPayload, key: options.idempotencyKey });
    return { data: { id: `provider-${providerCalls.length}` }, error: null };
  };

  try {
    const handle = leadHandler();
    const post = async (body: Record<string, unknown>) => {
      const response = responseRecorder();
      await handle({ body }, response, () => {});
      return response;
    };

    const popup = await post(payload("11111111-1111-4111-8111-111111111111", "build_fee_waiver_popup"));
    const standard = await post(payload("22222222-2222-4222-8222-222222222222", "standard_homepage_cta"));
    assert.equal(popup.statusCode, 200);
    assert.equal(standard.statusCode, 200);
    assert.equal(leads.length, 2);
    assert.equal(new Set(leads.map((lead) => lead.internal_lead_id)).size, 2);
    assert.equal(new Set(leads.map((lead) => lead.email_notification_idempotency_key)).size, 2);
    assert.deepEqual(
      providerCalls.map((call) => call.payload.subject),
      ["New Build Fee Waiver Promotion Lead", "Free Home Page Direction Request"],
    );

    const replay = await post(payload("11111111-1111-4111-8111-111111111111", "build_fee_waiver_popup"));
    assert.equal(replay.statusCode, 200);
    assert.equal(replay.body?.notification_status, "previously_sent");
    assert.equal(providerCalls.length, 2);

    const changed = await post({
      ...payload("11111111-1111-4111-8111-111111111111", "build_fee_waiver_popup"),
      note: "Changed after the first submission",
    });
    assert.equal(changed.statusCode, 409);
    assert.equal(providerCalls.length, 2);
    assert.equal(leads.length, 2);
  } finally {
    poolLike.query = originalPoolQuery;
    poolLike.connect = originalPoolConnect;
    emailsPrototype.send = originalEmailSend;
    for (const [name, value] of Object.entries(originalConfiguration)) {
      if (value === undefined) delete process.env[name];
      else process.env[name] = value;
    }
  }
});