import { Router, type NextFunction, type Request, type Response } from "express";
import {
  createHmac,
  randomBytes,
  randomInt,
  timingSafeEqual,
} from "node:crypto";
import { pool } from "@workspace/db";
import { logger } from "../lib/logger";

const promotionRouter = Router();

const DEFAULT_CAMPAIGN_ID = "september-build-fee-waiver";
const ADMIN_COOKIE = "promotion_admin_session";
const SESSION_TTL_MS = 8 * 60 * 60 * 1000;
const PUBLIC_EVENT_NAMES = new Set([
  "promo_popup_eligible",
  "promo_popup_assigned",
  "promo_popup_impression",
  "promo_popup_cta_clicked",
  "promo_popup_dismissed",
  "promo_flow_opened",
  "promo_form_started",
  "promo_form_submitted",
  "standard_cta_clicked",
  "standard_form_started",
  "standard_form_submitted",
]);
const OUTCOME_EVENT_NAMES = new Set([
  "lead_qualified",
  "lead_not_qualified",
  "fit_call_booked",
  "fit_call_held",
  "homepage_direction_delivered",
  "promotion_accepted",
  "monthly_plan_first_payment_collected",
  "launch_completed",
  "refund_or_guarantee_claim",
  "cancellation_or_payment_failure",
]);
const VARIANTS = ["control", "savings_led", "direction_led"] as const;
const DISMISSAL_TYPES = new Set([
  "close_button",
  "no_thanks",
  "escape_key",
  "backdrop_click",
]);
const LEAD_STATUSES = new Set([
  "new",
  "contacted",
  "qualified",
  "not_qualified",
  "fit_call_booked",
  "fit_call_held",
  "homepage_direction_in_progress",
  "homepage_direction_delivered",
  "promotion_accepted",
  "first_payment_collected",
  "launched",
  "refund_or_guarantee_claim",
  "cancelled",
  "payment_failed",
  "closed_lost",
]);
const NO_FIT_REASONS = new Set([
  "not_a_serviceable_business",
  "out_of_scope",
  "no_decision_maker",
  "not_ready",
  "cannot_sustain_monthly_plan",
  "no_response",
  "capacity_limit",
  "timeline_mismatch",
  "other",
]);
const FIT_CALL_STATUSES = new Set(["not_scheduled", "booked", "held", "no_show", "cancelled"]);
const DIRECTION_STATUSES = new Set(["not_started", "in_progress", "delivered"]);
const PROMOTION_ACCEPTANCE_STATUSES = new Set(["pending", "accepted", "declined"]);
const FIRST_PAYMENT_STATUSES = new Set(["pending", "collected", "failed"]);
const LAUNCH_STATUSES = new Set(["not_started", "in_progress", "launched"]);
const REFUND_CANCELLATION_STATUSES = new Set([
  "none",
  "refund",
  "guarantee_claim",
  "cancelled",
  "payment_failed",
]);
const ECONOMIC_KINDS = new Set([
  "waived_build_fee",
  "monthly_payment",
  "delivery_cost",
  "support_cost",
  "refund",
]);
const DEVICE_TYPES = new Set(["desktop", "mobile", "tablet", "unknown"]);
const RECURRENCE_MODES = new Set(["manual", "monthly"]);
const OCCURRENCE_KEY_PATTERN = /^\d{4}-(0[1-9]|1[0-2])$/;
const sessions = new Map<
  string,
  { expiresAt: number; csrfToken: string; username: string }
>();
const loginAttempts = new Map<string, { count: number; resetAt: number }>();
const publicRateLimits = new Map<string, { count: number; resetAt: number }>();

interface Campaign {
  id: number;
  campaignId: string;
  experimentId: string;
  enabled: boolean;
  campaignName: string;
  timezone: string;
  recurrenceMode: "manual" | "monthly";
  startDateTime: string | null;
  endDateTime: string | null;
  deadlineDisplayText: string | null;
  /** Present on public, resolved campaign responses. */
  occurrenceKey?: string | null;
  /** Present on public, resolved campaign responses when recurring. */
  baseExperimentId?: string;
  eligiblePagePaths: string[];
  trafficAllocationControl: number;
  trafficAllocationVariantA: number;
  trafficAllocationVariantB: number;
  triggerMinimumSeconds: number;
  triggerMinimumScrollDepth: number;
  dismissalFrequencyCapDays: number;
  popupEnabled: boolean;
  dashboardEnabled: boolean;
  manualKillSwitch: boolean;
  standardBuildFeeDisplayValue: string | null;
  monthlyPlanDisclosure: string | null;
  legalTermsUrl: string | null;
  privacyPolicyUrl: string | null;
  stage: string;
  minEvaluationDays: number;
  minEligibleVisitors: number;
  version: number;
  createdAt: string;
  updatedAt: string;
}

interface Assignment {
  id: number;
  campaignId: string;
  experimentId: string;
  anonymousVisitorId: string;
  experimentVariant: (typeof VARIANTS)[number];
  assignmentToken: string;
  assignedAt: string;
  dismissedAt: string | null;
  ctaClickedAt: string | null;
  convertedAt: string | null;
  landingPage: string | null;
  referrer: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  utmContent: string | null;
  deviceType: string | null;
  firstTouchSource: string | null;
  lastTouchSource: string | null;
}

interface ReportFilters {
  campaignId?: string;
  stage?: string;
  variant?: string;
  trafficSource?: string;
  utmCampaign?: string;
  deviceType?: string;
  businessCategory?: string;
  leadStatus?: string;
  assignedTeamMember?: string;
  monthlyPlan?: string;
  startDate?: string;
  endDate?: string;
  occurrenceKey?: string;
}

function toCampaign(row: Record<string, unknown>): Campaign {
  return {
    id: Number(row.id),
    campaignId: String(row.campaign_id),
    experimentId: String(row.experiment_id),
    enabled: Boolean(row.enabled),
    campaignName: String(row.campaign_name),
    timezone: String(row.timezone),
    recurrenceMode: row.recurrence_mode === "monthly" ? "monthly" : "manual",
    startDateTime: row.start_date_time ? new Date(String(row.start_date_time)).toISOString() : null,
    endDateTime: row.end_date_time ? new Date(String(row.end_date_time)).toISOString() : null,
    deadlineDisplayText: row.deadline_display_text ? String(row.deadline_display_text) : null,
    eligiblePagePaths: Array.isArray(row.eligible_page_paths)
      ? row.eligible_page_paths.map(String)
      : [],
    trafficAllocationControl: Number(row.traffic_allocation_control),
    trafficAllocationVariantA: Number(row.traffic_allocation_variant_a),
    trafficAllocationVariantB: Number(row.traffic_allocation_variant_b),
    triggerMinimumSeconds: Number(row.trigger_minimum_seconds),
    triggerMinimumScrollDepth: Number(row.trigger_minimum_scroll_depth),
    dismissalFrequencyCapDays: Number(row.dismissal_frequency_cap_days),
    popupEnabled: Boolean(row.popup_enabled),
    dashboardEnabled: Boolean(row.dashboard_enabled),
    manualKillSwitch: Boolean(row.manual_kill_switch),
    standardBuildFeeDisplayValue: row.standard_build_fee_display_value
      ? String(row.standard_build_fee_display_value)
      : null,
    monthlyPlanDisclosure: row.monthly_plan_disclosure ? String(row.monthly_plan_disclosure) : null,
    legalTermsUrl: row.legal_terms_url ? String(row.legal_terms_url) : null,
    privacyPolicyUrl: row.privacy_policy_url ? String(row.privacy_policy_url) : null,
    stage: String(row.stage),
    minEvaluationDays: Number(row.min_evaluation_days),
    minEligibleVisitors: Number(row.min_eligible_visitors),
    version: Number(row.version),
    createdAt: new Date(String(row.created_at)).toISOString(),
    updatedAt: new Date(String(row.updated_at)).toISOString(),
  };
}

function toAssignment(row: Record<string, unknown>): Assignment {
  return {
    id: Number(row.id),
    campaignId: String(row.campaign_id_text ?? row.campaign_id),
    experimentId: String(row.experiment_id),
    anonymousVisitorId: String(row.anonymous_visitor_id),
    experimentVariant: String(row.experiment_variant) as Assignment["experimentVariant"],
    assignmentToken: String(row.assignment_token),
    assignedAt: new Date(String(row.assigned_at)).toISOString(),
    dismissedAt: row.dismissed_at ? new Date(String(row.dismissed_at)).toISOString() : null,
    ctaClickedAt: row.cta_clicked_at ? new Date(String(row.cta_clicked_at)).toISOString() : null,
    convertedAt: row.converted_at ? new Date(String(row.converted_at)).toISOString() : null,
    landingPage: row.landing_page ? String(row.landing_page) : null,
    referrer: row.referrer ? String(row.referrer) : null,
    utmSource: row.utm_source ? String(row.utm_source) : null,
    utmMedium: row.utm_medium ? String(row.utm_medium) : null,
    utmCampaign: row.utm_campaign ? String(row.utm_campaign) : null,
    utmTerm: row.utm_term ? String(row.utm_term) : null,
    utmContent: row.utm_content ? String(row.utm_content) : null,
    deviceType: row.device_type ? String(row.device_type) : null,
    firstTouchSource: row.first_touch_source ? String(row.first_touch_source) : null,
    lastTouchSource: row.last_touch_source ? String(row.last_touch_source) : null,
  };
}

interface MonthlyPeriod {
  occurrenceKey: string;
  startDateTime: string;
  endDateTime: string;
  deadlineDisplayText: string;
}

interface ResolvedCampaign extends Campaign {
  occurrenceKey: string | null;
  baseExperimentId?: string;
}

function datePartsInTimeZone(date: Date, timezone: string): {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
} {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const valueFor = (type: Intl.DateTimeFormatPartTypes): number =>
    Number(parts.find((part) => part.type === type)?.value);
  return {
    year: valueFor("year"),
    month: valueFor("month"),
    day: valueFor("day"),
    hour: valueFor("hour"),
    minute: valueFor("minute"),
    second: valueFor("second"),
  };
}

/**
 * Converts a local timezone wall-clock value to an instant using Intl's IANA
 * data. Iterating the offset makes the conversion safe on offset changes; our
 * month boundaries are local midnight (not the ambiguous DST hour).
 */
function zonedTimeToUtc(
  year: number,
  month: number,
  day: number,
  timezone: string,
): Date {
  const target = Date.UTC(year, month - 1, day);
  let timestamp = target;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const local = datePartsInTimeZone(new Date(timestamp), timezone);
    const offset = Date.UTC(
      local.year,
      local.month - 1,
      local.day,
      local.hour,
      local.minute,
      local.second,
    ) - timestamp;
    timestamp = target - offset;
  }
  return new Date(timestamp);
}

export function monthlyPeriodFor(timezone: string, now = new Date()): MonthlyPeriod {
  const local = datePartsInTimeZone(now, timezone);
  return monthlyPeriodForYearMonth(timezone, local.year, local.month);
}

