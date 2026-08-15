import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * "Why We Called" — the written version of the actual outreach call. Four
 * labeled answers, in order: what we do, why we reached out, why we want to
 * work with this business, and how we'll help. No CTA by design; it bridges
 * into the gut-check section below.
 */
const POINTS = [
  {
    label: "What We Do",
    copy: "We build custom websites for well-drilling companies. That is the whole business — sites built to get found locally, look credible, and turn visitors into service and estimate calls.",
  },
  {
    label: "Why We Reached Out",
    copy: "We only call well drillers we know we can help. Before we called, we looked at your current website and saw a real gap between the quality of your work and the site that represents it.",
  },
  {
    label: "Why We Want to Work With You",
    copy: "You have already built the reputation and the track record. Our job is to make your website finally match it — businesses like yours are the ones we do our best work for.",
  },
  {
    label: "How We'll Help",
    copy: "We build you the best website of any competitor in your service area — and we prove the direction first with a free custom homepage demo, before you commit to anything.",
  },
];

export function WellDrillerWhySection() {
  return (
    <section
      id="why-graylock-called"
      className="scroll-mt-[118px] relative bg-[#0f0f0f] py-20 md:py-28 px-6 md:px-12 border-t border-white/5 overflow-hidden"
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

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Why We Called
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-5 leading-tight">
            What We Do — and Why We Called You.
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            The short version of the phone call, in writing.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-10 md:gap-y-12 max-w-5xl mx-auto">
          {POINTS.map((point, i) => (
            <ScrollReveal key={point.label} delay={i * 0.08}>
              <div className="border-l-2 border-[#E85D26] pl-5 md:pl-6 h-full">
                <h3 className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.18em] mb-3">
                  {String(i + 1).padStart(2, "0")} · {point.label}
                </h3>
                <p className="text-offwhite font-sans text-base md:text-lg leading-relaxed">
                  {point.copy}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
