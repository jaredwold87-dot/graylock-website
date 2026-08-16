import { X, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * "Why Graylock instead of a template" — tightened to four contrasts per
 * column, rendered as flat editorial columns (no bordered cards, no VS badge).
 */
const TEMPLATE_POINTS = [
  "Starts with a shared theme and rigid page structure",
  "Makes property search an afterthought or a separate mystery",
  "Gives buyers and sellers generic paths",
  "Requires you to sort out future updates alone",
];

const GRAYLOCK_POINTS = [
  "Starts with a custom direction built around your market and brand",
  "Plans IDX/MLS readiness early when it is part of your scope",
  "Creates distinct paths for search, valuation, consultation, and contact",
  "Keeps the site maintained, supported, and refreshed while subscribed",
];

export function RealtorComparisonSection() {
  return (
    <section className="bg-[#F4F1EC] py-20 md:py-28 px-6 md:px-12 border-t border-[#0F0F0F]/10">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-[820px] mx-auto mb-12 md:mb-16">
          <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Why Graylock
          </p>
          <h2 className="font-display text-[#0F0F0F] text-4xl md:text-[52px] leading-[1.08]">
            A Real-Estate Website Should Not Look Like Everyone Else&rsquo;s.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-14 lg:gap-x-20 max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="h-[3px] w-9 bg-[#0F0F0F]/25 mb-4" aria-hidden="true" />
            <h3 className="font-display text-2xl md:text-[26px] text-[#0F0F0F]/55 leading-snug mb-6">
              The Typical Template
            </h3>
            <ul className="space-y-4">
              {TEMPLATE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <X
                    size={17}
                    strokeWidth={2.5}
                    className="text-[#0F0F0F]/40 flex-shrink-0 mt-[3px]"
                    aria-hidden="true"
                  />
                  <span className="text-[#0F0F0F]/60 font-sans text-[15px] md:text-base leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="h-[3px] w-9 bg-[#E85D26] mb-4" aria-hidden="true" />
            <h3 className="font-display text-2xl md:text-[26px] text-[#0F0F0F] leading-snug mb-6">
              The Graylock Way
            </h3>
            <ul className="space-y-4">
              {GRAYLOCK_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check
                    size={17}
                    strokeWidth={2.5}
                    className="text-white bg-[#E85D26] rounded-full p-[3px] w-[19px] h-[19px] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-[#0F0F0F]/85 font-sans text-[15px] md:text-base leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal className="text-center mt-14 md:mt-16">
          <p className="font-hand font-semibold text-[28px] md:text-[38px] leading-snug text-[#B23E16] max-w-[820px] mx-auto">
            A fully customized website meant to appeal to your local ideal customer.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
