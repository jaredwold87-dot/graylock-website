import { Router, type Request, type Response } from "express";
import { Resend } from "resend";
import { createHash, randomUUID } from "node:crypto";
import { pool } from "@workspace/db";
import { logger } from "../lib/logger";
import {
  assignmentByToken,
  assignmentIsCurrentOccurrence,
  requirePromotionAdmin,
  requirePromotionCsrf,
  requirePromotionOrigin,
} from "./promotion";

const leadsRouter = Router();
type PoolClientLike = {
  query<T = unknown>(text: string, values?: unknown[]): Promise<T>;
  release(): void;
};

export function resolveLeadConflict(
  rows: Array<Record<string, unknown>>,
  assignmentId: number,
  submissionId: string,
  submissionPayloadHash: string,
): { conflict: false; internalLeadId: string } | { conflict: true } {
  const bySubmission = rows.find((row) => String(row.submission_id) === submissionId);
  // assignment_id identifies the attribution context, not the submission.
  // Several independent forms can legitimately submit against the same
  // assignment, so never fall back to an arbitrary row found by assignment.
  if (!bySubmission) {
    return { conflict: true };
  }
  const matchingAssignment =
    String(bySubmission.assignment_id ?? "") === String(assignmentId);
  // A null hash is possible for rows written before payload hashes were
  // introduced. It cannot prove a mismatch, so preserve those rows' stable
  // retry behavior while still rejecting known changed payloads.
  const matchingPayload =
    !bySubmission.submission_payload_hash ||
    String(bySubmission.submission_payload_hash) === submissionPayloadHash;
  if (!matchingAssignment || !matchingPayload) return { conflict: true };
  return {
    conflict: false,
    internalLeadId: String(bySubmission.internal_lead_id),
  };
}

export function notificationLeaseDecision(
  status: string,
  leaseUntil: string | Date | null | undefined,
  attemptedAt: string | Date | null | undefined,
  now = Date.now(),
): "sent" | "busy" | "retryable" | "manual_review" | "unavailable" {
  if (status === "sent") return "sent";
  if (status === "manual_review") return "manual_review";
  const lease = leaseUntil ? new Date(leaseUntil).getTime() : 0;
  const stale = status === "sending" && lease <= now;
  if (status === "failed" || stale) {
    const attempted = attemptedAt ? new Date(attemptedAt).getTime() : 0;
    return stale && attempted > 0 && now - attempted >= 24 * 60 * 60 * 1000
      ? "manual_review"
      : "retryable";
  }
  return "busy";
}

export async function sendNotificationWithIdempotency<TPayload extends object, TResult>(
  sender: { send: (payload: TPayload, options: { idempotencyKey: string }) => Promise<TResult> },
  payload: TPayload,
  idempotencyKey: string,
): Promise<TResult> {
  return sender.send(payload, { idempotencyKey });
}

export type LeadNotificationResponseStatus =
  | "sent"
  | "previously_sent"
  | "busy"
  | "failed"
  | "manual_review";

type LeadNotificationResponse = {
  statusCode: number;
  body: {
    success: boolean;
    internal_lead_id: string;
    notification_status: LeadNotificationResponseStatus;
    error?: string;
  };
};

const RESEND_ERROR_EXPLANATIONS: Record<string, string> = {
  application_error: "Resend reported an application error while accepting the notification.",
  concurrent_idempotent_requests: "Resend is already processing this idempotent notification request.",
  daily_quota_exceeded: "Resend reported that the account's daily sending quota was exceeded.",
  invalid_access: "Resend rejected access to the requested notification operation.",
  invalid_attachment: "Resend rejected an attachment in the notification request.",
  internal_server_error: "Resend was temporarily unable to accept the notification.",
  invalid_api_key: "Resend rejected the configured API key.",
  invalid_from_address: "Resend rejected the configured sender address.",
  invalid_idempotency_key: "Resend rejected the notification idempotency key.",
  invalid_idempotent_request: "Resend rejected the idempotent notification request.",
  invalid_parameter: "Resend rejected a notification parameter.",
  invalid_region: "Resend rejected the configured sending region.",
  invalid_request_error: "Resend rejected the notification request.",
  missing_api_key: "Resend reported that an API key was not provided.",
  missing_required_field: "Resend reported a required notification field was missing.",
  method_not_allowed: "Resend rejected the notification operation.",
  monthly_quota_exceeded: "Resend reported that the account's monthly sending quota was exceeded.",
  not_found: "Resend could not find the requested notification resource.",
  rate_limit_exceeded: "Resend rate-limited the notification request.",
  restricted_api_key: "Resend rejected the configured API key permissions.",
  security_error: "Resend rejected the notification request for security reasons.",
  unprocessable_entity: "Resend could not process the notification request.",
  validation_error: "Resend rejected the notification request validation.",
};

const REQUIRED_NOTIFICATION_CONFIGURATION = [
  "RESEND_API_KEY",
  "RESEND_FROM_EMAIL",
  "LEADS_RECIPIENT_EMAIL",
] as const;

