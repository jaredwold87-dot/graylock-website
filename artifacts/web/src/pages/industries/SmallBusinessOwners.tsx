import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Briefcase,
  Globe,
  Search,
  Phone,
  Clock,
  DollarSign,
  Eye,
  ShieldCheck,
  Users,
  BarChart3,
  FileText,
  Smartphone,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for Small Business Owners | $79/mo | Graylock Digital",
    description:
      "Graylock Digital builds high-converting websites for small business owners — fast (3–5 days), affordable ($79/mo), and fully managed. No tech headaches. Free website review.",
    url: "https://graylockdigital.com/websites-for-small-business-owners",
  },
  hero: {
    badge: "For Small Business Owners",
    badgeIcon: Briefcase,
    h1: "A Website That Actually Works",
    h1Highlight: "as Hard as You Do.",
    subheadline:
      "You built your business from the ground up. Your website should reflect that — not embarrass you. We build high-converting, professionally maintained websites for small business owners. Fast, affordable, no BS.",
    cta: "Book Your Free Website Review",
    backgroundImage: `${import.meta.env.BASE_URL}hero-small-business.jpg`,
    trustSignals: [
      "3–5 business days",
      "$79/month",
      "Free demo first",
      "100% American team",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Most Small Business Websites Are Working Against You",
    cards: [
      {
        icon: Eye,
        title: "Your site looks like it was built in 2012",
        description:
          "Prospects can tell. An outdated website sends the message that your business is behind the times — even if your work is flawless.",
      },
      {
        icon: Search,
        title: "You're invisible on Google",
        description:
          "Your competitors show up everywhere while potential customers can't find you. Every day you're missing leads you never knew about.",
      },
      {
        icon: Clock,
        title: "No time to learn WordPress",
        description:
          "You don't have time to manage plugins, fix broken pages, or figure out web design. You have a business to run.",
      },
      {
        icon: DollarSign,
        title: "Agencies want $8,000+ upfront",
        description:
          "Most web design agencies charge thousands before showing you anything. That's a huge risk when you're not sure what you'll get.",
      },
      {
        icon: Phone,
        title: "Your site isn't getting you calls",
        description:
          "Your website sits there like a digital brochure. No leads, no inquiries, no return on investment.",
      },
      {
        icon: Globe,
        title: "You're embarrassed by your website",
        description:
          "You hesitate to hand out business cards because you know what people will see when they visit your URL.",
      },
    ],
  },
  benefits: {
    headline: "Finally — A Website Partner Who Delivers Before You Pay",
    items: [
      {
        title: "Built in 3–5 Business Days",
        description:
          "No endless back-and-forth. You approve, we launch. Your new website is live and working within one business week.",
      },
      {
        title: "Starting at $79/month",
        description:
          "Includes hosting, maintenance, SSL, and monthly updates. Everything you need, nothing you don't.",
      },
      {
        title: "Free Custom Demo First",
        description:
          "We show you a custom homepage demo before you pay us a single dollar. See exactly what you're getting.",
      },
      {
        title: "100% American Team",
        description:
          "Nothing is outsourced, and Tim answers the phone. Real people, real support, real accountability.",
      },
      {
        title: "Month-to-Month. Cancel Anytime.",
        description:
          "No contracts, no fine print. We earn your business every month. If you're not happy, walk away.",
      },
      {
        title: "Monthly Performance Reports",
        description:
          "Always know how your site is doing with clear, easy-to-understand reports showing traffic, leads, and growth.",
      },
    ],
  },
  process: {
    headline: "From Call to Launch in Days, Not Months",
    steps: [
      {
        title: "Book a Free Call",
        description:
          "20-minute call to understand your business, goals, and what you need from your website.",
      },
      {
        title: "We Evaluate & Build",
        description:
          "We evaluate your current presence and build a custom homepage demo for your review.",
      },
      {
        title: "Review & Refine",
        description:
          "We walk through the design together. You give feedback, we refine until you love it.",
      },
      {
        title: "Launch & Maintain",
        description:
          "Your new site goes live. We handle hosting, updates, and maintenance every month.",
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
        name: "David K.",
        title: "CPA & Tax Advisor",
        location: "Henderson, NV",
        quote:
          "I used to spend hours trying to fix my Wix site. Now I just email Tim and it's done the next day. Like having a full-time web developer on staff.",
      },
      {
        name: "Marcus T.",
        title: "General Contractor",
        location: "Phoenix, AZ",
        quote:
          "Agencies wanted $10k+ to build a site. Graylock got me up and running for the setup fee, and the monthly maintenance gives me total peace of mind.",
      },
    ],
  },
  faqs: [
    {
      q: "How much does a website for a small business cost?",
      a: "Graylock Digital starts at $79/month with a $299 one-time setup fee. This includes custom design, hosting, SSL, monthly maintenance, basic dashboard access, and a monthly performance report. No hidden fees.",
    },
    {
      q: "How fast can you build my website?",
      a: "Once you approve the plan and pay the setup fee, your website is typically live within 3–5 business days. Much of the timeline depends on how quickly you can provide feedback, photos, and logos. Most clients are surprised at how fast it happens.",
    },
    {
      q: "What do I own, and what does my monthly fee cover?",
      a: "You own your domain, your content, your copy, and your brand assets — always. Your monthly fee covers professional hosting, security updates, speed optimization, ongoing SEO maintenance, and unlimited content updates. Think of it like having a full web team on retainer for a fraction of the cost. If you ever decide to move on, your domain goes with you — it's registered in your name.",
    },
    {
      q: "What if I don't have a logo or photos?",
      a: "No problem. We'll work with what you have — and we can source professional stock photography and recommend affordable logo options if needed.",
    },
    {
      q: "Do I have to sign a long-term contract?",
      a: "Never. All Graylock plans are month-to-month. Cancel anytime with 30 days notice, no penalties, no hard feelings.",
    },
  ],
  bottomCta: {
    headline: "Ready to See What Your Website Could Become?",
    subtext:
      "Book a free 20-minute call. We'll evaluate your site, show you what's holding it back, and build you a custom homepage demo — all before you pay us anything.",
    button: "Book Your Free Website Review",
  },
  relatedPages: [
    { name: "Contractors", path: "/websites-for-contractors" },
    { name: "Solo Practitioners", path: "/websites-for-solo-practitioners" },
    { name: "Accountants", path: "/websites-for-accountants" },
    { name: "Lawyers", path: "/websites-for-lawyers" },
    { name: "House Cleaners", path: "/websites-for-house-cleaners" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Small Business Owners | Graylock Digital",
    description:
      "Graylock Digital builds high-converting websites for small business owners.",
    url: "https://graylockdigital.com/websites-for-small-business-owners",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a website for a small business cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Graylock Digital starts at $79/month with a $299 one-time setup fee.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can you build my website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your website is typically live within 3–5 business days after approval.",
        },
      },
    ],
  },
};

export default function SmallBusinessOwners() {
  return <IndustryLandingPage data={data} />;
}
