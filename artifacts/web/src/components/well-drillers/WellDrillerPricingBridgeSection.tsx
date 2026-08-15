import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { trackWellDrillerEvent } from "@/lib/wellDrillerAnalytics";
import { wellDrillerGetStartedHref } from "@/lib/wellDrillerLinks";

/**
 * Pricing bridge (spec §"Pricing Context"): reuses the published pricing and
 * guarantee terms verbatim — no campaign-specific pricing is introduced here.
 */
export function WellDrillerPricingBridgeSection() {
  return (
    <section className="bg-[#0f0f0f] pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="rounded-2xl border border-[#E85D26]/40 bg-gradient-to-b from-[#E85D26]/[0.07] to-transparent px-7 py-10 md:px-12 md:py-12 text-center">
            <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
              Built to Be a Better Business Decision
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-white mb-5 leading-tight">
              A Website That Helps Create Jobs Should Not Create a Huge Upfront Bill.
            </h2>
            <p className="text-stone font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              Start with a free custom homepage demo. If your business is selected for the market
              offer, the one-time build fee is waived. After launch, you are on a clear monthly
              plan that includes the support required to keep the website current and working for
              your business.
            </p>
            <p className="text-white font-display text-xl md:text-2xl mb-8">
              Fully custom websites from{" "}
              <span className="text-[#E85D26]">$199/month</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-7">
              <CTAButton
                href={wellDrillerGetStartedHref("pricing_cta")}
                variant="funnel"
                onClick={() =>
                  trackWellDrillerEvent("well_driller_market_availability_click", {
                    cta_placement: "pricing_cta",
                  })
                }
              >
                Check My Market Availability
              </CTAButton>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-white/80 hover:text-[#E85D26] font-sans font-semibold text-sm uppercase tracking-[0.14em] px-4 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
              >
                See Full Pricing
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
            <p className="text-stone/70 font-sans text-sm leading-relaxed max-w-xl mx-auto">
              Covered by Graylock's current 30-day money-back guarantee. Your website also
              receives the current free two-year refresh benefit while subscribed.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
