import { useState, type FormEvent } from "react";
import { CheckCircle, ChevronDown, Loader2 } from "lucide-react";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { trackWellDrillerEvent } from "@/lib/wellDrillerAnalytics";
import { getWellDrillerCampaignParams } from "@/lib/wellDrillerLinks";

interface BookCallFormProps {
  /** Industry context ("real-estate" on realtor CTAs, "" otherwise). */
  industry?: string;
  /** utm_* attribution params to submit with the lead. */
  utmParams?: Record<string, string>;
  /** Non-utm lead context from the CTA (e.g. stated_goal, intent). */
  leadParams?: Record<string, string>;
  /** Pathname of the page the request came from ("" when unknown). */
  landingPagePath?: string;
  /** Compact spacing for the modal; roomier on the standalone page. */
  variant?: "modal" | "page";
}

const INPUT_BASE =
  "w-full bg-transparent border-0 border-b-2 border-[#0F0F0F]/20 px-0 py-3 font-sans text-lg focus:outline-none focus:border-[#E85D26] focus:bg-[#0F0F0F]/[0.03] transition-all rounded-none placeholder:text-[#0F0F0F]/60";

const LABEL_CLASSES = "text-[#0F0F0F] font-display uppercase tracking-widest text-sm font-bold block mb-1";

const OPTIONAL_CLASSES = "text-[#0F0F0F]/60 font-sans normal-case tracking-normal text-xs font-normal ml-1";

const WELL_DRILLER_SERVICE_OPTIONS = [
  "Well Drilling",
  "Well Pumps",
  "Well Service / Repair",
  "Water Systems",
  "Agricultural / Irrigation",
  "Commercial / Industrial",
  "Other",
];

const WELL_DRILLER_CONTACT_OPTIONS = ["Call", "Text", "Email"];

