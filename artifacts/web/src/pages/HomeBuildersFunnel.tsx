import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { useEffect, useState } from "react";
import heroBgImage from "@assets/homebuilder-funnel-header-bg-v1_1778261475996.png";
import heroMockupImage from "@assets/homebuilder-funnel-mockup-v1.png";
import differenceBeforeImage from "@assets/graylock-difference-before-v1.png";
import differenceAfterImage from "@assets/graylock-difference-after-v1.png";
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
} from "lucide-react";

const URGENCY_COPY = "May Only: Build Fee Cut to Just $99 — Offer Ends May 31.";

const OFFER_DEADLINE = new Date("2026-06-01T04:59:59Z");

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
          source: "home-builders-funnel",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        setStatus("error");
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
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

export default function HomeBuildersFunnel() {
  return (
    <>
      <SEO
        title="Custom Websites for Home Builders | Graylock Digital"
        description="Stop losing bids to bad design. Get a free custom homepage demo for your home building business. No commitment required."
        url="https://graylockdigital.com/home-builders"
      />

      {/* Section 1 — Sticky Urgency Banner */}
      <div className="sticky top-0 z-50 bg-[#E85D26] text-white text-center text-sm md:text-base font-sans font-semibold px-4 py-2.5 shadow-md">
        {URGENCY_COPY}
      </div>

      {/* Section 2 — Hero */}
      <section
        className="relative bg-[#1a1a1a] bg-cover bg-center bg-no-repeat px-6 md:px-12 py-14 md:py-24"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/70"
        />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#E85D26] text-xs md:text-sm font-sans font-bold uppercase tracking-widest mb-4">
              Attention Custom Home Builders
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white leading-tight mb-6">
              We&rsquo;ll Design a Custom Homepage for Your Home Building Business —{" "}
              <span className="text-[#E85D26]">Free, Before You Spend a Dollar.</span>
            </h1>
            <p className="text-stone text-lg md:text-xl font-sans leading-relaxed mb-6">
              Stop losing high-end bids to competitors with better websites. Book a
              15-minute demo and we&rsquo;ll show you exactly what a conversion-focused
              website should look like for your business.
            </p>
            <div className="bg-[#E85D26]/10 border border-[#E85D26]/30 rounded-lg px-5 py-4 mb-8">
              <p className="text-white font-sans text-base md:text-lg font-semibold leading-snug">
                <span className="text-[#E85D26] font-bold">Limited May Offer:</span>{" "}
                Build Fee Cut to Just $99 — On Any Subscription Level. Offer ends May 31.
              </p>
            </div>
            <a
              href="#book-demo"
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center bg-[#E85D26] text-white font-sans font-bold text-base md:text-lg px-8 py-4 rounded-lg hover:bg-[#d14d1a] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Book Your Free Custom Demo
              <ArrowRight size={20} className="ml-2" />
            </a>
            <p className="text-stone text-sm font-sans mt-4">
              15-minute call &middot; Custom homepage demo &middot; No obligation.
            </p>
          </div>

          <div className="order-first lg:order-last relative">
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
                <img
                  src={heroMockupImage}
                  alt="Northline Custom Homes website shown on a desktop monitor and an iPhone — example of a Graylock-built site for a custom home builder"
                  className="relative w-full h-auto drop-shadow-2xl lg:scale-110 lg:origin-right"
                  loading="eager"
                />
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
              Why Their Current Website Is Costing Them Jobs
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: Monitor,
                title: "It Looks Like 2012",
                copy: "They build million-dollar homes, but their website makes them look like a budget contractor. High-end clients judge their quality by their digital presence.",
              },
              {
                icon: TrendingDown,
                title: "It Doesn't Convert",
                copy: "Traffic doesn't matter if visitors leave without contacting them. Their site is a digital brochure, not a lead-generation machine.",
              },
              {
                icon: EyeOff,
                title: "It's Invisible on Google",
                copy: "When someone searches for \u201Ccustom home builders near me,\u201D their competitors show up first. They are relying entirely on referrals.",
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
                    alt="Outdated and generic home builder website — before Graylock redesign"
                    className="w-full h-auto block"
                    loading="lazy"
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
                    loading="eager"
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
              From Discovery Call to Live Site — No Payment Until You Approve the Demo
            </h2>
            <p className="text-stone text-base md:text-lg font-sans text-center max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
              A clear, five-step process designed around busy custom home builders.
              You stay in control — we handle the heavy lifting.
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
                  title: "15-Minute Discovery Call",
                  desc: "A quick call to review your current site, your target buyers, and what your homepage needs to win more bids.",
                  Icon: PhoneCall,
                },
                {
                  day: "Step 2",
                  title: "Free Custom Homepage Demo",
                  desc: "We turn what we heard into a real, custom demo of your new homepage — no payment required to see it.",
                  Icon: Sparkles,
                },
                {
                  day: "Step 3",
                  title: "Approve & Pay the Build Fee",
                  desc: "If you like the direction, you pay the build fee at this point — after the demo, not before — and we kick off the full build.",
                  Icon: CreditCard,
                },
                {
                  day: "Step 4",
                  title: "Build (7–10 Business Days)",
                  desc: "We craft custom copy, source imagery that matches your work, and build a fast, mobile-first site — with regular check-ins along the way.",
                  Icon: Hammer,
                },
                {
                  day: "Step 5",
                  title: "Review & Launch on Your Domain",
                  desc: "We walk you through the finished site, make any final adjustments, then connect your domain and launch it live.",
                  Icon: Rocket,
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

      {/* Section 5 — Calendar / Booking */}
      <section id="book-demo" className="bg-white px-6 md:px-12 py-16 md:py-24 scroll-mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] mb-4 leading-tight">
              Claim Your Free Custom Homepage Demo
            </h2>
            <p className="text-[#4a5568] text-lg font-sans leading-relaxed mb-4">
              Pick a time below for a brief 15-minute discovery call. We&rsquo;ll learn
              about your business and start designing your free custom homepage
              concept.
            </p>
            <p className="text-[#E85D26] font-sans font-bold text-base md:text-lg mb-10">
              Reminder: Book before May 31 to lock in the $99 build fee.
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

      <section className="bg-[#1a1a1a] px-6 md:px-12 py-14 md:py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Limited May Offer
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
