import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HeroBackgroundImage } from "@/components/ui/HeroBackgroundImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ArrowRight, Check, LucideIcon } from "lucide-react";

export interface StrategyPageData {
  seo: {
    title: string;
    description: string;
    url: string;
  };
  breadcrumbLabel: string;
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
  deliverables?: {
    heading: string;
    subtitle: string;
    items: { icon: LucideIcon; title: string; description: string }[];
  };
  planTiers?: {
    heading: string;
    subtitle: string;
    tiers: {
      name: string;
      price: string;
      description: string;
      features: string[];
      highlighted?: boolean;
    }[];
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
  return (
    <div className="border border-gray-200 rounded-xl bg-white p-6 md:p-7 hover:border-orange/40 transition-all duration-300 h-full">
      <div className="flex items-start gap-3 mb-3">
        <span className="w-1.5 h-6 bg-orange rounded-full flex-shrink-0 mt-1" />
        <h3 className="text-charcoal font-sans font-bold text-base md:text-lg leading-snug">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed">
        {description}
      </p>
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
            <HeroBackgroundImage src={data.hero.backgroundImage} />
            <div className="absolute inset-0 bg-charcoal/85" />
          </>
        )}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 mb-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Strategy", path: "/our-strategy" },
              {
                name: data.breadcrumbLabel,
                path: data.seo.url.replace("https://graylockdigital.com", ""),
              },
            ]}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-offwhite mb-6 leading-[1.1]">
              {data.hero.h1}
            </h1>
            <p className="text-offwhite/80 font-sans text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              {data.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <CTAButton href="/get-started" className="px-8 py-5 text-lg">
                {data.hero.ctaButton}
              </CTAButton>
            </div>
            <p className="text-offwhite/60 font-sans text-sm">{data.hero.ctaSubtext}</p>
          </ScrollReveal>
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

      {data.deliverables && (
        <section className="bg-[#1A1A1A] py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="text-center mb-16">
              <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
                WHAT WE DO
              </p>
              <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
                {data.deliverables.heading}
              </h2>
              <p className="text-stone font-sans text-lg max-w-2xl mx-auto">
                {data.deliverables.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.deliverables.items.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="bg-[#242424] border border-[#333] rounded-xl p-6 hover:border-orange/30 transition-all duration-300 h-full">
                    <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon size={20} className="text-orange" />
                    </div>
                    <h3 className="text-offwhite font-sans font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-stone font-sans text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.planTiers && (
        <section className="bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="text-center mb-16">
              <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
                WHAT'S INCLUDED IN YOUR PLAN
              </p>
              <h2 className="text-3xl md:text-5xl font-display text-[#1A1A1A] mb-4">
                {data.planTiers.heading}
              </h2>
              <p className="text-[#4A4A4A] font-sans text-lg max-w-2xl mx-auto">
                {data.planTiers.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {data.planTiers.tiers.map((tier, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div
                    className={`rounded-2xl p-8 h-full flex flex-col ${
                      tier.highlighted
                        ? "bg-charcoal text-offwhite border-2 border-orange shadow-lg shadow-orange/10"
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    {tier.highlighted && (
                      <span className="inline-block bg-orange text-white text-xs font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 self-start">
                        Most Popular
                      </span>
                    )}
                    <h3
                      className={`font-display text-2xl mb-1 ${
                        tier.highlighted ? "text-offwhite" : "text-[#1A1A1A]"
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <div className="mb-3">
                      <span
                        className={`font-display text-3xl font-bold ${
                          tier.highlighted ? "text-orange" : "text-charcoal"
                        }`}
                      >
                        {tier.price}
                      </span>
                      <span
                        className={`font-sans text-sm ${
                          tier.highlighted ? "text-stone" : "text-[#4A4A4A]"
                        }`}
                      >
                        /mo
                      </span>
                    </div>
                    <p
                      className={`font-sans text-sm leading-relaxed mb-6 ${
                        tier.highlighted ? "text-stone" : "text-[#4A4A4A]"
                      }`}
                    >
                      {tier.description}
                    </p>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {tier.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-2">
                          <Check
                            size={16}
                            className={`flex-shrink-0 mt-0.5 ${
                              tier.highlighted ? "text-orange" : "text-orange"
                            }`}
                          />
                          <span
                            className={`font-sans text-sm ${
                              tier.highlighted ? "text-offwhite/90" : "text-[#4A4A4A]"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <CTAButton
                      href="/get-started"
                      variant={tier.highlighted ? "primary" : "dark"}
                      className="w-full py-4 text-center justify-center"
                    >
                      Get Started
                    </CTAButton>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              KEY CONCEPTS
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1A1A1A]">
              The Concepts That Matter Most
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
              PROBLEMS WE SOLVE
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-offwhite mb-3">
              How Graylock Solves the Problems Most Sites Have
            </h2>
            <p className="text-stone font-sans max-w-2xl mx-auto">
              The most common issues we see on practice websites — and exactly how every Graylock build is engineered to avoid them.
            </p>
          </ScrollReveal>

          <div className="hidden md:block">
            <ScrollReveal delay={0.1}>
              <div className="overflow-x-auto rounded-xl border border-gunmetal">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="bg-navy/40 border-b border-gunmetal">
                      <th className="text-left py-4 px-5 text-stone font-sans font-bold text-xs uppercase tracking-wider">Common Pitfall</th>
                      <th className="text-left py-4 px-5 text-stone font-sans font-bold text-xs uppercase tracking-wider">What It Costs Practices</th>
                      <th className="text-left py-4 px-5 text-orange font-sans font-bold text-xs uppercase tracking-wider">How Graylock Solves It</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.commonMistakes.rows.map((row, i) => (
                      <tr key={i} className="border-b border-gunmetal/40 last:border-b-0 hover:bg-navy/20 transition-colors">
                        <td className="py-4 px-5 text-offwhite font-sans text-sm font-semibold align-top">{row.mistake}</td>
                        <td className="py-4 px-5 text-stone font-sans text-sm align-top">{row.cost}</td>
                        <td className="py-4 px-5 text-offwhite font-sans text-sm align-top bg-orange/[0.04]">
                          <span className="inline-flex items-center gap-2">
                            <Check size={14} className="text-orange flex-shrink-0" /> {row.fix}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:hidden space-y-4">
            {data.commonMistakes.rows.map((row, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="bg-navy/40 border border-gunmetal rounded-xl p-5">
                  <p className="text-offwhite font-sans font-semibold text-sm mb-2">{row.mistake}</p>
                  <p className="text-stone/80 font-sans text-xs leading-relaxed mb-3">{row.cost}</p>
                  <div className="flex gap-2 items-start pt-3 border-t border-gunmetal/60">
                    <Check size={16} className="text-orange flex-shrink-0 mt-0.5" />
                    <p className="text-offwhite font-sans text-sm leading-snug">{row.fix}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
