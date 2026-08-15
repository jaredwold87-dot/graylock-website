import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { trackWellDrillerEvent } from "@/lib/wellDrillerAnalytics";
import { wellDrillerGetStartedHref } from "@/lib/wellDrillerLinks";

/** Final CTA (spec §13) — closes on the exact next step: the free custom demo. */
export function WellDrillerFinalCTASection() {
  return (
    <section className="bg-[#1a1a1a] py-20 md:py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Ready to See a Better Direction?
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6 leading-tight">
            Let's Build the Website Your Next Customer Feels Good About Calling.
          </h2>
          <p className="text-stone font-sans text-lg leading-relaxed mb-9 max-w-2xl mx-auto">
            Tell us where you work, what jobs you want more of, and what your current website is
            not doing. We will use that conversation to prepare a free, custom homepage direction
            for your business.
          </p>
          <CTAButton
            href={wellDrillerGetStartedHref("final_cta")}
            variant="funnel"
            onClick={() =>
              trackWellDrillerEvent("well_driller_demo_cta_click", {
                cta_placement: "final_cta",
              })
            }
          >
            Request My Free Custom Demo
          </CTAButton>
          <p className="text-stone/70 font-sans text-sm leading-relaxed mt-6">
            No pressure. No generic template. No obligation after your demo.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
