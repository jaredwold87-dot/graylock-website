import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";

/**
 * Exported so the page-level FAQPage JSON-LD always matches the visible FAQ.
 * Order per the conversion scope: IDX search, MLS approval, existing provider,
 * seller leads, timing, MLS setup detail, ownership.
 */
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
    q: "Can the website help generate seller leads too?",
    a: "Yes. We can create dedicated seller paths such as valuation requests, listing consultations, neighborhood pages, local proof, and clear contact actions—built around the conversation you want to start.",
  },
  {
    q: "How long does a real estate website take to build?",
    a: "The core Graylock website build is typically completed in 7–10 business days after the strategy, design direction, content, and required third-party approvals are ready. MLS and provider review timelines vary and are outside Graylock's control.",
  },
  {
    q: "What does the MLS setup process usually involve?",
    a: "It typically starts with confirming your MLS and brokerage eligibility, completing any required data-use or provider agreements, receiving approved credentials or an embed/API method, and then testing the property-search experience and required disclosures. Exact steps vary by market.",
  },
  {
    q: "Do I own my website and domain?",
    a: "Your website launches on your own domain. Graylock provides the ongoing hosting, maintenance, and support model described in the selected plan. Use the final contract language as the controlling source for ownership and subscription terms.",
  },
];

export function RealtorFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F4F1EC] py-20 md:py-28 px-6 md:px-12 relative overflow-hidden border-t border-[#0F0F0F]/10">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#0F0F0F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display text-[#0F0F0F] mb-4">
            Common Questions
          </h2>
        </ScrollReveal>

        {/* Flat accordion — divider rules only, no boxed cards */}
        <div className="border-y border-[#0F0F0F]/15 divide-y divide-[#0F0F0F]/15 mb-12">
          {REALTOR_FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            const panelId = `realtor-faq-panel-${i}`;
            const buttonId = `realtor-faq-button-${i}`;
            return (
              <div key={i}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => {
                      if (!isOpen) {
                        trackRealtorEvent("realtor_faq_expand", { question: faq.q });
                      }
                      setOpenIndex(isOpen ? null : i);
                    }}
                    className="w-full min-h-[44px] py-5 md:py-6 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#B23E16]"
                  >
                    <span className="font-sans font-semibold text-[#0F0F0F] text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "text-[#B23E16] transition-transform duration-300 flex-shrink-0",
                        isOpen ? "rotate-180" : "rotate-0",
                      )}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  // Collapse is CSS-animated; aria-hidden keeps the collapsed
                  // state accurate for screen readers (no focusables inside).
                  aria-hidden={!isOpen}
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <p className="text-[#0F0F0F]/70 font-sans leading-relaxed pr-8">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <ScrollReveal className="text-center">
          <Link
            href="/faq"
            className="text-[#B23E16] font-bold font-sans hover:underline underline-offset-4 decoration-2"
          >
            See all FAQs &rarr;
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
