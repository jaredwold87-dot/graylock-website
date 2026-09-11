import type { ReactNode } from "react";
import { PromotionReport, VariantMetric, VariantName } from "./adminApi";

const VARIANTS: Array<{ key: VariantName; label: string }> = [
  { key: "control", label: "Control" },
  { key: "savings_led", label: "Variant A — Savings-led" },
  { key: "direction_led", label: "Variant B — Homepage-Direction-led" },
];

const GUIDANCE =
  "Evaluate variants using qualified requests, held fit calls, first monthly payments, delivery capacity, refunds, cancellations, and customer fit—not click-through rate alone.";

const EVENT_LABELS: Array<[string, string]> = [
  ["promo_popup_eligible", "Popup eligible"],
  ["promo_popup_assigned", "Popup assigned"],
  ["promo_popup_impression", "Popup impressions"],
  ["promo_popup_cta_clicked", "Popup CTA clicks"],
  ["promo_popup_dismissed", "Popup dismissals"],
  ["promo_flow_opened", "Promotion flow opened"],
  ["promo_form_started", "Promotion form starts"],
  ["promo_form_submitted", "Promotion form submitted"],
  ["standard_cta_clicked", "Standard CTA clicks"],
  ["standard_form_started", "Standard form starts"],
  ["standard_form_submitted", "Standard form submitted"],
  ["lead_qualified", "Lead qualified"],
  ["lead_not_qualified", "Lead not qualified"],
  ["fit_call_booked", "Fit calls booked"],
  ["fit_call_held", "Fit calls held"],
  ["homepage_direction_delivered", "Direction delivered"],
  ["promotion_accepted", "Promotion accepted"],
  ["monthly_plan_first_payment_collected", "First monthly payment"],
  ["launch_completed", "Launch completed"],
  ["refund_or_guarantee_claim", "Refund / guarantee claim"],
  ["cancellation_or_payment_failure", "Cancellation / payment failure"],
];

function normalizeVariant(value: string): VariantName | null {
  const normalized = value.toLowerCase().replace(/[\s-]+/g, "_");
  if (normalized === "control") return "control";
  if (normalized === "savings_led" || normalized === "variant_a" || normalized === "a") return "savings_led";
  if (normalized === "direction_led" || normalized === "variant_b" || normalized === "b") return "direction_led";
  return null;
}

export function metricFor(report: PromotionReport, variant: VariantName): VariantMetric | undefined {
  return report.metrics.find((metric) => normalizeVariant(metric.variant) === variant);
}

export function eventCount(metric: VariantMetric | undefined, eventName: string): number {
  const value = metric?.counts?.[eventName];
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function qualifiedCount(metric: VariantMetric | undefined) {
  return (metric?.standardQualifiedLeads || 0) + (metric?.promotionQualifiedLeads || 0);
}

function totalFormStarts(metric: VariantMetric | undefined) {
  return eventCount(metric, "promo_form_started") + eventCount(metric, "standard_form_started");
}

function totalFormSubmissions(metric: VariantMetric | undefined) {
  return eventCount(metric, "promo_form_submitted") + eventCount(metric, "standard_form_submitted");
}

function ratio(numerator: number, denominator: number) {
  if (!denominator || !Number.isFinite(numerator) || !Number.isFinite(denominator)) return null;
  return (numerator / denominator) * 100;
}

function formatRate(value: number | null) {
  return value === null ? "—" : `${value.toFixed(value >= 10 ? 0 : 1)}%`;
}

function formatCount(value: number | null | undefined) {
  return typeof value === "number" && Number.isFinite(value) ? value.toLocaleString() : "—";
}

function metricLabel(variant: VariantName) {
  return VARIANTS.find((item) => item.key === variant)?.label || variant;
}

function MetricValue({
  count,
  rate,
}: {
  count: number | null;
  rate?: number | null;
}) {
  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
      <strong className="font-semibold text-white">{formatCount(count)}</strong>
      {rate !== undefined ? <span className="text-xs text-[#8f98a7]">({formatRate(rate)})</span> : null}
    </span>
  );
}

