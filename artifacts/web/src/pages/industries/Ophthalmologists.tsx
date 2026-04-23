import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Eye,
  Globe,
  Search,
  Phone,
  Clock,
  ShieldCheck,
  FileText,
  Smartphone,
  UserCheck,
  Heart,
  Scan,
  MapPin,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for Ophthalmologists | Graylock Digital",
    description:
      "Custom websites for ophthalmologists and eye surgery centers. LASIK and cataract pages, local SEO, patient inquiry forms in 7–10 business days.",
    url: "https://graylockdigital.com/websites-for-ophthalmologists",
  },
  hero: {
    badge: "For Ophthalmologists",
    badgeIcon: Eye,
    h1: "Your Patients Trust You With Their Vision.",
    h1Highlight: "Your Website Should Earn That Trust First.",
    subheadline:
      "Patients considering LASIK, cataract, or any eye procedure research surgeons heavily before they ever book. If your site doesn't convey your expertise, credentials, and outcomes, they'll consult the surgeon whose site does. We build authoritative, SEO-optimized ophthalmology sites — fully managed, so you can focus on patient care.",
    cta: "Get a Free Practice Website Review",
    ctaSubtext: "20-minute call · Custom homepage demo · No obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-solo-practitioners.jpg`,
    trustSignals: [
      "Built for ophthalmology practices",
      "Consultation request forms",
      "Local SEO included",
      "Fully managed for you",
    ],
  },
  specialties: {
    headline: "Ophthalmology Websites for Every Subspecialty",
    tags: [
      "LASIK & Refractive Surgery",
      "Cataract Surgery",
      "Glaucoma",
      "Retina & Vitreous",
      "Cornea",
      "Oculoplastics",
      "Pediatric Ophthalmology",
      "Neuro-Ophthalmology",
      "Comprehensive Eye Care",
      "Dry Eye Treatment",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Patients Research Their Eye Surgeon More Than Almost Any Other Doctor",
    cards: [
      {
        icon: Scan,
        title: "Your clinical reputation exceeds your online presence",
        description:
          "You're one of the best surgeons in your area, but your website looks like it was built a decade ago. Patients who find you online don't see the surgeon your referral network knows.",
      },
      {
        icon: Search,
        title: "Not ranking for surgical procedure searches",
        description:
          "When someone searches 'LASIK surgeon near me' or 'cataract surgery in [city],' your competitors show up first.",
      },
      {
        icon: Phone,
        title: "LASIK and cosmetic patients shop around",
        description:
          "Elective procedure patients compare multiple surgeons online. If your site doesn't stand out with credentials, technology, and results, they book elsewhere.",
      },
    ],
  },
  benefits: {
    headline: "An Ophthalmology Website That Converts Searches Into Consultations",
    items: [
      {
        title: "Procedure Pages That Rank",
        description:
          "LASIK, cataract surgery, glaucoma treatment, retinal care — each procedure gets its own SEO-optimized page.",
      },
      {
        title: "24/7 Consultation Request Forms",
        description:
          "Capture potential surgical patients the moment they're ready to act. Every inquiry is a potential consultation.",
      },
      {
        title: "Surgeon Bio Pages",
        description:
          "Showcase your board certifications, fellowship training, surgical volume, and the technology you use.",
      },
      {
        title: "Local SEO That Drives Patients",
        description:
          "Optimized for 'ophthalmologist near me', 'LASIK in [city]', and procedure-specific searches from day one.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No months of waiting. From consultation to live website in under two weeks.",
      },
      {
        title: "Fully Managed — You Focus on Patients",
        description:
          "Hosting, updates, SEO, and support all included. One LASIK consultation covers months of service.",
      },
    ],
  },
  process: {
    headline: "From Consultation to Live Ophthalmology Website",
    steps: [
      {
        title: "Tell Us About Your Practice",
        description:
          "A 20-minute call about your subspecialties, ideal patients, and what makes your surgical practice unique.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that conveys surgical expertise and clinical authority.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through every detail — procedure pages, surgeon bios, forms — until it represents your practice perfectly.",
      },
      {
        title: "Launch & Grow",
        description:
          "Your site goes live and starts attracting consultation requests through Google search.",
      },
    ],
  },
  testimonials: {
    featured: {
      name: "Dr. Robert K.",
      title: "LASIK & Cataract Surgeon",
      location: "Phoenix, AZ",
      quote:
        "We perform over 2,000 procedures a year, but our website made us look like a small clinic. Graylock redesigned everything — procedure pages, surgeon bios, technology showcases — and LASIK consultation requests from our website have nearly doubled.",
    },
    others: [
      {
        name: "Dr. Anita M.",
        title: "Retina Specialist",
        location: "Houston, TX",
        quote:
          "Referring optometrists now tell me they pull up my website when discussing referrals with patients. That's exactly the credibility I needed online.",
      },
      {
        name: "Dr. Steven H.",
        title: "Glaucoma Specialist",
        location: "Seattle, WA",
        quote:
          "Simple, clean, professional. Patients tell me the website is what made them feel comfortable choosing us for their surgery.",
      },
    ],
  },
  faqs: [
    {
      q: "Do you build websites specifically for ophthalmology practices?",
      a: "Yes. We build custom websites for ophthalmologists — from solo surgeons to multi-surgeon practices and ambulatory surgery centers. Every site is tailored to your subspecialties and local market.",
    },
    {
      q: "Can I have separate pages for each procedure I perform?",
      a: "Absolutely. LASIK, cataract surgery, glaucoma treatment, retinal procedures, oculoplastics — each gets its own page that ranks for its own keywords. Procedure-specific pages are critical for attracting patients searching for specific treatments.",
    },
    {
      q: "How long does it take to build an ophthalmology website?",
      a: "7–10 business days on average from when you approve the plan and pay the setup fee. The process requires minimal time from you or your staff.",
    },
    {
      q: "Can I showcase the technology and equipment in my practice?",
      a: "Yes. We can build sections highlighting your surgical technology, diagnostic equipment, and facility features. For ophthalmology patients, seeing that you invest in advanced technology is a major trust signal.",
    },
  ],
  pricingHeadline: "Pricing for Solo Surgeons and Multi-Location Surgery Centers",
  bottomCta: {
    headline: "Patients Are Researching Eye Surgeons in Your Area Right Now",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your ophthalmology website could look like — and build you a custom homepage demo before you commit to anything.",
    button: "Get a Free Demo",
  },
  showPrivacyNote: true,
  relatedPages: [
    { name: "Optometrists", path: "/websites-for-optometrists" },
    { name: "Physicians", path: "/websites-for-physicians" },
    { name: "Dermatologists", path: "/websites-for-dermatologists" },
    { name: "Accounting Firms", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Ophthalmologists | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-ophthalmologists",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build websites specifically for ophthalmology practices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build custom websites for ophthalmologists — from solo surgeons to multi-surgeon practices and ambulatory surgery centers.",
        },
      },
    ],
  },
};

export default function Ophthalmologists() {
  return <IndustryLandingPage data={data} />;
}
