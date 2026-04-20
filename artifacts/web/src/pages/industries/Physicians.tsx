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
  MapPin,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for Physicians | Custom Medical Sites | Graylock Digital",
    description:
      "Graylock builds custom, SEO-optimized websites for physicians and medical practices. Service pages, local SEO, patient inquiry forms. Built in 7–10 business days. No long-term contracts.",
    url: "https://graylockdigital.com/websites-for-physicians",
  },
  hero: {
    badge: "For Physicians",
    badgeIcon: Stethoscope,
    h1: "Your Patients' First Impression Isn't in Your Office.",
    h1Highlight: "It's on Your Website.",
    subheadline:
      "Patients vet you online before they ever call. An outdated or generic site sends them to the next physician in the search results. We build SEO-optimized medical practice sites that convert searches into appointments — fully managed, so you stay focused on patient care.",
    cta: "Get a Free Practice Website Review",
    ctaSubtext: "20-minute call · Custom homepage demo · No obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-solo-practitioners.jpg`,
    trustSignals: [
      "Built for medical practices",
      "Patient inquiry forms",
      "Local SEO included",
      "Fully managed for you",
    ],
  },
  specialties: {
    headline: "Medical Websites for Every Specialty",
    tags: [
      "Internal Medicine",
      "Family Medicine",
      "Pediatrics",
      "Cardiology",
      "Gastroenterology",
      "Endocrinology",
      "Pulmonology",
      "Rheumatology",
      "Allergy & Immunology",
      "Geriatric Medicine",
      "Concierge Medicine",
      "Urgent Care",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Patients Choose Their Doctor Online Before They Ever Call Your Office",
    image: `${import.meta.env.BASE_URL}outdated-practice-website.png`,
    cards: [
      {
        icon: Eye,
        title: "Your website doesn't match your clinical reputation",
        description:
          "You've spent decades building expertise. Your website was built in a fraction of that time and it shows. Patients judge your competence by your online presence.",
      },
      {
        icon: Search,
        title: "Invisible on local search",
        description:
          "When someone searches 'doctor near me' or 'internist in [city],' your competitors appear. You don't. That's new patients walking into someone else's office.",
      },
      {
        icon: Phone,
        title: "No online way for patients to reach you",
        description:
          "Patients want to inquire about your practice at 9pm, not during your office hours. If they can't, they'll find a doctor whose website lets them.",
      },
    ],
  },
  benefits: {
    headline: "A Medical Website Built to Grow Your Patient Base",
    items: [
      {
        title: "Service Pages That Rank",
        description:
          "Annual physicals, chronic disease management, preventive care, specialty services — each gets its own SEO-optimized page.",
      },
      {
        title: "24/7 Patient Inquiry Forms",
        description:
          "Capture new patients the moment they're ready to act. Every inquiry is a potential appointment on your schedule.",
      },
      {
        title: "Provider Bio Pages",
        description:
          "Build trust before the first visit with professional bios showcasing board certifications, training, and your approach to care.",
      },
      {
        title: "Local SEO That Drives Patients",
        description:
          "Optimized for 'doctor near me', 'physician in [city]', and specialty-specific searches from day one.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No months of waiting. From consultation to live website in under two weeks.",
      },
      {
        title: "Fully Managed — You Focus on Patients",
        description:
          "Hosting, updates, SEO, and support all included. One new patient visit covers months of service.",
      },
    ],
  },
  process: {
    headline: "From Consultation to Live Medical Website",
    steps: [
      {
        title: "Tell Us About Your Practice",
        description:
          "A 20-minute call about your specialties, ideal patients, and what sets your practice apart.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that conveys clinical authority and professionalism.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through every detail — service pages, provider bios, forms — until it represents your practice perfectly.",
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
      name: "Dr. Richard P.",
      title: "Internal Medicine",
      location: "Las Vegas, NV",
      quote:
        "I'd been meaning to replace my website for three years. Graylock made it painless — one call, reviewed a demo, and we were live in 10 days. The site finally reflects the quality of care we actually provide. New patient inquiries from Google have more than doubled.",
    },
    others: [
      {
        name: "Dr. Susan W.",
        title: "Family Medicine",
        location: "Boise, ID",
        quote:
          "Patients tell me they chose our practice because the website felt trustworthy and professional. That's exactly the first impression I wanted.",
      },
      {
        name: "Dr. David L.",
        title: "Concierge Medicine",
        location: "Scottsdale, AZ",
        quote:
          "My concierge practice needed a website that matched the level of care I provide. Graylock built something I'm genuinely proud to send prospective patients to.",
      },
    ],
  },
  faqs: [
    {
      q: "Do you build websites for all types of physicians?",
      a: "Yes. We build custom websites for physicians across specialties — internal medicine, family medicine, pediatrics, cardiology, gastroenterology, concierge medicine, and more. Every site is tailored to your specialty and local market.",
    },
    {
      q: "Can each provider in our group practice have their own page?",
      a: "Yes — individual provider pages with bio, headshot, board certifications, and specialty information are a core feature. Starter includes 1 provider page, Growth includes up to 5, and Scale includes up to 10.",
    },
    {
      q: "How long does it take to build a medical practice website?",
      a: "7–10 business days on average from when you approve the plan and pay the setup fee. The process requires minimal time from you or your staff.",
    },
    {
      q: "Are your forms HIPAA compliant?",
      a: "Our inquiry forms collect contact information only — name, phone, email, and a brief message about what they're looking for. This is how most physician practice websites handle initial contact.\n\nIf you use a HIPAA-compliant platform like SimplePractice, TherapyNotes, or Jane App for intake, we link directly to those portals from your website. Your marketing site handles the first impression; your clinical tools handle everything after that.",
    },
  ],
  pricingHeadline: "Pricing for Solo Physicians and Multi-Provider Practices",
  bottomCta: {
    headline: "New Patients Are Searching for a Doctor in Your Area Right Now",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your medical practice website could look like — and build you a custom homepage demo before you commit to anything.",
    button: "Get a Free Demo",
  },
  showPrivacyNote: true,
  relatedPages: [
    { name: "Dentists", path: "/websites-for-dentists" },
    { name: "Dermatologists", path: "/websites-for-dermatologists" },
    { name: "Chiropractors", path: "/websites-for-chiropractors" },
    { name: "Accounting Firms", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Physicians | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-physicians",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build websites for all types of physicians?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build custom websites for physicians across specialties — internal medicine, family medicine, pediatrics, cardiology, gastroenterology, concierge medicine, and more.",
        },
      },
    ],
  },
};

export default function Physicians() {
  return <IndustryLandingPage data={data} />;
}
