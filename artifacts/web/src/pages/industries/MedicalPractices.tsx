import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Stethoscope,
  Globe,
  Search,
  Phone,
  Clock,
  Eye,
  ShieldCheck,
  Users,
  FileText,
  Smartphone,
  UserCheck,
  Building2,
  Heart,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for Medical Practices & Physicians | Starting at $199/mo | Graylock Digital",
    description:
      "Graylock builds custom, SEO-optimized websites for medical practices, physicians, and healthcare providers. Provider bios, service pages, patient inquiry forms. Built in 3–5 days. Starting at $199/mo.",
    url: "https://graylockdigital.com/websites-for-medical-practices",
  },
  hero: {
    badge: "For Medical Practices & Physicians",
    badgeIcon: Stethoscope,
    h1: "A Medical Practice Website That",
    h1Highlight: "Brings in New Patients.",
    subheadline:
      "Patients choose their doctor online before they ever walk through your door. We build credible, SEO-optimized websites for medical practices — with provider bios, service pages, and patient inquiry forms that turn searchers into appointments. Starting at $199/month.",
    cta: "Book Your Free Website Review",
    backgroundImage: `${import.meta.env.BASE_URL}hero-group-practices.jpg`,
    trustSignals: [
      "Provider bio pages",
      "Patient inquiry forms",
      "Local SEO included",
      "Starting at $199/month",
    ],
  },
  specialties: {
    headline: "We Build Websites for Every Type of Medical Practice",
    tags: [
      "Family Medicine",
      "Internal Medicine",
      "Pediatrics",
      "Dermatology",
      "Cardiology",
      "Orthopedics",
      "OB/GYN",
      "Psychiatry",
      "Urgent Care",
      "Chiropractic",
      "Physical Therapy",
      "Dental",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Patients Are Choosing Your Competitors Because Their Website Looks Better Than Yours",
    cards: [
      {
        icon: Eye,
        title: "Your website doesn't reflect your medical expertise",
        description:
          "You've invested years in your education and training, but your website makes your practice look outdated and unprofessional.",
      },
      {
        icon: Search,
        title: "Patients can't find you on Google",
        description:
          "When someone searches 'family doctor near me' or 'dermatologist in [your city]', your competitors show up first.",
      },
      {
        icon: Phone,
        title: "No online patient inquiry form",
        description:
          "Potential patients who want to reach out after hours can't do so. They call the next practice on Google instead.",
      },
      {
        icon: Users,
        title: "Provider bios are missing or outdated",
        description:
          "Patients want to know who they'll be seeing. If your providers aren't featured on your site, patients choose someone else.",
      },
      {
        icon: Clock,
        title: "You're too busy seeing patients",
        description:
          "Between patient care, charting, and administrative work, your website is the last thing on your mind.",
      },
      {
        icon: Building2,
        title: "Multi-location confusion",
        description:
          "If your practice has multiple locations, your current site doesn't clearly direct patients to the right office.",
      },
    ],
  },
  benefits: {
    headline: "A Medical Practice Website Built to Grow Your Patient Base",
    items: [
      {
        title: "Provider Bio Pages",
        description:
          "Each physician, NP, and PA gets their own professional bio page with credentials, specialties, and a personal approach statement.",
      },
      {
        title: "Service-Specific Pages",
        description:
          "Dedicated pages for each service area — primary care, dermatology, cardiology, and more — optimized for local search.",
      },
      {
        title: "Patient Inquiry Forms",
        description:
          "Appointment inquiry forms available 24/7. Designed for appointment requests only — not PHI collection.",
      },
      {
        title: "Local SEO That Drives Patients",
        description:
          "Optimized for 'doctor near me' and specialty-specific searches in your area from day one.",
      },
      {
        title: "Built in 3–5 Business Days",
        description:
          "No months of waiting. From consultation to live website in one business week.",
      },
      {
        title: "US-Based Team",
        description:
          "No overseas outsourcing. Real people who understand medical practice marketing.",
      },
    ],
  },
  features: {
    headline: "Everything Your Medical Practice Website Includes",
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
        title: "Patient Inquiry Forms",
        description: "Appointment request forms for new patient inquiries — not PHI.",
      },
      {
        icon: ShieldCheck,
        title: "Insurance Accepted Section",
        description: "Clearly list all insurance plans your practice accepts.",
      },
      {
        icon: Search,
        title: "Google Business Profile",
        description: "Full setup so your practice appears in local map results.",
      },
      {
        icon: Globe,
        title: "Local SEO",
        description: "Optimized for your specialties + city from day one.",
      },
      {
        icon: Heart,
        title: "Patient Testimonials Section",
        description: "Showcase patient reviews and build trust with prospective patients.",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Professional on every device your patients use.",
      },
    ],
  },
  process: {
    headline: "From Consultation to Live Medical Practice Website",
    steps: [
      {
        title: "Tell Us About Your Practice",
        description:
          "20-minute call about your specialties, providers, locations, and ideal patient demographics.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that conveys medical credibility and patient trust.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through every detail — provider pages, service sections, inquiry forms — until it's perfect.",
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
        name: "Dr. Rachel W.",
        title: "Clinical Director",
        location: "Portland, OR",
        quote:
          "We needed a site that represented the full depth of our practice. Graylock delivered in under a week — and our new patient inquiries increased significantly in the first month.",
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
      q: "Are your patient inquiry forms HIPAA compliant?",
      a: "Our contact and lead capture forms are designed for appointment inquiries only — they do not collect protected health information (PHI). We do not integrate with EHR/EMR systems or patient portals. This keeps your implementation straightforward and outside the scope of HIPAA technical safeguards for websites. If you require a full HIPAA-compliant patient portal, that falls outside our scope and we'll tell you that upfront.",
    },
    {
      q: "Can each provider have their own page?",
      a: "Yes — individual provider pages with bio, headshot, credentials, and specialty information are a core feature. The Solo Practice plan includes 1 provider page, Group Practice includes up to 5, and Enterprise includes up to 10.",
    },
    {
      q: "Can you build websites for multi-location medical practices?",
      a: "Yes. We build location-specific pages with hours, directions, and provider assignments for each office. The Enterprise plan includes multi-location SEO strategy to ensure each location ranks for local searches.",
    },
    {
      q: "Which plan is right for my medical practice?",
      a: "Solo physicians typically start with our Solo Practice plan at $199/month. Multi-provider practices usually choose Group Practice at $299/month for up to 5 provider pages. Larger organizations should consider Enterprise at $449/month for up to 10 provider pages and dedicated account management.",
    },
    {
      q: "How long does it take to build a medical practice website?",
      a: "3–5 business days on average from when you approve the plan and pay the setup fee. The exact timeline depends on how quickly you can provide feedback, provider photos, and other materials.",
    },
  ],
  bottomCta: {
    headline: "New Patients Are Searching for a Doctor Like You Right Now",
    subtext:
      "Book a free 20-minute call. We'll evaluate your current site and show you exactly what a professional medical practice website could look like — before you pay us anything.",
    button: "Book Your Free Website Review",
  },
  relatedPages: [
    { name: "Therapists", path: "/websites-for-solo-practitioners" },
    { name: "Group Practices", path: "/websites-for-group-practices" },
    { name: "Attorneys", path: "/websites-for-lawyers" },
    { name: "CPAs", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Medical Practices | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-medical-practices",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are your patient inquiry forms HIPAA compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our forms are designed for appointment inquiries only — they do not collect PHI. This keeps your implementation outside HIPAA technical safeguard requirements.",
        },
      },
    ],
  },
};

export default function MedicalPractices() {
  return <IndustryLandingPage data={data} />;
}
