import StrategyLandingPage, { StrategyPageData } from "@/components/strategy/StrategyLandingPage";
import {
  Target,
  TrendingUp,
  Layers,
  Search,
  ArrowDownRight,
} from "lucide-react";

const data: StrategyPageData = {
  seo: {
    title: "SEO Funnel Pages for Professional Practices | Graylock Digital",
    description:
      "Funnel pages are targeted landing pages that convert searchers into leads. Learn what they are, why they matter for professional practices, and how Graylock builds them into every website.",
    url: "https://graylockdigital.com/funnel-pages",
  },
  hero: {
    h1: "One Page for Every Way a Client Searches for You",
    subheadline:
      "Your homepage can't do everything. Funnel pages are the targeted, keyword-specific pages that capture visitors searching for your exact service, in your exact location — and convert them into calls.",
    ctaButton: "Schedule a Free Consultation",
    ctaSubtext: "Free demo + full written report — no obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-strategy-funnel-pages.png`,
  },
  definition: {
    heading: "Funnel Pages — Explained Simply",
    paragraphs: [
      "Funnel pages (also called landing pages or service pages) are targeted website pages designed to rank for specific search queries and convert visitors into leads.",
      "Instead of relying on your homepage to rank for everything, funnel pages let each service, specialty, or location have its own optimized page — giving Google clear signals about what you do and where you do it.",
      "Example: A therapy practice might have a homepage, plus funnel pages for 'anxiety therapist [City]', 'couples counselor [City]', 'child psychologist [City]', and 'EMDR therapist [City]'. Each page targets a different search and converts that specific visitor.",
    ],
    calloutTitle: "A GOOD FUNNEL PAGE DOES 3 THINGS",
    calloutBullets: [
      "Targets a specific keyword a potential client is searching for",
      "Matches the visitor's intent with relevant, focused content",
      "Converts that visitor into a lead with a clear call to action",
    ],
  },
  whyItMatters: {
    cards: [
      {
        icon: Search,
        title: "Your homepage ranks for your business name — not what you do",
        description:
          "Without funnel pages, you're invisible for all the service-specific and location-specific searches your ideal clients are making.",
      },
      {
        icon: TrendingUp,
        title: "Funnel pages convert better than homepages",
        description:
          "A visitor who landed on your page after searching 'emergency roof repair Denver' is highly motivated. A page focused exclusively on that topic converts at a far higher rate than your general homepage.",
      },
      {
        icon: Layers,
        title: "Each funnel page is a new entry point to your site",
        description:
          "More targeted pages = more ways for Google to send you traffic. A 14-page site has 14x more ranking opportunities than a 1-page site.",
      },
      {
        icon: Target,
        title: "Funnel pages capture long-tail search traffic",
        description:
          "Most of your potential clients don't search for your generic business name — they search for specific problems and solutions. Funnel pages capture that intent.",
      },
      {
        icon: ArrowDownRight,
        title: "Funnel pages reduce bounce rate",
        description:
          "When the page exactly matches what someone searched for, they stay longer and are more likely to take action.",
      },
    ],
  },
  howGraylockDoesIt: {
    steps: [
      {
        title: "Keyword research per service",
        description:
          "We identify the specific search terms your ideal clients use for each service you offer, prioritizing terms with local intent.",
      },
      {
        title: "One page per high-value service or location",
        description:
          "Starter includes 8 pages, Growth includes 15 pages (plus 10 SEO funnel pages), Scale includes 20+ pages (plus 20 SEO funnel pages).",
      },
      {
        title: "Optimized page structure",
        description:
          "Every funnel page gets its own unique title tag, meta description, H1, intro copy, service description, trust signals, FAQ, and CTA. No copy-paste templates.",
      },
      {
        title: "Location-specific pages",
        description:
          "For businesses serving multiple cities or service areas, we build location pages that rank for '[service] in [city]' searches.",
      },
      {
        title: "Internal linking strategy",
        description:
          "Funnel pages link back to the homepage and to related service pages, creating a topic cluster that boosts your overall domain authority.",
      },
      {
        title: "Conversion-first layout",
        description:
          "Every funnel page follows the same high-converting structure: above-the-fold hook → what you do → why choose you → social proof → CTA → FAQ.",
      },
    ],
  },
  statsStrip: {
    stats: [
      { value: "55%", label: "more leads for businesses with 10–15 landing pages vs fewer than 10" },
      { value: "70%", label: "of all search traffic comes from long-tail keywords (3+ words)" },
      { value: "2–5x", label: "higher conversion rate on targeted landing pages vs generic homepages" },
      { value: "3x", label: "faster rankings for local search pages with city + service combos" },
    ],
  },
  keyConcepts: {
    concepts: [
      {
        title: "Service Pages vs Location Pages",
        description:
          "Service pages target what you do ('tax preparation', 'marriage counseling', 'teeth whitening'). Location pages target where you do it ('CPA in Phoenix', 'therapist in Austin', 'dentist in Nashville'). Both types are critical for professional practices. The most powerful funnel pages combine both: 'cosmetic dentist in Nashville' captures highly motivated local prospects.",
      },
      {
        title: "Topic Clusters and Pillar Pages",
        description:
          "A topic cluster is a group of related pages that collectively cover a subject in depth. A pillar page (like your main Services page) covers the broad topic. Cluster pages (funnel pages) cover specific subtopics in depth. Internal links between them signal to Google that your site is authoritative on the topic. Graylock builds this structure into every multi-page website.",
      },
      {
        title: "Search Intent and Page Matching",
        description:
          "Every search query has an intent — informational (I want to learn), navigational (I want to find a specific site), commercial (I'm comparing options), or transactional (I'm ready to hire/book). Funnel pages for professional practices primarily target commercial and transactional intent: 'best [service] in [city]' or '[service] near me'. These are the highest-converting searches.",
      },
      {
        title: "Above-the-Fold Conversion Structure",
        description:
          "Every funnel page should answer three questions within the first screen: (1) What do you do? (2) Who is it for? (3) What should I do next? This means your H1, a brief qualifying statement, and a prominent CTA should all be visible before the user scrolls. Graylock designs every funnel page with this structure.",
      },
    ],
  },
  commonMistakes: {
    rows: [
      {
        mistake: "Only having a homepage",
        cost: "Can't rank for any specific service or location searches",
        fix: "Growth plan includes 10 SEO funnel pages; Scale includes 20",
      },
      {
        mistake: "Duplicate content across service pages",
        cost: "Google penalizes thin/duplicate content — pages don't rank",
        fix: "Every Graylock funnel page has unique, purpose-written copy",
      },
      {
        mistake: "No CTA above the fold on funnel pages",
        cost: "Visitors scroll down, get distracted, and leave without converting",
        fix: "Every funnel page has a CTA in the hero section",
      },
      {
        mistake: "Generic pages that try to cover too many services",
        cost: "No page ranks well for any specific query",
        fix: "One targeted page per service or location — narrow focus, better rankings",
      },
      {
        mistake: "No FAQ on service pages",
        cost: "Misses long-tail conversational searches and doesn't address objections",
        fix: "Every funnel page includes a contextual FAQ with schema markup",
      },
    ],
  },
  faqs: [
    {
      q: "What is a funnel page?",
      a: "A funnel page (also called a landing page or service page) is a targeted website page designed to rank for a specific search query and convert that visitor into a lead. Instead of relying on your homepage for everything, funnel pages give each service and location its own optimized page.",
    },
    {
      q: "How many funnel pages does my business need?",
      a: "It depends on how many services you offer and how many locations you serve. As a starting point: one page per major service + one page per main service area. Our Growth plan includes 10 SEO funnel pages, Scale includes 20, and Custom plans allow unlimited pages.",
    },
    {
      q: "Can my homepage rank for everything without funnel pages?",
      a: "For your practice name, yes. For specific services and locations, no. Your homepage is too broad to rank for specific queries like 'anxiety therapist in Portland' or 'CPA in Dallas'. You need dedicated pages for those.",
    },
    {
      q: "What's the difference between a funnel page and a blog post?",
      a: "A funnel page targets commercial/transactional intent — someone ready to hire. A blog post typically targets informational intent — someone researching. Both have SEO value, but funnel pages drive direct conversions. Graylock focuses on funnel pages first; blog posts are added via content updates on Growth and Scale plans.",
    },
    {
      q: "How long does it take for funnel pages to rank?",
      a: "Typically 1–4 months for lower-competition local queries. New pages need time to be crawled, indexed, and evaluated by Google. The more optimized the page and the more authoritative your domain, the faster they rank. Starting early gives you a compounding advantage.",
    },
    {
      q: "Does every Graylock plan include funnel pages?",
      a: "Yes. Starter includes a custom 8-page website. Growth includes a 15-page website plus 10 SEO-optimized funnel pages. Scale includes a 20+ page website plus 20 SEO funnel pages. Custom plans support unlimited pages.",
    },
  ],
  bottomCta: {
    headline: "How Many of Your Services Could Be Showing Up on Google Right Now?",
    subtext:
      "Book a free review. We'll identify the highest-value funnel pages your business is missing and show you exactly what you could be ranking for.",
    button: "Schedule a Free Consultation",
  },
  relatedStrategy: [
    { name: "SEO", path: "/seo-for-small-business" },
    { name: "Website Design", path: "/website-design" },
    { name: "Lead Generation", path: "/lead-generation-for-small-business" },
    { name: "All Strategy", path: "/our-strategy" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "SEO Funnel Pages for Professional Practices | Graylock Digital",
    url: "https://graylockdigital.com/funnel-pages",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a funnel page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A funnel page is a targeted website page designed to rank for a specific search query and convert that visitor into a lead.",
        },
      },
      {
        "@type": "Question",
        name: "How many funnel pages does my business need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "One page per major service plus one page per main service area. Growth plan includes 10 SEO funnel pages, Scale includes 20.",
        },
      },
      {
        "@type": "Question",
        name: "Does every Graylock plan include funnel pages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Starter includes 8 pages. Growth includes 15 pages plus 10 SEO funnel pages. Scale includes 20+ pages plus 20 SEO funnel pages.",
        },
      },
    ],
  },
};

export default function FunnelPagesPage() {
  return <StrategyLandingPage data={data} />;
}
