import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

/** Exported so the page-level FAQPage JSON-LD always matches the visible FAQ. */
export const WELL_DRILLER_FAQS = [
  {
    q: "Why did Graylock reach out to my well-drilling company?",
    a: "We look for established companies with real local capability and a website we believe can be made significantly more effective. If we contacted you, we see a possible opportunity to help you look stronger online, get found locally, and turn more visitors into service or estimate requests.",
  },
  {
    q: "What does \u201cone well driller per market\u201d mean?",
    a: "In selected markets, Graylock is evaluating one qualified well-drilling company for the build-fee-waived offer. Availability depends on the market, campaign capacity, and fit. Checking availability does not create an obligation or promise permanent exclusivity.",
  },
  {
    q: "Is the website actually custom?",
    a: "Yes. We create a custom homepage direction around your company, services, service area, and ideal jobs. We do not hand you a generic contractor theme and ask you to make it fit.",
  },
  {
    q: "Will the site help customers find us on Google?",
    a: "We build the site around clear services, service areas, technical SEO fundamentals, local relevance, and content structure so search engines and customers can understand what you do and where you work. No agency can ethically guarantee a specific Google ranking.",
  },
  {
    q: "How do leads get to us?",
    a: "Service and estimate-request forms are configured to send the inquiry details to your designated email inbox. We also make call and contact actions clear throughout the site so customers can reach the right person quickly.",
  },
  {
    q: "How fast can you build a well-drilling website?",
    a: "Most core builds are ready in 7\u201310 business days after the strategy, design direction, required content, domain access, and any third-party requirements are ready.",
  },
  {
    q: "Do we have to pay a large amount upfront?",
    a: "You see a free custom homepage demo before deciding whether to move forward. If selected for the current market offer, the one-time build fee is waived; the ongoing monthly plan and all terms are shown clearly before launch.",
  },
  {
    q: "What happens after the site launches?",
    a: "Graylock continues hosting, maintenance, support, and the current two-year refresh benefit while you are subscribed, under the published plan terms.",
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
