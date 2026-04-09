import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Dumbbell,
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
    title: "Websites for Physical Therapists | Custom Sites | Graylock Digital",
    description:
      "Graylock builds custom, SEO-optimized websites for physical therapists and PT clinics. Service pages, local SEO, patient inquiry forms. Built in 7–10 business days. No long-term contracts.",
    url: "https://graylockdigital.com/websites-for-physical-therapists",
  },
  hero: {
    badge: "For Physical Therapists",
    badgeIcon: Dumbbell,
    h1: "Patients Don't Know They Need PT.",
    h1Highlight: "Until They Google Their Pain.",
    subheadline:
      "When someone's knee aches or their back won't stop hurting, they Google their symptoms — not 'physical therapist.' If your website doesn't show up for those searches and clearly explain how you can help, they'll end up at someone else's clinic. We build SEO-optimized websites for physical therapy practices that turn pain-driven searches into booked evaluations. Fully managed — so you can focus on patient outcomes.",
    cta: "Schedule a Free Consultation",
    backgroundImage: `${import.meta.env.BASE_URL}hero-solo-practitioners.jpg`,
    trustSignals: [
      "Built for PT practices",
      "Patient inquiry forms",
      "Local SEO included",
      "Fully managed for you",
    ],
  },
  specialties: {
    headline: "Physical Therapy Websites for Every Specialty",
    tags: [
      "Orthopedic PT",
      "Sports Rehabilitation",
      "Post-Surgical Rehab",
      "Geriatric PT",
      "Pediatric PT",
      "Neurological PT",
      "Pelvic Floor Therapy",
      "Vestibular Rehabilitation",
      "Hand Therapy",
      "Aquatic Therapy",
      "Work Injury Recovery",
      "Chronic Pain Management",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Every Day Your Website Underperforms, You're Losing Patients to the Clinic Down the Street",
    cards: [
      {
        icon: Eye,
        title: "Patients search for help and find your competitors",
        description:
          "They Google 'knee pain physical therapy' or 'PT near me' and your practice doesn't show up. The clinic that does gets the appointment.",
      },
      {
        icon: Search,
        title: "Referral sources check your site and hesitate",
        description:
          "Physicians, orthopedic surgeons, and other providers look at your website before referring. A dated site makes them think twice.",
      },
      {
        icon: Phone,
        title: "Direct-access patients can't find you",
        description:
          "In most states, patients don't need a referral for PT. But they'll never reach you if your website doesn't show up in search results.",
      },
    ],
  },
  benefits: {
    headline: "A PT Website Built to Fill Your Treatment Schedule",
    items: [
      {
        title: "Service Pages That Rank",
        description:
          "Orthopedic PT, sports rehab, post-surgical recovery, pelvic floor — each specialty gets its own SEO-optimized page.",
      },
      {
        title: "24/7 Patient Inquiry Forms",
        description:
          "Capture new patients the moment they're ready to act. Every inquiry is a potential evaluation on your schedule.",
      },
      {
        title: "Therapist Bio Pages",
        description:
          "Build trust with prospective patients through professional bios showcasing your credentials, specializations, and treatment philosophy.",
      },
      {
        title: "Local SEO That Drives Patients",
        description:
          "Optimized for 'physical therapist near me', 'PT in [city]', and condition-specific searches from day one.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No months of waiting. From consultation to live website in under two weeks.",
      },
      {
        title: "Fully Managed — You Focus on Outcomes",
        description:
          "Hosting, updates, SEO, and support all included. One new patient evaluation covers months of service.",
      },
    ],
  },
  features: {
    headline: "Everything Your Physical Therapy Website Includes",
    items: [
      {
        icon: Dumbbell,
        title: "Service & Specialty Pages",
        description: "Each treatment area gets its own SEO-optimized page.",
      },
      {
        icon: UserCheck,
        title: "Therapist Bio Pages",
        description: "Professional bios with credentials, certifications, and areas of expertise.",
      },
      {
        icon: FileText,
        title: "Patient Inquiry Forms",
        description: "Evaluation request forms that capture leads 24/7.",
      },
      {
        icon: ShieldCheck,
        title: "Insurance & Payment Info",
        description: "Clearly communicate accepted insurance plans and payment options.",
      },
      {
        icon: Search,
        title: "Google Business Profile",
        description: "Full setup so your clinic appears in local map results.",
      },
      {
        icon: Globe,
        title: "Local SEO Foundation",
        description: "Optimized for physical therapy + city searches from day one.",
      },
      {
        icon: Heart,
        title: "Patient Testimonials Section",
        description: "Showcase recovery stories and outcomes from patients you've helped.",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Professional on every device your patients use to find you.",
      },
    ],
  },
  process: {
    headline: "From Consultation to Live PT Website",
    steps: [
      {
        title: "Tell Us About Your Practice",
        description:
          "A 20-minute call about your specialties, ideal patients, and what sets your clinic apart.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that conveys your expertise and the outcomes you deliver.",
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
      name: "Dr. Kevin T.",
      title: "Owner, Summit Physical Therapy",
      location: "Salt Lake City, UT",
      quote:
        "Adding new providers to our site used to be a nightmare with our old platform. Now I just email the Graylock team and it's updated within a day. The site looks incredible and we're getting more direct-access patients than ever before.",
    },
    others: [
      {
        name: "Michelle D.",
        title: "DPT, Pelvic Floor Specialist",
        location: "Nashville, TN",
        quote:
          "I specialize in pelvic floor therapy and needed a site that treated the topic with professionalism and sensitivity. Graylock nailed it. Patients tell me the site is what made them comfortable reaching out.",
      },
      {
        name: "Jason R.",
        title: "Sports PT",
        location: "San Diego, CA",
        quote:
          "My athletes and their parents research everything. My new site shows them exactly what we do, how we do it, and why they should choose us. Referrals from the site have been consistent since launch.",
      },
    ],
  },
  faqs: [
    {
      q: "Do you build websites specifically for physical therapy practices?",
      a: "Yes. We build custom websites for PT practices of all sizes — solo therapists, multi-therapist clinics, and multi-location practices. Every site is tailored to your specialties and local market.",
    },
    {
      q: "Can I have separate pages for each condition or specialty I treat?",
      a: "Absolutely. Orthopedic rehab, sports injuries, post-surgical recovery, pelvic floor therapy — each gets its own page that ranks for its own keywords. This is especially important for direct-access patients searching for specific treatment.",
    },
    {
      q: "How long does it take to build a physical therapy website?",
      a: "7–10 business days on average from when you approve the plan and pay the setup fee. The process requires minimal time from you.",
    },
    {
      q: "Will my site help with physician referrals?",
      a: "Yes. A professional, well-organized website builds confidence with referring physicians, orthopedic surgeons, and other providers. Many of our PT clients report that their referral sources mention the website as a factor in their confidence to refer.",
    },
  ],
  bottomCta: {
    headline: "Patients Are Searching for Physical Therapy in Your Area Right Now",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your PT website could look like — and build you a custom homepage demo before you commit to anything.",
    button: "Schedule a Free Consultation",
  },
  showPrivacyNote: true,
  relatedPages: [
    { name: "Chiropractors", path: "/websites-for-chiropractors" },
    { name: "Physicians", path: "/websites-for-physicians" },
    { name: "Therapists & Counselors", path: "/websites-for-therapists" },
    { name: "Accounting Firms", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Physical Therapists | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-physical-therapists",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build websites specifically for physical therapy practices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build custom websites for PT practices of all sizes — solo therapists, multi-therapist clinics, and multi-location practices.",
        },
      },
    ],
  },
};

export default function PhysicalTherapists() {
  return <IndustryLandingPage data={data} />;
}
