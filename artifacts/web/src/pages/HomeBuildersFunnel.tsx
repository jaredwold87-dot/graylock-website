import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { PRICING_TIERS } from "@/lib/constants";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import heroBgImage from "@/assets/home-builders/funnel-header-bg.webp";
import heroBgImageMobile from "@/assets/home-builders/funnel-header-bg-mobile.webp";
import heroMockupImage from "@/assets/home-builders/funnel-mockup.webp";
import heroMockupImageMobile from "@/assets/home-builders/funnel-mockup-mobile.webp";
import differenceBeforeImage from "@/assets/home-builders/difference-before.webp";
import differenceAfterImage from "@/assets/home-builders/difference-after.webp";
import timFounderPhoto from "@/assets/tim-founder.webp";
import {
  Monitor,
  TrendingDown,
  EyeOff,
  ArrowRight,
  Check,
  Loader2,
  PhoneCall,
  Sparkles,
  CreditCard,
  Hammer,
  Rocket,
  ShieldCheck,
  Wrench,
  MessagesSquare,
  UserCheck,
  TrendingUp,
  Camera,
  Gauge,
  RefreshCw,
  Star,
  X,
} from "lucide-react";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function computeOfferWindow(now: Date = new Date()) {
  const year = now.getFullYear();
  const month = now.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const monthName = MONTH_NAMES[month];
  const deadline = new Date(year, month + 1, 0, 23, 59, 59, 999);
  return {
    deadline,
    monthName,
    lastDayLabel: `${monthName} ${lastDay}`,
  };
}

const OFFER_WINDOW = computeOfferWindow();
const URGENCY_COPY = `${OFFER_WINDOW.monthName} Only: Get a Free Custom Homepage Demo. Love it? Get the full build with a $0 build fee. Offer Ends ${OFFER_WINDOW.lastDayLabel}.`;

const FUNNEL_FAQS: { q: string; a: string }[] = [
  {
    q: "Do I own the website?",
    a: "Yes. You own your domain, your written content, your photos, and your brand assets — always. The only thing we maintain is the underlying code and hosting infrastructure (standard for any subscription-based web service). If you ever leave Graylock, we hand off your content and transfer your domain to wherever you choose.",
  },
  {
    q: "What happens if I don't like the demo?",
    a: "Nothing. The 15-minute discovery call and the custom homepage demo are completely free, with no obligation to move forward. Right now your Build Fee is $0 if you approve the demo and want us to build the full site. If the demo isn't right for you, you walk away with zero cost.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No. There are no long-term contracts. All plans are month-to-month — you can cancel any time with 30 days' notice and we'll hand off your content and domain cleanly, no cancellation fees.",
  },
  {
    q: "Do you build websites for both custom-home builders and production builders?",
    a: "Yes. The site structure changes to match: custom builders get an in-depth design-build process page, gallery storytelling, and consultation-focused forms. Production builders get prominent floor plan filtering, model home pages, available-inventory lists, and quick-tour scheduling. Either way, the site is built around how your prospects actually shop.",
  },
  {
    q: "Can you showcase floor plans and model homes the way prospects expect?",
    a: "Yes — and it's simpler than most builders expect. Each floor plan or model home becomes its own dedicated page on your site (it just counts as one of the pages in your plan), with high-resolution renderings, square footage, bedroom/bath counts, customization options, available lots, and a clear path to schedule a consultation or tour. Every page is SEO-optimized so it ranks for that floor plan name and style. Beyond the basics, we can build just about anything you can picture — interactive plan filters, virtual tours, lot maps, side-by-side comparisons. The exact scope just depends on your monthly budget and how complex you want to go. We'll talk it through on your demo call and tailor it to fit.",
  },
  {
    q: "Will the site help us rank for 'custom home builder' and city-specific searches?",
    a: "That's a core focus. We build dedicated service-area pages for every city or community you build in, paired with local SEO and a fully optimized Google Business Profile. Within a few months most builder clients are appearing in the local map pack and on page one for their main 'builder + city' and 'custom home builder near me' searches.",
  },
  {
    q: "How do you handle project galleries and photography?",
    a: "We build a gallery system that lets each completed home become a story — not just a thumbnail. Floor plan, location, square footage, design notes, and the family's testimonial all live together. You email us photos when a home wraps and we update the site for you.",
  },
];

const OFFER_DEADLINE = OFFER_WINDOW.deadline;

