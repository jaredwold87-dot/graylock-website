import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const FAQS = [
  {
    question: "What happens after I request a discovery call?",
    answer:
      "We start with a short conversation about your business, your current website, and what you want to improve. If Graylock is the right fit, we create a custom homepage direction for you to review before any build fee is due.",
  },
  {
    question: "Is the homepage demo actually custom to my business?",
    answer:
      "Yes. Graylock researches your business, audience, services, and market before creating a homepage direction. The goal is to show you a real strategic direction for your business—not a recycled template.",
  },
  {
    question: "What does a new website cost?",
    answer:
      "Plans start at $199 per month. Build fees begin at $799 and are paid only after you approve your custom homepage direction. Hosting, maintenance, and ongoing support are included in the monthly plan.",
    link: { label: "See full pricing →", href: "/pricing" },
  },
  {
    question: "How long does a website build take?",
    answer:
      "Most standard websites are built and launched in 7–10 business days after the direction and required content are approved. Larger or more complex websites may take longer.",
  },
  {
    question: "What do I own if I cancel?",
    answer:
      "You keep your domain, written content, images, and brand assets. The underlying website code and hosting infrastructure remain with Graylock. Month-to-month plans can be cancelled with 30 days’ notice.",
    link: { label: "Read the full FAQ →", href: "/faq" },
  },
  {
    question: "What happens after my website launches?",
    answer:
      "Graylock continues to host, maintain, support, and update your website so it stays current, secure, and useful to your business after launch.",
  },
] as const;

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal className="text-center">
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#B23E16] md:text-sm">
            Common Questions
          </p>
          <h2 className="font-display text-4xl leading-tight text-[#1a202c] md:text-5xl">
            Clear Answers Before You Reach Out.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#1a202c]/70 md:text-lg">
            Everything you need to know about the free homepage demo, pricing, ownership,
            and the path to launch.
          </p>
        </ScrollReveal>

        <div className="mt-12 border-t border-[#1a202c]/10">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `home-faq-answer-${index}`;
            const buttonId = `home-faq-button-${index}`;

            return (
              <div key={faq.question} className="border-b border-[#1a202c]/10">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex min-h-20 w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E85D26]"
                >
                  <span className="font-display text-xl leading-snug text-[#1a202c] md:text-2xl">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={22}
                    aria-hidden="true"
                    className={`shrink-0 text-[#B23E16] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-6 pr-10"
                >
                  <p className="font-sans text-base leading-relaxed text-[#1a202c]/75">
                    {faq.answer}{" "}
                    {"link" in faq ? (
                      <Link
                        href={faq.link.href}
                        className="font-semibold text-[#B23E16] underline decoration-[#B23E16]/40 underline-offset-4 transition-colors hover:text-[#E85D26] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26]"
                      >
                        {faq.link.label}
                      </Link>
                    ) : null}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}