import StrategyLandingPage, { StrategyPageData } from "@/components/strategy/StrategyLandingPage";
import {
  MapPin,
  Star,
  Sparkles,
  Smartphone,
} from "lucide-react";

const data: StrategyPageData = {
  seo: {
    title: "Google Business Profile Optimization | Graylock Digital",
    description:
      "Your Google Business Profile is the most powerful free tool for local visibility. How to optimize it and why Graylock sets it up on Growth and Scale plans.",
    url: "https://graylockdigital.com/google-business-profile",
  },
  hero: {
    h1: "When Locals Search 'Near Me,' Your Practice Should Be the One They Tap.",
    subheadline:
      "Most prospective clients decide who to call before they ever visit your website — based on what they see in Google Maps and the local results pack. We make sure that first impression sells your practice instead of sending them to a competitor.",
    ctaButton: "Get a Free Local Visibility Review",
    ctaSubtext: "20-minute review · See where you rank vs. your local competitors · No obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-strategy-gbp.png`,
  },
  definition: {
    heading: "Google Business Profiles — Explained Simply",
    paragraphs: [
      "Your Google Business Profile (GBP) is a free listing on Google that displays your business name, address, phone number, hours, photos, reviews, and services on Google Search and Google Maps.",
      "When someone searches for a service 'near me' or in your city, Google shows a 'local pack' — a map with three business listings. Your GBP is what determines whether you appear in that pack.",
      "A complete, optimized GBP is the single highest-impact, zero-cost action most professional practices can take to improve their online visibility.",
    ],
    calloutTitle: "A GOOD GBP DOES 3 THINGS",
    calloutBullets: [
      "Gets your business into Google's local map pack for nearby searches",
      "Builds trust with reviews, photos, and accurate business info",
      "Drives calls and visits directly from search results — before they even see your website",
    ],
  },
  whyItMatters: {
    cards: [
      {
        icon: MapPin,
        title: "The Google local pack gets 44% of all clicks for local searches",
        description:
          "It appears above organic search results. If you're not in the local pack, you're invisible to nearly half of all local searchers.",
      },
      {
        icon: Sparkles,
        title: "GBP directly feeds Google AI Overviews",
        description:
          "Google's AI recommendations pull heavily from GBP data. A complete, review-rich profile dramatically increases your chances of being recommended.",
      },
      {
        icon: Smartphone,
        title: "76% of nearby smartphone searchers visit a business within a day",
        description:
          "GBP is the first thing they see on mobile — it must inspire confidence and make calling you frictionless.",
      },
      {
        icon: Star,
        title: "Your GBP is the first review platform clients check",
        description:
          "Before calling, most prospects scan your Google reviews. More positive reviews directly translate into more calls.",
      },
    ],
  },
  howGraylockDoesIt: {
    steps: [
      {
        title: "Claim and verify your GBP",
        description:
          "We handle the claim and verification process for your Google Business Profile.",
      },
      {
        title: "Category selection",
        description:
          "We select your primary and secondary business categories precisely. Category is one of the most important ranking factors in the local pack.",
      },
      {
        title: "NAP consistency",
        description:
          "We ensure your business Name, Address, and Phone are identical across your website, GBP, and key directories.",
      },
      {
        title: "Business description optimization",
        description:
          "We write a 750-character keyword-rich business description that communicates what you do, who you serve, and why clients choose you.",
      },
      {
        title: "Services and products",
        description:
          "We add every service you offer to your GBP profile with descriptions and optional pricing.",
      },
      {
        title: "Photo upload guidance",
        description:
          "We guide you on uploading and labeling professional photos: exterior, interior, team, work samples, and logo.",
      },
      {
        title: "Review strategy",
        description:
          "We implement review schema on your website and advise on ethical review generation practices.",
      },
    ],
  },
  statsStrip: {
    stats: [
      { value: "70%", label: "more likely to attract visits with a complete GBP listing" },
      { value: "1.7x", label: "more trustworthy when businesses respond to reviews" },
      { value: "520%", label: "more calls for GBP listings with 100+ photos vs none" },
      { value: "42%", label: "of local searches result in a click on the Google Maps local pack" },
    ],
  },
  keyConcepts: {
    concepts: [
      {
        title: "The Google Local Pack",
        description:
          "The local pack is the set of 3 business listings (with a map) that appears at the top of Google results for location-based searches. It's the prime real estate of local search — appearing above all organic results. To rank in the local pack, Google considers: proximity to the searcher, relevance (do your categories match what was searched?), and prominence (reviews, citations, website authority). A fully optimized GBP addresses all three.",
      },
      {
        title: "Reviews and Why They Dominate Local Ranking",
        description:
          "Google uses review count, review recency, review rating, and review keywords as major local ranking signals. A practice with 50 reviews at 4.8 stars will outrank a competitor with 5 reviews at 5.0 stars every time. More importantly, review keywords matter — reviews that mention your services and location ('great dentist in Austin' or 'best CPA in Phoenix') actively help you rank for those terms.",
      },
      {
        title: "GBP Posts and Freshness Signals",
        description:
          "Google Business Profile allows you to post updates, offers, events, and announcements directly to your listing. These posts appear in your profile in search results and on Maps. Regularly posting tells Google your business is active — which is a ranking signal. Growth and Scale plan clients can request new GBP posts as part of their content updates.",
      },
      {
        title: "Services, Attributes, and Q&A",
        description:
          "Many businesses leave GBP Services, Attributes, and Q&A sections empty — missing major ranking and conversion opportunities. Services lists exactly what you offer (with descriptions). Attributes let you highlight features like 'veteran-owned', 'women-led', or 'LGBTQ+ friendly'. Q&A lets you pre-answer common client questions. All three should be completely filled out.",
      },
      {
        title: "GBP and AI Recommendations",
        description:
          "Google AI Overviews draw heavily from GBP data when generating local recommendations. A complete, review-rich, recently updated GBP is one of the strongest signals you can send to Google's AI that your business is a trustworthy local authority. This is why GBP optimization is now a GEO strategy, not just an SEO strategy.",
      },
    ],
  },
  commonMistakes: {
    rows: [
      {
        mistake: "Unclaimed or unverified GBP",
        cost: "Competitors can suggest edits to your listing; you have no control over it",
        fix: "Graylock claims and verifies your GBP as part of Growth and Scale plans",
      },
      {
        mistake: "Wrong or missing business category",
        cost: "Google doesn't know what kind of business you are — won't show you for relevant searches",
        fix: "We research and select the most effective primary and secondary categories",
      },
      {
        mistake: "No photos on GBP",
        cost: "Listings with no photos get 520% fewer calls — looks abandoned or suspicious",
        fix: "We guide photo uploads and label them correctly for maximum impact",
      },
      {
        mistake: "Ignoring reviews",
        cost: "Low review count = low trust + low local ranking",
        fix: "We implement review schema and advise on ethical review strategy",
      },
      {
        mistake: "Inconsistent NAP",
        cost: "Google sees your business as multiple entities — splits your authority",
        fix: "We ensure NAP consistency across GBP, website, and key directories",
      },
      {
        mistake: "Empty services section",
        cost: "Missing keyword signals and not appearing in service-specific local searches",
        fix: "We populate your full services list with keyword-rich descriptions",
      },
    ],
  },
  faqs: [
    {
      q: "What is a Google Business Profile?",
      a: "A Google Business Profile (GBP) is a free listing that shows your business on Google Search and Google Maps. It displays your name, address, phone, hours, photos, reviews, and services when someone searches for your business or a service you offer near your location.",
    },
    {
      q: "Do I need a Google Business Profile if I already have a website?",
      a: "Yes — absolutely. Your GBP and your website serve different purposes. Your website converts visitors who find you. Your GBP helps people find you in the first place — especially through the Google local pack and Google Maps. Together, they form the foundation of your local online presence.",
    },
    {
      q: "How do I rank higher in the Google local pack?",
      a: "Three main factors: relevance (your categories and content match the search), proximity (how close you are to the searcher), and prominence (reviews, citations, website authority). The most impactful actions are: claim and complete your GBP, select the right categories, build positive reviews, and have a well-structured website.",
    },
    {
      q: "How important are Google reviews for my ranking?",
      a: "Very important. Review count, recency, and keywords are all ranking signals. A business with more recent reviews consistently outranks competitors with fewer or older reviews. Actively encouraging clients to leave reviews is one of the most effective local SEO tactics available.",
    },
    {
      q: "Does Graylock set up my Google Business Profile?",
      a: "Yes — GBP setup and optimization is included in our Growth and Scale plans. Starter plans include basic Google Business Profile setup. We claim, verify, and optimize your profile as part of the onboarding process.",
    },
    {
      q: "Can my Google Business Profile help me show up in ChatGPT?",
      a: "Yes. GBP data is one of the primary sources AI tools like Google AI Overviews use when making local recommendations. A complete, review-rich, recently active GBP significantly increases your visibility in AI-generated local search answers.",
    },
  ],
  bottomCta: {
    headline: "Is Your Google Business Profile Complete and Optimized?",
    subtext:
      "Book a free review. We'll evaluate your GBP listing, identify every gap, and show you exactly what needs to be done to rank higher in local search and Google Maps.",
    button: "Get My Free Local Visibility Report",
  },
  relatedStrategy: [
    { name: "SEO", path: "/seo-for-small-business" },
    { name: "GEO", path: "/geo-generative-engine-optimization" },
    { name: "Lead Generation", path: "/lead-generation-for-small-business" },
    { name: "All Strategy", path: "/our-strategy" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Google Business Profile Setup & Optimization | Graylock Digital",
    url: "https://graylockdigital.com/google-business-profile",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Google Business Profile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Google Business Profile (GBP) is a free listing that shows your business on Google Search and Google Maps.",
        },
      },
      {
        "@type": "Question",
        name: "Does Graylock set up my Google Business Profile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — GBP setup and optimization is included in our Growth and Scale plans. Starter plans include basic setup.",
        },
      },
      {
        "@type": "Question",
        name: "Can my Google Business Profile help me show up in ChatGPT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. GBP data is one of the primary sources AI tools use when making local recommendations.",
        },
      },
    ],
  },
};

export default function GoogleBusinessProfilePage() {
  return <StrategyLandingPage data={data} />;
}