function monthlyPeriodForYearMonth(timezone: string, year: number, month: number): MonthlyPeriod {
  const nextYear = month === 12 ? year + 1 : year;
  const nextMonth = month === 12 ? 1 : month + 1;
  const start = zonedTimeToUtc(year, month, 1, timezone);
  const end = zonedTimeToUtc(nextYear, nextMonth, 1, timezone);
  const lastInstant = new Date(end.getTime() - 1);
  const lastDate = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(lastInstant);
  return {
    occurrenceKey: `${year}-${String(month).padStart(2, "0")}`,
    startDateTime: start.toISOString(),
    endDateTime: end.toISOString(),
    deadlineDisplayText: `${lastDate}, 11:59 PM ${timezone}`,
  };
}

export function monthlyPeriodForOccurrence(timezone: string, occurrenceKey: string): MonthlyPeriod {
  if (!OCCURRENCE_KEY_PATTERN.test(occurrenceKey)) {
    throw new InputError("occurrenceKey must be YYYY-MM");
  }
  return monthlyPeriodForYearMonth(
    timezone,
    Number(occurrenceKey.slice(0, 4)),
    Number(occurrenceKey.slice(5, 7)),
  );
}

export function evaluationPeriodFor(
  campaign: Campaign,
  occurrenceKey?: string,
  now = new Date(),
): {
  occurrenceKey: string | null;
  startDateTime: string | null;
  scope: "campaign" | "current_month" | "selected_occurrence";
} {
  if (campaign.recurrenceMode !== "monthly") {
    return {
      occurrenceKey: null,
      startDateTime: campaign.startDateTime,
      scope: "campaign",
    };
  }
  const period = occurrenceKey
    ? monthlyPeriodForOccurrence(campaign.timezone, occurrenceKey)
    : monthlyPeriodFor(campaign.timezone, now);
  return {
    occurrenceKey: period.occurrenceKey,
    startDateTime: period.startDateTime,
    scope: occurrenceKey ? "selected_occurrence" : "current_month",
  };
}

export function effectiveExperimentId(baseExperimentId: string, occurrenceKey: string | null): string {
  return occurrenceKey ? `${baseExperimentId}:${occurrenceKey}` : baseExperimentId;
}

export function occurrenceKeyForExperimentId(
  baseExperimentId: string,
  experimentId: string,
): string | null {
  const prefix = `${baseExperimentId}:`;
  const occurrenceKey = experimentId.startsWith(prefix)
    ? experimentId.slice(prefix.length)
    : "";
  return OCCURRENCE_KEY_PATTERN.test(occurrenceKey) ? occurrenceKey : null;
}

export function resolveCampaignForPublic(campaign: Campaign, now = new Date()): ResolvedCampaign {
  if (campaign.recurrenceMode !== "monthly") {
    return { ...campaign, occurrenceKey: null };
  }
  const period = monthlyPeriodFor(campaign.timezone, now);
  return {
    ...campaign,
    experimentId: effectiveExperimentId(campaign.experimentId, period.occurrenceKey),
    baseExperimentId: campaign.experimentId,
    ...period,
  };
}

export function assignmentIsCurrentOccurrence(
  assignment: Assignment,
  campaign: Campaign,
  now = new Date(),
): boolean {
  return assignment.experimentId === resolveCampaignForPublic(campaign, now).experimentId;
}

function campaignIsLive(campaign: Campaign, now = new Date()): boolean {
  const resolved = resolveCampaignForPublic(campaign, now);
  if (!resolved.enabled || resolved.manualKillSwitch || !resolved.startDateTime || !resolved.endDateTime) {
    return false;
  }
  const timestamp = now.getTime();
  return (
    timestamp >= new Date(resolved.startDateTime).getTime() &&
    timestamp < new Date(resolved.endDateTime).getTime()
  );
}

function campaignStatus(campaign: Campaign, now = new Date()): string {
  const resolved = resolveCampaignForPublic(campaign, now);
  if (campaign.manualKillSwitch) return "Paused";
  if (resolved.endDateTime && now.getTime() >= new Date(resolved.endDateTime).getTime()) return "Expired";
  if (!campaign.enabled) return "Draft";
  if (resolved.startDateTime && now.getTime() < new Date(resolved.startDateTime).getTime()) return "Scheduled";
  return campaignIsLive(campaign, now) ? "Live" : "Draft";
}

function setNoCache(res: Response): void {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, private");
  res.setHeader("Pragma", "no-cache");
}

function requestIp(req: Request): string {
  return req.ip || req.socket.remoteAddress || "unknown";
}

function checkRateLimit(
  map: Map<string, { count: number; resetAt: number }>,
  key: string,
  max: number,
  windowMs: number,
): boolean {
  const now = Date.now();
  const entry = map.get(key);
  if (!entry || now >= entry.resetAt) {
    map.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count += 1;
  return true;
}

function constantTimeEqual(left: string, right: string): boolean {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  if (leftBuffer.length !== rightBuffer.length) {
    const paddedLeft = Buffer.alloc(Math.max(leftBuffer.length, rightBuffer.length));
    const paddedRight = Buffer.alloc(paddedLeft.length);
    leftBuffer.copy(paddedLeft);
    rightBuffer.copy(paddedRight);
    timingSafeEqual(paddedLeft, paddedRight);
    return false;
  }
  return timingSafeEqual(leftBuffer, rightBuffer);
}

function adminSecret(name: "PROMOTION_ADMIN_PASSWORD" | "SESSION_SECRET"): string | null {
  const value = process.env[name];
  return value && value.length > 0 ? value : null;
}

function signatureFor(value: string, secret: string): string {
  return createHmac("sha256", secret).update(value).digest("base64url");
}

function readCookie(req: Request, name: string): string | null {
  const header = req.headers.cookie;
  if (!header) return null;
  const match = header.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${name}=`));
  if (!match) return null;
  try {
    return decodeURIComponent(match.slice(name.length + 1));
  } catch {
    return null;
  }
}

function getSession(req: Request): { id: string; csrfToken: string; username: string } | null {
  const secret = adminSecret("SESSION_SECRET");
  if (!secret) return null;
  const value = readCookie(req, ADMIN_COOKIE);
  if (!value) return null;
  const pieces = value.split(".");
  if (pieces.length !== 3) return null;
  const [id, expiresText, signature] = pieces;
  if (!id || !expiresText || !signature) return null;
  const signedPart = `${id}.${expiresText}`;
  if (!constantTimeEqual(signatureFor(signedPart, secret), signature)) return null;
  const expiresAt = Number(expiresText);
  const session = sessions.get(id);
  if (!session || !Number.isFinite(expiresAt) || expiresAt < Date.now() || session.expiresAt < Date.now()) {
    sessions.delete(id);
    return null;
  }
  return { id, csrfToken: session.csrfToken, username: session.username };
}

function issueSession(res: Response, username: string): string {
  const secret = adminSecret("SESSION_SECRET");
  if (!secret) throw new Error("SESSION_SECRET is not configured");
  const id = randomBytes(32).toString("base64url");
  const csrfToken = randomBytes(32).toString("base64url");
  const expiresAt = Date.now() + SESSION_TTL_MS;
  sessions.set(id, { expiresAt, csrfToken, username });
  const value = `${id}.${expiresAt}.${signatureFor(`${id}.${expiresAt}`, secret)}`;
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  res.setHeader(
    "Set-Cookie",
    `${ADMIN_COOKIE}=${encodeURIComponent(value)}; Max-Age=${Math.floor(SESSION_TTL_MS / 1000)}; Path=/; HttpOnly; SameSite=Strict${secure}`,
  );
  return csrfToken;
}

function clearSession(req: Request, res: Response): void {
  const cookie = readCookie(req, ADMIN_COOKIE);
  if (cookie) sessions.delete(cookie.split(".")[0] ?? "");
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  res.setHeader(
    "Set-Cookie",
    `${ADMIN_COOKIE}=; Max-Age=0; Path=/; HttpOnly; SameSite=Strict${secure}`,
  );
}

function originIsAllowed(req: Request): boolean {
  const origin = req.get("origin");
  if (!origin) return true;
  const configured = (process.env.PROMOTION_ADMIN_ORIGIN || process.env.PUBLIC_ORIGIN || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const expected = configured.length > 0
    ? configured
    : [`${req.protocol}://${req.get("host")}`];
  try {
    const normalized = new URL(origin).origin;
    return expected.some((candidate) => {
      try {
        return new URL(candidate).origin === normalized;
      } catch {
        return false;
      }
    });
  } catch {
    return false;
  }
}

export function requirePromotionOrigin(req: Request, res: Response, next: NextFunction): void {
  if (!originIsAllowed(req)) {
    res.status(403).json({ error: "Origin is not allowed" });
    return;
  }
  next();
}

export function requirePromotionAdmin(req: Request, res: Response, next: NextFunction): void {
  if (!adminSecret("PROMOTION_ADMIN_PASSWORD") || !adminSecret("SESSION_SECRET")) {
    res.status(503).json({ error: "Promotion admin authentication is not configured" });
    return;
  }
  const session = getSession(req);
  if (!session) {
    res.status(401).json({ error: "Authentication required" });
    return;
  }
  res.locals.promotionAdmin = session;
  next();
}

export function requirePromotionCsrf(req: Request, res: Response, next: NextFunction): void {
  const session = res.locals.promotionAdmin as { csrfToken: string } | undefined;
  const header = req.get("x-csrf-token");
  if (!session || !header || !constantTimeEqual(header, session.csrfToken)) {
    res.status(403).json({ error: "CSRF validation failed" });
    return;
  }
  next();
}

function sanitizePath(value: unknown, field: string, required = false): string | null {
  if (value === undefined || value === null || value === "") {
    if (required) throw new InputError(`${field} is required`);
    return null;
  }
  if (typeof value !== "string" || value.length > 500 || /:\/\//.test(value)) {
    throw new InputError(`${field} must be a path`);
  }
  const withoutSuffix = value.split(/[?#]/, 1)[0] ?? "";
  if (!withoutSuffix.startsWith("/") || withoutSuffix.includes("\\") || /@/.test(withoutSuffix)) {
    throw new InputError(`${field} must be a path`);
  }
  return withoutSuffix.slice(0, 300);
}

function sanitizeTracking(value: unknown, field: string): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (
    typeof value !== "string" ||
    value.length > 100 ||
    /@|:\/\/|%40|%3a%2f%2f|[?#\s]/i.test(value) ||
    !/^[A-Za-z0-9._~+%/-]+$/.test(value)
  ) {
    throw new InputError(`${field} contains an invalid value`);
  }
  return value;
}

function sanitizeReferrer(value: unknown): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string" || value.length > 2_000) {
    throw new InputError("referrer is invalid");
  }
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new InputError("referrer must be a URL origin");
  }
  if (!["http:", "https:"].includes(parsed.protocol) || parsed.username || parsed.password) {
    throw new InputError("referrer must be a URL origin");
  }
  return parsed.origin;
}

function sanitizeFreeText(value: unknown, field: string, max: number): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string" || value.length > max || /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(value)) {
    throw new InputError(`${field} is invalid`);
  }
  return value;
}

function asOptionalTimestamp(value: unknown, field: string): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string") throw new InputError(`${field} must be a date`);
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) throw new InputError(`${field} must be a date`);
  return parsed.toISOString();
}

