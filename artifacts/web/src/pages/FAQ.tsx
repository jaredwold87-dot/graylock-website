import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { FAQS } from "@/lib/constants";
import { ChevronDown, Shield, ArrowRight, Search, X, MessageCircle } from "lucide-react";
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

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${safe})`, "ig"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase()
      ? <mark key={i} className="bg-orange/30 text-offwhite rounded px-0.5">{part}</mark>
      : <span key={i}>{part}</span>
  );
}

function AccordionItem({ question, answer, isOpen, onToggle, id, query }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
  query: string;
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
        className="w-full p-5 md:p-7 flex items-start justify-between gap-4 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] rounded"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
      >
        <span className="font-sans font-semibold text-white text-base md:text-lg leading-snug group-hover:text-orange transition-colors">
          {highlight(question, query)}
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
        <div ref={contentRef} className="px-5 md:px-7 pb-6 md:pb-7">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-[#BBBBBB] font-sans text-[15px] md:text-base leading-[1.75] mb-4 last:mb-0 whitespace-pre-line">
              {highlight(para, query)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

const POPULAR_QUESTION_IDS: Array<{ catId: string; q: string }> = [
  { catId: "getting-started", q: "What exactly is included in the free website review?" },
  { catId: "pricing-plans", q: "Can I cancel at any time?" },
  { catId: "your-website", q: "What do I own, and what happens if I cancel?" },
  { catId: "getting-started", q: "How long does it take to build and launch my website?" },
];

const CATEGORY_CTAS: Record<string, { text: string; href: string; cta: string }> = {
  "getting-started": {
    text: "Ready to see what your site could look like?",
    href: "/get-started",
    cta: "Get a free homepage demo",
  },
  "pricing-plans": {
    text: "Want to compare every plan side by side?",
    href: "/pricing",
    cta: "See full pricing breakdown",
  },
  "your-website": {
    text: "See real practice websites we've built.",
    href: "/work",
    cta: "View our work",
  },
  "seo": {
    text: "Curious how the full strategy fits together?",
    href: "/our-strategy",
    cta: "Read our strategy",
  },
  "features-explained": {
    text: "Not sure which plan fits your practice?",
    href: "/get-started",
    cta: "Talk it through with Tim",
  },
  "privacy-compliance": {
    text: "Have a specific compliance question?",
    href: "/get-started",
    cta: "Ask Tim directly",
  },
  "working-with-graylock": {
    text: "Ready to start? It begins with a free review.",
    href: "/get-started",
    cta: "Book your free review",
  },
};

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(FAQS[0].id);
  const [query, setQuery] = useState("");
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});

  const toggleQuestion = (q: string) => {
    setOpenQuestion(openQuestion === q ? null : q);
  };

  const scrollToCategory = (id: string) => {
    const el = categoryRefs.current[id];
    if (el) {
      const offset = 96;
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

  const popularQuestions = useMemo(() => {
    return POPULAR_QUESTION_IDS.map(({ catId, q }) => {
      const cat = FAQS.find(c => c.id === catId);
      const catIdx = FAQS.findIndex(c => c.id === catId);
      const qIdx = cat?.questions.findIndex(item => item.q === q) ?? -1;
      const item = qIdx >= 0 ? cat!.questions[qIdx] : null;
      return item ? { catIdx, qIdx, q: item.q, a: item.a } : null;
    }).filter(Boolean) as Array<{ catIdx: number; qIdx: number; q: string; a: string }>;
  }, []);

  const filteredFAQs = useMemo(() => {
    if (!query.trim()) return FAQS;
    const q = query.toLowerCase();
    return FAQS
      .map(cat => ({
        ...cat,
        questions: cat.questions.filter(
          item => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
        ),
      }))
      .filter(cat => cat.questions.length > 0);
  }, [query]);

  const totalMatches = filteredFAQs.reduce((sum, c) => sum + c.questions.length, 0);
  const isSearching = query.trim().length > 0;

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Graylock Digital</title>
        <meta name="description" content="Answers to the questions professional practice owners ask most about Graylock Digital's web design service, pricing, contracts, and process." />
        <script type="application/ld+json">
          {JSON.stringify(generateSchemaMarkup())}
        </script>
      </Helmet>

      <section className="bg-charcoal pt-24 pb-10 md:pt-32 md:pb-14 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-offwhite leading-tight mb-6">
              Everything You Need to Know —{" "}
              <span className="text-orange">Before You Sign Anything</span>
            </h1>
            <p className="text-stone text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed mb-8">
              We answer the questions practice owners ask most. No jargon, no pressure — just straight answers.
            </p>

            <div className="relative max-w-xl mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions — pricing, ownership, timelines…"
                className="w-full bg-navy border border-gunmetal rounded-full pl-11 pr-11 py-3.5 text-offwhite font-sans text-base placeholder:text-stone/60 focus:outline-none focus:border-orange/60 focus:ring-2 focus:ring-orange/20 transition-colors"
                aria-label="Search FAQ"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-white/10 text-stone hover:text-offwhite transition-colors"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            {isSearching && (
              <p className="text-stone font-sans text-sm mt-3">
                {totalMatches === 0
                  ? "No questions match that search yet — try a different word."
                  : `${totalMatches} ${totalMatches === 1 ? "question" : "questions"} matching "${query}"`}
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {!isSearching && (
        <section className="bg-charcoal pb-10 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-navy to-charcoal border border-gunmetal rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-orange/15 border border-orange/30 flex items-center justify-center">
                    <MessageCircle size={16} className="text-orange" />
                  </div>
                  <span className="text-offwhite font-sans font-semibold text-sm uppercase tracking-wider">Most asked</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {popularQuestions.map(({ catIdx, qIdx, q }) => (
                    <button
                      key={`${catIdx}-${qIdx}`}
                      onClick={() => {
                        const id = `${catIdx}-${qIdx}`;
                        setOpenQuestion(id);
                        setTimeout(() => {
                          const cat = FAQS[catIdx];
                          scrollToCategory(cat.id);
                        }, 50);
                      }}
                      className="text-left bg-charcoal/70 hover:bg-charcoal border border-gunmetal hover:border-orange/40 rounded-xl px-4 py-3.5 text-offwhite font-sans text-sm md:text-[15px] leading-snug transition-colors group flex items-start justify-between gap-3"
                    >
                      <span>{q}</span>
                      <ArrowRight size={14} className="text-orange flex-shrink-0 mt-1 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {!isSearching && (
        <div className="md:hidden sticky top-16 z-30 bg-charcoal/95 backdrop-blur border-b border-gunmetal px-4 py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-1 px-1">
            {FAQS.map(cat => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={cn(
                  "flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold whitespace-nowrap transition-colors border",
                  activeCategory === cat.id
                    ? "bg-orange/15 border-orange/40 text-orange"
                    : "bg-navy border-gunmetal text-stone hover:text-offwhite"
                )}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      )}

      <section className="bg-charcoal pb-24 px-6 md:px-12 pt-4 md:pt-8">
        <div className="max-w-6xl mx-auto">
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
                  <p className="text-offwhite font-sans text-sm mb-1 font-semibold">Don't see your question?</p>
                  <p className="text-stone font-sans text-xs mb-4 leading-relaxed">A 20-minute call with Tim — ask anything.</p>
                  <CTAButton href="/get-started" className="w-full justify-center text-sm px-4 py-3">
                    Book a Free Q&amp;A Call
                  </CTAButton>
                </div>
              </div>
            </aside>

            <div className="space-y-12">
              {filteredFAQs.length === 0 && (
                <div className="bg-navy border border-gunmetal rounded-xl p-8 text-center">
                  <p className="text-offwhite font-sans font-semibold mb-2">No questions match that search.</p>
                  <p className="text-stone font-sans text-sm mb-5">Try a different word — or just ask Tim directly.</p>
                  <CTAButton href="/get-started">Book a Free Q&amp;A Call</CTAButton>
                </div>
              )}

              {filteredFAQs.map((categoryData) => {
                const catIdx = FAQS.findIndex(c => c.id === categoryData.id);
                const cta = CATEGORY_CTAS[categoryData.id];
                return (
                  <ScrollReveal key={categoryData.id} delay={0.05}>
                    <div
                      ref={handleCategoryRef(categoryData.id)}
                      id={categoryData.id}
                      className="scroll-mt-24"
                    >
                      <h2 className="text-xl md:text-2xl font-display text-offwhite mb-5 uppercase tracking-wide">
                        {categoryData.category}
                      </h2>
                      <div className="bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] overflow-hidden">
                        {categoryData.questions.map((faq) => {
                          const originalQIdx = FAQS[catIdx].questions.findIndex(orig => orig.q === faq.q);
                          const id = `${catIdx}-${originalQIdx}`;
                          return (
                            <AccordionItem
                              key={id}
                              question={faq.q}
                              answer={faq.a}
                              isOpen={openQuestion === id || (isSearching && true)}
                              onToggle={() => toggleQuestion(id)}
                              id={id}
                              query={query}
                            />
                          );
                        })}
                      </div>

                      {!isSearching && cta && (
                        <div className="mt-5 bg-navy/60 border border-gunmetal rounded-xl px-5 py-4 md:px-6 md:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <p className="text-offwhite font-sans text-sm md:text-[15px]">{cta.text}</p>
                          <Link
                            href={cta.href}
                            className="inline-flex items-center gap-2 text-orange font-sans font-semibold text-sm hover:gap-3 transition-all whitespace-nowrap"
                          >
                            {cta.cta} <ArrowRight size={14} />
                          </Link>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-offwhite mb-4 leading-tight">
              Got a question we didn't cover?
            </h2>
            <p className="text-stone text-lg font-sans mb-8 max-w-xl mx-auto leading-relaxed">
              Book a free 20-minute call with Tim. Ask anything — pricing, process, what your site would look like, what we'd do for your specific practice. Zero pressure, zero obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/get-started" className="px-8 py-4">
                Book a Free Q&amp;A Call
              </CTAButton>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-orange font-sans font-semibold hover:underline transition-colors"
              >
                See our pricing <ArrowRight size={16} />
              </Link>
            </div>
            <p className="text-stone/70 font-sans text-sm mt-4">20-minute call · No sales pitch · Just straight answers.</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
