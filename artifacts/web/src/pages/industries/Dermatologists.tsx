import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Sparkles,
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
    title: "Websites for Dermatologists | Custom Sites | Graylock Digital",
    description:
      "Graylock builds custom, SEO-optimized websites for dermatologists and dermatology practices. Service pages, local SEO, patient inquiry forms. Built in 7–10 business days. No long-term contracts.",
    url: "https://graylockdigital.com/websites-for-dermatologists",
  },
  hero: {
    badge: "For Dermatologists",
    badgeIcon: Sparkles,
    h1: "Your Expertise Is World-Class.",
    h1Highlight: "Your Website Should Match.",
    subheadline:
      "Patients judge your competence by your website long before they walk in. We build modern, SEO-optimized dermatology sites that attract the right patients and convert searches into consultations — fully managed, so you can focus on care.",
    cta: "Get a Free Practice Website Review",
    ctaSubtext: "20-minute call · Custom homepage demo · No obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-solo-practitioners.jpg`,
    trustSignals: [
      "Built for dermatology practices",
      "Consultation request forms",
      "Local SEO included",
      "Fully managed for you",
    ],
  },
  specialties: {
    headline: "Dermatology Websites for Every Specialty",
    tags: [
      "Medical Dermatology",
      "Cosmetic Dermatology",
      "Surgical Dermatology",
      "Pediatric Dermatology",
      "Mohs Surgery",
      "Skin Cancer Screening",
      "Acne Treatment",
      "Eczema & Psoriasis",
      "Botox & Fillers",
      "Laser Treatments",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Patients Are Choosing Their Dermatologist Based on a 5-Second Website Visit",
    cards: [
      {
        icon: Eye,
        title: "Your site doesn't reflect your clinical expertise",
        description:
          "You spent years in training. Your website looks like it was built in an afternoon. Patients notice the disconnect.",
      },
      {
        icon: Search,
        title: "Not ranking for dermatology searches",
        description:
          "When someone Googles 'dermatologist near me' or 'acne treatment in [city],' your competitors appear first.",
      },
      {
        icon: Phone,
        title: "Cosmetic patients shop around — and your site loses",
        description:
          "Patients considering Botox, fillers, or laser treatments compare multiple practices online. If your site doesn't stand out, they book elsewhere.",
      },
    ],
  },
  benefits: {
    headline: "A Dermatology Website That Attracts the Right Patients",
    items: [
      {
        title: "Service Pages That Rank",
        description:
          "Skin checks, acne treatment, Mohs surgery, Botox, laser therapy — each service gets its own SEO-optimized page.",
      },
      {
        title: "24/7 Consultation Request Forms",
        description:
          "Capture new patients the moment they're ready to act. Every inquiry is a potential consultation on your schedule.",
      },
      {
        title: "Provider Bio Pages",
        description:
          "Showcase your board certifications, fellowship training, and clinical approach to build trust before the first visit.",
      },
      {
        title: "Local SEO That Drives Patients",
        description:
          "Optimized for 'dermatologist near me', 'skin cancer screening in [city]', and procedure-specific searches from day one.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No months of waiting. From consultation to live website in under two weeks.",
      },
      {
        title: "Fully Managed — You Focus on Patients",
        description:
          "Hosting, updates, SEO, and support all included. One cosmetic consultation covers months of service.",
      },
    ],
  },
  process: {
    headline: "From Consultation to Live Dermatology Website",
    steps: [
      {
        title: "Tell Us About Your Practice",
        description:
          "A 20-minute call about your services, ideal patients, and what makes your practice unique.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that conveys clinical expertise and professionalism.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through every detail — service pages, bios, forms — until it represents your practice perfectly.",
      },
      {
        title: "Launch & Grow",
        description:
          "Your site goes live and starts attracting new patients through Google search.",
      },
    ],
  },
  faqs: [
    {
      q: "Do you build websites for both medical and cosmetic dermatology?",
      a: "Yes. We build sites that effectively serve both medical and cosmetic dermatology patients, with clear service pages and pathways for each. Whether you focus on skin cancer screening or aesthetic treatments — or both — we tailor the site accordingly.",
    },
    {
      q: "Can I showcase before-and-after photos?",
      a: "We can build a gallery or results section into your site. You provide the images (with patient consent), and we display them professionally. This is especially valuable for cosmetic services like Botox, fillers, and laser treatments.",
    },
    {
      q: "How long does it take to launch a new dermatology site?",
      a: "Most practices go live in 7–10 business days from kickoff. We do the heavy lifting — copy, design, SEO, image selection — so you usually spend under an hour total reviewing drafts.",
    },
    {
      q: "Will my site rank for procedure-specific searches?",
      a: "Every service gets its own dedicated page optimized for relevant keywords. Combined with local SEO, this helps you show up for searches like 'Botox in [city]' or 'dermatologist near me' — the searches that actually bring in new patients.",
    },
  ],
  pricingHeadline: "Pricing Built for Solo Derms and Multi-Provider Practices",
  bottomCta: {
    headline: "Patients Are Searching for a Dermatologist in Your Area Right Now",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your dermatology website could look like — and build you a custom homepage demo before you commit to anything.",
    button: "Schedule a Free Consultation",
  },
  showPrivacyNote: true,
  relatedPages: [
    { name: "Physicians", path: "/websites-for-physicians" },
    { name: "Ophthalmologists", path: "/websites-for-ophthalmologists" },
    { name: "Optometrists", path: "/websites-for-optometrists" },
    { name: "Accounting Firms", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Dermatologists | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-dermatologists",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build websites for both medical and cosmetic dermatology?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build sites that effectively serve both medical and cosmetic dermatology patients, with clear service pages and pathways for each.",
        },
      },
    ],
  },
};

export default function Dermatologists() {
  return <IndustryLandingPage data={data} />;
}
