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
    title: "Websites for Group Practices | Multi-Provider Sites | Starting at $299/mo | Graylock Digital",
    description:
      "Graylock builds custom websites for group practices — showcasing your team, specialties, and individual providers. Custom built in 3–5 days. Starting at $299/mo. Free demo first.",
    url: "https://graylockdigital.com/websites-for-group-practices",
  },
  hero: {
    badge: "For Group Practices",
    badgeIcon: Building2,
    h1: "A Website That Represents",
    h1Highlight: "the Full Strength of Your Practice.",
    subheadline:
      "Your group practice has grown. Your website should reflect that. We build multi-provider, specialty-rich websites for therapy groups, law firms, medical practices, and multi-provider organizations — showcasing every provider, every service area, and every reason clients should choose you. Starting at $299/month.",
    cta: "Book Your Free Website Review",
    backgroundImage: `${import.meta.env.BASE_URL}hero-group-practices.jpg`,
    trustSignals: [
      "Individual provider pages",
      "Specialty filtering",
      "3–5 day build",
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
        title: "Clients can't find the right provider",
        description:
          "Prospective clients can't easily browse providers by specialty, insurance, or availability on your current site.",
      },
      {
        icon: Users,
        title: "New providers feel underserved",
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
          "Changing a provider bio, photo, or availability shouldn't require contacting a web developer.",
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
        title: "Individual Provider Pages",
        description:
          "Each provider gets their own bio, photo, and specialty page — so clients can find exactly who they need.",
      },
      {
        title: "Specialty Filtering",
        description:
          "Help clients find the right provider for their specific needs with easy-to-use filtering.",
      },
      {
        title: "Easy to Update",
        description:
          "Add or remove providers without a full rebuild. Request updates and we handle them quickly.",
      },
      {
        title: "Referral-Worthy Design",
        description:
          "Professional enough to be proud of in any context — referral partners, potential hires, and clients alike.",
      },
      {
        title: "SEO for Every Provider",
        description:
          "Each provider and specialty your practice covers gets its own SEO-optimized presence.",
      },
      {
        title: "Built in 3–5 Business Days",
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
        title: "Team/Provider Directory",
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
        icon: Search,
        title: "Google Business Profile",
        description: "Full setup so your practice appears in local map results.",
      },
      {
        icon: Building2,
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
    headline: "From Call to Launch in Days, Not Months",
    steps: [
      {
        title: "Tell Us About Your Practice",
        description:
          "20-minute call about your team, specialties, locations, and ideal new clients.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a multi-provider homepage and team directory layout for your review.",
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
      name: "Dr. Rachel W.",
      title: "Clinical Director, Mindful Wellness Group",
      location: "Portland, OR",
      quote:
        "We had five clinicians and a website that still looked like a solo practice. Graylock built us a multi-provider site with individual bio pages for each therapist. Our new client inquiries increased significantly within the first month.",
    },
    others: [
      {
        name: "Sarah M.",
        title: "Licensed Therapist",
        location: "Reno, NV",
        quote:
          "Graylock built me a beautiful site in under a week. I finally have a site I'm proud to share with clients.",
      },
      {
        name: "Dr. Kevin T.",
        title: "Owner, Summit Physical Therapy",
        location: "Salt Lake City, UT",
        quote:
          "Adding new therapists to our site used to be a nightmare. Now I just email the team and it's updated within a day. So much easier.",
      },
    ],
  },
  faqs: [
    {
      q: "Can each provider have their own page on our group practice website?",
      a: "Yes — individual provider pages with bio, headshot, specialty information, and contact details are a core feature. This is essential for group practices where clients want to choose a specific provider.",
    },
    {
      q: "How do you handle adding or removing providers?",
      a: "Simple. When a new provider joins or someone leaves, just let us know. We'll update bios, photos, and directory listings within 1-2 business days. No rebuild needed.",
    },
    {
      q: "Can prospective clients filter by specialty or insurance?",
      a: "Yes. Group Practice and Enterprise plans include specialty filtering so visitors can browse your team by the specific help they're looking for or the insurance they carry.",
    },
    {
      q: "What if we have multiple locations?",
      a: "We build location-specific pages with hours, directions, and provider assignments for each office. Each location also gets its own local SEO optimization. The Enterprise plan includes multi-location SEO strategy.",
    },
    {
      q: "Which plan is right for our group practice?",
      a: "Our Group Practice plan at $299/month is designed specifically for multi-provider practices. It includes up to 5 provider bio pages, 10 SEO funnel pages, and quarterly strategy calls. Larger practices should consider the Enterprise plan at $449/month for up to 10 provider pages and dedicated account management.",
    },
  ],
  bottomCta: {
    headline: "Your Practice Has Outgrown Your Website",
    subtext:
      "Book a free 20-minute call and see what a website built for your full team could look like — before you pay us anything.",
    button: "Book Your Free Website Review",
  },
  pricingHeadline: "Starting at $299/month for Group Practices — Everything Included",
  relatedPages: [
    { name: "Therapists", path: "/websites-for-solo-practitioners" },
    { name: "Medical Practices", path: "/websites-for-medical-practices" },
    { name: "Attorneys", path: "/websites-for-lawyers" },
    { name: "CPAs", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Group Practices | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-group-practices",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can each provider have their own page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — individual provider pages with bio, headshot, and specialty information are a core feature.",
        },
      },
    ],
  },
};

export default function GroupPractices() {
  return <IndustryLandingPage data={data} />;
}
