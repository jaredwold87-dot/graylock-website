import { SEO } from "@/components/SEO";
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

const STRATEGY_PAGES: { name: string; path: string; description: string; icon: LucideIcon }[] = [
  {
    name: "Website Design",
    path: "/website-design",
    description: "What separates a website that converts from one that collects dust — and how Graylock designs for results.",
    icon: Palette,
  },
  {
    name: "SEO",
    path: "/seo-for-small-business",
    description: "How search engine optimization works for local service businesses — metadata, backlinks, local search, and more.",
    icon: Search,
  },
  {
    name: "GEO",
    path: "/geo-generative-engine-optimization",
    description: "The emerging practice of getting your business recommended by ChatGPT, Google AI Overviews, and Perplexity.",
    icon: Bot,
  },
  {
    name: "Funnel Pages",
    path: "/funnel-pages",
    description: "Targeted landing pages that rank for specific services and locations — and convert searchers into leads.",
    icon: Layers,
  },
  {
    name: "Google Business Profiles",
    path: "/google-business-profile",
    description: "The single most powerful free tool for local visibility — and how to optimize it for maximum impact.",
    icon: MapPin,
  },
  {
    name: "Lead Generation",
    path: "/lead-generation-for-small-business",
    description: "How everything Graylock builds comes together to generate qualified leads for your business every day.",
    icon: Target,
  },
];

export default function OurStrategy() {
  return (
    <>
      <SEO
        title="Our Digital Strategy for Professional Practices | Graylock Digital"
        description="Graylock's complete approach to getting professional practices found online — website design, SEO, GEO, funnel pages, Google Business Profiles, and lead generation."
        url="https://graylockdigital.com/our-strategy"
      />

      <section className="relative bg-charcoal pt-24 pb-20 md:pt-32 md:pb-28 px-6 md:px-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-strategy-overview.png)` }}
        />
        <div className="absolute inset-0 bg-charcoal/85" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-4">
              OUR STRATEGY
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-offwhite mb-6 leading-[1.1]">
              The Complete Digital Strategy That Gets Professional Practices Found, Trusted, and Booked
            </h1>
            <p className="text-offwhite/80 font-sans text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Every element of what we build is connected to one goal: generating qualified leads for your business. Here's how each piece works — and why it matters.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRATEGY_PAGES.map((page, i) => (
              <ScrollReveal key={page.path} delay={i * 0.05}>
                <Link href={page.path} className="block h-full">
                  <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-orange/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-5">
                      <page.icon size={24} className="text-orange" />
                    </div>
                    <h2 className="text-xl font-display text-[#1A1A1A] mb-3">{page.name}</h2>
                    <p className="text-[#4A4A4A] font-sans text-sm leading-relaxed mb-6 flex-1">
                      {page.description}
                    </p>
                    <span className="text-orange font-sans font-semibold text-sm inline-flex items-center gap-2">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
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
              Schedule a Free Consultation
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
