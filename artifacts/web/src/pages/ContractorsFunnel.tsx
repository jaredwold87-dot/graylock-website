import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
import perksTransformation from "@/assets/work/perks-transformation.webp";
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
  Star,
  Lock,
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

function DemoRequestForm({
  submitLabel = "Get Started Now",
  variant = "page",
  idPrefix,
}: {
  submitLabel?: string;
  variant?: "page" | "modal";
  idPrefix?: string;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    business_name: "",
    email: "",
  });

  const idp = idPrefix ?? (variant === "modal" ? "drm" : "dr");
  const formClass =
    variant === "modal"
      ? "text-left"
      : "rounded-xl border border-gray-200 bg-white shadow-lg px-6 py-7 md:px-8 md:py-9 mb-10 text-left";

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

    const nameParts = form.name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ");

    try {
      const res = await fetch(`${import.meta.env.BASE_URL || "/"}api/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          business_name: form.business_name,
          website_url: "none",
          email: form.email,
          notes: "",
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
        gtag("event", "conversion_event_submit_lead_form", {
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
      className={formClass}
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor={`${idp}_name`}>First &amp; Last Name *</label>
          <input
            id={`${idp}_name`}
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
          <label className={labelClass} htmlFor={`${idp}_business_name`}>Company Name *</label>
          <input
            id={`${idp}_business_name`}
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
          <label className={labelClass} htmlFor={`${idp}_email`}>Email Address *</label>
          <input
            id={`${idp}_email`}
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
            {submitLabel}
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

function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 overflow-y-auto">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl my-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3.5 right-3.5 w-9 h-9 inline-flex items-center justify-center rounded-full text-[#4a5568] hover:bg-gray-100 hover:text-[#1a202c] transition-colors"
        >
          <X size={20} />
        </button>
        <div className="px-6 py-8 md:px-8 md:py-9">
          <h3
            id="demo-modal-title"
            className="text-2xl md:text-3xl font-display text-[#1a202c] mb-2 text-center pr-6 leading-tight"
          >
            Get Your Free Custom Homepage Demo
          </h3>
          <p className="text-[#4a5568] font-sans text-sm md:text-base text-center mb-6 leading-relaxed">
            Tell us a bit about your business and we&rsquo;ll reach out within 1
            business day to schedule your free 15-minute discovery call.
          </p>
          <DemoRequestForm submitLabel="Get My Free Demo" variant="modal" />
        </div>
      </div>
    </div>
  );
}

export default function ContractorsFunnel() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <SEO
        title="High-Converting Contractor Websites | Graylock Digital"
        description="Stop losing jobs to competitors with better websites. Get a custom, lead-generating website for your contracting business. Book a free strategy call today."
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
        className="hb-hero relative bg-[#1a1a1a] bg-cover bg-center bg-no-repeat px-6 md:px-12 pt-28 md:pt-32 pb-14 md:pb-24"
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
              We Specialize in Contractor &amp; Construction Company Web Design
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6 text-white">
              Stop Losing High-End Bids Because Your Website Looks{" "}
              <span className="text-[#E85D26] relative inline-block">
                <span className="funnel-shine-99">Cheap.</span>
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
            </h1>
            <p className="text-stone text-lg md:text-xl font-sans leading-relaxed mb-6">
              We build custom websites for contractors that rank on Google, build
              trust, and turn visitors into booked estimates. Live in 7 days. $0
              upfront build fee this month.
            </p>
            <div className="bg-[#E85D26]/10 border border-[#E85D26]/30 rounded-lg px-5 py-4 mb-8">
              <p className="text-white font-sans text-base md:text-lg font-semibold leading-snug">
                <span className="text-[#E85D26] font-bold">Limited {OFFER_WINDOW.monthName} Offer:</span>{" "}
                Build Fee Cut to $0 — On Any Subscription Level. Offer ends {OFFER_WINDOW.lastDayLabel}.
              </p>
            </div>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center bg-[#E85D26] text-white font-sans font-bold text-base md:text-lg px-8 py-4 rounded-lg hover:bg-[#d14d1a] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Get Your Free Homepage Demo
              <ArrowRight size={20} className="ml-2" />
            </button>
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
                title: "It Looks Unprofessional",
                copy: "You build million-dollar projects, but your website makes you look like a budget contractor. High-end clients judge your quality by your digital presence.",
              },
              {
                icon: TrendingDown,
                title: "It Doesn't Generate Leads",
                copy: "Traffic doesn't matter if visitors leave without calling you. Your site should be your best 24/7 salesperson, not just a digital brochure.",
              },
              {
                icon: EyeOff,
                title: "Your Competitors Rank Higher",
                copy: "When someone searches for \u201Ccontractors near me,\u201D your competitors show up first. Stop relying entirely on word-of-mouth and start capturing local search traffic.",
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
                    "Custom Design for Contractors",
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
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
            <ScrollReveal delay={0.1}>
              <div className="max-w-xl mx-auto">
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-[#15151a] ring-1 ring-black/5">
                  <div className="flex items-center gap-2 px-4 py-2.5 md:py-3 bg-[#1f1f26] border-b border-white/5">
                    <span className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </span>
                    <div className="flex-1 flex justify-center">
                      <div className="flex items-center gap-2 w-full max-w-xs px-3 py-1.5 rounded-md bg-[#15151a] border border-white/5">
                        <Lock size={11} className="text-stone/60 shrink-0" aria-hidden="true" />
                        <span className="h-1.5 flex-1 rounded-full bg-white/10" />
                      </div>
                    </div>
                  </div>
                  <img
                    src={perksTransformation}
                    alt="L.A. Perks Petroleum Specialists website homepage designed by Graylock Digital"
                    className="w-full h-auto block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <figure>
                <div className="flex gap-1 mb-5 text-[#E85D26]">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={18} className="fill-current" />
                  ))}
                </div>
                <blockquote className="font-display text-xl md:text-2xl text-[#1a202c] leading-snug mb-6">
                  &ldquo;Working with Tim and the team at Graylock Digital was an
                  outstanding experience from start to finish. The amount of time and
                  effort they invested in researching our industry and truly
                  understanding our vision for the new website was beyond impressive.
                  Their attention to detail, communication, and dedication to delivering
                  a product that reflected our goals exceeded all expectations. They
                  consistently went above and beyond throughout the entire process. We
                  highly recommend Tim and the Graylock Digital team to anyone looking
                  for a professional, creative, and results-driven website partner.&rdquo;
                </blockquote>
                <figcaption className="border-t border-gray-200 pt-5">
                  <p className="font-display text-lg text-[#1a202c]">
                    Kylen &amp; Keith Perks
                  </p>
                  <p className="font-sans text-sm text-[#4a5568] mt-0.5">
                    L.A. Perks Petroleum Specialists
                  </p>
                </figcaption>
              </figure>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 4b3 — Mid-page Lead Capture */}
      <section className="bg-[#1a1a1a] px-6 md:px-12 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">
              No Pressure · No Cost
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-white mb-4 leading-tight">
              See Your Free Homepage Demo First
            </h2>
            <p className="text-white/75 text-lg font-sans leading-relaxed mb-8">
              We&rsquo;ll design a custom homepage concept for your business — before you
              pay a cent. It takes 30 seconds to request.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <DemoRequestForm submitLabel="Get My Free Demo" idPrefix="drmid" />
          </ScrollReveal>

          <p className="text-white/55 font-sans text-sm">
            $0 upfront build fee this {OFFER_WINDOW.monthName} · 100% U.S.-based team
          </p>
        </div>
      </section>

      {/* Section 4c — Pricing */}
      <section className="bg-white px-6 md:px-12 py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-8 md:mb-10 max-w-3xl mx-auto">
            <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Simple, Transparent Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] leading-tight mb-5">
              Professional Web Design Shouldn&rsquo;t Cost $10,000 Upfront.
            </h2>
            <p className="text-[#4a5568] font-sans text-base md:text-lg leading-relaxed">
              Traditional agencies charge $5,000 to $15,000 to build a custom site —
              and then disappear. We do it differently. You get a fully custom website
              with no large upfront cost, no long-term contract, and a team that stays
              with you after launch.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ul className="max-w-xl mx-auto space-y-3.5 mb-8">
              {[
                "$0 Build Fee — this month only (normally up to $1,499)",
                "Starting at $199/month — includes hosting, maintenance, and updates",
                "7–10 business day delivery",
                "30-Day Money-Back Guarantee",
                "Month-to-month — cancel anytime",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 bg-[#f9f9f8] border border-gray-200 rounded-xl px-4 py-3.5"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#E85D26] flex-shrink-0 mt-0.5">
                    <Check size={15} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[#1a202c] font-sans text-base md:text-lg font-medium leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-[#4a5568] font-sans text-sm md:text-base text-center max-w-xl mx-auto mb-8">
              Want to see the full plan breakdown? We&rsquo;ll walk you through all the
              options on your free 15-minute call.
            </p>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center justify-center bg-[#E85D26] text-white font-sans font-bold text-base md:text-lg px-8 py-4 rounded-lg hover:bg-[#d14d1a] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                Get Your Free Homepage Demo
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
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
                          { big: "$0", small: "build fee" },
                          { big: "100%", small: "refund if not thrilled" },
                        ].map((item) => (
                          <li
                            key={item.small}
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
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: <Wrench className="text-[#E85D26]" size={22} />,
                title: "Total Maintenance",
                desc: "We handle all updates, security, and hosting. You never have to log into a dashboard.",
              },
              {
                icon: <MessagesSquare className="text-[#E85D26]" size={22} />,
                title: "Easy Change Requests",
                desc: "Need to update a photo or change text? Just email us. Done in 3 days.",
              },
              {
                icon: <UserCheck className="text-[#E85D26]" size={22} />,
                title: "Dedicated Manager",
                desc: "You get a direct line to a real person who knows your business. No support tickets.",
              },
              {
                icon: <TrendingUp className="text-[#E85D26]" size={22} />,
                title: "Ongoing SEO",
                desc: "We monitor your performance to keep you competitive in local search.",
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
                  every contractor who&rsquo;s interested in a website, and I stay
                  involved from our first conversation through design, build, and launch.
                </p>
                <p className="text-white/85 font-sans text-base md:text-lg leading-relaxed mb-6">
                  I take the time to understand your business, the work you&rsquo;re
                  proud of, and the customers you want more of — then my team and I build
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
              See Your Free Custom Homepage Demo — No Credit Card, No Commitment
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

          <DemoRequestForm submitLabel="Get My Free Demo" />

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
            $0 Build Fee Ends In
          </h3>
          <p className="text-stone font-sans text-base md:text-lg mb-8">
            Lock in your savings before the timer runs out.
          </p>

          <CompactCountdown />

          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center justify-center bg-[#E85D26] text-white font-sans font-bold text-base md:text-lg px-8 py-4 rounded-lg hover:bg-[#d14d1a] transition-all duration-200 shadow-lg hover:shadow-xl mt-10"
          >
            Get Your Free Homepage Demo
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </section>

      {/* Spacer so the mobile sticky CTA bar doesn't cover content */}
      <div aria-hidden="true" className="md:hidden h-24" />

      {/* Section 7 — Mobile-only sticky CTA bar (< 768px) */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1a1a1a] border-t border-white/10 px-4 py-3"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <button
          type="button"
          onClick={openModal}
          className="w-full inline-flex items-center justify-center bg-[#E85D26] text-white font-sans font-bold text-base px-6 py-3.5 rounded-lg hover:bg-[#d14d1a] transition-colors shadow-lg"
        >
          Get Your Free Homepage Demo
          <ArrowRight size={18} className="ml-2" />
        </button>
      </div>

      <DemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
