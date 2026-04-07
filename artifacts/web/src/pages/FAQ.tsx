import { useState, useEffect, useRef, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { FAQS } from "@/lib/constants";
import { ChevronDown, Shield, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

function generateSchemaMarkup() {
  const schemaQuestions = FAQS.slice(0, 2).flatMap(cat =>
    cat.questions.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a.replace(/\n/g, " ")
      }
    }))
  );

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": schemaQuestions
  };
}

function AccordionItem({ question, answer, isOpen, onToggle, id }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, answer]);

  const paragraphs = answer.split("\n\n");

  return (
    <div className="border-b border-[#2A2A2A] last:border-b-0">
      <button
        className="w-full p-5 md:p-6 flex items-start justify-between gap-4 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] rounded"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
      >
        <span className="font-sans font-semibold text-white text-base md:text-lg leading-snug group-hover:text-orange transition-colors">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            "text-orange transition-transform duration-300 flex-shrink-0 mt-1",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-hidden={!isOpen}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? height + 32 : 0, opacity: isOpen ? 1 : 0 }}
      >
        <div ref={contentRef} className="px-5 md:px-6 pb-5 md:pb-6">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-[#BBBBBB] font-sans text-[15px] md:text-base leading-relaxed mb-3 last:mb-0 whitespace-pre-line">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(FAQS[0].id);
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});

  const toggleQuestion = (q: string) => {
    setOpenQuestion(openQuestion === q ? null : q);
  };

  const scrollToCategory = (id: string) => {
    const el = categoryRefs.current[id];
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleCategoryRef = useCallback((id: string) => (el: HTMLElement | null) => {
    categoryRefs.current[id] = el;
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    FAQS.forEach(cat => {
      const el = categoryRefs.current[cat.id];
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveCategory(cat.id);
          }
        },
        { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Graylock Digital</title>
        <meta name="description" content="Answers to the questions professional practice owners ask most about Graylock Digital's web design service, pricing, contracts, and process." />
        <script type="application/ld+json">
          {JSON.stringify(generateSchemaMarkup())}
        </script>
      </Helmet>

      <section className="bg-charcoal pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-offwhite leading-tight mb-6">
              Everything You Need to Know —{" "}
              <span className="text-orange">Before You Sign Anything</span>
            </h1>
            <p className="text-stone text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
              We answer the questions practice owners ask most. No jargon, no pressure — just straight answers.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          <div className="md:hidden mb-8">
            <div className="bg-navy border border-gunmetal rounded-xl p-6 text-center">
              <p className="text-stone font-sans text-sm mb-4">Still have questions?</p>
              <CTAButton href="/get-started" className="w-full justify-center">
                Book Your Free Website Review
              </CTAButton>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">

            <aside className="hidden md:block">
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-orange/15 border border-orange/30 flex items-center justify-center">
                    <Shield size={18} className="text-orange" />
                  </div>
                  <span className="text-offwhite font-sans font-semibold text-sm uppercase tracking-wider">Common Questions</span>
                </div>

                <div className="w-12 h-0.5 bg-orange rounded-full" />

                <nav className="space-y-1">
                  {FAQS.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => scrollToCategory(cat.id)}
                      className={cn(
                        "block w-full text-left px-3 py-2 rounded-lg text-sm font-sans transition-colors",
                        activeCategory === cat.id
                          ? "text-orange bg-orange/10"
                          : "text-stone hover:text-offwhite hover:bg-white/5"
                      )}
                    >
                      {cat.category}
                    </button>
                  ))}
                </nav>

                <div className="border-t border-gunmetal pt-6">
                  <p className="text-stone font-sans text-sm mb-4">Still have questions?</p>
                  <CTAButton href="/get-started" className="w-full justify-center text-sm px-4 py-3">
                    Book Your Free Website Review
                  </CTAButton>
                </div>
              </div>
            </aside>

            <div className="space-y-10">
              {FAQS.map((categoryData, catIdx) => (
                <ScrollReveal key={categoryData.id} delay={catIdx * 0.05}>
                  <div
                    ref={handleCategoryRef(categoryData.id)}
                    id={categoryData.id}
                  >
                    <h2 className="text-xl md:text-2xl font-display text-offwhite mb-4 uppercase tracking-wide">
                      {categoryData.category}
                    </h2>
                    <div className="bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] overflow-hidden">
                      {categoryData.questions.map((faq, qIdx) => (
                        <AccordionItem
                          key={qIdx}
                          question={faq.q}
                          answer={faq.a}
                          isOpen={openQuestion === `${catIdx}-${qIdx}`}
                          onToggle={() => toggleQuestion(`${catIdx}-${qIdx}`)}
                          id={`${catIdx}-${qIdx}`}
                        />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-offwhite mb-4 leading-tight">
              Still not sure? Let's talk it through.
            </h2>
            <p className="text-stone text-lg font-sans mb-8 max-w-xl mx-auto leading-relaxed">
              Book a free 20-minute call. We'll answer every question and show you exactly what your site could look like — before you pay a penny.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/get-started" className="px-8 py-4">
                Book Your Free Website Review
              </CTAButton>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-orange font-sans font-semibold hover:underline transition-colors"
              >
                See our pricing <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
