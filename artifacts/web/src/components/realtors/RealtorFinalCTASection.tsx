import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { realtorGetStartedHref, REALTOR_CTA_LABEL } from "@/lib/realtorLinks";
import ctaBg from "@/assets/realtor-cta-bg.webp";

/**
 * Final CTA — atmospheric interior photo with a strong dark mask, copy block
 * left-aligned on desktop, one action.
 */
export function RealtorFinalCTASection() {
  return (
    <section className="relative bg-[#0f0f0f] overflow-hidden border-t border-white/5 py-24 md:py-32 px-6 md:px-12">
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,8,8,0.92) 0%, rgba(10,10,10,0.78) 55%, rgba(10,10,10,0.55) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal className="max-w-2xl">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
            You Should Know the Direction Before You Pay for the Build.
          </p>
          <h2 className="font-display text-white text-4xl md:text-[56px] leading-[1.06] mb-6">
            Let&rsquo;s Plan the Realtor Website Your Market Deserves.
          </h2>
          <p className="text-stone font-sans text-lg leading-relaxed mb-9 max-w-[600px]">
            In 15 minutes, we will review your market, current website, brokerage or MLS
            path, buyer/seller goals, and what a stronger online experience could look like.
            Then we will prepare a free custom homepage direction for your brand.
          </p>
          <CTAButton
            href={realtorGetStartedHref("final_cta")}
            variant="funnel"
            className="px-8 py-4 text-base"
            onClick={() =>
              trackRealtorEvent("realtor_final_cta_click", { cta_placement: "final_cta" })
            }
          >
            {REALTOR_CTA_LABEL}
          </CTAButton>
          <p className="mt-6 text-stone/90 font-sans text-sm leading-relaxed max-w-[540px]">
            No generic template. No build fee before you see the direction. No obligation
            after the demo.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
