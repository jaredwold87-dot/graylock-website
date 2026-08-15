import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

/** Exported so the page-level FAQPage JSON-LD always matches the visible FAQ. */
export const REALTOR_FAQS = [
  {
    q: "Do you build real estate websites with IDX property search?",
    a: "Yes. When your MLS, brokerage, and selected provider allow it, we can integrate an IDX property-search experience into your custom website. We plan the search experience around your market and your buyer journey instead of treating it like a disconnected widget.",
  },
  {
    q: "Will you help with MLS approval?",
    a: "Yes. We help organize the website-side requirements, provide the technical details your MLS or provider needs, and support the handoff process. Your MLS, brokerage, and data provider control final eligibility, agreements, and approval.",
  },
  {
    q: "Can you work with my existing IDX provider?",
    a: "In many cases, yes. We will review your existing provider, local MLS requirements, available integration options, and the user experience before confirming the build approach.",
  },
  {
    q: "What does the MLS setup process usually involve?",
    a: "It typically starts with confirming your MLS and brokerage eligibility, completing any required data-use or provider agreements, receiving approved credentials or an embed/API method, and then testing the property-search experience and required disclosures. Exact steps vary by market.",
  },
  {
    q: "How long does a real estate website take to build?",
    a: "The core Graylock website build is typically completed in 7–10 business days after the strategy, design direction, content, and required third-party approvals are ready. MLS and provider review timelines vary and are outside Graylock's control.",
  },
  {
    q: "Can the website help generate seller leads too?",
    a: "Yes. We can create dedicated seller paths such as valuation requests, listing consultations, neighborhood pages, local proof, and clear contact actions—built around the conversation you want to start.",
  },
  {
    q: "Do I own my website and domain?",
    a: "Your website launches on your own domain. Graylock provides the ongoing hosting, maintenance, and support model described in the selected plan. Use the final contract language as the controlling source for ownership and subscription terms.",
  },
];

export function RealtorFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#0f0f0f] py-28 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
            Common Questions
          </h2>
        </ScrollReveal>

        <div className="space-y-3 mb-12">
          {REALTOR_FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            const panelId = `realtor-faq-panel-${i}`;
            const buttonId = `realtor-faq-button-${i}`;
            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div
                  className={cn(
                    "relative rounded-xl overflow-hidden border bg-white/[0.03] transition-colors duration-300",
                    isOpen
                      ? "border-orange/30 bg-white/[0.05]"
                      : "border-white/10 hover:border-white/20",
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="relative z-10 w-full min-h-[44px] p-6 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-orange"
                    >
                      <span className="font-sans font-semibold text-offwhite text-lg">
                        {faq.q}
                      </span>
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "text-orange transition-transform duration-300 flex-shrink-0",
                          isOpen ? "rotate-180" : "rotate-0",
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "relative z-10 px-6 overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    <p className="text-stone font-sans leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="text-center">
          <Link
            href="/faq"
            className="text-orange font-bold font-sans hover:underline underline-offset-4 decoration-2"
          >
            See all FAQs &rarr;
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