function getTimeLeft(deadline: Date) {
  const diff = Math.max(0, deadline.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { diff, days, hours, minutes, seconds };
}

function CompactCountdown() {
  const [time, setTime] = useState(() => getTimeLeft(OFFER_DEADLINE));

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(getTimeLeft(OFFER_DEADLINE));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (time.diff <= 0) {
    return (
      <p className="text-stone font-sans text-base md:text-lg">
        This offer has ended. Book a demo to hear about our current promotion.
      </p>
    );
  }

  const units: Array<{ label: string; value: number }> = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div
      className="flex justify-center items-stretch gap-3 sm:gap-5"
      aria-live="polite"
      aria-label={`Offer ends in ${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`}
    >
      {units.map((u) => (
        <div
          key={u.label}
          className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl px-3 sm:px-5 py-3 sm:py-4 min-w-[68px] sm:min-w-[88px] backdrop-blur-sm"
        >
          <div className="text-white font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-none tabular-nums">
            {String(u.value).padStart(2, "0")}
          </div>
          <div className="text-stone text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] mt-2">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}

type FormStatus = "idle" | "submitting" | "success" | "error";

function DemoRequestForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    business_name: "",
    email: "",
  });

  const timezone = typeof Intl !== "undefined"
    ? Intl.DateTimeFormat().resolvedOptions().timeZone
    : "";

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(`${import.meta.env.BASE_URL || "/"}api/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: (() => {
          const nameParts = form.name.trim().split(/\s+/);
          return JSON.stringify({
            first_name: nameParts[0] || "",
            last_name: nameParts.slice(1).join(" "),
            business_name: form.business_name,
            website_url: "none",
            email: form.email,
            notes: "",
            timezone,
            source: "home-builders-funnel",
          });
        })(),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        setStatus("error");
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");

      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void })
        .gtag;
      if (typeof gtag === "function") {
        gtag("event", "generate_lead", {
          event_category: "form",
          event_label: "home_builder_demo_request",
          page_location: window.location.href,
        });
      }
    } catch {
      setStatus("error");
      setErrorMsg("We couldn't reach our server. Please try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-[#E85D26]/30 bg-[#fff7f3] px-6 py-10 md:py-14 mb-10 text-left">
        <div className="w-12 h-12 rounded-full bg-[#E85D26] flex items-center justify-center mb-5 mx-auto">
          <Check size={24} className="text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-display text-[#1a202c] mb-3 text-center leading-tight">
          You&rsquo;re on the list — we&rsquo;ll be in touch shortly.
        </h3>
        <p className="text-[#4a5568] font-sans text-base md:text-lg leading-relaxed text-center max-w-xl mx-auto">
          Tim has received your request and will email you within 1 business day to
          confirm your preferred time and send a calendar invite for your free
          15-minute custom homepage demo.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white border border-gray-300 rounded-md px-3.5 py-2.5 text-[#1a202c] font-sans text-base placeholder:text-gray-400 focus:outline-none focus:border-[#E85D26] focus:ring-2 focus:ring-[#E85D26]/20 transition-colors disabled:opacity-60";
  const labelClass =
    "block text-[#1a202c] font-sans text-sm font-semibold mb-1.5 text-left";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-gray-200 bg-white shadow-lg px-6 py-7 md:px-8 md:py-9 mb-10 text-left"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="dr_name">First &amp; Last Name *</label>
          <input
            id="dr_name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="dr_business_name">Company Name *</label>
          <input
            id="dr_business_name"
            type="text"
            required
            autoComplete="organization"
            value={form.business_name}
            onChange={(e) => update("business_name", e.target.value)}
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="dr_email">Email Address *</label>
          <input
            id="dr_email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>
      </div>

      {status === "error" && errorMsg && (
        <p className="mt-4 text-sm font-sans text-red-600 text-left" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full inline-flex items-center justify-center bg-[#E85D26] text-white font-sans font-bold text-base md:text-lg px-8 py-4 rounded-lg hover:bg-[#d14d1a] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={20} className="mr-2 animate-spin" />
            Sending your request...
          </>
        ) : (
          <>
            Get Started Now
            <ArrowRight size={20} className="ml-2" />
          </>
        )}
      </button>

      <p className="text-[#6b7280] font-sans text-xs mt-3 text-center">
        We&rsquo;ll confirm your time by email within 1 business day. No spam — ever.
      </p>
    </form>
  );
}

function scrollToBooking(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const el = document.getElementById("book-demo");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HomeBuildersFunnel() {
  return (
    <>
      <SEO
        title="High-Converting Home Builder Websites | Graylock Digital"
        description="Stop losing high-end bids to competitors with better websites. Get a custom, lead-generating website for your custom home building business. Book a free strategy call today."
        url="https://graylockdigital.com/home-builders"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FUNNEL_FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a.replace(/\s+/g, " ").trim(),
              },
            })),
          }),
        }}
      />

      {/* Section 1 — Sticky Urgency Banner */}
      <div className="sticky top-0 z-50 bg-[#E85D26] text-white text-center text-sm md:text-base font-sans font-semibold px-4 py-2.5 shadow-md">
        {URGENCY_COPY}
      </div>

      {/* Top Logo Bar — non-clickable, transparent (overlays hero) */}
      <div className="absolute top-[80px] sm:top-[60px] md:top-[44px] left-0 right-0 z-40 px-6 md:px-12 py-4 md:py-5 pointer-events-none">
        <div className="max-w-6xl mx-auto flex justify-center md:justify-start">
          <img
            src={`${import.meta.env.BASE_URL}logo-horizontal.png`}
            alt="Graylock Digital"
            className="h-8 md:h-10 w-auto select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Section 2 — Hero */}
      <section
        className="hb-hero relative bg-[#1a1a1a] bg-cover bg-center bg-no-repeat px-6 md:px-12 py-14 md:py-24"
        style={
          {
            ["--hb-hero-bg" as string]: `url(${heroBgImage})`,
            ["--hb-hero-bg-mobile" as string]: `url(${heroBgImageMobile})`,
          } as React.CSSProperties
        }
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/70"
        />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-[#E85D26] text-xs md:text-sm font-sans font-bold uppercase tracking-widest mb-4">
              We Specialize in Home Builder Web Design
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
              <span className="block text-white">
                Website Design for Custom Home{" "}
                <span className="text-[#E85D26] relative inline-block">
                  <span className="funnel-shine-99">Builders.</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 300 18"
                    preserveAspectRatio="none"
                    className="absolute left-0 right-0 -bottom-2 md:-bottom-3 w-full h-3 md:h-4 pointer-events-none"
                  >
                    <path
                      d="M4 14 Q 150 -4 296 14"
                      fill="none"
                      stroke="#E85D26"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="funnel-arch-underline"
                    />
                  </svg>
                </span>
              </span>
            </h1>
            <p className="text-stone text-lg md:text-xl font-sans leading-relaxed mb-6">
              Showcase your work and attract higher-budget clients. We build custom,
              lead-generating websites that make your phone ring. Book a 15-minute
              call, and we will design a custom homepage concept for your business —
              100% free, before you spend a dollar.
            </p>
            <div className="bg-[#E85D26]/10 border border-[#E85D26]/30 rounded-lg px-5 py-4 mb-8">
              <p className="text-white font-sans text-base md:text-lg font-semibold leading-snug">
                <span className="text-[#E85D26] font-bold">Limited {OFFER_WINDOW.monthName} Offer:</span>{" "}
                Build Fee Cut to $0 — On Any Subscription Level. Offer ends {OFFER_WINDOW.lastDayLabel}.
              </p>
            </div>
            <a
              href="#book-demo"
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center bg-[#E85D26] text-white font-sans font-bold text-base md:text-lg px-8 py-4 rounded-lg hover:bg-[#d14d1a] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Get Your Free Website Strategy
              <ArrowRight size={20} className="ml-2" />
            </a>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-stone font-sans text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Check size={16} className="text-[#E85D26] flex-shrink-0" strokeWidth={3} />
                100% U.S.-Based Team
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-white/20">
                &middot;
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-[#E85D26] flex-shrink-0" />
                30-Day Money-Back Guarantee
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-white/20">
                &middot;
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="flex items-center gap-0.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={14} className="text-[#E85D26]" fill="#E85D26" />
                  ))}
                </span>
                5-Star Rated
              </span>
            </div>
          </div>

          <div className="order-first lg:order-last lg:col-span-6 lg:col-start-7 relative lg:-ml-8 xl:-ml-4 lg:pl-0 xl:pl-0">
            <ScrollReveal>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -m-8 sm:-m-12 lg:-m-16 rounded-full blur-3xl opacity-70"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(232,93,38,0.45) 0%, rgba(232,93,38,0.18) 40%, rgba(232,93,38,0) 75%)",
                  }}
                />
                <picture>
                  <source media="(max-width: 767px)" srcSet={heroMockupImageMobile} type="image/webp" />
                  <source srcSet={heroMockupImage} type="image/webp" />
                  <img
                    src={heroMockupImage}
                    alt="Northline Custom Homes website shown on a desktop monitor and an iPhone — example of a Graylock-built site for a custom home builder"
                    className="relative w-full h-auto drop-shadow-2xl lg:scale-110 xl:scale-[1.15] lg:origin-center"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    width={1600}
                    height={1200}
                  />
                </picture>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3 — Problem / Agitation */}
      <section className="bg-[#f5f5f4] px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] text-center mb-12 md:mb-16 leading-tight">
              Why Your Current Website Is Costing You Jobs
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: Monitor,
                title: "It Looks Unprofessional",
                copy: "You build million-dollar homes, but your website makes you look like a budget contractor. High-end clients judge your quality by your digital presence.",
              },
              {
                icon: TrendingDown,
                title: "It Doesn't Generate Leads",
                copy: "Traffic doesn't matter if visitors leave without contacting you. Your site should be your best 24/7 salesperson, not just a digital brochure.",
              },
              {
                icon: EyeOff,
                title: "Your Competitors Rank Higher",
                copy: "When someone searches for \u201Ccustom home builders near me,\u201D your competitors show up first. Stop relying entirely on word-of-mouth and start capturing local search traffic.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-white rounded-xl p-7 md:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-full">
                    <div className="w-12 h-12 rounded-lg bg-[#E85D26]/10 border border-[#E85D26]/20 flex items-center justify-center mb-5">
                      <Icon size={24} className="text-[#E85D26]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display text-[#1a202c] mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#4a5568] font-sans text-base leading-relaxed">
                      {item.copy}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3b — DIY vs Done-For-You */}
      <section className="bg-white px-6 md:px-12 py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-12 md:mb-14">
            <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">
              DIY vs. Done-For-You
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] leading-tight max-w-3xl mx-auto">
              Why a $20/Month DIY Website Costs You Thousands
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Column A — The DIY Trap */}
            <ScrollReveal>
              <div className="h-full flex flex-col rounded-2xl border border-gray-200 bg-[#f9f9f8] p-7 md:p-8">
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-200">
                    <X size={20} className="text-gray-500" strokeWidth={2.5} />
                  </span>
                  <h3 className="font-display text-xl md:text-2xl text-[#1a202c]">
                    The DIY Trap
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    "Cheap Templates",
                    "You write the copy",
                    "You figure out SEO",
                    "Looks like everyone else",
                    "Breaks on mobile",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X size={18} className="text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-[#4a5568] font-sans text-base leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Column B — The Graylock Solution */}
            <ScrollReveal delay={0.12}>
              <div className="relative h-full flex flex-col rounded-2xl border-2 border-[#E85D26] bg-[#fff7f3] p-7 md:p-8 shadow-xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E85D26] text-white font-sans text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                  Done-For-You
                </div>
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#E85D26]/15 border border-[#E85D26]/25">
                    <Check size={20} className="text-[#E85D26]" strokeWidth={3} />
                  </span>
                  <h3 className="font-display text-xl md:text-2xl text-[#1a202c]">
                    The Graylock Solution
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    "Custom Design for Builders",
                    "Professional Copywriting",
                    "Built to Rank on Google",
                    "Stands out from competitors",
                    "Flawless mobile experience",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={18} className="text-[#E85D26] flex-shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-[#1a202c] font-sans text-base font-medium leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 4 — Proof / Before & After */}
      <section className="bg-[#1a1a1a] px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display text-white text-center mb-12 md:mb-16 leading-tight">
              The Graylock Difference
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ScrollReveal>
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden border border-gunmetal/60 bg-charcoal shadow-lg">
                  <img
                    src={differenceBeforeImage}
                    alt="Outdated and generic home builder website — before Graylock redesign"
                    className="w-full h-auto block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-stone font-sans text-center text-sm md:text-base font-semibold uppercase tracking-wider">
                  Outdated &amp; Generic
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden border-2 border-[#E85D26]/60 bg-charcoal shadow-2xl">
                  <img
                    src={differenceAfterImage}
                    alt="Custom and conversion-focused Graylock-built home builder website — after redesign"
                    className="w-full h-auto block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-[#E85D26] font-sans text-center text-sm md:text-base font-bold uppercase tracking-wider">
                  Custom &amp; Conversion-Focused
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 4b — Condensed Process */}
      <section className="bg-[#0f0f0f] px-6 md:px-12 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-center mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-white text-center mb-4 leading-tight">
              Zero Risk. Zero Upfront Cost.
            </h2>
            <p className="text-stone text-base md:text-lg font-sans text-center max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
              We don&rsquo;t ask for a credit card until you&rsquo;ve seen our work
              and approved the direction.
            </p>
          </ScrollReveal>

          <div className="relative">
            {/* Connecting flow line — desktop only */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute left-[10%] right-[10%] top-[60px] h-px bg-gradient-to-r from-transparent via-[#E85D26]/30 to-transparent"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-10 lg:gap-6 relative">
              {[
                {
                  day: "Step 1",
                  title: "15-Minute Discovery Call (Free)",
                  desc: "A quick call to review your current site, your target buyers, and what your new site needs to win more bids.",
                  Icon: PhoneCall,
                },
                {
                  day: "Step 2",
                  title: "Custom Homepage Demo (Free)",
                  desc: "We turn what we heard into a real, custom demo of your new homepage. No payment required to see it.",
                  Icon: Sparkles,
                },
                {
                  day: "Step 3",
                  title: "Approve Your Demo — $0 Build Fee",
                  desc: `If you love the demo, your build fee is $0 (our ${OFFER_WINDOW.monthName} special, normally $1,499). We then kick off the full 7–10 day build.`,
                  Icon: CreditCard,
                },
                {
                  day: "Step 4",
                  title: "Review & Launch",
                  desc: "We walk you through the finished site, make any final adjustments, and launch it live on your domain.",
                  Icon: Rocket,
                },
                {
                  day: "Step 5",
                  title: "The 30-Day Guarantee Begins",
                  desc: "Your monthly subscription begins. If you aren't thrilled with the performance within the first 30 days, we'll refund your money.",
                  Icon: ShieldCheck,
                },
              ].map((step, i) => (
                <ScrollReveal key={step.day} delay={i * 0.08}>
                  <div className="relative flex flex-col items-center text-center px-2">
                    {/* Icon with radial glow */}
                    <div className="relative mb-6">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 -m-6 rounded-full bg-[#E85D26]/20 blur-2xl"
                      />
                      <div className="relative w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#E85D26] to-[#c04416] flex items-center justify-center shadow-[0_8px_40px_-8px_rgba(232,93,38,0.6)]">
                        <step.Icon className="text-white" size={52} strokeWidth={1.5} />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-[#0f0f0f] border-2 border-[#E85D26] flex items-center justify-center">
                        <span className="text-[#E85D26] font-display text-base font-bold leading-none">
                          {i + 1}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#E85D26] font-sans text-xs font-bold uppercase tracking-[0.18em] mb-2">
                      {step.day}
                    </p>
                    <h3 className="text-xl md:text-2xl font-display text-white mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-stone font-sans text-sm md:text-base leading-relaxed max-w-xs">
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4b — Testimonials */}
      <section className="bg-[#f5f5f4] px-6 md:px-12 py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Don&rsquo;t Just Take Our Word For It
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] leading-tight">
              Real Results From Real Business Owners
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
            {[
              {
                quote:
                  "Working with Tim and the team at Graylock Digital was an outstanding experience from start to finish. Their attention to detail, communication, and dedication to delivering a product that reflected our goals exceeded all expectations.",
                name: "Kylen & Keith Perks",
                role: "L.A. Perks Petroleum Specialists",
              },
              {
                quote:
                  "Tim and his team built a site that explains my business clearly and speaks straight to the people I want to serve. New clients regularly tell me they reached out because the website made them feel confident before we ever spoke.",
                name: "Bobbie Wold",
                role: "Owner, Montana Counseling Solutions",
              },
              {
                quote:
                  "Tim and his team had a rough-draft site to me in a matter of days that far exceeded what I had before. They delivered at every point and answered every text and call with professionalism and kindness. 10 out of 10, hands down.",
                name: "Jim Erwin",
                role: "CEO & Founder, Shooting Performance Institute",
              },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={0.1 + i * 0.1} className="h-full">
                <figure className="h-full flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-7">
                  <div className="flex gap-1 mb-4 text-[#E85D26]">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} size={16} className="fill-current" />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-[#4a5568] font-sans text-sm md:text-base leading-relaxed mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="border-t border-gray-100 pt-4">
                    <p className="font-display text-base text-[#1a202c]">{t.name}</p>
                    <p className="font-sans text-xs text-[#4a5568] mt-0.5">{t.role}</p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4c — Pricing */}
      <section className="bg-white px-6 md:px-12 py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12 md:mb-14">
            <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Simple Monthly Subscription
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] leading-tight mb-4">
              Pick the Plan That Fits — Then Start With a $0 Build Fee
            </h2>
            <p className="text-[#4a5568] font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Every plan includes hosting, SSL, daily backups, a dedicated account
              manager, and a custom-built site. Month-to-month, no long-term contracts.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 max-w-6xl mx-auto items-stretch">
            {PRICING_TIERS.map((tier, i) => {
              const isPopular = "popular" in tier && tier.popular;
              const isCustom = "isCustom" in tier && tier.isCustom;
              const buildFee = !isCustom && "setup" in tier
                ? (tier.setup.match(/\$[\d,]+/) ?? ["$999"])[0]
                : null;
              return (
                <ScrollReveal key={tier.name} delay={i * 0.06}>
                  <div
                    className={`relative h-full flex flex-col rounded-2xl p-6 md:p-7 border-2 transition-all duration-200 ${
                      isPopular
                        ? "border-[#E85D26] bg-[#fff7f3] shadow-xl md:-translate-y-2"
                        : "border-gray-200 bg-white shadow-md hover:shadow-lg"
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E85D26] text-white font-sans text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                        Most Popular
                      </div>
                    )}
                    <h3 className="font-display text-2xl md:text-3xl text-[#1a202c] mb-1">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-3 min-h-[3.5rem]">
                      {isCustom ? (
                        <span className="text-3xl md:text-4xl font-display font-bold text-[#1a202c]">
                          Let&rsquo;s Talk
                        </span>
                      ) : (
                        <>
                          <span className="text-4xl md:text-5xl font-display font-bold text-[#1a202c] tabular-nums">
                            {tier.price}
                          </span>
                          <span className="text-[#4a5568] font-sans text-base">/mo</span>
                        </>
                      )}
                    </div>

                    {isCustom ? (
                      <div className="rounded-lg bg-[#fff7f3] border border-[#E85D26]/30 px-3.5 py-2.5 mb-5">
                        <p className="font-sans text-xs md:text-sm leading-snug text-[#1a202c]">
                          <Sparkles size={14} className="inline-block -mt-0.5 mr-1 text-[#E85D26]" />
                          <span className="font-bold text-[#E85D26]">Custom Quote</span>{" "}
                          — scoped to your project on a free call.
                        </p>
                      </div>
                    ) : (
                      <div className="rounded-lg bg-[#fff7f3] border border-[#E85D26]/30 px-3.5 py-2.5 mb-5">
                        <p className="font-sans text-xs md:text-sm leading-snug text-[#1a202c]">
                          <Sparkles size={14} className="inline-block -mt-0.5 mr-1 text-[#E85D26]" />
                          <span className="font-bold text-[#E85D26]">{buildFee} Build Fee Waived for {OFFER_WINDOW.monthName}</span>{" "}
                          — Pay <span className="font-bold">$0</span> to Start.
                        </p>
                      </div>
                    )}

                    <p className="text-[#4a5568] font-sans text-sm leading-relaxed mb-5">
                      {tier.description}
                    </p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {tier.features.slice(0, 5).map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check size={15} className="text-[#E85D26] flex-shrink-0 mt-0.5" />
                          <span className="text-[#4a5568] font-sans text-sm leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#book-demo"
                      onClick={scrollToBooking}
                      className={`block w-full text-center font-sans font-bold text-sm md:text-base px-6 py-3 rounded-lg transition-all duration-200 ${
                        isPopular
                          ? "bg-[#E85D26] text-white hover:bg-[#d14d1a] shadow-md hover:shadow-lg"
                          : "bg-[#1a202c] text-white hover:bg-black"
                      }`}
                    >
                      {isCustom ? "Schedule a Scoping Call" : "Book My Free Demo"}
                    </a>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="text-center mt-10">
            <p className="text-[#4a5568] font-sans text-sm md:text-base">
              No payment required to see your custom homepage demo. Your build fee is{" "}
              <span className="font-semibold text-[#1a202c]">$0</span> this month when you
              approve the design — book your free demo below.
            </p>
          </ScrollReveal>

          {/* 30-Day Site-Live Guarantee — placed immediately below pricing cards */}
          <ScrollReveal delay={0.15} className="mt-12 md:mt-14">
            <div className="bg-gradient-to-br from-[#E85D26]/10 via-[#E85D26]/5 to-transparent border-2 border-[#E85D26]/30 rounded-2xl p-7 md:p-10 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-7 text-center md:text-left">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#E85D26] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <ShieldCheck className="text-white" size={40} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-display text-[#1a202c] mb-3 leading-tight">
                    Backed by Our 30-Day &ldquo;Site-Live&rdquo; Guarantee
                  </h3>
                  <p className="text-[#4a5568] font-sans text-base md:text-lg leading-relaxed">
                    We take all the risk. You pay nothing to see the demo. Your build
                    fee is $0 to build the site. And if you aren&rsquo;t completely satisfied
                    within 30 days of your site going live, we will refund your money
                    and part as friends.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5b — What Happens After Launch */}
      <section className="bg-white px-6 md:px-12 py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">
              You're Not On Your Own
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] mb-4 leading-tight">
              What Happens After Launch?
            </h2>
            <p className="text-[#4a5568] text-lg font-sans max-w-2xl mx-auto">
              Our relationship doesn't end when the site goes live. In fact, that's just the beginning.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: <Wrench className="text-[#E85D26]" size={22} />,
                title: "Total Maintenance",
                desc: "We handle all the invisible technical work — software updates, plugin management, security scans, and uptime monitoring. You never have to log into a complicated dashboard or worry about your site getting hacked.",
              },
              {
                icon: <MessagesSquare className="text-[#E85D26]" size={22} />,
                title: "Easy Change Requests",
                desc: "Need to update a model home page or change your office hours? Just email us. We treat your requests like an internal IT team would — most content updates are completed within 3 business days.",
              },
              {
                icon: <UserCheck className="text-[#E85D26]" size={22} />,
                title: "Dedicated Account Manager",
                desc: "Every plan includes a real person who knows your business and your website. Need to discuss performance, request changes, or ask a question? You have a direct line — no support tickets, no chatbots.",
              },
              {
                icon: <TrendingUp className="text-[#E85D26]" size={22} />,
                title: "Ongoing SEO & Performance Monitoring",
                desc: "Your account manager monitors your site's SEO and keeps you competitive in local search. We also do a long-term refresh and strategy review at the 2-year mark — because great websites evolve with your business.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.08} className="bg-[#f5f5f4] p-6 md:p-8 rounded-xl border border-gray-200">
                <div className="w-11 h-11 rounded-lg bg-[#E85D26]/10 border border-[#E85D26]/20 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-display text-[#1a202c] mb-3">{card.title}</h3>
                <p className="text-[#4a5568] font-sans leading-relaxed">{card.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5c — Stay-Current Guarantee */}
      <section className="bg-[#f5f5f4] px-6 md:px-12 py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">
              You're Covered
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] mb-4 leading-tight">
              Always Current. Always Yours.
            </h2>
            <p className="text-[#4a5568] text-lg font-sans max-w-2xl mx-auto leading-relaxed">
              Two promises baked into every plan: every 2 years your site gets a free top-to-bottom refresh, and the things that matter — your domain, your content, your brand — belong to you whether you stay or go.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex items-center justify-center gap-2 mb-8">
              <RefreshCw className="text-[#E85D26]" size={18} />
              <h3 className="text-[#E85D26] font-sans font-semibold uppercase tracking-widest text-xs md:text-sm text-center">
                Stay-Current Guarantee · Free Refresh Every 2 Years
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: <Sparkles className="text-[#E85D26]" size={32} />, title: "Design refresh", desc: "Modern redesign of your homepage and key pages — current best practices, current style." },
                { icon: <Camera className="text-[#E85D26]" size={32} />, title: "New photos & copy", desc: "Swap in fresh photography and refreshed copy across the pages that matter most." },
                { icon: <Gauge className="text-[#E85D26]" size={32} />, title: "Performance retune", desc: "Mobile speed, Core Web Vitals, services, and offers — all brought back to current standards." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-gray-200 p-7 md:p-8 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
                  <div className="w-16 h-16 bg-[#E85D26]/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#E85D26]/20 mx-auto mb-5">
                    {item.icon}
                  </div>
                  <h4 className="text-[#1a202c] font-display text-xl md:text-2xl mb-3">{item.title}</h4>
                  <p className="text-[#4a5568] font-sans text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4d — Message From the Founder */}
      <section className="bg-[#1a1a1a] px-6 md:px-12 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-10 md:mb-12">
            <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">
              A Message From Our Co-Founder
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-white leading-tight">
              You&rsquo;ll Work Directly With Tim — Start to Finish
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center bg-[#202020] border border-white/10 rounded-2xl md:rounded-3xl p-7 md:p-12">
              {/* Founder photo */}
              <div className="flex justify-center">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-3 rounded-3xl bg-[#E85D26]/20 blur-2xl"
                  />
                  <img
                    src={timFounderPhoto}
                    alt="Tim, Co-Founder of Graylock Digital"
                    className="relative w-44 h-52 md:w-52 md:h-64 rounded-2xl object-cover object-top border border-white/10 shadow-2xl"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="text-center md:text-left">
                <p className="text-white/85 font-sans text-base md:text-lg leading-relaxed mb-4">
                  When you reach out to Graylock, you don&rsquo;t get a sales rep, a
                  call center, or a ticket number — you get me. I personally meet with
                  every home builder who&rsquo;s interested in a website, and I stay
                  involved from our first conversation through design, build, and launch.
                </p>
                <p className="text-white/85 font-sans text-base md:text-lg leading-relaxed mb-6">
                  I take the time to understand your business, the homes you&rsquo;re
                  proud of, and the buyers you want more of — then my team and I build
                  a site that earns trust the moment someone lands on it. You&rsquo;ll
                  always have a real person to call, and that person is me.
                </p>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="h-px w-10 bg-[#E85D26]" />
                  <div>
                    <p className="font-display text-xl text-white leading-none">Tim</p>
                    <p className="font-sans text-xs text-white/50 mt-1">
                      Co-Founder, Graylock Digital
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5 — Calendar / Booking */}
      <section id="book-demo" className="bg-white px-6 md:px-12 py-16 md:py-24 scroll-mt-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] mb-4 leading-tight">
              Get Your Website Built for a $0 Build Fee — Before {OFFER_WINDOW.lastDayLabel}
            </h2>
            <p className="text-[#4a5568] text-lg font-sans leading-relaxed mb-4">
              Tell us a bit about your business below and we&rsquo;ll reach out to
              schedule your brief 15-minute discovery call — then start designing your
              free custom homepage concept.
            </p>
            <p className="text-[#E85D26] font-sans font-bold text-base md:text-lg mb-10">
              Reminder: Book before {OFFER_WINDOW.lastDayLabel} to lock in the $0 build fee.
            </p>
          </ScrollReveal>

          <DemoRequestForm />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-[#1a202c] font-sans text-sm md:text-base font-semibold">
            {[
              "7–10 Day Delivery",
              "100% U.S.-Based Team",
              "No Long-Term Contracts",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="text-[#E85D26] flex-shrink-0" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Objection-handling FAQ */}
      <section className="bg-[#f5f5f4] px-6 md:px-12 py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-10 md:mb-12">
            <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Still Have Questions?
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] leading-tight">
              The Most Common Things Builders Ask
            </h2>
          </ScrollReveal>

          <Accordion
            type="single"
            collapsible
            className="space-y-3"
          >
            {FUNNEL_FAQS.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.06}>
                <AccordionItem
                  value={`faq-${i}`}
                  className="bg-white rounded-xl border-2 border-gray-200 hover:border-gray-300 data-[state=open]:border-[#E85D26]/50 data-[state=open]:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <AccordionTrigger className="px-5 md:px-6 py-5 text-left text-[#1a202c] font-sans font-semibold text-base md:text-lg hover:no-underline [&>svg]:text-[#E85D26] [&>svg]:h-5 [&>svg]:w-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 md:px-6 pb-5 pt-0 text-[#4a5568] font-sans text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-[#1a1a1a] px-6 md:px-12 py-14 md:py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Limited {OFFER_WINDOW.monthName} Offer
          </p>
          <h3 className="text-3xl md:text-4xl font-display text-white mb-3 leading-tight">
            $0 Build Fee Ends In
          </h3>
          <p className="text-stone font-sans text-base md:text-lg mb-8">
            Lock in your savings before the timer runs out.
          </p>

          <CompactCountdown />

          <a
            href="#book-demo"
            onClick={scrollToBooking}
            className="inline-flex items-center justify-center bg-[#E85D26] text-white font-sans font-bold text-base md:text-lg px-8 py-4 rounded-lg hover:bg-[#d14d1a] transition-all duration-200 shadow-lg hover:shadow-xl mt-10"
          >
            Request My Free Custom Demo
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </>
  );
}
