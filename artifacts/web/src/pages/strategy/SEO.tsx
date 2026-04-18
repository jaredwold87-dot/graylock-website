import StrategyLandingPage, { StrategyPageData } from "@/components/strategy/StrategyLandingPage";
import {
  Search,
  TrendingUp,
  Clock,
  MapPin,
  Users,
} from "lucide-react";

const data: StrategyPageData = {
  seo: {
    title: "SEO for Professional Practices | Metadata, Backlinks & Local Search | Graylock Digital",
    description:
      "Learn how SEO works for professional practices — metadata, backlinks, local search, content strategy, and technical SEO. Graylock builds SEO-ready websites for therapists, dentists, physicians, CPAs, and private practices.",
    url: "https://graylockdigital.com/seo-for-small-business",
  },
  hero: {
    h1: "Show Up When Your Ideal Clients Are Already Searching for You",
    subheadline:
      "SEO is the difference between a website that sits dormant and one that generates leads while you sleep. Here's how it works — and what Graylock does to make it work for your practice.",
    ctaButton: "Get a Free SEO Evaluation",
    ctaSubtext: "20-minute review · We'll show you what's holding your rankings back · No obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-strategy-seo.png`,
  },
  definition: {
    heading: "SEO — Explained Simply",
    paragraphs: [
      "SEO (Search Engine Optimization) is the practice of making your website show up higher in Google search results when people search for what you offer.",
      "When a prospective client types 'therapist near me' or 'CPA in Phoenix', Google decides which websites to show — and in what order. SEO is the work that determines where you appear in that list.",
      "Good SEO means more organic traffic (visitors who found you through Google, not an ad), more qualified leads, and less dependence on referrals or paid advertising.",
    ],
    calloutTitle: "GOOD SEO DOES 3 THINGS",
    calloutBullets: [
      "Gets your practice found when people search for what you offer",
      "Brings in visitors who are already looking to hire or book",
      "Compounds over time — unlike ads that stop working when you stop paying",
    ],
  },
  whyItMatters: {
    cards: [
      {
        icon: Search,
        title: "93% of online experiences begin with a search engine",
        description:
          "If you're not appearing when potential clients search for your services, you're invisible to the majority of your market.",
      },
      {
        icon: TrendingUp,
        title: "Organic search converts better than almost any other channel",
        description:
          "A person searching 'therapist in Austin' is already deciding to hire a therapist — they just need to choose you.",
      },
      {
        icon: Clock,
        title: "SEO compounds over time",
        description:
          "Unlike paid ads that stop the moment you stop paying, good SEO builds authority that keeps working for months and years.",
      },
      {
        icon: MapPin,
        title: "Local SEO is the great equalizer",
        description:
          "A solo practitioner with good local SEO can outrank a national firm in local search results. Geography is the main factor — not budget.",
      },
      {
        icon: Users,
        title: "Your competitors are investing in SEO",
        description:
          "The practices ranking at the top of Google aren't there by accident — they've invested in optimization. Not investing means falling further behind.",
      },
    ],
  },
  howGraylockDoesIt: {
    steps: [
      {
        title: "On-page SEO foundation",
        description:
          "Every Graylock site is built with proper title tags, meta descriptions, header hierarchy (H1/H2/H3), keyword-optimized copy, and clean URL structure from day one.",
      },
      {
        title: "Technical SEO",
        description:
          "Fast load times, mobile-friendly build, SSL certificate, XML sitemap, robots.txt, clean code with no unnecessary plugins. We build technically sound sites that Google can crawl efficiently.",
      },
      {
        title: "Local SEO optimization (Growth & Scale plans)",
        description:
          "Location-specific page content, local keyword integration, NAP consistency (Name, Address, Phone), and schema markup that tells Google exactly where you operate.",
      },
      {
        title: "Google Business Profile setup (Growth & Scale)",
        description:
          "We create and optimize your GBP listing, which is the single most impactful local SEO action you can take.",
      },
      {
        title: "Metadata optimization",
        description:
          "Every page gets a unique, keyword-rich title tag and meta description written to attract clicks from search results.",
      },
      {
        title: "Dedicated account manager",
        description:
          "Every plan includes a dedicated account manager who monitors your site's performance and is available to discuss SEO progress, suggest improvements, and answer questions.",
      },
    ],
  },
  statsStrip: {
    stats: [
      { value: "75%", label: "of users never scroll past the first page of Google results" },
      { value: "46%", label: "of all Google searches have local intent" },
      { value: "53%", label: "of all website traffic comes from organic search" },
      { value: "70%", label: "more likely to attract visits with a complete Google Business Profile" },
    ],
  },
  keyConcepts: {
    concepts: [
      {
        title: "Metadata (Title Tags & Meta Descriptions)",
        description:
          "Your title tag is the blue clickable headline in Google search results. Your meta description is the two-line summary below it. Together, they determine whether someone clicks on your result. A well-written title tag includes your primary keyword and your location. A compelling meta description acts like ad copy — it should give someone a clear reason to click your link over the 9 others on the page. Graylock writes unique title tags and meta descriptions for every page on your site.",
      },
      {
        title: "Backlinks and Domain Authority",
        description:
          "A backlink is when another website links to yours. Google treats backlinks like votes of confidence — the more reputable websites that link to you, the more authority Google assigns your domain. Higher authority = higher rankings. Quality matters far more than quantity: one link from a trusted local news site is worth more than 50 links from spammy directories. Building backlinks naturally involves getting listed in local directories, earning mentions from local organizations, and creating content worth linking to.",
      },
      {
        title: "Local SEO and the Google Local Pack",
        description:
          "The 'local pack' is the map + three business listings that appear at the top of Google results for location-based searches like 'therapist near me'. Getting into the local pack requires: (1) An optimized Google Business Profile, (2) Consistent NAP across the web, (3) Positive reviews, (4) Local-keyword-rich website content. Graylock handles all of this on Growth and Scale plans.",
      },
      {
        title: "On-Page vs Off-Page SEO",
        description:
          "On-page SEO is everything you control on your own website: title tags, headings, keyword usage, page speed, mobile friendliness, internal linking, and content quality. Off-page SEO is everything outside your site that affects your rankings: backlinks, social signals, and local citations. Graylock builds an on-page SEO foundation on every site. Off-page SEO (link building, citation building) is addressed in Scale and Custom plans.",
      },
      {
        title: "Technical SEO",
        description:
          "Technical SEO refers to the behind-the-scenes factors that affect how well Google can crawl and index your site: page speed, mobile usability, Core Web Vitals, HTTPS/SSL, clean URL structure, XML sitemap, and proper robots.txt. Most DIY website builders create technically poor sites that Google penalizes. Every Graylock site is built with a clean technical foundation.",
      },
      {
        title: "Content and Keyword Strategy",
        description:
          "Keywords are the search terms your potential clients type into Google. Keyword strategy means identifying which terms they use, understanding the intent behind them (are they researching or ready to hire?), and creating pages that answer those searches better than your competitors. Service pages, location pages, and FAQ pages are the most valuable content types for professional practices.",
      },
    ],
  },
  commonMistakes: {
    rows: [
      {
        mistake: "No metadata on pages",
        cost: "Google uses generic/ugly snippets in search results — lower click rate",
        fix: "Graylock writes unique title tags and meta descriptions for every page",
      },
      {
        mistake: "Keyword stuffing",
        cost: "Google penalizes unnatural keyword density — rankings drop",
        fix: "We use natural language with strategic keyword placement",
      },
      {
        mistake: "No mobile optimization",
        cost: "Google's mobile-first index ranks your mobile version — poor mobile = poor rankings",
        fix: "Every Graylock site is mobile-first by design",
      },
      {
        mistake: "Slow page speed",
        cost: "High bounce rate + Google Core Web Vitals penalties",
        fix: "We build lean, fast-loading sites without bloated plugins",
      },
      {
        mistake: "Ignoring Google Business Profile",
        cost: "Invisible in local pack and Google Maps searches",
        fix: "GBP setup and optimization included in Growth and Scale plans",
      },
      {
        mistake: "No location-specific content",
        cost: "Can't rank for 'service + city' searches that drive the most local leads",
        fix: "We build location-optimized pages and content for local search",
      },
    ],
  },
  faqs: [
    {
      q: "What is SEO and why does my practice need it?",
      a: "SEO (Search Engine Optimization) is the work that helps your website appear higher in Google search results. For a professional practice, it means showing up when local clients search for your services — without paying for every click. It's the most cost-effective long-term marketing strategy available.",
    },
    {
      q: "What's the difference between SEO and paid ads (Google Ads)?",
      a: "Paid ads (Google Ads / PPC) put you at the top of search results immediately, but stop the moment you stop paying. SEO builds organic rankings that persist and compound over time. Both have value, but SEO provides a better long-term return on investment for most professional practices.",
    },
    {
      q: "What is a title tag and why does it matter?",
      a: "A title tag is the clickable headline that appears in Google search results. It's one of the most important on-page SEO factors — it tells Google (and searchers) what your page is about. A well-optimized title tag includes your primary keyword and location, and is written to encourage clicks.",
    },
    {
      q: "What are backlinks and do I need them?",
      a: "Backlinks are links from other websites pointing to yours. Google treats them as endorsements — the more authoritative sites that link to you, the higher your domain authority and rankings. For professional practices, local citations, directory listings, and professional association listings are the most impactful backlinks to pursue.",
    },
    {
      q: "How long does SEO take to work?",
      a: "Typically 3–6 months to see meaningful results for local searches. Google needs time to crawl, index, and evaluate your site. A well-built site with proper local SEO can start ranking for lower-competition local keywords within weeks. Higher-competition keywords take longer. The important thing is to start — the best time to invest in SEO is before you need it.",
    },
    {
      q: "Does Graylock handle SEO for my website?",
      a: "Every Graylock plan includes an SEO foundation: proper metadata, clean URL structure, mobile optimization, fast load times, and schema markup. Growth and Scale plans add full local SEO optimization and Google Business Profile setup. Custom plans include advanced SEO strategy. All plans include a dedicated account manager.",
    },
  ],
  bottomCta: {
    headline: "Find Out How Your Website Is Performing in Search — Free",
    subtext:
      "Book a free 20-minute call. We'll run a full SEO evaluation, show you where you're invisible on Google, and give you a clear picture of what's fixable — at no cost.",
    button: "Schedule a Free Consultation",
  },
  relatedStrategy: [
    { name: "Website Design", path: "/website-design" },
    { name: "GEO", path: "/geo-generative-engine-optimization" },
    { name: "Google Business Profiles", path: "/google-business-profile" },
    { name: "All Strategy", path: "/our-strategy" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "SEO for Professional Practices | Graylock Digital",
    url: "https://graylockdigital.com/seo-for-small-business",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SEO and why does my practice need it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO is the work that helps your website appear higher in Google search results. For a professional practice, it means showing up when local clients search for your services.",
        },
      },
      {
        "@type": "Question",
        name: "How long does SEO take to work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 3–6 months to see meaningful results for local searches.",
        },
      },
      {
        "@type": "Question",
        name: "Does Graylock handle SEO for my website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every Graylock plan includes an SEO foundation. Growth and Scale plans add full local SEO optimization and Google Business Profile setup.",
        },
      },
    ],
  },
};

export default function SEOPage() {
  return <StrategyLandingPage data={data} />;
}