export function leadNotificationRecipients(
  env: NodeJS.ProcessEnv = process.env,
): string[] {
  const recipients = [
    env.LEADS_RECIPIENT_EMAIL,
    env.TEAM_EMAIL_TIM,
    env.OPTIONAL_SECONDARY_LEADS_RECIPIENT_EMAIL,
  ]
    .map((recipient) => typeof recipient === "string" ? recipient.trim() : "")
    .filter(Boolean);
  const seen = new Set<string>();
  return recipients.filter((recipient) => {
    const normalized = recipient.toLowerCase();
    if (seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
}

export function missingLeadNotificationConfiguration(
  env: NodeJS.ProcessEnv = process.env,
): string[] {
  const missing = REQUIRED_NOTIFICATION_CONFIGURATION.filter((name) => {
    const value = env[name];
    return typeof value !== "string" || value.trim().length === 0;
  });
  return [...missing];
}

class SafeNotificationError extends Error {
  constructor(public readonly diagnostic: string) {
    super(diagnostic);
    this.name = "SafeNotificationError";
  }
}

export function notificationErrorDiagnostic(error: unknown): string {
  if (error instanceof SafeNotificationError) {
    return error.diagnostic;
  }
  const providerName =
    error && typeof error === "object" && "name" in error && typeof error.name === "string"
      ? error.name.trim().toLowerCase()
      : "";
  const explanation = providerName ? RESEND_ERROR_EXPLANATIONS[providerName] : undefined;
  if (explanation) {
    return `resend_${providerName}: ${explanation}`;
  }
  return "notification_failed: The notification provider did not accept the request; retry or use the authenticated resend action.";
}

export function notificationConfigurationDiagnostic(missing: string[]): string {
  return `configuration_missing: ${missing.join(", ")}; notification email is not configured.`;
}

export function inspectNotificationSendResult(result: unknown):
  | { ok: true; providerMessageId: string }
  | { ok: false; diagnostic: string } {
  const record = result && typeof result === "object"
    ? result as { data?: unknown; error?: unknown }
    : {};
  if (record.error) {
    return { ok: false, diagnostic: notificationErrorDiagnostic(record.error) };
  }
  const data = record.data && typeof record.data === "object"
    ? record.data as { id?: unknown }
    : undefined;
  if (typeof data?.id !== "string" || data.id.trim().length === 0) {
    return {
      ok: false,
      diagnostic: "resend_missing_message_id: Resend did not return a message ID for the notification.",
    };
  }
  return { ok: true, providerMessageId: data.id };
}

export function notificationResponseDecision(
  status: string,
  leaseUntil: string | Date | null | undefined,
  attemptedAt: string | Date | null | undefined,
  alreadyStored = false,
  now = Date.now(),
): LeadNotificationResponseStatus {
  if (status === "sent") return alreadyStored ? "previously_sent" : "sent";
  if (status === "manual_review") return "manual_review";
  if (status === "failed") return "failed";
  // A request which could not acquire its lease must never send. Even if a
  // stale lease is theoretically retryable, another request owns (or raced
  // for) the claim, so the caller can use the authenticated resend action.
  const leaseDecision = notificationLeaseDecision(status, leaseUntil, attemptedAt, now);
  return leaseDecision === "manual_review" ? "manual_review" : "busy";
}

export function notificationResponse(
  decision: LeadNotificationResponseStatus,
  internalLeadId: string,
): LeadNotificationResponse {
  if (decision === "sent" || decision === "previously_sent") {
    return {
      statusCode: 200,
      body: {
        success: true,
        internal_lead_id: internalLeadId,
        notification_status: decision,
      },
    };
  }
  const message = decision === "busy"
    ? "Your request was saved and its email notification is still processing. Please wait a moment before trying again."
    : decision === "manual_review"
      ? "Your request was saved, but we couldn't confirm its email notification. Please contact hello@graylockdigital.com."
      : "Your request was saved, but we couldn't email our team. Please contact hello@graylockdigital.com.";
  return {
    statusCode: decision === "failed" ? 502 : 409,
    body: {
      success: false,
      error: message,
      internal_lead_id: internalLeadId,
      notification_status: decision,
    },
  };
}

interface LeadPayload {
  idempotency_key: string;
  first_name: string;

  business_name: string;

  email: string;

  phone?: string;
  /** Optional free-text note from the quick discovery-call form. */

  note?: string;
  // Legacy wizard fields — optional; rendered only when present.

  service_area?: string;

  has_website?: boolean;

  website_url?: string;

  primary_goal?: string;

  ideal_customer?: string;

  branding_notes?: string;

  heard_about_us?: string;
  // Attribution context (optional)

  industry?: string;

  lead_source_label?: string;

  landing_page?: string;

  local_mls?: string;

  idx_need?: string;

  realtor_goals?: string;
  // Realtor fit-call fields (current realtor landing form)

  role?: string;

  mls?: string;

  need_property_search?: string;

  launch_timing?: string;
  // Well-driller campaign context (optional — present only for well-driller leads)

  submitted_at?: string;

  utm_source?: string;

  utm_medium?: string;

  utm_campaign?: string;

  utm_term?: string;

  utm_content?: string;

  market?: string;

  rep?: string;

  source?: string;

  main_services?: string[];

  desired_jobs?: string;

  website_goal?: string;

  preferred_contact_method?: string;
  // Cabinet-maker campaign fields (optional — present only for cabinet-maker leads)

  main_project_types?: string[];

  desired_outcomes?: string[];
  // Auctioneer campaign fields (optional — present only for auctioneer leads)

  auction_types?: string[];


  /** Reflection-card label the visitor selected before clicking through. */
  stated_goal?: string;

  /** CTA intent carried from the landing page (e.g. "free_demo"). */
  intent?: string;

  referrer?: string;

  // Promotion attribution is hidden metadata supplied by the existing form.
  // The assignment token is validated server-side and never trusted for the
  // variant value sent downstream.
  assignment_token?: string;
  campaign_id?: string;
  experiment_id?: string;
  experiment_variant?: string;
  anonymous_visitor_id?: string;
  promotion_source?: string;
  popup_trigger_type?: string;
  popup_impression_timestamp?: string;
  popup_cta_clicked_timestamp?: string;
  first_touch_source?: string;
  last_touch_source?: string;
  device_type?: string;
  consent?: boolean;
  terms_consent?: boolean;
  privacy_consent?: boolean;
  marketing_consent?: boolean;
  sms_consent?: boolean;
}

leadsRouter.post("/leads", async (req: Request, res: Response) => {
  const payload: LeadPayload = req.body && typeof req.body === "object" ? req.body : {};
  const isRealtorSubmission =
    payload.industry === "real-estate" || payload.lead_source_label === "Realtor Landing Page";
  const firstName = typeof payload.first_name === "string" ? payload.first_name.trim() : "";
  const businessName = typeof payload.business_name === "string" ? payload.business_name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  if (
    typeof payload.idempotency_key !== "string" ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(payload.idempotency_key)
  ) {
    res.status(400).json({ error: "Valid idempotency_key is required" });
    return;
  }
  for (const consentField of [
    "consent",
    "terms_consent",
    "privacy_consent",
    "marketing_consent",
    "sms_consent",
  ] as const) {
    if (payload[consentField] !== undefined && typeof payload[consentField] !== "boolean") {
      res.status(400).json({ error: `${consentField} must be boolean when provided` });
      return;
    }
  }
  if (
    firstName.length === 0 ||
    (!isRealtorSubmission && businessName.length === 0) ||
    firstName.length > 120 ||
    businessName.length > 240 ||
    email.length > 320 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    res.status(400).json({ error: "Valid name, business name, and email are required" });
    return;
  }
  payload.first_name = firstName;
  payload.business_name = businessName;
  payload.email = email;
  const submissionPayloadHash = createHash("sha256")
    .update(JSON.stringify(
      Object.fromEntries(
        Object.entries(payload)
          .filter(([key]) => key !== "assignment_token")
          .sort(([left], [right]) => left.localeCompare(right)),
      ),
    ))
    .digest("hex");
  const submittedAt = payload.submitted_at || new Date().toISOString();
  let internalLeadId: string = randomUUID();
  const notificationIdempotencyKey = `lead-notification-${internalLeadId}`;
  // The client-facing idempotency key is the durable submission identifier
  // used by the existing lead store's unique submission_id column.
  const submissionId = payload.idempotency_key;
  let notificationClaimed = false;

  let promotionAssignment: Awaited<ReturnType<typeof assignmentByToken>> = null;
  const hasPromotionMetadata = Boolean(
    payload.assignment_token ||
    payload.campaign_id ||
    payload.experiment_id ||
    payload.experiment_variant ||
    payload.anonymous_visitor_id ||
    payload.promotion_source,
  );
  if (hasPromotionMetadata) {
    if (
      !payload.assignment_token ||
      typeof payload.assignment_token !== "string" ||
      payload.assignment_token.length > 160 ||
      !/^[A-Za-z0-9_-]+$/.test(payload.assignment_token)
    ) {
      res.status(400).json({ error: "Valid promotion assignment metadata is required" });
      return;
    }
    promotionAssignment = await assignmentByToken(payload.assignment_token);
    if (!promotionAssignment) {
      res.status(400).json({ error: "Invalid promotion assignment metadata" });
      return;
    }
    const { assignment, campaign } = promotionAssignment;
    if (!assignmentIsCurrentOccurrence(assignment, campaign)) {
      res.status(400).json({ error: "Promotion assignment belongs to an expired monthly occurrence" });
      return;
    }
    if (
      (payload.campaign_id && payload.campaign_id !== campaign.campaignId) ||
      (payload.experiment_id && payload.experiment_id !== assignment.experimentId) ||
      (payload.experiment_variant && payload.experiment_variant !== assignment.experimentVariant) ||
      (payload.anonymous_visitor_id && payload.anonymous_visitor_id !== assignment.anonymousVisitorId) ||
      (payload.promotion_source &&
        !["build_fee_waiver_popup", "standard_homepage_cta"].includes(payload.promotion_source)) ||
      (payload.promotion_source === "build_fee_waiver_popup" &&
        assignment.experimentVariant === "control")
    ) {
      res.status(400).json({ error: "Promotion attribution does not match the assignment" });
      return;
    }
  }
  const promotionSource = promotionAssignment
    ? payload.promotion_source || "standard_homepage_cta"
    : "standard_homepage_cta";
  let storedLead = false;
  if (promotionAssignment) {
    const promotionTimestamp = (value: string | undefined): Date | null => {
      if (!value) return null;
      const parsed = new Date(value);
      return Number.isNaN(parsed.getTime()) ? null : parsed;
    };
    try {
      const { assignment, campaign } = promotionAssignment;
      const client = await pool.connect();
      try {
        await client.query("BEGIN");
        const inserted = await client.query(
        `
          INSERT INTO promotion_lead_attribution (
            submission_id, submission_payload_hash, internal_lead_id, assignment_id, campaign_id, experiment_id,
            experiment_variant, anonymous_visitor_id, promotion_source,
            popup_trigger_type, popup_impression_timestamp,
            popup_cta_clicked_timestamp, first_touch_source, last_touch_source,
            utm_source, utm_medium, utm_campaign, utm_term, utm_content,
            referrer, landing_page, device_type, business_name, first_name,
            email, phone, note, website_url, primary_goal, service_area,
            has_website, ideal_customer, branding_notes, heard_about_us,
            submitted_at, business_category, declared_website_goal, declared_timing,
            email_notification_idempotency_key
          ) VALUES (
            $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,
            $20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,
            $36,$37,$38,$39
          )
          ON CONFLICT (submission_id) DO NOTHING
          RETURNING internal_lead_id
        `,
        [
          submissionId,
          submissionPayloadHash,
          internalLeadId,
          assignment.id,
          campaign.campaignId,
          assignment.experimentId,
          assignment.experimentVariant,
          assignment.anonymousVisitorId,
          promotionSource,
          payload.popup_trigger_type || null,
          promotionTimestamp(payload.popup_impression_timestamp),
          promotionTimestamp(payload.popup_cta_clicked_timestamp),
          assignment.firstTouchSource,
          assignment.lastTouchSource,
          assignment.utmSource,
          assignment.utmMedium,
          assignment.utmCampaign,
          assignment.utmTerm,
          assignment.utmContent,
          assignment.referrer,
          assignment.landingPage,
          assignment.deviceType,
          payload.business_name || null,
          payload.first_name || null,
          payload.email || null,
          payload.phone || null,
          payload.note || null,
          payload.website_url || null,
          payload.primary_goal || null,
          payload.service_area || null,
          typeof payload.has_website === "boolean" ? payload.has_website : null,
          payload.ideal_customer || null,
          payload.branding_notes || null,
          payload.heard_about_us || null,
          submittedAt,
          payload.industry || null,
          payload.website_goal || payload.primary_goal || null,
          payload.launch_timing || null,
          notificationIdempotencyKey,
        ],
        );
        storedLead = true;
        if ((inserted.rowCount ?? 0) === 0) {
          const existingResult = await client.query(
            `
              SELECT internal_lead_id, assignment_id, submission_id,
                submission_payload_hash, email_notification_status,
                email_notification_lease_until, email_notification_attempted_at
              FROM promotion_lead_attribution
              WHERE submission_id=$1
              FOR UPDATE
            `,
            [submissionId],
          );
          const conflictResolution = resolveLeadConflict(
            existingResult.rows as Array<Record<string, unknown>>,
            assignment.id,
            submissionId,
            submissionPayloadHash,
          );
          if (conflictResolution.conflict) {
            await client.query("ROLLBACK");
            res.status(409).json({ error: "Submission idempotency key was reused with different attribution or data" });
            return;
          }
          internalLeadId = conflictResolution.internalLeadId;
          const claimed = await client.query(
            `
              UPDATE promotion_lead_attribution
              SET email_notification_status='sending',
                email_notification_lease_until=NOW() + INTERVAL '15 minutes',
                email_notification_attempted_at=NOW(),
                email_notification_idempotency_key=COALESCE(email_notification_idempotency_key,$2),
                updated_at=NOW()
              WHERE internal_lead_id=$1
                AND (email_notification_status='pending'
                  OR (email_notification_status='sending'
                    AND email_notification_lease_until < NOW()
                    AND (email_notification_attempted_at IS NULL
                      OR email_notification_attempted_at >= NOW() - INTERVAL '24 hours')))
              RETURNING internal_lead_id
            `,
            [internalLeadId, notificationIdempotencyKey],
          );
          if ((claimed.rowCount ?? 0) === 0) {
            await client.query("COMMIT");
            const existing = existingResult.rows[0] as Record<string, unknown> | undefined;
            const response = notificationResponse(
              notificationResponseDecision(
                String(existing?.email_notification_status || "pending"),
                existing?.email_notification_lease_until as string | Date | null | undefined,
                existing?.email_notification_attempted_at as string | Date | null | undefined,
                true,
              ),
              internalLeadId,
            );
            res.status(response.statusCode).json(response.body);
            return;
          }
          notificationClaimed = true;
        } else {
          const claimed = await client.query(
            `
              UPDATE promotion_lead_attribution
              SET email_notification_status='sending',
                email_notification_lease_until=NOW() + INTERVAL '15 minutes',
                email_notification_attempted_at=NOW(),
                email_notification_idempotency_key=COALESCE(email_notification_idempotency_key,$2),
                updated_at=NOW()
              WHERE internal_lead_id=$1
                AND (email_notification_status='pending'
                  OR (email_notification_status='sending'
                    AND email_notification_lease_until < NOW()
                    AND (email_notification_attempted_at IS NULL
                      OR email_notification_attempted_at >= NOW() - INTERVAL '24 hours')))
              RETURNING internal_lead_id
            `,
            [internalLeadId, notificationIdempotencyKey],
          );
          notificationClaimed = (claimed.rowCount ?? 0) > 0;
        }
        const formEvent = promotionSource === "build_fee_waiver_popup"
          ? "promo_form_submitted"
          : "standard_form_submitted";
        await client.query(
          `
            INSERT INTO promotion_events
              (assignment_id, event_id, event_name, source)
            VALUES ($1,$2,$3,'lead_submission')
            ON CONFLICT DO NOTHING
          `,
          [assignment.id, internalLeadId, formEvent],
        );
        await client.query(
          "UPDATE experiment_assignments SET converted_at=COALESCE(converted_at,NOW()) WHERE id=$1",
          [assignment.id],
        );
        await client.query("COMMIT");
      } catch (error) {
        await client.query("ROLLBACK");
        throw error;
      } finally {
        client.release();
      }
    } catch (err) {
      logger.error({ err }, "Failed to persist promotion lead attribution");
      res.status(500).json({ error: "Failed to save lead attribution" });
      return;
    }
  }
  if (!promotionAssignment) {
    try {
      const client = await pool.connect();
      try {
        await client.query("BEGIN");
        const inserted = await client.query(
          `
            INSERT INTO promotion_lead_attribution (
              submission_id, submission_payload_hash, internal_lead_id, assignment_id, campaign_id, experiment_id,
              experiment_variant, anonymous_visitor_id, promotion_source,
              popup_trigger_type, popup_impression_timestamp, popup_cta_clicked_timestamp,
              first_touch_source, last_touch_source, utm_source, utm_medium,
              utm_campaign, utm_term, utm_content, referrer, landing_page, device_type,
              business_name, first_name, email, phone, note, website_url, primary_goal,
              service_area, has_website, ideal_customer, branding_notes, heard_about_us,
              submitted_at, business_category, declared_website_goal, declared_timing,
              email_notification_idempotency_key
            ) VALUES (
              $1,$2,$3,NULL,NULL,NULL,NULL,NULL,$4,NULL,NULL,NULL,$5,$6,$7,$8,$9,$10,$11,
              $12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,
              $30,$31
            )
            ON CONFLICT (submission_id) DO NOTHING
            RETURNING internal_lead_id
          `,
          [
            submissionId,
            submissionPayloadHash,
            internalLeadId,
            promotionSource,
            payload.first_touch_source || null,
            payload.last_touch_source || null,
            payload.utm_source || null,
            payload.utm_medium || null,
            payload.utm_campaign || null,
            payload.utm_term || null,
            payload.utm_content || null,
            payload.referrer || null,
            payload.landing_page || null,
            payload.device_type || null,
            payload.business_name || null,
            payload.first_name || null,
            payload.email || null,
            payload.phone || null,
            payload.note || null,
            payload.website_url || null,
            payload.primary_goal || null,
            payload.service_area || null,
            typeof payload.has_website === "boolean" ? payload.has_website : null,
            payload.ideal_customer || null,
            payload.branding_notes || null,
            payload.heard_about_us || null,
            submittedAt,
            payload.industry || null,
            payload.website_goal || payload.primary_goal || null,
            payload.launch_timing || null,
            notificationIdempotencyKey,
          ],
        );
        storedLead = true;
        if ((inserted.rowCount ?? 0) === 0) {
          const existing = await client.query(
            `
              SELECT internal_lead_id, submission_payload_hash, email_notification_status,
                email_notification_lease_until, email_notification_attempted_at
              FROM promotion_lead_attribution WHERE submission_id=$1 LIMIT 1
            `,
            [submissionId],
          );
          if (
            existing.rows[0]?.submission_payload_hash &&
            String(existing.rows[0].submission_payload_hash) !== submissionPayloadHash
          ) {
            await client.query("ROLLBACK");
            res.status(409).json({ error: "Idempotency key was reused with different submission data" });
            return;
          }
          internalLeadId = String(existing.rows[0]?.internal_lead_id ?? internalLeadId);
          const claimed = await client.query(
            `
              UPDATE promotion_lead_attribution
              SET email_notification_status='sending',
                email_notification_lease_until=NOW() + INTERVAL '15 minutes',
                email_notification_attempted_at=NOW(),
                email_notification_idempotency_key=COALESCE(email_notification_idempotency_key,$2),
                updated_at=NOW()
              WHERE submission_id=$1
                AND (email_notification_status='pending'
                  OR (email_notification_status='sending'
                    AND email_notification_lease_until < NOW()
                    AND (email_notification_attempted_at IS NULL
                      OR email_notification_attempted_at >= NOW() - INTERVAL '24 hours')))
              RETURNING internal_lead_id
            `,
            [submissionId, notificationIdempotencyKey],
          );
          if ((claimed.rowCount ?? 0) === 0) {
            await client.query("COMMIT");
            const existingLead = existing.rows[0] as Record<string, unknown> | undefined;
            const response = notificationResponse(
              notificationResponseDecision(
                String(existingLead?.email_notification_status || "pending"),
                existingLead?.email_notification_lease_until as string | Date | null | undefined,
                existingLead?.email_notification_attempted_at as string | Date | null | undefined,
                true,
              ),
              internalLeadId,
            );
            res.status(response.statusCode).json(response.body);
            return;
          }
          notificationClaimed = true;
        } else {
          const claimed = await client.query(
            `
              UPDATE promotion_lead_attribution
              SET email_notification_status='sending',
                email_notification_lease_until=NOW() + INTERVAL '15 minutes',
                email_notification_attempted_at=NOW(),
                email_notification_idempotency_key=COALESCE(email_notification_idempotency_key,$2),
                updated_at=NOW()
              WHERE submission_id=$1
                AND (email_notification_status='pending'
                  OR (email_notification_status='sending'
                    AND email_notification_lease_until < NOW()
                    AND (email_notification_attempted_at IS NULL
                      OR email_notification_attempted_at >= NOW() - INTERVAL '24 hours')))
              RETURNING internal_lead_id
            `,
            [submissionId, notificationIdempotencyKey],
          );
          notificationClaimed = (claimed.rowCount ?? 0) > 0;
        }
        await client.query("COMMIT");
      } catch (error) {
        await client.query("ROLLBACK");
        throw error;
      } finally {
        client.release();
      }
    } catch (error) {
      logger.error({ err: error }, "Failed to persist ordinary lead submission");
      res.status(500).json({ error: "Failed to save lead submission" });
      return;
    }
  }
  if (!notificationClaimed) {
    try {
      const notificationState = await pool.query(
        `
          SELECT email_notification_status, email_notification_lease_until,
            email_notification_attempted_at
          FROM promotion_lead_attribution WHERE internal_lead_id=$1 LIMIT 1
        `,
        [internalLeadId],
      );
      const state = notificationState.rows[0] as Record<string, unknown> | undefined;
      const response = notificationResponse(
        notificationResponseDecision(
          String(state?.email_notification_status || "pending"),
          state?.email_notification_lease_until as string | Date | null | undefined,
          state?.email_notification_attempted_at as string | Date | null | undefined,
          true,
        ),
        internalLeadId,
      );
      res.status(response.statusCode).json(response.body);
    } catch (error) {
      logger.error({ error: notificationErrorDiagnostic(error) }, "Failed to read lead notification state");
      const response = notificationResponse(
        "failed",
        internalLeadId,
      );
      res.status(response.statusCode).json(response.body);
    }
    return;
  }

  const isRealtorLead =
    payload.lead_source_label === "Realtor Landing Page" ||
    payload.industry === "real-estate";

  const isWellDrillerLead =
    payload.lead_source_label === "Well Driller Landing Page" ||
    payload.industry === "well-drilling";

  const isCabinetMakerLead =
    payload.lead_source_label === "Cabinet Maker Landing Page" ||
    payload.industry === "cabinet-making";

  const isAuctioneerLead =
    payload.lead_source_label === "Auctioneer Landing Page" ||
    payload.industry === "auctioneering";

  const truncate = (value: string, max = 60) =>
    value.length > max ? `${value.slice(0, max - 1).trimEnd()}…` : value;

  const mainServices = Array.isArray(payload.main_services)
    ? payload.main_services.filter((s) => typeof s === "string" && s.trim()).join(", ")
    : "";

  const mainProjectTypes = Array.isArray(payload.main_project_types)
    ? payload.main_project_types.filter((s) => typeof s === "string" && s.trim()).join(", ")
    : "";

  const desiredOutcomes = Array.isArray(payload.desired_outcomes)
    ? payload.desired_outcomes.filter((s) => typeof s === "string" && s.trim()).join(", ")
    : "";

  const auctionTypes = Array.isArray(payload.auction_types)
    ? payload.auction_types.filter((s) => typeof s === "string" && s.trim()).join(", ")
    : "";

  // Subject shows the primary service area (spec: Business Name — Primary
  // Service Area); campaign market is the fallback when the area is missing.
  const wellDrillerServiceArea =
    (payload.service_area ? truncate(payload.service_area.trim()) : "") ||
    (payload.market || "").trim() ||
    "Service Area TBD";

  const cabinetMakerServiceArea =
    (payload.service_area ? truncate(payload.service_area.trim()) : "") ||
    (payload.market || "").trim() ||
    "Service Area TBD";

  const auctioneerServiceArea =
    (payload.service_area ? truncate(payload.service_area.trim()) : "") ||
    (payload.market || "").trim() ||
    "Service Area TBD";
  const utmPairs = (
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const
  )
    .filter((key) => payload[key])
    .map((key) => `${key}=${payload[key]}`);

  const realtorLines = isRealtorLead
    ? [
        "",
        "— Realtor Landing Page lead —",
        `Landing page: ${payload.landing_page || "/websites-for-realtors"}`,
        `Industry: ${payload.industry || "real-estate"}`,
        ...(payload.role ? [`Role: ${payload.role}`] : []),
        ...(payload.market ? [`Market / service area: ${payload.market}`] : []),
        ...(payload.mls ? [`MLS: ${payload.mls}`] : []),
        ...(payload.need_property_search
          ? [`Needs property search: ${payload.need_property_search}`]
          : []),
        ...(payload.launch_timing
          ? [`Target launch timing: ${payload.launch_timing}`]
          : []),
        ...(payload.intent ? [`Intent: ${payload.intent}`] : []),
        ...(payload.referrer ? [`Referrer: ${payload.referrer}`] : []),
        // Legacy realtor-form fields — kept for old payloads.
        ...(payload.local_mls ? [`Local MLS: ${payload.local_mls}`] : []),
        ...(payload.idx_need ? [`Needs IDX property search: ${payload.idx_need}`] : []),
        ...(payload.realtor_goals ? [`Realtor goals: ${payload.realtor_goals}`] : []),
        ...(utmPairs.length ? [`UTM: ${utmPairs.join(", ")}`] : []),
      ].join("\n")
    : "";

  const wellDrillerLines = isWellDrillerLead
    ? [
        "",
        "— Well Driller Custom Demo lead —",
        `Landing page: ${payload.landing_page || "/websites-for-well-drillers"}`,
        `Industry: ${payload.industry || "well-drilling"}`,
        ...(payload.intent ? [`Intent: ${payload.intent}`] : []),
        ...(payload.stated_goal ? [`Stated goal (reflection card): ${payload.stated_goal}`] : []),
        `Market: ${payload.market || "Not provided"}`,
        `Rep: ${payload.rep || "Not provided"}`,
        `Source: ${payload.source || "Not provided"}`,
        `Main services: ${mainServices || "Not provided"}`,
        `Desired jobs: ${payload.desired_jobs || "Not provided"}`,
        `Website goal: ${payload.website_goal || "Not provided"}`,
        `Preferred contact method: ${payload.preferred_contact_method || "Not provided"}`,
        `Referrer: ${payload.referrer || "Not provided"}`,
        ...(utmPairs.length ? [`UTM: ${utmPairs.join(", ")}`] : []),
      ].join("\n")
    : "";

  const cabinetMakerLines = isCabinetMakerLead
    ? [
        "",
        "— Cabinet Maker Custom Demo lead —",
        `Landing page: ${payload.landing_page || "/websites-for-cabinet-makers"}`,
        `Industry: ${payload.industry || "cabinet-making"}`,
        ...(payload.intent ? [`Intent: ${payload.intent}`] : []),
        `Market: ${payload.market || "Not provided"}`,
        `Rep: ${payload.rep || "Not provided"}`,
        `Source: ${payload.source || "Not provided"}`,
        `Main project types: ${mainProjectTypes || "Not provided"}`,
        `Wants more of: ${desiredOutcomes || "Not provided"}`,
        `Target launch timing: ${payload.launch_timing || "Not provided"}`,
        `Referrer: ${payload.referrer || "Not provided"}`,
        ...(utmPairs.length ? [`UTM: ${utmPairs.join(", ")}`] : []),
      ].join("\n")
    : "";

  const auctioneerLines = isAuctioneerLead
    ? [
        "",
        "— Auctioneer Custom Demo lead —",
        `Landing page: ${payload.landing_page || "/websites-for-auctioneers"}`,
        `Industry: ${payload.industry || "auctioneering"}`,
        ...(payload.intent ? [`Intent: ${payload.intent}`] : []),
        `Market: ${payload.market || "Not provided"}`,
        `Rep: ${payload.rep || "Not provided"}`,
        `Source: ${payload.source || "Not provided"}`,
        `Auction types: ${auctionTypes || "Not provided"}`,
        `Wants more of: ${desiredOutcomes || "Not provided"}`,
        `Target launch timing: ${payload.launch_timing || "Not provided"}`,
        `Referrer: ${payload.referrer || "Not provided"}`,
        ...(utmPairs.length ? [`UTM: ${utmPairs.join(", ")}`] : []),
      ].join("\n")
    : "";

  // Only render the fields the visitor actually provided — the quick
  // discovery-call form captures far less than the old wizard did.
  const detailLines = [
    `Name: ${payload.first_name}`,
    `Business: ${payload.business_name || "Not provided"}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    ...(payload.note ? [`Note: ${payload.note}`] : []),
    ...(payload.service_area ? [`Service Area: ${payload.service_area}`] : []),
    ...(typeof payload.has_website === "boolean"
      ? [`Has website: ${payload.has_website ? "Yes" : "No"}`]
      : []),
    ...(payload.website_url ? [`Website URL: ${payload.website_url}`] : []),
    ...(payload.primary_goal ? [`Primary goal: ${payload.primary_goal}`] : []),
    ...(payload.website_goal ? [`Website goal: ${payload.website_goal}`] : []),
    ...(payload.launch_timing ? [`Target timing: ${payload.launch_timing}`] : []),
    ...(payload.ideal_customer ? [`Ideal customer: ${payload.ideal_customer}`] : []),
    ...(payload.branding_notes ? [`Branding notes: ${payload.branding_notes}`] : []),
    ...(payload.heard_about_us ? [`Heard about us: ${payload.heard_about_us}`] : []),
    ...(!isRealtorLead && payload.landing_page
      ? [`Came from: ${payload.landing_page}`]
      : []),
    ...(!isRealtorLead && utmPairs.length ? [`UTM: ${utmPairs.join(", ")}`] : []),
  ];

  const emailBody = `New discovery call request from graylockdigital.com

${detailLines.join("\n")}${realtorLines}${wellDrillerLines}${cabinetMakerLines}${auctioneerLines}

Submitted: ${submittedAt}

---
Reply directly to this email to reach the lead.
`;

  const recipients = leadNotificationRecipients();

  // An experiment assignment can also accompany a normal CTA submission.
  // Only the actual popup entry point should use the promotion subject.
  const subject = promotionSource === "build_fee_waiver_popup"
    ? "New Build Fee Waiver Promotion Lead"
    : "Free Home Page Direction Request";

  let notificationKey = notificationIdempotencyKey;
  const notificationPayload = {
    from: process.env.RESEND_FROM_EMAIL || "",
    to: recipients,
    replyTo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)
      ? payload.email
      : undefined,
    subject,
    text: emailBody,
  };
  if (storedLead) {
    const notificationState = await pool.query(
      `
        SELECT email_notification_idempotency_key, email_notification_payload
        FROM promotion_lead_attribution WHERE internal_lead_id=$1 LIMIT 1
      `,
      [internalLeadId],
    );
    const state = notificationState.rows[0] as Record<string, unknown> | undefined;
    notificationKey = String(state?.email_notification_idempotency_key || notificationKey);
    if (state?.email_notification_payload && typeof state.email_notification_payload === "object") {
      Object.assign(notificationPayload, state.email_notification_payload);
    } else {
      await pool.query(
        `
          UPDATE promotion_lead_attribution
          SET email_notification_payload=$2, updated_at=NOW()
          WHERE internal_lead_id=$1 AND email_notification_status='sending'
        `,
        [internalLeadId, JSON.stringify(notificationPayload)],
      );
    }
  }

  let notificationDecision: LeadNotificationResponseStatus = "sent";
  let failureDiagnostic: string | undefined;
  try {
    const missingConfiguration = missingLeadNotificationConfiguration();
    if (missingConfiguration.length > 0) {
      throw new SafeNotificationError(notificationConfigurationDiagnostic(missingConfiguration));
    }
    const resendKey = process.env.RESEND_API_KEY as string;
    const resend = new Resend(resendKey);
    const result = await sendNotificationWithIdempotency(
      resend.emails,
      notificationPayload as Parameters<typeof resend.emails.send>[0],
      notificationKey,
    );
    const sendResult = inspectNotificationSendResult(result);
    if (!sendResult.ok) {
      throw new SafeNotificationError(sendResult.diagnostic);
    }
    if (storedLead) {
      await pool.query(
        `
          UPDATE promotion_lead_attribution
          SET email_notification_status='sent', email_notification_error=NULL,
            email_notification_sent_at=NOW(), email_notification_lease_until=NULL,
            updated_at=NOW()
          WHERE internal_lead_id=$1
        `,
        [internalLeadId],
      );
    }
  } catch (error) {
    failureDiagnostic = notificationErrorDiagnostic(error);
    notificationDecision = "failed";
    logger.error({ error: failureDiagnostic }, "Failed to send lead email via Resend");
    if (storedLead) {
      await pool.query(
        `
          UPDATE promotion_lead_attribution
          SET email_notification_status='failed',
            email_notification_error=$2, email_notification_lease_until=NULL,
            updated_at=NOW()
          WHERE internal_lead_id=$1
        `,
        [internalLeadId, failureDiagnostic],
      ).catch((updateError) => {
        logger.error(
          { error: notificationErrorDiagnostic(updateError) },
          "Failed to persist lead notification failure",
        );
      });
    }
  }

  const response = notificationResponse(notificationDecision, internalLeadId);
  res.status(response.statusCode).json(response.body);
});

/**
 * Resend a failed private notification without creating another attribution
 * or funnel event. This is intentionally an admin-only action.
 */
leadsRouter.post(
  "/promotion/admin/leads/:id/resend-email",
  requirePromotionOrigin,
  requirePromotionAdmin,
  requirePromotionCsrf,
  async (req: Request, res: Response) => {
    const internalLeadId = typeof req.params.id === "string" ? req.params.id.slice(0, 100) : "";
    if (!internalLeadId) {
      res.status(400).json({ error: "Lead id is required" });
      return;
    }
    let client: PoolClientLike | undefined;
    try {
      client = await pool.connect();
      await client.query("BEGIN");
      const commitAndRelease = async () => {
        await client?.query("COMMIT");
        client?.release();
        client = undefined;
      };
      const result = await client.query<{ rows: Array<Record<string, unknown>> }>(
        "SELECT * FROM promotion_lead_attribution WHERE internal_lead_id=$1 LIMIT 1 FOR UPDATE",
        [internalLeadId],
      );
      const lead = result.rows[0] as Record<string, unknown> | undefined;
      if (!lead) {
        await client.query("ROLLBACK");
        client.release();
        client = undefined;
        res.status(404).json({ error: "Lead not found" });
        return;
      }
      if (lead.email_notification_status === "sent") {
        await commitAndRelease();
        const response = notificationResponse("previously_sent", internalLeadId);
        res.status(response.statusCode).json(response.body);
        return;
      }
      if (lead.email_notification_status === "manual_review") {
        await commitAndRelease();
        const response = notificationResponse("manual_review", internalLeadId);
        res.status(response.statusCode).json(response.body);
        return;
      }
      const leaseUntil = lead.email_notification_lease_until
        ? new Date(String(lead.email_notification_lease_until)).getTime()
        : 0;
      const staleSending = lead.email_notification_status === "sending" && leaseUntil <= Date.now();
      const retryable = lead.email_notification_status === "failed" || staleSending;
      if (!retryable) {
        await commitAndRelease();
        const response = notificationResponse("busy", internalLeadId);
        res.status(response.statusCode).json(response.body);
        return;
      }
      const attemptedAt = lead.email_notification_attempted_at
        ? new Date(String(lead.email_notification_attempted_at)).getTime()
        : 0;
      if (staleSending && attemptedAt > 0 && Date.now() - attemptedAt >= 24 * 60 * 60 * 1000) {
        await client.query(
          `
            UPDATE promotion_lead_attribution
            SET email_notification_status='manual_review',
              email_notification_error='Resend idempotency window expired; manual review required',
              email_notification_lease_until=NULL, updated_at=NOW()
            WHERE id=$1
          `,
          [lead.id],
        );
        await commitAndRelease();
        const response = notificationResponse(
          "manual_review",
          internalLeadId,
        );
        res.status(response.statusCode).json(response.body);
        return;
      }
      const payload = lead.email_notification_payload;
      if (!payload || typeof payload !== "object") {
        await client.query(
          `
            UPDATE promotion_lead_attribution
            SET email_notification_status='manual_review',
              email_notification_error='manual_review: Notification payload is unavailable; manual review required.',
              email_notification_lease_until=NULL, updated_at=NOW()
            WHERE id=$1
          `,
          [lead.id],
        );
        await commitAndRelease();
        const response = notificationResponse(
          "manual_review",
          internalLeadId,
        );
        res.status(response.statusCode).json(response.body);
        return;
      }
      const missingConfiguration = missingLeadNotificationConfiguration();
      if (missingConfiguration.length > 0) {
        throw new SafeNotificationError(notificationConfigurationDiagnostic(missingConfiguration));
      }
      const resendKey = process.env.RESEND_API_KEY as string;
      await pool.query(
        `
          UPDATE promotion_lead_attribution
          SET email_notification_status='sending',
            email_notification_lease_until=NOW() + INTERVAL '15 minutes',
            email_notification_attempted_at=NOW(), email_notification_error=NULL,
            updated_at=NOW()
          WHERE id=$1
        `,
        [lead.id],
      );
      await commitAndRelease();
      const resend = new Resend(resendKey);
      const retryPayload = {
        ...(payload as Record<string, unknown>),
        to: leadNotificationRecipients(),
      };
      const sent = await sendNotificationWithIdempotency(
        resend.emails,
        retryPayload as Parameters<typeof resend.emails.send>[0],
        String(lead.email_notification_idempotency_key || `lead-notification-${internalLeadId}`),
      );
      const sendResult = inspectNotificationSendResult(sent);
      if (!sendResult.ok) {
        throw new SafeNotificationError(sendResult.diagnostic);
      }
      await pool.query(
        `
          UPDATE promotion_lead_attribution
          SET email_notification_status='sent', email_notification_error=NULL,
            email_notification_sent_at=NOW(), email_notification_lease_until=NULL,
            updated_at=NOW()
          WHERE internal_lead_id=$1
        `,
        [internalLeadId],
      );
      res.json({
        ok: true,
        success: true,
        internal_lead_id: internalLeadId,
        notification_status: "sent",
      });
    } catch (error) {
      if (client) {
        await client.query("ROLLBACK").catch(() => undefined);
        client.release();
      }
      const failureDiagnostic = notificationErrorDiagnostic(error);
      logger.error({ error: failureDiagnostic }, "Failed to resend lead notification");
      await pool.query(
        `
          UPDATE promotion_lead_attribution
          SET email_notification_status='failed',
            email_notification_error=$2,
            email_notification_lease_until=NULL,
            updated_at=NOW()
          WHERE internal_lead_id=$1
        `,
        [internalLeadId, failureDiagnostic],
      ).catch(() => undefined);
      const response = notificationResponse("failed", internalLeadId);
      res.status(response.statusCode).json(response.body);
    }
  },
);

export default leadsRouter;