function asOptionalNumber(value: unknown, field: string, min: number, max: number): number | null {
  if (value === undefined || value === null || value === "") return null;
  const number = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(number) || number < min || number > max) {
    throw new InputError(`${field} is out of range`);
  }
  return number;
}

class InputError extends Error {}

function failInput(res: Response, error: unknown): void {
  if (error instanceof InputError) {
    res.status(400).json({ error: error.message });
    return;
  }
  logger.error({ err: error }, "Promotion request failed");
  res.status(500).json({ error: "Promotion request failed" });
}

async function fetchCampaign(campaignId = DEFAULT_CAMPAIGN_ID): Promise<Campaign | null> {
  const result = await pool.query(
    "SELECT * FROM promotion_campaigns WHERE campaign_id = $1 LIMIT 1",
    [campaignId],
  );
  return result.rows[0] ? toCampaign(result.rows[0]) : null;
}

function allocationsAreValid(campaign: Campaign): boolean {
  const allocations = [
    campaign.trafficAllocationControl,
    campaign.trafficAllocationVariantA,
    campaign.trafficAllocationVariantB,
  ];
  return allocations.every((value) => Number.isInteger(value) && value >= 0) &&
    allocations.reduce((sum, value) => sum + value, 0) === 100;
}

function chooseVariant(campaign: Campaign): (typeof VARIANTS)[number] {
  if (!allocationsAreValid(campaign)) {
    logger.warn({ campaignId: campaign.campaignId }, "Invalid promotion allocation; using control");
    return "control";
  }
  const draw = randomInt(0, 10_000);
  const controlEnd = campaign.trafficAllocationControl * 100;
  const savingsEnd = controlEnd + campaign.trafficAllocationVariantA * 100;
  if (draw < controlEnd) return "control";
  if (draw < savingsEnd) return "savings_led";
  return "direction_led";
}

function isEligiblePath(campaign: Campaign, pagePath: string | null): boolean {
  if (!pagePath) return false;
  return campaign.eligiblePagePaths.includes("*") || campaign.eligiblePagePaths.includes(pagePath);
}

function assignmentResponse(
  assignment: Assignment,
  suppressed: boolean,
  stage: string,
): Record<string, unknown> {
  return {
    campaign_id: assignment.campaignId,
    experiment_id: assignment.experimentId,
    experiment_variant: assignment.experimentVariant,
    anonymous_visitor_id: assignment.anonymousVisitorId,
    assigned_at: assignment.assignedAt,
    assignment_token: assignment.assignmentToken,
    stage,
    suppressed,
  };
}

export async function suppressionFor(
  _assignment: Assignment,
  _campaign: Campaign,
  _now = new Date(),
): Promise<boolean> {
  // Repeat exposure is intentional, including previous leads. Historic flags
  // remain available for reporting but never opt a visitor out of the popup.
  return false;
}

async function insertInternalEvent(
  client: { query: (text: string, values?: unknown[]) => Promise<{ rowCount?: number | null }> },
  assignmentId: number,
  eventId: string,
  eventName: string,
): Promise<void> {
  await client.query(
    `
      INSERT INTO promotion_events (assignment_id, event_id, event_name, source)
      VALUES ($1, $2, $3, 'server')
      ON CONFLICT DO NOTHING
    `,
    [assignmentId, eventId, eventName],
  );
}

function mapAssignmentRow(row: Record<string, unknown>): Assignment {
  return toAssignment(row);
}

async function assignmentByToken(token: string): Promise<{ assignment: Assignment; campaign: Campaign } | null> {
  const result = await pool.query(
    `
      SELECT a.*, c.campaign_id AS campaign_id_text,
        c.experiment_id AS campaign_experiment_id, c.campaign_name,
        c.enabled, c.timezone, c.recurrence_mode, c.start_date_time, c.end_date_time,
        c.deadline_display_text, c.eligible_page_paths,
        c.traffic_allocation_control, c.traffic_allocation_variant_a,
        c.traffic_allocation_variant_b, c.trigger_minimum_seconds,
        c.trigger_minimum_scroll_depth, c.dismissal_frequency_cap_days,
        c.popup_enabled, c.dashboard_enabled, c.manual_kill_switch,
        c.standard_build_fee_display_value, c.monthly_plan_disclosure,
        c.legal_terms_url, c.privacy_policy_url, c.stage,
        c.min_evaluation_days, c.min_eligible_visitors, c.version,
        c.created_at, c.updated_at
      FROM experiment_assignments a
      JOIN promotion_campaigns c ON c.id = a.campaign_id
      WHERE a.assignment_token = $1
      LIMIT 1
    `,
    [token],
  );
  if (!result.rows[0]) return null;
  const row = result.rows[0];
  const campaignRow = {
    ...row,
    campaign_id: row.campaign_id_text,
    experiment_id: row.campaign_experiment_id,
  };
  return { assignment: mapAssignmentRow(row), campaign: toCampaign(campaignRow) };
}

function reportFilterValue(value: unknown, field: string): string | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value !== "string" || value.length > 160 || /[\u0000-\u001f]/.test(value)) {
    throw new InputError(`${field} is invalid`);
  }
  return value;
}

function readReportFilters(req: Request): ReportFilters {
  const q = req.query;
  return {
    campaignId: reportFilterValue(q.campaignId, "campaignId"),
    stage: reportFilterValue(q.stage, "stage"),
    variant: reportFilterValue(q.variant, "variant"),
    trafficSource: reportFilterValue(q.trafficSource, "trafficSource"),
    utmCampaign: reportFilterValue(q.utmCampaign, "utmCampaign"),
    deviceType: reportFilterValue(q.deviceType, "deviceType"),
    businessCategory: reportFilterValue(q.businessCategory, "businessCategory"),
    leadStatus: reportFilterValue(q.leadStatus, "leadStatus"),
    assignedTeamMember: reportFilterValue(q.assignedTeamMember, "assignedTeamMember"),
    monthlyPlan: reportFilterValue(q.monthlyPlan, "monthlyPlan"),
    startDate: reportFilterValue(q.startDate, "startDate"),
    endDate: reportFilterValue(q.endDate, "endDate"),
    occurrenceKey: parseOccurrenceKey(q.occurrenceKey),
  };
}

export function parseOccurrenceKey(value: unknown): string | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value !== "string" || !OCCURRENCE_KEY_PATTERN.test(value)) {
    throw new InputError("occurrenceKey must be YYYY-MM");
  }
  return value;
}

function addFilter(
  where: string[],
  params: unknown[],
  sql: string,
  value: unknown,
): void {
  if (value === undefined) return;
  params.push(value);
  where.push(sql.replace("?", `$${params.length}`));
}

