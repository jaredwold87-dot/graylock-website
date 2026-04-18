import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  PawPrint,
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
    title: "Websites for Veterinarians | Custom Vet Sites | Graylock Digital",
    description:
      "Graylock builds custom, SEO-optimized websites for veterinarians and animal hospitals. Service pages, local SEO, appointment request forms. Built in 7–10 business days. No long-term contracts.",
    url: "https://graylockdigital.com/websites-for-veterinarians",
  },
  hero: {
    badge: "For Veterinarians",
    badgeIcon: PawPrint,
    h1: "Pet Owners Choose Their Vet Online.",
    h1Highlight: "What Does Your Website Say About Your Practice?",
    subheadline:
      "When someone moves to a new area or their pet needs care, the first thing they do is Google 'vet near me.' If your website looks outdated, doesn't showcase your services, or doesn't let them request an appointment — they're calling the animal hospital down the road instead. We build modern, SEO-optimized websites for veterinary practices that turn pet owners into loyal clients. Fully managed — so you can focus on animal care.",
    cta: "Get a Free Veterinary Website Review",
    ctaSubtext: "20-minute call · Custom homepage demo · No obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-solo-practitioners.jpg`,
    trustSignals: [
      "Built for veterinary practices",
      "Online appointment requests",
      "Local SEO included",
      "Fully managed for you",
    ],
  },
  specialties: {
    headline: "Veterinary Websites for Every Type of Practice",
    tags: [
      "General Veterinary",
      "Emergency & Critical Care",
      "Veterinary Surgery",
      "Veterinary Dentistry",
      "Dermatology",
      "Internal Medicine",
      "Oncology",
      "Exotic Animal Care",
      "Equine Veterinary",
      "Mobile Veterinary",
      "Holistic & Integrative",
      "Behavioral Medicine",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Pet Owners Judge Your Practice by Your Website Before They Ever Walk In",
    cards: [
      {
        icon: Eye,
        title: "Pet owners Google you and choose someone else",
        description:
          "They search for a vet in your area, find your site, and it doesn't look like the compassionate, modern practice you actually run.",
      },
      {
        icon: Search,
        title: "Not ranking for veterinary searches",
        description:
          "When someone searches 'vet near me' or 'animal hospital in [city],' your competitors appear. You don't. Those are pet owners who never even knew you existed.",
      },
      {
        icon: Phone,
        title: "No way to request appointments online",
        description:
          "Pet owners want to schedule on their terms — not just during your front desk hours. If your site doesn't offer that, they'll find a practice that does.",
      },
    ],
  },
  benefits: {
    headline: "A Veterinary Website Built to Grow Your Client Base",
    items: [
      {
        title: "Service Pages That Rank",
        description:
          "Wellness exams, vaccinations, dental care, surgery, emergency services — each gets its own SEO-optimized page.",
      },
      {
        title: "24/7 Appointment Request Forms",
        description:
          "Capture new clients the moment they're ready to act. Every inquiry is a potential new patient on your schedule.",
      },
      {
        title: "Doctor Bio Pages",
        description:
          "Build trust with pet owners through professional bios showcasing your veterinarians' credentials, specialties, and love for animals.",
      },
      {
        title: "Local SEO That Drives Clients",
        description:
          "Optimized for 'vet near me', 'animal hospital in [city]', and service-specific searches from day one.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No months of waiting. From consultation to live website in under two weeks.",
      },
      {
        title: "Fully Managed — You Focus on Animal Care",
        description:
          "Hosting, updates, SEO, and support all included. One new pet owner visit covers months of service.",
      },
    ],
  },
  features: {
    headline: "Everything Your Veterinary Website Includes",
    items: [
      {
        icon: PawPrint,
        title: "Service & Specialty Pages",
        description: "Each service area gets its own SEO-optimized page.",
      },
      {
        icon: UserCheck,
        title: "Doctor Bio Pages",
        description: "Professional bios for each veterinarian with credentials and specialties.",
      },
      {
        icon: FileText,
        title: "Appointment Request Forms",
        description: "Online appointment request forms that capture leads 24/7.",
      },
      {
        icon: ShieldCheck,
        title: "New Client Information",
        description: "Clearly communicate what new clients need to know — forms, policies, and what to bring.",
      },
      {
        icon: Search,
        title: "Google Business Profile",
        description: "Full setup so your practice appears in local map results.",
      },
      {
        icon: Globe,
        title: "Local SEO Foundation",
        description: "Optimized for veterinary + city searches from day one.",
      },
      {
        icon: Heart,
        title: "Client Testimonials Section",
        description: "Showcase reviews from pet owners who trust you with their animals' care.",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Professional on every device pet owners use to find you.",
      },
    ],
  },
  process: {
    headline: "From Consultation to Live Veterinary Website",
    steps: [
      {
        title: "Tell Us About Your Practice",
        description:
          "A 20-minute call about your services, ideal clients, and what sets your veterinary practice apart.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that conveys compassion, professionalism, and the quality care you provide.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through every detail — service pages, doctor bios, forms — until it represents your practice perfectly.",
      },
      {
        title: "Launch & Grow",
        description:
          "Your site goes live and starts attracting new pet owners through Google search.",
      },
    ],
  },
  testimonials: {
    featured: {
      name: "Dr. Ashley M.",
      title: "Owner, Riverside Animal Hospital",
      location: "Riverside, CA",
      quote:
        "We're a small animal hospital competing with corporate chains that spend thousands on marketing. Graylock built us a website that looks better than theirs and actually shows up when people search for a vet in our area. New client calls from the website have been consistent every week since launch.",
    },
    others: [
      {
        name: "Dr. Tom W.",
        title: "Emergency Veterinarian",
        location: "Columbus, OH",
        quote:
          "When someone's pet has an emergency at 2am, they Google it. Our site now shows up for those searches and clearly explains what we do and how to reach us. That visibility saves animals' lives.",
      },
      {
        name: "Dr. Kayla N.",
        title: "Exotic Animal Vet",
        location: "Austin, TX",
        quote:
          "Finding an exotic animal vet isn't easy — my clients often travel from other cities. My new site makes it easy for reptile, bird, and small mammal owners to find me and understand the specialized care I provide.",
      },
    ],
  },
  faqs: [
    {
      q: "Do you build websites specifically for veterinary practices?",
      a: "Yes. We build custom websites for veterinary practices of all types — general practices, emergency hospitals, specialty clinics, and mobile vets. Every site is tailored to your services and local market.",
    },
    {
      q: "Can I have separate pages for each service my practice offers?",
      a: "Absolutely. Wellness exams, vaccinations, surgery, dentistry, boarding, grooming — each gets its own page that ranks for its own keywords. This helps pet owners find exactly the service they need.",
    },
    {
      q: "How long does it take to build a veterinary website?",
      a: "7–10 business days on average from when you approve the plan and pay the setup fee. The process requires minimal time from you or your staff.",
    },
    {
      q: "Can I include photos of my facility and team?",
      a: "Yes — and we strongly encourage it. Pet owners want to see your clinic, meet your doctors, and get a feel for the environment before bringing their pet in. We'll work the photos you provide into a professional, polished design.",
    },
  ],
  bottomCta: {
    headline: "Pet Owners Are Searching for a Vet in Your Area Right Now",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your veterinary website could look like — and build you a custom homepage demo before you commit to anything.",
    button: "Schedule a Free Consultation",
  },
  showPrivacyNote: true,
  relatedPages: [
    { name: "Physicians", path: "/websites-for-physicians" },
    { name: "Dentists", path: "/websites-for-dentists" },
    { name: "Chiropractors", path: "/websites-for-chiropractors" },
    { name: "Accounting Firms", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Veterinarians | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-veterinarians",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build websites specifically for veterinary practices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build custom websites for veterinary practices of all types — general practices, emergency hospitals, specialty clinics, and mobile vets.",
        },
      },
    ],
  },
};

export default function Veterinarians() {
  return <IndustryLandingPage data={data} />;
}
