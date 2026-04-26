import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import IndustrialConstructionComplianceSection from "@/components/compliance/IndustrialConstructionComplianceSection";
import {
  HardHat,
  Search,
  Clock,
  Eye,
  FileText,
  Smartphone,
  ClipboardList,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for Industrial & Construction Companies | Graylock Digital",
    description:
      "Graylock builds custom, SEO-optimized websites for general contractors, commercial construction, industrial services, manufacturing, and trades. Project galleries, capability pages, RFQ forms. Built in 7–10 business days. No long-term contracts.",
    url: "https://graylockdigital.com/websites-for-industrial-construction",
  },
  hero: {
    badge: "For Industrial & Construction",
    badgeIcon: HardHat,
    h1: "You Build Serious Work.",
    h1Highlight: "Your Website Should Prove It.",
    subheadline:
      "GCs, subs, fabricators, and industrial service companies win bids on credibility — and that starts the moment a project manager opens your site. We build modern, locally-ranked websites that showcase your capabilities, your past projects, and the size of jobs you can handle, so the right RFQs land in your inbox.",
    cta: "Get a Free Website Review",
    ctaSubtext: "20-minute call · Custom homepage demo · No obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-industrial-construction.jpg`,
    trustSignals: [
      "Built for contractors & trades",
      "Project & capability pages",
      "Local SEO included",
      "Fully managed for you",
    ],
  },
  specialties: {
    headline: "Websites for Every Type of Industrial & Construction Company",
    tags: [
      "General Contractors",
      "Commercial Construction",
      "Design-Build Firms",
      "Industrial Services",
      "Manufacturing & Fabrication",
      "Mechanical & HVAC",
      "Electrical Contractors",
      "Plumbing & Piping",
      "Concrete & Site Work",
      "Roofing & Exteriors",
      "Specialty Trades",
      "Facility Maintenance",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Project Managers and Owners Vet You Online Before They Ever Pick Up the Phone",
    cards: [
      {
        icon: Eye,
        title: "Your site looks smaller than your jobs",
        description:
          "You handle six- and seven-figure projects, but your website looks like a one-truck operation. Bigger clients quietly move on.",
      },
      {
        icon: Search,
        title: "Not ranking for the work you actually do",
        description:
          "Searches like 'commercial general contractor in [city]' or 'industrial fabrication near me' send leads straight to your competitors.",
      },
      {
        icon: ClipboardList,
        title: "No clear way for GCs to send an RFQ",
        description:
          "Bid invitations and project inquiries die in a generic contact form — or worse, an email link nobody checks.",
      },
      {
        icon: FileText,
        title: "Past projects buried in a Dropbox folder",
        description:
          "You've completed great work, but there's nowhere on your site that shows the scope, scale, and finish quality of what you've delivered.",
      },
      {
        icon: Smartphone,
        title: "Unreadable on a phone in the field",
        description:
          "Foremen, supers, and PMs are checking your site from a job site. If it's slow or broken on mobile, they bounce.",
      },
      {
        icon: Clock,
        title: "You've been 'going to fix it' for years",
        description:
          "Between bids, scheduling, and crews, the website never gets touched. Every quarter you wait costs you the jobs you'd rather be running.",
      },
    ],
  },
  benefits: {
    headline: "A Construction Website Built to Win Better Work",
    items: [
      {
        title: "Capability Pages That Rank",
        description:
          "Each service line — site work, steel, mechanical, fit-out, fabrication — gets its own SEO-optimized page targeting the searches PMs actually use.",
      },
      {
        title: "Project & Past-Work Galleries",
        description:
          "Show off completed jobs with photos, project size, scope, and sector so prospects can see you've handled work like theirs.",
      },
      {
        title: "RFQ & Bid Inquiry Forms",
        description:
          "Structured forms that capture project type, location, timeline, and budget — so qualified opportunities land cleanly in your inbox.",
      },
      {
        title: "Local SEO for Service Areas",
        description:
          "Optimized for 'commercial contractor in [city]', 'industrial services near me', and trade-specific searches across the markets you serve.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No six-month rebuild that goes nowhere. From kickoff to launch in under two weeks.",
      },
      {
        title: "Fully Managed — You Stay in the Field",
        description:
          "Hosting, updates, SEO, new project additions, and support all included. Email us when a job wraps and the case study is up by next week.",
      },
    ],
  },
  process: {
    headline: "From Kickoff Call to a Site That Wins Bids",
    steps: [
      {
        title: "Tell Us About Your Company",
        description:
          "A 20-minute call about your trades, target sectors, project size, and the kinds of jobs you want more of.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that shows the scale and quality of work your company is built to deliver.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through every detail — capability pages, project gallery, RFQ form — until it represents your company perfectly.",
      },
      {
        title: "Launch & Grow",
        description:
          "Your site goes live and starts pulling qualified bid invitations and service inquiries from your service area.",
      },
    ],
  },
  faqs: [
    {
      q: "Do you build websites for both general contractors and specialty trades?",
      a: "Yes. We build sites for GCs, design-build firms, and every flavor of specialty trade — mechanical, electrical, plumbing, steel, concrete, roofing, site work, and more. Each capability gets its own page so you rank for the work you actually do.",
    },
    {
      q: "Can you showcase our past projects with photos and details?",
      a: "Absolutely. A project gallery with case studies — including project size, scope, sector, and photos — is one of the highest-impact pages for industrial and construction sites. You provide the photos and a few details; we handle the layout and copy.",
    },
    {
      q: "Will my website help us get on more GC bid lists?",
      a: "That's the goal. We build capability pages, past-project galleries, and an RFQ-friendly inquiry form that together give estimators and PMs everything they need to qualify you and add you to their bid lists.",
    },
    {
      q: "We serve multiple cities and counties. Can the site rank in all of them?",
      a: "Yes. We set up service-area pages and local SEO for the markets you actually want work in, plus optimize your Google Business Profile so you appear in local map results across your service territory.",
    },
    {
      q: "How long does it take to launch?",
      a: "Most companies go live in 7–10 business days from kickoff. We do the heavy lifting — copy, design, SEO, image selection — so your team usually spends under an hour total reviewing drafts.",
    },
  ],
  pricingHeadline: "Pricing Built for Single-Crew Trades and Multi-Division Contractors",
  bottomCta: {
    headline: "There Are Projects in Your Service Area Going Out to Bid Right Now",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your construction or industrial website could look like — and build a custom homepage demo before you commit to anything.",
    button: "Get a Free Demo",
  },
  relatedPages: [
    { name: "Accounting Firms", path: "/websites-for-accountants" },
    { name: "Other Service Businesses", path: "/other-service-businesses" },
    { name: "Chiropractors", path: "/websites-for-chiropractors" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Industrial & Construction Companies | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-industrial-construction",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build websites for both general contractors and specialty trades?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build sites for GCs, design-build firms, and specialty trades — mechanical, electrical, plumbing, steel, concrete, roofing, site work, and more. Each capability gets its own page so you rank for the work you actually do.",
        },
      },
      {
        "@type": "Question",
        name: "Will my website help us get on more GC bid lists?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build capability pages, past-project galleries, and an RFQ-friendly inquiry form that together give estimators and PMs everything they need to qualify you and add you to their bid lists.",
        },
      },
    ],
  },
};

export default function IndustrialConstruction() {
  return <IndustryLandingPage data={data} complianceSection={<IndustrialConstructionComplianceSection />} />;
}
