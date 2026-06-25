import { SEO } from "@/components/SEO";
import { HeroBackgroundImage } from "@/components/ui/HeroBackgroundImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { WhatWeDeliverSection } from "@/components/home/WhatWeDeliverSection";
import {
  Eye,
  TrendingUp,
  Smartphone,
  Gauge,
  MousePointerClick,
  LayoutGrid,
  BadgeCheck,
  Filter,
  FileText,
  Phone,
  BarChart3,
  Sparkles,
  Search,
  Code2,
  MapPin,
  Tags,
  Landmark,
  ShieldCheck,
  ShieldOff,
  Scale,
  type LucideIcon,
} from "lucide-react";

const SECTION_NAV = [
  { id: "design", label: "Website Design" },
  { id: "conversion", label: "Conversion-Focused Builds" },
  { id: "lead-gen", label: "Lead Generation" },
  { id: "seo", label: "SEO Optimization" },
  { id: "compliance", label: "Industry Compliance" },
];

const STATS = [
  { value: "94%", label: "of first impressions are design-related, not content-related" },
  { value: "5–15%", label: "lead conversion for a well-built site vs 1–3% average" },
  { value: "75%", label: "of users never scroll past the first page of Google" },
];

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
  {
    icon: Filter,
    title: "Funnels designed for all three stages",
    description:
      "Most sites only handle awareness. We design for consideration and decision too — guiding strangers all the way to a booked appointment.",
  },
  {
    icon: BarChart3,
    title: "Lead tracking and attribution",
    description:
      "See how many enquiries came in, from which pages, and when. Real data so you know exactly what's working (Growth and Scale plans).",
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

const COMPLIANCE_FEATURES: Feature[] = [
  {
    icon: Landmark,
    title: "The federal floor",
    description:
      "Built against FTC truth-in-advertising standards, the 2024 Reviews Rule, CAN-SPAM for email, TCPA for phone capture, and ADA accessibility under WCAG 2.1 Level AA.",
  },
  {
    icon: ShieldCheck,
    title: "The state layer",
    description:
      "Configured for the 20+ state consumer privacy laws — privacy notices, data-request workflows, Global Privacy Control signals, and opt-in for sensitive data.",
  },
  {
    icon: Scale,
    title: "Your industry, specifically",
    description:
      "State licensing-board advertising rules for healthcare, accounting, construction, and other trust-based professions shape your site from the start.",
  },
  {
    icon: ShieldOff,
    title: "What we refuse to do",
    description:
      "No accessibility overlay widgets, no advertising pixels on healthcare condition pages, and no claims we know your board will treat as misleading.",
  },
];

function FeatureCard({ feature, dark }: { feature: Feature; dark: boolean }) {
  const Icon = feature.icon;
  return (
    <div
      className={
        dark
          ? "bg-[#242424] border border-[#333] rounded-xl p-6 hover:border-orange/30 transition-all duration-300 h-full"
          : "bg-white border border-gray-200 rounded-xl p-6 hover:border-orange/40 transition-all duration-300 h-full"
      }
    >
      <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
        <Icon size={20} className="text-orange" />
      </div>
      <h3
        className={
          dark
            ? "text-offwhite font-sans font-semibold text-lg mb-2"
            : "text-[#1A1A1A] font-sans font-semibold text-lg mb-2"
        }
      >
        {feature.title}
      </h3>
      <p
        className={
          dark
            ? "text-stone font-sans text-sm leading-relaxed"
            : "text-[#4A4A4A] font-sans text-sm leading-relaxed"
        }
      >
        {feature.description}
      </p>
    </div>
  );
}

function TopicSection({
  id,
  index,
  eyebrow,
  heading,
  intro,
  features,
  dark,
  bgClass,
}: {
  id: string;
  index: string;
  eyebrow: string;
  heading: string;
  intro: string;
  features: Feature[];
  dark: boolean;
  bgClass: string;
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.05}>
              <FeatureCard feature={feature} dark={dark} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WebsiteDesignOverview() {
  return (
    <>
      <SEO
        title="Website Design, Conversion, Lead Gen, SEO & Compliance | Graylock Digital"
        description="One service, built end to end: conversion-focused website design, dynamic lead-generation forms, SEO optimization, and industry compliance for professional practices."
        url="https://graylockdigital.com/services"
      />

      {/* Hero */}
      <section className="relative bg-charcoal pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 overflow-hidden">
        <HeroBackgroundImage src={`${import.meta.env.BASE_URL}hero-strategy-website-design.png`} />
        <div className="absolute inset-0 bg-charcoal/85" />
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
      <WhatWeDeliverSection />

      {/* Stats strip */}
      <section className="bg-navy py-8 border-y border-gunmetal">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.05}>
              <div className="text-center py-4">
                <div className="text-white font-display text-5xl md:text-6xl font-bold mb-3">
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

      {/* Jump nav */}
      <section className="bg-[#1A1A1A] border-b border-gunmetal/60 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3">
          {SECTION_NAV.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs md:text-sm font-sans font-semibold text-stone hover:text-orange border border-gunmetal hover:border-orange/40 rounded-full px-4 py-2 transition-all duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>

      <TopicSection
        id="design"
        index="01"
        eyebrow="Website Design"
        heading="Custom websites designed to convert, not just decorate"
        intro="Most practice websites are digital brochures collecting dust. We plan every layout, structure, and word around how your specific clients think — and what they need to see before they pick up the phone."
        features={DESIGN_FEATURES}
        dark={false}
        bgClass="bg-[#F5F5F5]"
      />

      <TopicSection
        id="conversion"
        index="02"
        eyebrow="Conversion-Focused Builds"
        heading="Every page engineered around a single action"
        intro="A beautiful site that doesn't convert is just an expensive brochure. We build with conversion architecture from the first wireframe — so visitors are guided, reassured, and prompted to act."
        features={CONVERSION_FEATURES}
        dark={true}
        bgClass="bg-[#1A1A1A]"
      />

      <TopicSection
        id="lead-gen"
        index="03"
        eyebrow="Lead Generation"
        heading="Dynamic forms that turn visitors into booked clients"
        intro="Getting traffic but no new clients means your website is the bottleneck. We build the forms, CTAs, click-to-call, and tracking that close the gap — so the visitors you already have start paying off."
        features={LEADGEN_FEATURES}
        dark={false}
        bgClass="bg-[#F5F5F5]"
      />

      <TopicSection
        id="seo"
        index="04"
        eyebrow="SEO Optimization"
        heading="Built to be found when clients are already searching"
        intro="Right now, prospective clients are searching Google for what you offer — and choosing a competitor. Every site we build is engineered for search from the ground up, so you stop losing them."
        features={SEO_FEATURES}
        dark={true}
        bgClass="bg-charcoal"
      />

      <TopicSection
        id="compliance"
        index="05"
        eyebrow="Industry Compliance"
        heading="Compliance built into the website from day one"
        intro="A website is the public record of what your business says about itself. In regulated industries, we build to the federal, state, and licensing-board rules that govern your profession — so your site is an asset, not a liability."
        features={COMPLIANCE_FEATURES}
        dark={false}
        bgClass="bg-[#F5F5F5]"
      />

      {/* Bottom CTA */}
      <section className="bg-charcoal py-24 md:py-28 px-6 md:px-12 border-t border-gunmetal">
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
