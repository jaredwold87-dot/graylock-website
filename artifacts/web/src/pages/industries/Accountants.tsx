import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Calculator,
  Globe,
  Search,
  Phone,
  Clock,
  Eye,
  ShieldCheck,
  Users,
  FileText,
  Smartphone,
  BarChart3,
  Building2,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for CPAs & Accounting Firms | Graylock Digital",
    description:
      "Graylock builds custom, SEO-optimized websites for CPAs, accountants, and tax professionals. Services pages, local SEO, client inquiry forms. Built in 7–10 business days. No long-term contracts.",
    url: "https://graylockdigital.com/websites-for-accountants",
  },
  hero: {
    badge: "For CPAs & Accounting Firms",
    badgeIcon: Calculator,
    h1: "Your Clients Trust You With Their Finances.",
    h1Highlight: "Does Your Website Earn That Same Trust?",
    subheadline:
      "When a business owner searches for a new CPA, your website is your first impression — and for most accounting firms, it's the weakest link. We build sharp, professional websites for CPAs and accounting firms that rank locally, showcase your expertise, and make it easy for prospects to reach out. Fully managed — so you can focus on your clients.",
    cta: "Schedule a Free Consultation",
    backgroundImage: `${import.meta.env.BASE_URL}hero-accountants.jpg`,
    trustSignals: [
      "Services pages for every offering",
      "Local SEO included",
      "Free demo first",
      "7–10 day build",
    ],
  },
  specialties: {
    headline: "Websites for Every Type of Accounting Professional",
    tags: [
      "CPAs",
      "Tax Preparers",
      "Bookkeepers",
      "Payroll Services",
      "CFO Advisory",
      "Financial Planning",
      "Business Consulting",
      "Enrolled Agents",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Your Website Should Be Working as Hard as You Do During Tax Season",
    cards: [
      {
        icon: Eye,
        title: "Your website looks dated",
        description:
          "Not the impression you want to make with high-value clients who need to trust you with their finances.",
      },
      {
        icon: Search,
        title: "Not showing up on Google",
        description:
          "When locals search for a CPA or tax professional, your competitors appear first. You're invisible.",
      },
      {
        icon: Globe,
        title: "Referrals check your site and leave",
        description:
          "You're relying on referrals but your website loses prospects when they check you out online.",
      },
      {
        icon: FileText,
        title: "Services aren't clearly communicated",
        description:
          "Your current site doesn't clearly communicate your services, specializations, and what makes your firm different.",
      },
      {
        icon: Clock,
        title: "Tax season is too busy for this",
        description:
          "You've been meaning to fix your website for years, but tax season is always around the corner.",
      },
      {
        icon: Phone,
        title: "Three years and counting",
        description:
          "You've known your website needs work for years. Every month that passes is another month of missed opportunities.",
      },
    ],
  },
  benefits: {
    headline: "Finally — A Website That Matches Your Professional Standards",
    items: [
      {
        title: "Services Pages for Every Offering",
        description:
          "Tax prep, bookkeeping, payroll, advisory — each service gets its own SEO-optimized page.",
      },
      {
        title: "Local SEO That Works",
        description:
          "Clients searching 'CPA near me' find you first. We optimize for the searches that matter.",
      },
      {
        title: "Professional Credibility Design",
        description:
          "The kind of polished, authoritative design that reassures high-value clients.",
      },
      {
        title: "Google Business Profile Setup",
        description:
          "Included so you show up on Google Maps and local results.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "Before tax season or after — your call. We move fast so you don't have to wait.",
      },
      {
        title: "Updates Included",
        description:
          "Add new services, team members, or seasonal messaging anytime. We handle it for you.",
      },
    ],
  },
  features: {
    headline: "Everything Your Accounting Firm Website Includes",
    items: [
      {
        icon: FileText,
        title: "Services Pages",
        description: "Tax, bookkeeping, payroll, advisory — each with its own dedicated page.",
      },
      {
        icon: Users,
        title: "Team Bio Pages",
        description: "Individual pages for each partner and team member with credentials.",
      },
      {
        icon: Phone,
        title: "Contact & Appointment Forms",
        description: "Client inquiry and appointment request forms built in.",
      },
      {
        icon: Search,
        title: "Google Business Profile",
        description: "Full setup so you appear in local map results.",
      },
      {
        icon: Globe,
        title: "Local SEO Foundation",
        description: "Optimized for your firm + city searches from day one.",
      },
      {
        icon: BarChart3,
        title: "Client Testimonials Section",
        description: "Showcase reviews and social proof from satisfied clients.",
      },
      {
        icon: ShieldCheck,
        title: "Secure Inquiry Forms",
        description: "Professional, secure forms for client communications.",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Looks sharp on every device your clients use.",
      },
    ],
  },
  process: {
    headline: "From Call to Live in Days, Not Months",
    steps: [
      {
        title: "Tell Us About Your Firm",
        description:
          "A 20-minute call about your specializations, ideal clients, and what you want your website to convey.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that reflects your firm's credibility and expertise.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through the design together. Refine until every detail represents your firm perfectly.",
      },
      {
        title: "Launch & Convert",
        description:
          "Your new site goes live and starts converting searchers into clients.",
      },
    ],
  },
  testimonials: {
    featured: {
      name: "David K.",
      title: "CPA & Tax Advisor",
      location: "Henderson, NV",
      quote:
        "I used to spend hours trying to fix my Wix site. Now I just email Tim and it's done the next day. It's like having a full-time web developer on staff for a fraction of the cost. The new site looks amazing.",
    },
    others: [
      {
        name: "Jennifer P.",
        title: "Bookkeeper",
        location: "Boise, ID",
        quote:
          "I was invisible on Google and losing clients to the big chains. Now my site shows up for bookkeeping searches in my area, and I've picked up several new monthly clients.",
      },
      {
        name: "Robert H.",
        title: "Enrolled Agent",
        location: "Sacramento, CA",
        quote:
          "Tax season used to be the only time I got calls. Now my website brings in new clients year-round. Graylock made the whole process painless.",
      },
    ],
  },
  faqs: [
    {
      q: "Can my website include separate pages for different services like tax, bookkeeping, and payroll?",
      a: "Yes. We build service-specific pages for every offering your firm provides. This also helps with SEO — separate pages for 'tax preparation', 'bookkeeping services', and 'payroll' each rank for their own keywords.",
    },
    {
      q: "Will my accounting website show up when locals search for a CPA?",
      a: "Every Graylock site includes a local SEO foundation. Group Practice and Enterprise plans include full local SEO optimization and Google Business Profile setup — critical for showing up in 'CPA near me' searches.",
    },
    {
      q: "I'm too busy during tax season to work on a website. Can we start now?",
      a: "We built our process to be fast and low-effort on your end. Most of the information we need can be gathered in a 20-minute call. You review and approve, we do the rest. 7–10 business days from approval to live on average.",
    },
    {
      q: "Can we add team member bios and photos?",
      a: "Yes — team pages with individual bios and headshots are available on all plans. They're especially important for accounting firms where clients want to know who they're working with.",
    },
    {
      q: "Do you offer any kind of client portal integration?",
      a: "Our standard plans don't include a document portal, but our Enterprise and Custom plans can include secure inquiry forms and we can discuss integration options on a Custom plan.",
    },
  ],
  bottomCta: {
    headline: "Stop Sending Prospects to a Website That Undersells Your Expertise",
    subtext:
      "Book a free 20-minute call. We'll evaluate your current site and show you a custom demo of what your accounting firm's website could become — before you pay us anything.",
    button: "Schedule a Free Consultation",
  },
  relatedPages: [],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for CPAs & Accountants | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-accountants",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can my website include separate pages for different services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build service-specific pages for every offering your firm provides.",
        },
      },
    ],
  },
};

export default function Accountants() {
  return <IndustryLandingPage data={data} />;
}
