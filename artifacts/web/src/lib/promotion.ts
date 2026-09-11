/**
 * Client-side primitives for the build-fee-waiver experiment.
 *
 * This module deliberately has no React or booking imports.  Booking and
 * promotion components communicate through these small, non-PII helpers so
 * that the lead form can carry the assignment without creating a context
 * dependency cycle.
 */

export const PROMOTION_VARIANTS = ["control", "savings_led", "direction_led"] as const;
export type PromotionVariant = (typeof PROMOTION_VARIANTS)[number];

export type PromotionEventName =
  | "promo_popup_eligible"
  | "promo_popup_assigned"
  | "promo_popup_impression"
  | "promo_popup_cta_clicked"
  | "promo_popup_dismissed"
  | "promo_flow_opened"
  | "promo_form_started"
  | "promo_form_submitted"
  | "standard_cta_clicked"
  | "standard_form_started"
  | "standard_form_submitted"
  | "lead_qualified"
  | "lead_not_qualified"
  | "fit_call_booked"
  | "fit_call_held"
  | "homepage_direction_delivered"
  | "promotion_accepted"
  | "monthly_plan_first_payment_collected"
  | "launch_completed"
  | "refund_or_guarantee_claim"
  | "cancellation_or_payment_failure";

export interface PromotionCampaign {
  campaignId: string;
  experimentId: string;
  enabled: boolean;
  campaignName: string;
  timezone: string;
  startDateTime: string | null;
  endDateTime: string | null;
  deadlineDisplayText: string | null;
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
  standardBuildFeeDisplayValue: string;
  monthlyPlanDisclosure: string;
  legalTermsUrl: string;
  privacyPolicyUrl: string;
  experimentStage?: string | number | null;
  [key: string]: unknown;
}

export interface PromotionAssignment {
  campaign_id: string;
  experiment_id: string;
  experiment_variant: PromotionVariant;
  anonymous_visitor_id: string;
  assigned_at: string;
  assignment_token: string;
  stage?: string | number | null;
}

export interface PromotionLeadAttribution {
  campaign_id?: string;
  experiment_id?: string;
  experiment_variant?: PromotionVariant;
  anonymous_visitor_id?: string;
  assignment_token?: string;
  assigned_at?: string;
  promotion_source?: "build_fee_waiver_popup" | "standard_homepage_cta" | string;
  popup_trigger_type?: string;
  popup_impression_timestamp?: string;
  popup_cta_clicked_timestamp?: string;
  first_touch_source?: string;
  last_touch_source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referrer?: string;
  landing_page?: string;
  device_type?: string;
  preview?: boolean;
}

export interface PromotionEventFields {
  page_path?: string;
  source?: string;
  trigger_type?: string;
  seconds_on_page?: number;
  scroll_depth?: number;
  cta_label?: string;
  dismissal_type?: "close_button" | "no_thanks" | "escape_key" | "backdrop_click" | string;
  [key: string]: string | number | undefined;
}

const PREVIEW_DEADLINE = "September 30, 2026 at 11:59 PM Pacific — preview only";

/**
 * A disabled fallback is intentional.  A network failure must never turn the
 * popup on or create an unassigned treatment experience.
 */
export const DEFAULT_PROMOTION_CAMPAIGN: PromotionCampaign = {
  campaignId: "",
  experimentId: "",
  enabled: false,
  campaignName: "September Build-Fee Waiver",
  timezone: "America/Los_Angeles",
  startDateTime: null,
  endDateTime: null,
  deadlineDisplayText: null,
  eligiblePagePaths: ["/"],
  trafficAllocationControl: 0.5,
  trafficAllocationVariantA: 0.5,
  trafficAllocationVariantB: 0,
  triggerMinimumSeconds: 25,
  triggerMinimumScrollDepth: 0.55,
  dismissalFrequencyCapDays: 30,
  popupEnabled: false,
  dashboardEnabled: false,
  manualKillSwitch: false,
  standardBuildFeeDisplayValue: "from $799",
  monthlyPlanDisclosure: "Applicable monthly plan, scope, and terms apply.",
  legalTermsUrl: "/terms",
  privacyPolicyUrl: "/privacy",
  experimentStage: "stage_1",
};

export function getPromotionDeadline(
  campaign: PromotionCampaign,
  preview = false,
): string {
  return campaign.deadlineDisplayText?.trim() || (preview ? PREVIEW_DEADLINE : "");
}

