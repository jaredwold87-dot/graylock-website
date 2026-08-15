import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { X, Check } from "lucide-react";

export function RealtorComparisonSection() {
  const comparisons = [
    {
      theirs: "Start with a prebuilt real estate theme shared by countless agents",
      ours: "Start with a custom homepage direction shaped around your brand, market, and lead goals",
    },
    {
      theirs: "Make you commit before you have seen the actual direction",
      ours: "Show you a real custom homepage demo before you pay",
    },
    {
      theirs: "Treat property search as an afterthought or an opaque add-on",
      ours: "Plan IDX/MLS readiness early and guide the website-side setup when eligible",
    },
    {
      theirs: "Make buyers and sellers dig for a useful next step",
      ours: "Build clear paths for search, valuation, consultation, and contact",
    },
    {
      theirs: "Launch a site and leave you to maintain it",
      ours: "Keep the site supported, maintained, and refreshed while subscribed",
    },
  ];

  return (
    <section className="bg-[#0f0f0f] py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Why Graylock
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-4">
            A Lower-Risk Way to Build a Website That Earns Its Keep.
          </h2>
          <p className="text-stone font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Most real estate website options give you a rigid template, a long contract, or a
            site that looks like every other agent in town. Graylock starts with a custom
            direction and builds around how your market actually chooses an agent.
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

            {/* Traditional templates and agencies — muted, the old way */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8 md:pr-10 opacity-90">
              <div className="mb-7">
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone/50 font-sans font-semibold mb-1.5">
                  The Old Way
                </p>
                <h3 className="font-display text-2xl text-stone">
                  Traditional Templates and Agencies
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
                <p className="text-stone/80 font-sans text-sm leading-relaxed">
                  Pay upfront for a template or agency process before you know whether the
                  website will feel like your brand.
                </p>
              </div>
            </div>

            {/* Graylock Digital — elevated, the better way */}
            <div className="relative rounded-2xl border border-[#E85D26]/40 bg-gradient-to-b from-[#E85D26]/[0.10] to-[#E85D26]/[0.02] p-7 md:p-8 md:pl-10 shadow-[0_0_50px_-12px_rgba(232,93,38,0.45)] md:scale-[1.04] z-10">
              <div className="absolute -top-3 right-6 md:right-8 px-3 py-1 rounded-full bg-[#E85D26] shadow-lg">
                <span className="text-white font-sans text-[11px] font-bold uppercase tracking-wider">
                  Recommended
                </span>
              </div>
              <div className="mb-7">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#E85D26] font-sans font-semibold mb-1.5">
                  The Graylock Way
                </p>
                <h3 className="font-display text-2xl text-white">Graylock Digital</h3>
              </div>
              <ul className="space-y-5">
                {comparisons.map((row, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#E85D26] flex items-center justify-center">
                      <Check className="text-white" size={13} strokeWidth={3} />
                    </span>
                    <span className="text-white font-sans text-sm leading-relaxed">
                      {row.ours}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#E85D26]/20">
                <p className="text-[#E85D26] font-sans text-[11px] uppercase tracking-widest font-semibold mb-1.5">
                  Upfront Cost &amp; Risk
                </p>
                <p className="text-white font-sans text-sm leading-relaxed font-semibold">
                  $0 to see your custom demo. You approve the direction before the build fee
                  is due.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
