export const PROMOTION_API_BASE = `${String(import.meta.env.BASE_URL || "/").replace(/\/$/, "")}/api/promotion`;

export type VariantName = "control" | "savings_led" | "direction_led";
export type RecurrenceMode = "manual" | "monthly";

export type Campaign = {
  campaignId: string;
  experimentId: string;
  enabled: boolean;
  campaignName: string;
  timezone: string;
  recurrenceMode: RecurrenceMode;
  /** Public campaign responses expose this for diagnostics; admin keeps the
   * editable experimentId as the configured/base id. */
  rawBaseExperimentId?: string;
  occurrenceKey?: string | null;
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
  standardBuildFeeDisplayValue: string | null;
  monthlyPlanDisclosure: string | null;
  legalTermsUrl: string | null;
  privacyPolicyUrl: string | null;
  stage: string;
  minEvaluationDays: number;
  minEligibleVisitors: number;
};

export type PromotionEventCounts = Record<string, number>;

export type VariantMetric = {
  variant: string;
  counts: PromotionEventCounts;
  eligibleVisitors: number;
  assignedVisitors: number;
  standardQualifiedLeads: number;
  promotionQualifiedLeads: number;
};

export type PromotionLead = {
  /** Current API names are internalLeadId / createdAt; aliases support older report adapters. */
  internalLeadId: string;
  id?: number;
  leadId?: string;
  createdAt: string | null;
  createdDate?: string | null;
  campaignId?: string | null;
  variant?: string | null;
  experimentVariant?: string | null;
  promotionSource?: string | null;
  firstName?: string | null;
  email?: string | null;
  phone?: string | null;
  websiteUrl?: string | null;
  primaryGoal?: string | null;
  serviceArea?: string | null;
  businessName: string | null;
  businessCategory: string | null;
  declaredWebsiteGoal: string | null;
  declaredTiming: string | null;
  leadStatus: string | null;
  /** Some existing lead APIs call this field status; report adapters may include both. */
  status?: string | null;
  qualificationStatus: string | null;
  noFitReason: string | null;
  fitCallDate: string | null;
  fitCallStatus: string | null;
  directionStatus: string | null;
  promotionAcceptanceStatus: string | null;
  waivedBuildFeeAmount: number | null;
  monthlyPlan: string | null;
  firstPaymentStatus: string | null;
  launchStatus: string | null;
  refundCancellationStatus: string | null;
  assignedTeamMember: string | null;
  notes: string | null;
  occurrenceKey?: string | null;
  emailNotificationStatus?: "pending" | "sending" | "sent" | "failed" | "manual_review" | string | null;
  emailNotificationError?: string | null;
  emailNotificationSentAt?: string | null;
  emailNotificationLeaseUntil?: string | null;
  emailNotificationAttemptedAt?: string | null;
};

export type VariantEconomics = {
  variant: string;
  waivedBuildFeeAmount: number | null;
  firstPaymentsCollected: number | null;
  totalMonthlyPayments: number | null;
  directDeliveryCost: number | null;
  supportCost: number | null;
  refundAmount: number | null;
  grossProfitEstimate: number | null;
  costsComplete: boolean;
};

export type ReportEvaluation = {
  ready: boolean;
  minEvaluationDays: number;
  minEligibleVisitors: number;
  elapsedDays: number;
  eligibleVisitors: number;
};

export type PromotionReportPeriod = {
  experimentId: string;
  occurrenceKey: string | null;
};

export type PromotionReport = {
  campaign: Campaign;
  status: string;
  periods?: PromotionReportPeriod[];
  metrics: VariantMetric[];
  leads: PromotionLead[];
  economics: VariantEconomics[];
  evaluation: ReportEvaluation;
  guidance?: string;
};

export type LeadEconomicRecord = {
  id?: number;
  leadId?: number;
  internalLeadId?: string;
  kind?: string;
  amount?: number;
  costsComplete?: boolean;
  createdBy?: string;
  createdAt?: string;
};

export type ReportFilters = {
  dateFrom: string;
  dateTo: string;
  occurrenceKey: string;
  campaignId: string;
  stage: string;
  variant: string;
  trafficSource: string;
  utmCampaign: string;
  deviceType: string;
  businessCategory: string;
  leadStatus: string;
  assignedTeamMember: string;
  monthlyPlan: string;
};

export type AdminSession = {
  authenticated: boolean;
  csrfToken?: string;
};

async function readResponse(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }
  return response.text();
}

export async function promotionRequest<T>(
  path: string,
  options: {
    method?: "GET" | "POST" | "PATCH";
    body?: unknown;
    csrfToken?: string;
    signal?: AbortSignal;
  } = {},
): Promise<T> {
  const method = options.method || "GET";
  const headers: Record<string, string> = {
    Accept: "application/json",
  };
  if (options.body !== undefined) headers["Content-Type"] = "application/json";
  if (method !== "GET") {
    if (!options.csrfToken) {
      throw new Error("Your secure admin session is missing a CSRF token. Sign in again.");
    }
    headers["X-CSRF-Token"] = options.csrfToken;
  }

  const response = await fetch(`${PROMOTION_API_BASE}${path}`, {
    method,
    headers,
    credentials: "same-origin",
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
    signal: options.signal,
  });
  const result = await readResponse(response);
  if (!response.ok) {
    let message = `Request failed (${response.status})`;
    if (typeof result === "object" && result !== null) {
      const record = result as Record<string, unknown>;
      if (typeof record.message === "string") message = record.message;
      else if (typeof record.error === "string") message = record.error;
    } else if (typeof result === "string" && result.trim()) {
      message = result;
    }
    throw new Error(message);
  }
  return result as T;
}

