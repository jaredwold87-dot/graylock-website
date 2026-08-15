import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * "Three Goals. One Better Website." — what we want the visitor's website to
 * do: best well-driller site in the service area, elevate the reputation,
 * easier to find locally. Dark section (page alternates dark/light). Same
 * flat format as "Who We Work With" above — orange dash + prominent title +
 * body, no cards, no numbers. No CTA by design; later sections carry the
 * offer.
 */
const GOALS = [
  {
    title: "Build the Best Well-Driller Website in Your Service Area.",
    copy: "Not just a newer website — we want you to have the strongest online presence of any well driller a customer can compare in your service area.",
  },
  {
    title: "Elevate Your Website. Elevate Your Reputation.",
    copy: "A website that matches the dependable work your crew does, with the services, experience, and proof that make you the obvious call.",
  },
  {
    title: "Make It Easier for Local Customers to Find You.",
    copy: "We build around the well, pump, and water-system searches that matter locally, so Google understands what you do and customers can contact you fast.",
  },
];

export function WellDrillerWebsiteGoalsSection() {
  return (
    <section
      id="website-goals"
      className="scroll-mt-[118px] relative bg-[#0f0f0f] py-20 md:py-28 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* faint topo backdrop: dark contour rings (mirrors the light section above) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at -10% 110%, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 64px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Three Goals. One Better Website.
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white leading-tight mb-5">
            What We Will Do for You.
          </h2>
          <p className="text-stone font-sans text-lg leading-relaxed max-w-[680px] mx-auto">
            We are not building you another generic contractor website. We are building a
            well-driller website designed to help you stand out, earn trust, and get found
            locally.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-10 max-w-5xl mx-auto">
          {GOALS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div>
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
            More leads. More customers. That's the job.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
