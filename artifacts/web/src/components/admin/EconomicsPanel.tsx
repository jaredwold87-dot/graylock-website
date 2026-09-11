import { PromotionReport } from "./adminApi";
import { formatCount, metricFor, normalizeVariant } from "./ExperimentHealth";

const VARIANTS = [
  ["control", "Control"],
  ["savings_led", "Variant A — Savings-led"],
  ["direction_led", "Variant B — Homepage-Direction-led"],
] as const;

function money(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Not entered";
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

export function EconomicsPanel({ report }: { report: PromotionReport }) {
  return (
    <section className="border border-white/10 bg-[#171b23] p-5 shadow-xl shadow-black/10 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e85d26]">Service economics</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Cohort economics</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-[#aeb5c0]">
        Estimates are shown only from entered records. An incomplete cost set is never presented
        as a profitability claim; add delivery and support costs from a lead’s edit panel when
        they are known.
      </p>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {VARIANTS.map(([variant, label]) => {
          const economics = report.economics.find((item) => normalizeVariant(item.variant) === variant);
          const metric = metricFor(report, variant);
          const costsComplete = economics?.costsComplete === true;
          return (
            <article className="border border-white/10 bg-[#10131a] p-4" key={variant}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{label}</h3>
                <span className={`border px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] ${costsComplete ? "border-emerald-400/40 text-emerald-200" : "border-amber-400/40 text-amber-200"}`}>
                  {costsComplete ? "Complete costs" : "Incomplete estimate"}
                </span>
              </div>
              <dl className="mt-5 space-y-3 text-sm">
                <EconomicsRow label="Waived build-fee amount" value={money(economics?.waivedBuildFeeAmount)} />
                <EconomicsRow label="First monthly payments" value={money(economics?.firstPaymentsCollected)} />
                <EconomicsRow label="Total monthly payments" value={money(economics?.totalMonthlyPayments)} />
                <EconomicsRow label="Direct delivery cost" value={money(economics?.directDeliveryCost)} />
                <EconomicsRow label="Support cost" value={money(economics?.supportCost)} />
                <EconomicsRow label="Refund amount" value={money(economics?.refundAmount)} />
                <EconomicsRow label="Refund / guarantee claims" value={formatCount(metric ? metric.counts.refund_or_guarantee_claim || 0 : 0)} />
                <EconomicsRow label="Cancellations / failures" value={formatCount(metric ? metric.counts.cancellation_or_payment_failure || 0 : 0)} />
                <div className="border-t border-white/10 pt-3">
                  <dt className="text-[#8f98a7]">Early gross-profit estimate</dt>
                  <dd className={`mt-1 font-semibold ${costsComplete ? "text-white" : "text-amber-200"}`}>
                    {costsComplete && economics?.grossProfitEstimate !== null && economics?.grossProfitEstimate !== undefined
                      ? money(economics.grossProfitEstimate)
                      : "Unavailable until entered costs are complete"}
                  </dd>
                </div>
              </dl>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function EconomicsRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/[0.07] pb-2 last:border-0">
      <dt className="text-[#8f98a7]">{label}</dt>
      <dd className="text-right font-medium text-[#e7e9ec]">{value}</dd>
    </div>
  );
}