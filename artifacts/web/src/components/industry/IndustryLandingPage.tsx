import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { PRICING_TIERS } from "@/lib/constants";
import { useState } from "react";
import { Link } from "wouter";
import {
  Check,
  ChevronDown,
  ArrowRight,
  Star,
  LucideIcon,
} from "lucide-react";

export interface IndustryPageData {
  seo: {
    title: string;
    description: string;
    url: string;
  };
  hero: {
    badge: string;
    badgeIcon: LucideIcon;
    h1: string;
    h1Highlight: string;
    subheadline: string;
    cta: string;
    ctaSubtext?: string;
    trustSignals: string[];
    backgroundImage?: string;
  };
  painPoints: {
    sectionLabel: string;
    headline: string;
    image?: string;
    cards: { icon: LucideIcon; title: string; description: string }[];
  };
  benefits: {
    headline: string;
    items: { title: string; description: string }[];
  };
  specialties?: {
    headline: string;
    tags: string[];
  };
  process: {
    headline: string;
    steps: { title: string; description: string }[];
  };
  testimonials: {
    featured: { name: string; title: string; location: string; quote: string };
    others: { name: string; title: string; location: string; quote: string }[];
  };
  faqs: { q: string; a: string }[];
  bottomCta: {
    headline: string;
    subtext: string;
    button: string;
  };
  pricingHeadline?: string;
  showPrivacyNote?: boolean;
  relatedPages: { name: string; path: string }[];
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
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5 px-5 md:px-6" : "max-h-0"}`}
      >
        <p className="text-gray-600 font-sans leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

const TIER_STAGE_LABELS: Record<string, string> = {
  Starter: "Best for solo practitioners",
  Growth: "Best for growing teams",
  Scale: "Best for multi-location practices",
};

export default function IndustryLandingPage({ data }: { data: IndustryPageData }) {
  const pricingTiers = PRICING_TIERS.filter((t) => !t.isCustom).slice(0, 3);

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
        {data.hero.backgroundImage && (() => {
          const src = data.hero.backgroundImage;
          const base = src.replace(/\.(jpg|jpeg|png)$/i, "");
          const desktopWebp = `${base}.webp`;
          const mobileWebp = `${base}-mobile.webp`;
          const mobileJpg = `${base}-mobile.jpg`;
          return (
            <>
              <picture>
                <source
                  type="image/webp"
                  media="(max-width: 767px)"
                  srcSet={mobileWebp}
                />
                <source
                  type="image/jpeg"
                  media="(max-width: 767px)"
                  srcSet={mobileJpg}
                />
                <source type="image/webp" srcSet={desktopWebp} />
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </picture>
              <div className="absolute inset-0 bg-charcoal/85" />
            </>
          );
        })()}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-4 py-1.5 mb-6">
              <data.hero.badgeIcon size={14} className="text-orange" />
              <span className="text-orange text-xs font-sans font-bold uppercase tracking-widest">
                {data.hero.badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-offwhite mb-6 leading-[1.1]">
              {data.hero.h1}{" "}
              <span className="text-orange">{data.hero.h1Highlight}</span>
            </h1>

            <p className="text-offwhite/80 font-sans text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              {data.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-3">
              <CTAButton href="/get-started" className="px-8 py-5 text-lg">
                {data.hero.cta}
              </CTAButton>
            </div>
            {data.hero.ctaSubtext && (
              <p className="text-offwhite/60 font-sans text-sm mb-6">{data.hero.ctaSubtext}</p>
            )}

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {data.hero.trustSignals.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-orange" />
                  <span className="text-offwhite/70 font-sans">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative w-full max-w-md mx-auto bg-navy/70 border border-gunmetal rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-5 pb-5 border-b border-gunmetal">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-orange fill-orange" />
                  ))}
                </div>
                <span className="text-offwhite/80 font-sans text-xs uppercase tracking-wider">
                  Trusted by US practices
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <div className="text-2xl font-display text-orange font-bold leading-none mb-1">
                    7–10
                  </div>
                  <div className="text-offwhite/70 text-xs font-sans">Business days to launch</div>
                </div>
                <div>
                  <div className="text-2xl font-display text-orange font-bold leading-none mb-1">
                    $0
                  </div>
                  <div className="text-offwhite/70 text-xs font-sans">Up front before your demo</div>
                </div>
                <div>
                  <div className="text-2xl font-display text-orange font-bold leading-none mb-1">
                    100%
                  </div>
                  <div className="text-offwhite/70 text-xs font-sans">US-based, fully managed</div>
                </div>
                <div>
                  <div className="text-2xl font-display text-orange font-bold leading-none mb-1">
                    0
                  </div>
                  <div className="text-offwhite/70 text-xs font-sans">Long-term contracts</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {data.specialties && (
        <section className="bg-charcoal py-16 md:py-20 px-6 md:px-12 border-b border-gunmetal">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-display text-offwhite">
                {data.specialties.headline}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap justify-center gap-3">
                {data.specialties.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-navy border border-gunmetal rounded-full px-5 py-2.5 text-stone font-sans text-sm hover:border-orange/40 hover:text-offwhite transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="bg-charcoal py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              {data.painPoints.sectionLabel}
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-offwhite max-w-4xl mx-auto">
              {data.painPoints.headline}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gunmetal/50">
                <img
                  src={data.painPoints.image || `${import.meta.env.BASE_URL}outdated-practice-website.png`}
                  alt="Example of an outdated practice website"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>

            <div className="space-y-5">
              {data.painPoints.cards.map((card, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-orange/10">
                      <card.icon size={18} className="text-orange" />
                    </div>
                    <div>
                      <h3 className="text-offwhite font-sans font-semibold text-base md:text-lg mb-1">
                        {card.title}
                      </h3>
                      <p className="text-stone font-sans text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal className="text-center mt-14">
            <p className="text-stone font-sans text-lg">
              That's exactly why we review your site for free — so you finally know what to fix.{" "}
              <Link
                href="/get-started"
                className="text-orange font-semibold hover:underline inline-flex items-center gap-1"
              >
                See the fix <ArrowRight size={14} />
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              WHY GRAYLOCK
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-[#1A1A1A] mb-4">
              {data.benefits.headline}
            </h2>
            <p className="text-[#4A4A4A] font-sans text-base md:text-lg max-w-2xl mx-auto">
              The outcomes practices like yours actually get when their site is built right.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.benefits.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange/10 rounded-full flex items-center justify-center mt-1">
                    <Check size={16} className="text-orange" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[#1A1A1A] text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#4A4A4A] font-sans text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-offwhite">
              {data.process.headline}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {data.process.steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center relative">
                  <div className="w-14 h-14 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white font-display text-xl font-bold">
                    {i + 1}
                  </div>
                  {i < data.process.steps.length - 1 && (
                    <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-orange/20" />
                  )}
                  <h3 className="font-sans font-bold text-lg mb-2 text-offwhite">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-stone">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              SIMPLE PRICING
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-[#1A1A1A]">
              {data.pricingHeadline || "Simple, Transparent Pricing — Everything Included"}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.1}>
                <div
                  className={`rounded-xl p-6 border h-full flex flex-col ${
                    tier.popular
                      ? "border-orange bg-orange/5 ring-1 ring-orange/30"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {tier.popular && (
                    <div className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-2">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display text-2xl mb-1 text-[#1A1A1A]">
                    {tier.name}
                  </h3>
                  {TIER_STAGE_LABELS[tier.name] && (
                    <p className={`text-xs font-sans font-semibold uppercase tracking-wider mb-3 ${
                      tier.popular ? "text-orange" : "text-[#4A4A4A]"
                    }`}>
                      {TIER_STAGE_LABELS[tier.name]}
                    </p>
                  )}
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-display font-bold text-[#1A1A1A]">
                      {tier.price}
                    </span>
                    <span className="text-sm text-[#4A4A4A]">/mo</span>
                  </div>
                  <p className="text-xs mb-4 text-[#4A4A4A]">
                    {tier.setup}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {tier.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check size={14} className="text-orange flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#4A4A4A]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <CTAButton
                    href="/get-started"
                    variant={tier.popular ? "primary" : "outline"}
                    className="w-full text-sm py-3"
                  >
                    Get Started
                  </CTAButton>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-8">
            <Link
              href="/pricing"
              className="text-orange font-sans font-semibold hover:underline inline-flex items-center gap-2"
            >
              View full pricing details <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              WHAT OUR CLIENTS SAY
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-offwhite">
              Real Results From Real Businesses
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-6">
            <ScrollReveal className="lg:col-span-2">
              <div className="bg-navy border border-gunmetal rounded-xl p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-orange fill-orange" />
                    ))}
                  </div>
                  <p className="text-offwhite font-sans text-lg md:text-xl leading-relaxed mb-6 italic">
                    &ldquo;{data.testimonials.featured.quote}&rdquo;
                  </p>
                </div>
                <div>
                  <p className="text-offwhite font-sans font-bold">
                    {data.testimonials.featured.name}
                  </p>
                  <p className="text-stone font-sans text-sm">
                    {data.testimonials.featured.title} &bull;{" "}
                    {data.testimonials.featured.location}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {data.testimonials.others.map((t, i) => (
                <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                  <div className="bg-navy border border-gunmetal rounded-xl p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} className="text-orange fill-orange" />
                      ))}
                    </div>
                    <p className="text-offwhite font-sans text-sm leading-relaxed mb-4 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="text-stone font-sans text-xs">
                      <span className="font-bold text-offwhite">{t.name}</span>{" "}
                      &bull; {t.title}, {t.location}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
            {data.showPrivacyNote && (
              <p className="text-white/70 font-sans text-sm mt-6 max-w-xl mx-auto">
                Our forms collect contact information only. If you use a HIPAA-compliant platform for intake, we link directly to it from your site.
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-16 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-stone text-xs font-sans font-bold uppercase tracking-widest mb-6">
              You Might Also Be Looking For
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {data.relatedPages.map((page) => (
                <Link
                  key={page.path}
                  href={page.path}
                  className="bg-navy border border-gunmetal rounded-full px-5 py-2.5 text-stone font-sans text-sm hover:border-orange/40 hover:text-offwhite transition-all duration-300"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
