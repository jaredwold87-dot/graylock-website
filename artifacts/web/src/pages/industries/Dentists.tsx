import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Smile,
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
    title: "Websites for Dentists | Custom Dental Sites Starting at $199/mo | Graylock Digital",
    description:
      "Graylock builds custom, SEO-optimized websites for dentists and dental practices. Service pages, local SEO, patient inquiry forms. Built in 7–10 business days. Starting at $199/mo.",
    url: "https://graylockdigital.com/websites-for-dentists",
  },
  hero: {
    badge: "For Dentists",
    badgeIcon: Smile,
    h1: "Patients Choose Their Dentist Online.",
    h1Highlight: "What Does Your Website Say About You?",
    subheadline:
      "When someone moves to a new city or loses their dentist, the first thing they do is Google it. If your website looks outdated, loads slowly, or doesn't show up at all — they're booking with the practice that does. We build custom, SEO-optimized websites for dental practices that turn searches into scheduled appointments. Fully managed — so you can focus on your patients.",
    cta: "Book Your Free Website Review",
    backgroundImage: `${import.meta.env.BASE_URL}hero-solo-practitioners.jpg`,
    trustSignals: [
      "Built for dental practices",
      "Online appointment requests",
      "Local SEO included",
      "Fully managed for you",
    ],
  },
  specialties: {
    headline: "Dental Websites for Every Specialty",
    tags: [
      "General Dentistry",
      "Cosmetic Dentistry",
      "Pediatric Dentistry",
      "Orthodontics",
      "Oral Surgery",
      "Periodontics",
      "Endodontics",
      "Prosthodontics",
      "Implant Dentistry",
      "Family Dentistry",
      "Sedation Dentistry",
      "Emergency Dental",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Every Day Your Website Underperforms, You're Losing Patients to the Practice Down the Street",
    image: `${import.meta.env.BASE_URL}before-desktop.png`,
    cards: [
      {
        icon: Eye,
        title: "New patients Google you and call someone else",
        description:
          "They search for a dentist in your area, find your site, and it doesn't inspire confidence. They book with the practice that has a modern, professional website instead.",
      },
      {
        icon: Search,
        title: "Not ranking for dental searches in your city",
        description:
          "When someone searches 'dentist near me' or 'teeth whitening in [your city],' your competitors show up. You're invisible.",
      },
      {
        icon: Phone,
        title: "Losing after-hours appointment requests",
        description:
          "A toothache doesn't wait until Monday morning. If patients can't request an appointment from your site at 10pm, they'll find someone who lets them.",
      },
    ],
  },
  benefits: {
    headline: "A Dental Website Built to Fill Your Chair Schedule",
    items: [
      {
        title: "Service Pages That Rank",
        description:
          "Cleanings, whitening, implants, Invisalign — each service gets its own SEO-optimized page so patients find exactly what they need.",
      },
      {
        title: "24/7 Appointment Request Forms",
        description:
          "Capture new patients the moment they're ready to act, even at midnight. Every inquiry is a potential appointment on your schedule.",
      },
      {
        title: "Provider Bio Pages",
        description:
          "Build trust before the first visit with professional bios showcasing your education, certifications, and approach to patient care.",
      },
      {
        title: "Local SEO That Drives Patients",
        description:
          "Optimized for 'dentist near me', 'family dentist in [city]', and procedure-specific searches from day one.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No months of waiting. From consultation to live website in under two weeks.",
      },
      {
        title: "Fully Managed — You Focus on Patients",
        description:
          "Hosting, updates, SEO, and support all included. One new patient appointment covers months of service.",
      },
    ],
  },
  features: {
    headline: "Everything Your Dental Website Includes",
    items: [
      {
        icon: Smile,
        title: "Service & Procedure Pages",
        description: "Each dental service gets its own SEO-optimized page.",
      },
      {
        icon: UserCheck,
        title: "Provider Bio Pages",
        description: "Professional bios with credentials, education, and treatment philosophy.",
      },
      {
        icon: FileText,
        title: "Patient Inquiry Forms",
        description: "Appointment request forms that capture leads 24/7.",
      },
      {
        icon: ShieldCheck,
        title: "Insurance & Payment Info",
        description: "Clearly communicate accepted insurance and financing options.",
      },
      {
        icon: Search,
        title: "Google Business Profile",
        description: "Full setup so your practice appears in local map results.",
      },
      {
        icon: Globe,
        title: "Local SEO Foundation",
        description: "Optimized for dental + city searches from day one.",
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
    headline: "From Consultation to Live Dental Website",
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
      name: "Dr. Rachel M.",
      title: "Owner, Lakeside Family Dental",
      location: "Minneapolis, MN",
      quote:
        "We spent two years with a website that embarrassed us. Graylock rebuilt it in 9 days and the difference was immediate — more appointment requests from Google, and patients actually tell us the website is what made them choose us over the other dentist in our building.",
    },
    others: [
      {
        name: "Dr. Andrew S.",
        title: "Cosmetic Dentist",
        location: "Scottsdale, AZ",
        quote:
          "I needed a site that showcased my cosmetic work at the level my patients expect. Graylock nailed it. Clean, modern, professional — exactly the impression I want to make.",
      },
      {
        name: "Dr. Lisa T.",
        title: "Pediatric Dentist",
        location: "Charlotte, NC",
        quote:
          "Parents research everything. My new site gives them everything they need — our approach, our team, what to expect — and they're booking before they even call.",
      },
    ],
  },
  faqs: [
    {
      q: "Do you build websites specifically for dental practices?",
      a: "Yes. We build custom websites for dental practices of all sizes — solo dentists, group practices, multi-location clinics, and specialty practices. Every site is tailored to your services and local market.",
    },
    {
      q: "Can I have separate pages for each dental service?",
      a: "Absolutely. Cleanings, whitening, implants, veneers, Invisalign, pediatric care — each gets its own page that ranks for its own keywords. This is one of the most effective ways to attract patients searching for specific procedures.",
    },
    {
      q: "How long does it take to build a dental website?",
      a: "7–10 business days on average from when you approve the plan and pay the setup fee. Most dental practices are surprised how fast and easy the process is.",
    },
    {
      q: "Will my site show up when people search 'dentist near me'?",
      a: "Every Graylock site includes a local SEO foundation. Group Practice and Enterprise plans include full local SEO optimization and Google Business Profile setup — critical for showing up in 'dentist near me' and procedure-specific searches in your area.",
    },
  ],
  bottomCta: {
    headline: "New Patients Are Searching for a Dentist in Your Area Right Now",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your dental website could look like — and build you a custom homepage demo before you commit to anything.",
    button: "Book Your Free Website Review",
  },
  showPrivacyNote: true,
  relatedPages: [
    { name: "Physicians", path: "/websites-for-physicians" },
    { name: "Optometrists", path: "/websites-for-optometrists" },
    { name: "Dermatologists", path: "/websites-for-dermatologists" },
    { name: "Accounting Firms", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Dentists | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-dentists",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build websites specifically for dental practices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build custom websites for dental practices of all sizes — solo dentists, group practices, multi-location clinics, and specialty practices.",
        },
      },
    ],
  },
};

export default function Dentists() {
  return <IndustryLandingPage data={data} />;
}
