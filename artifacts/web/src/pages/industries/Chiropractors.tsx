import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Bone,
  Globe,
  Search,
  Phone,
  Clock,
  Eye,
  ShieldCheck,
  FileText,
  Smartphone,
  UserCheck,
  Heart,
  MapPin,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for Chiropractors | Graylock Digital",
    description:
      "Custom websites for chiropractors and chiropractic clinics. Local SEO, patient inquiry forms, built in 7–10 business days. No long-term contracts.",
    url: "https://graylockdigital.com/websites-for-chiropractors",
  },
  breadcrumbLabel: "Chiropractors",
  hero: {
    badge: "For Chiropractors",
    badgeIcon: Bone,
    h1: "Patients Don't Pick the Best Chiropractor.",
    h1Highlight: "They Pick the One They Find First.",
    subheadline:
      "When someone's back goes out at 9pm, they Google 'chiropractor near me' — not your name. If your site doesn't show up (or doesn't look credible), that new patient walks into someone else's office. We build SEO-optimized chiropractic sites that turn searches into booked appointments — fully managed, so you can focus on patient care.",
    cta: "Get a Free Practice Website Review",
    ctaSubtext: "20-minute call · Custom homepage demo · No obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-solo-practitioners.jpg`,
    trustSignals: [
      "Built for chiropractic practices",
      "Online appointment requests",
      "Local SEO included",
      "Fully managed for you",
    ],
  },
  specialties: {
    headline: "Chiropractic Websites for Every Specialty",
    tags: [
      "General Chiropractic",
      "Sports Chiropractic",
      "Pediatric Chiropractic",
      "Prenatal Chiropractic",
      "Corrective Care",
      "Spinal Decompression",
      "Auto Injury Recovery",
      "Wellness & Maintenance",
      "Family Chiropractic",
      "Functional Medicine",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Every Day Your Site Underperforms, New Patients Book the Clinic Down the Street",
    cards: [
      {
        icon: Eye,
        title: "New patients Google you and book somewhere else",
        description:
          "They search for a chiropractor in your area, land on your site, and it doesn't look like the professional clinic you actually run.",
      },
      {
        icon: Search,
        title: "Invisible on local search",
        description:
          "When someone searches 'chiropractor near me,' your competitors show up. You don't. That's patients walking through someone else's door.",
      },
      {
        icon: Phone,
        title: "No way to book after hours",
        description:
          "A patient's back goes out on Saturday night. They want to book an appointment — but your site has no way to capture that inquiry.",
      },
    ],
  },
  benefits: {
    headline: "A Chiropractic Website Built to Fill Your Schedule",
    items: [
      {
        title: "Service Pages That Rank",
        description:
          "Spinal adjustments, sports injury, corrective care — each service gets its own SEO-optimized page so patients find exactly what they need.",
      },
      {
        title: "24/7 Appointment Request Forms",
        description:
          "Capture new patients the moment they're ready to act. Every inquiry is a potential adjustment on your schedule.",
      },
      {
        title: "Provider Bio Pages",
        description:
          "Build trust with prospective patients through professional bios showcasing your credentials, techniques, and approach.",
      },
      {
        title: "Local SEO That Drives Patients",
        description:
          "Optimized for 'chiropractor near me', 'back pain relief in [city]', and specialty-specific searches from day one.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No months of waiting. From consultation to live website in under two weeks.",
      },
      {
        title: "Fully Managed — You Focus on Patients",
        description:
          "Hosting, updates, SEO, and support all included. One new patient covers months of service.",
      },
    ],
  },
  process: {
    headline: "From Consultation to Live Chiropractic Website",
    steps: [
      {
        title: "Tell Us About Your Practice",
        description:
          "A 20-minute call about your techniques, ideal patients, and what sets your clinic apart.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that conveys credibility and the professional care you provide.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through every detail — service pages, bios, forms — until it represents your clinic perfectly.",
      },
      {
        title: "Launch & Grow",
        description:
          "Your site goes live and starts attracting new patients through Google search.",
      },
    ],
  },
  testimonials: {
    featured: {
      name: "Dr. Marcus W.",
      title: "Owner, Summit Chiropractic",
      location: "Denver, CO",
      quote:
        "I was relying entirely on referrals and my Google listing had the wrong hours. Graylock built me a site that actually shows up when people search for chiropractors in my area. I've picked up 8 new patients in the first month just from organic search.",
    },
    others: [
      {
        name: "Dr. Emily R.",
        title: "Sports Chiropractor",
        location: "Austin, TX",
        quote:
          "My old site was a template that looked like every other chiropractor's page. Now I have something that actually reflects my approach and expertise. Patients tell me the site is what convinced them to book.",
      },
      {
        name: "Dr. James C.",
        title: "Family Chiropractic",
        location: "Portland, OR",
        quote:
          "The process was painless — 20-minute call, reviewed a demo, and we were live in under two weeks. I didn't have to think about it at all.",
      },
    ],
  },
  faqs: [
    {
      q: "Do you build websites specifically for chiropractors?",
      a: "Yes. We build custom websites for chiropractic practices of all sizes — solo practitioners, multi-provider clinics, and multi-location groups. Every site is tailored to chiropractic services and your local market.",
    },
    {
      q: "Can I have separate pages for each technique or service I offer?",
      a: "Absolutely. Spinal adjustments, corrective care, sports chiropractic, decompression therapy — each gets its own page that ranks for its own keywords. This is one of the most effective ways to attract new patients searching for specific treatments.",
    },
    {
      q: "How long does it take to build a chiropractic website?",
      a: "7–10 business days on average from when you approve the plan and pay the setup fee. Most chiropractors are surprised how fast and easy the process is.",
    },
    {
      q: "Will my site show up when people search 'chiropractor near me'?",
      a: "Every Graylock site includes a local SEO foundation. Growth and Scale plans include full local SEO optimization and Google Business Profile setup — critical for showing up in 'chiropractor near me' and 'back pain relief' searches in your area.",
    },
  ],
  pricingHeadline: "Pricing for Solo Practitioners and Multi-Location Clinics",
  bottomCta: {
    headline: "New Patients Are Searching for a Chiropractor in Your Area Right Now",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your chiropractic website could look like — and build you a custom homepage demo before you commit to anything.",
    button: "Get a Free Demo",
  },
  showPrivacyNote: true,
  relatedPages: [
    { name: "Physical Therapists", path: "/websites-for-physical-therapists" },
    { name: "Physicians", path: "/websites-for-physicians" },
    { name: "Dentists", path: "/websites-for-dentists" },
    { name: "Accounting Firms", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Chiropractors | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-chiropractors",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build websites specifically for chiropractors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build custom websites for chiropractic practices of all sizes — solo practitioners, multi-provider clinics, and multi-location groups.",
        },
      },
    ],
  },
};

export default function Chiropractors() {
  return <IndustryLandingPage data={data} />;
}
