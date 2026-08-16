import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { useAuctioneerSectionView } from "@/lib/auctioneerAnalytics";
import { auctioneerGetStartedHref, AUCTIONEER_CTA_LABEL } from "@/lib/auctioneerLinks";

/**
 * Pricing + Guarantee (spec §7): the low-risk first step, without turning
 * this page into the generic Pricing page. The "from $199/month" line
 * matches the live /pricing Starter plan — remove it here if that changes.
 * OFFER RULES (spec): no location-based exclusivity language of any kind;
 * the waived build fee is never automatic — always "for qualified
 * auctioneer businesses Graylock chooses to work with"; no booking/
 * revenue/bidder/lead/ranking/ROI promises; guarantee language mirrors
 * /pricing.
 */
export function AuctioneerPricingSection() {
  const sectionRef = useAuctioneerSectionView<HTMLElement>("auctioneer_pricing_view");

  return (
    <section
      ref={sectionRef}
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
            The first thing you pay for is not the demo. You see a custom direction for your
            business before deciding whether the full site is worth moving forward with. For
            qualified auctioneer businesses Graylock chooses to work with, we are currently
            waiving the one-time website build fee. After launch, your business is on a clear
            monthly plan with hosting, maintenance, support, and refresh benefits while
            subscribed.
          </p>
          <p className="text-[#1A1A1A] font-display text-2xl md:text-3xl mb-6">
            Website plans from $199/month
          </p>
          {/* Proof badges — spec wording, linked to the pricing page terms */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-y-3.5 gap-x-8 mb-9 md:mx-[-60px] lg:mx-[-130px]">
            <div className="flex items-center gap-2.5">
              <CheckCircle2
                size={20}
                strokeWidth={2.2}
                className="text-[#E85D26] flex-shrink-0"
                aria-hidden="true"
              />
              <Link
                href="/pricing"
                className="text-[#1A1A1A] font-sans font-semibold text-base md:text-[17px] hover:text-[#B23E16] transition-colors whitespace-nowrap"
              >
                30-Day Money-Back Guarantee
              </Link>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2
                size={20}
                strokeWidth={2.2}
                className="text-[#E85D26] flex-shrink-0"
                aria-hidden="true"
              />
              <Link
                href="/pricing#stay-current-guarantee"
                className="text-[#1A1A1A] font-sans font-semibold text-base md:text-[17px] hover:text-[#B23E16] transition-colors whitespace-nowrap"
              >
                Two-Year Refresh Benefit While Subscribed
              </Link>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2
                size={20}
                strokeWidth={2.2}
                className="text-[#E85D26] flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-[#1A1A1A] font-sans font-semibold text-base md:text-[17px] whitespace-normal sm:whitespace-nowrap">
                One-Time Build Fee Waived for Qualified Auctioneer Businesses
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <CTAButton
              href={auctioneerGetStartedHref("pricing")}
              variant="funnel"
              className="w-full sm:w-auto"
            >
              {AUCTIONEER_CTA_LABEL}
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