async function buildReport(filters: ReportFilters): Promise<Record<string, unknown>> {
  const where = ["1 = 1"];
  const params: unknown[] = [];
  addFilter(where, params, "c.campaign_id = ?", filters.campaignId ?? DEFAULT_CAMPAIGN_ID);
  addFilter(where, params, "c.stage = ?", filters.stage);
  addFilter(where, params, "a.experiment_variant = ?", filters.variant);
  addFilter(
    where,
    params,
    "(a.first_touch_source = ? OR a.last_touch_source = ?)",
    filters.trafficSource,
  );
  // The traffic source predicate has two placeholders, so repair the second
  // parameter after addFilter has appended the value once.
  if (filters.trafficSource !== undefined) {
    params.push(filters.trafficSource);
    where[where.length - 1] = `(a.first_touch_source = $${params.length - 1} OR a.last_touch_source = $${params.length})`;
  }
  addFilter(where, params, "a.utm_campaign = ?", filters.utmCampaign);
  addFilter(where, params, "a.device_type = ?", filters.deviceType);
  if (filters.occurrenceKey !== undefined) {
    params.push(filters.occurrenceKey);
    where.push(`a.experiment_id = c.experiment_id || ':' || $${params.length}`);
  }
  addFilter(where, params, "a.assigned_at >= ?", filters.startDate ? asOptionalTimestamp(filters.startDate, "startDate") : undefined);
  addFilter(where, params, "a.assigned_at <= ?", filters.endDate ? asOptionalTimestamp(filters.endDate, "endDate") : undefined);
  if (filters.businessCategory !== undefined) {
    params.push(filters.businessCategory);
    where.push(`EXISTS (SELECT 1 FROM promotion_lead_attribution lf WHERE lf.assignment_id = a.id AND lf.business_category = $${params.length})`);
  }
  if (filters.leadStatus !== undefined) {
    params.push(filters.leadStatus);
    where.push(`EXISTS (SELECT 1 FROM promotion_lead_attribution lf WHERE lf.assignment_id = a.id AND lf.lead_status = $${params.length})`);
  }
  if (filters.assignedTeamMember !== undefined) {
    params.push(filters.assignedTeamMember);
    where.push(`EXISTS (SELECT 1 FROM promotion_lead_attribution lf WHERE lf.assignment_id = a.id AND lf.assigned_team_member = $${params.length})`);
  }
  if (filters.monthlyPlan !== undefined) {
    params.push(filters.monthlyPlan);
    where.push(`EXISTS (SELECT 1 FROM promotion_lead_attribution lf WHERE lf.assignment_id = a.id AND lf.monthly_plan = $${params.length})`);
  }

  const assignmentResult = await pool.query(
    `
      SELECT a.*, c.campaign_id AS campaign_id_text, c.experiment_id AS campaign_experiment_id,
        c.stage, c.min_evaluation_days, c.min_eligible_visitors,
        c.start_date_time AS campaign_start_date_time,
        c.enabled, c.manual_kill_switch, c.end_date_time
      FROM experiment_assignments a
      JOIN promotion_campaigns c ON c.id = a.campaign_id
      WHERE ${where.join(" AND ")}
      ORDER BY a.assigned_at ASC
    `,
    params,
  );
  const assignments = assignmentResult.rows.map(mapAssignmentRow);
  const assignmentIds = assignments.map((assignment) => assignment.id);
  const campaign = await fetchCampaign(filters.campaignId ?? DEFAULT_CAMPAIGN_ID);
  const periods = campaign
    ? await (async () => {
        const result = await pool.query(
          `
            SELECT DISTINCT experiment_id
            FROM experiment_assignments
            WHERE campaign_id = $1
            ORDER BY experiment_id DESC
          `,
          [campaign.id],
        );
        const items = result.rows.map((row) => {
          const experimentId = String(row.experiment_id);
          return {
            experimentId,
            occurrenceKey: occurrenceKeyForExperimentId(campaign.experimentId, experimentId),
          };
        });
        if (campaign.recurrenceMode === "monthly") {
          const current = resolveCampaignForPublic(campaign);
          if (!items.some((item) => item.experimentId === current.experimentId)) {
            items.unshift({
              experimentId: current.experimentId,
              occurrenceKey: current.occurrenceKey,
            });
          }
        }
        return items;
      })()
    : [];
  const variants = [...VARIANTS];
  const countsByVariant = new Map<string, Record<string, number>>();
  for (const variant of variants) countsByVariant.set(variant, {});

  if (assignmentIds.length > 0) {
    const eventResult = await pool.query(
      `
        SELECT a.experiment_variant, e.event_name,
          COUNT(DISTINCT e.assignment_id)::int AS count
        FROM promotion_events e
        JOIN experiment_assignments a ON a.id = e.assignment_id
        WHERE e.assignment_id = ANY($1::bigint[])
        GROUP BY a.experiment_variant, e.event_name
      `,
      [assignmentIds],
    );
    for (const row of eventResult.rows) {
      countsByVariant.get(String(row.experiment_variant))![String(row.event_name)] = Number(row.count);
    }
  }

  const selectedCampaignId = campaign?.campaignId ?? filters.campaignId ?? DEFAULT_CAMPAIGN_ID;
  const leadWhere = [
    filters.campaignId
      ? "l.campaign_id = $1"
      : "(l.campaign_id = $1 OR l.campaign_id IS NULL)",
  ];
  const leadParams: unknown[] = [selectedCampaignId];
  if (filters.stage !== undefined) {
    leadWhere.push(`c.stage = $${leadParams.length + 1}`);
    leadParams.push(filters.stage);
  }
  if (filters.variant !== undefined) {
    leadWhere.push(`a.experiment_variant = $${leadParams.length + 1}`);
    leadParams.push(filters.variant);
  }
  if (filters.trafficSource !== undefined) {
    leadWhere.push(`(COALESCE(l.first_touch_source, a.first_touch_source) = $${leadParams.length + 1} OR COALESCE(l.last_touch_source, a.last_touch_source) = $${leadParams.length + 1})`);
    leadParams.push(filters.trafficSource);
  }
  if (filters.utmCampaign !== undefined) {
    leadWhere.push(`COALESCE(l.utm_campaign, a.utm_campaign) = $${leadParams.length + 1}`);
    leadParams.push(filters.utmCampaign);
  }
  if (filters.deviceType !== undefined) {
    leadWhere.push(`COALESCE(l.device_type, a.device_type) = $${leadParams.length + 1}`);
    leadParams.push(filters.deviceType);
  }
  if (filters.occurrenceKey !== undefined) {
    leadWhere.push(`a.experiment_id = c.experiment_id || ':' || $${leadParams.length + 1}`);
    leadParams.push(filters.occurrenceKey);
  }
  if (filters.startDate) {
    leadWhere.push(`l.created_at >= $${leadParams.length + 1}`);
    leadParams.push(asOptionalTimestamp(filters.startDate, "startDate"));
  }
  if (filters.endDate) {
    leadWhere.push(`l.created_at <= $${leadParams.length + 1}`);
    leadParams.push(asOptionalTimestamp(filters.endDate, "endDate"));
  }
  if (filters.businessCategory !== undefined) {
    leadWhere.push(`l.business_category = $${leadParams.length + 1}`);
    leadParams.push(filters.businessCategory);
  }
  if (filters.leadStatus !== undefined) {
    leadWhere.push(`l.lead_status = $${leadParams.length + 1}`);
    leadParams.push(filters.leadStatus);
  }
  if (filters.assignedTeamMember !== undefined) {
    leadWhere.push(`l.assigned_team_member = $${leadParams.length + 1}`);
    leadParams.push(filters.assignedTeamMember);
  }
  if (filters.monthlyPlan !== undefined) {
    leadWhere.push(`l.monthly_plan = $${leadParams.length + 1}`);
    leadParams.push(filters.monthlyPlan);
  }
  const leadsResult = await pool.query(
    `
      SELECT l.*, c.experiment_id AS campaign_base_experiment_id
      FROM promotion_lead_attribution l
      LEFT JOIN experiment_assignments a ON a.id = l.assignment_id
      LEFT JOIN promotion_campaigns c ON c.campaign_id = l.campaign_id
      WHERE ${leadWhere.join(" AND ")}
      ORDER BY l.created_at DESC
    `,
    leadParams,
  );
  const leads = leadsResult.rows.map(leadRowToApi);
  const leadRows = new Map(leads.map((lead) => [lead.internalLeadId, lead]));
  const leadIds = leads.map((lead) => lead.id as number);

  const economicsResult = leadIds.length > 0
    ? await pool.query(
        `
          SELECT a.experiment_variant, l.id AS lead_id, e.id AS record_id,
            e.kind, e.amount, e.costs_complete, e.created_at
          FROM promotion_lead_attribution l
          JOIN experiment_assignments a ON a.id = l.assignment_id
          LEFT JOIN promotion_economic_records e ON e.lead_id = l.id
          WHERE l.id = ANY($1::bigint[])
          ORDER BY l.id ASC, e.created_at ASC NULLS LAST, e.id ASC NULLS LAST
        `,
        [leadIds],
      )
    : { rows: [] };
  const economicsByVariant = new Map<string, {
    waivedBuildFeeAmount: number;
    firstPaymentsCollected: number;
    totalMonthlyPayments: number;
    directDeliveryCost: number;
    supportCost: number;
    refundAmount: number;
    costsComplete: boolean;
  }>();
  const economicLeadsByVariant = new Map<string, Map<number, {
    monthlyPayments: Array<{ amount: number; createdAt: string; id: number }>;
    waivedBuildFeeAmount: number;
    hasWaiverRecord: boolean;
    deliveryCost: number;
    supportCost: number;
    refundAmount: number;
    hasDeliveryCost: boolean;
    hasSupportCost: boolean;
    costsAreComplete: boolean;
  }>>();
  for (const variant of variants) {
    economicsByVariant.set(variant, {
      waivedBuildFeeAmount: 0,
      firstPaymentsCollected: 0,
      totalMonthlyPayments: 0,
      directDeliveryCost: 0,
      supportCost: 0,
      refundAmount: 0,
      costsComplete: false,
    });
    economicLeadsByVariant.set(variant, new Map());
    for (const lead of leads.filter((item) => item.experimentVariant === variant)) {
      economicLeadsByVariant.get(variant)!.set(lead.id as number, {
        monthlyPayments: [],
        waivedBuildFeeAmount: Number(lead.waivedBuildFeeAmount ?? 0),
        hasWaiverRecord: false,
        deliveryCost: 0,
        supportCost: 0,
        refundAmount: 0,
        hasDeliveryCost: false,
        hasSupportCost: false,
        costsAreComplete: true,
      });
    }
  }
  for (const row of economicsResult.rows) {
    const leadEconomics = economicLeadsByVariant.get(String(row.experiment_variant))
      ?.get(Number(row.lead_id));
    if (!leadEconomics || !row.kind) continue;
    const amount = Number(row.amount);
    switch (String(row.kind)) {
      case "waived_build_fee":
        if (!leadEconomics.hasWaiverRecord) {
          leadEconomics.waivedBuildFeeAmount = 0;
          leadEconomics.hasWaiverRecord = true;
        }
        leadEconomics.waivedBuildFeeAmount += amount;
        break;
      case "monthly_payment":
        leadEconomics.monthlyPayments.push({
          amount,
          createdAt: String(row.created_at),
          id: Number(row.record_id),
        });
        break;
      case "delivery_cost":
        leadEconomics.deliveryCost += amount;
        leadEconomics.hasDeliveryCost = true;
        leadEconomics.costsAreComplete = leadEconomics.costsAreComplete && Boolean(row.costs_complete);
        break;
      case "support_cost":
        leadEconomics.supportCost += amount;
        leadEconomics.hasSupportCost = true;
        leadEconomics.costsAreComplete = leadEconomics.costsAreComplete && Boolean(row.costs_complete);
        break;
      case "refund": leadEconomics.refundAmount += amount; break;
    }
  }
  for (const variant of variants) {
    const economics = economicsByVariant.get(variant)!;
    const leadEconomics = [...economicLeadsByVariant.get(variant)!.values()];
    const completeLeads = leadEconomics.filter(
      (value) => value.hasDeliveryCost && value.hasSupportCost && value.costsAreComplete,
    );
    economics.costsComplete = leadEconomics.length > 0 && completeLeads.length === leadEconomics.length;
    for (const value of leadEconomics) {
      value.monthlyPayments.sort((left, right) =>
        left.createdAt.localeCompare(right.createdAt) || left.id - right.id);
      economics.waivedBuildFeeAmount += value.waivedBuildFeeAmount;
      economics.totalMonthlyPayments += value.monthlyPayments.reduce((sum, payment) => sum + payment.amount, 0);
      economics.firstPaymentsCollected += value.monthlyPayments[0]?.amount ?? 0;
      economics.directDeliveryCost += value.deliveryCost;
      economics.supportCost += value.supportCost;
      economics.refundAmount += value.refundAmount;
    }
  }
  const metrics = variants.map((variant) => {
    const counts = countsByVariant.get(variant) ?? {};
    const variantLeads = leads.filter((lead) => lead.experimentVariant === variant);
    const standardQualifiedLeads = variantLeads.filter(
      (lead) => lead.qualificationStatus === "qualified" && lead.promotionSource === "standard_homepage_cta",
    ).length;
    const promotionQualifiedLeads = variantLeads.filter(
      (lead) => lead.qualificationStatus === "qualified" && lead.promotionSource === "build_fee_waiver_popup",
    ).length;
    const ratio = (numerator: number, denominator: number): number =>
      denominator > 0 ? Number((numerator / denominator).toFixed(6)) : 0;
    const eligible = counts.promo_popup_eligible ?? 0;
    const impressions = counts.promo_popup_impression ?? 0;
    const formStarts = (counts.promo_form_started ?? 0) + (counts.standard_form_started ?? 0);
    const submissions = (counts.promo_form_submitted ?? 0) + (counts.standard_form_submitted ?? 0);
    const fitCallsBooked = counts.fit_call_booked ?? 0;
    return {
      variant,
      counts,
      eligibleVisitors: eligible,
      assignedVisitors: assignments.filter((assignment) => assignment.experimentVariant === variant).length,
      standardQualifiedLeads,
      promotionQualifiedLeads,
      rates: {
        popupViewRate: ratio(impressions, eligible),
        popupCtr: ratio(counts.promo_popup_cta_clicked ?? 0, impressions),
        formCompletionRate: ratio(submissions, formStarts),
        qualifiedRequestRate: ratio(
          standardQualifiedLeads + promotionQualifiedLeads,
          eligible,
        ),
        fitCallAttendanceRate: ratio(counts.fit_call_held ?? 0, fitCallsBooked),
        firstPaymentConversion: ratio(
          counts.monthly_plan_first_payment_collected ?? 0,
          eligible,
        ),
      },
    };
  });
  const economics = variants.map((variant) => {
    const value = economicsByVariant.get(variant)!;
    const costsComplete = value.costsComplete;
    return {
      variant,
      waivedBuildFeeAmount: value.waivedBuildFeeAmount,
      firstPaymentsCollected: value.firstPaymentsCollected,
      totalMonthlyPayments: value.totalMonthlyPayments,
      directDeliveryCost: value.directDeliveryCost,
      supportCost: value.supportCost,
      refundAmount: value.refundAmount,
      grossProfitEstimate: costsComplete
        ? value.totalMonthlyPayments - value.waivedBuildFeeAmount -
          value.directDeliveryCost - value.supportCost - value.refundAmount
        : null,
      costsComplete,
    };
  });
  const evaluationCampaign = campaign ?? null;
  const evaluationPeriod = evaluationCampaign
    ? evaluationPeriodFor(evaluationCampaign, filters.occurrenceKey)
    : { occurrenceKey: null, startDateTime: null, scope: "campaign" as const };
  const elapsedDays = evaluationPeriod.startDateTime
    ? Math.max(0, Math.floor((Date.now() - new Date(evaluationPeriod.startDateTime).getTime()) / 86_400_000))
    : 0;
  let eligibleVisitors = metrics.reduce((sum, metric) => sum + metric.eligibleVisitors, 0);
  // An unfiltered recurring report intentionally remains an all-history
  // aggregate. Its readiness is instead evaluated against the current-month
  // assignment cohort, so aggregate counts are never compared to one month's
  // elapsed days.
  if (evaluationCampaign?.recurrenceMode === "monthly" && !filters.occurrenceKey) {
    const evaluationWhere = [...where];
    const evaluationParams = [...params];
    evaluationParams.push(effectiveExperimentId(
      evaluationCampaign.experimentId,
      evaluationPeriod.occurrenceKey,
    ));
    evaluationWhere.push(`a.experiment_id = $${evaluationParams.length}`);
    const currentEligible = await pool.query(
      `
        SELECT COUNT(DISTINCT e.assignment_id)::int AS count
        FROM promotion_events e
        JOIN experiment_assignments a ON a.id = e.assignment_id
        JOIN promotion_campaigns c ON c.id = a.campaign_id
        WHERE ${evaluationWhere.join(" AND ")}
          AND e.event_name = 'promo_popup_eligible'
      `,
      evaluationParams,
    );
    eligibleVisitors = Number(currentEligible.rows[0]?.count ?? 0);
  }
  const minEvaluationDays = evaluationCampaign?.minEvaluationDays ?? 14;
  const minEligibleVisitors = evaluationCampaign?.minEligibleVisitors ?? 200;
  return {
    campaign: campaign
      ? { ...campaign, status: campaignStatus(campaign) }
      : null,
    status: campaign ? campaignStatus(campaign) : "Draft",
    metrics,
    leads,
    economics,
    evaluation: {
      ready: elapsedDays >= minEvaluationDays &&
        eligibleVisitors >= minEligibleVisitors,
      minEvaluationDays,
      minEligibleVisitors,
      elapsedDays,
      eligibleVisitors,
      occurrenceKey: evaluationPeriod.occurrenceKey,
      periodStartDateTime: evaluationPeriod.startDateTime,
      scope: evaluationPeriod.scope,
    },
    guidance: "Evaluate variants using qualified requests, held fit calls, first monthly payments, delivery capacity, refunds, cancellations, and customer fit—not click-through rate alone.",
    filters,
    periods,
    leadCount: leadRows.size,
  };
}