export function BookCallForm({
  industry = "",
  utmParams = {},
  leadParams = {},
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
  const [serviceArea, setServiceArea] = useState("");
  const [mainServices, setMainServices] = useState<string[]>([]);
  const [desiredJobs, setDesiredJobs] = useState("");
  const [websiteGoal, setWebsiteGoal] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [wdErrors, setWdErrors] = useState<{
    business?: string;
    phone?: string;
    website?: string;
    services?: string;
    contact?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isRealtor = industry === "real-estate";
  const isWellDriller = industry === "well-drilling";

  const toggleService = (service: string) => {
    setMainServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    if (isWellDriller) {
      const errs: {
        business?: string;
        phone?: string;
        website?: string;
        services?: string;
        contact?: string;
      } = {};
      if (businessName.trim().replace(/\s/g, "").length < 2) {
        errs.business = "Enter your business name (at least two characters)";
      }
      const phoneDigits = phone.replace(/\D/g, "");
      if (phoneDigits.length < 10 || phoneDigits.length > 15) {
        errs.phone = "Enter a valid phone number";
      }
      const website = websiteUrl.trim();
      if (website && !/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}([\/?#]\S*)?$/i.test(website)) {
        errs.website = "Enter a valid website address (e.g., yourbusiness.com)";
      }
      if (mainServices.length === 0) errs.services = "Select at least one service";
      if (!preferredContact) errs.contact = "Please choose an option";
      setWdErrors(errs);
      if (Object.keys(errs).length > 0) return;
    }
    setIsSubmitting(true);

    const submittedAt = new Date().toISOString();
    const resolvedLandingPage =
      landingPagePath ||
      (typeof window !== "undefined" ? window.location.pathname : "");

    // market/rep/source (+ page-level utms) ride on the page URL — the modal
    // opens in place on the landing page, so they stay readable here.
    const campaignParams = isWellDriller ? getWellDrillerCampaignParams() : {};

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
      ...(isWellDriller
        ? {
            industry,
            lead_source_label: "Well Driller Landing Page",
            service_area: serviceArea.trim(),
            main_services: mainServices,
            desired_jobs: desiredJobs.trim(),
            website_goal: websiteGoal.trim(),
            preferred_contact_method: preferredContact,
            stated_goal: leadParams["stated_goal"] || "",
            intent: leadParams["intent"] || "",
            market: campaignParams["market"] || "",
            rep: campaignParams["rep"] || "",
            source: campaignParams["source"] || "",
            referrer: typeof document !== "undefined" ? document.referrer || "" : "",
          }
        : {}),
      ...(isWellDriller
        ? Object.fromEntries(
            Object.entries(campaignParams).filter(([key]) => key.startsWith("utm_")),
          )
        : {}),
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
            isWellDriller ? "Well Driller Custom Demo request" : "Discovery call request",
            isRealtor && "Lead source: Realtor Landing Page",
            isWellDriller && "Lead source: Well Driller Landing Page",
            isWellDriller && campaignParams["market"] && `Market: ${campaignParams["market"]}`,
            isWellDriller && campaignParams["rep"] && `Rep: ${campaignParams["rep"]}`,
            isWellDriller && campaignParams["source"] && `Source: ${campaignParams["source"]}`,
            isWellDriller && serviceArea.trim() && `Service area: ${serviceArea.trim()}`,
            isWellDriller && mainServices.length > 0 && `Main services: ${mainServices.join(", ")}`,
            isWellDriller && desiredJobs.trim() && `Desired jobs: ${desiredJobs.trim()}`,
            isWellDriller && websiteGoal.trim() && `Website goal: ${websiteGoal.trim()}`,
            isWellDriller && leadParams["stated_goal"] && `Stated goal: ${leadParams["stated_goal"]}`,
            isWellDriller && preferredContact && `Preferred contact: ${preferredContact}`,
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
      if (isWellDriller) {
        trackWellDrillerEvent("well_driller_form_submit", {
          services_selected: mainServices.join(", "),
          ...(leadParams["stated_goal"] ? { stated_goal: leadParams["stated_goal"] } : {}),
          ...utmParams,
        });
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
          {isWellDriller ? (
            <>You're in.</>
          ) : (
            <>You're all set{name ? `, ${name.split(" ")[0]}` : ""}!</>
          )}
        </h3>
        <p className="text-[#0F0F0F]/70 font-sans text-lg md:text-xl leading-relaxed max-w-md mx-auto">
          {isWellDriller ? (
            <>
              We received your demo request and will follow up to learn the few
              details we need to build something relevant—not generic.
            </>
          ) : (
            <>
              We'll reach out within one business day at{" "}
              <span className="text-[#0F0F0F] font-semibold">{email}</span> to set up
              your call.
            </>
          )}
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
        {isWellDriller && wdErrors.business && (
          <span role="alert" className="text-[#B23E16] font-sans font-semibold text-sm">
            {wdErrors.business}
          </span>
        )}
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
        {isWellDriller && wdErrors.phone && (
          <span role="alert" className="text-[#B23E16] font-sans font-semibold text-sm">
            {wdErrors.phone}
          </span>
        )}
      </div>

      {isWellDriller && (
        <>
          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-website" className={LABEL_CLASSES}>
              Current Website <span className={OPTIONAL_CLASSES}>(Optional)</span>
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
            {wdErrors.website && (
              <span role="alert" className="text-[#B23E16] font-sans font-semibold text-sm">
                {wdErrors.website}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-service-area" className={LABEL_CLASSES}>
              Primary Service Area
            </label>
            <input
              id="bc-service-area"
              type="text"
              required
              value={serviceArea}
              onChange={(e) => setServiceArea(e.target.value)}
              placeholder="e.g., Elko County, NV and surrounding rural areas"
              className={`${INPUT_BASE} text-[#0F0F0F]`}
            />
          </div>

          <fieldset className="flex flex-col gap-1.5 border-0 p-0 m-0">
            <legend className={`${LABEL_CLASSES} p-0`}>
              Main Services{" "}
              <span className={OPTIONAL_CLASSES}>(Select all that apply)</span>
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1">
              {WELL_DRILLER_SERVICE_OPTIONS.map((service) => {
                const checked = mainServices.includes(service);
                return (
                  <label
                    key={service}
                    className={`flex items-center gap-2.5 border-2 px-3.5 py-2.5 font-sans text-base cursor-pointer transition-all ${
                      checked
                        ? "border-[#E85D26] bg-[#E85D26]/10 text-[#0F0F0F]"
                        : "border-[#0F0F0F]/20 text-[#0F0F0F]/70 hover:border-[#0F0F0F]/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleService(service)}
                      className="w-4 h-4 accent-[#E85D26] flex-shrink-0"
                    />
                    {service}
                  </label>
                );
              })}
            </div>
            {wdErrors.services && (
              <span role="alert" className="text-[#B23E16] font-sans font-semibold text-sm">
                {wdErrors.services}
              </span>
            )}
          </fieldset>

          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-desired-jobs" className={LABEL_CLASSES}>
              What kinds of jobs do you want more of?{" "}
              <span className={OPTIONAL_CLASSES}>(Optional)</span>
            </label>
            <textarea
              id="bc-desired-jobs"
              rows={3}
              value={desiredJobs}
              onChange={(e) => setDesiredJobs(e.target.value)}
              placeholder="Service calls, new wells, pumps, commercial work, agricultural work, or something else."
              className={`${INPUT_BASE} text-[#0F0F0F] resize-none`}
            />
          </div>

          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-website-goal" className={LABEL_CLASSES}>
              What do you want your website to do better?{" "}
              <span className={OPTIONAL_CLASSES}>(Optional)</span>
            </label>
            <textarea
              id="bc-website-goal"
              rows={3}
              value={websiteGoal}
              onChange={(e) => setWebsiteGoal(e.target.value)}
              placeholder="Show up in local searches, look more professional, make it easier to request service — whatever matters most."
              className={`${INPUT_BASE} text-[#0F0F0F] resize-none`}
            />
          </div>

          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-preferred-contact" className={LABEL_CLASSES}>
              Preferred Contact Method
            </label>
            <div className="relative">
              <select
                id="bc-preferred-contact"
                value={preferredContact}
                onChange={(e) => setPreferredContact(e.target.value)}
                className={`${INPUT_BASE} appearance-none pr-10 cursor-pointer ${
                  preferredContact ? "text-[#0F0F0F]" : "text-[#0F0F0F]/60"
                }`}
              >
                <option value="" disabled>
                  Select one
                </option>
                {WELL_DRILLER_CONTACT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#0F0F0F]/60 group-focus-within:text-[#E85D26] transition-colors"
                size={20}
                aria-hidden="true"
              />
            </div>
            {wdErrors.contact && (
              <span role="alert" className="text-[#B23E16] font-sans font-semibold text-sm">
                {wdErrors.contact}
              </span>
            )}
          </div>
        </>
      )}

      {!isWellDriller && (
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
      )}

      {!isWellDriller && (
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
      )}

      {!isWellDriller && (
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
      )}

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
        ) : isWellDriller ? (
          "Request My Custom Demo"
        ) : (
          "Request My Call"
        )}
      </button>

      <p className="text-[#0F0F0F]/60 text-sm font-sans text-center mt-2">
        {isWellDriller
          ? "Takes under a minute. No pressure, no obligation."
          : "Takes under a minute. No pressure, no obligation — we'll reach out within one business day."}
      </p>
    </form>
  );
}
