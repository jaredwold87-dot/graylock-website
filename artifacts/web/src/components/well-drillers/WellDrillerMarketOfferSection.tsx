import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { trackWellDrillerEvent, useSectionHalfViewEvent } from "@/lib/wellDrillerAnalytics";
import { wellDrillerGetStartedHref } from "@/lib/wellDrillerLinks";

const INCLUDED_ITEMS = [
  {
    title: "Free Custom Homepage Demo",
    copy: "See the direction built around your company before making a commitment.",
  },
  {
    title: "30-Day Money-Back Guarantee",
    copy: "Keep the current Graylock guarantee exactly as defined in the live guarantee terms.",
  },
  {
    title: "Month-to-Month Support",
    copy: "Hosting, maintenance, and ongoing support stay simple and transparent.",
  },
  {
    title: "Free Two-Year Website Refresh",
    copy: "While subscribed, receive the existing two-year refresh benefit under the current plan terms.",
  },
];

/**
 * The campaign centerpiece (spec §7): premium bordered card, thin orange
 * border, subtle topo texture, no loud glow. Fires `well_driller_offer_view`
 * once at ~50% visibility.
 */
export function WellDrillerMarketOfferSection() {
  const sectionRef = useSectionHalfViewEvent<HTMLElement>("well_driller_offer_view");

  return (
    <section
      id="market-offer"
      ref={sectionRef}
      className="scroll-mt-24 bg-[#0f0f0f] py-20 md:py-28 px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="relative rounded-2xl border border-[#E85D26]/50 bg-[#141414] overflow-hidden">
            {/* subtle topographic contour texture — intentionally no glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "repeating-radial-gradient(circle at 85% 10%, rgba(255,255,255,0.028) 0px, rgba(255,255,255,0.028) 1px, transparent 1px, transparent 52px), repeating-radial-gradient(circle at 6% 96%, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 66px)",
              }}
            />

            <div className="relative z-10 p-7 md:p-12">
              <div className="text-center mb-10 md:mb-12">
                <p className="inline-block text-[#E85D26] border border-[#E85D26]/40 rounded-full px-4 py-1.5 font-sans text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  Market Build-Fee Waiver
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display text-white leading-tight mb-5">
                  One Qualified Well Driller. One Stronger Digital Presence.
                </h2>
                <p className="text-stone font-sans text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                  In selected markets, Graylock is waiving the one-time website build fee for one
                  well-drilling company we believe we can genuinely help. You still get the same
                  custom strategy, free homepage demo, monthly support, and lead-generation
                  focus—without the large upfront website bill most agencies require.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-9">
                <div className="md:border-r md:border-white/10 md:pr-10">
                  <h3 className="text-[#E85D26] font-sans text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    What the Market Offer Changes
                  </h3>
                  <p className="text-white/90 font-sans text-base leading-relaxed">
                    The selected well driller does not pay the one-time build fee after approving
                    the website direction. Instead, the business moves onto the published monthly
                    plan after launch, with hosting, maintenance, support, and the planned refresh
                    benefit included under the current plan terms.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#E85D26] font-sans text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    What Stays Included
                  </h3>
                  <ul className="space-y-4">
                    {INCLUDED_ITEMS.map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#E85D26]/10 border border-[#E85D26]/40 flex items-center justify-center">
                          <Check className="text-[#E85D26]" size={12} strokeWidth={3} />
                        </span>
                        <span className="font-sans text-sm leading-relaxed text-stone">
                          <span className="block text-white font-semibold mb-0.5">
                            {item.title}
                          </span>
                          {item.copy}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Availability note — factual, not urgency-styled (spec §7) */}
              <p className="text-stone/70 font-sans text-sm leading-relaxed text-center max-w-2xl mx-auto mb-8">
                Availability depends on market fit, campaign capacity, and whether a local
                selection has already been made. Checking availability does not obligate you to
                move forward.
              </p>

              <div className="text-center">
                <CTAButton
                  href={wellDrillerGetStartedHref("offer_cta")}
                  variant="funnel"
                  onClick={() =>
                    trackWellDrillerEvent("well_driller_market_availability_click", {
                      cta_placement: "offer_cta",
                    })
                  }
                >
                  Check My Market Availability
                </CTAButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
