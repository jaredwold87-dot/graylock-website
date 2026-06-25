import { Timer, Scale, ShieldAlert } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STATS = [
  {
    icon: Timer,
    figure: "50ms",
    headline: "To form a first impression",
    statement:
      "Users form an opinion about your website's visual appeal in just 50 milliseconds — before they read a single word.",
    source:
      "Lindgaard et al. (2006), Behaviour & Information Technology, Carleton University",
  },
  {
    icon: Scale,
    figure: "75%",
    headline: "Judge credibility on design",
    statement:
      "75% of users admit to judging a company's credibility based entirely on its website design.",
    source: "Stanford Web Credibility Project, BJ Fogg (2002)",
  },
  {
    icon: ShieldAlert,
    figure: "94%",
    headline: "Of distrust is design-related",
    statement:
      "When users distrust or reject a website, 94% of the time it's due to design-related issues — not the content itself.",
    source: "Sillence et al. (2004), Interacting with Computers",
  },
];

export function TrustBar() {
  return (
    <section className="relative bg-[#0f0f0f] py-14 md:py-20 px-6 md:px-12 border-t border-b border-white/[0.06] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E85D26]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="text-[#E85D26] text-xs font-sans font-bold uppercase tracking-widest mb-3">
            Why Design Decides Everything
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-white leading-tight">
            Your Visitors Judge You in Milliseconds
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.figure} delay={i * 0.08}>
                <div className="h-full bg-white/[0.03] border border-white/10 rounded-2xl p-7 md:p-8 hover:border-[#E85D26]/30 transition-colors duration-300 flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#E85D26]/10 border border-[#E85D26]/25 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-[#E85D26]" aria-hidden="true" />
                    </div>
                    <span className="text-4xl md:text-5xl font-display font-bold text-white leading-none">
                      {stat.figure}
                    </span>
                  </div>
                  <p className="text-[#E85D26] font-sans font-semibold text-sm uppercase tracking-wide mb-3">
                    {stat.headline}
                  </p>
                  <p className="text-stone font-sans text-[15px] leading-relaxed mb-5 flex-grow">
                    {stat.statement}
                  </p>
                  <p className="text-stone/50 font-sans text-xs leading-snug border-t border-white/[0.06] pt-4">
                    {stat.source}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
