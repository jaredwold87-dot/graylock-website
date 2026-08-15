import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * "Why Graylock Contacted This Business" — the key sales-enablement block that
 * sits directly after the hero. Validation and context only; no CTA (spec §3).
 */
export function WellDrillerWhySection() {
  return (
    <section className="relative bg-[#0f0f0f] py-16 md:py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* near-black topo backdrop: faint contour rings, no glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 110% -10%, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 64px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="md:flex md:items-stretch md:gap-10">
            {/* Orange accent: horizontal above the copy on mobile, vertical beside it on desktop */}
            <div
              className="w-14 h-1 bg-[#E85D26] mx-auto mb-8 rounded-full md:w-1 md:h-auto md:self-stretch md:mx-0 md:mb-0 md:flex-shrink-0"
              aria-hidden="true"
            />
            <div className="text-center md:text-left">
              <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Why We Reached Out
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display text-white mb-6 leading-tight">
                We Do Not Offer This to Every Well Driller.
              </h2>
              <p className="text-stone text-lg font-sans leading-relaxed mb-6">
                We look for established drilling companies with a real local reputation—and a
                website that is not yet doing the business justice. If we reached out, we see a
                clear opportunity to help you look stronger online, show up for more of the
                searches that matter, and make it easier for customers to request service.
              </p>
              <p className="text-white font-sans text-lg leading-relaxed">
                This is not a recycled template offer. It is a chance to build{" "}
                <span className="text-[#E85D26] font-semibold">
                  the strongest well-drilling website in your local market.
                </span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