function csvCell(value: unknown): string {
  let text = value === null || value === undefined ? "" : String(value);
  if (/^[=+\-@]/.test(text)) text = `'${text}`;
  return `"${text.replaceAll('"', '""')}"`;
}

function toSnakeMetadata(assignment: Assignment): Record<string, string | null> {
  return {
    campaign_id: assignment.campaignId,
    experiment_id: assignment.experimentId,
    experiment_variant: assignment.experimentVariant,
    anonymous_visitor_id: assignment.anonymousVisitorId,
    first_touch_source: assignment.firstTouchSource,
    last_touch_source: assignment.lastTouchSource,
    utm_source: assignment.utmSource,
    utm_medium: assignment.utmMedium,
    utm_campaign: assignment.utmCampaign,
    utm_term: assignment.utmTerm,
    utm_content: assignment.utmContent,
    referrer: assignment.referrer,
    landing_page: assignment.landingPage,
    device_type: assignment.deviceType,
  };
}

function leadRowToApi(row: Record<string, unknown>): Record<string, unknown> {
  const baseExperimentId = row.campaign_base_experiment_id
    ? String(row.campaign_base_experiment_id)
    : null;
  const experimentId = row.experiment_id ? String(row.experiment_id) : null;
  return {
    id: Number(row.id),
    submissionId: row.submission_id,
    internalLeadId: row.internal_lead_id,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    campaignId: row.campaign_id,
    experimentId,
    occurrenceKey: baseExperimentId && experimentId
      ? occurrenceKeyForExperimentId(baseExperimentId, experimentId)
      : null,
    experimentVariant: row.experiment_variant,
    anonymousVisitorId: row.anonymous_visitor_id,
    promotionSource: row.promotion_source,
    popupTriggerType: row.popup_trigger_type,
    popupImpressionTimestamp: row.popup_impression_timestamp,
    popupCtaClickedTimestamp: row.popup_cta_clicked_timestamp,
    firstTouchSource: row.first_touch_source,
    lastTouchSource: row.last_touch_source,
    utmSource: row.utm_source,
    utmMedium: row.utm_medium,
    utmCampaign: row.utm_campaign,
    utmTerm: row.utm_term,
    utmContent: row.utm_content,
    referrer: row.referrer,
    landingPage: row.landing_page,
    deviceType: row.device_type,
    businessName: row.business_name,
    firstName: row.first_name,
    email: row.email,
    phone: row.phone,
    note: row.note,
    websiteUrl: row.website_url,
    primaryGoal: row.primary_goal,
    serviceArea: row.service_area,
    hasWebsite: row.has_website,
    idealCustomer: row.ideal_customer,
    brandingNotes: row.branding_notes,
    heardAboutUs: row.heard_about_us,
    submittedAt: row.submitted_at,
    businessCategory: row.business_category,
    declaredWebsiteGoal: row.declared_website_goal,
    declaredTiming: row.declared_timing,
    leadStatus: row.lead_status,
    qualificationStatus: row.qualification_status,
    noFitReason: row.no_fit_reason,
    notes: row.notes,
    fitCallDate: row.fit_call_date,
    fitCallStatus: row.fit_call_status,
    directionStatus: row.direction_status,
    promotionAcceptanceStatus: row.promotion_acceptance_status,
    waivedBuildFeeAmount: row.waived_build_fee_amount === null
      ? null
      : Number(row.waived_build_fee_amount),
    monthlyPlan: row.monthly_plan,
    firstPaymentStatus: row.first_payment_status,
    launchStatus: row.launch_status,
    refundCancellationStatus: row.refund_cancellation_status,
    assignedTeamMember: row.assigned_team_member,
    emailNotificationStatus: row.email_notification_status,
    emailNotificationError: row.email_notification_error,
    emailNotificationSentAt: row.email_notification_sent_at,
    emailNotificationLeaseUntil: row.email_notification_lease_until,
    emailNotificationAttemptedAt: row.email_notification_attempted_at,
  };
}

const LEAD_EXPORT_HEADERS = [
  "internalLeadId", "createdAt", "campaignId", "experimentId", "occurrenceKey",
  "experimentVariant", "promotionSource", "firstName", "email", "phone", "businessName",
  "websiteUrl", "primaryGoal", "serviceArea", "businessCategory", "declaredWebsiteGoal",
  "declaredTiming", "leadStatus", "qualificationStatus", "noFitReason",
  "fitCallDate", "fitCallStatus", "directionStatus", "promotionAcceptanceStatus",
  "waivedBuildFeeAmount", "monthlyPlan", "firstPaymentStatus", "launchStatus",
  "refundCancellationStatus", "assignedTeamMember", "notes",
  "emailNotificationStatus", "emailNotificationError",
];

// Public campaign contract.
promotionRouter.get("/promotion/campaign", async (_req, res) => {
  setNoCache(res);
  try {
    const campaign = await fetchCampaign();
    const now = new Date();
    const serverNow = now.toISOString();
    const resolvedCampaign = campaign ? resolveCampaignForPublic(campaign, now) : null;
    res.json({
      campaign: resolvedCampaign,
      serverNow,
      active: campaign ? campaignIsLive(campaign, now) : false,
    });
  } catch (error) {
    logger.error({ err: error }, "Failed to read promotion campaign");
    res.status(500).json({ error: "Failed to read promotion campaign" });
  }
});

