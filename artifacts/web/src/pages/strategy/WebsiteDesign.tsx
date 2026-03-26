import StrategyLandingPage, { StrategyPageData } from "@/components/strategy/StrategyLandingPage";
import {
  Eye,
  TrendingUp,
  Search,
  Clock,
  Shield,
  DollarSign,
} from "lucide-react";

const data: StrategyPageData = {
  seo: {
    title: "Professional Website Design for Small Businesses | Graylock Digital",
    description:
      "Graylock Digital builds custom, conversion-focused websites for small service businesses. Learn why great web design matters and what separates a website that converts from one that doesn't.",
    url: "https://graylockdigital.com/website-design",
  },
  hero: {
    h1: "Your Website Is Either Making You Money or Costing You Business",
    subheadline:
      "Most small business websites are digital brochures collecting dust. We design websites built around one goal: turning visitors into calls, bookings, and revenue.",
    ctaButton: "Book Your Free Website Review",
    ctaSubtext: "Free demo + full written report — no obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-strategy-website-design.png`,
  },
  definition: {
    heading: "Website Design — Explained Simply",
    paragraphs: [
      "Website design is the process of planning and building the visual layout, structure, copy, and functionality of a website.",
      "A well-designed website does three things: (1) Makes an immediate strong impression on visitors. (2) Clearly communicates what you do and who you serve. (3) Makes it easy for the right person to take action — call, book, or enquire.",
      "Poor website design loses you business silently. Visitors leave in under 3 seconds if the site doesn't feel credible. They never tell you why.",
    ],
    calloutTitle: "A GOOD WEBSITE DOES 3 THINGS",
    calloutBullets: [
      "Makes an immediate strong impression on visitors",
      "Clearly communicates what you do and who you serve",
      "Makes it easy for the right person to take action",
    ],
  },
  whyItMatters: {
    cards: [
      {
        icon: Eye,
        title: "First impressions are made in 50 milliseconds",
        description:
          "Before a visitor reads a single word, they've already judged your business. Good design makes that judgment positive.",
      },
      {
        icon: TrendingUp,
        title: "Conversion rate is design-driven",
        description:
          "The layout, typography, button placement, and visual hierarchy of a page determine whether a visitor becomes a lead. Design isn't decoration — it's strategy.",
      },
      {
        icon: Search,
        title: "Google rewards well-designed sites",
        description:
          "Page speed, mobile usability, and Core Web Vitals are all ranking factors. A well-built site performs better in search than a poorly coded one.",
      },
      {
        icon: Clock,
        title: "Your website works 24/7",
        description:
          "Unlike a sales rep, it never sleeps. A properly designed site captures leads at midnight, on weekends, and during holidays.",
      },
      {
        icon: Shield,
        title: "Trust is visual",
        description:
          "Clients in professional services need to feel confident before they reach out. A site that looks credible removes the biggest barrier to contact.",
      },
      {
        icon: DollarSign,
        title: "Bad design costs more than good design",
        description:
          "Losing one client per month because your site underperforms can cost thousands per year. A $79/month professional site pays for itself with a single new client.",
      },
    ],
  },
  howGraylockDoesIt: {
    steps: [
      {
        title: "Discovery call",
        description:
          "We learn your business, your ideal clients, your existing brand, and what makes you different. We ask the questions most designers skip.",
      },
      {
        title: "Custom layout planning",
        description:
          "No templates. We plan a page structure designed around how your specific clients think and what they need to see before they'll contact you.",
      },
      {
        title: "Professional copywriting brief",
        description:
          "We help shape the language on your site so it speaks directly to your ideal client's fears, goals, and decisions.",
      },
      {
        title: "Mobile-first build",
        description:
          "We design for phones first (where 60%+ of your traffic comes from), then desktop. Not the other way around.",
      },
      {
        title: "Speed and performance optimization",
        description:
          "Every Graylock site is built for fast load times. We don't load dozens of plugins or bloated page builders.",
      },
      {
        title: "Review call + launch",
        description:
          "We walk through the finished site with you, make adjustments, and only launch when you sign off.",
      },
    ],
  },
  statsStrip: {
    stats: [
      { value: "94%", label: "of first impressions are design-related — not content-related" },
      { value: "75%", label: "of users judge credibility based on website design" },
      { value: "7%", label: "conversion drop per 1-second delay in page load time" },
      { value: "60%+", label: "of local service traffic comes from mobile devices" },
    ],
  },
  keyConcepts: {
    concepts: [
      {
        title: "Visual Hierarchy",
        description:
          "Visual hierarchy is the arrangement of design elements so the most important information is seen first. On a well-designed page, your eye naturally moves: headline → benefit → CTA → supporting proof. A page without hierarchy makes visitors work to understand you — most won't bother.",
      },
      {
        title: "Mobile-First Design",
        description:
          "Mobile-first means designing for the smallest screen first, then adapting for larger screens. It's the opposite of what most older sites do (desktop-first, mobile as an afterthought). Google indexes your mobile version for ranking. If your mobile experience is poor, your rankings suffer.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description:
          "CRO is the practice of designing pages to maximize the percentage of visitors who take a desired action — a call, a form fill, a booking. It involves strategic button placement, social proof placement, copy framing, and reducing friction. Every Graylock site is built with CRO principles from day one.",
      },
      {
        title: "Page Speed and Core Web Vitals",
        description:
          "Google measures three page experience metrics: Largest Contentful Paint (how fast your main content loads), First Input Delay (how fast the page becomes interactive), and Cumulative Layout Shift (visual stability). Sites that pass these metrics rank higher. Heavy templates and page builders routinely fail them.",
      },
      {
        title: "Above the Fold",
        description:
          "'Above the fold' is everything a visitor sees before they scroll. Your headline, sub-headline, CTA, and a trust signal should all live above the fold. Most visitors never scroll if the above-the-fold content doesn't hook them within 3 seconds.",
      },
    ],
  },
  commonMistakes: {
    rows: [
      {
        mistake: "Using a DIY template builder",
        cost: "Generic look, poor mobile performance, slow load times, no SEO structure",
        fix: "Graylock builds fully custom — no drag-and-drop builders that create bloated code",
      },
      {
        mistake: "No clear call-to-action",
        cost: "Visitors don't know what to do next and leave",
        fix: "Every page we build has a primary CTA in the hero, mid-page, and footer",
      },
      {
        mistake: "Desktop-only design thinking",
        cost: "60%+ of visitors on mobile have a broken experience and leave",
        fix: "We design mobile-first, every time, no exceptions",
      },
      {
        mistake: "Prioritising aesthetics over function",
        cost: "Beautiful site that doesn't convert — looks nice, gets no calls",
        fix: "We balance design quality with conversion architecture on every build",
      },
      {
        mistake: "No social proof above the fold",
        cost: "First-time visitors don't trust you fast enough to stay",
        fix: "Testimonials, ratings, and trust signals are placed strategically in every build",
      },
    ],
  },
  faqs: [
    {
      q: "How much does professional website design cost?",
      a: "Graylock Digital starts at $79/month with a $299 one-time setup fee. This includes a fully custom-designed website, hosting, SSL, and monthly maintenance. Most agencies charge $5,000–$15,000 upfront for comparable quality. Our monthly model means no huge upfront risk.",
    },
    {
      q: "How long does it take to build a website?",
      a: "We build and launch every website within 3–5 business days of receiving your approval and setup fee. The initial call and onboarding form take less than 30 minutes of your time. The exact timeline depends on how quickly you can provide feedback and materials.",
    },
    {
      q: "What makes a website 'good' for a service business?",
      a: "A good service business website does three things: makes a strong first impression, clearly communicates your services and credibility, and makes it easy to contact you. It must also load fast and work perfectly on mobile.",
    },
    {
      q: "What do I own, and what does my monthly fee cover?",
      a: "You own your domain, your content, your copy, and your brand assets — always. Your monthly fee covers professional hosting, security updates, speed optimization, ongoing SEO maintenance, and unlimited content updates. Think of it like having a full web team on retainer for a fraction of the cost.",
    },
    {
      q: "Can you redesign my existing website instead of building a new one?",
      a: "In most cases, we build fresh rather than redesigning. This ensures we can build with our optimized structure and performance standards. Your existing content and branding are fully incorporated into the new design.",
    },
    {
      q: "What platform do you build on?",
      a: "We use a proprietary build system optimized for performance, security, and fast deployment. We don't use WordPress page builders or Wix-style drag-and-drop tools, which typically produce heavy, slow-loading sites.",
    },
  ],
  bottomCta: {
    headline: "See What Your Website Could Look Like — Before You Pay",
    subtext:
      "Book a free 20-minute call. We'll evaluate your current site, show you what's holding it back, and build a custom homepage demo — all before you commit to anything.",
    button: "Book Your Free Website Review",
  },
  relatedStrategy: [
    { name: "SEO", path: "/seo-for-small-business" },
    { name: "Lead Generation", path: "/lead-generation-for-small-business" },
    { name: "Funnel Pages", path: "/funnel-pages" },
    { name: "All Strategy", path: "/our-strategy" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Professional Website Design for Small Businesses | Graylock Digital",
    url: "https://graylockdigital.com/website-design",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does professional website design cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Graylock Digital starts at $79/month with a $299 one-time setup fee. This includes a fully custom-designed website, hosting, SSL, and monthly maintenance.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build and launch every website within 3–5 business days of receiving your approval and setup fee.",
        },
      },
      {
        "@type": "Question",
        name: "What makes a website 'good' for a service business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A good service business website does three things: makes a strong first impression, clearly communicates your services and credibility, and makes it easy to contact you.",
        },
      },
      {
        "@type": "Question",
        name: "What do I own, and what does my monthly fee cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You own your domain, your content, your copy, and your brand assets — always. Your monthly fee covers professional hosting, security updates, speed optimization, ongoing SEO maintenance, and unlimited content updates.",
        },
      },
      {
        "@type": "Question",
        name: "Can you redesign my existing website instead of building a new one?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most cases, we build fresh rather than redesigning. This ensures we can build with our optimized structure and performance standards.",
        },
      },
      {
        "@type": "Question",
        name: "What platform do you build on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use a proprietary build system optimized for performance, security, and fast deployment.",
        },
      },
    ],
  },
};

export default function WebsiteDesign() {
  return <StrategyLandingPage data={data} />;
}
