import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * "Why We Want to Work With You" — the motivation, right after the qualifying
 * criteria: help you win clients, give you the best website of any competitor
 * in your service area, make you the best from the outside looking in. Dark
 * section (page alternates dark/light). No CTA by design; the free-demo
 * section below carries the offer.
 */
const REASONS = [
  {
    title: "Help You Win Clients",
    copy: "Everything we build is aimed at one outcome: more of the right customers finding you, trusting what they see, and reaching out to your crew instead of someone else's.",
  },
  {
    title: "The Best Website in Your Service Area",
    copy: "Our goal is to give you the best website of any competitor in your service area — so when a customer compares their options, the comparison isn't close.",
  },
  {
    title: "The Best From the Outside Looking In",
    copy: "You already run a serious operation. We want the outside to finally match it — so against everyone you're compared to, you look like the obvious first call.",
  },
];

export function WellDrillerWhyWeWantYouSection() {
  return (
    <section
      id="why-we-want-to-work-with-you"
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
            Why We Want to Work With You
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white leading-tight">
            We Want to Help You Win More Clients.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-10 max-w-5xl mx-auto">
          {REASONS.map((item, i) => (
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
      </div>
    </section>
  );
}
