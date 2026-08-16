import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { trackCabinetMakerEvent } from "@/lib/cabinetMakerAnalytics";

/**
 * Cabinet-Maker FAQs (spec §4.8) — nine questions, exact spec copy.
 * Exported so the page-level FAQPage JSON-LD always matches the FAQ
 * rendered visibly on this page (spec §5: visible questions only).
 */
export const CABINET_MAKER_FAQS = [
  {
    q: "What exactly is the free custom demo?",
    a: "It is a custom homepage direction built around your company, services, service area, portfolio, and the kinds of projects you want more of. It is not a generic template preview, and there is no cost or obligation to review it.",
  },
  {
    q: "What happens after I request a demo?",
    a: "We schedule a short conversation to understand your work, current website, service area, and goals. Then a Graylock founder walks you through the custom direction and answers the questions that matter to your business.",
  },
  {
    q: "Do I have to decide on the call?",
    a: "No. The demo exists so you can see something real before deciding whether Graylock is the right fit. There is no obligation to move forward after you review it.",
  },
  {
    q: "Why did you contact my cabinet-making business?",
    a: "We focus on established businesses with real craftsmanship and an online presence we believe can be made more useful. We do not send the same offer to every company.",
  },
  {
    q: "Can my new website show kitchens, built-ins, closets, and other project types?",
    a: "Yes. We structure your portfolio around the work you want prospects to explore—from custom kitchens and built-ins to closets, vanities, commercial millwork, or other specialty work—so visitors can quickly see whether you are the right fit.",
  },
  {
    q: "Will the site help us get found on Google?",
    a: "We build around clear services, service areas, project types, local-search fundamentals, and content structure so search engines and prospects can better understand what you do and where you work. No agency can ethically guarantee a specific ranking.",
  },
  {
    q: "How do consultation and quote requests reach us?",
    a: "We configure clear call actions and request forms so the details are sent directly to the email inbox or CRM your business designates.",
  },
  {
    q: "Can we update the website with new projects over time?",
    a: "Yes. Your monthly plan includes a defined update allowance, and we can help keep your project photography, services, and key information current. More extensive requests are scoped clearly before work begins.",
  },
  {
    q: "What does the local-market offer mean?",
    a: "In selected markets, Graylock may waive the one-time website build fee for one cabinet-making business it selects to work with. Availability depends on campaign capacity, local fit, and whether a selection has already been made.",
  },
];

export function CabinetMakerFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative bg-[#0f0f0f] py-28 px-6 md:px-12 overflow-hidden">
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
            Cabinet-Maker FAQs
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white">Common Questions</h2>
        </ScrollReveal>

        <div className="space-y-3">
          {CABINET_MAKER_FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={Math.min(i * 0.05, 0.3)}>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                  <h3>
                    <button
                      type="button"
                      onClick={() => {
                        if (!isOpen) {
                          trackCabinetMakerEvent("cabinet_maker_faq_expand", {
                            question: faq.q,
                          });
                        }
                        setOpenIndex(isOpen ? null : i);
                      }}
                      aria-expanded={isOpen}
                      aria-controls={`cabinet-maker-faq-panel-${i}`}
                      id={`cabinet-maker-faq-trigger-${i}`}
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
                    id={`cabinet-maker-faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`cabinet-maker-faq-trigger-${i}`}
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
