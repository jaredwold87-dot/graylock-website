import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Sparkles,
  Globe,
  Search,
  Phone,
  Clock,
  Eye,
  ShieldCheck,
  Users,
  FileText,
  Smartphone,
  MapPin,
  Camera,
  Star,
  Home,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for House Cleaners & Cleaning Companies | $79/mo | Graylock Digital",
    description:
      "Graylock builds professional, trust-building websites for house cleaners and residential cleaning companies. Quote forms, service pages, local SEO. Built in 3–5 days. $79/mo. Free demo.",
    url: "https://graylockdigital.com/websites-for-house-cleaners",
  },
  hero: {
    badge: "For House Cleaners & Cleaning Companies",
    badgeIcon: Sparkles,
    h1: "A Website That Fills Your Cleaning Schedule —",
    h1Highlight: "and Your Calendar.",
    subheadline:
      "Homeowners need to trust the people they let in their home. A professional website makes you the obvious choice. Graylock builds clean, credible, SEO-optimized websites for independent cleaners and cleaning companies — fast, affordable, and fully managed.",
    cta: "Get Your Free Website Review",
    backgroundImage: `${import.meta.env.BASE_URL}hero-house-cleaners.jpg`,
    trustSignals: [
      "3–5 day build",
      "Quote forms included",
      "Local SEO optimized",
      "$79/month",
    ],
  },
  specialties: {
    headline: "Websites for Every Type of Cleaning Service",
    tags: [
      "Residential Cleaning",
      "Deep Cleaning",
      "Recurring Maid Service",
      "Move-In / Move-Out Cleaning",
      "Post-Construction Cleaning",
      "Vacation Rental Turnover",
      "Office Cleaning",
      "Eco-Friendly Cleaning",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Your Cleaning Business Deserves More Than a Facebook Page",
    cards: [
      {
        icon: ShieldCheck,
        title: "Homeowners won't book you without trust",
        description:
          "If your online presence looks unprofessional, homeowners won't feel safe letting you into their home. It's a trust issue.",
      },
      {
        icon: Globe,
        title: "Big platforms dominate and take a cut",
        description:
          "Handy and TaskRabbit dominate Google results and take a percentage of your revenue. You deserve your own presence.",
      },
      {
        icon: Phone,
        title: "No way to capture online bookings",
        description:
          "You have no way to capture quote requests or bookings on your own website. Leads are slipping through.",
      },
      {
        icon: Search,
        title: "New homeowners can't find you",
        description:
          "When new residents in your area search for a cleaner, you're nowhere to be found on Google.",
      },
      {
        icon: Users,
        title: "Relying entirely on word of mouth",
        description:
          "One bad week and the calendar empties. You need a consistent online lead source.",
      },
      {
        icon: Eye,
        title: "Facebook isn't enough",
        description:
          "Your Facebook page or Nextdoor reviews aren't enough to build a real, sustainable cleaning business.",
      },
    ],
  },
  benefits: {
    headline: "Everything a Cleaning Business Needs Online",
    items: [
      {
        title: "Trust-Building Design",
        description:
          "Professional look that makes homeowners feel safe and confident booking you.",
      },
      {
        title: "Online Quote Request Forms",
        description:
          "Capture new clients 24/7 without answering every call. Even while you're cleaning.",
      },
      {
        title: "Local SEO That Works",
        description:
          "Show up when new residents search 'house cleaner near me'. We optimize for the searches that matter.",
      },
      {
        title: "Services Pages",
        description:
          "Deep clean, recurring, move-in/out, vacation rental — each service gets its own page.",
      },
      {
        title: "Built in 3–5 Days for $79/month",
        description:
          "Less than one cleaning job per month. The ROI pays for itself with your first online booking.",
      },
      {
        title: "Monthly Maintenance Included",
        description:
          "Updates, security, and fresh content handled for you. Focus on what you do best.",
      },
    ],
  },
  features: {
    headline: "Everything Your Cleaning Website Includes",
    items: [
      {
        icon: FileText,
        title: "Services Pages",
        description: "Deep clean, recurring, move-in/out, vacation rental — all covered.",
      },
      {
        icon: Phone,
        title: "Quote/Booking Request Form",
        description: "Capture leads 24/7 with a professional booking form.",
      },
      {
        icon: Camera,
        title: "Before/After Gallery",
        description: "Show the quality of your work with stunning transformation photos.",
      },
      {
        icon: Star,
        title: "Customer Reviews Section",
        description: "Showcase your best reviews and build social proof.",
      },
      {
        icon: MapPin,
        title: "Service Area Map",
        description: "Show homeowners exactly which neighborhoods you serve.",
      },
      {
        icon: Search,
        title: "Google Business Profile (Standard & Growth)",
        description: "Full setup so you appear in local map results.",
      },
      {
        icon: ShieldCheck,
        title: "License & Insurance Badge",
        description: "Display your credentials to build instant homeowner trust.",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Beautiful on every device — most homeowners search on their phone.",
      },
    ],
  },
  process: {
    headline: "From Call to Bookings in Days, Not Months",
    steps: [
      {
        title: "Tell Us About Your Business",
        description:
          "Your services, service area, and what makes you stand out from the competition.",
      },
      {
        title: "We Build Your Demo",
        description:
          "A custom homepage design that makes homeowners feel confident booking you.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through the design together. Refine until you love every detail.",
      },
      {
        title: "Launch & Book",
        description:
          "Your site goes live and homeowners start finding you on Google.",
      },
    ],
  },
  testimonials: {
    featured: {
      name: "Lisa R.",
      title: "Owner, Sparkle Clean Residential",
      location: "Scottsdale, AZ",
      quote:
        "I was posting on Nextdoor and hoping for referrals. Graylock built me a real website with a quote form, and now I get new booking requests every week straight from Google. It paid for itself the first month.",
    },
    others: [
      {
        name: "Maria G.",
        title: "Owner, Fresh Start Cleaning",
        location: "Henderson, NV",
        quote:
          "I used to rely on Thumbtack and pay for every lead. Now homeowners find me on Google and book directly through my site. The quote form alone was worth it.",
      },
      {
        name: "Danielle T.",
        title: "Residential Cleaning Pro",
        location: "Mesa, AZ",
        quote:
          "My Facebook page wasn't cutting it anymore. Graylock gave me a real website that makes my business look as professional as it is.",
      },
    ],
  },
  faqs: [
    {
      q: "Can my cleaning website include an online quote or booking request form?",
      a: "Yes. Every Graylock plan includes a quote/booking request form so homeowners can reach out 24/7 — even when you're on a job. Standard and Growth plans include enhanced forms with lead tracking.",
    },
    {
      q: "Will my cleaning website show up when homeowners search 'house cleaner near me'?",
      a: "Every Graylock site includes a local SEO foundation. Standard and Growth plans include full local SEO and assistance with Google Business Profile setup — essential for showing up in local 'near me' searches.",
    },
    {
      q: "Can I include a before-and-after photo gallery?",
      a: "Absolutely. A photo gallery is one of the most powerful trust-builders for cleaning companies. We include a gallery section in your site so you can show the quality of your work.",
    },
    {
      q: "I'm just starting out. Is Graylock right for me?",
      a: "Yes. Our Starter plan at $79/month is ideal for independent cleaners and small cleaning companies just establishing their online presence. A professional website from day one sets you apart from competitors immediately.",
    },
    {
      q: "What if I serve multiple zip codes or neighborhoods?",
      a: "We can include a service area section or map showing all the areas you serve. Standard and Growth plans allow for additional location-specific SEO pages if needed.",
    },
  ],
  bottomCta: {
    headline: "Stop Competing With Big Platforms on Their Terms",
    subtext:
      "Own your online presence. Book a free 20-minute call and we'll show you exactly what your cleaning business's website could look like — before you pay us anything.",
    button: "Get Your Free Website Review",
  },
  relatedPages: [
    { name: "Contractors", path: "/websites-for-contractors" },
    { name: "Small Business Owners", path: "/websites-for-small-business-owners" },
    { name: "Solo Practitioners", path: "/websites-for-solo-practitioners" },
    { name: "Accountants", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for House Cleaners | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-house-cleaners",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can my cleaning website include a quote or booking form?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every Graylock plan includes a quote/booking request form.",
        },
      },
    ],
  },
};

export default function HouseCleaners() {
  return <IndustryLandingPage data={data} />;
}
