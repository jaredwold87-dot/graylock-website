import StrategyLandingPage, { StrategyPageData } from "@/components/strategy/StrategyLandingPage";
import {
  Bot,
  Sparkles,
  Zap,
  TrendingUp,
  Code,
  Shield,
  MapPin,
  MessageSquare,
  BarChart3,
  FileSearch,
} from "lucide-react";

const data: StrategyPageData = {
  seo: {
    title: "GEO — Generative Engine Optimization | AI Search for Professional Practices | Graylock Digital",
    description:
      "GEO is SEO for the AI era. Learn how to get your business recommended by ChatGPT, Google AI Overviews, and Perplexity — and why it matters for your leads.",
    url: "https://graylockdigital.com/geo-generative-engine-optimization",
  },
  hero: {
    h1: "AI Is Changing How Clients Find Businesses. Is Yours Showing Up?",
    subheadline:
      "When someone asks ChatGPT, Google AI Overview, or Perplexity for a recommendation, what comes up? GEO is the emerging practice of optimizing your online presence for AI-generated answers — not just traditional search results.",
    ctaButton: "Schedule a Free Consultation",
    ctaSubtext: "Free demo + full written report — no obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-strategy-geo.png`,
  },
  definition: {
    heading: "GEO — Explained Simply",
    paragraphs: [
      "GEO — Generative Engine Optimization — is the practice of optimizing your online presence so that AI-powered tools like ChatGPT, Google AI Overviews, Perplexity, and Bing Copilot recommend or mention your business in their responses.",
      "Traditional SEO gets you into Google's blue link results. GEO gets you into AI-generated answers — the conversational responses that increasingly appear before traditional results.",
      "When someone asks 'What's the best therapist in Denver for anxiety?' or 'Find me a reliable contractor in Nashville', AI tools compile answers from multiple sources across the web. GEO ensures your business is one of those sources.",
    ],
    calloutTitle: "GOOD GEO DOES 3 THINGS",
    calloutBullets: [
      "Gets your business recommended by AI tools like ChatGPT and Perplexity",
      "Builds structured content that AI models can easily reference",
      "Positions you as an authority before the prospect even visits your site",
    ],
  },
  whyItMatters: {
    cards: [
      {
        icon: Sparkles,
        title: "AI-generated answers now appear above traditional search results",
        description:
          "'AI Overviews' are shown to billions of users and actively redirect clicks away from traditional results. If your business isn't in those answers, you're losing visibility even if you rank on page 1.",
      },
      {
        icon: Bot,
        title: "ChatGPT and Perplexity are being used for local recommendations",
        description:
          "'Find me a good accountant near Chicago' is now a common AI query. These tools synthesize the web — structured, authoritative businesses get recommended; poorly-represented ones get ignored.",
      },
      {
        icon: Zap,
        title: "Early movers win in GEO just like early movers won in SEO",
        description:
          "Most local service businesses have no idea GEO exists. Getting structured and authoritative now creates a lasting advantage before competitors catch on.",
      },
      {
        icon: TrendingUp,
        title: "GEO amplifies the value of everything else you do",
        description:
          "Good reviews, a complete Google Business Profile, consistent citations, structured data, and authoritative website copy all contribute to how AI models represent your business.",
      },
    ],
  },
  howGraylockDoesIt: {
    steps: [
      {
        title: "Structured data (schema markup)",
        description:
          "We implement JSON-LD schema on every Graylock site. Schema tells AI crawlers exactly who you are, what you do, where you operate, and how to contact you. It's the clearest signal an AI model can get about your business.",
      },
      {
        title: "Authoritative, entity-rich copy",
        description:
          "AI models favor businesses whose web presence clearly establishes them as a subject matter expert. We write copy that includes your specialties, location, credentials, and unique value proposition in clear, structured language.",
      },
      {
        title: "Consistent NAP + citations",
        description:
          "AI models cross-reference your Name, Address, and Phone across multiple sources. Inconsistencies reduce your authority score. We ensure consistency across your website, GBP, and key directories.",
      },
      {
        title: "Review and reputation signals",
        description:
          "AI models use review sentiment and volume as a proxy for business quality. Our sites include structured review schema and we guide clients on building their review presence.",
      },
      {
        title: "FAQ and conversational content",
        description:
          "AI models are trained on question-and-answer content. FAQ sections on every Graylock page use natural, conversational language that maps directly to how people phrase AI queries.",
      },
      {
        title: "Google Business Profile optimization",
        description:
          "GBP is one of the most heavily weighted sources in Google AI Overviews. A complete, optimized, review-rich GBP dramatically increases your chances of appearing in AI-generated answers.",
      },
    ],
  },
  deliverables: {
    heading: "GEO Deliverables From Graylock",
    subtitle: "Concrete services we provide to get your business recommended by AI search tools.",
    items: [
      {
        icon: Code,
        title: "Structured Schema Markup",
        description:
          "Comprehensive JSON-LD schema (LocalBusiness, Service, FAQ, Review) implemented across your entire site so AI crawlers can accurately classify your business.",
      },
      {
        icon: Shield,
        title: "E-E-A-T Content Signals",
        description:
          "Authoritative, entity-rich copy that establishes your expertise, credentials, and trustworthiness — the signals AI models weigh most heavily.",
      },
      {
        icon: MapPin,
        title: "Google Business Profile Optimization",
        description:
          "Full GBP setup and optimization — the single most impactful source for Google AI Overviews and external AI recommendation engines.",
      },
      {
        icon: MessageSquare,
        title: "Conversational FAQ Content",
        description:
          "Natural-language Q&A sections on every page, structured to match the way users phrase queries to ChatGPT, Perplexity, and voice assistants.",
      },
      {
        icon: BarChart3,
        title: "AI Citation Monitoring",
        description:
          "Ongoing tracking of how and where AI tools reference your business, so we can measure progress and adjust strategy over time.",
      },
      {
        icon: FileSearch,
        title: "Structured Data Audits",
        description:
          "Regular audits of your schema markup, NAP consistency, and citation profile to ensure AI models always have accurate, up-to-date information.",
      },
    ],
  },
  planTiers: {
    heading: "GEO at Every Level",
    subtitle: "GEO fundamentals are built into every Graylock website. Advanced GEO strategy scales with your plan.",
    tiers: [
      {
        name: "Starter",
        price: "$199",
        description: "GEO fundamentals baked into your website from day one — schema markup, E-E-A-T copy, and FAQ sections on every page.",
        features: [
          "Comprehensive schema markup (LocalBusiness, Service, FAQ)",
          "E-E-A-T structured website copy",
          "Conversational FAQ sections",
          "Consistent NAP across site",
          "Google Business Profile setup",
          "Review schema implementation",
        ],
      },
      {
        name: "Growth",
        price: "$299",
        description: "Full GEO strategy with advanced optimization, monitoring, and ongoing structured data management.",
        features: [
          "Everything in Starter",
          "Full Google Business Profile optimization",
          "Structured data audits (quarterly)",
          "AI citation monitoring",
          "Multi-provider schema markup",
          "Enhanced local SEO + GEO integration",
        ],
        highlighted: true,
      },
      {
        name: "Scale",
        price: "$449",
        description: "Maximum AI visibility with multi-location GEO, advanced analytics, and dedicated strategy management.",
        features: [
          "Everything in Growth",
          "Multi-location GEO strategy",
          "Monthly structured data audits",
          "Advanced AI citation analytics",
          "Custom GEO reporting cadence",
          "Priority GEO strategy updates",
        ],
      },
    ],
  },
  statsStrip: {
    stats: [
      { value: "25%+", label: "of US search queries now show Google AI Overviews" },
      { value: "300M+", label: "weekly active ChatGPT users — many asking local questions" },
      { value: "2x", label: "more AI citations for businesses with complete structured data" },
      { value: "100M+", label: "daily Perplexity queries — many local and service-oriented" },
    ],
  },
  keyConcepts: {
    concepts: [
      {
        title: "What AI Overviews Are and How They Work",
        description:
          "Google AI Overviews appear at the top of search results as a summary answer generated by Google's AI. They pull from multiple sources across the web — primarily sources Google considers authoritative, structured, and trustworthy. To appear in AI Overviews, your content needs to directly answer the question being asked, be well-structured (using headers and schema), and come from a domain Google considers credible for that topic.",
      },
      {
        title: "How ChatGPT and Perplexity Find Local Businesses",
        description:
          "When someone asks ChatGPT or Perplexity for a local professional recommendation, these AI tools search the web in real time (via their browsing integrations) and synthesize answers from Google Business Profiles, Yelp, review sites, directories, and practice websites. A complete GBP, positive reviews, local citations, and a fast, structured website dramatically increase your chances of being recommended.",
      },
      {
        title: "Structured Data / Schema Markup",
        description:
          "Schema markup is code added to your website that tells search engines and AI tools exactly what your content means — not just what it says. For a professional practice, schema communicates: your practice name, type, address, phone, hours, services, price range, and reviews. AI models use schema as a trusted, structured data source. Every Graylock site includes comprehensive schema markup.",
      },
      {
        title: "E-E-A-T and Why AI Models Care About It",
        description:
          "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. It's Google's framework for evaluating content quality — and AI models use similar signals. For professional practices, E-E-A-T is demonstrated through: professional bios, credentials on the site, real reviews, consistent citations, and informative content that demonstrates genuine expertise in your field.",
      },
    ],
  },
  commonMistakes: {
    rows: [
      {
        mistake: "No schema markup on the website",
        cost: "AI tools can't efficiently read or classify your business — lower citation probability",
        fix: "Graylock implements comprehensive LocalBusiness + Service schema on every site",
      },
      {
        mistake: "Inconsistent business information online",
        cost: "AI models detect NAP inconsistencies and lower your authority score",
        fix: "We ensure consistency across website, GBP, and key directories",
      },
      {
        mistake: "No FAQ or conversational content",
        cost: "Missed matches for conversational AI queries",
        fix: "Every Graylock page includes FAQ sections with natural language Q&A",
      },
      {
        mistake: "No Google reviews or review schema",
        cost: "AI models use review signals as a quality proxy — absence hurts recommendations",
        fix: "We implement review schema and provide guidance on building your review presence",
      },
    ],
  },
  faqs: [
    {
      q: "What is GEO and how is it different from SEO?",
      a: "SEO (Search Engine Optimization) optimizes your website to rank in traditional Google search results — the blue links. GEO (Generative Engine Optimization) optimizes your online presence to be recommended by AI tools like ChatGPT, Google AI Overviews, and Perplexity. As AI-generated answers increasingly appear above traditional results, GEO is becoming as important as traditional SEO.",
    },
    {
      q: "Do I need to worry about GEO if I already do SEO?",
      a: "Yes — they're complementary but distinct. Good SEO helps GEO (authoritative, structured content is valued by both), but GEO requires additional elements: comprehensive schema markup, consistent citations, conversational FAQ content, and a strong Google Business Profile. Graylock addresses both from day one.",
    },
    {
      q: "Can a local professional practice really show up in ChatGPT recommendations?",
      a: "Yes. When someone asks ChatGPT 'find me a good accountant in Denver', the AI searches the web and synthesizes recommendations from Google Business Profiles, review sites, and business websites. A complete GBP, strong reviews, and a well-structured website significantly increase your chances of being recommended.",
    },
    {
      q: "What is schema markup and does Graylock include it?",
      a: "Schema markup is code added to your website that tells AI tools and search engines exactly who you are, what you do, and where you operate. Graylock implements LocalBusiness, Service, FAQ, and Review schema on every website we build — on every plan.",
    },
    {
      q: "How important are Google reviews for GEO?",
      a: "Very important. Both Google AI Overviews and external AI tools like ChatGPT and Perplexity use review volume and sentiment as a proxy for business quality. A business with 50 positive reviews will be recommended far more often than a competitor with 5. We provide guidance on building your review presence and implement review schema on your site.",
    },
    {
      q: "Does Graylock offer GEO as part of my plan?",
      a: "Yes. GEO fundamentals are baked into every Graylock build: comprehensive schema markup, E-E-A-T-structured copy, FAQ sections, and consistent NAP. Growth and Scale plans include full local SEO and GBP optimization, which are the most impactful GEO levers for professional practices.",
    },
  ],
  bottomCta: {
    headline: "Is Your Business Ready for the AI Search Era?",
    subtext:
      "Book a free 20-minute review. We'll check your GEO readiness — schema markup, GBP status, review presence, and structured content — and show you exactly where you stand.",
    button: "Get Your Free GEO Readiness Report",
  },
  relatedStrategy: [
    { name: "SEO", path: "/seo-for-small-business" },
    { name: "Google Business Profiles", path: "/google-business-profile" },
    { name: "Lead Generation", path: "/lead-generation-for-small-business" },
    { name: "All Strategy", path: "/our-strategy" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "GEO — Generative Engine Optimization | Graylock Digital",
    url: "https://graylockdigital.com/geo-generative-engine-optimization",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is GEO and how is it different from SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO optimizes for traditional Google search results. GEO optimizes your online presence to be recommended by AI tools like ChatGPT, Google AI Overviews, and Perplexity.",
        },
      },
      {
        "@type": "Question",
        name: "Can a local professional practice really show up in ChatGPT recommendations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A complete GBP, strong reviews, and a well-structured website significantly increase your chances of being recommended.",
        },
      },
      {
        "@type": "Question",
        name: "Does Graylock offer GEO as part of my plan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. GEO fundamentals are baked into every Graylock build. Growth and Scale plans include full local SEO and GBP optimization.",
        },
      },
    ],
  },
};

export default function GEOPage() {
  return <StrategyLandingPage data={data} />;
}
