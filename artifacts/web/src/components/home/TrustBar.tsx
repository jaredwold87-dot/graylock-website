import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STATS = [
  {
    figure: "50ms",
    headline: "To form a first impression",
    source:
      "Lindgaard et al. (2006), Behaviour & Information Technology, Carleton University",
  },
  {
    figure: "75%",
    headline: "Judge credibility on design",
    source: "Stanford Web Credibility Project, BJ Fogg (2002)",
  },
  {
    figure: "94%",
    headline: "Of distrust is design-related",
    source: "Sillence et al. (2004), Interacting with Computers",
  },
];

export function TrustBar() {
  return (
    <section className="relative bg-white py-20 md:py-28 px-6 md:px-12 border-t border-b border-black/[0.06] overflow-hidden">
      {/* ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E85D26]/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-[#E85D26]/[0.06] rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-[#B23E16] text-xs font-sans font-bold uppercase tracking-widest mb-3">
            Why Design Decides Everything
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-[#1a202c] leading-tight">
            Your Visitors Judge You in Milliseconds
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {STATS.map((stat, i) => (
            <ScrollReveal
              key={stat.figure}
              delay={i * 0.1}
              className={
                i > 0 ? "md:border-l md:border-black/[0.08]" : undefined
              }
            >
              <div className="relative px-4 md:px-8 py-10 md:py-4 text-center">
                {/* oversized ghosted watermark figure */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -top-6 md:-top-10 select-none font-display font-bold text-[8rem] md:text-[10rem] leading-none text-[#1a202c]/[0.05]"
                >
                  {stat.figure}
                </span>

                <div className="relative">
                  {/* giant gradient figure — primary focal point */}
                  <div
                    className="bg-gradient-to-br from-[#F2722F] via-[#E85D26] to-[#B23E16] bg-clip-text font-display text-7xl md:text-8xl font-bold leading-none text-transparent"
                    style={{
                      filter: "drop-shadow(0 6px 18px rgba(232,93,38,0.20))",
                    }}
                  >
                    {stat.figure}
                  </div>

                  {/* orange headline — secondary focal point */}
                  <p className="mt-5 font-sans text-base md:text-lg font-bold uppercase tracking-wider text-[#B23E16]">
                    {stat.headline}
                  </p>

                  {/* accent divider */}
                  <div className="mx-auto mt-5 mb-5 h-px w-10 bg-gradient-to-r from-transparent via-[#E85D26]/70 to-transparent" />

                  {/* source */}
                  <p className="font-sans text-xs leading-snug text-[#1a202c]/70 max-w-[15rem] mx-auto">
                    {stat.source}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
