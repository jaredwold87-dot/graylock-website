import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * "Why Graylock Called" (spec §5) — a respectful answer to "why did you call
 * me?" that bridges into the self-assessment section. No CTA by design.
 */
export function WellDrillerWhySection() {
  return (
    <section
      id="why-graylock-called"
      className="scroll-mt-[118px] relative bg-[#0f0f0f] py-16 md:py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
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
            {/* Orange accent: horizontal above the copy on mobile, vertical beside it on desktop (spec §5) */}
            <div
              className="w-14 h-1 bg-[#E85D26] mx-auto mb-8 rounded-full md:w-1 md:h-auto md:self-stretch md:mx-0 md:mb-0 md:flex-shrink-0"
              aria-hidden="true"
            />
            <div className="text-center md:text-left">
              <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Why We Called
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display text-white mb-6 leading-tight">
                We Look for a Real Business and a Real Digital Gap.
              </h2>
              <p className="text-stone text-lg font-sans leading-relaxed mb-8">
                We do not call every well driller we can find. We look for companies with a real
                local reputation, meaningful work, and a website that is not yet helping the
                business the way it should. If we reached out, we saw a reason to believe a
                better website could make a difference.
              </p>
              <p className="text-white font-display text-2xl md:text-[1.75rem] leading-snug">
                Is your website doing everything you want it to do for the business?
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
