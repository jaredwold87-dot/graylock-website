export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$79",
    setup: "$299 one-time setup",
    description: "You do great work. Your website should say so. This is your professional foundation \u2014 clean, fast, and built to make the right first impression.",
    features: [
      "Custom 5-Page Website",
      "Mobile-First Design",
      "Basic Lead Submission Form",
      "Basic SEO Setup",
      "Dashboard + Support",
      "Hosting & SSL Included"
    ]
  },
  {
    name: "Standard",
    price: "$119",
    setup: "$499 one-time setup",
    popular: true,
    description: "You're ready to grow \u2014 and you want Google to know it. This is for the business owner who's tired of being invisible online and wants leads coming in consistently.",
    features: [
      "Custom 7-Page Website",
      "5 SEO-Optimized Funnel Pages",
      "Assistance with Google Business Profile Setup",
      "Monthly Performance Report",
      "Lead Activity Tracking",
      "Local SEO Optimization",
      "Website Analytics & Visitor Insights",
      "Enhanced Lead Submission Form",
      "Edit Business Info + Announcement Banner",
      "Enhanced Dashboard + Priority Support"
    ]
  },
  {
    name: "Growth",
    price: "$199",
    setup: "$599 one-time setup",
    description: "You're not just competing locally \u2014 you're dominating. This is for the established business that wants maximum visibility, full control, and a site that works as hard as you do.",
    features: [
      "Custom 14-Page Website",
      "10 SEO-Optimized Funnel Pages",
      "Enhanced Dashboard + Priority Support",
      "Monthly Performance Report",
      "Advanced Lead Generation Form",
      "Full Analytics & Performance Reports",
      "Advanced SEO & Schema",
      "Annual Strategy Call",
      "Edit All Business Info + Message Banner",
      "Easy Update Request Submission",
      "Quarterly SEO Review",
      "Custom Integrations (Calendly, etc.)"
    ]
  },
  {
    name: "Custom",
    description: "For businesses with unique needs that go beyond our standard plans.",
    isCustom: true,
    features: [
      "Everything in Growth",
      "Custom Page Count",
      "Custom Applications & Dashboards",
      "Operating System Builds",
      "Advanced SEO Strategy",
      "Dedicated Account Manager",
      "Custom Reporting Cadence",
      "Priority Build Queue"
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Bobbie W.",
    title: "Montana Counseling Solutions",
    location: "Montana",
    quote: "Before Graylock, I was getting leads \u2014 but they weren't the right leads. People who weren't a good fit, who couldn't afford my services, or who just weren't aligned with the kind of work I do. Since launching my new site, my monthly leads have more than doubled, but more importantly, the clients coming through are exactly who I want to work with. It's like the website filters for me. I'm spending less time on consultations that go nowhere and more time doing the work I actually love."
  },
  {
    name: "Kim W.",
    title: "Senior Health Solutions",
    location: "United States",
    quote: "I had no website at all \u2014 I was doing everything through community outreach, showing up in person, handing out cards. It was exhausting and inconsistent. Graylock built me a site from scratch and within just a couple months, clients started finding me on Google without me doing anything. The funnel pages they set up drove real local search traffic almost immediately. Now leads come to me. I still love being in the community, but now it's by choice \u2014 not because I have no other option."
  },
  {
    name: "Ben Lambright",
    title: "West Coast Eye Clinic",
    location: "West Coast",
    quote: "We had two outdated websites that were creating confusion for patients and extra work for our staff. Graylock consolidated everything into one clean, professional site and completely restructured how new patients contact us. I didn't want people calling the front desk \u2014 I wanted a controlled, professional intake process. Now every inquiry comes through an online form, and based on what the patient submits, it routes directly to the right person on my team. No more missed calls, no more phone tag. It's streamlined our entire front-end workflow."
  }
];

