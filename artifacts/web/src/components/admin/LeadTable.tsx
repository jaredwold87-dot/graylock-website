import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  addLeadEconomics,
  getLeadDetail,
  LeadEconomicRecord,
  PromotionLead,
  resendLeadEmail,
  updateLead,
} from "./adminApi";

type LeadTableProps = {
  leads: PromotionLead[];
  csrfToken: string;
  onLeadUpdated: (lead: PromotionLead) => void;
  onRefresh: () => void;
  busy?: boolean;
};

const LEAD_STATUSES = [
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
] as const;

const QUALIFICATION_STATUSES = ["pending", "qualified", "not_qualified"] as const;

const NO_FIT_REASONS = [
  "not_a_serviceable_business",
  "out_of_scope",
  "no_decision_maker",
  "not_ready",
  "cannot_sustain_monthly_plan",
  "no_response",
  "capacity_limit",
  "timeline_mismatch",
  "other",
] as const;

const FIT_CALL_STATUSES = ["not_scheduled", "booked", "held", "no_show", "cancelled"] as const;
const DIRECTION_STATUSES = ["not_started", "in_progress", "delivered"] as const;
const PROMOTION_ACCEPTANCE_STATUSES = ["pending", "accepted", "declined"] as const;
const FIRST_PAYMENT_STATUSES = ["pending", "collected", "failed"] as const;
const LAUNCH_STATUSES = ["not_started", "in_progress", "launched"] as const;
const REFUND_CANCELLATION_STATUSES = ["none", "refund", "guarantee_claim", "cancelled", "payment_failed"] as const;

const ECONOMIC_KINDS = [
  ["waived_build_fee", "Waived build fee"],
  ["monthly_payment", "Monthly payment"],
  ["delivery_cost", "Direct delivery cost"],
  ["support_cost", "Support cost"],
  ["refund", "Refund"],
] as const;

function pretty(value: string) {
  return value ? value.replaceAll("_", " ") : "—";
}

function statusOf(lead: PromotionLead) {
  return lead.leadStatus || lead.status || "";
}

function leadIdOf(lead: PromotionLead) {
  return lead.leadId || lead.internalLeadId || (lead.id === undefined ? "" : String(lead.id));
}

function variantOf(lead: PromotionLead) {
  return lead.variant || lead.experimentVariant || "unassigned";
}

function createdAtOf(lead: PromotionLead) {
  return lead.createdDate || lead.createdAt || "";
}

function columnValue(lead: PromotionLead, key: keyof PromotionLead): unknown {
  if (key === "leadId") return leadIdOf(lead);
  if (key === "createdDate") return createdAtOf(lead);
  if (key === "variant") return variantOf(lead);
  return lead[key];
}

function date(value: string) {
  if (!value) return "—";
  const parsed = new Date(value);
  return Number.isNaN(parsed.valueOf()) ? value : parsed.toLocaleString();
}

function sourceLabel(value: string | null | undefined) {
  if (value === "build_fee_waiver_popup") return "Build-fee waiver popup";
  if (value === "standard_homepage_cta") return "Standard homepage CTA";
  return value || "Standard homepage CTA (unassigned)";
}

function variantLabel(value: string | null | undefined) {
  return value === "unassigned" || !value ? "Unassigned (standard request)" : pretty(value);
}

function notificationLabel(value: PromotionLead["emailNotificationStatus"]) {
  if (value === "sent") return "Sent";
  if (value === "sending") return "Sending";
  if (value === "failed") return "Failed";
  if (value === "pending") return "Pending";
  if (value === "manual_review") return "Manual review";
  return value || "Unknown";
}

const NOTIFICATION_RETRY_WINDOW_MS = 24 * 60 * 60 * 1000;

type NotificationDisplayState =
  | "sent"
  | "active_sending"
  | "stale_sending"
  | "stale_manual_review"
  | "failed"
  | "pending"
  | "manual_review"
  | "unknown";

function timestamp(value: string | null | undefined): number | null {
  if (!value) return null;
  const parsed = new Date(value).getTime();
  return Number.isFinite(parsed) ? parsed : null;
}