export function mergePromotionCampaign(
  campaign?: Partial<PromotionCampaign> | null,
): PromotionCampaign {
  const merged = { ...DEFAULT_PROMOTION_CAMPAIGN, ...(campaign ?? {}) };
  return {
    ...merged,
    eligiblePagePaths:
      Array.isArray(merged.eligiblePagePaths) && merged.eligiblePagePaths.length
        ? merged.eligiblePagePaths.filter((path): path is string => typeof path === "string")
        : ["/"],
  };
}

const STORAGE_VISITOR_KEY = "graylock-promotion-anonymous-visitor-id";
const STORAGE_FIRST_TOUCH_KEY = "graylock-promotion-first-touch";
const STORAGE_LANDING_PAGE_KEY = "graylock-promotion-landing-page";
const STORAGE_STATE_PREFIX = "graylock-promotion-state:";
const STORAGE_ASSIGNMENT_PREFIX = "graylock-promotion-assignment:";
const STORAGE_MAX_VALUE_LENGTH = 4096;

let memoryVisitorId: string | null = null;
let memoryFirstTouch: string | null = null;
let memoryLandingPage: string | null = null;
const memoryStates = new Map<string, PromotionSuppressionState>();

export interface PromotionSuppressionState {
  campaignId: string;
  configHash: string;
  dismissedAt?: string;
  ctaClickedAt?: string;
  formStartedAt?: string;
  submittedAt?: string;
}

function getStorage(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function isPromotionStorageAvailable(): boolean {
  const storage = getStorage();
  if (!storage) return false;
  const probeKey = "graylock-promotion-storage-probe";
  try {
    storage.setItem(probeKey, "1");
    storage.removeItem(probeKey);
    return true;
  } catch {
    return false;
  }
}

function readStorage(key: string): string | null {
  const storage = getStorage();
  if (!storage) return null;
  try {
    const value = storage.getItem(key);
    return value && value.length <= STORAGE_MAX_VALUE_LENGTH ? value : null;
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string): void {
  if (value.length > STORAGE_MAX_VALUE_LENGTH) return;
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.setItem(key, value);
  } catch {
    // Private browsing and full storage should degrade to in-memory state.
  }
}

function makeUuid(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  // UUID-shaped fallback for older browsers without crypto.randomUUID.
  const bytes = new Uint8Array(16);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export function getAnonymousVisitorId(options: { persist?: boolean } = {}): string {
  const persist = options.persist !== false;
  if (memoryVisitorId) return memoryVisitorId;
  if (persist) {
    const stored = readStorage(STORAGE_VISITOR_KEY);
    if (stored) {
      memoryVisitorId = stored;
      return stored;
    }
  }
  memoryVisitorId = makeUuid();
  if (persist) writeStorage(STORAGE_VISITOR_KEY, memoryVisitorId);
  return memoryVisitorId;
}

export function sanitizePath(value: string | undefined | null): string {
  if (!value) return "";
  try {
    const parsed = new URL(value, typeof window !== "undefined" ? window.location.origin : "https://graylockdigital.com");
    const path = parsed.pathname || "/";
    return path.length > 500 ? path.slice(0, 500) : path;
  } catch {
    const path = value.split("?")[0].split("#")[0];
    return path.length > 500 ? path.slice(0, 500) : path;
  }
}

export function sanitizeReferrer(value: string | undefined | null): string {
  if (!value) return "";
  try {
    const parsed = new URL(value);
    // Keep only the origin.  Besides avoiding query text, this matches the
    // server contract and prevents page content from entering attribution.
    return parsed.origin.slice(0, 500);
  } catch {
    return "";
  }
}

export function sanitizeAttributionValue(value: string | undefined | null, max = 160): string {
  if (!value) return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, max);
}

function sanitizeTrackingValue(value: string | undefined | null, max = 100): string {
  return sanitizeAttributionValue(value, max)
    .replace(/[^A-Za-z0-9._~+%/-]/g, "_")
    .slice(0, max);
}

function sourceFromCurrentPage(): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  const utmSource = sanitizeTrackingValue(params.get("utm_source"));
  if (utmSource) return utmSource;
  const referrer = sanitizeReferrer(document.referrer);
  try {
    return referrer ? new URL(referrer).hostname.slice(0, 100) : "";
  } catch {
    return "";
  }
}

