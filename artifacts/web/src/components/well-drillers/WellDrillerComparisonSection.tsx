import { Check, X } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const comparisons = [
  {
    theirs: "Start with the same contractor theme used in dozens of other markets",
    ours: "Start with a custom homepage direction built around your company, services, and service area",
  },
  {
    theirs: "Ask for a large upfront payment before you see the actual direction",
    ours: "Show you a free custom demo before you decide to move forward",
  },
  {
    theirs: "Make you manage the copy, structure, and website decisions alone",
    ours: "Guide the strategy and build process from first call through launch",
  },
  {
    theirs: "Give visitors a generic contact page and hope they call",
    ours: "Build clear service and estimate-request paths that route leads to your inbox",
  },
  {
    theirs: "Launch once, then leave the site to age",
    ours: "Maintain the site and provide the current two-year refresh benefit while subscribed",
  },
];

export function WellDrillerComparisonSection() {
  return (
    <section className="bg-[#0f0f0f] py-24 md:py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Why Graylock
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-4">
            A Better Website Should Not Feel Like a Bigger Gamble.
          </h2>
          <p className="text-stone font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Most website options leave a well driller with a template that looks like everyone
            else, an expensive upfront commitment, or a site that goes stale the moment it
            launches. Graylock starts with a real direction and builds around the way local
            customers actually choose who to call.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {/* Stacked on mobile with the traditional column first; two columns with a
              clear separator and the Recommended badge on Graylock from md up */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 items-stretch">
            {/* VS badge */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-[#0f0f0f] border border-white/10 shadow-xl flex items-center justify-center">
                <span className="font-display text-stone text-lg italic">vs</span>
              </div>
            </div>

            {/* Generic templates and traditional agencies — muted, the old way */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8 md:pr-10 opacity-90">
              <div className="mb-7">
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone/50 font-sans font-semibold mb-1.5">
                  The Old Way
                </p>
                <h3 className="font-display text-2xl text-stone">
                  Generic Templates and Traditional Agencies
                </h3>
              </div>
              <ul className="space-y-5">
                {comparisons.map((row, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                      <X className="text-red-400/70" size={13} />
                    </span>
                    <span className="text-stone/75 font-sans text-sm leading-relaxed">
                      {row.theirs}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-white/10">
                <p className="text-stone/50 font-sans text-[11px] uppercase tracking-widest font-semibold mb-1.5">
                  Upfront Cost &amp; Risk
                </p>
                <p className="text-stone/75 font-sans text-sm leading-relaxed">
                  A large payment before you know whether the site will feel like your
                  business—or help your business.
                </p>
              </div>
            </div>

            {/* Graylock — the recommended way */}
            <div className="relative rounded-2xl border border-[#E85D26]/40 bg-gradient-to-b from-[#E85D26]/[0.10] to-transparent p-7 md:p-8 md:pl-10 md:scale-[1.04] md:shadow-2xl md:shadow-black/40">
              <div className="absolute -top-3.5 left-7 md:left-10">
                <span className="inline-block bg-[#E85D26] text-white font-sans text-[11px] font-bold uppercase tracking-widest rounded-full px-3.5 py-1.5">
                  Recommended
                </span>
              </div>
              <div className="mb-7 pt-2">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#E85D26] font-sans font-semibold mb-1.5">
                  The Graylock Way
                </p>
                <h3 className="font-display text-2xl text-white">Graylock Digital</h3>
              </div>
              <ul className="space-y-5">
                {comparisons.map((row, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#E85D26]/15 border border-[#E85D26]/40 flex items-center justify-center">
                      <Check className="text-[#E85D26]" size={12} strokeWidth={3} />
                    </span>
                    <span className="text-offwhite font-sans text-sm leading-relaxed">
                      {row.ours}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-white/10">
                <p className="text-[#E85D26] font-sans text-[11px] uppercase tracking-widest font-semibold mb-1.5">
                  Upfront Cost &amp; Risk
                </p>
                <p className="text-offwhite font-sans text-sm leading-relaxed">
                  $0 to see your custom homepage direction. If selected for the market offer, the
                  one-time build fee is waived after you approve the direction.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
