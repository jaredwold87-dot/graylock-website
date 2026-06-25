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
    <section className="relative bg-[#0f0f0f] py-16 md:py-24 px-6 md:px-12 border-t border-b border-white/[0.06] overflow-hidden">
      {/* ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E85D26]/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-[#E85D26]/[0.05] rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-[#E85D26] text-xs font-sans font-bold uppercase tracking-widest mb-3">
            Why Design Decides Everything
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-white leading-tight">
            Your Visitors Judge You in Milliseconds
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.figure} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-8 md:p-9 transition-all duration-500 hover:border-[#E85D26]/40 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(232,93,38,0.35)]">
                  {/* hover glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#E85D26]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* oversized watermark figure */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-8 right-1 select-none font-display font-bold text-[7.5rem] leading-none text-white/[0.03] group-hover:text-[#E85D26]/[0.07] transition-colors duration-500"
                  >
                    {stat.figure}
                  </span>

                  <div className="relative">
                    {/* icon badge */}
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E85D26]/10 ring-1 ring-inset ring-[#E85D26]/30">
                      <Icon size={22} className="text-[#E85D26]" aria-hidden="true" />
                    </div>

                    {/* giant gradient figure — primary focal point */}
                    <div
                      className="mb-3 bg-gradient-to-br from-white via-[#F4A57E] to-[#E85D26] bg-clip-text font-display text-6xl md:text-7xl font-bold leading-none text-transparent"
                      style={{
                        filter: "drop-shadow(0 0 28px rgba(232,93,38,0.30))",
                      }}
                    >
                      {stat.figure}
                    </div>

                    {/* orange headline — secondary focal point */}
                    <p className="mb-4 font-sans text-sm font-bold uppercase tracking-wider text-[#E85D26]">
                      {stat.headline}
                    </p>

                    {/* accent divider */}
                    <div className="mb-4 h-px w-12 bg-gradient-to-r from-[#E85D26] to-transparent" />

                    {/* statement */}
                    <p className="mb-6 font-sans text-[15px] leading-relaxed text-stone">
                      {stat.statement}
                    </p>

                    {/* source */}
                    <p className="font-sans text-xs leading-snug text-stone/45">
                      {stat.source}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
