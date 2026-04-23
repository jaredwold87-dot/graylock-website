import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Brain,
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
    title: "Websites for Psychologists | Graylock Digital",
    description:
      "Custom websites for psychologists and psychology practices. Local SEO, client inquiry forms, built in 7–10 business days. No long-term contracts.",
    url: "https://graylockdigital.com/websites-for-psychologists",
  },
  breadcrumbLabel: "Psychologists",
  hero: {
    badge: "For Psychologists",
    badgeIcon: Brain,
    h1: "Finding a Psychologist Is Hard Enough.",
    h1Highlight: "Your Website Shouldn't Make It Harder.",
    subheadline:
      "Clients need to feel safe before they pick up the phone. A cold or confusing site costs you the inquiry. We build warm, SEO-optimized psychology sites — fully managed — that make it easy for the right clients to find you and reach out.",
    cta: "Get a Free Practice Website Review",
    ctaSubtext: "20-minute call · Custom homepage demo · No obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-solo-practitioners.jpg`,
    trustSignals: [
      "Built for psychology practices",
      "Client inquiry forms",
      "Local SEO included",
      "Fully managed for you",
    ],
  },
  specialties: {
    headline: "Psychology Websites for Every Specialty",
    tags: [
      "Clinical Psychology",
      "Neuropsychology",
      "Behavioral Psychology",
      "Child & Adolescent Psychology",
      "Health Psychology",
      "Couples & Family Psychology",
      "Psychological Testing",
      "ADHD Assessment",
      "Trauma & PTSD",
      "Autism Evaluation",
      "Sport Psychology",
      "Geriatric Psychology",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Clients Are Looking for a Psychologist Right Now — Can They Find You?",
    cards: [
      {
        icon: Eye,
        title: "Your site doesn't convey the warmth clients need",
        description:
          "Clients reaching out to a psychologist are often anxious. A cold, clinical, or outdated website doesn't put them at ease — it makes them keep looking.",
      },
      {
        icon: Search,
        title: "Invisible on Google for your specialties",
        description:
          "When someone searches 'psychologist near me' or 'neuropsych testing in [city],' your competitors appear. You don't.",
      },
      {
        icon: Phone,
        title: "Clients can't reach you when they're ready",
        description:
          "The decision to contact a psychologist often happens late at night. If your site has no way to capture that inquiry, you lose them by morning.",
      },
    ],
  },
  benefits: {
    headline: "A Psychology Website That Connects You With the Right Clients",
    items: [
      {
        title: "Service Pages That Rank",
        description:
          "Psychological testing, ADHD assessment, trauma therapy, couples counseling — each service gets its own SEO-optimized page.",
      },
      {
        title: "24/7 Client Inquiry Forms",
        description:
          "Capture potential clients the moment they're ready to reach out. Every inquiry is a potential consultation on your schedule.",
      },
      {
        title: "Provider Bio Pages",
        description:
          "Build trust and connection with prospective clients through warm, professional bios showcasing your credentials and approach.",
      },
      {
        title: "Local SEO That Drives Clients",
        description:
          "Optimized for 'psychologist near me', 'neuropsych testing in [city]', and specialty-specific searches from day one.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No months of waiting. From consultation to live website in under two weeks.",
      },
      {
        title: "Fully Managed — You Focus on Clients",
        description:
          "Hosting, updates, SEO, and support all included. One new client covers months of service — and you'll never touch a line of code.",
      },
    ],
  },
  process: {
    headline: "From Consultation to Live Psychology Website",
    steps: [
      {
        title: "Tell Us About Your Practice",
        description:
          "A 20-minute call about your specialties, ideal clients, and the tone you want your website to convey.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that's warm, professional, and reflects your clinical expertise.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through every detail — service pages, bios, forms — until it represents your practice perfectly.",
      },
      {
        title: "Launch & Grow",
        description:
          "Your site goes live and starts connecting you with new clients through Google search.",
      },
    ],
  },
  testimonials: {
    featured: {
      name: "Dr. Laura H.",
      title: "Clinical Psychologist",
      location: "Denver, CO",
      quote:
        "I do neuropsych testing and needed a site that explained the process clearly for patients and referring providers. Graylock built separate pages for each type of assessment I offer, and referrals from my website have increased significantly. Physicians tell me they send patients to my site before making the referral.",
    },
    others: [
      {
        name: "Dr. Mark S.",
        title: "Child Psychologist",
        location: "Nashville, TN",
        quote:
          "Parents are anxious when they're looking for a child psychologist. My new site puts them at ease immediately — it's warm, clear, and explains exactly what to expect. I've gotten more inquiries from my website than from any directory listing.",
      },
      {
        name: "Dr. Rebecca T.",
        title: "Neuropsychologist",
        location: "Atlanta, GA",
        quote:
          "My niche is very specific and I needed a site that spoke to referring physicians and specialized populations, not just general therapy seekers. Graylock understood the audience and built something that positioned me as the expert I am.",
      },
    ],
  },
  faqs: [
    {
      q: "Do you build websites specifically for psychologists?",
      a: "Yes. We build custom websites for psychologists across all specialties — clinical, neuropsychology, forensic, child, sport, and more. Every site is tailored to your areas of expertise and local market.",
    },
    {
      q: "Can I have separate pages for each type of assessment or service?",
      a: "Absolutely. Neuropsych testing, ADHD evaluations, autism assessments, individual therapy, couples counseling — each gets its own page that ranks for its own keywords. This is critical for attracting clients searching for specific services.",
    },
    {
      q: "How long does it take to build a psychology website?",
      a: "7–10 business days on average from when you approve the plan and pay the setup fee. The process requires minimal time from you.",
    },
    {
      q: "Can my site explain the testing or evaluation process for patients?",
      a: "Yes. We build informative, patient-friendly pages that walk potential clients through what to expect — from initial consultation to results. This reduces anxiety and increases the likelihood they'll follow through with booking.",
    },
  ],
  pricingHeadline: "Pricing for Solo Psychologists and Group Practices",
  bottomCta: {
    headline: "Clients Are Searching for a Psychologist in Your Area Right Now",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your psychology practice website could look like — and build you a custom homepage demo before you commit to anything.",
    button: "Get a Free Demo",
  },
  showPrivacyNote: true,
  showLeadMagnet: true,
  relatedPages: [
    { name: "Therapists & Counselors", path: "/websites-for-therapists" },
    { name: "Physicians", path: "/websites-for-physicians" },
    { name: "Physical Therapists", path: "/websites-for-physical-therapists" },
    { name: "Accounting Firms", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Psychologists | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-psychologists",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build websites specifically for psychologists?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build custom websites for psychologists across all specialties — clinical, neuropsychology, forensic, child, sport, and more.",
        },
      },
    ],
  },
};

export default function Psychologists() {
  return <IndustryLandingPage data={data} />;
}
