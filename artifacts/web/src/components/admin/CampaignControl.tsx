import { FormEvent, useMemo, useState } from "react";
import {
  Campaign,
  getCampaign,
  pauseCampaign,
  updateCampaign,
} from "./adminApi";

type CampaignControlProps = {
  campaign: Campaign;
  csrfToken: string;
  onCampaignChange: (campaign: Campaign) => void;
  onError: (message: string) => void;
};

type CampaignStatus = "Draft" | "Scheduled" | "Live" | "Paused" | "Expired";

function campaignStatus(campaign: Campaign): CampaignStatus {
  if (campaign.manualKillSwitch) return "Paused";
  if (campaign.recurrenceMode === "monthly") {
    return campaign.enabled ? "Live" : "Draft";
  }
  const now = Date.now();
  const start = campaign.startDateTime ? Date.parse(campaign.startDateTime) : Number.NaN;
  const end = campaign.endDateTime ? Date.parse(campaign.endDateTime) : Number.NaN;
  if (Number.isFinite(end) && now > end) return "Expired";
  if (!campaign.enabled) return "Draft";
  if (!campaign.startDateTime && !campaign.endDateTime) return "Draft";
  if (Number.isFinite(start) && now < start) return "Scheduled";
  return "Live";
}

function statusTone(status: CampaignStatus) {
  if (status === "Live") return "border-emerald-400/40 bg-emerald-950/30 text-emerald-200";
  if (status === "Paused") return "border-amber-400/40 bg-amber-950/30 text-amber-200";
  if (status === "Expired") return "border-red-400/40 bg-red-950/30 text-red-200";
  return "border-white/15 bg-white/[0.04] text-[#d8dce3]";
}

function numberValue(value: unknown, fallback = "") {
  return typeof value === "number" && Number.isFinite(value) ? String(value) : fallback;
}

