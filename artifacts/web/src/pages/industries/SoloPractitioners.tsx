import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Heart,
  Globe,
  Search,
  Phone,
  Clock,
  Eye,
  Users,
  ShieldCheck,
  FileText,
  Smartphone,
  BookOpen,
  UserCheck,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for Therapists & Counselors | Starting at $199/mo | Graylock Digital",
    description:
      "Graylock builds warm, professional websites for therapists, counselors, and solo practitioners in private practice. Custom built in 7–10 business days. Starting at $199/mo. Free demo.",
    url: "https://graylockdigital.com/websites-for-solo-practitioners",
  },
  hero: {
    badge: "For Therapists & Counselors",
    badgeIcon: Heart,
    h1: "A Website That Fills Your Practice —",
    h1Highlight: "Not Just Your Time.",
    subheadline:
      "Your expertise changes lives. Your website should make it easy for the right clients to find you, trust you, and book with you. We build warm, conversion-focused websites for therapists and counselors — fast, affordable, and entirely done for you. Starting at $199/month.",
    cta: "Book Your Free Website Review",
    backgroundImage: `${import.meta.env.BASE_URL}hero-solo-practitioners.jpg`,
    trustSignals: [
      "Warm, trust-building design",
      "Client inquiry forms",
      "Local SEO for your specialty",
      "Free demo first",
    ],
  },
  specialties: {
    headline: "Built for Therapists & Counselors in Every Specialty",
    tags: [
      "Therapists",
      "Counselors",
      "Psychologists",
      "Psychiatrists",
      "Social Workers",
      "Marriage & Family Therapists",
      "Play Therapists",
      "Trauma Specialists",
      "Addiction Counselors",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Your Online Presence Should Be Bringing You Clients — Not Holding You Back",
    cards: [
      {
        icon: Globe,
        title: "Your directory profile isn't converting",
        description:
          "Your Psychology Today or directory listing gets views but doesn't turn them into actual bookings. You need your own presence.",
      },
      {
        icon: Eye,
        title: "Your DIY site doesn't feel professional",
        description:
          "You built a Wix or Squarespace site but it doesn't convey the trust and warmth your practice requires.",
      },
      {
        icon: Search,
        title: "Can't be found for your specialty",
        description:
          "Potential clients search for your specialty on Google and find your competitors instead of you.",
      },
      {
        icon: Heart,
        title: "Your site doesn't convey warmth",
        description:
          "Your current website feels cold and generic — not the welcoming impression you want for potential clients.",
      },
      {
        icon: Clock,
        title: "No time to maintain your site",
        description:
          "Between sessions, notes, and billing, you have zero time to update, improve, or even think about your website.",
      },
      {
        icon: Phone,
        title: "Brighter Vision charges more for a template",
        description:
          "Template platforms like Brighter Vision charge $149–$349/month for cookie-cutter sites. You deserve better.",
      },
    ],
  },
  benefits: {
    headline: "A Website That Feels as Welcoming as Your Practice",
    items: [
      {
        title: "Warm, Trust-Building Design",
        description:
          "Designed to feel safe, welcoming, and professional — critical for helping professions where trust is everything.",
      },
      {
        title: "Optimized for Your Specialty",
        description:
          "Clients searching for your specific specialty and location will find you on Google.",
      },
      {
        title: "Fully Done for You",
        description:
          "We write, design, launch, and maintain everything. You focus entirely on your clients.",
      },
      {
        title: "Inquiry Forms Built In",
        description:
          "Contact and intake inquiry forms included from day one so potential clients can reach you easily.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No months of delays. Your new professional website is live within one business week.",
      },
      {
        title: "Starting at $199/month",
        description:
          "A fraction of one new client's revenue. The ROI pays for itself immediately.",
      },
    ],
  },
  features: {
    headline: "Everything Your Practice Website Includes",
    items: [
      {
        icon: Heart,
        title: "Warm, Trust-Building Design",
        description: "Professional yet approachable design that puts potential clients at ease.",
      },
      {
        icon: BookOpen,
        title: "Specialty & Services Pages",
        description: "Dedicated pages for each service you offer and population you serve.",
      },
      {
        icon: FileText,
        title: "Client Inquiry Form",
        description: "Intake inquiry forms so potential clients can reach you anytime.",
      },
      {
        icon: UserCheck,
        title: "About You Page",
        description: "Your bio, approach, credentials, and personal story — told with warmth.",
      },
      {
        icon: ShieldCheck,
        title: "Insurance & Rates Section",
        description: "Clearly communicate insurance accepted and session rates.",
      },
      {
        icon: Search,
        title: "Google Business Profile Setup",
        description: "Get found on Google Maps and local search results.",
      },
      {
        icon: Globe,
        title: "Local SEO for Your Specialty",
        description: "Optimized for your specialty + city searches from day one.",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Beautiful and functional on every device, especially phones.",
      },
    ],
  },
  process: {
    headline: "From Consultation to Live Practice Website",
    steps: [
      {
        title: "Tell Us About Your Practice",
        description:
          "A 20-minute call about your practice, your ideal clients, and what you want your website to convey.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that reflects your practice's warmth and professionalism.",
      },
      {
        title: "Review & Refine",
        description:
          "Walk through the design together. Give feedback until every detail feels right.",
      },
      {
        title: "Launch & Book",
        description:
          "Your new site goes live and starts helping the right clients find and book with you.",
      },
    ],
  },
  testimonials: {
    featured: {
      name: "Sarah M.",
      title: "Licensed Therapist",
      location: "Reno, NV",
      quote:
        "My old site looked outdated and unprofessional. Graylock built me a beautiful new site in under a week, and I finally feel confident sending people to it. Best decision I've made for my practice.",
    },
    others: [
      {
        name: "Dr. Amy L.",
        title: "Licensed Psychologist",
        location: "Austin, TX",
        quote:
          "I was paying for Psychology Today and getting almost nothing from it. My Graylock site brings in more inquiries than the directory ever did.",
      },
      {
        name: "Karen W.",
        title: "Licensed Clinical Social Worker",
        location: "Denver, CO",
        quote:
          "I just email Tim when I need an update and it's done the next day. It's like having a web team on staff for a fraction of the cost.",
      },
    ],
  },
  faqs: [
    {
      q: "Do you have experience building websites for therapists and counselors?",
      a: "Yes. We've built websites for licensed therapists, counselors, psychologists, and private practice owners across the country. We understand the trust factor, the warmth your design needs to convey, and what makes clients reach out.",
    },
    {
      q: "How does Graylock compare to Brighter Vision or TherapySites?",
      a: "Brighter Vision charges $149–$349/month for template-based sites where you don't own the content. TherapySites is similar. Graylock starts at $199/month for a fully custom site where you own your content and domain. We deliver in 7–10 business days and handle everything for you.",
    },
    {
      q: "Can my website include an online client inquiry form?",
      a: "Absolutely. Every Graylock plan includes a contact/inquiry form. Group Practice and Enterprise plans include enhanced lead forms with additional fields and lead activity tracking in your dashboard.",
    },
    {
      q: "Are your forms HIPAA compliant?",
      a: "Our contact and lead capture forms are designed for appointment inquiries only — they do not collect protected health information (PHI). We do not integrate with EHR/EMR systems or patient portals. This keeps your implementation straightforward and outside the scope of HIPAA technical safeguards.",
    },
    {
      q: "What's included in the monthly fee?",
      a: "Hosting, SSL, daily backups, dashboard access, monthly performance reporting, and priority support. Everything is included in your plan — no hidden fees.",
    },
  ],
  bottomCta: {
    headline: "Your Ideal Clients Are Searching for You Right Now",
    subtext:
      "Let's make sure they can find you — and trust you when they do. Book a free 20-minute review and see what your practice website could become.",
    button: "Book Your Free Website Review",
  },
  relatedPages: [
    { name: "Group Practices", path: "/websites-for-group-practices" },
    { name: "Medical Practices", path: "/websites-for-medical-practices" },
    { name: "Attorneys", path: "/websites-for-lawyers" },
    { name: "CPAs", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Therapists & Counselors | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-solo-practitioners",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you have experience building websites for therapists?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We've built websites for licensed therapists, counselors, and private practice owners across the country.",
        },
      },
    ],
  },
};

export default function SoloPractitioners() {
  return <IndustryLandingPage data={data} />;
}