export function getAdminSession(signal?: AbortSignal) {
  return promotionRequest<AdminSession>("/admin/session", { signal });
}

export function loginAdmin(username: string, password: string) {
  // Login establishes the httpOnly session cookie. The server has no CSRF
  // token to validate before this request; all subsequent mutations use the
  // token returned here (or by /admin/session).
  return fetch(`${PROMOTION_API_BASE}/admin/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
    body: JSON.stringify({ username, password }),
  }).then(async (response) => {
    const result = await readResponse(response);
    if (!response.ok) {
      const message =
        typeof result === "object" && result !== null && typeof (result as Record<string, unknown>).message === "string"
          ? (result as Record<string, string>).message
          : "Sign-in failed.";
      throw new Error(message);
    }
    return result as AdminSession;
  });
}

export function getCampaign(signal?: AbortSignal) {
  return promotionRequest<{ campaign: Campaign }>("/admin/campaign", { signal }).then((result) => ({
    ...result,
    campaign: {
      ...result.campaign,
      recurrenceMode: (result.campaign.recurrenceMode === "monthly" ? "monthly" : "manual") as RecurrenceMode,
    },
  }));
}

export function updateCampaign(
  values: Partial<Campaign> & {
    confirmEnabled?: boolean;
    confirmDeadline?: boolean;
    confirmRecurrenceChange?: boolean;
  },
  csrfToken: string,
) {
  const {
    campaignId: _campaignId,
    experimentId: _experimentId,
    rawBaseExperimentId: _rawBaseExperimentId,
    occurrenceKey: _occurrenceKey,
    confirmEnabled,
    confirmDeadline,
    confirmRecurrenceChange,
    ...editableCampaign
  } = values;
  return promotionRequest<{ campaign: Campaign }>("/admin/campaign", {
    method: "PATCH",
    body: {
      campaign: editableCampaign,
      ...(confirmEnabled ? { confirmEnabled } : {}),
      ...(confirmDeadline ? { confirmDeadline } : {}),
      ...(confirmRecurrenceChange ? { confirmRecurrenceChange } : {}),
    },
    csrfToken,
  });
}

export function pauseCampaign(csrfToken: string) {
  // /admin/pause is the documented brief endpoint; the server also exposes
  // /admin/campaign/pause as a canonical subresource alias.
  return promotionRequest<{ campaign?: Campaign; paused?: boolean }>("/admin/pause", {
    method: "POST",
    csrfToken,
    body: {},
  });
}

export function buildReportQuery(filters: ReportFilters) {
  const params = new URLSearchParams();
  (Object.keys(filters) as Array<keyof ReportFilters>).forEach((key) => {
    const value = filters[key].trim();
    if (!value) return;
    // The dashboard keeps friendly dateFrom/dateTo names while the backend
    // contract calls those bounds startDate/endDate. Keep both aliases so
    // older same-origin deployments remain readable during rollout.
    if (key === "dateFrom") {
      params.set("startDate", value);
      params.set("dateFrom", value);
    } else if (key === "dateTo") {
      params.set("endDate", value);
      params.set("dateTo", value);
    } else {
      params.set(key, value);
    }
  });
  return params;
}

export function getReport(filters: ReportFilters, signal?: AbortSignal) {
  const query = buildReportQuery(filters);
  return promotionRequest<PromotionReport>(
    `/admin/report${query.toString() ? `?${query.toString()}` : ""}`,
    { signal },
  );
}

export async function downloadExport(
  type: "aggregate" | "leads",
  filters: ReportFilters,
): Promise<Blob> {
  const params = buildReportQuery(filters);
  params.set("type", type);
  const response = await fetch(`${PROMOTION_API_BASE}/admin/export?${params.toString()}`, {
    credentials: "same-origin",
    headers: { Accept: "text/csv,application/octet-stream" },
  });
  if (!response.ok) {
    const result = await readResponse(response);
    const message =
      typeof result === "object" && result !== null && typeof (result as Record<string, unknown>).message === "string"
        ? (result as Record<string, string>).message
        : `Export failed (${response.status})`;
    throw new Error(message);
  }
  return response.blob();
}

export function updateLead(
  leadId: string,
  values: Record<string, unknown>,
  csrfToken: string,
) {
  return promotionRequest<{ lead?: PromotionLead }>("/admin/leads/" + encodeURIComponent(leadId), {
    method: "PATCH",
    body: values,
    csrfToken,
  });
}

export function getLeadDetail(leadId: string, signal?: AbortSignal) {
  return promotionRequest<{
    lead?: PromotionLead;
    history?: Array<Record<string, unknown>>;
    economics?: LeadEconomicRecord[];
  }>("/admin/leads/" + encodeURIComponent(leadId), { signal });
}

export function resendLeadEmail(leadId: string, csrfToken: string) {
  return promotionRequest<{ ok?: boolean; internalLeadId?: string; internal_lead_id?: string }>(
    "/admin/leads/" + encodeURIComponent(leadId) + "/resend-email",
    {
      method: "POST",
      body: {},
      csrfToken,
    },
  );
}

export function addLeadEconomics(
  leadId: string,
  values: { kind: string; amount: number; costsComplete?: boolean },
  csrfToken: string,
) {
  return promotionRequest<{ economicRecord?: LeadEconomicRecord }>(
    "/admin/leads/" + encodeURIComponent(leadId) + "/economics",
    {
      method: "POST",
      body: values,
      csrfToken,
    },
  );
}