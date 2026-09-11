import { FormEvent } from "react";
import { ReportFilters as ReportFilterValues } from "./adminApi";

type ReportFiltersProps = {
  filters: ReportFilterValues;
  onChange: (filters: ReportFilterValues) => void;
  onApply: () => void;
  onExport: (type: "aggregate" | "leads") => void;
  exporting: "aggregate" | "leads" | null;
};

export const EMPTY_REPORT_FILTERS: ReportFilterValues = {
  dateFrom: "",
  dateTo: "",
  campaignId: "",
  stage: "",
  variant: "",
  trafficSource: "",
  utmCampaign: "",
  deviceType: "",
  businessCategory: "",
  leadStatus: "",
  assignedTeamMember: "",
  monthlyPlan: "",
};

const fields: Array<{
  key: keyof ReportFilterValues;
  label: string;
  type?: "date" | "text";
  placeholder?: string;
}> = [
  { key: "dateFrom", label: "Date from", type: "date" },
  { key: "dateTo", label: "Date to", type: "date" },
  { key: "campaignId", label: "Campaign ID", placeholder: "campaign id" },
  { key: "stage", label: "Experiment stage", placeholder: "stage_1" },
  { key: "trafficSource", label: "Traffic source", placeholder: "organic" },
  { key: "utmCampaign", label: "UTM campaign", placeholder: "campaign name" },
  { key: "deviceType", label: "Device type", placeholder: "mobile" },
  { key: "businessCategory", label: "Business category" },
  { key: "assignedTeamMember", label: "Assigned team member" },
  { key: "monthlyPlan", label: "Monthly plan" },
];

export function ReportFilters({
  filters,
  onChange,
  onApply,
  onExport,
  exporting,
}: ReportFiltersProps) {
  function update(key: keyof ReportFilterValues, value: string) {
    onChange({ ...filters, [key]: value });
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onApply();
  }

  return (
    <section className="border border-white/10 bg-[#171b23] p-5 shadow-xl shadow-black/10 sm:p-7">
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e85d26]">Report scope</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Filters and export</h2>
          <p className="mt-2 text-sm leading-6 text-[#aeb5c0]">
            Every filter is sent to report and CSV export requests. Leave a field empty to include
            all values.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            className="border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#d8dce3] transition hover:border-[#e85d26] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            disabled={exporting !== null}
            onClick={() => onExport("aggregate")}
            type="button"
          >
            {exporting === "aggregate" ? "Exporting…" : "Export aggregate CSV"}
          </button>
          <button
            className="border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#d8dce3] transition hover:border-[#e85d26] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            disabled={exporting !== null}
            onClick={() => onExport("leads")}
            type="button"
          >
            {exporting === "leads" ? "Exporting…" : "Export lead CSV"}
          </button>
        </div>
      </div>
      <form onSubmit={submit}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fields.map((field) => (
            <label className="block" key={field.key}>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#aeb5c0]">
                {field.label}
              </span>
              <input
                className="w-full border border-white/15 bg-[#10131a] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#e85d26]"
                placeholder={field.placeholder}
                type={field.type || "text"}
                value={filters[field.key]}
                onChange={(event) => update(field.key, event.target.value)}
              />
            </label>
          ))}
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#aeb5c0]">
              Variant
            </span>
            <select
              className="w-full border border-white/15 bg-[#10131a] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#e85d26]"
              value={filters.variant}
              onChange={(event) => update("variant", event.target.value)}
            >
              <option value="">All variants</option>
              <option value="control">Control</option>
              <option value="savings_led">Variant A — Savings-led</option>
              <option value="direction_led">Variant B — Homepage-Direction-led</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#aeb5c0]">
              Lead status
            </span>
            <select
              className="w-full border border-white/15 bg-[#10131a] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#e85d26]"
              value={filters.leadStatus}
              onChange={(event) => update("leadStatus", event.target.value)}
            >
              <option value="">All lead statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="not_qualified">Not qualified</option>
              <option value="fit_call_booked">Fit call booked</option>
              <option value="fit_call_held">Fit call held</option>
              <option value="homepage_direction_in_progress">Direction in progress</option>
              <option value="homepage_direction_delivered">Direction delivered</option>
              <option value="promotion_accepted">Promotion accepted</option>
              <option value="first_payment_collected">First payment collected</option>
              <option value="launched">Launched</option>
              <option value="refund_or_guarantee_claim">Refund / guarantee claim</option>
              <option value="cancelled">Cancelled</option>
              <option value="payment_failed">Payment failed</option>
              <option value="closed_lost">Closed lost</option>
            </select>
          </label>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            className="bg-[#e85d26] px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#f2733b]"
            type="submit"
          >
            Apply filters
          </button>
          <button
            className="border border-white/15 px-4 py-3 text-sm font-semibold text-[#d8dce3] transition hover:border-white/30 hover:text-white"
            onClick={() => onChange(EMPTY_REPORT_FILTERS)}
            type="button"
          >
            Clear filters
          </button>
        </div>
      </form>
    </section>
  );
}