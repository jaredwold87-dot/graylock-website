import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  HardHat,
  Globe,
  Search,
  Phone,
  Clock,
  Camera,
  Eye,
  MapPin,
  Smartphone,
  ShieldCheck,
  Users,
  FileText,
  Wrench,
  Hammer,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Contractor Websites | Custom Built in 3–5 Days | $79/mo | Graylock Digital",
    description:
      "Graylock builds high-converting contractor websites that get you more bids and project calls. Fast builds, local SEO, photo galleries, quote forms. Starting at $79/mo. Free demo first.",
    url: "https://graylockdigital.com/websites-for-contractors",
  },
  hero: {
    badge: "For Contractors & Tradespeople",
    badgeIcon: HardHat,
    h1: "Win More Jobs With a Website That",
    h1Highlight: "Makes You Look Like the Pro You Are.",
    subheadline:
      "Homeowners judge contractors online before they ever pick up the phone. Graylock builds fast-loading, professional contractor websites with project galleries, quote forms, and local SEO — built and live within 3–5 business days on average.",
    cta: "Get Your Free Website Review",
    backgroundImage: `${import.meta.env.BASE_URL}hero-contractors.png`,
    trustSignals: [
      "Project gallery built in",
      "Quote request forms",
      "Local SEO optimized",
      "3–5 day build",
    ],
  },
  specialties: {
    headline: "We Build Websites for Every Trade",
    tags: [
      "General Contractors",
      "Roofers",
      "Plumbers",
      "Electricians",
      "HVAC",
      "Landscapers",
      "Painters",
      "Handymen",
      "Remodelers",
      "Flooring",
      "Fencing",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Good Work Deserves to Be Found",
    cards: [
      {
        icon: Eye,
        title: "Homeowners check you out online",
        description:
          "Your site makes you look less credible than you are. First impressions happen online — and yours isn't helping.",
      },
      {
        icon: Search,
        title: "Not showing up on Google",
        description:
          "When locals search 'contractor near me' or your trade, you're nowhere to be found. Your competitors are getting those calls.",
      },
      {
        icon: Camera,
        title: "No way to showcase your work",
        description:
          "You have amazing project photos on your phone but no professional way to display them to potential clients.",
      },
      {
        icon: Phone,
        title: "Relying 100% on referrals",
        description:
          "Word of mouth is great, but you're leaving online leads on the table every single day.",
      },
      {
        icon: Clock,
        title: "New websites sound expensive and slow",
        description:
          "Getting a website built feels like a massive, complicated, expensive project you don't have time for.",
      },
      {
        icon: Globe,
        title: "Your competitor is winning jobs over you",
        description:
          "A contractor with an inferior crew is getting hired because they look better online. That's fixable.",
      },
    ],
  },
  benefits: {
    headline: "Everything a Contractor Website Needs — Nothing You Don't",
    items: [
      {
        title: "Project Gallery Built In",
        description:
          "Show off your best work with a beautiful photo gallery. We set it up from the photos you already have.",
      },
      {
        title: "Quote Request Forms",
        description:
          "Capture leads 24/7, even when you're on a job site. Every visitor can become a potential project.",
      },
      {
        title: "Local SEO Optimized",
        description:
          "Show up when homeowners in your area search for your trade. We optimize for the keywords that matter.",
      },
      {
        title: "Looks Professional on Every Phone",
        description:
          "Over 70% of contractor searches happen on mobile. Your site will look perfect on every device.",
      },
      {
        title: "Built in 3–5 Business Days",
        description:
          "No months of waiting. You approve, we build, and you're live within one business week.",
      },
      {
        title: "We Handle Everything",
        description:
          "Hosting, maintenance, and updates are all included. You focus on the work.",
      },
    ],
  },
  features: {
    headline: "Everything Your Contractor Website Includes",
    items: [
      {
        icon: Camera,
        title: "Project Photo Gallery",
        description: "Showcase your best work with professional before/after photos.",
      },
      {
        icon: FileText,
        title: "Quote Request Form",
        description: "Capture leads 24/7 with a built-in quote request form.",
      },
      {
        icon: MapPin,
        title: "Service Area Map",
        description: "Show homeowners exactly which areas you serve.",
      },
      {
        icon: Search,
        title: "Assistance with Google Business Profile Setup (Standard & Growth)",
        description: "Get set up on Google Maps and local search results.",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Looks perfect on phones where most contractor searches happen.",
      },
      {
        icon: Globe,
        title: "Local SEO Foundation",
        description: "Optimized for your trade + city searches from day one.",
      },
      {
        icon: ShieldCheck,
        title: "License & Certification Display",
        description: "Show off your credentials and build instant trust.",
      },
      {
        icon: Wrench,
        title: "Fast-Loading Pages",
        description: "Quick load times so impatient homeowners don't bounce.",
      },
    ],
  },
  process: {
    headline: "From Call to Live in Days, Not Months",
    steps: [
      {
        title: "Free 20-Min Call",
        description:
          "We learn about your trade, service area, and what makes your business stand out.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We evaluate your current presence and build a custom homepage design for your review.",
      },
      {
        title: "Review & Approve",
        description:
          "We walk through the design together. You give feedback, we refine until it's perfect.",
      },
      {
        title: "Launch & Grow",
        description:
          "Your site goes live and leads and quote requests start coming in.",
      },
    ],
  },
  testimonials: {
    featured: {
      name: "Marcus T.",
      title: "General Contractor",
      location: "Phoenix, AZ",
      quote:
        "Agencies wanted $10k+ to build a site for my construction business. Graylock got me up and running for the setup fee, and the monthly maintenance gives me total peace of mind. The quality of leads has been incredible.",
    },
    others: [
      {
        name: "James L.",
        title: "HVAC Specialist",
        location: "Denver, CO",
        quote:
          "Our new site looks so much more professional. People tell us it's what made them call us over the competition.",
      },
      {
        name: "Tony M.",
        title: "Licensed Electrician",
        location: "Las Vegas, NV",
        quote:
          "I was getting zero calls from my website. Graylock rebuilt it, added a quote form, and now I get 5–6 new leads a week. Unreal difference.",
      },
    ],
  },
  faqs: [
    {
      q: "Can my contractor website include a photo gallery of past projects?",
      a: "Absolutely. Every Graylock website includes a project gallery section where we showcase your best work with high-quality images. We can set it up from the photos you already have on your phone.",
    },
    {
      q: "Will my site show up when homeowners search for my trade in my area?",
      a: "Yes. Every site we build includes a local SEO foundation — optimized page titles, location-specific content, schema markup, and assistance with Google Business Profile setup on Standard and Growth plans.",
    },
    {
      q: "I'm not tech-savvy. How much do I need to do?",
      a: "Almost nothing. We handle everything — design, build, copy, hosting, and maintenance. You just send us your photos, logo (or we'll work without one), and basic business info, and we do the rest.",
    },
    {
      q: "What if I work in multiple service areas?",
      a: "We can build service area pages for each city or county you cover. Standard plan (7 pages) and Growth plan (14 pages) are ideal for contractors serving multiple areas.",
    },
    {
      q: "Can I add an online quote request form?",
      a: "Yes — every Graylock plan includes a lead capture / quote request form. Standard and Growth plans include enhanced forms with more fields and lead activity tracking.",
    },
  ],
  bottomCta: {
    headline: "Stop Losing Jobs to Contractors With Better Websites",
    subtext:
      "Book a free 20-minute call. We'll build you a custom homepage demo showing exactly how your site could look — for free, no obligation.",
    button: "Get Your Free Website Review",
  },
  relatedPages: [
    { name: "Small Business Owners", path: "/websites-for-small-business-owners" },
    { name: "House Cleaners", path: "/websites-for-house-cleaners" },
    { name: "Solo Practitioners", path: "/websites-for-solo-practitioners" },
    { name: "Accountants", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Contractor Websites | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-contractors",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can my contractor website include a photo gallery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Every Graylock website includes a project gallery section.",
        },
      },
    ],
  },
};

export default function Contractors() {
  return <IndustryLandingPage data={data} />;
}
