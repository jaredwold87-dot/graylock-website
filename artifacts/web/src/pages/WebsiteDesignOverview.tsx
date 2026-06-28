import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { HeroBackgroundImage } from "@/components/ui/HeroBackgroundImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { WhatWeDeliverSection } from "@/components/home/WhatWeDeliverSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import advantageTransformation from "@/assets/work/advantage-transformation.webp";
import {
  Eye,
  TrendingUp,
  Smartphone,
  Gauge,
  MousePointerClick,
  LayoutGrid,
  BadgeCheck,
  FileText,
  Phone,
  Sparkles,
  Search,
  Code2,
  MapPin,
  Tags,
  ChevronDown,
  Star,
  Mountain,
  Lock,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const DESIGN_FEATURES: Feature[] = [
  {
    icon: Eye,
    title: "First impressions in 50 milliseconds",
    description:
      "Before a visitor reads a word, they've judged your practice. We design the layout, typography, and trust signals that make that snap judgment a positive one.",
  },
  {
    icon: TrendingUp,
    title: "Design that drives action",
    description:
      "Layout, hierarchy, and button placement decide whether a visitor becomes a lead. We treat design as conversion strategy, not decoration.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first, every time",
    description:
      "60%+ of local service traffic is mobile, and Google ranks your mobile version. We design for phones first, then scale up to desktop.",
  },
  {
    icon: Gauge,
    title: "Fast by construction",
    description:
      "No bloated page builders or dozens of plugins. Every site is built lean for fast load times and passing Core Web Vitals.",
  },
];

const CONVERSION_FEATURES: Feature[] = [
  {
    icon: MousePointerClick,
    title: "A clear action on every page",
    description:
      "Each page is built around one primary action with prominent CTAs in the hero, mid-page, and footer. No page is a dead end.",
  },
  {
    icon: LayoutGrid,
    title: "Visual hierarchy that guides the eye",
    description:
      "We structure each page so attention flows naturally: headline → benefit → proof → call-to-action. Visitors never have to work to understand you.",
  },
  {
    icon: BadgeCheck,
    title: "Social proof where it counts",
    description:
      "Testimonials, ratings, and trust signals are placed where hesitation happens — above the fold and beside every key decision point.",
  },
  {
    icon: Sparkles,
    title: "CRO principles from day one",
    description:
      "Strategic button copy, reduced friction, and tested page structure are baked into every build — not bolted on after launch.",
  },
];

const LEADGEN_FEATURES: Feature[] = [
  {
    icon: FileText,
    title: "Dynamic lead-capture forms",
    description:
      "Forms on every high-intent page, balanced for the right field count — enough to qualify the lead without causing abandonment.",
  },
  {
    icon: Phone,
    title: "One-tap click-to-call",
    description:
      "Every page has a prominent, tappable phone number so mobile visitors who prefer to call can do it in a single tap.",
  },
];

const SEO_FEATURES: Feature[] = [
  {
    icon: Search,
    title: "On-page SEO foundation",
    description:
      "Proper title tags, meta descriptions, clean header hierarchy, keyword-optimized copy, and tidy URL structure on every page from day one.",
  },
  {
    icon: Code2,
    title: "Technical SEO",
    description:
      "Fast load times, mobile-first build, SSL, XML sitemap, robots.txt, and clean code Google can crawl efficiently — no bloat to slow it down.",
  },
  {
    icon: MapPin,
    title: "Local SEO optimization",
    description:
      "Location-specific content, local keyword integration, NAP consistency, and schema markup that tells Google exactly where you operate.",
  },
  {
    icon: Tags,
    title: "Metadata that earns the click",
    description:
      "Every page gets a unique, keyword-rich title tag and meta description written to stand out and pull clicks from the search results page.",
  },
];

function DesignShowcase() {
  return (
    <div className="border-t border-black/10">
      {DESIGN_FEATURES.map((feature, i) => {
        const Icon = feature.icon;
        return (
          <ScrollReveal key={feature.title} delay={i * 0.05}>
            <div className="group flex items-start gap-5 md:gap-8 py-8 md:py-10 border-b border-black/10 transition-colors hover:bg-black/[0.02]">
              <span className="font-display text-4xl md:text-6xl leading-none text-black/[0.12] group-hover:text-orange transition-colors duration-300 shrink-0 w-12 md:w-24">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="hidden sm:flex shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-orange/10 items-center justify-center">
                <Icon size={24} className="text-orange" />
              </div>
              <div>
                <h3 className="text-[#1A1A1A] font-sans font-semibold text-xl md:text-2xl mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-[#4A4A4A] font-sans text-[15px] md:text-base leading-relaxed max-w-2xl">
                  {feature.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

function ConversionFlow() {
  return (
    <div className="relative">
      <div
        className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-orange/0 via-orange/50 to-orange/0"
        aria-hidden="true"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        {CONVERSION_FEATURES.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <ScrollReveal key={feature.title} delay={i * 0.08}>
              <div className="relative text-center lg:text-left">
                <div className="relative z-10 mx-auto lg:mx-0 w-14 h-14 rounded-full bg-[#1A1A1A] border-2 border-orange/70 flex items-center justify-center mb-5 shadow-[0_0_30px_-8px_rgba(232,93,38,0.65)]">
                  <Icon size={24} className="text-orange" />
                </div>
                <div className="text-orange font-sans text-[11px] font-bold uppercase tracking-widest mb-2">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-offwhite font-sans font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone font-sans text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}

function SeoShowcase() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      <ScrollReveal>
        <div className="rounded-2xl bg-[#0f0f0f] border border-white/10 p-5 md:p-6 shadow-2xl">
          <div className="flex items-center gap-2.5 bg-white/[0.06] border border-white/10 rounded-full px-4 py-2.5 mb-5">
            <Search size={16} className="text-stone shrink-0" />
            <span className="text-stone font-sans text-sm">roofing company near me</span>
          </div>

          <div className="relative rounded-xl border border-orange/40 bg-orange/[0.07] p-4 mb-3">
            <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-orange bg-orange/15 px-2 py-0.5 rounded-full">
              Your site
            </span>
            <div className="text-stone/70 font-sans text-xs mb-1">summitexteriors.com</div>
            <div className="text-offwhite font-sans font-semibold text-[15px] mb-1.5">
              Summit Exteriors — #1 Rated Roofing in Denver
            </div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="flex text-orange" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} size={12} className="fill-current" />
                ))}
              </span>
              <span className="text-stone font-sans text-xs">4.9 (320 reviews)</span>
            </div>
            <p className="text-stone font-sans text-xs leading-relaxed">
              Trusted local roofing, siding &amp; window installation. Free estimates,
              financing available, fully licensed &amp; insured.
            </p>
          </div>

          {[0, 1].map((n) => (
            <div
              key={n}
              className="rounded-xl border border-white/5 p-4 mb-3 last:mb-0 opacity-40"
            >
              <div className="h-2 w-24 bg-white/15 rounded mb-2.5" />
              <div className="h-3 w-3/4 bg-white/20 rounded mb-2.5" />
              <div className="h-2 w-full bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="space-y-7">
          {SEO_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center">
                  <Icon size={20} className="text-orange" />
                </div>
                <div>
                  <h3 className="text-offwhite font-sans font-semibold text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-stone font-sans text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </div>
  );
}

function TopicSection({
  id,
  index,
  eyebrow,
  heading,
  intro,
  dark,
  bgClass,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  heading: string;
  intro: string;
  dark: boolean;
  bgClass: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${bgClass} py-20 md:py-28 px-6 md:px-12 scroll-mt-24`}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="max-w-3xl mb-12 md:mb-16">
          <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
            {index} — {eyebrow}
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-display mb-5 leading-[1.12] ${
              dark ? "text-offwhite" : "text-[#1A1A1A]"
            }`}
          >
            {heading}
          </h2>
          <p
            className={`font-sans text-lg leading-relaxed ${
              dark ? "text-stone" : "text-[#4A4A4A]"
            }`}
          >
            {intro}
          </p>
        </ScrollReveal>

        {children}
      </div>
    </section>
  );
}

function SampleLeadForm() {
  const inputClass =
    "w-full bg-[#F3F6F4] border border-[#15803d]/15 rounded-lg px-3.5 py-2.5 text-[#1A1A1A] placeholder:text-[#9aa39d] font-sans text-sm focus:outline-none focus:border-[#15803d]/60 focus:ring-1 focus:ring-[#15803d]/30 transition-colors";
  const labelClass = "block text-[#3a443d] font-sans font-medium text-xs mb-1.5";

  return (
    <div className="relative">
      <div className="absolute -top-3 -right-2 z-20 rotate-3 bg-orange text-white font-sans text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md shadow-lg">
        Sample Form
      </div>

      <div className="rounded-2xl overflow-hidden border border-black/10 shadow-2xl bg-white">
        <div className="flex items-center gap-2 bg-[#ECECEC] px-4 py-3 border-b border-black/5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" aria-hidden="true" />
          <div className="ml-3 flex-1 bg-white rounded-md px-3 py-1 text-[#6b6b6b] font-sans text-[11px] truncate flex items-center gap-1.5">
            <Lock size={10} className="text-[#28a745] shrink-0" />
            summitexteriors.com/contact
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#15803d] to-[#0d5429] px-6 md:px-7 py-6 text-white">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
              <Mountain size={20} className="text-white" />
            </div>
            <span className="font-display text-lg tracking-wide">SUMMIT EXTERIORS</span>
          </div>
          <h3 className="font-display text-2xl md:text-[26px] mb-1.5 leading-tight">
            Get Your Free Roofing Estimate
          </h3>
          <p className="text-white/85 font-sans text-sm">
            No-pressure quote within 24 hours. Licensed &amp; insured.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="px-6 md:px-7 py-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sampleName" className={labelClass}>Full Name</label>
              <input id="sampleName" name="sampleName" type="text" className={inputClass} placeholder="Jordan Miller" readOnly />
            </div>
            <div>
              <label htmlFor="samplePhone" className={labelClass}>Phone</label>
              <input id="samplePhone" name="samplePhone" type="tel" className={inputClass} placeholder="(555) 123-4567" readOnly />
            </div>
          </div>
          <div>
            <label htmlFor="sampleEmail" className={labelClass}>Email Address</label>
            <input id="sampleEmail" name="sampleEmail" type="email" className={inputClass} placeholder="you@email.com" readOnly />
          </div>
          <div>
            <label htmlFor="sampleProject" className={labelClass}>Project Type</label>
            <div className="relative">
              <select
                id="sampleProject"
                name="sampleProject"
                defaultValue=""
                tabIndex={-1}
                aria-readonly="true"
                onMouseDown={(e) => e.preventDefault()}
                onKeyDown={(e) => e.preventDefault()}
                className={`${inputClass} appearance-none pr-10 cursor-default`}
              >
                <option value="" disabled>Select a service</option>
                <option value="roofing">Roof Replacement</option>
                <option value="siding">Siding Installation</option>
                <option value="windows">Windows &amp; Doors</option>
                <option value="gutters">Gutters</option>
              </select>
              <ChevronDown
                size={16}
                className="text-[#9aa39d] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="sampleDetails" className={labelClass}>Tell us about your project</label>
            <textarea
              id="sampleDetails"
              name="sampleDetails"
              rows={3}
              className={`${inputClass} resize-none`}
              placeholder="Roof is about 12 years old and has a few leaks near the chimney..."
              readOnly
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#15803d] hover:bg-[#0d5429] text-white font-sans font-bold text-base py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Get My Free Estimate
            <ArrowRight size={18} />
          </button>

          <div className="flex items-center justify-center gap-2 pt-0.5">
            <span className="flex text-[#f5a623]" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} size={13} className="fill-current" />
              ))}
            </span>
            <span className="text-[#6b6b6b] font-sans text-xs">
              Trusted by 500+ local homeowners
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

function LeadGenShowcase() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
      <ScrollReveal className="flex flex-col gap-5">
        {LEADGEN_FEATURES.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group relative bg-white border border-gray-200 rounded-2xl p-7 md:p-8 hover:border-orange/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-orange/5 group-hover:bg-orange/10 transition-colors duration-300"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={24} className="text-orange" />
                </div>
                <h3 className="text-[#1A1A1A] font-sans font-semibold text-xl mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-[#4A4A4A] font-sans text-[15px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
        <div className="flex items-start gap-3 text-[#4A4A4A] font-sans text-sm leading-relaxed">
          <Check size={18} className="text-orange shrink-0 mt-0.5" />
          Every form is wired straight to your inbox — so no lead ever slips through the
          cracks.
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <SampleLeadForm />
      </ScrollReveal>
    </div>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Graylock completely transformed how we get leads. Our new site looks professional and actually converts traffic into booked jobs.",
    name: "Mike R.",
    role: "HVAC Owner",
  },
  {
    quote:
      "Finally, a web design team that understands the trades. They handled everything from the copy to the compliance.",
    name: "Sarah T.",
    role: "General Contractor",
  },
];

function TrustSection() {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src={`${import.meta.env.BASE_URL}home-service-client-trust.webp`}
              alt="A home service contractor reviewing completed work with satisfied homeowners."
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-[#B23E16] text-xs font-sans font-bold uppercase tracking-widest mb-3">
            Trusted by Home Service Pros
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-[#1A1A1A] mb-8 leading-[1.12]">
            Results the trades can measure
          </h2>
          <div className="space-y-5">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-7 shadow-sm"
              >
                <div className="flex gap-1 mb-4 text-orange" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={16} className="fill-current" />
                  ))}
                </div>
                <blockquote className="text-[#1A1A1A] font-sans text-base md:text-lg leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="text-[#4A4A4A] font-sans text-sm">
                  <span className="font-semibold text-[#1A1A1A]">{t.name}</span>
                  {" — "}
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Design, Conversion, Lead Generation, SEO & Compliance",
  serviceType: "Web Design & Development",
  description:
    "Conversion-focused website design, dynamic lead-generation forms, SEO optimization, and industry compliance for trust-based local businesses.",
  url: "https://graylockdigital.com/services",
  areaServed: "United States",
  provider: {
    "@type": "LocalBusiness",
    name: "Graylock Digital",
    url: "https://graylockdigital.com",
    telephone: "+15307225414",
  },
};

export default function WebsiteDesignOverview() {
  return (
    <>
      <SEO
        title="Website Design, Conversion, Lead Gen, SEO & Compliance | Graylock Digital"
        description="One service, built end to end: conversion-focused website design, dynamic lead-generation forms, SEO optimization, and industry compliance for professional practices."
        url="https://graylockdigital.com/services"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(SERVICE_SCHEMA)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-[#0f0f0f] pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 overflow-hidden">
        <HeroBackgroundImage
          src={`${import.meta.env.BASE_URL}hero-home-service-professional.jpg`}
          objectPosition="left center"
        />
        <div className="absolute inset-0 bg-[#0f0f0f]/80" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">
              Website Design
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-offwhite mb-6 leading-[1.1]">
              A Website That Wins You Business — Designed, Optimized, and Compliant
            </h1>
            <p className="text-offwhite/80 font-sans text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              We don't just build pretty websites. We design conversion-focused sites with
              lead-generating forms, SEO baked in, and your industry's compliance rules built into
              the foundation — so the traffic you earn turns into booked clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <CTAButton href="/get-started" className="px-8 py-5 text-lg">
                Book a Free Discovery Call
              </CTAButton>
            </div>
            <p className="text-offwhite/85 font-sans text-sm">
              15-minute call · See a custom homepage demo · No obligation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What we deliver */}
      <WhatWeDeliverSection
        imageSrc={advantageTransformation}
        imageAlt="Advantage Home Improvement website built by Graylock, shown as a before-and-after transformation."
      />

      <TopicSection
        id="design"
        index="01"
        eyebrow="Website Design"
        heading="Custom websites designed to convert, not just decorate"
        intro="Most practice websites are digital brochures collecting dust. We plan every layout, structure, and word around how your specific clients think — and what they need to see before they pick up the phone."
        dark={false}
        bgClass="bg-[#F5F5F5]"
      >
        <DesignShowcase />
      </TopicSection>

      <TopicSection
        id="conversion"
        index="02"
        eyebrow="Conversion-Focused Builds"
        heading="Every page engineered around a single action"
        intro="A beautiful site that doesn't convert is just an expensive brochure. We build with conversion architecture from the first wireframe — so visitors are guided, reassured, and prompted to act."
        dark={true}
        bgClass="bg-[#1A1A1A]"
      >
        <ConversionFlow />
      </TopicSection>

      <TrustSection />

      <IndustriesSection />

      <TopicSection
        id="lead-gen"
        index="03"
        eyebrow="Lead Generation"
        heading="Dynamic forms that turn visitors into booked clients"
        intro="Getting traffic but no new clients means your website is the bottleneck. We build the forms, CTAs, and click-to-call that close the gap — so the visitors you already have start paying off."
        dark={false}
        bgClass="bg-[#F5F5F5]"
      >
        <LeadGenShowcase />
      </TopicSection>

      <TopicSection
        id="seo"
        index="04"
        eyebrow="SEO Optimization"
        heading="Built to be found when clients are already searching"
        intro="Right now, prospective clients are searching Google for what you offer — and choosing a competitor. Every site we build is engineered for search from the ground up, so you stop losing them."
        dark={true}
        bgClass="bg-[#0f0f0f]"
      >
        <SeoShowcase />
      </TopicSection>

      {/* Bottom CTA */}
      <section className="bg-[#0f0f0f] py-24 md:py-28 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-xs md:text-sm mb-4">
              See it before you pay
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-offwhite mb-6 leading-tight">
              See What Your Website Could Look Like — Before You Commit
            </h2>
            <p className="text-stone font-sans text-base md:text-lg leading-relaxed mb-8">
              Book a free 15-minute discovery call. We'll evaluate your current site, show you what's
              holding it back, and build a custom homepage demo — all before you commit to anything.
            </p>
            <CTAButton href="/get-started" className="px-8 py-5 text-lg">
              Get My Free Homepage Demo
            </CTAButton>
            <p className="text-stone/80 font-sans text-sm mt-5">
              Plans from $199/month · No upfront risk · You approve the demo first.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
