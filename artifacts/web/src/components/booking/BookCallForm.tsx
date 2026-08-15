import { useState, type FormEvent } from "react";
import { CheckCircle, ChevronDown, Loader2 } from "lucide-react";
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

const INPUT_BASE =
  "w-full bg-transparent border-0 border-b-2 border-[#0F0F0F]/20 px-0 py-3 font-sans text-lg focus:outline-none focus:border-[#E85D26] focus:bg-[#0F0F0F]/[0.03] transition-all rounded-none placeholder:text-[#0F0F0F]/60";

const LABEL_CLASSES = "text-[#0F0F0F] font-display uppercase tracking-widest text-sm font-bold block mb-1";
const OPTIONAL_CLASSES = "text-[#0F0F0F]/60 font-sans normal-case tracking-normal text-xs font-normal ml-1";

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
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [heardAboutUs, setHeardAboutUs] = useState("");
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
      website_url: websiteUrl.trim(),
      heard_about_us: heardAboutUs,
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
            payload.website_url && `Website: ${payload.website_url}`,
            payload.heard_about_us && `Heard about us: ${payload.heard_about_us}`,
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
      <div className={variant === "page" ? "text-center py-20 app-fade-in" : "text-center py-12 app-fade-in"}>
        <CheckCircle className="text-[#E85D26] w-16 h-16 mx-auto mb-6" aria-hidden="true" strokeWidth={1.5} />
        <h3 className="text-4xl md:text-5xl font-display text-[#0F0F0F] uppercase tracking-tight mb-4">
          You're all set{name ? `, ${name.split(" ")[0]}` : ""}!
        </h3>
        <p className="text-[#0F0F0F]/70 font-sans text-lg md:text-xl leading-relaxed max-w-md mx-auto">
          We'll reach out within one business day at{" "}
          <span className="text-[#0F0F0F] font-semibold">{email}</span> to set up your
          call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="flex flex-col gap-6">
      <div className="flex flex-col gap-1.5 group">
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
          className={`${INPUT_BASE} text-[#0F0F0F]`}
        />
      </div>

      <div className="flex flex-col gap-1.5 group">
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
          className={`${INPUT_BASE} text-[#0F0F0F]`}
        />
      </div>

      <div className="flex flex-col gap-1.5 group">
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
          className={`${INPUT_BASE} text-[#0F0F0F]`}
        />
      </div>

      <div className="flex flex-col gap-1.5 group">
        <label htmlFor="bc-phone" className={LABEL_CLASSES}>
          Phone
        </label>
        <input
          id="bc-phone"
          type="tel"
          required
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(208) 555-0123"
          className={`${INPUT_BASE} text-[#0F0F0F]`}
        />
      </div>

      <div className="flex flex-col gap-1.5 group">
        <label htmlFor="bc-website" className={LABEL_CLASSES}>
          Current website <span className={OPTIONAL_CLASSES}>(Optional)</span>
        </label>
        <input
          id="bc-website"
          type="text"
          inputMode="url"
          autoComplete="url"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          placeholder="yourbusiness.com"
          className={`${INPUT_BASE} text-[#0F0F0F]`}
        />
      </div>

      <div className="flex flex-col gap-1.5 group">
        <label htmlFor="bc-heard" className={LABEL_CLASSES}>
          How did you hear about us?{" "}
          <span className={OPTIONAL_CLASSES}>(Optional)</span>
        </label>
        <div className="relative">
          <select
            id="bc-heard"
            value={heardAboutUs}
            onChange={(e) => setHeardAboutUs(e.target.value)}
            className={`${INPUT_BASE} appearance-none pr-10 cursor-pointer ${
              heardAboutUs ? "text-[#0F0F0F]" : "text-[#0F0F0F]/60"
            }`}
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="Google search">Google search</option>
            <option value="Referral / word of mouth">Referral / word of mouth</option>
            <option value="Social media">Social media</option>
            <option value="Saw a site you built">Saw a site you built</option>
            <option value="Other">Other</option>
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#0F0F0F]/60 group-focus-within:text-[#E85D26] transition-colors"
            size={20}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 group">
        <label htmlFor="bc-note" className={LABEL_CLASSES}>
          Anything we should know?{" "}
          <span className={OPTIONAL_CLASSES}>(Optional)</span>
        </label>
        <textarea
          id="bc-note"
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder={
            isRealtor
              ? "Your market, IDX needs, timeline — whatever's useful."
              : "Goals, timeline — whatever's useful."
          }
          className={`${INPUT_BASE} text-[#0F0F0F] resize-none`}
        />
      </div>

      {error && (
        <div className="bg-[#B23E16]/10 border-l-4 border-[#B23E16] p-4 mt-2">
          <p role="alert" className="text-[#B23E16] font-sans font-semibold text-sm leading-snug">
            {error}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 bg-[#0F0F0F] text-[#F4F1EC] font-display uppercase tracking-widest text-xl px-8 py-5 hover:bg-[#E85D26] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#0F0F0F] disabled:hover:text-[#F4F1EC] flex items-center justify-center gap-3 w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={24} aria-hidden="true" />
            <span>Sending...</span>
          </>
        ) : (
          "Request My Call"
        )}
      </button>

      <p className="text-[#0F0F0F]/60 text-sm font-sans text-center mt-2">
        Takes under a minute. No pressure, no obligation — we'll reach out within one
        business day.
      </p>
    </form>
  );
}