function notificationState(lead: PromotionLead, now = Date.now()): NotificationDisplayState {
  const status = lead.emailNotificationStatus || (lead.emailNotificationError ? "failed" : "unknown");
  if (status === "sent") return "sent";
  if (status === "failed") return "failed";
  if (status === "pending") return "pending";
  if (status === "manual_review") return "manual_review";
  if (status !== "sending") return "unknown";

  // The server treats a missing lease as expired. An active lease is the one
  // sending state that must never be retried from this private dashboard.
  const leaseUntil = timestamp(lead.emailNotificationLeaseUntil);
  if (leaseUntil !== null && leaseUntil > now) return "active_sending";
  const attemptedAt = timestamp(lead.emailNotificationAttemptedAt);
  if (attemptedAt !== null && now - attemptedAt >= NOTIFICATION_RETRY_WINDOW_MS) {
    return "stale_manual_review";
  }
  return "stale_sending";
}

function notificationLabelForState(state: NotificationDisplayState) {
  if (state === "active_sending") return "Sending";
  if (state === "stale_sending") return "Stale sending";
  if (state === "stale_manual_review") return "Manual review required";
  return notificationLabel(state);
}

function notificationHelp(state: NotificationDisplayState) {
  switch (state) {
    case "pending":
      return "Pending: notification processing has not finished. Refresh to check its delivery status.";
    case "active_sending":
      return "Sending: a delivery attempt is active. Retry is disabled until its lease expires.";
    case "stale_sending":
      return "Stale sending: the delivery lease expired. Retry is allowed within 24 hours.";
    case "manual_review":
      return "Manual review: delivery is ambiguous and too old for a safe automatic retry.";
    case "stale_manual_review":
      return "Manual review required: this sending attempt is older than 24 hours and may already have been delivered.";
    case "failed":
      return "Delivery failed. A server-side retry is allowed.";
    case "sent":
      return "Delivered through the server notification service.";
    default:
      return "No delivery state was reported by the server.";
  }
}

function canRetryNotification(state: NotificationDisplayState) {
  return state === "failed" || state === "stale_sending";
}

