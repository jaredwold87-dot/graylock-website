import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Home as HomeIcon,
  Workflow,
  DollarSign,
  Briefcase,
  Users,
  HelpCircle,
  Mail,
  Palette,
  Search,
  MousePointerClick,
  MapPin,
  Magnet,
  ShieldCheck,
  Layers,
  Building2,
  HardHat,
  Calculator,
  Stethoscope,
  Brain,
  Smile,
  Focus,
  Dumbbell,
  Activity,
  FileText,
  ScrollText,
  BookOpen,
} from "lucide-react";

type SitemapLink = {
  label: string;
  path: string;
  description?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
};

type SitemapGroup = {
  title: string;
  intro: string;
  links: SitemapLink[];
};

const GROUPS: SitemapGroup[] = [
  {
    title: "Main",
    intro: "The pages that introduce who we are and how we work.",
    links: [
      { label: "Home", path: "/", icon: HomeIcon, description: "Subscription websites for trust-based businesses." },
      { label: "How It Works", path: "/how-it-works", icon: Workflow, description: "Our 7–10 day build process, step by step." },
      { label: "Pricing", path: "/pricing", icon: DollarSign, description: "Flat monthly subscription. No long-term contracts." },
      { label: "Our Work", path: "/work", icon: Briefcase, description: "Case studies and recent client builds." },
      { label: "About", path: "/about", icon: Users, description: "Who we are and why we built Graylock." },
      { label: "FAQ", path: "/faq", icon: HelpCircle, description: "Common questions about subscriptions, ownership, and timelines." },
      { label: "Get Started", path: "/get-started", icon: Mail, description: "Request your free homepage demo." },
    ],
  },
  {
    title: "Services",
    intro: "What we build and run for clients on the Graylock subscription.",
    links: [
      { label: "Custom Website Design", path: "/website-design", icon: Palette, description: "Conversion-built, mobile-first websites." },
      { label: "Local SEO", path: "/seo-for-small-business", icon: Search, description: "Rank in your city and on Google Maps." },
      { label: "Funnel Pages", path: "/funnel-pages", icon: MousePointerClick, description: "High-intent landing pages that convert." },
      { label: "Google Business Profile", path: "/google-business-profile", icon: MapPin, description: "Optimized profile, reviews, posts, photos." },
      { label: "Lead Generation", path: "/lead-generation-for-small-business", icon: Magnet, description: "Forms, intake flows, and lead magnets." },
      { label: "Compliance", path: "/compliance", icon: ShieldCheck, description: "Federal, state, and industry rules built into every site." },
      { label: "Our Full Strategy", path: "/our-strategy", icon: Layers, description: "How design, SEO, GBP, funnels, and lead gen work together." },
    ],
  },
  {
    title: "Industries — Local Service Businesses",
    intro: "Trust-based service businesses we build for outside healthcare.",
    links: [
      { label: "Home Builders", path: "/websites-for-home-builders", icon: HomeIcon, description: "Custom homes, renovations, design-build." },
      { label: "Industrial Construction", path: "/websites-for-industrial-construction", icon: HardHat, description: "Contractors, trades, manufacturing." },
      { label: "Accounting Firms", path: "/websites-for-accountants", icon: Calculator, description: "CPAs, bookkeeping, tax, and advisory." },
      { label: "Other Local Service Businesses", path: "/other-service-businesses", icon: Building2, description: "Trust-based pros — law, finance, and more." },
    ],
  },
  {
    title: "Industries — Healthcare Practices",
    intro: "Private practices we build HIPAA-aware, accessible websites for.",
    links: [
      { label: "Physicians", path: "/websites-for-physicians", icon: Stethoscope, description: "Family, internal, and specialty practices." },
      { label: "Psychologists", path: "/websites-for-psychologists", icon: Brain, description: "Testing, therapy, and evaluations." },
      { label: "Dentists", path: "/websites-for-dentists", icon: Smile, description: "Family, cosmetic, implants, ortho." },
      { label: "Optometrists", path: "/websites-for-optometrists", icon: Focus, description: "Exams, contacts, frames, dry eye." },
      { label: "Physical Therapists", path: "/websites-for-physical-therapists", icon: Dumbbell, description: "Rehab, sports, ortho, and pain." },
      { label: "Chiropractors", path: "/websites-for-chiropractors", icon: Activity, description: "Adjustments, posture, sports recovery." },
    ],
  },
  {
    title: "Resources & Funnels",
    intro: "Free guides and industry-specific funnels.",
    links: [
      { label: "Home Builders Playbook", path: "/home-builders-playbook", icon: BookOpen, description: "Free guide for custom home builders." },
      { label: "Accountants Funnel", path: "/accountants", icon: Calculator, description: "Targeted landing page for accounting firms." },
    ],
  },
  {
    title: "Legal & Policies",
    intro: "Our terms, privacy practices, and compliance approach.",
    links: [
      { label: "Compliance", path: "/compliance", icon: ShieldCheck, description: "Our full compliance approach, end to end." },
      { label: "Privacy Policy", path: "/privacy-policy", icon: FileText, description: "How we collect, use, and protect your information." },
      { label: "Terms of Service", path: "/terms-of-service", icon: ScrollText, description: "The terms that govern use of our services." },
    ],
  },
];

