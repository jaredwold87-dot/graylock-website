import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { useEffect, useState } from "react";
import {
  Monitor,
  TrendingDown,
  EyeOff,
  ArrowRight,
  Check,
  Loader2,
} from "lucide-react";

const URGENCY_COPY = "May Only: Setup Fee Cut to Just $99 — Offer Ends May 31.";

const OFFER_DEADLINE = new Date("2026-06-01T04:59:59Z");

function getTimeLeft(deadline: Date) {
  const diff = Math.max(0, deadline.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { diff, days, hours, minutes, seconds };
}

function CountdownTimer() {
  const [time, setTime] = useState(() => getTimeLeft(OFFER_DEADLINE));

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(getTimeLeft(OFFER_DEADLINE));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const expired = time.diff <= 0;
  const units: Array<{ label: string; value: number }> = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="bg-[#E85D26]/10 border border-[#E85D26]/30 rounded-lg px-5 py-4 mb-8">
      <p className="text-white font-sans text-base md:text-lg font-semibold leading-snug mb-3">
        <span className="text-[#E85D26] font-bold">Limited May Offer:</span>{" "}
        Setup Fee Cut to Just $99 — On Any Subscription Level.
      </p>
      {expired ? (
        <p className="text-stone font-sans text-sm md:text-base">
          This offer has ended. Book a demo to hear about our current promotion.
        </p>
      ) : (
        <div
          className="flex items-stretch gap-2 sm:gap-3"
          aria-live="polite"
          aria-label={`Offer ends in ${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`}
        >
          {units.map((u, i) => (
            <div key={u.label} className="flex items-stretch gap-2 sm:gap-3">
              <div className="bg-navy/60 border border-[#E85D26]/40 rounded-md px-2.5 sm:px-3.5 py-2 min-w-[56px] sm:min-w-[68px] text-center">
                <div className="text-white font-display text-xl sm:text-2xl md:text-3xl font-bold leading-none tabular-nums">
                  {String(u.value).padStart(2, "0")}
                </div>
                <div className="text-stone text-[10px] sm:text-xs font-sans uppercase tracking-wider mt-1">
                  {u.label}
                </div>
              </div>
              {i < units.length - 1 && (
                <div className="flex items-center text-[#E85D26] font-display text-xl sm:text-2xl font-bold">
                  :
                </div>
              )}
            </div>
          ))}
        </div>
      )}
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
    "w-full bg-white border border-gray-300 rounded-md px-3.5 py-2.5 text-[#1a202c] font-sans text-base placeholder:text-gray-400 focus:outline-none focus:border-[#2e7bb4] focus:ring-2 focus:ring-[#2e7bb4]/20 transition-colors disabled:opacity-60";
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
        className="mt-6 w-full inline-flex items-center justify-center bg-[#2e7bb4] text-white font-sans font-bold text-base md:text-lg px-8 py-4 rounded-lg hover:bg-[#246290] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
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
      <section className="bg-navy px-6 md:px-12 py-14 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            <CountdownTimer />
            <a
              href="#book-demo"
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center bg-[#2e7bb4] text-white font-sans font-bold text-base md:text-lg px-8 py-4 rounded-lg hover:bg-[#246290] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Book Your Free Custom Demo
              <ArrowRight size={20} className="ml-2" />
            </a>
            <p className="text-stone text-sm font-sans mt-4">
              15-minute call &middot; Custom homepage demo &middot; No obligation.
            </p>
          </div>

          <div className="order-first lg:order-last">
            <ScrollReveal>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-gunmetal/40 bg-charcoal">
                <ResponsiveImage
                  src={`${import.meta.env.BASE_URL}mockup-laptop-after.png`}
                  alt="Modern home builder website displayed on a desktop and mobile device"
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3 — Problem / Agitation */}
      <section className="bg-[#f7fafc] px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] text-center mb-12 md:mb-16 leading-tight">
              Why Your Current Website is Costing You Jobs
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
                copy: "When someone searches for \u201Ccustom home builders near me,\u201D your competitors show up first. You are relying entirely on referrals.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 100}>
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
      <section className="bg-navy px-6 md:px-12 py-16 md:py-24">
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
                  <ResponsiveImage
                    src={`${import.meta.env.BASE_URL}portfolio-before-1.png`}
                    alt="Outdated and generic home builder website"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-stone font-sans text-center text-sm md:text-base font-semibold uppercase tracking-wider">
                  Outdated &amp; Generic
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden border-2 border-[#E85D26]/60 bg-charcoal shadow-2xl">
                  <ResponsiveImage
                    src={`${import.meta.env.BASE_URL}portfolio-after-1.png`}
                    alt="Custom and conversion-focused Graylock-built website"
                    className="w-full h-auto"
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
              Reminder: Book before May 31 to lock in the $99 setup fee.
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

      <section className="bg-[#0f1e35] px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
            Don&rsquo;t Miss Out
          </p>
          <h3 className="text-2xl md:text-3xl font-display text-white mb-6 leading-tight">
            This Offer Ends Soon
          </h3>
          <div className="flex justify-center">
            <div className="inline-block text-left">
              <CountdownTimer />
            </div>
          </div>
          <a
            href="#book-demo"
            onClick={scrollToBooking}
            className="inline-flex items-center justify-center bg-[#E85D26] text-white font-sans font-bold text-base md:text-lg px-8 py-4 rounded-lg hover:bg-[#d14d1a] transition-all duration-200 shadow-lg hover:shadow-xl mt-2"
          >
            Request My Free Custom Demo
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </>
  );
}
