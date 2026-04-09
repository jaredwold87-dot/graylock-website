import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Stethoscope,
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
  BookOpen,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for Private Practices | Dentists, Therapists, Physicians & More | Graylock Digital",
    description:
      "Graylock builds custom, SEO-optimized websites for private practices — dentists, optometrists, chiropractors, therapists, counselors, physicians, dermatologists, physical therapists, and more. Built in 7–10 business days. Starting at $199/mo.",
    url: "https://graylockdigital.com/websites-for-private-practices",
  },
  hero: {
    badge: "For Private Practices",
    badgeIcon: Stethoscope,
    h1: "Your Reputation Took Years to Build.",
    h1Highlight: "Your Website Should Reflect That.",
    subheadline:
      "Patients and clients Google you before they ever call. If your site looks outdated or doesn't show up at all, they're booking with someone else. We build professional, SEO-optimized websites for dentists, therapists, physicians, chiropractors, and every type of private practice — designed to turn searches into booked appointments. Starting at $199/month.",
    cta: "Book Your Free Website Review",
    backgroundImage: `${import.meta.env.BASE_URL}hero-solo-practitioners.jpg`,
    trustSignals: [
      "Built for every practice type",
      "Patient/client inquiry forms",
      "Local SEO included",
      "Starting at $199/month",
    ],
  },
  specialties: {
    headline: "We Build Websites for Every Type of Private Practice",
    tags: [
      "Dentists",
      "Optometrists",
      "Chiropractors",
      "Therapists & Counselors",
      "Physicians",
      "Dermatologists",
      "Physical Therapists",
      "Psychiatrists",
      "Veterinarians",
      "Pediatricians",
      "OB/GYN",
      "Orthodontists",
      "Oral Surgeons",
      "Podiatrists",
      "Audiologists",
      "Speech Therapists",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Every Day Your Website Underperforms, You're Losing Patients to the Practice Down the Street",
    cards: [
      {
        icon: Eye,
        title: "Potential patients Google you and call someone else",
        description:
          "They search for a provider in your area, find your site, and it doesn't inspire the confidence they need to book an appointment.",
      },
      {
        icon: Search,
        title: "Not ranking for your specialty",
        description:
          "Your website doesn't show up when people in your city search for your specific services. Your competitors do.",
      },
      {
        icon: Phone,
        title: "No way to reach you after hours",
        description:
          "Prospective patients who want to book at 10pm can't do so. Those inquiries go to the next practice on Google.",
      },
      {
        icon: Heart,
        title: "Your site doesn't convey trust",
        description:
          "Your current website feels generic or outdated — not the welcoming, professional impression your practice deserves.",
      },
      {
        icon: Globe,
        title: "Referrals check your site and leave",
        description:
          "You rely on word-of-mouth, but when referrals check your website, it doesn't reinforce the recommendation.",
      },
      {
        icon: Clock,
        title: "You're too busy seeing patients",
        description:
          "Between appointments, charting, and running your practice, your website is the last thing on your mind. We get it.",
      },
    ],
  },
  benefits: {
    headline: "A Practice Website Built to Grow Your Patient Base",
    items: [
      {
        title: "Service & Specialty Pages That Rank",
        description:
          "Each service you offer gets its own SEO-optimized page — so patients searching for your exact specialty find you first.",
      },
      {
        title: "24/7 Patient Inquiry Forms",
        description:
          "Capture new patients the moment they're ready to act, even at midnight. Every inquiry is a potential appointment.",
      },
      {
        title: "Provider Bio Pages",
        description:
          "Build personal credibility and connection with prospective patients through professional, well-written bios.",
      },
      {
        title: "Local SEO That Drives Patients",
        description:
          "Optimized for 'dentist near me', 'therapist in [city]', and specialty-specific searches from day one.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No months of waiting. From consultation to live website in under two weeks.",
      },
      {
        title: "Starting at $199/month",
        description:
          "Less than what most practice website platforms charge for a template. You get a fully custom site.",
      },
    ],
  },
  features: {
    headline: "Everything Your Practice Website Includes",
    items: [
      {
        icon: Stethoscope,
        title: "Service & Specialty Pages",
        description: "Each service area gets its own SEO-optimized page.",
      },
      {
        icon: UserCheck,
        title: "Provider Bio Pages",
        description: "Professional bios with credentials, education, and personal approach.",
      },
      {
        icon: FileText,
        title: "Patient/Client Inquiry Forms",
        description: "Appointment request forms that capture leads 24/7.",
      },
      {
        icon: ShieldCheck,
        title: "Insurance & Rates Section",
        description: "Clearly communicate insurance accepted and session/appointment rates.",
      },
      {
        icon: Search,
        title: "Google Business Profile",
        description: "Full setup so your practice appears in local map results.",
      },
      {
        icon: Globe,
        title: "Local SEO Foundation",
        description: "Optimized for your specialty + city searches from day one.",
      },
      {
        icon: BookOpen,
        title: "Patient Testimonials Section",
        description: "Showcase reviews and social proof from satisfied patients and clients.",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Professional on every device your patients and clients use.",
      },
    ],
  },
  process: {
    headline: "From Consultation to Live Practice Website",
    steps: [
      {
        title: "Tell Us About Your Practice",
        description:
          "A 20-minute call about your specialties, ideal patients, and what sets your practice apart.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that conveys credibility, warmth, and professionalism.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through every detail — service pages, bios, inquiry forms — until it's perfect.",
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
      name: "Ben L.",
      title: "West Coast Eye Clinic",
      location: "West Coast",
      quote:
        "We had two outdated websites creating confusion for patients. Graylock consolidated everything into one clean site and restructured how new patients contact us. Every inquiry now routes directly to the right person on my team. No more missed calls, no more phone tag.",
    },
    others: [
      {
        name: "Sarah M.",
        title: "Licensed Therapist",
        location: "Reno, NV",
        quote:
          "My old site looked outdated and unprofessional. Graylock built me a beautiful new site in under a week, and I finally feel confident sending people to it. Best decision I've made for my practice.",
      },
      {
        name: "Dr. Kevin T.",
        title: "Owner, Summit Physical Therapy",
        location: "Salt Lake City, UT",
        quote:
          "Adding new providers to our site used to be a nightmare. Now I just email the team and it's updated within a day.",
      },
    ],
  },
  faqs: [
    {
      q: "What types of private practices do you build websites for?",
      a: "We build websites for dentists, optometrists, chiropractors, therapists, counselors, physicians, dermatologists, physical therapists, psychiatrists, veterinarians, pediatricians, and virtually any other type of private practice. If you see patients or clients by appointment, we can build your website.",
    },
    {
      q: "Are your patient inquiry forms HIPAA compliant?",
      a: "Our contact and lead capture forms are designed for appointment inquiries only — they do not collect protected health information (PHI). We do not integrate with EHR/EMR systems or patient portals. This keeps your implementation straightforward and outside the scope of HIPAA technical safeguards.",
    },
    {
      q: "How does your pricing compare to other website platforms?",
      a: "Most industry-specific website platforms charge $149–$349/month for template-based sites where you don't own your content. Graylock starts at $199/month for a fully custom site where you own your content and domain. We deliver in 7–10 business days and handle everything for you. No long-term contracts.",
    },
    {
      q: "Can each provider in our practice have their own bio page?",
      a: "Yes — individual provider pages with bio, headshot, credentials, and specialty information are a core feature. Solo Practice includes 1 provider page, Group Practice includes up to 5, and Enterprise includes up to 10.",
    },
    {
      q: "How long does it take to build a private practice website?",
      a: "7–10 business days on average from when you approve the plan and pay the setup fee. The exact timeline depends on how quickly you can provide feedback, photos, and any materials.",
    },
  ],
  bottomCta: {
    headline: "New Patients Are Searching for a Practice Like Yours Right Now",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your practice's website could look like — and build you a custom homepage demo before you commit to anything.",
    button: "Book Your Free Website Review",
  },
  relatedPages: [
    { name: "Accounting Firms", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Private Practices | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-private-practices",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of private practices do you build websites for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build websites for dentists, optometrists, chiropractors, therapists, counselors, physicians, dermatologists, physical therapists, psychiatrists, veterinarians, and virtually any other type of private practice.",
        },
      },
    ],
  },
};

export default function PrivatePractices() {
  return <IndustryLandingPage data={data} />;
}
