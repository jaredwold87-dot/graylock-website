import IndustryLandingPage, { IndustryPageData } from "@/components/industry/IndustryLandingPage";
import {
  Home,
  Search,
  Camera,
  Smartphone,
  Award,
  ClipboardList,
  Clock,
} from "lucide-react";

const data: IndustryPageData = {
  seo: {
    title: "Websites for Home Builders | Custom Home & Residential Construction — Graylock Digital",
    description:
      "Graylock builds custom, SEO-optimized websites for home builders, custom-home contractors, and residential construction firms. Project galleries, floor plans, model-home pages, lead-capture forms. Built in 7–10 business days. No long-term contracts.",
    url: "https://graylockdigital.com/websites-for-home-builders",
  },
  hero: {
    badge: "For Home Builders",
    badgeIcon: Home,
    h1: "When a Family Is About to Build Their Dream Home,",
    h1Highlight: "Your Website Is the First Walkthrough.",
    subheadline:
      "Custom-home buyers and renovation clients spend weeks researching builders before they ever pick up the phone. We build modern, locally-ranked websites that showcase your craftsmanship, communicate your process, and turn quiet site visitors into qualified consultation requests — long before they reach a competitor's quote form.",
    cta: "Get a Free Website Review",
    ctaSubtext: "20-minute call · Custom homepage demo · No obligation.",
    backgroundImage: `${import.meta.env.BASE_URL}hero-home-builders.jpg`,
    trustSignals: [
      "Built for residential builders",
      "Project galleries & floor plans",
      "Lead-capture & consultation forms",
      "Fully managed for you",
    ],
  },
  specialties: {
    headline: "Websites for Every Kind of Residential Builder",
    tags: [
      "Custom Home Builders",
      "Production Builders",
      "Semi-Custom Builders",
      "Spec Home Builders",
      "Luxury Home Builders",
      "Design-Build Firms",
      "Whole-Home Renovators",
      "Home Additions",
      "Modular & Pre-Fab Builders",
      "Tiny Home Builders",
      "Cabin & Lake-Home Builders",
      "Multi-Family & Townhome",
    ],
  },
  painPoints: {
    sectionLabel: "SOUND FAMILIAR?",
    headline: "Your Best Work Is Hidden Behind a Site That Doesn't Sell It",
    cards: [
      {
        icon: Camera,
        title: "Project gallery doesn't do justice to your work",
        description:
          "Your finished homes are gorgeous, but the photos sit in a clunky grid with no story, no floor plans, and no way for a prospect to picture themselves living there.",
      },
      {
        icon: Search,
        title: "Invisible for 'custom home builder near me'",
        description:
          "When a family in your service area searches for a builder, your competitors with sharper SEO show up first — even when your portfolio is twice as good.",
      },
      {
        icon: ClipboardList,
        title: "No clear process for first-time buyers",
        description:
          "Building a home is intimidating. If your site doesn't lay out the journey from consultation to keys, prospects get nervous and ghost.",
      },
      {
        icon: Smartphone,
        title: "Looks dated on a phone",
        description:
          "Most homebuyers browse builders on their phone in the evening. A slow, cramped, or outdated mobile site signals one thing: this builder isn't paying attention to detail.",
      },
      {
        icon: Award,
        title: "Awards and certifications buried at the bottom",
        description:
          "NAHB, Energy Star, Parade of Homes, BBB — all the proof that you're the safe choice is hidden three clicks deep instead of front and center.",
      },
      {
        icon: Clock,
        title: "Site never gets updated between projects",
        description:
          "Between job sites and client calls, the website sits stale. New floor plans, completed homes, and testimonials never make it on, so the site looks like business is slow even when you're booked out.",
      },
    ],
  },
  benefits: {
    headline: "A Builder Website Designed to Win the Consultation",
    items: [
      {
        title: "Project Galleries That Tell a Story",
        description:
          "Each completed home gets its own page with floor plans, before-and-after, square footage, location, and the family's story — so prospects can imagine their own build.",
      },
      {
        title: "Floor Plan & Model Home Pages",
        description:
          "Every floor plan and model home you offer gets its own SEO page so you rank for the searches families are actually typing — '4-bedroom craftsman floor plan,' 'modern farmhouse model.'",
      },
      {
        title: "Service-Area Pages That Rank Locally",
        description:
          "Each city, town, and neighborhood you build in gets its own optimized page targeting the local searches that drive qualified leads.",
      },
      {
        title: "Trust Signals Where They Convert",
        description:
          "NAHB, Energy Star, BBB, awards, warranties, and testimonials displayed at the top of every page — not buried at the bottom — so buyers feel safe choosing you.",
      },
      {
        title: "Built in 7–10 Business Days",
        description:
          "No six-month rebuild that drags into next year. From kickoff to launch in under two weeks — so your next selling season doesn't pass with a stale site.",
      },
      {
        title: "Fully Managed — You Stay on the Job Site",
        description:
          "Hosting, updates, SEO, new project additions, floor plan launches, seasonal pages, and support all included. Email us when a home closes; we handle the rest.",
      },
    ],
  },
  process: {
    headline: "From Kickoff Call to a Site That Books Consultations",
    steps: [
      {
        title: "Tell Us About Your Builds",
        description:
          "A 20-minute call about the homes you build, your service area, your typical client, and the kinds of projects you want more of.",
      },
      {
        title: "We Build Your Demo",
        description:
          "We design a custom homepage that shows exactly how a family considering a custom build will find you, trust you, and request a consultation.",
      },
      {
        title: "Review & Approve",
        description:
          "Walk through every detail — gallery layout, floor plan pages, consultation form — until it represents your craftsmanship perfectly.",
      },
      {
        title: "Launch & Grow",
        description:
          "Your site goes live and starts pulling qualified consultation requests from buyers actively planning their next home.",
      },
    ],
  },
  faqs: [
    {
      q: "Do you build websites for both custom-home builders and production builders?",
      a: "Yes. The site structure changes to match: custom builders get an in-depth design-build process page, gallery storytelling, and consultation-focused forms. Production builders get prominent floor plan filtering, model home pages, available-inventory lists, and quick-tour scheduling. Either way, the site is built around how your prospects actually shop.",
    },
    {
      q: "Can you showcase floor plans and model homes the way prospects expect?",
      a: "Yes. Every floor plan and model home gets its own dedicated page with high-resolution renderings, square footage, bedroom/bath counts, customization options, available lots, and a clear path to schedule a consultation or tour. Each page is SEO-optimized so it ranks for the floor plan name and style.",
    },
    {
      q: "Will the site help us rank for 'custom home builder' and city-specific searches?",
      a: "That's a core focus. We build dedicated service-area pages for every city or community you build in, paired with local SEO and a fully optimized Google Business Profile. Within a few months most builder clients are appearing in the local map pack and on page one for their main 'builder + city' and 'custom home builder near me' searches.",
    },
    {
      q: "How do you handle project galleries and photography?",
      a: "We build a gallery system that lets each completed home become a story — not just a thumbnail. Floor plan, location, square footage, design notes, and the family's testimonial all live together. You email us photos when a home wraps and we update the site for you.",
    },
    {
      q: "How long does it take to launch?",
      a: "Most home builders go live in 7–10 business days from kickoff. We handle the copy, design, SEO, gallery setup, and floor plan pages — you'll spend under an hour total reviewing drafts.",
    },
  ],
  pricingHeadline: "Pricing Built for Custom Home Builders and Growing Construction Firms",
  bottomCta: {
    headline: "A Family Is Researching Their Next Builder Right Now",
    subtext:
      "Book a free 20-minute call. We'll show you exactly what your home builder website could look like — and build a custom homepage demo before you commit to anything.",
    button: "Get a Free Demo",
  },
  relatedPages: [
    { name: "Industrial & Construction", path: "/websites-for-industrial-construction" },
    { name: "Local Service Businesses", path: "/other-service-businesses" },
    { name: "Accounting Firms", path: "/websites-for-accountants" },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Websites for Home Builders | Graylock Digital",
    url: "https://graylockdigital.com/websites-for-home-builders",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build websites for both custom-home builders and production builders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Custom builders get an in-depth design-build process page, gallery storytelling, and consultation-focused forms. Production builders get prominent floor plan filtering, model home pages, available-inventory lists, and quick-tour scheduling. The site is built around how your prospects actually shop.",
        },
      },
      {
        "@type": "Question",
        name: "Will the site help us rank for 'custom home builder' and city-specific searches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build dedicated service-area pages for every city or community you build in, paired with local SEO and a fully optimized Google Business Profile, so you appear for 'custom home builder near me' and 'builder + city' searches across your service area.",
        },
      },
    ],
  },
};

export default function HomeBuilders() {
  return <IndustryLandingPage data={data} />;
}
