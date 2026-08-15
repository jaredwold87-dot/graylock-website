import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

/** Exported so the page-level FAQPage JSON-LD always matches the visible FAQ (spec §12). */
export const WELL_DRILLER_FAQS = [
  {
    q: "What exactly is the free demo?",
    a: "It is a custom homepage direction built around your company, services, service area, and what you told us matters most. It is not a generic template preview, and there is no cost or obligation to review it.",
  },
  {
    q: "What happens after I request a demo?",
    a: "We set up a short conversation to learn what you want the site to accomplish. Then a Graylock founder walks you through the custom direction and answers the questions that matter to your business.",
  },
  {
    q: "Do I have to decide on the call?",
    a: "No. The demo exists so you can see something real before deciding whether Graylock is the right fit.",
  },
  {
    q: "Why did you contact my company?",
    a: "We focus on established companies with a real local reputation and a website or online presence we believe can be made more useful. We do not send the same offer to every business.",
  },
  {
    q: "Are you going to build a website for my competitor?",
    a: "We only reach out to well drillers, and we only reach out to one well driller in a given area. The build-fee waiver works the same way — it is only offered to one well-drilling company in a given area. We are not in the business of building for everyone on the same search results page.",
  },
  {
    q: "Will the site help us get found locally?",
    a: "We build around clear services, service areas, local-search fundamentals, and content structure so search engines and customers can better understand what you do and where you work. No agency can ethically guarantee a specific ranking.",
  },
  {
    q: "How do service and estimate requests get to us?",
    a: "We configure clear phone actions and request forms so the inquiry details are sent directly to the email inbox your business designates.",
  },
  {
    q: "What if I only want to answer a few questions by email?",
    a: "That is fine. You can reply with the services you want more of, the areas you serve, and what you want the website to do better. We can use those details to prepare a more relevant demo conversation.",
  },
  {
    q: "What does the local-market offer mean?",
    a: "In selected markets, Graylock may waive the one-time website build fee for one well-drilling business it selects to work with. Availability depends on campaign capacity, local fit, and whether a selection has already been made.",
  },
];

export function WellDrillerFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-[#0f0f0f] py-28 px-6 md:px-12 overflow-hidden">
      {/* faint dot overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(242,243,245,0.04) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Straight Answers
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white">Common Questions</h2>
        </ScrollReveal>

        <div className="space-y-3">
          {WELL_DRILLER_FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={Math.min(i * 0.05, 0.3)}>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`well-driller-faq-panel-${i}`}
                      id={`well-driller-faq-trigger-${i}`}
                      className="w-full min-h-[44px] flex items-center justify-between gap-4 text-left px-6 py-5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-orange"
                    >
                      <span className="text-white font-sans font-semibold text-base md:text-lg leading-snug">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={cn(
                          "flex-shrink-0 text-[#E85D26] transition-transform duration-300",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    id={`well-driller-faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`well-driller-faq-trigger-${i}`}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-stone font-sans text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="text-center mt-10">
          <Link
            href="/faq"
            className="text-stone hover:text-[#E85D26] font-sans text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          >
            See all FAQs &rarr;
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
