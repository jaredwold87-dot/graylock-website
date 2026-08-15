import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useBookingCtaClick } from "@/components/booking/BookCallContext";
import { trackWellDrillerEvent } from "@/lib/wellDrillerAnalytics";
import { wellDrillerGetStartedHref } from "@/lib/wellDrillerLinks";

/**
 * "Let Them Recognize the Problem" (spec §6): four selectable reflection cards
 * that reveal a short explanation below the row — no email, form, or modal
 * required to use the interaction. The selected label is passed into the form
 * as stated_goal only when the visitor clicks through.
 */
const CARDS = [
  {
    label: "I want more of the right jobs",
    explanation:
      "A clearer website can place your priority services, service areas, and ideal project types in front of people who are already looking.",
  },
  {
    label: "My site doesn't reflect our work",
    explanation:
      "Your online presence should show the scale, experience, equipment, service quality, and reputation customers are trying to evaluate before they call.",
  },
  {
    label: "We are hard to find or hard to contact",
    explanation:
      "Clear local service pages, visible phone actions, and simple request paths make it easier for the right prospect to reach the office or crew.",
  },
  {
    label: "I don't know what my site is doing",
    explanation:
      "We can show you a clearer direction with a custom homepage demo before you decide whether a rebuild is worth pursuing.",
  },
];

export function WellDrillerReflectionSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedCard = selected === null ? null : CARDS[selected];
  const demoHref = wellDrillerGetStartedHref(
    "reflection_cta",
    selectedCard ? { statedGoal: selectedCard.label } : undefined,
  );
  const openBookingModal = useBookingCtaClick(demoHref);

  const handleSelect = (index: number) => {
    if (selected === index) return;
    setSelected(index);
    trackWellDrillerEvent("well_driller_reflection_select", {
      card: CARDS[index].label,
    });
  };

  return (
    <section className="bg-[#0f0f0f] py-20 md:py-28 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            A Quick Gut Check
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
            If You Could Change One Thing About Your Website, What Would It Be?
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            Most well drillers do not need a marketing lecture. They need a website that reflects
            the business they have built and makes it easy for the right customer to reach them.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CARDS.map((card, i) => {
              const isSelected = selected === i;
              return (
                <button
                  key={card.label}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleSelect(i)}
                  className={`min-h-[92px] text-left px-5 py-5 border-2 font-sans font-semibold text-[15px] uppercase tracking-wide leading-snug transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                    isSelected
                      ? "border-[#E85D26] bg-[#E85D26]/10 text-white"
                      : "border-white/15 text-stone hover:border-white/40 hover:text-white"
                  }`}
                >
                  {card.label}
                </button>
              );
            })}
          </div>

          {/* Revealed explanation — directly below the card row (spec §6) */}
          <div aria-live="polite">
            {selectedCard && (
              <div className="mt-6 border-l-4 border-[#E85D26] bg-white/[0.03] px-6 py-6 md:px-8 md:py-7 app-fade-in">
                <p className="text-white font-sans text-base md:text-lg leading-relaxed mb-5">
                  {selectedCard.explanation}
                </p>
                <a
                  href={demoHref}
                  onClick={(e) => {
                    trackWellDrillerEvent("well_driller_demo_cta_click", {
                      cta_placement: "reflection_cta",
                      stated_goal: selectedCard.label,
                    });
                    openBookingModal?.(e);
                  }}
                  className="inline-flex items-center gap-2 text-[#E85D26] hover:text-white font-sans font-bold text-sm uppercase tracking-[0.14em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
                >
                  Show Me a Custom Demo
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
