import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useCabinetMakerSectionView } from "@/lib/cabinetMakerAnalytics";
import whoKitchen from "@/assets/cabinet-who-kitchen.webp";
import whoReview from "@/assets/cabinet-who-review.webp";
import whoPlans from "@/assets/cabinet-who-plans.webp";

/**
 * "Who We Work With" (spec §4.2) — three dark cards with premium
 * cabinet-maker imagery and orange line accents on the light band, so the
 * page keeps the framework's dark/light rhythm after the dark hero.
 */
const CARDS = [
  {
    image: whoKitchen,
    alt: "Finished custom kitchen with floor-to-ceiling built-in cabinetry and precise joinery — the level of craftsmanship a cabinet-maker website should make obvious",
    title: "Have Work That Deserves a Better Online Showroom.",
    copy: "You build custom kitchens, built-ins, and spaces homeowners remember. But your current website does not make that level of craftsmanship obvious before a prospect ever calls.",
  },
  {
    image: whoReview,
    alt: "Cabinet maker reviewing design drawings and wood material samples in a clean shop — finished work that never made it into an online portfolio",
    title: "Have No Portfolio\u2014or Only a Few Photos.",
    copy: "Years of finished kitchens and built-ins, and almost none of it online. Whether the photos sit in a camera roll or on a single gallery page, homeowners, builders, and designers cannot see the range of your work\u2014or picture what you could create for them.",
  },
  {
    image: whoPlans,
    alt: "Homeowner reviewing custom cabinetry photos on a tablet in a bright kitchen — the moment the right project inquiry starts",
    title: "Need More of the Right Project Inquiries.",
    copy: "The website should help the right homeowner or trade partner understand your services, service area, project fit, and next step—before they submit a request.",
  },
];

export function CabinetMakerWhoSection() {
  const sectionRef = useCabinetMakerSectionView<HTMLElement>(
    "cabinet_maker_who_we_work_with_view",
  );

  return (
    <section
      ref={sectionRef}
      id="who-we-work-with"
      className="scroll-mt-[118px] relative bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* faint topo backdrop: light contour rings */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 110% -10%, rgba(15,15,15,0.03) 0px, rgba(15,15,15,0.03) 1px, transparent 1px, transparent 64px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#B23E16] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Who We Work With
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-[#1A1A1A] leading-tight">
            We Work With Cabinet Makers Who&hellip;
          </h2>
        </ScrollReveal>

        {/* Three dark image cards; 24–28px vertical spacing when stacked (spec) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-10 gap-x-8">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-xl overflow-hidden bg-[#141414] border border-black/10 shadow-[0_18px_40px_rgba(15,15,15,0.18)] flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-7 flex-1">
                  <div className="h-[3px] w-9 bg-[#E85D26] mb-4" aria-hidden="true" />
                  <h3 className="font-display text-2xl md:text-[26px] text-white leading-snug mb-3">
                    {card.title}
                  </h3>
                  <p className="text-stone font-sans text-base leading-relaxed">{card.copy}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center max-w-2xl mx-auto mt-12 md:mt-14">
          <p className="font-hand font-semibold text-[28px] md:text-[38px] text-[#B23E16] leading-snug">
            If your work is exceptional but your website is not, you are
            exactly who we can help.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