promotionRouter.post("/promotion/assign", async (req, res) => {
  if (!checkRateLimit(publicRateLimits, requestIp(req), 120, 60_000)) {
    res.status(429).json({ error: "Too many assignment requests" });
    return;
  }
  try {
    const visitorId = sanitizeFreeText(req.body?.anonymous_visitor_id, "anonymous_visitor_id", 160);
    if (!visitorId || /@|:\/\/|%40|%3a%2f%2f|[?#\s]/i.test(visitorId)) {
      throw new InputError("anonymous_visitor_id is required and must be anonymous");
    }
    const pagePath = sanitizePath(req.body?.page_path, "page_path", true);
    const landingPage = sanitizePath(req.body?.landing_page, "landing_page");
    const referrer = sanitizeReferrer(req.body?.referrer);
    const utmSource = sanitizeTracking(req.body?.utm_source, "utm_source");
    const utmMedium = sanitizeTracking(req.body?.utm_medium, "utm_medium");
    const utmCampaign = sanitizeTracking(req.body?.utm_campaign, "utm_campaign");
    const utmTerm = sanitizeTracking(req.body?.utm_term, "utm_term");
    const utmContent = sanitizeTracking(req.body?.utm_content, "utm_content");
    const firstTouchSource = sanitizeTracking(req.body?.first_touch_source, "first_touch_source");
    const lastTouchSource = sanitizeTracking(req.body?.last_touch_source, "last_touch_source");
    const deviceType = req.body?.device_type === undefined || req.body?.device_type === null || req.body?.device_type === ""
      ? null
      : sanitizeFreeText(req.body.device_type, "device_type", 30);
    if (deviceType && !DEVICE_TYPES.has(deviceType)) throw new InputError("device_type is invalid");
    const rawCampaign = await fetchCampaign();
    const now = new Date();
    const serverNow = now.toISOString();
    const campaign = rawCampaign ? resolveCampaignForPublic(rawCampaign, now) : null;
    if (!campaign || !campaignIsLive(rawCampaign!, now)) {
      res.json({ assignment: null, campaign, serverNow, active: false });
      return;
    }

    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      await client.query(
        "SELECT pg_advisory_xact_lock(hashtext($1))",
        [`graylock.promotion.assignment.${campaign.id}.${visitorId}`],
      );
      const existing = await client.query(
        `
          SELECT a.*, c.campaign_id AS campaign_id_text
          FROM experiment_assignments a
          JOIN promotion_campaigns c ON c.id = a.campaign_id
          WHERE a.campaign_id = $1 AND a.experiment_id = $2 AND a.anonymous_visitor_id = $3
          LIMIT 1
        `,
        [campaign.id, campaign.experimentId, visitorId],
      );
      let row = existing.rows[0];
      if (row?.experiment_variant === "control" && campaign.trafficAllocationControl === 0) {
        // Previous leads may still have a control assignment from the retired
        // holdout test. Keep its history, but give this visit a popup variant.
        await client.query(
          `UPDATE experiment_assignments
           SET experiment_id = 'retired-control:' || id || ':' || experiment_id
           WHERE id = $1`,
          [row.id],
        );
        row = undefined;
      }
      if (!row) {
        const token = randomBytes(32).toString("base64url");
        const variant = chooseVariant(campaign);
        const inserted = await client.query(
          `
            INSERT INTO experiment_assignments (
              campaign_id, experiment_id, anonymous_visitor_id, experiment_variant,
              assignment_token, landing_page, referrer, utm_source, utm_medium,
              utm_campaign, utm_term, utm_content, device_type,
              first_touch_source, last_touch_source
            ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
            RETURNING *, $16::text AS campaign_id_text
          `,
          [
            campaign.id, campaign.experimentId, visitorId, variant, token,
            landingPage, referrer, utmSource, utmMedium, utmCampaign, utmTerm,
            utmContent, deviceType, firstTouchSource, lastTouchSource,
            campaign.campaignId,
          ],
        );
        row = inserted.rows[0];
        const assignmentId = Number(row.id);
        const eligible = isEligiblePath(campaign, pagePath);
        await insertInternalEvent(client, assignmentId, `assignment:${assignmentId}`, "promo_popup_assigned");
        if (eligible) {
          await insertInternalEvent(client, assignmentId, `eligible:${assignmentId}:${pagePath}`, "promo_popup_eligible");
        }
      } else if (lastTouchSource && row.last_touch_source !== lastTouchSource) {
        await client.query(
          "UPDATE experiment_assignments SET last_touch_source=$1 WHERE id=$2",
          [lastTouchSource, row.id],
        );
        row.last_touch_source = lastTouchSource;
      }
      await client.query("COMMIT");
      const assignment = toAssignment(row);
      const suppressed = await suppressionFor(assignment, campaign);
      res.json({
        assignment: assignmentResponse(assignment, suppressed, campaign.stage),
        campaign,
        serverNow,
        active: true,
      });
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    failInput(res, error);
  }
});

promotionRouter.post("/promotion/events", async (req, res): Promise<void> => {
  if (!checkRateLimit(publicRateLimits, requestIp(req), 240, 60_000)) {
    res.status(429).json({ error: "Too many event requests" });
    return;
  }
  try {
    const token = sanitizeFreeText(req.body?.assignment_token, "assignment_token", 160);
    const eventId = sanitizeFreeText(req.body?.event_id, "event_id", 160);
    const eventName = sanitizeFreeText(req.body?.event_name, "event_name", 80);
    if (!token || !eventId || !eventName || !PUBLIC_EVENT_NAMES.has(eventName)) {
      throw new InputError("assignment_token, event_id, and a supported event_name are required");
    }
    if (!/^[A-Za-z0-9_-]+$/.test(token)) throw new InputError("assignment_token is invalid");
    if (/@|:\/\/|[?#\s]/.test(eventId)) throw new InputError("event_id is invalid");
    const assignmentData = await assignmentByToken(token);
    if (!assignmentData) {
      res.status(401).json({ error: "Invalid assignment token" });
      return;
    }
    const { assignment, campaign } = assignmentData;
    // A token remains resolvable for historical reporting, but an assignment
    // from a prior recurring month must not accept new browser activity.
    if (!assignmentIsCurrentOccurrence(assignment, campaign)) {
      res.json({ ok: true });
      return;
    }
    const pagePath = sanitizePath(req.body?.page_path, "page_path");
    const source = sanitizeTracking(req.body?.source, "source");
    const triggerType = sanitizeTracking(req.body?.trigger_type, "trigger_type");
    const secondsOnPage = asOptionalNumber(req.body?.seconds_on_page, "seconds_on_page", 0, 86_400);
    const scrollDepth = asOptionalNumber(req.body?.scroll_depth, "scroll_depth", 0, 1);
    const ctaLabel = sanitizeFreeText(req.body?.cta_label, "cta_label", 120);
    const dismissalType = sanitizeFreeText(req.body?.dismissal_type, "dismissal_type", 40);
    if (dismissalType && !DISMISSAL_TYPES.has(dismissalType)) throw new InputError("dismissal_type is invalid");
    if (eventName === "promo_popup_dismissed" && !dismissalType) {
      throw new InputError("dismissal_type is required for a dismissal");
    }
    if (eventName === "promo_popup_impression") {
      if (!campaignIsLive(campaign) || !campaign.popupEnabled || assignment.experimentVariant === "control") {
        res.json({ ok: true });
        return;
      }
      if (await suppressionFor(assignment, campaign)) {
        res.json({ ok: true });
        return;
      }
      if (
        secondsOnPage === null || secondsOnPage < campaign.triggerMinimumSeconds ||
        scrollDepth === null || scrollDepth < campaign.triggerMinimumScrollDepth ||
        !isEligiblePath(campaign, pagePath)
      ) {
        res.json({ ok: true });
        return;
      }
    } else if (
      ["promo_popup_cta_clicked", "promo_popup_dismissed", "promo_flow_opened", "promo_form_started"].includes(eventName) &&
      (!campaignIsLive(campaign) || !campaign.popupEnabled || assignment.experimentVariant === "control")
    ) {
      res.json({ ok: true });
      return;
    } else if (["promo_popup_eligible", "promo_popup_assigned"].includes(eventName)) {
      if (!campaignIsLive(campaign)) {
        res.json({ ok: true });
        return;
      }
    }
    if (eventName === "promo_popup_cta_clicked" && await suppressionFor(assignment, campaign)) {
      res.json({ ok: true });
      return;
    }
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const inserted = await client.query(
        `
          INSERT INTO promotion_events (
            assignment_id, event_id, event_name, source, page_path,
            landing_page, referrer, utm_source, utm_medium, utm_campaign,
            utm_term, utm_content, device_type, trigger_type, seconds_on_page,
            scroll_depth, cta_label, dismissal_type
          ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)
          ON CONFLICT DO NOTHING
        `,
        [
          assignment.id, eventId, eventName, source, pagePath,
          assignment.landingPage, assignment.referrer, assignment.utmSource,
          assignment.utmMedium, assignment.utmCampaign, assignment.utmTerm,
          assignment.utmContent, assignment.deviceType, triggerType,
          secondsOnPage, scrollDepth, ctaLabel, dismissalType,
        ],
      );
      if ((inserted.rowCount ?? 0) > 0) {
        if (eventName === "promo_popup_dismissed") {
          await client.query("UPDATE experiment_assignments SET dismissed_at = NOW() WHERE id = $1", [assignment.id]);
        } else if (eventName === "promo_popup_cta_clicked") {
          await client.query("UPDATE experiment_assignments SET cta_clicked_at = NOW() WHERE id = $1", [assignment.id]);
        } else if (eventName === "promo_form_submitted" || eventName === "standard_form_submitted") {
          await client.query("UPDATE experiment_assignments SET converted_at = NOW() WHERE id = $1", [assignment.id]);
        }
      }
      await client.query("COMMIT");
      res.json({ ok: true });
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    failInput(res, error);
    return;
  }
});

promotionRouter.get("/promotion/admin/session", (req, res) => {
  setNoCache(res);
  const session = getSession(req);
  if (!session) {
    res.json({ authenticated: false });
    return;
  }
  res.json({ authenticated: true, csrfToken: session.csrfToken });
});

promotionRouter.post("/promotion/admin/login", requirePromotionOrigin, (req, res) => {
  if (!adminSecret("PROMOTION_ADMIN_PASSWORD") || !adminSecret("SESSION_SECRET")) {
    res.status(503).json({ error: "Promotion admin authentication is not configured" });
    return;
  }
  const ip = requestIp(req);
  if (!checkRateLimit(loginAttempts, ip, 8, 15 * 60_000)) {
    res.status(429).json({ error: "Too many login attempts" });
    return;
  }
  const username = typeof req.body?.username === "string" ? req.body.username.slice(0, 120) : "";
  const password = typeof req.body?.password === "string" ? req.body.password : "";
  const expectedUsername = process.env.PROMOTION_ADMIN_USERNAME || "admin";
  const expectedPassword = adminSecret("PROMOTION_ADMIN_PASSWORD")!;
  // Both comparisons run for every login attempt; timingSafeEqual is used by
  // constantTimeEqual even when the lengths differ.
  const valid = constantTimeEqual(username, expectedUsername) &&
    constantTimeEqual(password, expectedPassword);
  if (!valid) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }
  const csrfToken = issueSession(res, expectedUsername);
  res.json({ authenticated: true, csrfToken });
});

promotionRouter.post(
  "/promotion/admin/logout",
  requirePromotionOrigin,
  requirePromotionAdmin,
  requirePromotionCsrf,
  (req, res) => {
    clearSession(req, res);
    res.json({ authenticated: false });
  },
);

promotionRouter.get(
  "/promotion/admin/campaign",
  requirePromotionAdmin,
  async (_req, res) => {
    setNoCache(res);
    try {
      const campaign = await fetchCampaign();
      res.json({ campaign });
    } catch (error) {
      logger.error({ err: error }, "Failed to read admin campaign");
      res.status(500).json({ error: "Failed to read campaign" });
    }
  },
);

promotionRouter.patch(
  "/promotion/admin/campaign",
  requirePromotionOrigin,
  requirePromotionAdmin,
  requirePromotionCsrf,
  async (req, res) => {
    try {
      const existing = await fetchCampaign();
      if (!existing) {
        res.status(404).json({ error: "Campaign not found" });
        return;
      }
      const incoming = req.body?.campaign && typeof req.body.campaign === "object"
        ? req.body.campaign
        : req.body;
      if (!incoming || typeof incoming !== "object") throw new InputError("campaign is required");
      const campaign = { ...existing } as Record<string, unknown>;
      const editableFields = [
        "enabled", "campaignName", "timezone", "recurrenceMode", "startDateTime", "endDateTime",
        "deadlineDisplayText", "eligiblePagePaths", "trafficAllocationControl",
        "trafficAllocationVariantA", "trafficAllocationVariantB",
        "triggerMinimumSeconds", "triggerMinimumScrollDepth",
        "dismissalFrequencyCapDays", "popupEnabled", "dashboardEnabled",
        "manualKillSwitch", "standardBuildFeeDisplayValue", "monthlyPlanDisclosure",
        "legalTermsUrl", "privacyPolicyUrl", "stage", "minEvaluationDays",
        "minEligibleVisitors",
      ];
      for (const field of editableFields) {
        if (field in incoming) campaign[field] = incoming[field];
      }
      if (typeof campaign.enabled !== "boolean" || typeof campaign.popupEnabled !== "boolean" ||
        typeof campaign.dashboardEnabled !== "boolean" || typeof campaign.manualKillSwitch !== "boolean") {
        throw new InputError("boolean campaign fields are invalid");
      }
      if (typeof campaign.recurrenceMode !== "string" || !RECURRENCE_MODES.has(campaign.recurrenceMode)) {
        throw new InputError("recurrenceMode must be manual or monthly");
      }
      const startDateTime = asOptionalTimestamp(campaign.startDateTime, "startDateTime");
      const endDateTime = asOptionalTimestamp(campaign.endDateTime, "endDateTime");
      if (startDateTime && endDateTime && new Date(startDateTime) >= new Date(endDateTime)) {
        throw new InputError("endDateTime must be after startDateTime");
      }
      const allocationFields = ["trafficAllocationControl", "trafficAllocationVariantA", "trafficAllocationVariantB"] as const;
      const allocations = allocationFields.map((field) => {
        const value = Number(campaign[field]);
        if (!Number.isInteger(value) || value < 0 || value > 100) throw new InputError(`${field} is invalid`);
        return value;
      });
      if (allocations.reduce((sum, value) => sum + value, 0) !== 100) {
        throw new InputError("traffic allocations must total 100");
      }
      if (campaign.enabled && campaign.recurrenceMode === "manual" && (!startDateTime || !endDateTime)) {
        throw new InputError("real startDateTime and endDateTime are required before enabling");
      }
      const confirmEnabled = req.body?.confirmEnabled === true || incoming.confirmEnabled === true;
      const confirmDeadline = req.body?.confirmDeadline === true || incoming.confirmDeadline === true;
      const confirmRecurrenceChange = req.body?.confirmRecurrenceChange === true ||
        incoming.confirmRecurrenceChange === true;
      if (!existing.enabled && campaign.enabled && !confirmEnabled) {
        throw new InputError("confirmEnabled must be true when enabling");
      }
      if (existing.endDateTime !== endDateTime && !confirmDeadline) {
        throw new InputError("confirmDeadline must be true when changing the deadline");
      }
      if (
        (existing.recurrenceMode !== campaign.recurrenceMode || existing.timezone !== campaign.timezone) &&
        !confirmRecurrenceChange
      ) {
        throw new InputError("confirmRecurrenceChange must be true when changing recurrenceMode or timezone");
      }
      const pagePaths = campaign.eligiblePagePaths;
      if (!Array.isArray(pagePaths) || pagePaths.length > 100 ||
        !pagePaths.every((path) => typeof path === "string" && path.startsWith("/") && !/[?#]/.test(path))) {
        throw new InputError("eligiblePagePaths is invalid");
      }
      const numberFields = [
        "triggerMinimumSeconds", "dismissalFrequencyCapDays", "minEvaluationDays",
        "minEligibleVisitors",
      ];
      for (const field of numberFields) {
        const value = Number(campaign[field]);
        if (!Number.isInteger(value) || value < 0 || value > 1_000_000) {
          throw new InputError(`${field} is invalid`);
        }
        campaign[field] = value;
      }
      const scrollDepth = Number(campaign.triggerMinimumScrollDepth);
      if (!Number.isFinite(scrollDepth) || scrollDepth < 0 || scrollDepth > 1) {
        throw new InputError("triggerMinimumScrollDepth is invalid");
      }
      const textFields = [
        "campaignName", "timezone", "deadlineDisplayText", "standardBuildFeeDisplayValue",
        "monthlyPlanDisclosure", "legalTermsUrl", "privacyPolicyUrl", "stage",
      ];
      for (const field of textFields) {
        const value = campaign[field];
        if (value !== null && value !== undefined && (typeof value !== "string" || value.length > 2_000)) {
          throw new InputError(`${field} is invalid`);
        }
      }
      for (const field of ["campaignName", "timezone", "stage"]) {
        if (typeof campaign[field] !== "string" || String(campaign[field]).trim().length === 0) {
          throw new InputError(`${field} is required`);
        }
      }
      try {
        new Intl.DateTimeFormat("en-US", { timeZone: String(campaign.timezone) }).format();
      } catch {
        throw new InputError("timezone is invalid");
      }
      const client = await pool.connect();
      try {
        await client.query("BEGIN");
        const updated = await client.query(
          `
            UPDATE promotion_campaigns SET
              enabled=$1, campaign_name=$2, timezone=$3, recurrence_mode=$4,
              start_date_time=$5, end_date_time=$6, deadline_display_text=$7, eligible_page_paths=$8,
              traffic_allocation_control=$9, traffic_allocation_variant_a=$10,
              traffic_allocation_variant_b=$11, trigger_minimum_seconds=$12,
              trigger_minimum_scroll_depth=$13, dismissal_frequency_cap_days=$14,
              popup_enabled=$15, dashboard_enabled=$16, manual_kill_switch=$17,
              standard_build_fee_display_value=$18, monthly_plan_disclosure=$19,
              legal_terms_url=$20, privacy_policy_url=$21, stage=$22,
              min_evaluation_days=$23, min_eligible_visitors=$24,
              version=version+1, updated_at=NOW()
            WHERE campaign_id=$25
            RETURNING *
          `,
          [
            campaign.enabled, campaign.campaignName, campaign.timezone, campaign.recurrenceMode,
            startDateTime, endDateTime, campaign.deadlineDisplayText, JSON.stringify(pagePaths),
            allocations[0], allocations[1], allocations[2], campaign.triggerMinimumSeconds,
            scrollDepth, campaign.dismissalFrequencyCapDays, campaign.popupEnabled,
            campaign.dashboardEnabled, campaign.manualKillSwitch,
            campaign.standardBuildFeeDisplayValue, campaign.monthlyPlanDisclosure,
            campaign.legalTermsUrl, campaign.privacyPolicyUrl, campaign.stage,
            campaign.minEvaluationDays, campaign.minEligibleVisitors, existing.campaignId,
          ],
        );
        const updatedCampaign = toCampaign(updated.rows[0]);
        await client.query(
          `
            INSERT INTO promotion_campaign_versions (campaign_id, version, config, changed_by)
            VALUES ($1,$2,$3,$4)
          `,
          [
            updated.rows[0].id,
            updatedCampaign.version,
            JSON.stringify(updatedCampaign),
            (res.locals.promotionAdmin as { username: string }).username,
          ],
        );
        await client.query("COMMIT");
        setNoCache(res);
        res.json({ campaign: updatedCampaign });
      } catch (error) {
        await client.query("ROLLBACK");
        throw error;
      } finally {
        client.release();
      }
    } catch (error) {
      failInput(res, error);
    }
  },
);

promotionRouter.post(
  "/promotion/admin/campaign/pause",
  requirePromotionOrigin,
  requirePromotionAdmin,
  requirePromotionCsrf,
  async (_req, res) => {
    try {
      const result = await pool.query(
        `
          UPDATE promotion_campaigns SET manual_kill_switch=TRUE, enabled=FALSE,
            version=version+1, updated_at=NOW()
          WHERE campaign_id=$1
          RETURNING *
        `,
        [DEFAULT_CAMPAIGN_ID],
      );
      if (!result.rows[0]) {
        res.status(404).json({ error: "Campaign not found" });
        return;
      }
      const campaign = toCampaign(result.rows[0]);
      res.json({ campaign, paused: true });
    } catch (error) {
      logger.error({ err: error }, "Failed to pause promotion");
      res.status(500).json({ error: "Failed to pause promotion" });
    }
  },
);

// Short alias kept for clients that model pause as an admin action rather
// than a campaign subresource.
promotionRouter.post(
  "/promotion/admin/pause",
  requirePromotionOrigin,
  requirePromotionAdmin,
  requirePromotionCsrf,
  async (_req, res) => {
    try {
      const result = await pool.query(
        `
          UPDATE promotion_campaigns SET manual_kill_switch=TRUE, enabled=FALSE,
            version=version+1, updated_at=NOW()
          WHERE campaign_id=$1
          RETURNING *
        `,
        [DEFAULT_CAMPAIGN_ID],
      );
      if (!result.rows[0]) {
        res.status(404).json({ error: "Campaign not found" });
        return;
      }
      res.json({ campaign: toCampaign(result.rows[0]), paused: true });
    } catch (error) {
      logger.error({ err: error }, "Failed to pause promotion");
      res.status(500).json({ error: "Failed to pause promotion" });
    }
  },
);

promotionRouter.get(
  "/promotion/admin/report",
  requirePromotionAdmin,
  async (req, res) => {
    setNoCache(res);
    try {
      const report = await buildReport(readReportFilters(req));
      res.json(report);
    } catch (error) {
      failInput(res, error);
    }
  },
);

promotionRouter.get(
  "/promotion/admin/export",
  requirePromotionAdmin,
  async (req, res) => {
    try {
      const type = req.query.type;
      if (type !== "aggregate" && type !== "leads") {
        res.status(400).json({ error: "type must be aggregate or leads" });
        return;
      }
      const report = await buildReport(readReportFilters(req));
      if (type === "aggregate") {
        const rows = report.metrics as Array<Record<string, unknown>>;
        const lines = [
          ["variant", "eligibleVisitors", "assignedVisitors", "standardQualifiedLeads", "promotionQualifiedLeads", "counts"].map(csvCell).join(","),
          ...rows.map((row) => [
            row.variant, row.eligibleVisitors, row.assignedVisitors,
            row.standardQualifiedLeads, row.promotionQualifiedLeads,
            JSON.stringify(row.counts),
          ].map(csvCell).join(",")),
        ];
        res.type("text/csv").setHeader("Content-Disposition", "attachment; filename=promotion-aggregate.csv").send(lines.join("\n"));
      } else {
        const rows = report.leads as Array<Record<string, unknown>>;
        const lines = [
          LEAD_EXPORT_HEADERS.map(csvCell).join(","),
          ...rows.map((row) => LEAD_EXPORT_HEADERS.map((header) => csvCell(row[header])).join(",")),
        ];
        res.type("text/csv").setHeader("Content-Disposition", "attachment; filename=promotion-leads.csv").send(lines.join("\n"));
      }
    } catch (error) {
      failInput(res, error);
    }
  },
);

promotionRouter.get(
  "/promotion/admin/leads/:id",
  requirePromotionAdmin,
  async (req, res) => {
    try {
      const leadIdentifier = sanitizeFreeText(req.params.id, "lead id", 100);
      if (!leadIdentifier) throw new InputError("lead id is required");
      const leadResult = await pool.query(
          `
            SELECT l.*, c.experiment_id AS campaign_base_experiment_id
            FROM promotion_lead_attribution l
            LEFT JOIN promotion_campaigns c ON c.campaign_id = l.campaign_id
            WHERE l.internal_lead_id=$1 OR l.id::text=$1
            LIMIT 1
          `,
        [leadIdentifier],
      );
      if (!leadResult.rows[0]) {
        res.status(404).json({ error: "Lead not found" });
        return;
      }
      const lead = leadResult.rows[0];
      const [historyResult, economicsResult] = await Promise.all([
        pool.query(
          `
            SELECT id, internal_lead_id, field_name, old_value, new_value,
              changed_by, changed_at
            FROM promotion_lead_status_history
            WHERE lead_id=$1
            ORDER BY changed_at ASC, id ASC
          `,
          [lead.id],
        ),
        pool.query(
          `
            SELECT id, lead_id, internal_lead_id, kind, amount,
              costs_complete, created_by, created_at
            FROM promotion_economic_records
            WHERE lead_id=$1
            ORDER BY created_at ASC, id ASC
          `,
          [lead.id],
        ),
      ]);
      res.json({
        lead: leadRowToApi(lead),
        history: historyResult.rows.map((row) => ({
          id: Number(row.id),
          internalLeadId: row.internal_lead_id,
          fieldName: row.field_name,
          oldValue: row.old_value,
          newValue: row.new_value,
          changedBy: row.changed_by,
          changedAt: row.changed_at,
        })),
        economics: economicsResult.rows.map((row) => ({
          id: Number(row.id),
          leadId: Number(row.lead_id),
          internalLeadId: row.internal_lead_id,
          kind: row.kind,
          amount: Number(row.amount),
          costsComplete: Boolean(row.costs_complete),
          createdBy: row.created_by,
          createdAt: row.created_at,
        })),
      });
    } catch (error) {
      failInput(res, error);
    }
  },
);

const LEAD_EDIT_FIELDS: Record<string, { column: string; kind: "text" | "timestamp" | "amount" }> = {
  status: { column: "lead_status", kind: "text" },
  qualificationStatus: { column: "qualification_status", kind: "text" },
  noFitReason: { column: "no_fit_reason", kind: "text" },
  notes: { column: "notes", kind: "text" },
  fitCallDate: { column: "fit_call_date", kind: "timestamp" },
  fitCallStatus: { column: "fit_call_status", kind: "text" },
  directionStatus: { column: "direction_status", kind: "text" },
  promotionAcceptanceStatus: { column: "promotion_acceptance_status", kind: "text" },
  waivedBuildFeeAmount: { column: "waived_build_fee_amount", kind: "amount" },
  monthlyPlan: { column: "monthly_plan", kind: "text" },
  firstPaymentStatus: { column: "first_payment_status", kind: "text" },
  launchStatus: { column: "launch_status", kind: "text" },
  refundCancellationStatus: { column: "refund_cancellation_status", kind: "text" },
  assignedTeamMember: { column: "assigned_team_member", kind: "text" },
  businessCategory: { column: "business_category", kind: "text" },
  declaredWebsiteGoal: { column: "declared_website_goal", kind: "text" },
  declaredTiming: { column: "declared_timing", kind: "text" },
};

function outcomeFor(field: string, value: string): string | null {
  if (field === "qualificationStatus" && value === "qualified") return "lead_qualified";
  if (field === "qualificationStatus" && value === "not_qualified") return "lead_not_qualified";
  const map: Record<string, string> = {
    qualified: "lead_qualified",
    not_qualified: "lead_not_qualified",
    fit_call_booked: "fit_call_booked",
    fit_call_held: "fit_call_held",
    homepage_direction_delivered: "homepage_direction_delivered",
    promotion_accepted: "promotion_accepted",
    first_payment_collected: "monthly_plan_first_payment_collected",
    launched: "launch_completed",
    refund_or_guarantee_claim: "refund_or_guarantee_claim",
    cancelled: "cancellation_or_payment_failure",
    payment_failed: "cancellation_or_payment_failure",
  };
  if (field === "status") return map[value] ?? null;
  if (field === "fitCallStatus" && value === "booked") return "fit_call_booked";
  if (field === "fitCallStatus" && value === "held") return "fit_call_held";
  if (field === "directionStatus" && value === "delivered") return "homepage_direction_delivered";
  if (field === "promotionAcceptanceStatus" && value === "accepted") return "promotion_accepted";
  if (field === "firstPaymentStatus" && value === "collected") return "monthly_plan_first_payment_collected";
  if (field === "firstPaymentStatus" && value === "failed") return "payment_failed";
  if (field === "launchStatus" && value === "launched") return "launch_completed";
  if (field === "refundCancellationStatus" && ["refund", "guarantee_claim"].includes(value)) return "refund_or_guarantee_claim";
  if (field === "refundCancellationStatus" && ["cancelled", "payment_failed"].includes(value)) {
    return "cancellation_or_payment_failure";
  }
  return null;
}

promotionRouter.patch(
  "/promotion/admin/leads/:id",
  requirePromotionOrigin,
  requirePromotionAdmin,
  requirePromotionCsrf,
  async (req, res) => {
    try {
      const leadIdentifier = sanitizeFreeText(req.params.id, "lead id", 100);
      if (!leadIdentifier) throw new InputError("lead id is required");
      const client = await pool.connect();
      try {
        await client.query("BEGIN");
        const found = await client.query(
          "SELECT * FROM promotion_lead_attribution WHERE internal_lead_id=$1 OR id::text=$1 LIMIT 1 FOR UPDATE",
          [leadIdentifier],
        );
        if (!found.rows[0]) {
          await client.query("ROLLBACK");
          res.status(404).json({ error: "Lead not found" });
          return;
        }
        const row = found.rows[0] as Record<string, unknown>;
        const body = req.body && typeof req.body === "object" ? req.body : {};
        const changes: Array<{ field: string; column: string; value: unknown; old: unknown }> = [];
        for (const [field, definition] of Object.entries(LEAD_EDIT_FIELDS)) {
          if (!(field in body)) continue;
          let value: unknown = body[field];
          if (definition.kind === "timestamp") {
            value = asOptionalTimestamp(value, field);
          } else if (definition.kind === "amount") {
            value = asOptionalNumber(value, field, 0, 1_000_000_000);
          } else if (value !== null && value !== undefined) {
            if (typeof value !== "string" || value.length > 5_000) throw new InputError(`${field} is invalid`);
          }
          if (field === "status" && value !== null && !LEAD_STATUSES.has(String(value))) {
            throw new InputError("status is invalid");
          }
          if (field === "noFitReason" && value !== null && !NO_FIT_REASONS.has(String(value))) {
            throw new InputError("noFitReason is invalid");
          }
          if (field === "qualificationStatus" && value !== null &&
            !["pending", "qualified", "not_qualified"].includes(String(value))) {
            throw new InputError("qualificationStatus is invalid");
          }
          const statusSets: Record<string, Set<string>> = {
            fitCallStatus: FIT_CALL_STATUSES,
            directionStatus: DIRECTION_STATUSES,
            promotionAcceptanceStatus: PROMOTION_ACCEPTANCE_STATUSES,
            firstPaymentStatus: FIRST_PAYMENT_STATUSES,
            launchStatus: LAUNCH_STATUSES,
            refundCancellationStatus: REFUND_CANCELLATION_STATUSES,
          };
          if (value !== null && statusSets[field] && !statusSets[field].has(String(value))) {
            throw new InputError(`${field} is invalid`);
          }
          const old = row[definition.column];
          if (String(old ?? "") !== String(value ?? "")) changes.push({ field, column: definition.column, value, old });
        }
        const noFitChange = changes.find((change) => change.field === "noFitReason");
        const noFitValue = noFitChange ? noFitChange.value : row.no_fit_reason;
        if (noFitValue === "other") {
          const notesChange = changes.find((change) => change.field === "notes");
          const notesValue = notesChange ? notesChange.value : row.notes;
          if (typeof notesValue !== "string" || notesValue.trim().length === 0) {
            throw new InputError("notes are required when noFitReason is other");
          }
        }
        for (const change of changes) {
          await client.query(
            `UPDATE promotion_lead_attribution SET ${change.column}=$1, updated_at=NOW() WHERE id=$2`,
            [change.value, row.id],
          );
          await client.query(
            `
              INSERT INTO promotion_lead_status_history
                (lead_id, internal_lead_id, field_name, old_value, new_value, changed_by)
              VALUES ($1,$2,$3,$4,$5,$6)
            `,
            [
              row.id, row.internal_lead_id, change.field, change.old === null ? null : String(change.old),
              change.value === null ? null : String(change.value),
              (res.locals.promotionAdmin as { username: string }).username,
            ],
          );
          const eventName = typeof change.value === "string" ? outcomeFor(change.field, change.value) : null;
          if (eventName && row.assignment_id) {
            await insertInternalEvent(
              client,
              Number(row.assignment_id),
              `lead:${row.internal_lead_id}:${eventName}`,
              eventName,
            );
          }
        }
        if (changes.some((change) => change.field === "promotionAcceptanceStatus" && change.value === "accepted")) {
          await client.query("UPDATE experiment_assignments SET converted_at=COALESCE(converted_at,NOW()) WHERE id=$1", [row.assignment_id]);
        }
        await client.query("COMMIT");
        const updated = await pool.query(
          `
            SELECT l.*, c.experiment_id AS campaign_base_experiment_id
            FROM promotion_lead_attribution l
            LEFT JOIN promotion_campaigns c ON c.campaign_id = l.campaign_id
            WHERE l.id=$1
          `,
          [row.id],
        );
        res.json({ lead: updated.rows[0] ? leadRowToApi(updated.rows[0]) : null });
      } catch (error) {
        await client.query("ROLLBACK");
        throw error;
      } finally {
        client.release();
      }
    } catch (error) {
      failInput(res, error);
    }
  },
);

promotionRouter.post(
  "/promotion/admin/leads/:id/economics",
  requirePromotionOrigin,
  requirePromotionAdmin,
  requirePromotionCsrf,
  async (req, res) => {
    try {
      const leadIdentifier = sanitizeFreeText(req.params.id, "lead id", 100);
      if (!leadIdentifier || !ECONOMIC_KINDS.has(String(req.body?.kind))) {
        throw new InputError("kind is invalid");
      }
      const amount = asOptionalNumber(req.body?.amount, "amount", 0, 1_000_000_000);
      if (amount === null) throw new InputError("amount is required");
      if (req.body?.costsComplete !== undefined && typeof req.body.costsComplete !== "boolean") {
        throw new InputError("costsComplete is invalid");
      }
      const lead = await pool.query(
        "SELECT id, internal_lead_id FROM promotion_lead_attribution WHERE internal_lead_id=$1 OR id::text=$1 LIMIT 1",
        [leadIdentifier],
      );
      if (!lead.rows[0]) {
        res.status(404).json({ error: "Lead not found" });
        return;
      }
      const inserted = await pool.query(
        `
          INSERT INTO promotion_economic_records
            (lead_id, internal_lead_id, kind, amount, costs_complete, created_by)
          VALUES ($1,$2,$3,$4,$5,$6)
          RETURNING *
        `,
        [
          lead.rows[0].id, lead.rows[0].internal_lead_id, req.body.kind, amount,
          req.body.costsComplete === true,
          (res.locals.promotionAdmin as { username: string }).username,
        ],
      );
      const record = inserted.rows[0];
      res.status(201).json({
        economicRecord: {
          id: Number(record.id),
          leadId: Number(record.lead_id),
          internalLeadId: record.internal_lead_id,
          kind: record.kind,
          amount: Number(record.amount),
          costsComplete: Boolean(record.costs_complete),
          createdBy: record.created_by,
          createdAt: record.created_at,
        },
      });
    } catch (error) {
      failInput(res, error);
    }
  },
);

export {
  toSnakeMetadata,
  assignmentByToken,
  PUBLIC_EVENT_NAMES,
  OUTCOME_EVENT_NAMES,
  allocationsAreValid,
  chooseVariant,
  campaignIsLive,
  constantTimeEqual,
  sanitizePath,
  sanitizeTracking,
  readReportFilters,
  leadRowToApi,
  LEAD_EXPORT_HEADERS,
  LEAD_STATUSES,
  NO_FIT_REASONS,
  outcomeFor,
};
export default promotionRouter;