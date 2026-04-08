import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Dog,
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
  Calendar,
  Scissors,
  Heart,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for Pet Groomers & Grooming Salons | $79/mo | Graylock Digital",
    description:
      "Graylock builds professional, trust-building websites for pet groomers and grooming businesses. Appointment forms, service menus, local SEO. Built in 3–5 days. $79/mo. Free demo.",
    url: "https://graylockdigital.com/websites-for-pet-groomers",
  },
  hero: {
    badge: "For Pet Groomers & Grooming Salons",
    badgeIcon: Scissors,
    h1: "A Website That Keeps Your Grooming Table —",
    h1Highlight: "Fully Booked.",
    subheadline:
      "Pet owners want to see your work, read your reviews, and book online — before they ever call. A professional website makes you the obvious choice. Graylock builds clean, credible, SEO-optimized websites for pet groomers and grooming salons — fast, affordable, and fully managed.",
    cta: "Get Your Free Website Review",
    backgroundImage: `${import.meta.env.BASE_URL}hero-pet-groomers.png`,
    trustSignals: [
      "3–5 day build",
      "Booking forms included",
      "Local SEO optimized",
      "$79/month",
    ],
  },
  specialties: {
    headline: "Websites for Every Type of Grooming Business",
    tags: [
      "Full-Service Dog Grooming",
      "Mobile Pet Grooming",
      "Breed-Specific Grooming",
      "Cat Grooming",
      "Puppy's First Groom",
      "De-Shedding & Specialty Treatments",
      "Self-Service Dog Wash",
      "Pet Spa & Luxury Grooming",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Your Grooming Business Deserves More Than an Instagram Page",
    cards: [
      {
        icon: ShieldCheck,
        title: "Pet owners need to trust you with their baby",
        description:
          "If your online presence looks unprofessional, pet parents won't feel confident handing over their pet. Trust starts with your website.",
      },
      {
        icon: Globe,
        title: "Yelp and Google reviews aren't enough",
        description:
          "Third-party listings don't showcase your work, your personality, or your services the way your own website can.",
      },
      {
        icon: Phone,
        title: "You're losing bookings to voicemail",
        description:
          "You can't answer the phone when you're mid-groom. Without an online booking form, those leads go to the groomer who has one.",
      },
      {
        icon: Search,
        title: "New pet owners can't find you on Google",
        description:
          "When someone searches 'pet groomer near me,' you're buried behind competitors with real websites.",
      },
      {
        icon: Users,
        title: "Relying entirely on word of mouth",
        description:
          "Referrals are great, but they're unpredictable. You need a consistent stream of new pet owners finding you online.",
      },
      {
        icon: Eye,
        title: "Social media alone isn't sustainable",
        description:
          "Your Instagram looks great, but it doesn't show up on Google. And you don't own that audience — one algorithm change and your reach disappears.",
      },
    ],
  },
  benefits: {
    headline: "Everything a Grooming Business Needs Online",
    items: [
      {
        title: "Trust-Building Design",
        description:
          "A professional site that makes pet owners feel confident booking you with their pet.",
      },
      {
        title: "Online Appointment Request Forms",
        description:
          "Capture new bookings 24/7 — even while you're grooming. No more missed calls.",
      },
      {
        title: "Local SEO That Works",
        description:
          "Show up when pet owners search 'pet groomer near me'. We optimize for the searches that matter.",
      },
      {
        title: "Service & Pricing Menu",
        description:
          "Bath & brush, full groom, de-shed, nail trim — each service clearly listed with pricing transparency.",
      },
      {
        title: "Built in 3–5 Days for $79/month",
        description:
          "Less than one grooming session per month. The ROI pays for itself with your first online booking.",
      },
      {
        title: "Monthly Maintenance Included",
        description:
          "Updates, security, and fresh content handled for you. Focus on the pets, not the website.",
      },
    ],
  },
  features: {
    headline: "Everything Your Grooming Website Includes",
    items: [
      {
        icon: FileText,
        title: "Service & Pricing Pages",
        description: "Full groom, bath & brush, specialty treatments — all clearly listed.",
      },
      {
        icon: Phone,
        title: "Appointment Request Form",
        description: "Capture bookings 24/7 with a professional appointment form.",
      },
      {
        icon: Camera,
        title: "Before/After Gallery",
        description: "Show off your best transformations and build instant credibility.",
      },
      {
        icon: Star,
        title: "Customer Reviews Section",
        description: "Showcase your happiest pet parents and build social proof.",
      },
      {
        icon: MapPin,
        title: "Service Area & Location",
        description: "Show pet owners exactly where you're located or which areas you serve (for mobile groomers).",
      },
      {
        icon: Search,
        title: "Google Business Profile (Standard & Growth)",
        description: "Full setup so you appear in local map results when pet owners search.",
      },
      {
        icon: Heart,
        title: "About You & Your Team",
        description: "Let pet parents meet you before they book — personality matters in grooming.",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Beautiful on every device — most pet owners search on their phone.",
      },
    ],
  },
  process: {
    headline: "From Call to Bookings in Days, Not Months",
    steps: [
      {
        title: "Tell Us About Your Business",
        description:
          "Your services, pricing, service area, and what makes you stand out from other groomers.",
      },
      {
        title: "We Build Your Demo",
        description:
          "A custom homepage design that makes pet owners feel confident booking you.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through the design together. Refine until you love every detail.",
      },
      {
        title: "Launch & Book",
        description:
          "Your site goes live and pet owners start finding you on Google.",
      },
    ],
  },
  testimonials: {
    featured: {
      name: "Sarah M.",
      title: "Owner, Paws & Relax Grooming",
      location: "Boise, ID",
      quote:
        "I was running my entire business off Instagram and word of mouth. Graylock built me a real website with a booking form, and now I get new appointment requests every week straight from Google. It literally paid for itself the first week.",
    },
    others: [
      {
        name: "Rachel K.",
        title: "Mobile Groomer, The Pampered Pup",
        location: "Nashville, TN",
        quote:
          "As a mobile groomer, I needed people to find me in their area. Graylock set up local SEO pages for every neighborhood I serve, and now I'm getting booked solid without spending a dime on ads.",
      },
      {
        name: "Jake P.",
        title: "Owner, Clean Cut Canine",
        location: "Fort Collins, CO",
        quote:
          "I used to lose so many clients to voicemail while I was grooming. Now they just book through my website. My schedule stays full and I never miss a lead.",
      },
    ],
  },
  faqs: [
    {
      q: "Can my grooming website include an online appointment request form?",
      a: "Yes. Every Graylock plan includes an appointment request form so pet owners can book 24/7 — even when you're mid-groom. Standard and Growth plans include enhanced forms with lead tracking.",
    },
    {
      q: "Will my grooming website show up when people search 'pet groomer near me'?",
      a: "Every Graylock site includes a local SEO foundation. Standard and Growth plans include full local SEO and assistance with Google Business Profile setup — essential for showing up in local 'near me' searches.",
    },
    {
      q: "Can I include a before-and-after photo gallery?",
      a: "Absolutely. A photo gallery is one of the most powerful trust-builders for groomers. We include a gallery section so you can showcase your best work and build credibility with new pet owners.",
    },
    {
      q: "I run a mobile grooming business. Will this work for me?",
      a: "Yes. We can highlight your mobile service, list the areas you cover, and create location-specific pages so pet owners in each neighborhood can find you on Google.",
    },
    {
      q: "Can I list my pricing on the website?",
      a: "Yes. We can build a clear, easy-to-read service and pricing menu. You decide exactly how much detail to include — whether that's exact prices, starting-at ranges, or 'call for quote' on certain services.",
    },
  ],
  bottomCta: {
    headline: "Stop Losing Pet Owners to Groomers With Better Websites",
    subtext:
      "Own your online presence. Book a free 20-minute call and we'll show you exactly what your grooming business's website could look like — before you pay us anything.",
    button: "Get Your Free Website Review",
  },
  relatedPages: [
    { name: "Small Business Owners", path: "/websites-for-small-business-owners" },
    { name: "Contractors", path: "/websites-for-contractors" },
    { name: "House Cleaners", path: "/websites-for-house-cleaners" },
    { name: "Solo Practitioners", path: "/websites-for-solo-practitioners" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Pet Groomers | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-pet-groomers",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can my grooming website include an online appointment form?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every Graylock plan includes an appointment request form so pet owners can book 24/7.",
        },
      },
    ],
  },
};

export default function PetGroomers() {
  return <IndustryLandingPage data={data} />;
}