export function EvaluationNotice({ report }: { report: PromotionReport }) {
  const guidance = report.guidance || GUIDANCE;
  if (report.evaluation.ready) {
    return (
      <div className="border border-emerald-400/30 bg-emerald-950/20 px-4 py-3 text-sm text-emerald-100">
        Minimum evaluation period and eligible-visitor threshold met. {guidance} No variant is
        labeled a winner from click-through rate alone.
      </div>
    );
  }
  return (
    <div className="border border-amber-400/35 bg-amber-950/20 px-4 py-3 text-sm leading-6 text-amber-100">
      <strong>Insufficient data for decision.</strong> Raw counts are shown while the configured
      minimums are reached: {formatCount(report.evaluation.elapsedDays)} /{" "}
      {formatCount(report.evaluation.minEvaluationDays)} evaluation days and{" "}
      {formatCount(report.evaluation.eligibleVisitors)} /{" "}
      {formatCount(report.evaluation.minEligibleVisitors)} eligible visitors.
      No variant is labeled a winner from click-through rate alone.
    </div>
  );
}

export function ExperimentHealth({ report }: { report: PromotionReport }) {
  const guidance = report.guidance || GUIDANCE;
  return (
    <section className="space-y-5">
      <EvaluationNotice report={report} />
      <div className="border border-white/10 bg-[#171b23] p-5 shadow-xl shadow-black/10 sm:p-7">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e85d26]">
            Experiment health
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Qualified demand, not just clicks</h2>
          <p className="mt-2 text-sm leading-6 text-[#aeb5c0]">
            Each value shows a raw count and, where meaningful, its rate. Control popup metrics
            are intentionally marked N/A because control does not show a popup.
          </p>
          <p className="mt-3 border-l-2 border-[#e85d26] pl-3 text-sm leading-6 text-[#d8dce3]">
            {guidance}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[1060px] w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-[0.1em] text-[#8f98a7]">
                <th className="px-3 py-3 font-semibold">Metric</th>
                {VARIANTS.map((variant) => (
                  <th className="px-3 py-3 font-semibold" key={variant.key}>{variant.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <HealthRow label="Eligible visitors" metrics={report} getValue={(metric) => <MetricValue count={metric?.eligibleVisitors || 0} />} />
              <HealthRow label="Assigned visitors" metrics={report} getValue={(metric) => <MetricValue count={metric?.assignedVisitors || 0} />} />
              <HealthRow
                label="Popup impressions / view rate"
                metrics={report}
                getValue={(metric, variant) => variant === "control" ? <MetricValue count={null} /> : <MetricValue count={eventCount(metric, "promo_popup_impression")} rate={ratio(eventCount(metric, "promo_popup_impression"), metric?.eligibleVisitors || 0)} />}
              />
              <HealthRow
                label="Primary CTA clicks / popup CTR"
                metrics={report}
                getValue={(metric, variant) => variant === "control" ? <MetricValue count={null} /> : <MetricValue count={eventCount(metric, "promo_popup_cta_clicked")} rate={ratio(eventCount(metric, "promo_popup_cta_clicked"), eventCount(metric, "promo_popup_impression"))} />}
              />
              <HealthRow
                label="Popup dismissals"
                metrics={report}
                getValue={(metric, variant) => variant === "control" ? <MetricValue count={null} /> : <MetricValue count={eventCount(metric, "promo_popup_dismissed")} />}
              />
              <HealthRow
                label="Form starts"
                metrics={report}
                getValue={(metric) => <MetricValue count={totalFormStarts(metric)} />}
              />
              <HealthRow
                label="Form completion"
                metrics={report}
                getValue={(metric) => <MetricValue count={totalFormSubmissions(metric)} rate={ratio(totalFormSubmissions(metric), totalFormStarts(metric))} />}
              />
              <HealthRow
                label="Submitted requests"
                metrics={report}
                getValue={(metric) => <MetricValue count={totalFormSubmissions(metric)} />}
              />
              <HealthRow
                label="Qualified leads / qualified request rate"
                metrics={report}
                getValue={(metric) => <MetricValue count={qualifiedCount(metric)} rate={ratio(qualifiedCount(metric), metric?.eligibleVisitors || 0)} />}
              />
              <HealthRow label="Fit calls booked" metrics={report} getValue={(metric) => <MetricValue count={eventCount(metric, "fit_call_booked")} />} />
              <HealthRow
                label="Fit calls held / attendance rate"
                metrics={report}
                getValue={(metric) => <MetricValue count={eventCount(metric, "fit_call_held")} rate={ratio(eventCount(metric, "fit_call_held"), eventCount(metric, "fit_call_booked"))} />}
              />
              <HealthRow label="Homepage Direction delivered" metrics={report} getValue={(metric) => <MetricValue count={eventCount(metric, "homepage_direction_delivered")} />} />
              <HealthRow label="Promotion accepted" metrics={report} getValue={(metric) => <MetricValue count={eventCount(metric, "promotion_accepted")} />} />
              <HealthRow
                label="First monthly payment / conversion"
                metrics={report}
                getValue={(metric) => <MetricValue count={eventCount(metric, "monthly_plan_first_payment_collected")} rate={ratio(eventCount(metric, "monthly_plan_first_payment_collected"), metric?.eligibleVisitors || 0)} />}
              />
              <HealthRow label="Launches completed" metrics={report} getValue={(metric) => <MetricValue count={eventCount(metric, "launch_completed")} />} />
              <HealthRow label="Refund / guarantee claims" metrics={report} getValue={(metric) => <MetricValue count={eventCount(metric, "refund_or_guarantee_claim")} />} />
              <HealthRow label="Cancellations / payment failures" metrics={report} getValue={(metric) => <MetricValue count={eventCount(metric, "cancellation_or_payment_failure")} />} />
            </tbody>
          </table>
        </div>
      </div>

      <FunnelPanel report={report} />
      <CannibalizationPanel report={report} />
    </section>
  );
}

function HealthRow({
  label,
  metrics,
  getValue,
}: {
  label: string;
  metrics: PromotionReport;
  getValue: (metric: VariantMetric | undefined, variant: VariantName) => ReactNode;
}) {
  return (
    <tr className="border-b border-white/[0.07] align-top last:border-0">
      <th className="whitespace-nowrap px-3 py-3 font-medium text-[#c5cbd5]">{label}</th>
      {VARIANTS.map((variant) => (
        <td className="px-3 py-3 text-[#e7e9ec]" key={variant.key}>
          {getValue(metricFor(metrics, variant.key), variant.key)}
        </td>
      ))}
    </tr>
  );
}

const FUNNEL_STEPS: Array<[string, (metric: VariantMetric | undefined) => number]> = [
  ["Eligible", (metric) => metric?.eligibleVisitors || 0],
  ["Impression", (metric) => eventCount(metric, "promo_popup_impression")],
  ["CTA click", (metric) => eventCount(metric, "promo_popup_cta_clicked")],
  ["Form start", totalFormStarts],
  ["Form submitted", totalFormSubmissions],
  ["Qualified", qualifiedCount],
  ["Fit call booked", (metric) => eventCount(metric, "fit_call_booked")],
  ["Fit call held", (metric) => eventCount(metric, "fit_call_held")],
  ["Homepage Direction delivered", (metric) => eventCount(metric, "homepage_direction_delivered")],
  ["Promotion accepted", (metric) => eventCount(metric, "promotion_accepted")],
  ["First monthly payment", (metric) => eventCount(metric, "monthly_plan_first_payment_collected")],
  ["Launch completed", (metric) => eventCount(metric, "launch_completed")],
];

function FunnelPanel({ report }: { report: PromotionReport }) {
  return (
    <div className="border border-white/10 bg-[#171b23] p-5 shadow-xl shadow-black/10 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e85d26]">Funnel</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Side-by-side progression</h2>
      <p className="mt-2 text-sm leading-6 text-[#aeb5c0]">
        Control has no popup, so its impression and popup-click stages are shown as N/A rather
        than implying a zero treatment exposure.
      </p>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {VARIANTS.map((variant) => {
          const metric = metricFor(report, variant.key);
          return (
            <div className="border border-white/10 bg-[#10131a] p-4" key={variant.key}>
              <h3 className="text-lg font-semibold text-white">{variant.label}</h3>
              <ol className="mt-4 space-y-2">
                {FUNNEL_STEPS.map(([label, getValue], index) => {
                  const isControlPopupStep = variant.key === "control" && (index === 1 || index === 2);
                  return (
                    <li className="flex items-center justify-between gap-3 border-b border-white/[0.07] pb-2 text-sm last:border-0" key={label}>
                      <span className="text-[#aeb5c0]"><span className="mr-2 text-xs text-[#e85d26]">{index + 1}.</span>{label}</span>
                      <strong className="text-white">{isControlPopupStep ? "N/A" : formatCount(getValue(metric))}</strong>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CannibalizationPanel({ report }: { report: PromotionReport }) {
  return (
    <div className="border border-white/10 bg-[#171b23] p-5 shadow-xl shadow-black/10 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e85d26]">Cannibalization</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Ordinary CTA path</h2>
      <p className="mt-2 text-sm leading-6 text-[#aeb5c0]">
        Compare standard Homepage Direction activity with promotion-attributed requests before
        interpreting treatment performance.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-[820px] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-[0.1em] text-[#8f98a7]">
              <th className="px-3 py-3 font-semibold">Measure</th>
              {VARIANTS.map((variant) => <th className="px-3 py-3 font-semibold" key={variant.key}>{variant.label}</th>)}
            </tr>
          </thead>
          <tbody>
            <CannibalizationRow label="Standard homepage CTA clicks" report={report} get={(metric) => eventCount(metric, "standard_cta_clicked")} />
            <CannibalizationRow label="Standard form starts" report={report} get={(metric) => eventCount(metric, "standard_form_started")} />
            <CannibalizationRow label="Standard form submissions" report={report} get={(metric) => eventCount(metric, "standard_form_submitted")} />
            <CannibalizationRow label="Standard qualified leads" report={report} get={(metric) => metric?.standardQualifiedLeads || 0} />
            <CannibalizationRow label="Promotion-attributed form submissions" report={report} get={(metric) => eventCount(metric, "promo_form_submitted")} />
            <CannibalizationRow label="Promotion-attributed qualified leads" report={report} get={(metric) => metric?.promotionQualifiedLeads || 0} />
            <CannibalizationRow
              label="Total qualified / eligible visitor"
              report={report}
              get={(metric) => qualifiedCount(metric)}
              rate
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CannibalizationRow({
  label,
  report,
  get,
  rate,
}: {
  label: string;
  report: PromotionReport;
  get: (metric: VariantMetric | undefined) => number;
  rate?: boolean;
}) {
  return (
    <tr className="border-b border-white/[0.07] last:border-0">
      <th className="px-3 py-3 font-medium text-[#c5cbd5]">{label}</th>
      {VARIANTS.map((variant) => {
        const metric = metricFor(report, variant.key);
        return (
          <td className="px-3 py-3 text-white" key={variant.key}>
            <MetricValue count={get(metric)} rate={rate ? ratio(get(metric), metric?.eligibleVisitors || 0) : undefined} />
          </td>
        );
      })}
    </tr>
  );
}

export function metricEventCatalog() {
  return EVENT_LABELS;
}

export { formatCount, formatRate, metricLabel, normalizeVariant };