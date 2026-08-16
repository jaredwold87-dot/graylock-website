import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useCabinetMakerSectionView } from "@/lib/cabinetMakerAnalytics";
import goalsBg from "@/assets/cabinet-goals-bg.webp";

/**
 * "Three Goals. One Better Website." (spec §4.3) — full-width photo of a
 * cabinet maker adjusting fine cabinetry, black mask applied in CSS
 * (74% — inside the spec's 62–76% range), heading + three equal cards on
 * top, orange handwritten line at the bottom.
 */
const GOALS = [
  {
    title: "Make Your Craftsmanship Impossible to Ignore.",
    copy: "We turn your best kitchens, built-ins, and finished spaces into a portfolio that feels as custom as the work itself—so the quality of your business is obvious before the first consultation.",
  },
  {
    title: "Elevate Your Website. Elevate Your Reputation.",
    copy: "Your website should reflect the precision, professionalism, and care behind every project. We make it easier for homeowners, builders, and designers to see why your shop is worth contacting.",
  },
  {
    title: "Help the Right Local Projects Find You.",
    copy: "We structure the site around the cabinetry, kitchen, built-in, service-area, and project searches that matter locally—then give qualified visitors a clear path to ask about their project.",
  },
];

export function CabinetMakerGoalsSection() {
  const sectionRef = useCabinetMakerSectionView<HTMLElement>("cabinet_maker_goals_section_view");

  return (
    <section
      ref={sectionRef}
      id="three-goals"
      className="scroll-mt-[118px] relative bg-[#0f0f0f] py-20 md:py-28 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Cabinet-installation photo background */}
      <img
        src={goalsBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      {/* CSS black mask — 74%, inside the spec's 62–76% range; not baked in */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ backgroundColor: "rgba(10,10,10,0.74)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Three Goals. One Better Website.
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white leading-tight mb-5">
            What We Will Do for You.
          </h2>
          <p className="text-stone font-sans text-lg leading-relaxed max-w-[700px] mx-auto">
            We are not building another generic contractor website. We are building a
            cabinet-maker website designed to make your craftsmanship clear, elevate your
            reputation, and help the right projects find you.
          </p>
        </ScrollReveal>

        {/* Three equal cards over the image band; stack 1 → 2 → 3 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {GOALS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.05] p-6 md:p-7">
                <div className="h-[3px] w-9 bg-[#E85D26] mb-4" aria-hidden="true" />
                <h3 className="font-display text-2xl md:text-[26px] text-white leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-stone font-sans text-base md:text-lg leading-relaxed">
                  {item.copy}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center max-w-2xl mx-auto mt-12 md:mt-14">
          <p className="font-hand font-semibold text-[28px] md:text-[38px] text-[#E85D26] leading-snug">
            More consultations. Better projects. That&rsquo;s the job.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
