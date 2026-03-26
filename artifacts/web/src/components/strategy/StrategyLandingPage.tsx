import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ArrowRight, LucideIcon } from "lucide-react";

export interface StrategyPageData {
  seo: {
    title: string;
    description: string;
    url: string;
  };
  hero: {
    h1: string;
    subheadline: string;
    ctaButton: string;
    ctaSubtext: string;
    backgroundImage?: string;
  };
  definition: {
    heading: string;
    paragraphs: string[];
    calloutTitle: string;
    calloutBullets: [string, string, string];
  };
  whyItMatters: {
    cards: { icon: LucideIcon; title: string; description: string }[];
  };
  howGraylockDoesIt: {
    steps: { title: string; description: string }[];
  };
  statsStrip: {
    stats: { value: string; label: string }[];
  };
  keyConcepts: {
    concepts: { title: string; description: string }[];
  };
  commonMistakes: {
    rows: { mistake: string; cost: string; fix: string }[];
  };
  faqs: { q: string; a: string }[];
  bottomCta: {
    headline: string;
    subtext: string;
    button: string;
  };
  relatedStrategy: { name: string; path: string }[];
  schema: object;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-orange/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
      >
        <span className="text-charcoal font-sans font-semibold text-base md:text-lg pr-4">
          {q}
        </span>
        <ChevronDown
          className={`text-orange flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[600px] pb-5 px-5 md:px-6" : "max-h-0"}`}
      >
        <p className="text-gray-600 font-sans leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

function ConceptCard({ title, description }: { title: string; description: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-orange/40 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
      >
        <span className="text-charcoal font-sans font-bold text-base md:text-lg pr-4">
          {title}
        </span>
        <ChevronDown
          className={`text-orange flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[600px] pb-5 px-5 md:px-6" : "max-h-0"}`}
      >
        <p className="text-gray-600 font-sans leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function StrategyLandingPage({ data }: { data: StrategyPageData }) {
  return (
    <>
      <SEO
        title={data.seo.title}
        description={data.seo.description}
        url={data.seo.url}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }}
      />

      <section className="relative bg-charcoal pt-24 pb-20 md:pt-32 md:pb-28 px-6 md:px-12 overflow-hidden">
        {data.hero.backgroundImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${data.hero.backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-charcoal/85" />
          </>
        )}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-offwhite mb-6 leading-[1.1]">
              {data.hero.h1}
            </h1>
            <p className="text-stone font-sans text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              {data.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <CTAButton href="/get-started" className="px-8 py-5 text-lg">
                {data.hero.ctaButton}
              </CTAButton>
            </div>
            <p className="text-stone/70 font-sans text-sm">{data.hero.ctaSubtext}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              WHAT IS IT?
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1A1A1A] mb-6">
              {data.definition.heading}
            </h2>
            {data.definition.paragraphs.map((p, i) => (
              <p key={i} className="text-[#4A4A4A] font-sans leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-4">
                {data.definition.calloutTitle}
              </p>
              <div className="space-y-4">
                {data.definition.calloutBullets.map((bullet, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="w-8 h-8 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0 text-orange font-display font-bold text-sm">{i + 1}</span>
                    <p className="text-[#4A4A4A] font-sans text-sm">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              WHY IT MATTERS
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-offwhite">
              The Impact on Your Business
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whyItMatters.cards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-[#242424] border border-[#333] rounded-xl p-6 hover:border-orange/30 transition-all duration-300 h-full">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <card.icon size={20} className="text-orange" />
                  </div>
                  <h3 className="text-offwhite font-sans font-semibold text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-stone font-sans text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              HOW GRAYLOCK DOES IT
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-[#1A1A1A]">
              Our Approach
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {data.howGraylockDoesIt.steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex gap-5 items-start bg-white rounded-xl p-6 border border-gray-200 hover:border-orange/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center flex-shrink-0 text-white font-display text-lg font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[#1A1A1A] text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#4A4A4A] font-sans text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-8 border-y border-gunmetal">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {data.statsStrip.stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="text-center py-4">
                <div className="text-orange font-display text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-stone font-sans text-xs md:text-sm leading-snug">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              KEY CONCEPTS
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1A1A1A]">
              Deeper Dive
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {data.keyConcepts.concepts.map((concept, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <ConceptCard title={concept.title} description={concept.description} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              COMMON MISTAKES
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-offwhite">
              What Goes Wrong — and How We Fix It
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-gunmetal">
                    <th className="text-left py-4 px-4 text-orange font-sans font-bold text-sm uppercase tracking-wider">Mistake</th>
                    <th className="text-left py-4 px-4 text-orange font-sans font-bold text-sm uppercase tracking-wider">What It Costs You</th>
                    <th className="text-left py-4 px-4 text-orange font-sans font-bold text-sm uppercase tracking-wider">How Graylock Fixes It</th>
                  </tr>
                </thead>
                <tbody>
                  {data.commonMistakes.rows.map((row, i) => (
                    <tr key={i} className="border-b border-gunmetal/50 hover:bg-navy/30 transition-colors">
                      <td className="py-4 px-4 text-offwhite font-sans text-sm font-semibold">{row.mistake}</td>
                      <td className="py-4 px-4 text-stone font-sans text-sm">{row.cost}</td>
                      <td className="py-4 px-4 text-stone font-sans text-sm">{row.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1A1A1A]">
              Common Questions
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div className="bg-white rounded-xl shadow-sm">
                  <FAQItem q={faq.q} a={faq.a} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
              {data.bottomCta.headline}
            </h2>
            <p className="text-white/90 font-sans text-lg md:text-xl mb-8 leading-relaxed">
              {data.bottomCta.subtext}
            </p>
            <CTAButton href="/get-started" variant="dark" className="px-10 py-5 text-lg">
              {data.bottomCta.button}
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-16 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-stone text-xs font-sans font-bold uppercase tracking-widest mb-6">
              Explore More Strategy
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {data.relatedStrategy.map((page) => (
                <Link
                  key={page.path}
                  href={page.path}
                  className="bg-navy border border-gunmetal rounded-full px-5 py-2.5 text-stone font-sans text-sm hover:border-orange/40 hover:text-offwhite transition-all duration-300 inline-flex items-center gap-2"
                >
                  {page.name}
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
