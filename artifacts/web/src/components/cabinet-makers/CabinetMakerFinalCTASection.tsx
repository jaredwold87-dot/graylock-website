import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { trackCabinetMakerEvent } from "@/lib/cabinetMakerAnalytics";
import { cabinetMakerGetStartedHref, CABINET_MAKER_CTA_LABEL } from "@/lib/cabinetMakerLinks";
import ctaBg from "@/assets/cabinet-cta-bg.webp";

/**
 * Final CTA (spec §4.9) — full-width premium finished-kitchen photo with a
 * CSS black mask (76%, top of the spec's 62–76% range for the dusk image).
 * Copy holds the left half on desktop and stacks above the image's visual
 * focus (kept right via object-position) on mobile. Does not reuse the hero
 * device mockup.
 */
export function CabinetMakerFinalCTASection() {
  return (
    <section className="relative bg-[#1a1a1a] py-20 md:py-28 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Premium finished-kitchen background, visual focus kept right */}
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ objectPosition: "70% center" }}
      />
      {/* CSS black mask — 76% (spec range 62–76%) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ backgroundColor: "rgba(10,10,10,0.76)" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Copy reserved to the left half on desktop (spec §4.9) */}
        <div className="max-w-2xl lg:max-w-[50%] text-left">
          <ScrollReveal>
            <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
              Ready to See a Better Direction?
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-white mb-6 leading-tight">
              Let&rsquo;s Build the Website Your Work Deserves.
            </h2>
            <p className="text-stone font-sans text-lg leading-relaxed mb-9">
              Tell us where you work, the kind of projects you want more of, and what your
              current website is not doing. We will use that conversation to prepare a free,
              custom homepage direction for your cabinet-making business.
            </p>
            <CTAButton
              href={cabinetMakerGetStartedHref("final_cta")}
              variant="funnel"
              className="w-full sm:w-auto"
            >
              {CABINET_MAKER_CTA_LABEL}
            </CTAButton>
            <p className="text-stone/70 font-sans text-sm leading-relaxed mt-6">
              No pressure. No generic template. No obligation after your demo.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
