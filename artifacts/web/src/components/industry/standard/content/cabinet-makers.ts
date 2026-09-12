import type { StandardIndustryContent } from "../types";

const content = {
  route: "/websites-for-cabinet-makers",
  hero: {
    eyebrow: "CUSTOM WEBSITES FOR CABINET MAKERS",
    heading: "Your Cabinets Are Custom. Your Website Should Be Too.",
    body:
      "Graylock builds custom cabinet-maker websites that give your finished work, services, project geography, and process a clear place—so prospective homeowners, builders, and designers can understand your business before they start a conversation.",
    secondaryLabel: "See the Featured Project",
    secondaryHref: "#featured-project",
    microcopy:
      "Start with a 15-minute fit call. If Graylock is the right fit, we create a Free Homepage Direction before any build fee is due. A Free Homepage Direction is not a free website.",
  },
  offer: {
    eyebrow: "THE GRAYLOCK DIFFERENCE",
    heading: "See the Direction Before the Build Fee Is Due.",
    body:
      "A Free Homepage Direction lets you review a direction for your cabinet-making business before deciding whether to approve a build. It is a custom homepage direction, not a free website and not a generic template.",
    microcopy:
      "Start with a 15-minute fit call. No build fee is due before you approve the direction. No pressure. No obligation to move forward after you review the direction.",
  },
  review: {
    kind: "quote",
    eyebrow: "CLIENT REVIEW",
    heading: "A Verified Client Perspective.",
    quote:
      "“It’s clear that they took the time to understand our business and what we wanted to communicate to our clients.”",
    attribution: "Francisca Rangel",
    source: "5-star Google Review",
  },
  project: {
    key: "interior",
    eyebrow: "FEATURED CLIENT WEBSITE",
    name: "Interior Finishes Cabinets and Design",
    descriptor: "Cabinets & Design · Northern Nevada & Northern California",
    body:
      "Graylock created a polished, design-forward website for Interior Finishes Cabinets and Design to present its cabinetry and interior work alongside clear service information.",
    // Release instruction (not displayed): Use only the actual Interior Finishes project
    // presentation and the live-site destination as project evidence.
    cta: "Visit the Live Site",
    href: "https://www.interiorfinishesreno.com/",
    alt: "Interior Finishes Cabinets and Design website shown on desktop and mobile devices.",
  },
  problems: {
    eyebrow: "THE PROBLEM WITH MOST CABINET-MAKER WEBSITES",
    heading:
      "Before Someone Starts a Project, They Need to See the Work and Understand the Fit.",
    intro: "",
    items: [
      {
        title: "Finished work is hard to explore.",
        body:
          "A few unstructured images or a single gallery can make a cabinet shop’s range difficult to understand. Kitchens, built-ins, closets, vanities, millwork, and specialty work need an intentional project structure rather than a photo dump.",
      },
      {
        title: "Project fit is unclear before the first conversation.",
        body:
          "Visitors need to see the kinds of work you take on, the places you serve, and how your process begins. When those essentials are scattered or absent, the website does not give them enough context to decide whether to reach out.",
      },
      {
        title: "The next step is vague.",
        body:
          "A cabinet-maker website should make it simple to move from viewing craftsmanship to sharing the details that start a useful project conversation—without making visitors hunt for a phone number, form, or service information.",
      },
    ],
  },
  delivery: {
    eyebrow: "WHAT WE DELIVER",
    heading: "A Website Structure Built Around How Cabinet Work Is Chosen.",
    intro: "",
    items: [
      {
        title: "Project Galleries With a Purpose.",
        body:
          "We organize supplied, real project photography around the work you want people to understand, with useful project names, service context, and image groupings that are easy to explore.",
      },
      {
        title: "Clear Service + Service-Area Structure.",
        body:
          "We give cabinetry services, project types, and service geography a clear page and navigation structure so visitors and search engines can understand what your business does and where it works.",
      },
      {
        title: "A Project-Start Path Built Around Real Details.",
        body:
          "We structure calls to action and the existing form around the information a cabinet shop may need to begin a conversation, such as project type, location, plans, timing, and inspiration—only where the client elects to collect it.",
      },
      {
        title: "A Responsive, Maintainable Foundation.",
        body:
          "We build a polished, responsive website with a consistent visual system, clear navigation, and the existing Graylock support model for keeping current work and business information up to date.",
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
          "We talk through your cabinetry work, ideal projects, service area, current website, and what you want your online presence to make clearer. We determine whether Graylock is the right fit.",
      },
      {
        title: "Free Homepage Direction",
        body:
          "If the work is a fit, Graylock creates a custom homepage direction around your business, services, supplied proof, and the action you want a visitor to take—before any build fee is due.",
      },
      {
        title: "Review the Direction and Scope",
        body:
          "You review the direction, scope, and next steps. If you choose to move forward, you approve the build with clarity on what comes next.",
      },
      {
        title: "Build, Test, and Launch",
        body:
          "After the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer.",
      },
    ],
  },
  finalProof: {
    kind: "process",
    eyebrow: "CLIENT PROCESS",
    heading: "Clarity Before You Commit.",
    paragraphs: [
      "No build fee is due before you approve the Homepage Direction.",
      "After launch, if the site is not right for your business, you are covered by our 30-day money-back guarantee.",
      "Your monthly plan includes hosting, maintenance, ongoing support, and a website refresh every two years while you remain an active client.",
      "[Review pricing and terms.](/pricing)",
    ],
  },
  faq: [
    {
      question: "What is a Free Homepage Direction?",
      answer:
        "A Free Homepage Direction is a custom homepage direction for your cabinet-making business, informed by your services, service area, supplied work, and the action you want a visitor to take. It is not a generic template preview, and it is not a free website.",
    },
    {
      question: "What happens on the first call?",
      answer:
        "The first step is a 15-minute fit call. We discuss your cabinetry work, ideal projects, service area, current website, and what you want your online presence to make clearer. We also determine whether Graylock is the right fit.",
    },
    {
      question: "When can a standard site launch?",
      answer:
        "After the Homepage Direction, required materials, and approvals are confirmed, standard sites are built, tested, and launched in 7–10 business days. Larger or more complex projects may take longer.",
    },
    {
      question: "What materials do you need from us?",
      answer:
        "Before the build begins, Graylock confirms the materials needed for the agreed scope. These can include approved business information, service details, service-area information, logo and brand assets, project photography, and any selected form details. You remain responsible for providing accurate, approved materials.",
    },
    {
      question: "Can Graylock guarantee search placement or business results?",
      answer:
        "No. Graylock does not guarantee rankings, leads, bookings, revenue, compliance, approval, or any other business outcome. The work focuses on clear content, sound site structure, responsive presentation, and a straightforward path to start a conversation.",
    },
  ],
  finalCta: {
    eyebrow: "YOUR NEXT STEP",
    heading: "See the Direction for Your Cabinet-Making Business.",
    body:
      "Start with a 15-minute fit call. If Graylock is the right fit, Graylock creates a Free Homepage Direction before any build fee is due. A Free Homepage Direction is not a free website.",
    microcopy: "No pressure. No obligation to move forward after you review the direction.",
  },
} satisfies StandardIndustryContent;

export default content;