export default function Sitemap() {
  const totalPages = new Set(GROUPS.flatMap((g) => g.links.map((l) => l.path))).size;

  return (
    <>
      <SEO
        title="Sitemap | Graylock Digital"
        description="A complete map of Graylock Digital — every page on our site, organized by section. Find services, industries, resources, and legal pages all in one place."
        url="https://graylockdigital.com/sitemap"
      />

      <section className="bg-offwhite pt-28 pb-14 md:pt-32 md:pb-16 px-6 md:px-12 text-charcoal">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-4">Sitemap</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-5 leading-tight">
              Every page on Graylock Digital.
            </h1>
            <p className="text-gray-700 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
              A map of the whole site, grouped by section. {totalPages} pages in total. If you&rsquo;re looking for the machine-readable version for search engines, it lives at{" "}
              <a href="/sitemap.xml" className="text-orange hover:underline font-semibold">/sitemap.xml</a>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-14 md:space-y-16">
          {GROUPS.map((group) => (
            <ScrollReveal key={group.title}>
              <div>
                <div className="border-b border-gunmetal/60 pb-4 mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-2 leading-snug">
                    {group.title}
                  </h2>
                  <p className="text-stone font-sans text-sm md:text-base leading-relaxed max-w-2xl">
                    {group.intro}
                  </p>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {group.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={`${group.title}-${link.path}-${link.label}`}>
                        <Link
                          href={link.path}
                          className="group flex items-start gap-4 p-4 md:p-5 rounded-lg bg-navy/40 border border-gunmetal/50 hover:border-orange/60 hover:bg-navy/70 transition-all duration-200"
                        >
                          {Icon && (
                            <div className="w-10 h-10 rounded-lg bg-orange/10 border border-orange/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange/20 transition-colors">
                              <Icon size={18} className="text-orange" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline gap-2 flex-wrap">
                              <span className="text-offwhite font-sans font-semibold text-base md:text-[17px] leading-tight group-hover:text-orange transition-colors">
                                {link.label}
                              </span>
                              <span className="text-stone/60 font-mono text-xs truncate">
                                {link.path}
                              </span>
                            </div>
                            {link.description && (
                              <p className="text-stone font-sans text-sm leading-snug mt-1">
                                {link.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-navy py-14 md:py-16 px-6 md:px-12 border-t border-gunmetal/40">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-4 leading-snug">
              Can&rsquo;t find what you&rsquo;re looking for?
            </h2>
            <p className="text-stone font-sans text-base md:text-[17px] leading-relaxed mb-6">
              Send us a note and we&rsquo;ll point you to the right page &mdash; or build you one.
            </p>
            <Link
              href="/get-started"
              className="inline-block bg-orange text-white text-sm font-bold px-6 py-3 rounded hover:bg-orange/90 transition-all duration-300 shadow-[0_2px_12px_rgba(46,123,180,0.25)] hover:shadow-[0_4px_20px_rgba(46,123,180,0.4)] hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
