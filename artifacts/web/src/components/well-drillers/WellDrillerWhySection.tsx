import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * "Who We Work With" — the qualifying criteria, stated plainly: the three
 * website situations we look for before reaching out. Light section (page
 * alternates dark/light starting from the dark hero). No CTA by design; it
 * bridges into "Why We Want to Work With You" below.
 */
const CRITERIA = [
  {
    title: "Aren't Getting Customers From Their Website",
    copy: "The site exists, but the phone isn't ringing because of it. The work comes from word of mouth while the website sits there doing nothing.",
  },
  {
    title: "Have an Outdated and Generic Website",
    copy: "It was built years ago, could belong to any contractor in any trade, and doesn't reflect the quality of the work your crew actually does.",
  },
  {
    title: "Whose Website Isn't Being Found on Google",
    copy: "A basic template rarely shows up in local search — so the companies that do rank are winning jobs that should be yours.",
  },
];

export function WellDrillerWhySection() {
  return (
    <section
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
            We Work With Well Drillers Who&hellip;
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-10 max-w-5xl mx-auto">
          {CRITERIA.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div>
                <div className="h-[3px] w-9 bg-[#E85D26] mb-4" aria-hidden="true" />
                <h3 className="font-display text-2xl md:text-[26px] text-[#1A1A1A] leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-[#1A1A1A]/75 font-sans text-base md:text-lg leading-relaxed">
                  {item.copy}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center max-w-2xl mx-auto mt-12 md:mt-14">
          <p className="font-hand font-semibold text-[28px] md:text-[38px] text-[#B23E16] leading-snug">
            If that sounds like your website, you're exactly who we can help win.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
