import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { HeroBackgroundImage } from "@/components/ui/HeroBackgroundImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { WhatWeDeliverSection } from "@/components/home/WhatWeDeliverSection";
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
  ShieldCheck,
  ChevronDown,
  Star,
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
  children,
  hideFeatures,
}: {
  id: string;
  index: string;
  eyebrow: string;
  heading: string;
  intro: string;
  features: Feature[];
  dark: boolean;
  bgClass: string;
  children?: React.ReactNode;
  hideFeatures?: boolean;
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

        {!hideFeatures && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.05}>
                <FeatureCard feature={feature} dark={dark} />
              </ScrollReveal>
            ))}
          </div>
        )}

        {children && <div className={hideFeatures ? "" : "mt-14 md:mt-20"}>{children}</div>}
      </div>
    </section>
  );
}

function SampleLeadForm() {
  const inputClass =
    "w-full bg-white/[0.04] border border-white/10 rounded-lg px-3.5 py-2.5 text-offwhite placeholder:text-stone/50 font-sans text-sm focus:outline-none focus:border-orange/60 focus:ring-1 focus:ring-orange/40 transition-colors";
  const labelClass = "block text-offwhite font-sans font-medium text-xs mb-1.5";

  return (
    <div className="relative">
      <p className="text-stone/70 font-sans text-xs uppercase tracking-widest mb-3">
        A sample of the forms we build
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative bg-[#161616] border border-white/10 rounded-2xl p-6 md:p-7 shadow-2xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3.5 py-1.5 mb-4">
          <ShieldCheck size={14} className="text-orange" />
          <span className="text-orange font-sans text-[11px] font-bold uppercase tracking-wider">
            Get Started
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-display text-offwhite mb-1.5">
          Request a Consultation
        </h3>
        <p className="text-stone font-sans text-sm leading-relaxed mb-6">
          Share a few details and we'll be in touch to design the right partnership.
        </p>

        <div className="space-y-4 mb-5">
          <div>
            <label htmlFor="fullName" className={labelClass}>Full Name</label>
            <input id="fullName" name="fullName" type="text" className={inputClass} placeholder="Dr. Jane Doe" readOnly />
          </div>
          <div>
            <label htmlFor="emailAddress" className={labelClass}>Email Address</label>
            <input id="emailAddress" name="emailAddress" type="email" className={inputClass} placeholder="you@business.com" readOnly />
          </div>
          <div>
            <label htmlFor="phoneNumber" className={labelClass}>Phone Number</label>
            <input id="phoneNumber" name="phoneNumber" type="tel" className={inputClass} placeholder="(555) 123-4567" readOnly />
          </div>
          <div>
            <label htmlFor="serviceNeeded" className={labelClass}>Service Needed</label>
            <div className="relative">
              <select
                id="serviceNeeded"
                name="serviceNeeded"
                defaultValue=""
                className={`${inputClass} appearance-none pr-10 cursor-pointer`}
              >
                <option value="" disabled>Select a service</option>
                <option value="website-design">Website Design</option>
                <option value="seo">SEO &amp; Local Search</option>
                <option value="compliance">Compliance Review</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown
                size={16}
                className="text-stone/50 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange hover:bg-orange/90 text-white font-sans font-bold text-base py-3.5 rounded-lg transition-colors"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}

function LeadGenShowcase() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
      <ScrollReveal className="flex flex-col gap-6">
        {LEADGEN_FEATURES.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="flex-1 bg-white border border-gray-200 rounded-2xl p-7 md:p-8 hover:border-orange/40 transition-all duration-300 flex flex-col justify-center"
            >
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
          );
        })}
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

      <TrustSection />

      <TopicSection
        id="lead-gen"
        index="03"
        eyebrow="Lead Generation"
        heading="Dynamic forms that turn visitors into booked clients"
        intro="Getting traffic but no new clients means your website is the bottleneck. We build the forms, CTAs, and click-to-call that close the gap — so the visitors you already have start paying off."
        features={LEADGEN_FEATURES}
        dark={false}
        bgClass="bg-[#F5F5F5]"
        hideFeatures
      >
        <LeadGenShowcase />
      </TopicSection>

      <TopicSection
        id="seo"
        index="04"
        eyebrow="SEO Optimization"
        heading="Built to be found when clients are already searching"
        intro="Right now, prospective clients are searching Google for what you offer — and choosing a competitor. Every site we build is engineered for search from the ground up, so you stop losing them."
        features={SEO_FEATURES}
        dark={true}
        bgClass="bg-[#0f0f0f]"
      />

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
