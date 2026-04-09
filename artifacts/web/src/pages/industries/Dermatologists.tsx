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
      "Patients searching for a dermatologist judge your competence by your website before they ever walk through your door. A dated site with stock photos and generic copy doesn't reflect the care you provide. We build modern, SEO-optimized websites for dermatology practices that attract the right patients and convert searches into consultations. Fully managed — so you can focus on patient care.",
    cta: "Schedule a Free Consultation",
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
  features: {
    headline: "Everything Your Dermatology Website Includes",
    items: [
      {
        icon: Sparkles,
        title: "Service & Procedure Pages",
        description: "Each treatment and service gets its own SEO-optimized page.",
      },
      {
        icon: UserCheck,
        title: "Provider Bio Pages",
        description: "Professional bios with board certifications, training, and specialties.",
      },
      {
        icon: FileText,
        title: "Patient Inquiry Forms",
        description: "Consultation request forms that capture leads 24/7.",
      },
      {
        icon: ShieldCheck,
        title: "Insurance & Payment Info",
        description: "Clearly communicate accepted insurance and cosmetic pricing.",
      },
      {
        icon: Search,
        title: "Google Business Profile",
        description: "Full setup so your practice appears in local map results.",
      },
      {
        icon: Globe,
        title: "Local SEO Foundation",
        description: "Optimized for dermatology + city searches from day one.",
      },
      {
        icon: Heart,
        title: "Patient Testimonials Section",
        description: "Showcase reviews and success stories from satisfied patients.",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Professional on every device your patients use to find you.",
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
  testimonials: {
    featured: {
      name: "Dr. Catherine L.",
      title: "Board-Certified Dermatologist",
      location: "San Diego, CA",
      quote:
        "I offer both medical and cosmetic dermatology, and my old site didn't differentiate between them at all. Graylock built separate service sections with clear pathways for each type of patient. Cosmetic consultations are up 40% since we launched.",
    },
    others: [
      {
        name: "Dr. Michael P.",
        title: "Mohs Surgeon",
        location: "Tampa, FL",
        quote:
          "Referring physicians have told me my new site is what they show patients when making referrals. That's exactly the impression I wanted to make.",
      },
      {
        name: "Dr. Priya S.",
        title: "Pediatric Dermatologist",
        location: "Chicago, IL",
        quote:
          "Parents do so much research before choosing a specialist for their child. My new site gives them everything they need to feel confident booking with me.",
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
      q: "How long does it take to build a dermatology website?",
      a: "7–10 business days on average from when you approve the plan and pay the setup fee. The process requires minimal time from you.",
    },
    {
      q: "Will my site rank for procedure-specific searches?",
      a: "Every service gets its own dedicated page optimized for relevant keywords. Combined with local SEO, this helps you show up for searches like 'Botox in [city]' or 'dermatologist near me' — the searches that actually bring in new patients.",
    },
  ],
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
