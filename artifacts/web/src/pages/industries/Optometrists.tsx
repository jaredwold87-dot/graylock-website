import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Glasses,
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
    title: "Websites for Optometrists | Custom Sites | Graylock Digital",
    description:
      "Graylock builds custom, SEO-optimized websites for optometrists and eye care practices. Service pages, local SEO, patient inquiry forms. Built in 7–10 business days. No long-term contracts.",
    url: "https://graylockdigital.com/websites-for-optometrists",
  },
  hero: {
    badge: "For Optometrists",
    badgeIcon: Glasses,
    h1: "Patients Pick Their Eye Doctor Online.",
    h1Highlight: "Are They Picking You?",
    subheadline:
      "When someone needs a new eye doctor — whether for an annual exam, contact lens fitting, or something more urgent — they Google it. If your practice doesn't show up or your website looks like it belongs to a different decade, they're booking with the optometrist whose site does. We build modern, SEO-optimized websites for optometry practices. Fully managed — so you can focus on patient care.",
    cta: "Schedule a Free Consultation",
    backgroundImage: `${import.meta.env.BASE_URL}hero-solo-practitioners.jpg`,
    trustSignals: [
      "Built for optometry practices",
      "Online appointment requests",
      "Local SEO included",
      "Fully managed for you",
    ],
  },
  specialties: {
    headline: "Optometry Websites for Every Specialty",
    tags: [
      "Comprehensive Eye Exams",
      "Contact Lens Fitting",
      "Pediatric Eye Care",
      "Dry Eye Treatment",
      "Myopia Management",
      "Vision Therapy",
      "Diabetic Eye Care",
      "Glaucoma Monitoring",
      "Emergency Eye Care",
      "Optical Dispensary",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Every Day Your Website Underperforms, You're Losing Patients to the Practice Down the Street",
    cards: [
      {
        icon: Eye,
        title: "New patients search and choose someone else",
        description:
          "They search for an eye doctor in your area, find your site, and it doesn't look like the professional practice you run. They book with the next result instead.",
      },
      {
        icon: Search,
        title: "Not ranking for eye care searches",
        description:
          "When someone searches 'eye doctor near me' or 'optometrist in [city],' your competitors appear and you don't.",
      },
      {
        icon: Phone,
        title: "Patients can't schedule after hours",
        description:
          "Someone realizes they need an eye exam on Sunday night. Your site has no way to capture that — so they book with the practice that does.",
      },
    ],
  },
  benefits: {
    headline: "An Optometry Website Built to Grow Your Patient Base",
    items: [
      {
        title: "Service Pages That Rank",
        description:
          "Eye exams, contact lenses, dry eye treatment, pediatric care — each service gets its own SEO-optimized page.",
      },
      {
        title: "24/7 Appointment Request Forms",
        description:
          "Capture new patients the moment they're ready to act. Every inquiry is a potential appointment on your schedule.",
      },
      {
        title: "Provider Bio Pages",
        description:
          "Build trust with prospective patients through professional bios showcasing your credentials and specializations.",
      },
      {
        title: "Local SEO That Drives Patients",
        description:
          "Optimized for 'optometrist near me', 'eye doctor in [city]', and service-specific searches from day one.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No months of waiting. From consultation to live website in under two weeks.",
      },
      {
        title: "Fully Managed — You Focus on Patients",
        description:
          "Hosting, updates, SEO, and support all included. One new patient exam covers months of service.",
      },
    ],
  },
  features: {
    headline: "Everything Your Optometry Website Includes",
    items: [
      {
        icon: Glasses,
        title: "Service & Specialty Pages",
        description: "Each service area gets its own SEO-optimized page.",
      },
      {
        icon: UserCheck,
        title: "Provider Bio Pages",
        description: "Professional bios with credentials, certifications, and areas of focus.",
      },
      {
        icon: FileText,
        title: "Patient Inquiry Forms",
        description: "Appointment request forms that capture leads 24/7.",
      },
      {
        icon: ShieldCheck,
        title: "Insurance & Vision Plans",
        description: "Clearly communicate accepted insurance and vision plans.",
      },
      {
        icon: Search,
        title: "Google Business Profile",
        description: "Full setup so your practice appears in local map results.",
      },
      {
        icon: Globe,
        title: "Local SEO Foundation",
        description: "Optimized for optometry + city searches from day one.",
      },
      {
        icon: Heart,
        title: "Patient Testimonials Section",
        description: "Showcase reviews and recommendations from satisfied patients.",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Professional on every device your patients use to find you.",
      },
    ],
  },
  process: {
    headline: "From Consultation to Live Optometry Website",
    steps: [
      {
        title: "Tell Us About Your Practice",
        description:
          "A 20-minute call about your services, ideal patients, and what sets your practice apart.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that conveys professionalism and the quality care you provide.",
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
      name: "Ben L.",
      title: "Optometrist, Multi-Location Practice",
      location: "Pacific Northwest",
      quote:
        "We had two outdated websites creating confusion for patients. Graylock consolidated everything into one clean site and restructured how new patients contact us. Every inquiry now routes directly to the right person on my team. No more missed calls, no more phone tag.",
    },
    others: [
      {
        name: "Dr. Amanda J.",
        title: "Optometrist",
        location: "Portland, OR",
        quote:
          "My old site was from 2016 and looked it. Graylock rebuilt everything in 8 days. Patients now tell me they chose our practice because of how professional the website looked.",
      },
      {
        name: "Dr. Nathan R.",
        title: "Pediatric Optometrist",
        location: "Denver, CO",
        quote:
          "Parents do extensive research before choosing an eye doctor for their kids. My new site gives them everything — my approach, what to expect, how to prepare. Bookings are up noticeably.",
      },
    ],
  },
  faqs: [
    {
      q: "Do you build websites specifically for optometrists?",
      a: "Yes. We build custom websites for optometry practices of all sizes — solo practitioners, group practices, and practices with optical shops. Every site is tailored to your services and local market.",
    },
    {
      q: "Can I include my optical shop or eyewear brands on the site?",
      a: "Absolutely. We can build sections highlighting your optical dispensary, featured brands, and eyewear collections. This is a great way to differentiate your practice and drive foot traffic.",
    },
    {
      q: "How long does it take to build an optometry website?",
      a: "7–10 business days on average from when you approve the plan and pay the setup fee. Most optometrists are surprised how fast and easy the process is.",
    },
    {
      q: "Will my site show up when people search 'eye doctor near me'?",
      a: "Every Graylock site includes a local SEO foundation. Growth and Scale plans include full local SEO optimization and Google Business Profile setup — critical for showing up in 'optometrist near me' and 'eye exam in [city]' searches.",
    },
  ],
  bottomCta: {
    headline: "New Patients Are Searching for an Eye Doctor in Your Area Right Now",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your optometry website could look like — and build you a custom homepage demo before you commit to anything.",
    button: "Schedule a Free Consultation",
  },
  showPrivacyNote: true,
  relatedPages: [
    { name: "Ophthalmologists", path: "/websites-for-ophthalmologists" },
    { name: "Physicians", path: "/websites-for-physicians" },
    { name: "Dentists", path: "/websites-for-dentists" },
    { name: "Accounting Firms", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Optometrists | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-optometrists",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build websites specifically for optometrists?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build custom websites for optometry practices of all sizes — solo practitioners, group practices, and practices with optical shops.",
        },
      },
    ],
  },
};

export default function Optometrists() {
  return <IndustryLandingPage data={data} />;
}