function getLandingPage(path: string, persist: boolean): string {
  if (memoryLandingPage) return memoryLandingPage;
  if (persist) {
    const stored = readStorage(STORAGE_LANDING_PAGE_KEY);
    if (stored) {
      memoryLandingPage = sanitizePath(stored);
      return memoryLandingPage;
    }
  }
  memoryLandingPage = sanitizePath(path) || "/";
  if (persist) writeStorage(STORAGE_LANDING_PAGE_KEY, memoryLandingPage);
  return memoryLandingPage;
}

function getFirstTouchSource(persist: boolean): string {
  if (memoryFirstTouch) return memoryFirstTouch;
  if (persist) {
    const stored = readStorage(STORAGE_FIRST_TOUCH_KEY);
    if (stored) {
      const sanitized = sanitizeAttributionValue(stored);
      try {
        memoryFirstTouch = sanitized.includes("://")
          ? new URL(sanitized).hostname.slice(0, 100)
          : sanitizeTrackingValue(sanitized);
      } catch {
        memoryFirstTouch = "";
      }
      return memoryFirstTouch;
    }
  }
  memoryFirstTouch = sourceFromCurrentPage();
  if (persist && memoryFirstTouch) writeStorage(STORAGE_FIRST_TOUCH_KEY, memoryFirstTouch);
  return memoryFirstTouch;
}

function getCurrentDeviceType(): string {
  if (typeof window === "undefined") return "unknown";
  const width = window.innerWidth;
  return width < 768 ? "mobile" : width < 1024 ? "tablet" : "desktop";
}

export interface PromotionRequestContext {
  pagePath: string;
  landingPage: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  device_type: string;
  first_touch_source: string;
  last_touch_source: string;
}

export function getPromotionRequestContext(
  path = typeof window !== "undefined" ? window.location.pathname : "/",
  options: { persist?: boolean } = {},
): PromotionRequestContext {
  const persist = options.persist !== false;
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const utm = (key: string) => sanitizeTrackingValue(params?.get(key));
  const currentPath = sanitizePath(path) || "/";
  return {
    pagePath: currentPath,
    landingPage: getLandingPage(currentPath, persist),
    referrer: sanitizeReferrer(typeof document !== "undefined" ? document.referrer : ""),
    utm_source: utm("utm_source"),
    utm_medium: utm("utm_medium"),
    utm_campaign: utm("utm_campaign"),
    utm_term: utm("utm_term"),
    utm_content: utm("utm_content"),
    device_type: getCurrentDeviceType(),
    first_touch_source: getFirstTouchSource(persist),
    last_touch_source: sourceFromCurrentPage(),
  };
}

export function isPromotionPathEligible(campaign: PromotionCampaign, path: string): boolean {
  const normalized = sanitizePath(path) || "/";
  return campaign.eligiblePagePaths.some((allowed) => {
    const candidate = sanitizePath(allowed) || "/";
    if (candidate.endsWith("*")) return normalized.startsWith(candidate.slice(0, -1));
    return normalized === candidate;
  });
}

export function promotionConfigHash(campaign: PromotionCampaign): string {
  const fields = [
    campaign.campaignId,
    campaign.dismissalFrequencyCapDays,
  ].join("|");
  // Dismissals are a visitor policy, not a copy/allocation policy. Only a
  // frequency-cap change is allowed to reset a dismissal; CTA and conversion
  // suppression fields are deliberately retained independently.
  let hash = 2166136261;
  for (let index = 0; index < fields.length; index += 1) {
    hash ^= fields.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16);
}

export function getPromotionSuppressionState(
  campaignId: string,
  configHash: string,
): PromotionSuppressionState {
  const key = `${STORAGE_STATE_PREFIX}${campaignId}`;
  const fromMemory = memoryStates.get(key);
  if (fromMemory) return fromMemory;
  const stored = readStorage(key);
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as PromotionSuppressionState;
      if (parsed.campaignId === campaignId) {
        memoryStates.set(key, parsed);
        return parsed;
      }
    } catch {
      // Ignore malformed local state and use a clean state.
    }
  }
  const initial = { campaignId, configHash };
  memoryStates.set(key, initial);
  return initial;
}

export function savePromotionSuppressionState(state: PromotionSuppressionState): void {
  const key = `${STORAGE_STATE_PREFIX}${state.campaignId}`;
  memoryStates.set(key, state);
  writeStorage(key, JSON.stringify(state));
}