const COLUMNS: Array<{ key: keyof PromotionLead; label: string }> = [
  { key: "leadId", label: "Lead ID" },
  { key: "createdDate", label: "Created date" },
  { key: "campaignId", label: "Campaign ID" },
  { key: "variant", label: "Variant" },
  { key: "promotionSource", label: "Promotion source" },
  { key: "firstName", label: "Name" },
  { key: "businessName", label: "Business name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "websiteUrl", label: "Current website" },
  { key: "businessCategory", label: "Business category" },
  { key: "declaredWebsiteGoal", label: "Declared website goal" },
  { key: "declaredTiming", label: "Declared timing" },
  { key: "leadStatus", label: "Lead status" },
  { key: "qualificationStatus", label: "Qualification status" },
  { key: "noFitReason", label: "No-fit reason" },
  { key: "fitCallDate", label: "Fit-call date" },
  { key: "fitCallStatus", label: "Fit-call status" },
  { key: "directionStatus", label: "Homepage Direction status" },
  { key: "promotionAcceptanceStatus", label: "Promotion acceptance status" },
  { key: "waivedBuildFeeAmount", label: "Waived build-fee amount" },
  { key: "monthlyPlan", label: "Monthly plan" },
  { key: "firstPaymentStatus", label: "First payment status" },
  { key: "launchStatus", label: "Launch status" },
  { key: "refundCancellationStatus", label: "Refund/cancellation status" },
  { key: "assignedTeamMember", label: "Assigned team member" },
  { key: "notes", label: "Notes" },
];

export function LeadTable({ leads, csrfToken, onLeadUpdated, onRefresh, busy }: LeadTableProps) {
  const [selected, setSelected] = useState<PromotionLead | null>(null);

  return (
    <section className="border border-white/10 bg-[#171b23] p-5 shadow-xl shadow-black/10 sm:p-7">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e85d26]">Private lead records</p>
        <h2 className="mt-2 text-2xl font-bold text-white">All submitted requests</h2>
        <p className="mt-2 text-sm leading-6 text-[#aeb5c0]">
          This includes promotion-attributed requests and standard homepage requests without an
          experiment assignment. Authorized team members can edit lead status and economics.
        </p>
      </div>

      {busy ? <p className="mb-4 text-sm text-[#aeb5c0]">Loading lead records…</p> : null}
      {!busy && leads.length === 0 ? (
        <div className="border border-white/10 bg-[#10131a] px-4 py-8 text-center text-sm text-[#aeb5c0]">
          No leads matched the current filters. The server returned an empty result; no sample
          records are being inserted.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[2800px] w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-[0.65rem] uppercase tracking-[0.1em] text-[#8f98a7]">
                {COLUMNS.map((column) => <th className="whitespace-nowrap px-3 py-3 font-semibold" key={column.key}>{column.label}</th>)}
                <th className="whitespace-nowrap px-3 py-3 font-semibold">Email notification</th>
                <th className="sticky right-0 bg-[#171b23] px-3 py-3 font-semibold">Edit</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr className="border-b border-white/[0.07] align-top transition hover:bg-white/[0.03]" key={leadIdOf(lead)}>
                  {COLUMNS.map((column) => (
                    <td className="max-w-[220px] px-3 py-3 text-[#d8dce3]" key={column.key}>
                      {column.key === "createdDate" || column.key === "fitCallDate"
                        ? date(String(columnValue(lead, column.key) || ""))
                        : column.key === "waivedBuildFeeAmount"
                          ? lead.waivedBuildFeeAmount === null || lead.waivedBuildFeeAmount === undefined
                            ? "—"
                            : `$${lead.waivedBuildFeeAmount.toLocaleString()}`
                          : column.key === "leadStatus"
                            ? pretty(statusOf(lead))
                            : column.key === "qualificationStatus" || column.key === "noFitReason" || column.key === "fitCallStatus" || column.key === "directionStatus" || column.key === "promotionAcceptanceStatus" || column.key === "firstPaymentStatus" || column.key === "launchStatus" || column.key === "refundCancellationStatus" || column.key === "variant"
                              ? column.key === "variant"
                                ? variantLabel(variantOf(lead))
                                : pretty(String(columnValue(lead, column.key) || ""))
                              : column.key === "promotionSource"
                                ? sourceLabel(lead.promotionSource)
                              : column.key === "campaignId"
                                ? lead.campaignId || "Unassigned"
                            : String(columnValue(lead, column.key) || "—")}
                    </td>
                  ))}
                  <td className="px-3 py-3">
                    <NotificationAction
                      csrfToken={csrfToken}
                      lead={lead}
                      onLeadUpdated={onLeadUpdated}
                      onRefresh={onRefresh}
                    />
                  </td>
                  <td className="sticky right-0 bg-[#171b23] px-3 py-3">
                    <button className="border border-[#e85d26]/60 px-3 py-2 text-xs font-semibold text-[#f3a27d] transition hover:bg-[#e85d26]/15 hover:text-white" onClick={() => setSelected(lead)} type="button">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selected ? (
        <LeadEditor
          csrfToken={csrfToken}
          lead={selected}
          onClose={() => setSelected(null)}
          onLeadUpdated={(lead) => {
            onLeadUpdated(lead);
            setSelected(lead);
          }}
          onRefresh={onRefresh}
        />
      ) : null}
    </section>
  );
}

function NotificationAction({
  lead,
  csrfToken,
  onLeadUpdated,
  onRefresh,
}: {
  lead: PromotionLead;
  csrfToken: string;
  onLeadUpdated: (lead: PromotionLead) => void;
  onRefresh: () => void;
}) {
  const [retrying, setRetrying] = useState(false);
  const [error, setError] = useState("");
  const status = notificationState(lead);

  async function retry() {
    setRetrying(true);
    setError("");
    try {
      await resendLeadEmail(leadIdOf(lead), csrfToken);
      onLeadUpdated({
        ...lead,
        emailNotificationStatus: "sent",
        emailNotificationError: null,
      });
      onRefresh();
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "Failed to resend notification.";
      setError(message);
      // Keep the server's notification state authoritative. In particular,
      // pending and stale sending can become active, failed, or manual_review
      // while this request is in flight.
      onRefresh();
    } finally {
      setRetrying(false);
    }
  }

  const statusClass =
    status === "sent"
      ? "border-emerald-400/40 bg-emerald-950/20 text-emerald-200"
      : status === "failed" || status === "stale_manual_review" || status === "manual_review"
        ? "border-red-400/40 bg-red-950/20 text-red-200"
        : status === "stale_sending"
          ? "border-orange-400/40 bg-orange-950/20 text-orange-200"
        : "border-amber-400/40 bg-amber-950/20 text-amber-200";

  return (
    <div className="min-w-44 space-y-2">
      <span
        className={`inline-flex border px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] ${statusClass}`}
        title={lead.emailNotificationError || undefined}
      >
        {notificationLabelForState(status)}
      </span>
      <p className="max-w-56 text-[0.65rem] leading-4 text-[#aeb5c0]">{notificationHelp(status)}</p>
      {status === "failed" || status === "stale_manual_review" || status === "manual_review" ? (
        <p className="max-w-56 text-[0.65rem] leading-4 text-red-200">
          {error || lead.emailNotificationError || (status === "failed" ? "Notification delivery failed." : "")}
        </p>
      ) : null}
      {canRetryNotification(status) ? (
        <>
          <button
            className="border border-[#e85d26]/60 px-2 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[#f3a27d] hover:border-[#e85d26] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            disabled={retrying}
            onClick={() => void retry()}
            type="button"
          >
            {retrying ? "Retrying…" : "Retry notification"}
          </button>
        </>
      ) : null}
      {status === "sent" && lead.emailNotificationSentAt ? (
        <p className="text-[0.65rem] text-[#8f98a7]">Sent {date(lead.emailNotificationSentAt)}</p>
      ) : null}
    </div>
  );
}

type LeadEditorProps = {
  lead: PromotionLead;
  csrfToken: string;
  onClose: () => void;
  onLeadUpdated: (lead: PromotionLead) => void;
  onRefresh: () => void;
};

type LeadDraft = Omit<
  PromotionLead,
  | "waivedBuildFeeAmount"
  | "leadStatus"
  | "qualificationStatus"
  | "noFitReason"
  | "fitCallDate"
  | "fitCallStatus"
  | "directionStatus"
  | "promotionAcceptanceStatus"
  | "monthlyPlan"
  | "firstPaymentStatus"
  | "launchStatus"
  | "refundCancellationStatus"
  | "assignedTeamMember"
  | "businessCategory"
  | "declaredWebsiteGoal"
  | "declaredTiming"
  | "notes"
> & {
  leadStatus: string;
  qualificationStatus: string;
  noFitReason: string;
  fitCallDate: string;
  fitCallStatus: string;
  directionStatus: string;
  promotionAcceptanceStatus: string;
  monthlyPlan: string;
  firstPaymentStatus: string;
  launchStatus: string;
  refundCancellationStatus: string;
  assignedTeamMember: string;
  businessCategory: string;
  declaredWebsiteGoal: string;
  declaredTiming: string;
  notes: string;
  waivedBuildFeeAmount: string;
};

function toDraft(lead: PromotionLead): LeadDraft {
  return {
    ...lead,
    leadStatus: statusOf(lead),
    qualificationStatus: lead.qualificationStatus || "",
    noFitReason: lead.noFitReason || "",
    fitCallDate: lead.fitCallDate || "",
    fitCallStatus: lead.fitCallStatus || "",
    directionStatus: lead.directionStatus || "",
    promotionAcceptanceStatus: lead.promotionAcceptanceStatus || "",
    monthlyPlan: lead.monthlyPlan || "",
    firstPaymentStatus: lead.firstPaymentStatus || "",
    launchStatus: lead.launchStatus || "",
    refundCancellationStatus: lead.refundCancellationStatus || "",
    assignedTeamMember: lead.assignedTeamMember || "",
    businessCategory: lead.businessCategory || "",
    declaredWebsiteGoal: lead.declaredWebsiteGoal || "",
    declaredTiming: lead.declaredTiming || "",
    notes: lead.notes || "",
    waivedBuildFeeAmount: lead.waivedBuildFeeAmount === null || lead.waivedBuildFeeAmount === undefined ? "" : String(lead.waivedBuildFeeAmount),
  };
}

function LeadEditor({ lead, csrfToken, onClose, onLeadUpdated, onRefresh }: LeadEditorProps) {
  const [draft, setDraft] = useState<LeadDraft>(() => toDraft(lead));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState<Array<Record<string, unknown>> | null>(null);
  const [economics, setEconomics] = useState<LeadEconomicRecord[] | null>(null);
  const [detailLead, setDetailLead] = useState<PromotionLead>(lead);
  const [historyMessage, setHistoryMessage] = useState("Loading lead history…");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [resendingEmail, setResendingEmail] = useState(false);
  const [economicKind, setEconomicKind] = useState("waived_build_fee");
  const [economicAmount, setEconomicAmount] = useState("");
  const [economicComplete, setEconomicComplete] = useState(false);
  const [savingEconomic, setSavingEconomic] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setHistory(null);
    setEconomics(null);
    setDetailLead(lead);
    setHistoryMessage("Loading lead history…");
    getLeadDetail(leadIdOf(lead), controller.signal)
      .then((result) => {
        setHistory(result.history || []);
        setEconomics(result.economics || []);
        if (result.lead) {
          setDetailLead(result.lead);
          setDraft(toDraft(result.lead));
        }
        setHistoryMessage(result.history ? "" : "The server did not expose history for this lead.");
      })
      .catch((caught) => {
        if (controller.signal.aborted) return;
        setHistoryMessage(caught instanceof Error ? `History unavailable: ${caught.message}` : "History unavailable.");
      });
    return () => controller.abort();
  }, [lead]);

  async function retryNotification() {
    setResendingEmail(true);
    setNotificationMessage("");
    setError("");
    try {
      await resendLeadEmail(leadIdOf(detailLead), csrfToken);
      const updated = {
        ...detailLead,
        emailNotificationStatus: "sent" as const,
        emailNotificationError: null,
      };
      setDetailLead(updated);
      onLeadUpdated(updated);
      setNotificationMessage("Notification sent through the server.");
      onRefresh();
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "Failed to resend notification.";
      setNotificationMessage(`Notification retry failed: ${message}`);
      // Do not infer failed delivery from a rejected retry. The server may
      // have classified the attempt as active or manual_review.
      onRefresh();
    } finally {
      setResendingEmail(false);
    }
  }

  function update<K extends keyof LeadDraft>(key: K, value: LeadDraft[K]) {
    setDraft((previous) => ({ ...previous, [key]: value }));
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (draft.noFitReason === "other" && !draft.notes.trim()) {
      setError("Add a short note when no-fit reason is “other”.");
      return;
    }
    if (draft.waivedBuildFeeAmount && !Number.isFinite(Number(draft.waivedBuildFeeAmount))) {
      setError("Waived build-fee amount must be a valid number.");
      return;
    }
    setSaving(true);
    setError("");
    try {
      const result = await updateLead(
        leadIdOf(detailLead),
        {
          status: draft.leadStatus || null,
          qualificationStatus: draft.qualificationStatus || null,
          noFitReason: draft.noFitReason || null,
          notes: draft.notes,
          fitCallDate: draft.fitCallDate,
          fitCallStatus: draft.fitCallStatus || null,
          directionStatus: draft.directionStatus || null,
          promotionAcceptanceStatus: draft.promotionAcceptanceStatus || null,
          waivedBuildFeeAmount: draft.waivedBuildFeeAmount === "" ? null : Number(draft.waivedBuildFeeAmount),
          monthlyPlan: draft.monthlyPlan,
          firstPaymentStatus: draft.firstPaymentStatus || null,
          launchStatus: draft.launchStatus || null,
          refundCancellationStatus: draft.refundCancellationStatus || null,
          assignedTeamMember: draft.assignedTeamMember,
          businessCategory: draft.businessCategory,
          declaredWebsiteGoal: draft.declaredWebsiteGoal,
          declaredTiming: draft.declaredTiming,
        },
        csrfToken,
      );
      const updated = result.lead || {
         ...detailLead,
        leadStatus: draft.leadStatus,
        qualificationStatus: draft.qualificationStatus,
        noFitReason: draft.noFitReason,
        notes: draft.notes,
        fitCallDate: draft.fitCallDate,
        fitCallStatus: draft.fitCallStatus,
        directionStatus: draft.directionStatus,
        promotionAcceptanceStatus: draft.promotionAcceptanceStatus,
        waivedBuildFeeAmount: draft.waivedBuildFeeAmount === "" ? null : Number(draft.waivedBuildFeeAmount),
        monthlyPlan: draft.monthlyPlan,
        firstPaymentStatus: draft.firstPaymentStatus,
        launchStatus: draft.launchStatus,
        refundCancellationStatus: draft.refundCancellationStatus,
        assignedTeamMember: draft.assignedTeamMember,
        businessCategory: draft.businessCategory,
        declaredWebsiteGoal: draft.declaredWebsiteGoal,
        declaredTiming: draft.declaredTiming,
      };
      onLeadUpdated(updated);
      setDetailLead(updated);
      setDraft(toDraft(updated));
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to update lead.");
    } finally {
      setSaving(false);
    }
  }

  async function saveEconomic(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const amount = Number(economicAmount);
    if (!economicAmount || !Number.isFinite(amount)) {
      setError("Enter a valid economic amount.");
      return;
    }
    setSavingEconomic(true);
    setError("");
    try {
      const result = await addLeadEconomics(leadIdOf(detailLead), {
        kind: economicKind,
        amount,
        costsComplete: economicComplete,
      }, csrfToken);
      if (result.economicRecord) {
        setEconomics((previous) => [...(previous || []), result.economicRecord!]);
      }
      setEconomicAmount("");
      setEconomicComplete(false);
      onRefresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to add economic record.");
    } finally {
      setSavingEconomic(false);
    }
  }

  const statusOptions = useMemo(() => LEAD_STATUSES, []);
  const reasonOptions = useMemo(() => NO_FIT_REASONS, []);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 p-3 sm:p-8" role="dialog" aria-modal="true" aria-labelledby="lead-editor-title">
      <div className="mx-auto max-w-5xl border border-white/15 bg-[#171b23] p-5 shadow-2xl shadow-black/50 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e85d26]">Lead editor</p>
            <h2 className="mt-2 text-2xl font-bold text-white" id="lead-editor-title">{detailLead.businessName || "Submitted request"}</h2>
            <p className="mt-1 text-xs text-[#8f98a7]">Lead ID: {leadIdOf(detailLead)}</p>
          </div>
          <button aria-label="Close lead editor" className="border border-white/15 px-3 py-2 text-sm text-[#d8dce3] hover:border-white/35 hover:text-white" onClick={onClose} type="button">Close</button>
        </div>

        {error ? <p aria-live="assertive" className="mt-5 border border-red-400/40 bg-red-950/30 px-3 py-3 text-sm text-red-200" role="alert">{error}</p> : null}
        <div className="mt-5 flex flex-wrap items-start justify-between gap-4 border border-white/10 bg-[#10131a] px-4 py-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#aeb5c0]">Email notification</p>
             <p className={`mt-1 text-sm font-semibold ${
               notificationState(detailLead) === "failed" ||
               notificationState(detailLead) === "stale_manual_review" ||
               notificationState(detailLead) === "manual_review"
                 ? "text-red-200"
                 : notificationState(detailLead) === "sent"
                   ? "text-emerald-200"
                   : notificationState(detailLead) === "stale_sending"
                     ? "text-orange-200"
                     : "text-amber-200"
             }`}>
               {notificationLabelForState(notificationState(detailLead))}
            </p>
             <p className="mt-1 max-w-xl text-xs leading-5 text-[#aeb5c0]">{notificationHelp(notificationState(detailLead))}</p>
            {detailLead.emailNotificationError ? <p className="mt-1 text-xs text-red-200">{detailLead.emailNotificationError}</p> : null}
            {notificationMessage ? <p className="mt-1 text-xs text-[#d8dce3]" role="status">{notificationMessage}</p> : null}
          </div>
          {canRetryNotification(notificationState(detailLead)) ? (
            <button
              className="border border-[#e85d26]/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#f3a27d] hover:border-[#e85d26] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
              disabled={resendingEmail}
              onClick={() => void retryNotification()}
              type="button"
            >
              {resendingEmail ? "Retrying notification…" : "Retry notification"}
            </button>
          ) : null}
        </div>

        <form className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" onSubmit={save}>
          <EditorSelect label="Lead status" value={draft.leadStatus} options={statusOptions} onChange={(value) => update("leadStatus", value)} />
          <EditorSelect label="Qualification status" value={draft.qualificationStatus} options={QUALIFICATION_STATUSES} onChange={(value) => update("qualificationStatus", value)} />
          <EditorSelect label="No-fit reason" value={draft.noFitReason} options={reasonOptions} onChange={(value) => update("noFitReason", value)} />
          <EditorInput label="Fit-call date" value={draft.fitCallDate} onChange={(value) => update("fitCallDate", value)} placeholder="ISO instant or date" />
          <EditorSelect label="Fit-call status" value={draft.fitCallStatus} options={FIT_CALL_STATUSES} onChange={(value) => update("fitCallStatus", value)} />
          <EditorSelect label="Homepage Direction status" value={draft.directionStatus} options={DIRECTION_STATUSES} onChange={(value) => update("directionStatus", value)} />
          <EditorSelect label="Promotion acceptance status" value={draft.promotionAcceptanceStatus} options={PROMOTION_ACCEPTANCE_STATUSES} onChange={(value) => update("promotionAcceptanceStatus", value)} />
          <EditorInput label="Waived build-fee amount" value={draft.waivedBuildFeeAmount} onChange={(value) => update("waivedBuildFeeAmount", value)} inputMode="decimal" />
          <EditorInput label="Monthly plan" value={draft.monthlyPlan} onChange={(value) => update("monthlyPlan", value)} />
          <EditorSelect label="First payment status" value={draft.firstPaymentStatus} options={FIRST_PAYMENT_STATUSES} onChange={(value) => update("firstPaymentStatus", value)} />
          <EditorSelect label="Launch status" value={draft.launchStatus} options={LAUNCH_STATUSES} onChange={(value) => update("launchStatus", value)} />
          <EditorSelect label="Refund/cancellation status" value={draft.refundCancellationStatus} options={REFUND_CANCELLATION_STATUSES} onChange={(value) => update("refundCancellationStatus", value)} />
          <EditorInput label="Assigned team member" value={draft.assignedTeamMember} onChange={(value) => update("assignedTeamMember", value)} />
          <EditorInput label="Business category" value={draft.businessCategory} onChange={(value) => update("businessCategory", value)} />
          <EditorInput label="Declared website goal" value={draft.declaredWebsiteGoal} onChange={(value) => update("declaredWebsiteGoal", value)} />
          <EditorInput label="Declared timing" value={draft.declaredTiming} onChange={(value) => update("declaredTiming", value)} />
          <label className="block sm:col-span-2 lg:col-span-3">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#aeb5c0]">Notes {draft.noFitReason === "other" ? "(required for other)" : ""}</span>
            <textarea className="min-h-24 w-full border border-white/15 bg-[#10131a] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#e85d26]" value={draft.notes} onChange={(event) => update("notes", event.target.value)} />
          </label>
          <div className="flex flex-wrap items-center gap-3 sm:col-span-2 lg:col-span-3">
            <button className="bg-[#e85d26] px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white hover:bg-[#f2733b] disabled:cursor-not-allowed disabled:opacity-50" disabled={saving} type="submit">{saving ? "Saving…" : "Save lead changes"}</button>
            <span className="text-xs text-[#8f98a7]">Status history is retained by the server.</span>
          </div>
        </form>

        <div className="mt-8 grid gap-6 border-t border-white/10 pt-7 lg:grid-cols-2">
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e85d26]">Economics entry</p>
            <h3 className="mt-2 text-xl font-bold text-white">Add a cost or payment</h3>
            <form className="mt-4 space-y-4" onSubmit={saveEconomic}>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#aeb5c0]">Record kind</span>
                <select className="w-full border border-white/15 bg-[#10131a] px-3 py-2.5 text-sm text-white outline-none focus:border-[#e85d26]" value={economicKind} onChange={(event) => setEconomicKind(event.target.value)}>
                  {ECONOMIC_KINDS.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#aeb5c0]">Amount (USD)</span>
                <input className="w-full border border-white/15 bg-[#10131a] px-3 py-2.5 text-sm text-white outline-none focus:border-[#e85d26]" inputMode="decimal" min="0" required type="number" step="0.01" value={economicAmount} onChange={(event) => setEconomicAmount(event.target.value)} />
              </label>
              <label className="flex items-center gap-3 text-sm text-[#d8dce3]">
                <input checked={economicComplete} className="h-4 w-4 accent-[#e85d26]" onChange={(event) => setEconomicComplete(event.target.checked)} type="checkbox" />
                Mark entered cost set complete
              </label>
              <button className="border border-white/20 px-4 py-2.5 text-sm font-semibold text-[#f3a27d] hover:border-[#e85d26] hover:text-white disabled:cursor-not-allowed disabled:opacity-50" disabled={savingEconomic} type="submit">{savingEconomic ? "Adding…" : "Add economic record"}</button>
            </form>
          </section>

          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e85d26]">History</p>
            <h3 className="mt-2 text-xl font-bold text-white">Server audit trail</h3>
            {historyMessage ? <p className="mt-4 text-sm leading-6 text-[#aeb5c0]">{historyMessage}</p> : null}
            {history && history.length === 0 ? <p className="mt-4 text-sm text-[#aeb5c0]">No history records returned.</p> : null}
            {history && history.length > 0 ? (
              <ol className="mt-4 max-h-72 space-y-3 overflow-y-auto pr-2">
                {history.map((entry, index) => (
                  <li className="border border-white/10 bg-[#10131a] p-3 text-xs leading-5 text-[#c5cbd5]" key={String(entry.id || entry.timestamp || index)}>
                    {Object.entries(entry).map(([key, value]) => <div key={key}><span className="text-[#8f98a7]">{pretty(key)}:</span> {typeof value === "string" ? value : JSON.stringify(value)}</div>)}
                  </li>
                ))}
              </ol>
            ) : null}
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#aeb5c0]">Economics history</h4>
            {economics === null ? (
              <p className="mt-3 text-sm text-[#aeb5c0]">Loading economics history…</p>
            ) : economics.length === 0 ? (
              <p className="mt-3 text-sm text-[#aeb5c0]">No economics records returned.</p>
            ) : (
              <ol className="mt-3 max-h-56 space-y-3 overflow-y-auto pr-2">
                {economics.map((entry, index) => (
                  <li className="border border-white/10 bg-[#10131a] p-3 text-xs leading-5 text-[#c5cbd5]" key={String(entry.id || index)}>
                    <div><span className="text-[#8f98a7]">Kind:</span> {pretty(entry.kind || "")}</div>
                    <div><span className="text-[#8f98a7]">Amount:</span> {entry.amount === undefined ? "—" : `$${entry.amount.toLocaleString()}`}</div>
                    <div><span className="text-[#8f98a7]">Complete:</span> {entry.costsComplete ? "Yes" : "No"}</div>
                    {entry.createdAt ? <div><span className="text-[#8f98a7]">Created:</span> {date(entry.createdAt)}</div> : null}
                    {entry.createdBy ? <div><span className="text-[#8f98a7]">By:</span> {entry.createdBy}</div> : null}
                  </li>
                ))}
              </ol>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

function EditorInput({
  label,
  value,
  onChange,
  placeholder,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  inputMode?: "decimal";
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#aeb5c0]">{label}</span>
      <input className="w-full border border-white/15 bg-[#10131a] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#e85d26]" inputMode={inputMode} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function EditorSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#aeb5c0]">{label}</span>
      <select className="w-full border border-white/15 bg-[#10131a] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#e85d26]" value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">—</option>
        {options.map((option) => <option key={option} value={option}>{pretty(option)}</option>)}
      </select>
    </label>
  );
}

export { LEAD_STATUSES, NO_FIT_REASONS };