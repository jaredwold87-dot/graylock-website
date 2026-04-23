import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  HeartHandshake,
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
    title: "Websites for Therapists & Counselors | Graylock Digital",
    description:
      "Custom websites for therapists and counselors. Local SEO, client inquiry forms, built in 7–10 business days. No long-term contracts.",
    url: "https://graylockdigital.com/websites-for-therapists",
  },
  hero: {
    badge: "For Therapists & Counselors",
    badgeIcon: HeartHandshake,
    h1: "Asking for Help Is the Hardest Part.",
    h1Highlight: "Your Website Should Make It Easier.",
    subheadline:
      "Anyone searching for a therapist is already anxious. A cold, confusing, or generic site costs you the first call. We build warm, SEO-optimized sites for therapists and counselors that help the right clients find you and feel safe reaching out — fully managed, so you stay focused on your clients.",
    cta: "Get a Free Practice Website Review",
    ctaSubtext: "20-minute call · Custom homepage demo · No obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-solo-practitioners.jpg`,
    trustSignals: [
      "Built for therapists & counselors",
      "Client inquiry forms",
      "Local SEO included",
      "Fully managed for you",
    ],
  },
  specialties: {
    headline: "Websites for Every Type of Therapist & Counselor",
    tags: [
      "Licensed Therapists (LCSW, LPC, LMFT)",
      "Marriage & Family Counseling",
      "Anxiety & Depression",
      "Trauma & PTSD",
      "Child & Adolescent Therapy",
      "Grief & Loss Counseling",
      "Addiction & Substance Abuse",
      "EMDR Therapy",
      "CBT & DBT",
      "Group Therapy",
      "Telehealth Therapy",
      "Faith-Based Counseling",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Someone Is Looking for a Therapist in Your Area Right Now — Will They Find You?",
    image: `${import.meta.env.BASE_URL}outdated-practice-website.png`,
    cards: [
      {
        icon: Eye,
        title: "Your website doesn't feel like your practice",
        description:
          "You create a safe, welcoming space for clients in person. Your website feels like it was thrown together and doesn't convey the same warmth.",
      },
      {
        icon: Search,
        title: "Directory listings are your only source of clients",
        description:
          "You're paying for directory listings but don't own your online presence. When those platforms change their algorithms, your inquiries dry up.",
      },
      {
        icon: Phone,
        title: "Clients ready to reach out can't find a way",
        description:
          "The decision to contact a therapist often happens late at night. If your site doesn't make it easy to reach you in that moment, you lose them.",
      },
    ],
  },
  benefits: {
    headline: "A Therapist Website That Connects You With the Right Clients",
    items: [
      {
        title: "Specialty Pages That Rank",
        description:
          "Anxiety, depression, trauma, couples counseling, grief — each specialty gets its own SEO-optimized page so clients find you for the help they need.",
      },
      {
        title: "24/7 Client Inquiry Forms",
        description:
          "Capture potential clients the moment they're ready to reach out. Every inquiry is a potential session on your calendar.",
      },
      {
        title: "Therapist Bio Pages",
        description:
          "Build connection before the first session with warm, professional bios that help clients feel comfortable choosing you.",
      },
      {
        title: "Local SEO That Drives Clients",
        description:
          "Optimized for 'therapist near me', 'counselor in [city]', and specialty-specific searches from day one.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No months of waiting. From consultation to live website in under two weeks.",
      },
      {
        title: "Fully Managed — You Focus on Clients",
        description:
          "Hosting, updates, SEO, and support all included. One new client covers months of service — and you'll never touch a line of code.",
      },
    ],
  },
  process: {
    headline: "From Consultation to Live Therapy Website",
    steps: [
      {
        title: "Tell Us About Your Practice",
        description:
          "A 20-minute call about your specialties, ideal clients, and the tone you want your website to convey.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that feels warm, trustworthy, and authentic to who you are as a clinician.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through every detail — specialty pages, bio, forms — until it represents your practice perfectly.",
      },
      {
        title: "Launch & Grow",
        description:
          "Your site goes live and starts connecting you with clients through Google search.",
      },
    ],
  },
  testimonials: {
    featured: {
      name: "Sarah M.",
      title: "Licensed Therapist",
      location: "Reno, NV",
      quote:
        "My old site looked outdated and unprofessional. Graylock built me a beautiful new site in under a week, and I finally feel confident sending people to it. I've reduced my spending on directory listings because my own site is now bringing in clients directly from Google. Best decision I've made for my practice.",
    },
    others: [
      {
        name: "Jennifer K.",
        title: "LMFT, Couples Counselor",
        location: "Portland, OR",
        quote:
          "Couples are nervous enough reaching out for help. My new site puts them at ease immediately. The intake form makes it simple, and I'm getting inquiries from people who feel like they already know me before we ever meet.",
      },
      {
        name: "Carlos R.",
        title: "LPC, Trauma Specialist",
        location: "San Antonio, TX",
        quote:
          "I work with trauma survivors who need to feel safe before reaching out. The site Graylock built conveys exactly the right tone — warm, professional, and clear about what to expect. Inquiries have been steady since launch.",
      },
    ],
  },
  faqs: [
    {
      q: "Do you build websites specifically for therapists and counselors?",
      a: "Yes. We build custom websites for therapists, counselors, and mental health professionals of all types — LCSWs, LPCs, LMFTs, and more. Every site is tailored to your specialties, client population, and local market.",
    },
    {
      q: "Can I have separate pages for each issue I specialize in?",
      a: "Absolutely. Anxiety, depression, trauma, couples therapy, grief, addiction — each gets its own page that ranks for its own keywords. This is one of the most effective ways to attract clients searching for help with specific issues.",
    },
    {
      q: "How long does it take to build a therapist website?",
      a: "7–10 business days on average from when you approve the plan and pay the setup fee. The process requires minimal time from you — one 20-minute call and a quick review of the demo.",
    },
    {
      q: "Will my site help me reduce my reliance on directory listings?",
      a: "That's one of the biggest benefits. A well-optimized website gives you your own source of client inquiries — one you own and control. Many of our therapist clients reduce or eliminate directory spending after their site starts ranking.",
    },
  ],
  pricingHeadline: "Pricing for Solo Therapists and Group Practices",
  bottomCta: {
    headline: "Someone Is Searching for a Therapist in Your Area Right Now",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your therapy website could look like — and build you a custom homepage demo before you commit to anything.",
    button: "Get a Free Demo",
  },
  showPrivacyNote: true,
  relatedPages: [
    { name: "Psychologists", path: "/websites-for-psychologists" },
    { name: "Physicians", path: "/websites-for-physicians" },
    { name: "Physical Therapists", path: "/websites-for-physical-therapists" },
    { name: "Accounting Firms", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Therapists & Counselors | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-therapists",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build websites specifically for therapists and counselors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build custom websites for therapists, counselors, and mental health professionals of all types — LCSWs, LPCs, LMFTs, and more.",
        },
      },
    ],
  },
};

export default function Therapists() {
  return <IndustryLandingPage data={data} />;
}
