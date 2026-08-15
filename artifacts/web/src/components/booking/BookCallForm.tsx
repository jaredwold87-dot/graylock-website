import { useState, type FormEvent } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";

interface BookCallFormProps {
  /** Industry context ("real-estate" on realtor CTAs, "" otherwise). */
  industry?: string;
  /** utm_* attribution params to submit with the lead. */
  utmParams?: Record<string, string>;
  /** Pathname of the page the request came from ("" when unknown). */
  landingPagePath?: string;
  /** Compact spacing for the modal; roomier on the standalone page. */
  variant?: "modal" | "page";
}

const INPUT_CLASSES =
  "w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-charcoal font-sans text-base focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-slate-400";

const LABEL_CLASSES = "text-charcoal font-sans text-sm font-semibold";

export function BookCallForm({
  industry = "",
  utmParams = {},
  landingPagePath = "",
  variant = "modal",
}: BookCallFormProps) {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isRealtor = industry === "real-estate";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    setIsSubmitting(true);

    const submittedAt = new Date().toISOString();
    const resolvedLandingPage =
      landingPagePath ||
      (typeof window !== "undefined" ? window.location.pathname : "");

    const payload = {
      first_name: name.trim(),
      business_name: businessName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      note: note.trim(),
      landing_page: resolvedLandingPage,
      submitted_at: submittedAt,
      ...(isRealtor ? { industry, lead_source_label: "Realtor Landing Page" } : {}),
      ...utmParams,
    };

    const utmSummary = Object.entries(utmParams)
      .map(([k, v]) => `${k}=${v}`)
      .join(", ");

    // Fire-and-forget copy to the GOS public lead endpoint (same behavior as
    // the previous form; must never block or fail the primary submission).
    fetch(
      "https://graylock-os-ymwca.sevalla.app/api/public/leads/99c58e46-33ee-4c7c-ab23-eeb7badcc57b",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "omit",
        body: JSON.stringify({
          name: payload.first_name,
          email: payload.email,
          phone: payload.phone || undefined,
          subject: payload.business_name || undefined,
          message: [
            "Discovery call request",
            isRealtor && "Lead source: Realtor Landing Page",
            resolvedLandingPage && `Page: ${resolvedLandingPage}`,
            payload.note && `Note: ${payload.note}`,
            utmSummary && `UTM: ${utmSummary}`,
            `Submitted: ${submittedAt}`,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      },
    ).catch(() => {});

    try {
      const res = await fetch(`${import.meta.env.BASE_URL || "/"}api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Lead submission failed (${res.status})`);
      if (isRealtor) {
        // Explicit utm context — the modal flow no longer carries it in the URL.
        trackRealtorEvent("realtor_form_submit", utmParams);
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Lead submission error:", err);
      setError(
        "Something went wrong sending your request. Please try again, or email us at hello@graylockdigital.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={variant === "page" ? "text-center py-12" : "text-center py-6"}>
        <CheckCircle className="text-orange w-14 h-14 mx-auto mb-5" aria-hidden="true" />
        <h3 className="text-2xl md:text-3xl font-display text-charcoal mb-3">
          You're all set{name ? `, ${name.split(" ")[0]}` : ""}!
        </h3>
        <p className="text-slate-600 font-sans leading-relaxed max-w-md mx-auto">
          We'll reach out within one business day at{" "}
          <span className="text-charcoal font-semibold">{email}</span> to set up your
          call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="bc-name" className={LABEL_CLASSES}>
          Name
        </label>
        <input
          id="bc-name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={INPUT_CLASSES}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="bc-business" className={LABEL_CLASSES}>
          {isRealtor ? "Brokerage or team name" : "Business name"}
        </label>
        <input
          id="bc-business"
          type="text"
          required
          autoComplete="organization"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder={isRealtor ? "Your brokerage or team" : "Your business"}
          className={INPUT_CLASSES}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="bc-email" className={LABEL_CLASSES}>
          Email
        </label>
        <input
          id="bc-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={INPUT_CLASSES}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="bc-phone" className={LABEL_CLASSES}>
          Phone <span className="text-slate-500 font-normal">(Optional)</span>
        </label>
        <input
          id="bc-phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(208) 555-0123"
          className={INPUT_CLASSES}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="bc-note" className={LABEL_CLASSES}>
          Anything we should know?{" "}
          <span className="text-slate-500 font-normal">(Optional)</span>
        </label>
        <textarea
          id="bc-note"
          rows={2}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder={
            isRealtor
              ? "Your market, current site, IDX needs — whatever's useful."
              : "Current site, goals, timeline — whatever's useful."
          }
          className={`${INPUT_CLASSES} resize-none`}
        />
      </div>

      {error && (
        <p role="alert" className="text-red-600 font-sans text-sm leading-snug">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 bg-orange text-white font-sans font-semibold text-lg px-8 py-4 rounded-lg hover:bg-orange/90 transition-all shadow-[0_4px_14px_rgba(232,93,38,0.25)] hover:shadow-[0_6px_20px_rgba(232,93,38,0.35)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={20} aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Request My Call"
        )}
      </button>

      <p className="text-slate-500 text-sm font-sans text-center">
        Takes under a minute. No pressure, no obligation — we'll reach out within one
        business day.
      </p>
    </form>
  );
}
