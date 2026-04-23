import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Wrench,
  Search,
  Clock,
  Phone,
  Star,
  Smartphone,
  CalendarClock,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for Local Service Businesses | Plumbers, Electricians, HVAC & Trades — Graylock Digital",
    description:
      "Graylock builds custom, SEO-optimized websites for plumbers, electricians, HVAC contractors, carpenters, and other local trades. Service-area pages, online booking, click-to-call. Built in 7–10 business days. No long-term contracts.",
    url: "https://graylockdigital.com/other-service-businesses",
  },
  hero: {
    badge: "For Local Service Businesses",
    badgeIcon: Wrench,
    h1: "When Your Pipes Burst at 2 AM,",
    h1Highlight: "Your Website Is the First Thing They Find.",
    subheadline:
      "Plumbers, electricians, HVAC techs, and carpenters live and die by the searches that happen the moment something breaks. We build modern, locally-ranked websites that put you at the top of those searches and turn a panicked phone scroll into a booked job — before your competitor's site even loads.",
    cta: "Get a Free Website Review",
    ctaSubtext: "20-minute call · Custom homepage demo · No obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-local-service-businesses.jpg`,
    trustSignals: [
      "Built for trades & home services",
      "Service-area & emergency pages",
      "Click-to-call + online booking",
      "Fully managed for you",
    ],
  },
  specialties: {
    headline: "Websites for Every Local Trade",
    tags: [
      "Plumbers",
      "Electricians",
      "HVAC Contractors",
      "Carpenters",
      "Handyman Services",
      "Roofers",
      "Painters",
      "Garage Door Repair",
      "Locksmiths",
      "Appliance Repair",
      "Landscapers & Lawn Care",
      "Pest Control",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Your Next Customer Is Searching Right Now — Are You Showing Up?",
    cards: [
      {
        icon: Search,
        title: "Buried on page 2 for your own city",
        description:
          "Searches like 'emergency plumber near me' or 'electrician in [your city]' are sending high-intent customers straight to a competitor with a better-optimized site.",
      },
      {
        icon: Phone,
        title: "Customers can't tap to call",
        description:
          "Someone with a flooded basement isn't going to copy and paste a phone number. If your site doesn't have a giant tap-to-call button on every page, you're losing emergency jobs.",
      },
      {
        icon: Smartphone,
        title: "Looks broken on a phone",
        description:
          "Most service searches happen on a phone, often outdoors. If your site is slow, cramped, or has a tiny menu nobody can tap, prospects bounce in under 5 seconds.",
      },
      {
        icon: Star,
        title: "Reviews live on Google, not your site",
        description:
          "Your hard-earned 5-star reviews are sitting on Google Business Profile while your website has zero social proof — so anyone landing there can't see why you're the right call.",
      },
      {
        icon: CalendarClock,
        title: "No way to book online",
        description:
          "Younger homeowners prefer to schedule online, even for non-emergency work. Without a simple booking form, you're losing the next generation of repeat customers.",
      },
      {
        icon: Clock,
        title: "Site hasn't been touched in years",
        description:
          "Between dispatching crews and running calls, the website never gets updated. Every quarter you wait, more jobs slip to the contractor who took a single afternoon to fix it.",
      },
    ],
  },
  benefits: {
    headline: "A Trades Website Built to Win Local Jobs",
    items: [
      {
        title: "Service-Area Pages That Rank",
        description:
          "Each city, neighborhood, and zip code you serve gets its own SEO-optimized page targeting the exact searches your customers are typing.",
      },
      {
        title: "Service-Specific Pages",
        description:
          "Drain cleaning, water heater install, panel upgrade, AC repair, custom trim — every service you offer gets its own page so you rank for the work you actually do.",
      },
      {
        title: "Click-to-Call & Booking on Every Page",
        description:
          "Sticky tap-to-call buttons on mobile and a simple online booking form on every page so no panicked customer ever has to hunt for how to reach you.",
      },
      {
        title: "Reviews & Trust Signals Built In",
        description:
          "Google reviews, license & insurance badges, BBB accreditation, and warranty guarantees displayed where they actually convert — at the top of every page.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No six-month rebuild that goes nowhere. From kickoff to launch in under two weeks — so the next storm, freeze, or heat wave doesn't pass you by.",
      },
      {
        title: "Fully Managed — You Stay on the Truck",
        description:
          "Hosting, updates, SEO, new service additions, seasonal pages, and support all included. Email us when you add a service or expand your area; we handle the rest.",
      },
    ],
  },
  process: {
    headline: "From Kickoff Call to a Site That Books Jobs",
    steps: [
      {
        title: "Tell Us About Your Business",
        description:
          "A 20-minute call about your trade, service area, the jobs you want more of, and the kinds of customers you want fewer of.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that shows exactly how a customer in a panic will find you, trust you, and book you.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through every detail — service-area pages, booking form, click-to-call setup — until it represents your business perfectly.",
      },
      {
        title: "Launch & Grow",
        description:
          "Your site goes live and starts pulling qualified service calls and bookings from your service area, around the clock.",
      },
    ],
  },
  testimonials: {
    featured: {
      name: "Tony C.",
      title: "Owner, Plumbing & Drain Service",
      location: "Tampa, FL",
      quote:
        "We used to spend $1,800/month on Google ads and still felt invisible. Graylock rebuilt our site, set up service-area pages for every town we cover, and within 60 days we were ranking page one for 'plumber near me' in three of them. Cut the ad budget in half.",
    },
    others: [
      {
        name: "Megan L.",
        title: "Co-Owner, Residential Electric",
        location: "Boise, ID",
        quote:
          "The click-to-call buttons alone changed our business. Emergency calls go straight through, and the booking form pulls in scheduled work overnight while we're sleeping.",
      },
      {
        name: "Dave H.",
        title: "Owner, HVAC & Refrigeration",
        location: "Raleigh, NC",
        quote:
          "Our old site looked like a one-truck operation when we run six. The new one finally matches the size of jobs we want — and the calls coming in have changed accordingly.",
      },
    ],
  },
  faqs: [
    {
      q: "Do you build websites for both emergency-service trades and scheduled-work trades?",
      a: "Yes. We build for plumbers, electricians, HVAC, and other emergency-driven trades — but also for carpenters, painters, landscapers, and handyman services where the work is mostly scheduled. The site structure changes to match: emergency trades get prominent click-to-call and 24/7 messaging, scheduled trades get a stronger booking form and project gallery.",
    },
    {
      q: "Will the site help me rank for 'near me' and city-specific searches?",
      a: "That's a core focus. We build dedicated service-area pages for every city, town, or zip code you actually serve, and pair them with proper local SEO and a fully optimized Google Business Profile. Within a few months most clients are appearing in the local map pack and on page one for their main 'service + city' searches.",
    },
    {
      q: "Can customers book online or do they have to call?",
      a: "Both. Every site we build has prominent click-to-call buttons (the dominant action for emergency calls) plus a simple online booking or quote-request form for non-emergency work. You decide which one is featured most prominently based on the type of jobs you want.",
    },
    {
      q: "We serve a wide service area. Will the site rank in all of those cities?",
      a: "Yes. We set up a service-area page for each city or region you genuinely serve, optimized for the searches happening in that specific market. We don't recommend faking coverage you don't have — but anywhere you legitimately work, we'll target.",
    },
    {
      q: "How long does it take to launch?",
      a: "Most service businesses go live in 7–10 business days from kickoff. We handle the copy, design, SEO, and image selection — you'll spend under an hour total reviewing drafts.",
    },
  ],
  pricingHeadline: "Pricing Built for Owner-Operators and Multi-Truck Service Companies",
  bottomCta: {
    headline: "Someone in Your Service Area Is Searching for You Right Now",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your trade or home-service website could look like — and build a custom homepage demo before you commit to anything.",
    button: "Get a Free Demo",
  },
  relatedPages: [
    { name: "Industrial & Construction", path: "/websites-for-industrial-construction" },
    { name: "Accounting Firms", path: "/websites-for-accountants" },
    { name: "Chiropractors", path: "/websites-for-chiropractors" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Local Service Businesses | Graylock Digital",
    url: "https://graylockdigital.com/other-service-businesses",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build websites for both emergency-service trades and scheduled-work trades?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build for plumbers, electricians, HVAC, and other emergency trades — and also for carpenters, painters, landscapers, and handyman services where the work is mostly scheduled. The site structure adapts to match: emergency trades get prominent click-to-call and 24/7 messaging, scheduled trades get a stronger booking form and project gallery.",
        },
      },
      {
        "@type": "Question",
        name: "Will the site help me rank for 'near me' and city-specific searches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build dedicated service-area pages for every city or zip code you serve and pair them with local SEO and Google Business Profile optimization, so you appear in 'near me' and 'service + city' searches across your service area.",
        },
      },
    ],
  },
};

export default function LocalServiceBusinesses() {
  return <IndustryLandingPage data={data} />;
}
