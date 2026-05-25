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
const URGENCY_COPY = `${OFFER_WINDOW.monthName} Only: Get a Free Custom Homepage Demo. Love it? Pay just $99 for the full build. Offer Ends ${OFFER_WINDOW.lastDayLabel}.`;

const FUNNEL_FAQS: { q: string; a: string }[] = [
  {
    q: "Do I own the website?",
    a: "Yes. You own your domain, your written content, your photos, and your brand assets — always. The only thing we maintain is the underlying code and hosting infrastructure (standard for any subscription-based web service). If you ever leave Graylock, we hand off your content and transfer your domain to wherever you choose.",
  },
  {
    q: "What happens if I don't like the demo?",
    a: "Nothing. The 15-minute discovery call and the custom homepage demo are completely free, with no obligation to move forward. You only pay the $99 Build Fee if you approve the demo and want us to build the full site. If the demo isn't right for you, you walk away with zero cost.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No. There are no long-term contracts. All plans are month-to-month — you can cancel any time with 30 days' notice and we'll hand off your content and domain cleanly, no cancellation fees.",
  },
  {
    q: "Do you build websites for both general contractors and production contractors?",
    a: "Yes. The site structure changes to match: custom contractors get an in-depth design-build process page, gallery storytelling, and consultation-focused forms. Production contractors get prominent floor plan filtering, model home pages, available-inventory lists, and quick-tour scheduling. Either way, the site is built around how your prospects actually shop.",
  },
  {
    q: "Can you showcase floor plans and model homes the way prospects expect?",
    a: "Yes — and it's simpler than most contractors expect. Each floor plan or model home becomes its own dedicated page on your site (it just counts as one of the pages in your plan), with high-resolution renderings, square footage, bedroom/bath counts, customization options, available lots, and a clear path to schedule a consultation or tour. Every page is SEO-optimized so it ranks for that floor plan name and style. Beyond the basics, we can build just about anything you can picture — interactive plan filters, virtual tours, lot maps, side-by-side comparisons. The exact scope just depends on your monthly budget and how complex you want to go. We'll talk it through on your demo call and tailor it to fit.",
  },
  {
    q: "Will the site help us rank for 'contractor' and city-specific searches?",
    a: "That's a core focus. We build dedicated service-area pages for every city or community you build in, paired with local SEO and a fully optimized Google Business Profile. Within a few months most contractor clients are appearing in the local map pack and on page one for their main 'contractor + city' and 'contractor near me' searches.",
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

function getDefaultDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

function DemoRequestForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    business_name: "",
    website_url: "",
    email: "",
    phone: "",
    preferred_date: "",
    preferred_time: "",
    notes: "",
  });

  const minDate = new Date().toISOString().slice(0, 10);
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
        body: JSON.stringify({
          ...form,
          timezone,
          source: "contractors-funnel",
        }),
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
          event_label: "contractor_demo_request",
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
        <div>
          <label className={labelClass} htmlFor="dr_first_name">First name *</label>
          <input
            id="dr_first_name"
            type="text"
            required
            autoComplete="given-name"
            value={form.first_name}
            onChange={(e) => update("first_name", e.target.value)}
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="dr_last_name">Last name</label>
          <input
            id="dr_last_name"
            type="text"
            autoComplete="family-name"
            value={form.last_name}
            onChange={(e) => update("last_name", e.target.value)}
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="dr_business_name">Business name *</label>
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
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="dr_website_url">Current website URL *</label>
          <input
            id="dr_website_url"
            type="url"
            required
            inputMode="url"
            autoComplete="url"
            value={form.website_url}
            onChange={(e) => update("website_url", e.target.value)}
            className={inputClass}
            disabled={status === "submitting"}
            placeholder="https://yourbusiness.com"
          />
          <p className="text-[#6b7280] font-sans text-xs mt-1">
            So we can review your current site before the call. If you don&rsquo;t have one yet, enter &ldquo;none&rdquo;.
          </p>
        </div>
        <div>
          <label className={labelClass} htmlFor="dr_email">Email *</label>
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
        <div>
          <label className={labelClass} htmlFor="dr_phone">Phone *</label>
          <input
            id="dr_phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="dr_date">Preferred meeting date *</label>
          <input
            id="dr_date"
            type="date"
            required
            min={minDate}
            value={form.preferred_date}
            onChange={(e) => update("preferred_date", e.target.value)}
            placeholder={getDefaultDate()}
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="dr_time">Preferred meeting time *</label>
          <input
            id="dr_time"
            type="time"
            required
            step={900}
            value={form.preferred_time}
            onChange={(e) => update("preferred_time", e.target.value)}
            className={inputClass}
            disabled={status === "submitting"}
          />
          {timezone && (
            <p className="text-[#6b7280] font-sans text-xs mt-1">Times in your local time zone ({timezone}).</p>
          )}
        </div>
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="dr_notes">Anything we should know? (optional)</label>
          <textarea
            id="dr_notes"
            rows={3}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            className={inputClass + " resize-y min-h-[88px]"}
            disabled={status === "submitting"}
            placeholder="Tell us a bit about your business or what you'd like to cover."
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
        className="mt-6 w-full inline-flex items-center justify-center bg-[#1a202c] text-white font-sans font-bold text-base md:text-lg px-8 py-4 rounded-lg hover:bg-black transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={20} className="mr-2 animate-spin" />
            Sending your request...
          </>
        ) : (
          <>
            Request My Free Custom Demo
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

export default function ContractorsFunnel() {
  return (
    <>
      <SEO
        title="Custom Websites for Contractors | Graylock Digital"
        description="Stop losing bids to bad design. Get a free custom homepage demo for your home building business. No commitment required."
        url="https://graylockdigital.com/contractors"
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
              Attention Contractors
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
              <span className="block text-white">
                We Will Build You a Custom Homepage Demo for Free.
              </span>
              <span className="block mt-2">
                <span className="text-[#E85D26]">
                  If You Love It, We&rsquo;ll Build You the Entire Site
                </span>{" "}
                <span className="text-white relative inline-block">
                  <span className="funnel-shine-99">for just $99.</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 300 18"
                    preserveAspectRatio="none"
                    className="absolute left-0 right-0 -bottom-2 md:-bottom-3 w-full h-3 md:h-4 pointer-events-none"
                  >
                    <path
                      d="M4 14 Q 150 -4 296 14"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="funnel-arch-underline"
                    />
                  </svg>
                </span>
              </span>
            </h1>
            <p className="text-stone text-lg md:text-xl font-sans leading-relaxed mb-6">
              Stop losing high-end bids to competitors with better websites. Book a
              15-minute call, and we will design a custom homepage concept for your
              business — 100% free, before you spend a dollar. If you want to move
              forward, the full build is just $99 (normally $1,499) for the month of{" "}
              {OFFER_WINDOW.monthName}.
            </p>
            <div className="bg-[#E85D26]/10 border border-[#E85D26]/30 rounded-lg px-5 py-4 mb-8">
              <p className="text-white font-sans text-base md:text-lg font-semibold leading-snug">
                <span className="text-[#E85D26] font-bold">Limited {OFFER_WINDOW.monthName} Offer:</span>{" "}
                Build Fee Cut to Just $99 — On Any Subscription Level. Offer ends {OFFER_WINDOW.lastDayLabel}.
              </p>
            </div>
            <a
              href="#book-demo"
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center bg-[#E85D26] text-white font-sans font-bold text-base md:text-lg px-8 py-4 rounded-lg hover:bg-[#d14d1a] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Book My Free Custom Demo
              <ArrowRight size={20} className="ml-2" />
            </a>
            <p className="text-stone text-sm font-sans mt-4">
              15-minute call &middot; Free custom demo &middot; 30-day money-back guarantee.
            </p>
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
                    alt="Northline Custom Homes website shown on a desktop monitor and an iPhone — example of a Graylock-built site for a contractor"
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
                title: "It Looks Like 2012",
                copy: "You build million-dollar homes, but your website makes you look like a budget contractor. High-end clients judge your quality by your digital presence.",
              },
              {
                icon: TrendingDown,
                title: "It Doesn't Convert",
                copy: "Traffic doesn't matter if visitors leave without contacting you. Your site is a digital brochure, not a lead-generation machine.",
              },
              {
                icon: EyeOff,
                title: "It's Invisible on Google",
                copy: "When someone searches for \u201Ccontractors near me,\u201D your competitors show up first. You're relying entirely on referrals.",
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
                    alt="Outdated and generic contractor website — before Graylock redesign"
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
                    alt="Custom and conversion-focused Graylock-built contractor website — after redesign"
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
                  title: "Approve & Pay the $99 Build Fee",
                  desc: `If you love the demo, you pay just $99 (our ${OFFER_WINDOW.monthName} special, normally $1,499). We then kick off the full 7–10 day build.`,
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

      {/* Section 4c — Pricing */}
      <section className="bg-white px-6 md:px-12 py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12 md:mb-14">
            <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Simple Monthly Subscription
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] leading-tight mb-4">
              Pick the Plan That Fits — Then Pay Just $99 to Start
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
                          — Pay Only <span className="font-bold">$99</span> to Start.
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
              No payment required to see your custom homepage demo. The $99 build fee
              is only paid <span className="font-semibold text-[#1a202c]">after</span>{" "}
              you approve the design — book your free demo below.
            </p>
          </ScrollReveal>

          {/* 30-Day Site-Live Guarantee — placed immediately below pricing cards */}
          <ScrollReveal delay={0.15} className="mt-14 md:mt-16">
            <div className="relative max-w-5xl mx-auto">
              {/* Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -m-4 md:-m-8 rounded-[2rem] blur-2xl opacity-60 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(232,93,38,0.55) 0%, rgba(232,93,38,0.15) 60%, rgba(232,93,38,0) 100%)",
                }}
              />
              <div className="relative bg-gradient-to-br from-[#E85D26] via-[#E85D26] to-[#c94a18] rounded-2xl md:rounded-3xl shadow-2xl border-4 border-white/10 overflow-hidden">
                {/* Top ribbon */}
                <div className="bg-[#1a1a1a] text-center py-2 px-4">
                  <span className="inline-flex items-center gap-2 text-white font-sans text-xs md:text-sm font-bold uppercase tracking-[0.25em]">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#E85D26] animate-pulse" />
                    Iron-Clad Guarantee
                    <span className="inline-block w-2 h-2 rounded-full bg-[#E85D26] animate-pulse" />
                  </span>
                </div>

                <div className="px-6 md:px-12 py-10 md:py-14">
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Big circular badge */}
                    <div className="relative flex-shrink-0">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-white/20 animate-ping"
                        style={{ animationDuration: "2.5s" }}
                      />
                      <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-white flex flex-col items-center justify-center shadow-2xl border-4 border-white/40">
                        <ShieldCheck
                          className="text-[#E85D26] absolute opacity-10"
                          size={140}
                          strokeWidth={1.5}
                        />
                        <span className="relative text-5xl md:text-6xl font-display text-[#E85D26] leading-none">
                          30
                        </span>
                        <span className="relative text-[10px] md:text-xs font-sans font-black uppercase tracking-[0.2em] text-[#1a1a1a] mt-1">
                          Day
                        </span>
                        <span className="relative text-[10px] md:text-xs font-sans font-black uppercase tracking-[0.2em] text-[#1a1a1a]">
                          Guarantee
                        </span>
                      </div>
                    </div>

                    {/* Headline + bullets */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-white leading-tight mb-3">
                        100% Money-Back.{" "}
                        <span className="block md:inline">Zero Risk to You.</span>
                      </h3>
                      <p className="text-white/90 font-sans text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                        We take all the risk. If you aren&rsquo;t completely thrilled
                        within 30 days of your site going live, we refund every dollar
                        and part as friends.
                      </p>
                      <ul className="grid sm:grid-cols-3 gap-3 md:gap-4 text-left">
                        {[
                          { big: "$0", small: "to see your demo" },
                          { big: "$99", small: "to build the site" },
                          { big: "100%", small: "refund if not thrilled" },
                        ].map((item) => (
                          <li
                            key={item.big}
                            className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl px-4 py-3 flex items-center gap-3"
                          >
                            <Check
                              className="text-white flex-shrink-0"
                              size={20}
                              strokeWidth={3}
                            />
                            <div className="leading-tight">
                              <div className="text-white font-display text-xl md:text-2xl">
                                {item.big}
                              </div>
                              <div className="text-white/85 font-sans text-xs md:text-sm">
                                {item.small}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-4">
              Included in Every Plan · No Extra Cost
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-[#1a202c] mb-5 leading-[1.1]">
              Every 2 Years, You Get a{" "}
              <span className="text-[#E85D26]">Brand-New Website</span>
              <span className="block">— On the House.</span>
            </h2>
            <p className="text-[#4a5568] text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
              Your monthly plan doesn&rsquo;t just keep your site live — it keeps it{" "}
              <span className="font-bold text-[#1a202c]">brand-new</span>. Every 24
              months we rebuild your site top-to-bottom with the latest design,
              performance, and SEO standards. Same plan. Same price.{" "}
              <span className="font-bold text-[#1a202c]">$0 extra.</span>
            </p>
          </ScrollReveal>

          {/* Visual timeline */}
          <ScrollReveal delay={0.1}>
            <div className="relative max-w-4xl mx-auto mb-14 mt-4">
              {/* Connecting line — desktop */}
              <div
                aria-hidden="true"
                className="hidden md:block absolute top-10 left-[8%] right-[8%] h-1 bg-gradient-to-r from-[#E85D26]/30 via-[#E85D26] to-[#E85D26]/30 rounded-full"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
                {[
                  { label: "Year 0", title: "Launch", desc: "Your custom site goes live." },
                  { label: "Year 2", title: "Free Refresh", desc: "Full rebuild — new design, new speed.", highlight: true },
                  { label: "Year 4", title: "Free Refresh", desc: "Another full rebuild — and again every 2 years.", highlight: true },
                ].map((stop) => (
                  <div key={stop.label} className="flex flex-col items-center text-center">
                    <div
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center font-display text-base mb-4 shadow-lg ${
                        stop.highlight
                          ? "bg-[#E85D26] text-white border-4 border-white ring-4 ring-[#E85D26]/20"
                          : "bg-white text-[#1a202c] border-4 border-[#E85D26]/30"
                      }`}
                    >
                      {stop.highlight && (
                        <span className="absolute -top-2 -right-2 bg-[#1a1a1a] text-white text-[9px] font-sans font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md">
                          Free
                        </span>
                      )}
                      <span className="leading-none text-center">
                        {stop.label.split(" ")[0]}
                        <span className="block text-xs font-sans font-bold uppercase tracking-wider mt-1 opacity-90">
                          {stop.label.split(" ")[1]}
                        </span>
                      </span>
                    </div>
                    <h4
                      className={`font-display text-lg md:text-xl mb-1 ${
                        stop.highlight ? "text-[#E85D26]" : "text-[#1a202c]"
                      }`}
                    >
                      {stop.title}
                    </h4>
                    <p className="text-[#4a5568] font-sans text-sm md:text-base leading-snug max-w-[18rem]">
                      {stop.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* What the refresh includes */}
          <ScrollReveal delay={0.15}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <RefreshCw className="text-[#E85D26]" size={18} />
              <h3 className="text-[#E85D26] font-sans font-bold uppercase tracking-widest text-xs md:text-sm text-center">
                What&rsquo;s Included in Every 2-Year Refresh
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: <Sparkles className="text-[#E85D26]" size={32} />, title: "Full design refresh", desc: "Modern redesign of your homepage and key pages — current best practices, current style." },
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

            {/* Reinforcement banner */}
            <div className="mt-10 bg-[#1a1a1a] rounded-2xl px-6 py-5 md:py-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center sm:text-left">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#E85D26] flex-shrink-0">
                <Check className="text-white" size={22} strokeWidth={3} />
              </span>
              <p className="text-white font-sans text-base md:text-lg">
                <span className="font-bold">No upgrade fees. No surprise invoices.</span>{" "}
                <span className="text-white/80">The 2-year refresh is built into every monthly plan.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5 — Calendar / Booking */}
      <section id="book-demo" className="bg-white px-6 md:px-12 py-16 md:py-24 scroll-mt-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] mb-4 leading-tight">
              Get Your Website Built for Just $99 — Before {OFFER_WINDOW.lastDayLabel}
            </h2>
            <p className="text-[#4a5568] text-lg font-sans leading-relaxed mb-4">
              Tell us a bit about your business below and we&rsquo;ll reach out to
              schedule your brief 15-minute discovery call — then start designing your
              free custom homepage concept.
            </p>
            <p className="text-[#E85D26] font-sans font-bold text-base md:text-lg mb-10">
              Reminder: Book before {OFFER_WINDOW.lastDayLabel} to lock in the $99 build fee.
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
              The Most Common Things Contractors Ask
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
            $99 Build Fee Ends In
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
