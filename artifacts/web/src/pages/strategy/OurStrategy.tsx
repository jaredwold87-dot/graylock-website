import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HeroBackgroundImage } from "@/components/ui/HeroBackgroundImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { Link } from "wouter";
import {
  Palette,
  Search,
  Bot,
  Layers,
  MapPin,
  Target,
  ArrowRight,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

type StrategyPage = {
  name: string;
  path: string;
  description: string;
  icon: LucideIcon;
  linkText: string;
};

type StrategyTier = {
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
  pages: StrategyPage[];
};

const STRATEGY_TIERS: StrategyTier[] = [
  {
    number: "01",
    eyebrow: "Foundation",
    title: "Start here: a website built to convert",
    intro: "Everything else we do is amplified — or wasted — by what your website actually does when a prospective client lands on it.",
    pages: [
      {
        name: "Website Design",
        path: "/website-design",
        description: "What separates a website that converts from one that collects dust — and how Graylock designs for results.",
        icon: Palette,
        linkText: "How we design for conversion",
      },
    ],
  },
  {
    number: "02",
    eyebrow: "Visibility",
    title: "Get found by the right people",
    intro: "Once your foundation can convert, the next job is making sure prospective clients actually see you — across Google, AI tools, and local maps.",
    pages: [
      {
        name: "SEO",
        path: "/seo-for-small-business",
        description: "How search engine optimization works for local service businesses — metadata, backlinks, local search, and more.",
        icon: Search,
        linkText: "How we rank you on Google",
      },
      {
        name: "GEO",
        path: "/geo-generative-engine-optimization",
        description: "The emerging practice of getting your business recommended by ChatGPT, Google AI Overviews, and Perplexity.",
        icon: Bot,
        linkText: "How we get you into AI answers",
      },
      {
        name: "Funnel Pages",
        path: "/funnel-pages",
        description: "Targeted landing pages that rank for specific services and locations — and convert searchers into leads.",
        icon: Layers,
        linkText: "How we capture every search",
      },
      {
        name: "Google Business Profile",
        path: "/google-business-profile",
        description: "The single most powerful free tool for local visibility — and how to optimize it for maximum impact.",
        icon: MapPin,
        linkText: "How we win the local map",
      },
    ],
  },
  {
    number: "03",
    eyebrow: "Conversion",
    title: "Turn visibility into booked clients",
    intro: "Visibility without conversion is just a popularity contest. The final piece ties everything together into measurable, recurring lead flow.",
    pages: [
      {
        name: "Lead Generation",
        path: "/lead-generation-for-small-business",
        description: "How everything Graylock builds comes together to generate qualified leads for your business every day.",
        icon: Target,
        linkText: "See how leads come together",
      },
    ],
  },
];

export default function OurStrategy() {
  return (
    <>
      <SEO
        title="Our Digital Strategy for Practices | Graylock Digital"
        description="Graylock's approach to getting practices found online — website design, SEO, GEO, funnel pages, Google Business Profiles, and lead generation."
        path="/our-strategy"
      />

      <section className="relative bg-charcoal pt-24 pb-20 md:pt-32 md:pb-28 px-6 md:px-12 overflow-hidden">
        <HeroBackgroundImage src={`${import.meta.env.BASE_URL}hero-strategy-overview.png`} />
        <div className="absolute inset-0 bg-charcoal/85" />

        <div className="max-w-4xl mx-auto relative z-10 mb-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Our Strategy", path: "/our-strategy" },
            ]}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-4">
              OUR STRATEGY
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-offwhite mb-6 leading-[1.1]">
              The Complete Digital Strategy That Gets Professional Practices Found, Trusted, and Booked
            </h1>
            <p className="text-offwhite/80 font-sans text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
              Three connected layers — Foundation, Visibility, and Conversion — that work together to turn your website into a consistent source of new clients.
            </p>
            <p className="text-offwhite/60 font-sans text-sm">
              New to all this? Start with <Link href="/website-design" className="text-orange hover:underline font-semibold">Website Design</Link> — it's the foundation everything else builds on.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-16">
          {STRATEGY_TIERS.map((tier, ti) => (
            <ScrollReveal key={tier.number} delay={ti * 0.05}>
              <div className="mb-8 text-center md:text-left">
                <div className="inline-flex items-center gap-3 mb-3">
                  <span className="text-orange font-display text-3xl md:text-4xl font-bold">{tier.number}</span>
                  <span className="text-orange text-xs font-sans font-bold uppercase tracking-widest">{tier.eyebrow}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display text-[#1A1A1A] mb-3 max-w-3xl">{tier.title}</h2>
                <p className="text-[#4A4A4A] font-sans text-base md:text-lg max-w-3xl leading-relaxed">{tier.intro}</p>
              </div>

              <div className={`grid gap-6 ${tier.pages.length === 1 ? "md:grid-cols-1" : tier.pages.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-4"}`}>
                {tier.pages.map((page) => {
                  const isFoundation = tier.number === "01";
                  return (
                    <Link key={page.path} href={page.path} className="block h-full group">
                      <div className={`relative bg-white border-2 rounded-xl p-7 hover:shadow-lg transition-all duration-300 h-full flex flex-col ${isFoundation ? "border-orange shadow-md shadow-orange/10 hover:shadow-orange/20" : "border-gray-200 hover:border-orange/50"} ${tier.pages.length === 1 ? "md:flex-row md:items-center md:gap-8" : ""}`}>
                        {isFoundation && (
                          <span className="absolute -top-3 left-7 bg-orange text-white text-xs font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                            Start Here
                          </span>
                        )}
                        <div className={tier.pages.length === 1 ? "md:flex-shrink-0" : ""}>
                          <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-5">
                            <page.icon size={24} className="text-orange" />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-xl font-display text-[#1A1A1A] mb-3">{page.name}</h3>
                          <p className="text-[#4A4A4A] font-sans text-sm leading-relaxed mb-5 flex-1">{page.description}</p>
                          <span className="text-orange font-sans font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                            {page.linkText} <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              Proof, Not Promises
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1A1A1A] mb-3">
              When the Three Layers Work Together
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-[#F5F5F5] border border-gray-200 rounded-2xl p-8 md:p-10">
              <p className="text-[#1A1A1A] font-sans text-lg md:text-xl leading-relaxed italic mb-5">
                "Within 90 days of launch, our inquiry form submissions roughly tripled compared to the prior site. We're now ranking on Google for searches we never showed up for, and prospective clients are calling us before they call our competitors."
              </p>
              <p className="text-[#4A4A4A] font-sans text-sm uppercase tracking-widest font-semibold">— Practice owner, Johnson & Associates CPA</p>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-orange font-display text-3xl md:text-4xl mb-1">3×</p>
                  <p className="text-[#4A4A4A] font-sans text-xs leading-snug">Inquiry submissions in 90 days</p>
                </div>
                <div className="text-center">
                  <p className="text-orange font-display text-3xl md:text-4xl mb-1">−40%</p>
                  <p className="text-[#4A4A4A] font-sans text-xs leading-snug">Bounce rate reduction</p>
                </div>
                <div className="text-center">
                  <p className="text-orange font-display text-3xl md:text-4xl mb-1">Page 1</p>
                  <p className="text-[#4A4A4A] font-sans text-xs leading-snug">Google ranking, priority searches</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-orange py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
              See How It All Comes Together — For Your Business
            </h2>
            <p className="text-white/90 font-sans text-lg md:text-xl mb-8 leading-relaxed">
              Book a free 20-minute call. We'll evaluate your current online presence and show you exactly which parts of our strategy would have the biggest impact on your business.
            </p>
            <CTAButton href="/get-started" variant="dark" className="px-10 py-5 text-lg">
              Get a Free Demo
            </CTAButton>
            <p className="text-white/70 font-sans text-sm mt-4">No commitment. No obligation. Just a clearer path forward.</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