export const FAQS = [
  {
    category: "Getting Started",
    id: "getting-started",
    questions: [
      {
        q: "What exactly is included in the free website review?",
        a: "Your free review includes three things:\n\n1. A full evaluation of your current website — we look at design, messaging, mobile responsiveness, page speed, and basic SEO gaps.\n2. A live strategy walkthrough — we hop on a 20-minute call and walk you through what we found in plain English.\n3. A custom homepage demo — we design a concept homepage for your business so you can see exactly how we'd improve it.\n\nOn top of that, you receive a comprehensive written PDF report covering competitive analysis, customer and audience insights, website performance analysis, and strategic opportunity recommendations. It's a high-value deliverable you keep regardless of whether you choose to work with us.\n\nThere's no cost and no obligation. We do this because we believe you should see the value before you make any decision."
      },
      {
        q: "How long does it take to build and launch my website?",
        a: "Once you give us the green light, we build and launch your website within 3–5 business days on average. We move fast because small businesses can't afford to wait weeks for a website.\n\nBefore we start building, we'll have a short onboarding call to gather your logo, photos, business info, and anything specific you want included. Much of the timeline depends on how quickly you can provide feedback and materials — the faster you can get us that information, the faster we launch."
      },
      {
        q: "What information do you need from me to get started?",
        a: "Not much — we do most of the heavy lifting. We'll ask for:\n\n• Your logo (or we can discuss a simple logo refresh)\n• Any photos of your team, workspace, or work (or we'll use professional stock imagery)\n• Your business name, services, service area, and contact details\n• Any existing content you'd like to keep\n• Domain access credentials (or the ability to point DNS)\n• Current hosting login, if applicable\n\nWe'll send you a short intake form after your review call to gather everything we need."
      }
    ]
  },
  {
    category: "Pricing & Plans",
    id: "pricing-plans",
    questions: [
      {
        q: "What's included in the monthly fee?",
        a: "Your monthly fee covers everything needed to keep your website running and performing:\n\n• Website hosting on fast, secure servers\n• SSL certificate (the padlock that makes your site trusted and secure)\n• Dashboard access and support\n\nStarter plan ($79/mo): Dashboard + support\nStandard plan ($119/mo): Enhanced dashboard + priority support + assistance with Google Business Profile setup\nGrowth plan ($199/mo): Enhanced dashboard + custom integrations + priority support + annual strategy call\nCustom plan: Tailored to your needs — contact us for a quote\n\nYou can view all plan details on our Pricing page."
      },
      {
        q: "Is there a setup fee, and what does it cover?",
        a: "Yes — there's a one-time setup fee that covers the cost of designing and building your custom website:\n\n• Starter: $299 setup\n• Standard: $499 setup\n• Growth: $599 setup\n• Custom: Custom quote\n\nThis is the cost of the actual design and development work. Most agencies charge $5,000–$15,000 for this upfront. Our setup fee lets you get a professionally built website for a fraction of that, with the ongoing maintenance and support spread into your monthly rate."
      },
      {
        q: "Are there any hidden fees or extra charges?",
        a: "No. The setup fee and monthly rate are all you pay. There are no surprise invoices for hosting renewals, plugin licences, or security certificates — those are all included.\n\nIf you ever want something outside the scope of your plan — like a major redesign, a new section, or additional pages beyond your plan's limit — we'll quote that separately and clearly before any work begins. You'll never be surprised by a charge."
      },
      {
        q: "Can I cancel at any time?",
        a: "Yes. There are no long-term contracts — all plans are month-to-month. You can cancel with 30 days' notice at any time.\n\nIf you cancel, you keep the website files and all the content. We'll provide everything you need to move your site to another host or developer. We'd rather earn your business every month than lock you into something that isn't working for you."
      }
    ]
  },
  {
    category: "Your Website",
    id: "your-website",
    questions: [
      {
        q: "What do I own, and what does my monthly fee cover?",
        a: "You own your domain, your content, your copy, and your brand assets — always. Your monthly fee covers everything it takes to keep your website performing at its best: professional hosting, security updates, speed optimization, ongoing SEO maintenance, and unlimited content updates.\n\nThink of it like having a full web team on retainer for a fraction of the cost. If you ever decide to move on, your domain goes with you — it's registered in your name."
      },
      {
        q: "Is my website built on a template or is it custom?",
        a: "Every website we build is custom to your business — not a drag-and-drop template. We design your site around your brand, your services, your local market, and the specific clients you're trying to attract.\n\nThat said, we work from a proven structural framework that lets us move fast (within 3–5 business days) without sacrificing quality. Think of it like a custom-built home using tested construction methods — not a prefab kit."
      },
      {
        q: "Will my site work on mobile phones?",
        a: "Yes — every site we build is mobile-first. That means we design for phones and tablets first, then adapt for desktop. Over 60% of your visitors are browsing on their phones, and Google uses mobile performance as a ranking signal.\n\nWe test every site on multiple screen sizes before launch."
      },
      {
        q: "Can I expand my website later if my business grows?",
        a: "Absolutely. You can upgrade your plan at any time — from Starter to Standard, or Standard to Growth — and we can add new pages, service areas, blog posts, or other features as your needs evolve.\n\nFor businesses with unique requirements, our Custom plan offers tailored solutions. Just reach out and let us know what you need. We'll scope it out and give you a clear quote if it falls outside your current plan's scope."
      }
    ]
  },
  {
    category: "SEO & Getting Found Online",
    id: "seo",
    questions: [
      {
        q: "Will my website show up on Google?",
        a: "We build every website with a solid SEO foundation — clean code structure, fast load times, proper page titles and meta descriptions, schema markup, and mobile optimisation. These are the building blocks that help Google understand and rank your site.\n\nStandard and Growth plans also include local SEO optimisation and assistance with Google Business Profile setup, which is critical for service businesses that rely on local search traffic.\n\nSEO takes time — typically 3–6 months to start seeing meaningful movement. But starting with a properly built site is the difference between slow growth and no growth."
      },
      {
        q: "What is the business dashboard, and do all plans include it?",
        a: "Yes — all plans include dashboard access.\n\nStarter plan: Dashboard + support — view your website traffic, edit business hours, phone number, and address.\n\nStandard plan: Enhanced dashboard + priority support — all Starter features plus announcement banner editing, lead activity tracking, and full performance reports.\n\nGrowth plan: Enhanced dashboard — all Standard features plus easy update request submission and priority support.\n\nCustom plan: Custom dashboard configuration tailored to your specific needs.\n\nThe dashboard is a private, easy-to-use portal that puts you in control of your key business information without needing to contact a developer."
      }
    ]
  },
  {
    category: "Features & What They Mean",
    id: "features-explained",
    questions: [
      {
        q: "What is a funnel page?",
        a: "A funnel page is a focused, standalone page on your website designed to attract visitors searching for a specific service in a specific location — and guide them toward taking action (like calling you or filling out a form).\n\nUnlike a general \"Services\" page that lists everything, a funnel page zeroes in on one thing — for example, \"Tax Preparation for Small Businesses in Denver\" or \"Emergency Plumbing in Austin.\" It's written, structured, and optimized to rank for that exact search term.\n\nThe word \"funnel\" comes from the idea that these pages funnel the right people — those already searching for what you offer — toward becoming a lead. They're one of the most effective ways to get found on Google without paying for ads.\n\nThe Standard plan includes 5 funnel pages, and the Growth plan includes 10."
      },
      {
        q: "What are SEO funnel pages, and why do they matter?",
        a: "SEO funnel pages are dedicated, search-optimized pages built around the specific services you offer and the locations you serve. Instead of listing everything on one generic \"Services\" page, each funnel page targets a specific search term your customers are actually typing into Google.\n\nFor example, if you're a plumber in Austin, you might have individual pages for \"emergency plumber Austin,\" \"water heater repair Austin,\" and \"drain cleaning Round Rock.\" Each page is written, structured, and optimized to rank for that exact search — giving you multiple entry points into Google instead of just one.\n\nThis is one of the most effective ways to generate organic leads without paying for ads. The Standard plan includes 5 funnel pages, and the Growth plan includes 10 — enough to cover your core services and surrounding areas. Starter plan sites can absolutely be upgraded later if you want to add funnel pages down the road."
      },
      {
        q: "What's the difference between basic SEO and local SEO optimization?",
        a: "Basic SEO (included in all plans) covers the fundamentals — clean code, fast page speed, proper page titles and meta descriptions, mobile optimization, and a sitemap. These are the building blocks every website needs.\n\nLocal SEO optimization (Standard and Growth plans) goes significantly deeper. It includes:\n\n• Location-specific keyword targeting across your pages\n• Assistance with Google Business Profile setup and optimization — so you show up in the local map pack\n• NAP consistency (Name, Address, Phone) across your site\n• Local schema markup that tells Google exactly where you operate and what you do\n• Geo-targeted content strategy for your service area\n\nFor service businesses that rely on local customers, this is often the difference between showing up on the first page of Google and being invisible. Most of your competitors aren't doing this — which is exactly why it works."
      },
      {
        q: "What is lead activity tracking?",
        a: "Lead activity tracking (Standard and Growth plans) gives you visibility into every lead that comes through your website. Instead of just receiving a form submission in your inbox and hoping you follow up, you get a dashboard view that shows:\n\n• Every form submission with full details\n• When each lead came in and which page they submitted from\n• Whether you've responded to them yet\n• A history of all your leads over time\n\nThis is important because most small businesses lose leads simply by forgetting to follow up. When you can see every inquiry in one place and know which ones still need a response, you close more deals. It's a simple tool that directly impacts your revenue."
      },
      {
        q: "What's the difference between the lead submission forms on each plan?",
        a: "The Starter plan includes a basic lead submission form — a clean, professional contact form that captures a visitor's name, email, phone number, and message. It gets the job done for businesses that just need a simple way for people to reach out.\n\nThe Standard plan includes an enhanced lead submission form with additional fields tailored to your business — like service type, preferred appointment time, or project details. This pre-qualifies your leads so you spend less time on back-and-forth and more time closing.\n\nThe Growth plan includes an advanced lead generation form — a multi-step, conversion-optimized form designed to guide visitors through a short series of questions. These forms consistently convert at 2–3x the rate of standard contact forms because they feel less intimidating and more interactive. They're the same style of forms used by high-budget marketing agencies — built into your site at no extra cost."
      },
      {
        q: "What is schema markup, and does my business need it?",
        a: "Schema markup is code added to your website that helps Google understand exactly what your business does, where you're located, what services you offer, your hours, your reviews, and more. It doesn't change how your site looks to visitors — but it changes how Google sees and displays your site in search results.\n\nWith proper schema, your business can show up with rich results — star ratings, business hours, service lists, and location info displayed right in the search listing. This makes your result stand out and get more clicks than a plain text listing.\n\nAll plans include basic schema. The Growth plan includes advanced schema markup covering multiple service types, FAQ schema, and local business schema — giving you the best possible presence in search results."
      },
      {
        q: "What happens during the annual strategy call?",
        a: "The annual strategy call (Growth plan) is a 30-minute one-on-one session with our team where we review your website's performance and plan ahead. We cover:\n\n• Traffic trends — where your visitors are coming from and which pages perform best\n• Lead quality — whether your forms are attracting the right kind of customers\n• SEO progress — how your rankings are moving and where the opportunities are\n• Content recommendations — what pages or updates would drive the most impact next year\n• Competitive insights — what your competitors are doing online and how to stay ahead\n\nThink of it as having a marketing advisor on retainer. Most small businesses don't have anyone looking at this data for them — and that's exactly why they plateau. The strategy call keeps your site evolving with your business instead of sitting static."
      }
    ]
  },
  {
    category: "Working With Graylock",
    id: "working-with-graylock",
    questions: [
      {
        q: "Who will I be working with?",
        a: "Every project is handled by our US-based team. Nothing is outsourced. You'll have a dedicated point of contact from your first call through to launch and ongoing support.\n\nWe specialise in small service businesses — accountants, therapists, contractors, consultants, dentists, physicians, and lawyers — so we understand your industry and your clients."
      },
      {
        q: "What if I don't like how my site turns out?",
        a: "Before you pay us anything, you'll see a custom homepage demo showing exactly how we'd design your site. You can give feedback, request changes, and make sure you love the direction before we build a single page.\n\nDuring the build, we send you a preview link before going live. We don't launch until you're satisfied."
      },
      {
        q: "What types of businesses do you work with?",
        a: "We work with any local service business that relies on trust, reputation, and local visibility to attract clients. Our typical clients include:\n\n• Accountants and tax professionals\n• Therapists and counsellors\n• General contractors and tradespeople\n• Consultants\n• Dentists and medical professionals\n• Physicians and private practice doctors\n• Lawyers and legal professionals\n\nThis isn't a closed list — if you run a service business and want more leads from your website, we're likely a great fit. Reach out and let's talk."
      }
    ]
  }
];
