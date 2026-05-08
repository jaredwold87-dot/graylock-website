import { ScrollReveal } from "@/components/ui/ScrollReveal";
import laPerksBeforeAfter from "@assets/Untitled_design_(11)_1778206423024.png";

export default function LAPerksBeforeAfterSection() {
  return (
    <section className="bg-charcoal py-20 md:py-28 px-6 md:px-12 border-t border-gunmetal">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-12 md:mb-14">
          <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
            REAL CLIENT · BEFORE & AFTER
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4 leading-tight">
            From a Site That Hid Their Capabilities to One That Sells Them
          </h2>
          <p className="text-stone font-sans text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            <span className="text-offwhite font-semibold">L.A. Perks Petroleum Specialists</span> — a third-generation petroleum infrastructure and fueling systems contractor serving the Western U.S. — came to Graylock with a dated site that didn't reflect the scale of work they actually deliver. We rebuilt it around their commercial, industrial, and government capabilities with clear service paths, a 24/7 emergency line, and lead-capturing CTAs.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="rounded-2xl overflow-hidden border border-gunmetal bg-navy/40 p-4 md:p-8">
            <img
              src={laPerksBeforeAfter}
              alt="Before and after redesign of L.A. Perks Petroleum Specialists website by Graylock Digital"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6 md:mt-8 px-2 md:px-4">
              <div>
                <p className="text-stone text-xs font-sans font-bold uppercase tracking-widest mb-2">Before</p>
                <p className="text-offwhite font-sans text-sm md:text-base leading-relaxed">
                  Cluttered layout, illegible service lists, and no clear path for a project manager to request a quote or reach the 24/7 emergency line.
                </p>
              </div>
              <div>
                <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-2">After (Built by Graylock)</p>
                <p className="text-offwhite font-sans text-sm md:text-base leading-relaxed">
                  Bold capability headline, dedicated commercial / industrial / government positioning, prominent <span className="text-orange font-semibold">Request a Quote</span> and <span className="text-orange font-semibold">Emergency Service</span> CTAs, and mobile-first design for crews in the field.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