export function getStoredPromotionAssignment(
  campaignId: string,
  experimentId: string,
): PromotionAssignment | null {
  if (!campaignId || !experimentId) return null;
  const key = `${STORAGE_ASSIGNMENT_PREFIX}${campaignId}:${experimentId}`;
  const stored = readStorage(key);
  if (!stored) return null;
  try {
    const parsed = JSON.parse(stored) as PromotionAssignment;
    if (
      parsed.campaign_id === campaignId &&
      parsed.experiment_id === experimentId &&
      typeof parsed.assignment_token === "string" &&
      typeof parsed.anonymous_visitor_id === "string" &&
      (parsed.experiment_variant === "control" ||
        parsed.experiment_variant === "savings_led" ||
        parsed.experiment_variant === "direction_led")
    ) {
      return parsed;
    }
  } catch {
    // A corrupt assignment is not a reason to block the site.
  }
  return null;
}

export function savePromotionAssignment(assignment: PromotionAssignment): void {
  if (!assignment.campaign_id || !assignment.experiment_id) return;
  const key = `${STORAGE_ASSIGNMENT_PREFIX}${assignment.campaign_id}:${assignment.experiment_id}`;
  writeStorage(key, JSON.stringify(assignment));
}

export function mergePromotionAttribution(
  base: PromotionLeadAttribution | null | undefined,
  override: PromotionLeadAttribution | null | undefined,
): PromotionLeadAttribution | null {
  const merged = { ...(base ?? {}), ...(override ?? {}) };
  return Object.keys(merged).length ? merged : null;
}

let currentAttribution: PromotionLeadAttribution | null = null;

export function setPromotionAttribution(attribution: PromotionLeadAttribution | null): void {
  currentAttribution = attribution;
}

export function getPromotionAttribution(): PromotionLeadAttribution | null {
  return currentAttribution;
}

type EventSender = (eventName: PromotionEventName, fields: PromotionEventFields) => void;
let eventSender: EventSender | null = null;
const pendingEvents: Array<{ eventName: PromotionEventName; fields: PromotionEventFields }> = [];

export function registerPromotionEventSender(sender: EventSender | null): void {
  eventSender = sender;
  if (!eventSender) return;
  const queued = pendingEvents.splice(0, pendingEvents.length);
  queued.forEach(({ eventName, fields }) => eventSender?.(eventName, fields));
}

/**
 * Booking code calls this function without knowing whether the experiment is
 * active.  It never includes form values and queues briefly until the
 * provider has finished assignment.
 */
export function trackPromotionEvent(
  eventName: PromotionEventName,
  fields: PromotionEventFields = {},
): void {
  if (eventSender) {
    eventSender(eventName, fields);
  } else if (pendingEvents.length < 50) {
    pendingEvents.push({ eventName, fields });
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("graylock:promotion-event", {
      detail: { eventName, fields },
    }));
  }
}

export function getPromotionPreviewVariant(): PromotionVariant | null {
  if (!import.meta.env.DEV || typeof window === "undefined") return null;
  const value = new URLSearchParams(window.location.search).get("promoPreview");
  return value === "control" || value === "savings_led" || value === "direction_led"
    ? value
    : null;
}

export function toLeadAttributionPayload(
  attribution: PromotionLeadAttribution | null | undefined,
): Record<string, string> {
  if (!attribution) return {};
  const fields = [
    "campaign_id",
    "experiment_id",
    "experiment_variant",
    "anonymous_visitor_id",
    "assignment_token",
    "assigned_at",
    "promotion_source",
    "popup_trigger_type",
    "popup_impression_timestamp",
    "popup_cta_clicked_timestamp",
    "first_touch_source",
    "last_touch_source",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "referrer",
    "landing_page",
    "device_type",
  ] as const;
  const payload: Record<string, string> = {};
  fields.forEach((field) => {
    const value = attribution[field];
    if (typeof value === "string" && value) payload[field] = value;
  });
  return payload;
}

export function getDefaultPreviewCampaign(campaign?: PromotionCampaign | null): PromotionCampaign {
  const merged = mergePromotionCampaign(campaign);
  return {
    ...merged,
    enabled: true,
    popupEnabled: true,
    campaignId: merged.campaignId || "preview-build-fee-waiver",
    experimentId: merged.experimentId || "preview",
    deadlineDisplayText: merged.deadlineDisplayText || PREVIEW_DEADLINE,
  };
}

export function nowIso(): string {
  return new Date().toISOString();
}

export function createClientEventId(): string {
  return makeUuid();
}

export function getPromotionApiUrl(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  return `${base.replace(/\/?$/, "/")}api/promotion${path}`;
}