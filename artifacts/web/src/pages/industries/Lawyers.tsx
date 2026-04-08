import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Scale,
  Globe,
  Search,
  Phone,
  Clock,
  Eye,
  ShieldCheck,
  Users,
  FileText,
  Smartphone,
  DollarSign,
  Gavel,
  UserCheck,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for Lawyers & Law Firms | Starting at $199/mo | Graylock Digital",
    description:
      "Graylock builds custom, SEO-optimized websites for solo attorneys and law firms. Practice area pages, attorney bios, client intake forms. Built in 7–10 business days. Starting at $199/mo. Free demo.",
    url: "https://graylockdigital.com/websites-for-lawyers",
  },
  hero: {
    badge: "For Attorneys & Law Firms",
    badgeIcon: Scale,
    h1: "A Law Firm Website That",
    h1Highlight: "Converts Searchers Into Clients.",
    subheadline:
      "One new client from your website pays for years of service. We build credible, SEO-optimized websites for solo attorneys and law firms — with practice area pages, attorney bios, and intake forms that turn visitors into consultations. Starting at $199/month.",
    cta: "Book Your Free Website Review",
    backgroundImage: `${import.meta.env.BASE_URL}hero-lawyers.jpg`,
    trustSignals: [
      "Practice area pages",
      "24/7 intake forms",
      "Local SEO included",
      "Starting at $199/month",
    ],
  },
  specialties: {
    headline: "We Build Websites for Attorneys in Every Practice Area",
    tags: [
      "Family Law",
      "Personal Injury",
      "Criminal Defense",
      "Immigration",
      "Estate Planning",
      "Business Law",
      "Real Estate",
      "Bankruptcy",
      "Employment Law",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Every Day Your Website Underperforms, You're Leaving Cases on the Table",
    cards: [
      {
        icon: Eye,
        title: "Potential clients Google you and call someone else",
        description:
          "They search for an attorney, find your site, and it doesn't inspire the confidence they need to pick up the phone.",
      },
      {
        icon: Search,
        title: "Not ranking for your practice area",
        description:
          "Your website doesn't show up when people in your city search for your specific practice area. Your competitors do.",
      },
      {
        icon: Phone,
        title: "No intake form for after-hours leads",
        description:
          "Prospects can't easily reach you at 11pm when they decide they need an attorney. Those leads go to someone with a form.",
      },
      {
        icon: FileText,
        title: "Practice areas aren't clearly explained",
        description:
          "Your site doesn't clearly explain who you help and what you do. Visitors leave confused.",
      },
      {
        icon: DollarSign,
        title: "Template platforms charge more for less",
        description:
          "LawLytics and FindLaw charge $150–$300+/month for template-based sites. Graylock builds truly custom sites starting at $199/month.",
      },
      {
        icon: Clock,
        title: "Client work always comes first",
        description:
          "You've been meaning to fix your website for years but billable hours always take priority. We get it.",
      },
    ],
  },
  benefits: {
    headline: "A Law Firm Website Built to Win Cases — Online",
    items: [
      {
        title: "Practice Area Pages That Rank",
        description:
          "Each service gets its own SEO-optimized page — family law, criminal defense, estate planning, and more.",
      },
      {
        title: "24/7 Intake Forms",
        description:
          "Capture potential clients the moment they're ready to act, even at midnight. Every inquiry is a potential case.",
      },
      {
        title: "Attorney Bio Pages",
        description:
          "Build personal credibility and connection with prospects through professional, well-written bios.",
      },
      {
        title: "Starting at $199/month",
        description:
          "Less than what most legal website platforms charge for a template. You get a fully custom site.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No months of waiting. From consultation to live website in one business week.",
      },
      {
        title: "US-Based Team",
        description:
          "No overseas outsourcing on your client-facing materials. Real people, real accountability.",
      },
    ],
  },
  features: {
    headline: "Everything Your Law Firm Website Includes",
    items: [
      {
        icon: Gavel,
        title: "Practice Area Pages",
        description: "Each practice area gets its own SEO-optimized page.",
      },
      {
        icon: UserCheck,
        title: "Attorney Bio Pages",
        description: "Professional bios with credentials, experience, and personal approach.",
      },
      {
        icon: FileText,
        title: "Client Intake Forms",
        description: "Consultation request forms that capture leads 24/7.",
      },
      {
        icon: ShieldCheck,
        title: "Case Results Section",
        description: "Optional section to highlight successful case outcomes.",
      },
      {
        icon: Search,
        title: "Google Business Profile",
        description: "Full setup so you appear in local map results.",
      },
      {
        icon: Globe,
        title: "Local SEO",
        description: "Optimized for your practice areas + city from day one.",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Professional on every device your potential clients use.",
      },
      {
        icon: Scale,
        title: "Bar-Compliant Design",
        description: "Factual, non-misleading content following advertising best practices.",
      },
    ],
  },
  process: {
    headline: "From Consultation to Live Law Firm Website",
    steps: [
      {
        title: "Tell Us Your Practice Areas",
        description:
          "20-minute call about your practice areas, ideal client profile, and what sets your firm apart.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that conveys authority, credibility, and trustworthiness.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through every detail — practice area pages, bio, intake forms — until it's perfect.",
      },
      {
        title: "Launch & Capture",
        description:
          "Your site goes live and starts capturing consultation requests from people who need you.",
      },
    ],
  },
  testimonials: {
    featured: {
      name: "Elena R.",
      title: "Family Attorney",
      location: "Austin, TX",
      quote:
        "The done-for-you aspect is exactly what I needed. I bill by the hour, so I can't afford to waste time messing with WordPress. Graylock handles everything perfectly, and my online inquiries have increased significantly since launching.",
    },
    others: [
      {
        name: "Michael S.",
        title: "Criminal Defense Attorney",
        location: "Tampa, FL",
        quote:
          "My old site was embarrassing for a law firm. Graylock built something credible and professional in under a week. The intake form alone has brought in new cases I would have missed.",
      },
      {
        name: "Amanda C.",
        title: "Estate Planning Attorney",
        location: "Charlotte, NC",
        quote:
          "I tried LawLytics and it wasn't worth the premium. Graylock gave me a better site at a comparable price, and they handle everything.",
      },
    ],
  },
  faqs: [
    {
      q: "Can my law firm website include separate pages for each practice area?",
      a: "Yes — separate practice area pages are essential for legal SEO and for clearly communicating your expertise. Each page targets specific keywords and helps the right clients find you.",
    },
    {
      q: "How does your pricing compare to LawLytics or FindLaw?",
      a: "LawLytics starts at approximately $150–$225/month for a template. FindLaw and Scorpion can run $300+/month. Graylock starts at $199/month with a $799 setup fee — with a fully custom design, 7–10 day build, and month-to-month flexibility. No long-term contracts.",
    },
    {
      q: "Can you include an online consultation request form?",
      a: "Yes. Every Graylock plan includes an intake/consultation request form. Group Practice and Enterprise plans include enhanced forms with lead activity tracking in your dashboard.",
    },
    {
      q: "How long does it take to build a law firm website?",
      a: "7–10 business days on average from when you approve the plan and pay the setup fee. The exact timeline depends on how quickly you can provide feedback, photos, and any materials.",
    },
    {
      q: "Do you understand attorney advertising rules?",
      a: "We follow best practices for legal website content — factual, non-misleading, and free from unverifiable outcome claims. We recommend you review final copy for your state's specific bar requirements before launch.",
    },
  ],
  bottomCta: {
    headline: "One New Client From Your Website Pays for Years of Service",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your law firm's website could look like — and build you a custom homepage demo before you commit to anything.",
    button: "Book Your Free Website Review",
  },
  relatedPages: [
    { name: "Private Practices", path: "/websites-for-private-practices" },
    { name: "Accounting Firms", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Lawyers | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-lawyers",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can my law firm website include separate practice area pages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — separate practice area pages are essential for legal SEO.",
        },
      },
    ],
  },
};

export default function Lawyers() {
  return <IndustryLandingPage data={data} />;
}
