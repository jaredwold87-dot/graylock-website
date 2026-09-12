import type { StandardIndustryContent } from "../types";

const content = {
  route: "/websites-for-home-builders",
  hero: {
    eyebrow: "WEBSITES FOR HOME BUILDERS",
    heading: "A Website That Shows the Care Behind Every Build.",
    body:
      "For custom home builders, production builders, and design-build firms that need their work, process, and service area to be clear before a prospective client reaches out.",
    secondaryLabel: "See Featured Projects",
    secondaryHref: "/featured-projects",
    microcopy:
      "Start with a 15-minute fit call. If Graylock is the right fit, you receive a custom Homepage Direction before any build fee is due. A Free Homepage Direction is not a free website.",
  },
  offer: {
    eyebrow: "THE GRAYLOCK DIFFERENCE",
    heading: "See the direction before the build fee is due.",
    body:
      "Start with a 15-minute fit call. If Graylock is the right fit, Graylock creates a custom Homepage Direction around your business before any build fee is due. Review the direction, scope, and price before deciding whether to move forward.",
    links: [{ label: "Review current plan terms.", href: "/pricing" }],
    clarification: "A Free Homepage Direction is not a free website.",
  },
  project: {
    key: "meagher",
    eyebrow: "FEATURED GRAYLOCK PROJECT · HOME BUILDER",
    name: "Meagher Builders — Carson Valley & Lake Tahoe",
    descriptor: "Home Builder · Carson Valley & Lake Tahoe",
    body: "A website organized to show the craftsmanship behind each project.",
    cta: "View Meagher Builders on Featured Projects",
    href: "/featured-projects",
    alt: "Meagher Builders website project.",
    note:
      "What Graylock delivered: Custom portfolio presentation; Project conversation flow; Craftsmanship-led visual design; Mobile-responsive build.",
  },
  problems: {
    eyebrow: "THE PROBLEM WITH MOST HOME-BUILDER WEBSITES",
    heading:
      "Before a prospective client reaches out, they are already deciding whether your work feels clear, credible, and relevant.",
    items: [
      {
        title: "Your work is stronger than the way it is being shown.",
        body:
          "When completed homes, communities, and specialties are reduced to a thin gallery or generic copy, prospective clients cannot quickly understand the kind of builder you are.",
      },
      {
        title: "The path from interest to conversation is unclear.",
        body:
          "A visitor needs to see the homes you build, the areas you serve, and what working with your team looks like before deciding whether to reach out. When those details are scattered, the website makes that decision harder.",
      },
      {
        title: "Critical business details are easy to miss or get wrong.",
        body:
          "License or registration information, the registered business name, service areas, and project claims need a clear, consistent home. Small inconsistencies can create unnecessary questions about the business.",
      },
    ],
  },
  delivery: {
    eyebrow: "WHAT WE DELIVER",
    heading: "A Website Built Around How Homeowners Review a Builder.",
    items: [
      {
        title: "Clear Builder Positioning.",
        body:
          "A homepage and page structure organized around the homes you build, the clients you serve, the locations you cover, and the next step you want a prospective client to take.",
      },
      {
        title: "Project, Plan, and Community Structure.",
        body:
          "A flexible foundation for approved project stories, floor plans, model homes, and community or service-area information, with details presented in a way that is easy to review on any device.",
      },
      {
        title: "Proof and Business Details in the Right Places.",
        body:
          "Approved photography, project details, memberships, awards, warranties, reviews, and licensing information can be placed where a prospective client is likely to look for context. Only substantiated, client-approved proof is used.",
      },
      {
        title: "Mobile-Ready, Maintainable Foundations.",
        body:
          "Responsive layouts, accessible navigation patterns, clear contact paths, and a technical foundation designed for straightforward ongoing updates as projects, plans, and business details change.",
      },
    ],
  },
  process: {
    eyebrow: "HOW IT WORKS",
    heading: "A Clear Path From First Call to Launch.",
    intro:
      "Start with a short fit call. If Graylock is the right fit, you see a custom Homepage Direction before any build fee is due. You review the direction and scope, then Graylock builds and launches the website.",
    items: [
      {
        title: "15-Minute Fit Call",
        body:
          "We learn about your business, your current website, your service area, and what you need your online presence to clarify. Then we determine whether Graylock is the right fit.",
      },
      {
        title: "Homepage Direction",
        body:
          "If the work is a fit, we create a custom Homepage Direction around your business before any build fee is due.",
      },
      {
        title: "Review Scope and Decide",
        body:
          "You review the direction, scope, and price. If it feels right, you approve the build and move forward with clarity.",
      },
      {
        title: "Build, Test, and Launch",
        body:
          "After the Homepage Direction, required materials, and approvals are confirmed, standard websites are built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer.",
      },
    ],
  },
  faq: [
    {
      question: "What is a Free Homepage Direction?",
      answer:
        "It is a custom direction for your homepage based on your business, services, approved proof, and the action you want a prospective client to take. You review it before any build fee is due.",
    },
    {
      question: "Is a Free Homepage Direction a free website?",
      answer:
        "No. A Free Homepage Direction is not a free website. It lets you see the direction, scope, and price before deciding whether to move forward with a build.",
    },
    {
      question: "What happens first?",
      answer:
        "The first step is a 15-minute fit call about your business, current website, service area, and what you need your online presence to clarify. If Graylock is the right fit, Graylock creates the Homepage Direction.",
    },
    {
      question: "How long does a standard website take?",
      answer:
        "After the Homepage Direction, required materials, and approvals are confirmed, standard websites are built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer.",
    },
    {
      question: "How are license, registration, and project claims handled?",
      answer:
        "Your contractor registration or license number, specialty trade licenses, registered business name, and project claims are published from the information you approve. You remain responsible for their accuracy and for obtaining any legal, regulatory, lender, HOA, client, or other third-party review your business requires.",
    },
  ],
  finalCta: {
    eyebrow: "YOUR NEXT STEP",
    heading: "See a clearer direction for your home-building website.",
    body:
      "Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction for your home-building business before any build fee is due.",
    support:
      "Plans from $199/month. Build fees begin at $799 after you approve your Homepage Direction.",
    microcopy: "No build fee to see the direction. No pressure. No obligation.",
  },
} satisfies StandardIndustryContent;

export default content;