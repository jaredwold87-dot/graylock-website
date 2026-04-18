import StrategyLandingPage, { StrategyPageData } from "@/components/strategy/StrategyLandingPage";
import {
  Target,
  DollarSign,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const data: StrategyPageData = {
  seo: {
    title: "Lead Generation for Professional Practices | Convert Website Visitors Into Clients | Graylock Digital",
    description:
      "Lead generation is the process of turning website visitors into enquiries, calls, and booked appointments. Learn the strategies Graylock uses to help professional practices consistently generate leads online.",
    url: "https://graylockdigital.com/lead-generation-for-small-business",
  },
  hero: {
    h1: "Getting Traffic but No New Clients? Your Website Is the Bottleneck.",
    subheadline:
      "Most practice websites get visitors. Far fewer turn those visitors into calls and bookings. We build the forms, CTAs, tracking, and follow-up paths that close the gap — so the traffic you already have starts paying off.",
    ctaButton: "Get a Free Lead-Gen Evaluation",
    ctaSubtext: "20-minute review · Specific fixes you can act on · No obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-strategy-lead-gen.png`,
  },
  definition: {
    heading: "Lead Generation — Explained Simply",
    paragraphs: [
      "Lead generation is the process of attracting potential clients to your practice and converting them into enquiries, calls, or booked appointments.",
      "For a professional practice, online lead generation means: your ideal client searches Google, finds your practice, visits your website, and takes an action — submitting a form, clicking to call, or booking a consultation.",
      "Everything Graylock builds — your website design, SEO, funnel pages, GBP, and content — is ultimately in service of one goal: generating more qualified leads for your practice.",
    ],
    calloutTitle: "GOOD LEAD GENERATION DOES 3 THINGS",
    calloutBullets: [
      "Attracts the right people to your website through search and content",
      "Converts visitors into enquiries with clear CTAs and forms",
      "Gives you measurable data so you know exactly what's working",
    ],
  },
  whyItMatters: {
    cards: [
      {
        icon: DollarSign,
        title: "A website that doesn't generate leads is an expense, not an investment",
        description:
          "Every dollar spent on your website should be returning more than a dollar in new business. If it isn't, something is broken.",
      },
      {
        icon: Target,
        title: "Leads from your own website cost far less than directory leads",
        description:
          "Platforms like Zocdoc, Psychology Today, FindLaw, or Avvo charge per lead or per listing — often $20–$100+ each. Your own website generates leads for the cost of your monthly plan.",
      },
      {
        icon: TrendingUp,
        title: "Online leads are often your warmest prospects",
        description:
          "Someone who found your website through Google, read your about page, checked your reviews, and then submitted a form is much more likely to book than a cold outreach target.",
      },
      {
        icon: BarChart3,
        title: "Tracking leads shows you what's working",
        description:
          "Without lead tracking, you're guessing. With the Graylock dashboard, you can see how many enquiries came in, from which pages, and when — giving you the data to make smarter marketing decisions.",
      },
    ],
  },
  howGraylockDoesIt: {
    steps: [
      {
        title: "Conversion-optimised page design",
        description:
          "Every Graylock page is designed around driving a specific action. CTAs appear in the hero, mid-page, and footer. No page is a dead end.",
      },
      {
        title: "Lead capture forms on every key page",
        description:
          "Every service page, location page, and high-intent page has a contact or inquiry request form. Growth and Scale plans include enhanced forms with additional fields.",
      },
      {
        title: "Phone click-to-call",
        description:
          "Every page has a prominent, tappable phone number so mobile visitors can call with one tap. This captures leads who prefer phone contact.",
      },
      {
        title: "FAQ sections",
        description:
          "Answering objections proactively reduces friction and increases the conversion rate of visitors who are on the fence.",
      },
      {
        title: "Dedicated account manager",
        description:
          "Every plan includes a dedicated account manager who knows your practice and your website. Real support from a real person — no tickets, no chatbots.",
      },
      {
        title: "Google Business Profile optimization",
        description:
          "GBP drives direct calls and website visits from Google Maps. For many professional practices, GBP is their #1 lead source.",
      },
    ],
  },
  statsStrip: {
    stats: [
      { value: "5–15%", label: "conversion rate for a well-optimized site vs 1–3% average" },
      { value: "126%", label: "more leads for practices using tracking forms vs phone only" },
      { value: "80%", label: "increase in conversions from adding video to a landing page" },
      { value: "202%", label: "more leads for websites with clear, prominent CTAs" },
    ],
  },
  keyConcepts: {
    concepts: [
      {
        title: "The Lead Funnel",
        description:
          "The lead funnel describes the journey from stranger to client: Awareness (they discover you via Google, Maps, or a referral) → Consideration (they visit your site and evaluate you) → Decision (they reach out). Most websites only address the Awareness stage (showing up) and completely neglect Consideration (convincing the visitor you're the right choice) and Decision (making it easy to act). Graylock designs for all three stages.",
      },
      {
        title: "Call-to-Action (CTA) Strategy",
        description:
          "A CTA is an instruction that prompts your visitor to take a specific action: 'Book a Free Consultation', 'Request an Appointment', 'Call Us Now'. The placement, wording, design, and frequency of CTAs is one of the highest-leverage conversion factors on any website. Most practice websites have CTAs buried in footers or written as passive suggestions. Graylock places prominent, active CTAs in the hero, mid-page, and end of every key page.",
      },
      {
        title: "Form Design and Lead Capture",
        description:
          "Contact forms are your primary digital lead capture mechanism. The design of a form affects conversion rate dramatically: too many fields = abandoned forms; too few = low-quality leads. Graylock builds forms with the right balance for your practice type — typically Name, Phone, Email, and one qualifying question. Growth and Scale plans include enhanced forms with additional fields and lead tracking.",
      },
      {
        title: "Lead Tracking and Attribution",
        description:
          "Lead tracking means knowing which visitors came in, which page they came from, what they searched for, and what action they took. Without tracking, you have no idea what's working. The Graylock dashboard (Growth and Scale plans) gives you a real-time view of enquiry activity so you can identify your best-performing pages and optimize accordingly.",
      },
      {
        title: "Conversion Rate Optimization (CRO) for Lead Gen",
        description:
          "CRO is the practice of systematically improving the percentage of visitors who take a desired action. For a lead-generation website, this means testing and refining: headline copy, CTA button text, form placement, social proof positioning, and page structure. Graylock builds with CRO best practices from day one, and Scale plan clients receive advanced analytics and reporting that include CRO recommendations.",
      },
    ],
  },
  commonMistakes: {
    rows: [
      {
        mistake: "No form above the fold",
        cost: "Visitors who are ready to enquire can't easily act — they leave",
        fix: "Every Graylock page has a form or click-to-call CTA visible without scrolling",
      },
      {
        mistake: "Generic CTA text ('Contact Us', 'Submit')",
        cost: "Low click-through rate — passive language doesn't compel action",
        fix: "We write specific, active CTAs tailored to each page's intent",
      },
      {
        mistake: "No way to track what's working",
        cost: "No idea what's working — can't improve what you can't measure",
        fix: "Dashboard access on every plan so you can see traffic and enquiries",
      },
      {
        mistake: "Phone number not clickable on mobile",
        cost: "Mobile visitors can't call with one tap — most give up",
        fix: "Every Graylock site has click-to-call formatting on all phone numbers",
      },
      {
        mistake: "Asking for too much information in forms",
        cost: "High form abandonment rate — visitors don't want to fill out 10 fields",
        fix: "Forms are designed with optimal field count for each practice type",
      },
      {
        mistake: "No follow-up system",
        cost: "Leads come in but go cold before being contacted",
        fix: "Dashboard notifications + monthly lead activity reports ensure no lead is missed",
      },
    ],
  },
  faqs: [
    {
      q: "What is lead generation and why does my website need it?",
      a: "Lead generation is the process of turning website visitors into enquiries, calls, and bookings. Your website is your best lead generation tool — it works 24/7, costs a fixed monthly rate, and can reach potential clients you'd never reach through referrals alone. A site not generating leads is a missed opportunity every single day.",
    },
    {
      q: "How many leads should my website be generating?",
      a: "It depends on your traffic volume and practice area, but a well-optimized professional practice website should convert 5–15% of visitors into leads. If you're getting 100 visitors per month and zero enquiries, something is structurally broken — and it's almost always fixable.",
    },
    {
      q: "What's the most important thing I can do to generate more leads from my website?",
      a: "Add clear, compelling calls-to-action on every key page, make sure your forms work and are easy to find, ensure your site loads fast on mobile, and optimize your Google Business Profile. These four changes alone can dramatically increase the leads your current site generates.",
    },
    {
      q: "Can I see how my website is performing?",
      a: "Yes. Every plan includes dashboard access where you can view your website traffic, see enquiries that come in, and track key metrics. Your dedicated account manager is also available to walk you through performance and suggest improvements.",
    },
    {
      q: "How is lead generation different from advertising?",
      a: "Advertising (Google Ads, Facebook Ads) generates leads immediately but stops the moment you stop paying. Website-based lead generation through SEO and conversion optimization builds over time — it compounds. Once your site ranks well and converts effectively, it generates leads at near-zero marginal cost.",
    },
    {
      q: "Which Graylock plan is best for lead generation?",
      a: "All plans include lead capture forms, click-to-call, dashboard access, and a dedicated account manager. For active lead generation with more funnel pages and enhanced forms, the Growth plan ($299/mo) is ideal. The Scale plan ($449/mo) adds advanced analytics and more site update hours.",
    },
  ],
  bottomCta: {
    headline: "Is Your Website Generating Leads Every Day — or Just Sitting There?",
    subtext:
      "Book a free 20-minute review. We'll evaluate your current conversion setup, show you exactly what's stopping visitors from becoming leads, and give you a clear plan to fix it — at no cost.",
    button: "Schedule a Free Consultation",
  },
  relatedStrategy: [
    { name: "Website Design", path: "/website-design" },
    { name: "Funnel Pages", path: "/funnel-pages" },
    { name: "Google Business Profiles", path: "/google-business-profile" },
    { name: "All Strategy", path: "/our-strategy" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Lead Generation for Professional Practices | Graylock Digital",
    url: "https://graylockdigital.com/lead-generation-for-small-business",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is lead generation and why does my website need it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lead generation is the process of turning website visitors into enquiries, calls, and bookings. Your website works 24/7 and can reach clients you'd never reach through referrals alone.",
        },
      },
      {
        "@type": "Question",
        name: "Can I see how my website is performing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every plan includes dashboard access to view website traffic, enquiries, and key metrics.",
        },
      },
      {
        "@type": "Question",
        name: "Which Graylock plan is best for lead generation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All plans include lead capture forms. For active lead generation with tracking, the Growth ($299/mo) or Scale ($449/mo) plans are ideal.",
        },
      },
    ],
  },
};

export default function LeadGenerationPage() {
  return <StrategyLandingPage data={data} />;
}
