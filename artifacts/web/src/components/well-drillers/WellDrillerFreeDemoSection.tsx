import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { trackWellDrillerEvent, useSectionHalfViewEvent } from "@/lib/wellDrillerAnalytics";
import { getWellDrillerMarket, wellDrillerGetStartedHref } from "@/lib/wellDrillerLinks";

/** Three-column demo value block (spec §8). */
const DEMO_PILLARS = [
  {
    title: "Built Around Your Company",
    copy: "The direction is shaped by your services, service area, ideal jobs, and the way you want the business to be perceived.",
  },
  {
    title: "Free to Review",
    copy: "You do not pay to see the demo, and reviewing it does not create a commitment to a monthly plan or build agreement.",
  },
  {
    title: "Walked Through With a Founder",
    copy: "A Graylock founder reviews the direction with you, answers the deeper questions, and helps you decide whether it is a fit.",
  },
];

/**
 * The key offer section (spec §8): the free custom demo carries the message;
 * the truthful local-market offer follows as a quieter sub-block — visually
 * separated by a thin orange rule and never louder than the demo itself.
 * Fires `well_driller_offer_view` once at ~50% visibility.
 */
export function WellDrillerFreeDemoSection() {
  const sectionRef = useSectionHalfViewEvent<HTMLElement>("well_driller_offer_view");
  const market = getWellDrillerMarket();

  return (
    <section
      id="free-custom-demo"
      ref={sectionRef}
      className="scroll-mt-[118px] bg-[#0f0f0f] py-20 md:py-28 px-6 md:px-12 border-t border-white/5 relative overflow-hidden"
    >
      {/* subtle topographic contour texture — intentionally no glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 85% 10%, rgba(255,255,255,0.028) 0px, rgba(255,255,255,0.028) 1px, transparent 1px, transparent 52px), repeating-radial-gradient(circle at 6% 96%, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 66px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Your Free Custom Demo
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
            See Something Built Around Your Business Before You Decide Anything.
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            Tell us what work you want more of, where you serve, and what your current website is
            not doing. We use that information to create a custom homepage direction for your
            company—not a generic contractor template. The demo is completely free, and there is
            no obligation to move forward after you see it.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16 md:mb-20">
          {DEMO_PILLARS.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <div className="w-10 h-1 bg-[#E85D26] rounded-full mx-auto md:mx-0 mb-5" aria-hidden="true" />
                <h3 className="text-white font-sans font-semibold text-lg uppercase tracking-wide mb-3">
                  {pillar.title}
                </h3>
                <p className="text-stone font-sans text-base leading-relaxed">{pillar.copy}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Market-offer sub-block — quieter than the demo message (spec §8) */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-px w-24 bg-[#E85D26] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone font-sans text-[11px] font-bold uppercase tracking-[0.24em] mb-5">
              Market Offer
            </p>
            <h3 className="text-white font-display text-2xl md:text-3xl mb-5">
              Selected Local-Market Offer
            </h3>
            <p className="text-stone font-sans text-base md:text-lg leading-relaxed mb-5">
              In selected markets, Graylock is choosing one well-drilling company we believe we
              can genuinely help and waiving the one-time website build fee for that selected
              business. The demo comes first for everyone; market availability is explained
              clearly before anyone is asked to move forward.
            </p>
            <p className="text-stone/70 font-sans text-sm leading-relaxed mb-3">
              Availability depends on campaign capacity, local fit, and whether a selection has
              already been made. It does not guarantee permanent exclusivity.
            </p>
            {market && (
              <p className="text-stone/70 font-sans text-sm leading-relaxed mb-3">
                Currently evaluating one qualified well driller in{" "}
                <span className="text-white font-semibold">{market}</span>.
              </p>
            )}

            <div className="mt-9">
              <CTAButton
                href={wellDrillerGetStartedHref("offer_cta")}
                variant="funnel"
                onClick={() =>
                  trackWellDrillerEvent("well_driller_demo_cta_click", {
                    cta_placement: "offer_cta",
                  })
                }
              >
                Request My Free Custom Demo
              </CTAButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