export function CampaignControl({
  campaign,
  csrfToken,
  onCampaignChange,
  onError,
}: CampaignControlProps) {
  const [draft, setDraft] = useState<Campaign>(campaign);
  const [saving, setSaving] = useState(false);
  const [pausing, setPausing] = useState(false);
  const [notice, setNotice] = useState("");

  const status = campaignStatus(campaign);
  const draftStatus = campaignStatus(draft);
  const changed = JSON.stringify(campaign) !== JSON.stringify(draft);
  const deadlineNeedsConfirmation =
    campaign.endDateTime !== draft.endDateTime ||
    campaign.startDateTime !== draft.startDateTime ||
    campaign.deadlineDisplayText !== draft.deadlineDisplayText;
  const modeTimezoneNeedsConfirmation =
    campaign.recurrenceMode !== draft.recurrenceMode ||
    campaign.timezone !== draft.timezone;
  const enableNeedsConfirmation = !campaign.enabled && draft.enabled;

  function update<K extends keyof Campaign>(key: K, value: Campaign[K]) {
    setDraft((previous) => ({ ...previous, [key]: value }));
    setNotice("");
  }

  function updateNumber<K extends keyof Campaign>(key: K, value: string) {
    const parsed = value === "" ? 0 : Number(value);
    update(key, (Number.isFinite(parsed) ? parsed : 0) as Campaign[K]);
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!changed) {
      setNotice("No configuration changes to save.");
      return;
    }
    if (enableNeedsConfirmation) {
      const confirmed = window.confirm(
        "Enable this promotion campaign? Confirm that the configured audience, dates, disclosure, and legal links are ready for live visitors.",
      );
      if (!confirmed) return;
    }
    if (deadlineNeedsConfirmation) {
      const confirmed = window.confirm(
        `Change the live deadline to ${draft.endDateTime || "no end instant"} with display text “${draft.deadlineDisplayText || "(empty)"}”? Confirm that the enforcement instant and displayed deadline describe the same deadline.`,
      );
      if (!confirmed) return;
    }
    if (modeTimezoneNeedsConfirmation) {
      const confirmed = window.confirm(
        `Change recurrence to ${draft.recurrenceMode === "monthly" ? "Monthly" : "Manual"} and display timezone to ${draft.timezone}? ${
          draft.recurrenceMode === "monthly"
            ? "Monthly mode automatically uses the current calendar month in this timezone, ending at exclusive next-month midnight; the displayed deadline is the month's final day at 11:59."
            : "Manual mode preserves and uses the saved start/end instants."
        }`,
      );
      if (!confirmed) return;
    }

    setSaving(true);
    setNotice("");
    onError("");
    try {
      const result = await updateCampaign(
        {
          ...draft,
          confirmEnabled: enableNeedsConfirmation || undefined,
          confirmDeadline: deadlineNeedsConfirmation || undefined,
          confirmRecurrenceChange: modeTimezoneNeedsConfirmation || undefined,
        },
        csrfToken,
      );
      setDraft(result.campaign);
      onCampaignChange(result.campaign);
      setNotice("Campaign configuration saved.");
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "Unable to save campaign.";
      onError(message);
    } finally {
      setSaving(false);
    }
  }

  async function pauseNow() {
    if (
      !window.confirm(
        "Pause the promotion now? This immediately stops popup display for future impressions.",
      )
    ) {
      return;
    }
    setPausing(true);
    setNotice("");
    onError("");
    try {
      const result = await pauseCampaign(csrfToken);
      if (result.campaign) {
        setDraft(result.campaign);
        onCampaignChange(result.campaign);
      } else {
        const refreshed = await getCampaign();
        setDraft(refreshed.campaign);
        onCampaignChange(refreshed.campaign);
      }
      setNotice("Promotion paused. Existing visitors will not receive new impressions.");
    } catch (caught) {
      onError(caught instanceof Error ? caught.message : "Unable to pause promotion.");
    } finally {
      setPausing(false);
    }
  }

  const pathValue = Array.isArray(draft.eligiblePagePaths)
    ? draft.eligiblePagePaths.join("\n")
    : "";

  return (
    <>
      <style>{`
        .admin-label { display: block; margin-bottom: .5rem; color: #aeb5c0; font-size: .72rem; font-weight: 600; letter-spacing: .12em; line-height: 1.2; text-transform: uppercase; }
        .admin-input { display: block; width: 100%; border: 1px solid rgba(255,255,255,.14); background: #10131a; color: #f3f1ed; padding: .7rem .75rem; font-size: .95rem; outline: none; transition: border-color 160ms ease; }
        .admin-input:focus { border-color: #e85d26; }
        .admin-input:disabled { cursor: not-allowed; opacity: .6; }
        .admin-help { display: block; margin-top: .35rem; color: #8f98a7; font-size: .72rem; line-height: 1.35; }
      `}</style>
      <section className="border border-white/10 bg-[#171b23] p-5 shadow-xl shadow-black/10 sm:p-7">
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e85d26]">
              Campaign control
            </p>
            <span className={`border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${statusTone(status)}`}>
              {status}
            </span>
          </div>
          <h2 className="mt-2 text-2xl font-bold text-white">Configuration</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#aeb5c0]">
            Changes are sent to the server only after explicit confirmation for enabling or
            changing a live deadline, recurrence mode, or timezone. Manual mode uses saved ISO
            start/end instants; Monthly mode automatically runs for the current calendar month in
            the configured timezone and preserves those manual values.
          </p>
        </div>
        <button
          className="shrink-0 border border-red-400/50 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-red-200 transition hover:bg-red-950/40 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={pausing || status === "Paused"}
          onClick={pauseNow}
          type="button"
        >
          {pausing ? "Pausing…" : "Pause promotion now"}
        </button>
      </div>

      <form onSubmit={save}>
        <div className="grid gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
          <label className="block md:col-span-2 xl:col-span-1">
            <span className="admin-label">Campaign name</span>
            <input className="admin-input" value={draft.campaignName} onChange={(event) => update("campaignName", event.target.value)} />
          </label>
          <label className="block">
            <span className="admin-label">Campaign ID</span>
            <input className="admin-input" disabled value={draft.campaignId} />
          </label>
          <label className="block">
            <span className="admin-label">Experiment ID</span>
            <input className="admin-input" disabled value={draft.experimentId} />
          </label>

          <label className="flex items-center gap-3 border border-white/10 bg-[#10131a] px-3 py-3">
            <input checked={draft.enabled} className="h-4 w-4 accent-[#e85d26]" onChange={(event) => update("enabled", event.target.checked)} type="checkbox" />
            <span>
              <span className="block text-sm font-semibold text-white">Campaign enabled</span>
              <span className="block text-xs text-[#8f98a7]">Requires confirmation when turned on.</span>
            </span>
          </label>
          <label className="flex items-center gap-3 border border-white/10 bg-[#10131a] px-3 py-3">
            <input checked={draft.popupEnabled} className="h-4 w-4 accent-[#e85d26]" onChange={(event) => update("popupEnabled", event.target.checked)} type="checkbox" />
            <span>
              <span className="block text-sm font-semibold text-white">Popup enabled</span>
              <span className="block text-xs text-[#8f98a7]">The campaign can still be reported when off.</span>
            </span>
          </label>
          <label className="flex items-center gap-3 border border-white/10 bg-[#10131a] px-3 py-3">
            <input checked={draft.dashboardEnabled} className="h-4 w-4 accent-[#e85d26]" onChange={(event) => update("dashboardEnabled", event.target.checked)} type="checkbox" />
            <span>
              <span className="block text-sm font-semibold text-white">Dashboard reporting enabled</span>
              <span className="block text-xs text-[#8f98a7]">Turning this off hides report data; configuration remains available.</span>
            </span>
          </label>
          <label className="flex items-center gap-3 border border-white/10 bg-[#10131a] px-3 py-3">
            <input checked={draft.manualKillSwitch} className="h-4 w-4 accent-[#e85d26]" onChange={(event) => update("manualKillSwitch", event.target.checked)} type="checkbox" />
            <span>
              <span className="block text-sm font-semibold text-white">Manual kill switch</span>
              <span className="block text-xs text-[#8f98a7]">Stops future popup impressions immediately.</span>
            </span>
          </label>

          <label className="block">
            <span className="admin-label">Recurrence</span>
            <select
              className="admin-input"
              value={draft.recurrenceMode}
              onChange={(event) => update("recurrenceMode", event.target.value === "monthly" ? "monthly" : "manual")}
            >
              <option value="monthly">Monthly — automatic calendar-month periods</option>
              <option value="manual">Manual — use saved dates</option>
            </select>
            <span className="admin-help">
              Monthly dates are generated in the configured timezone. Switching modes requires
              confirmation; manual start/end values remain saved.
            </span>
          </label>
          <label className="block">
            <span className="admin-label">Timezone / display zone</span>
            <input className="admin-input" value={draft.timezone} onChange={(event) => update("timezone", event.target.value)} placeholder="America/Los_Angeles" />
            <span className="admin-help">Monthly calendar boundaries and deadline display use this timezone. Changes require confirmation.</span>
          </label>
          <label className="block">
            <span className="admin-label">Start ISO instant</span>
            <input className="admin-input" disabled={draft.recurrenceMode === "monthly"} value={draft.startDateTime || ""} onChange={(event) => update("startDateTime", event.target.value || null)} placeholder="2026-09-01T07:00:00.000Z" />
            <span className="admin-help">{draft.recurrenceMode === "monthly" ? "Preserved for Manual mode; Monthly supplies the current month's start." : "Use an ISO instant with an explicit offset or Z."}</span>
          </label>
          <label className="block">
            <span className="admin-label">End ISO instant</span>
            <input className="admin-input" disabled={draft.recurrenceMode === "monthly"} value={draft.endDateTime || ""} onChange={(event) => update("endDateTime", event.target.value || null)} placeholder="2026-09-30T06:59:59.000Z" />
            <span className="admin-help">{draft.recurrenceMode === "monthly" ? "Preserved for Manual mode; Monthly ends at exclusive next-month midnight." : "Enforcement uses this exact instant."}</span>
          </label>
          <label className="block md:col-span-2">
            <span className="admin-label">Deadline display text</span>
            <input className="admin-input" disabled={draft.recurrenceMode === "monthly"} value={draft.deadlineDisplayText || ""} onChange={(event) => update("deadlineDisplayText", event.target.value || null)} placeholder="September 30, 2026 at 11:59 PM Pacific" />
            <span className="admin-help">{draft.recurrenceMode === "monthly" ? "Generated as the month's last day at 11:59 in the configured timezone." : "Must describe the end instant in the selected display timezone; it is not used for enforcement."}</span>
          </label>

          <label className="block">
            <span className="admin-label">Experiment stage</span>
            <input className="admin-input" value={draft.stage} onChange={(event) => update("stage", event.target.value)} placeholder="stage_1" />
          </label>
          <label className="block">
            <span className="admin-label">Minimum evaluation days</span>
            <input className="admin-input" min="0" step="1" type="number" value={numberValue(draft.minEvaluationDays)} onChange={(event) => updateNumber("minEvaluationDays", event.target.value)} />
          </label>
          <label className="block">
            <span className="admin-label">Minimum eligible visitors</span>
            <input className="admin-input" min="0" step="1" type="number" value={numberValue(draft.minEligibleVisitors)} onChange={(event) => updateNumber("minEligibleVisitors", event.target.value)} />
          </label>
          <label className="block">
            <span className="admin-label">Control traffic %</span>
            <input className="admin-input" min="0" max="100" step="1" type="number" value={numberValue(draft.trafficAllocationControl)} onChange={(event) => updateNumber("trafficAllocationControl", event.target.value)} />
          </label>
          <label className="block">
            <span className="admin-label">Variant A traffic %</span>
            <input className="admin-input" min="0" max="100" step="1" type="number" value={numberValue(draft.trafficAllocationVariantA)} onChange={(event) => updateNumber("trafficAllocationVariantA", event.target.value)} />
          </label>
          <label className="block">
            <span className="admin-label">Variant B traffic %</span>
            <input className="admin-input" min="0" max="100" step="1" type="number" value={numberValue(draft.trafficAllocationVariantB)} onChange={(event) => updateNumber("trafficAllocationVariantB", event.target.value)} />
          </label>
          <label className="block">
            <span className="admin-label">Trigger minimum seconds</span>
            <input className="admin-input" min="0" step="1" type="number" value={numberValue(draft.triggerMinimumSeconds)} onChange={(event) => updateNumber("triggerMinimumSeconds", event.target.value)} />
          </label>
          <label className="block">
            <span className="admin-label">Trigger scroll depth</span>
            <input className="admin-input" min="0" max="1" step="0.01" type="number" value={numberValue(draft.triggerMinimumScrollDepth)} onChange={(event) => updateNumber("triggerMinimumScrollDepth", event.target.value)} />
            <span className="admin-help">Decimal from 0 to 1 (default 0.55).</span>
          </label>
          <label className="block">
            <span className="admin-label">After dismissal</span>
            <p className="text-sm text-[#d8dce3]">{draft.recurrenceMode === "monthly" ? "Hide this month’s popup; a new month can show it again." : "Hide this campaign’s popup."} The offer remains available until its deadline.</p>
          </label>

          <label className="block md:col-span-2 xl:col-span-1">
            <span className="admin-label">Eligible page paths</span>
            <textarea className="admin-input min-h-24 resize-y" value={pathValue} onChange={(event) => update("eligiblePagePaths", event.target.value.split("\n").map((path) => path.trim()).filter(Boolean))} />
            <span className="admin-help">One path per line.</span>
          </label>
          <label className="block">
            <span className="admin-label">Standard build-fee display value</span>
            <input className="admin-input" value={draft.standardBuildFeeDisplayValue || ""} onChange={(event) => update("standardBuildFeeDisplayValue", event.target.value || null)} />
          </label>
          <label className="block md:col-span-2">
            <span className="admin-label">Monthly-plan disclosure</span>
            <textarea className="admin-input min-h-20 resize-y" value={draft.monthlyPlanDisclosure || ""} onChange={(event) => update("monthlyPlanDisclosure", event.target.value || null)} />
          </label>
          <label className="block">
            <span className="admin-label">Legal terms URL</span>
            <input className="admin-input" type="url" value={draft.legalTermsUrl || ""} onChange={(event) => update("legalTermsUrl", event.target.value || null)} />
          </label>
          <label className="block">
            <span className="admin-label">Privacy policy URL</span>
            <input className="admin-input" type="url" value={draft.privacyPolicyUrl || ""} onChange={(event) => update("privacyPolicyUrl", event.target.value || null)} />
          </label>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
          <button
            className="bg-[#e85d26] px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#f2733b] disabled:cursor-not-allowed disabled:opacity-50"
            disabled={saving || !changed}
            type="submit"
          >
            {saving ? "Saving…" : "Save configuration"}
          </button>
          {changed ? <span className="text-xs text-amber-200">Unsaved changes</span> : null}
          {draftStatus !== status ? <span className="text-xs text-[#aeb5c0]">New status after save: {draftStatus}</span> : null}
          {notice ? <span aria-live="polite" className="text-sm text-emerald-200">{notice}</span> : null}
        </div>
      </form>
      </section>
    </>
  );
}