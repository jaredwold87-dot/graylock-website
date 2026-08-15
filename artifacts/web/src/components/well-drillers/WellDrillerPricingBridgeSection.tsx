import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { trackWellDrillerEvent } from "@/lib/wellDrillerAnalytics";
import { wellDrillerGetStartedHref } from "@/lib/wellDrillerLinks";

/**
 * Pricing + guarantee (spec §11): removes risk without putting a full price
 * list in front of someone who has not seen the demo's value yet. The
 * "from $199/month" figure must match the live /pricing page (Starter plan).
 */
export function WellDrillerPricingBridgeSection() {
  return (
    <section
      id="pricing-guarantee"
      className="scroll-mt-[118px] bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Pricing + Guarantee
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-[#1A1A1A] mb-6">
            A Better Website Should Not Feel Like a Blind Bet.
          </h2>
          <p className="text-[#1A1A1A]/70 font-sans text-lg leading-relaxed mb-8">
            The first thing you pay for is not the demo. You see the custom direction before you
            decide whether the full site is worth moving forward with. If you are selected for
            the active local-market offer, the one-time build fee is waived. After launch, your
            business is on a clear monthly plan with ongoing support.
          </p>
          <p className="text-[#1A1A1A] font-display text-2xl md:text-3xl mb-6">
            Website plans from $199/month
          </p>
          <p className="text-[#1A1A1A]/60 font-sans text-sm leading-relaxed max-w-xl mx-auto mb-9">
            Covered by Graylock's current{" "}
            <Link
              href="/pricing"
              className="underline underline-offset-4 decoration-[#E85D26]/60 text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
            >
              30-day money-back guarantee
            </Link>
            . Your website also receives the current{" "}
            <Link
              href="/pricing#stay-current-guarantee"
              className="underline underline-offset-4 decoration-[#E85D26]/60 text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
            >
              two-year refresh benefit
            </Link>{" "}
            while subscribed.
          </p>
          <div className="flex flex-col items-center gap-5">
            <CTAButton
              href={wellDrillerGetStartedHref("pricing_cta")}
              variant="funnel"
              onClick={() =>
                trackWellDrillerEvent("well_driller_demo_cta_click", {
                  cta_placement: "pricing_cta",
                })
              }
            >
              Request My Free Custom Demo
            </CTAButton>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-[#1A1A1A]/70 hover:text-[#B23E16] font-sans font-semibold text-[13px] uppercase tracking-[0.16em] transition-colors"
            >
              See Full Pricing
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
