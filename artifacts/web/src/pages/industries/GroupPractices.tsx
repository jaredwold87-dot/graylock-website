import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Users,
  Globe,
  Search,
  Phone,
  Clock,
  Eye,
  ShieldCheck,
  FileText,
  Smartphone,
  UserCheck,
  Building2,
  Filter,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for Group Practices | Multi-Clinician Sites | $119/mo | Graylock Digital",
    description:
      "Graylock builds professional websites for group practices — showcasing your team, specialties, and individual clinicians. Custom built in 5 days. Starting at $119/mo. Free demo first.",
    url: "https://graylockdigital.com/websites-for-group-practices",
  },
  hero: {
    badge: "For Group Practices",
    badgeIcon: Building2,
    h1: "A Website That Represents",
    h1Highlight: "the Full Strength of Your Practice.",
    subheadline:
      "Your group practice has grown. Your website should reflect that. We build multi-clinician, specialty-rich websites for group practices — showcasing every provider, every service area, and every reason clients should choose you.",
    cta: "Book Your Free Website Review",
    trustSignals: [
      "Individual clinician pages",
      "Specialty filtering",
      "5-day build",
      "Easy to update",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Your Practice Has Grown — Has Your Website?",
    cards: [
      {
        icon: Eye,
        title: "Your website still looks like a solo practice",
        description:
          "Your site doesn't reflect your team's depth, specialties, or the scope of services you now offer.",
      },
      {
        icon: Filter,
        title: "Clients can't find the right clinician",
        description:
          "Prospective clients can't easily browse clinicians by specialty, insurance, or availability on your current site.",
      },
      {
        icon: Users,
        title: "New clinicians feel underserved",
        description:
          "Providers joining your practice are disappointed by a web presence that doesn't reflect the team they joined.",
      },
      {
        icon: ShieldCheck,
        title: "Referral sources aren't impressed",
        description:
          "When referral sources check your website, it doesn't inspire the confidence your practice deserves.",
      },
      {
        icon: Clock,
        title: "Updates require a developer",
        description:
          "Changing a clinician bio, photo, or availability shouldn't require contacting a web developer.",
      },
      {
        icon: Search,
        title: "Missing Google rankings for specialties",
        description:
          "You're not showing up on Google for all the specialties your team covers. Each one could be driving new clients.",
      },
    ],
  },
  benefits: {
    headline: "A Website That Matches Your Practice's Growth",
    items: [
      {
        title: "Individual Clinician Pages",
        description:
          "Each provider gets their own bio, photo, and specialty page — so clients can find exactly who they need.",
      },
      {
        title: "Specialty Filtering",
        description:
          "Help clients find the right therapist for their specific needs with easy-to-use filtering.",
      },
      {
        title: "Easy to Update",
        description:
          "Add or remove clinicians without a full rebuild. Request updates and we handle them quickly.",
      },
      {
        title: "Referral-Worthy Design",
        description:
          "Professional enough to be proud of in any context — referral partners, potential hires, and clients alike.",
      },
      {
        title: "SEO for Every Clinician",
        description:
          "Each clinician and specialty your practice covers gets its own SEO-optimized presence.",
      },
      {
        title: "Built in 5 Business Days",
        description:
          "With a dedicated review call before launch to make sure everything represents your practice perfectly.",
      },
    ],
  },
  features: {
    headline: "Everything a Group Practice Website Needs",
    items: [
      {
        icon: Users,
        title: "Team/Clinician Directory",
        description: "A professional directory page showcasing your full team.",
      },
      {
        icon: UserCheck,
        title: "Individual Bio Pages",
        description: "Each provider gets their own bio, headshot, and specialty page.",
      },
      {
        icon: FileText,
        title: "Specialty & Service Pages",
        description: "Dedicated pages for every service and specialty you offer.",
      },
      {
        icon: ShieldCheck,
        title: "Insurance Accepted Section",
        description: "Clearly list all insurance plans your practice accepts.",
      },
      {
        icon: Phone,
        title: "New Client Intake Forms",
        description: "Built-in intake and inquiry forms for new client requests.",
      },
      {
        icon: Building2,
        title: "Location & Hours Pages",
        description: "Multi-location support with hours and directions for each office.",
      },
      {
        icon: Search,
        title: "Local SEO Per Specialty",
        description: "Each specialty page is optimized to rank on Google individually.",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Beautiful and functional on phones, tablets, and desktops.",
      },
    ],
  },
  process: {
    headline: "From Call to Launch in 5 Days",
    steps: [
      {
        title: "Tell Us About Your Practice",
        description:
          "20-minute call about your team, specialties, locations, and ideal new clients.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a multi-clinician homepage and team directory layout for your review.",
      },
      {
        title: "Review & Refine",
        description:
          "We walk through every detail together — team pages, specialty sections, intake forms.",
      },
      {
        title: "Launch & Grow",
        description:
          "Your new group practice site goes live, representing the full strength of your team.",
      },
    ],
  },
  testimonials: {
    featured: {
      name: "Sarah M.",
      title: "Licensed Therapist",
      location: "Reno, NV",
      quote:
        "I was losing clients because my old site looked like a scam. Graylock built me a beautiful site in 3 days, and my consult requests have tripled. Best decision I've made for my practice.",
    },
    others: [
      {
        name: "Elena R.",
        title: "Family Attorney",
        location: "Austin, TX",
        quote:
          "The done-for-you aspect is exactly what I needed. I bill by the hour, so I can't afford to waste time with WordPress.",
      },
      {
        name: "David K.",
        title: "CPA & Tax Advisor",
        location: "Henderson, NV",
        quote:
          "I just email Tim and it's done the next day. Like having a full-time web developer on staff.",
      },
    ],
  },
  faqs: [
    {
      q: "Can each clinician have their own page on our group practice website?",
      a: "Yes — individual clinician pages with bio, headshot, specialty information, and contact details are a core feature. This is essential for group practices where clients want to choose a specific provider.",
    },
    {
      q: "How do you handle adding or removing clinicians?",
      a: "Simple. When a new provider joins or someone leaves, just let us know. We'll update bios, photos, and directory listings within 1-2 business days. No rebuild needed.",
    },
    {
      q: "Can prospective clients filter by specialty or insurance?",
      a: "Yes. Standard and Growth plans include specialty filtering so visitors can browse your team by the specific help they're looking for or the insurance they carry.",
    },
    {
      q: "What if we have multiple locations?",
      a: "We build location-specific pages with hours, directions, and provider assignments for each office. Each location also gets its own local SEO optimization.",
    },
    {
      q: "Is $119/month the starting price for group practices?",
      a: "Our Standard plan at $119/month is recommended for most group practices due to the additional pages and features needed. Solo practitioners can start at $69/month with our Starter plan.",
    },
  ],
  bottomCta: {
    headline: "Your Practice Has Outgrown Your Website",
    subtext:
      "Book a free 20-minute call and see what a website built for your full team could look like — before you pay us anything.",
    button: "Book Your Free Website Review",
  },
  pricingHeadline: "Starting at $119/month for Group Practices — Everything Included",
  relatedPages: [
    { name: "Solo Practitioners", path: "/websites-for-solo-practitioners" },
    { name: "Lawyers", path: "/websites-for-lawyers" },
    { name: "Accountants", path: "/websites-for-accountants" },
    { name: "Small Business Owners", path: "/websites-for-small-business-owners" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Group Practices | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-group-practices",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can each clinician have their own page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — individual clinician pages with bio, headshot, and specialty information are a core feature.",
        },
      },
    ],
  },
};

export default function GroupPractices() {
  return <IndustryLandingPage data={data} />;
}
