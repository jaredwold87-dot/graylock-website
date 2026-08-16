import { useRef, useState, type FormEvent } from "react";
import { CheckCircle, ChevronDown, Loader2 } from "lucide-react";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { trackWellDrillerEvent } from "@/lib/wellDrillerAnalytics";
import { getWellDrillerCampaignParams } from "@/lib/wellDrillerLinks";
import { trackCabinetMakerEvent } from "@/lib/cabinetMakerAnalytics";
import { getCabinetMakerCampaignParams } from "@/lib/cabinetMakerLinks";

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

const REALTOR_ROLE_OPTIONS = ["Agent", "Team Lead", "Brokerage Owner", "Other"];

const REALTOR_NEED_SEARCH_OPTIONS = ["Yes", "No", "Not sure yet"];

const REALTOR_LAUNCH_TIMING_OPTIONS = [
  "As soon as possible",
  "Within 1\u20133 months",
  "In 3\u20136 months",
  "6+ months / just researching",
];

// Cabinet-maker demo-request options (spec §5, exact values).
const CABINET_MAKER_PROJECT_OPTIONS = [
  "Kitchens",
  "Built-Ins",
  "Closets",
  "Vanities",
  "Commercial / Millwork",
  "Other",
];

const CABINET_MAKER_OUTCOME_OPTIONS = [
  "Design Consultations",
  "Quote Requests",
  "Higher-End Projects",
  "Builder / Designer Relationships",
  "Better Portfolio Presentation",
  "Other",
];

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
  // Cabinet-maker demo fields (required multi-selects + launch timing).
  const [mainProjectTypes, setMainProjectTypes] = useState<string[]>([]);
  const [desiredOutcomes, setDesiredOutcomes] = useState<string[]>([]);
  const [cmErrors, setCmErrors] = useState<{
    business?: string;
    phone?: string;
    website?: string;
    projects?: string;
    outcomes?: string;
    timing?: string;
  }>({});
  // Realtor fit-call fields (per the conversion scope — no budget field).
  const [role, setRole] = useState("");
  const [market, setMarket] = useState("");
  const [mls, setMls] = useState("");
  const [needSearch, setNeedSearch] = useState("");
  const [launchTiming, setLaunchTiming] = useState("");
  const [rtErrors, setRtErrors] = useState<{ phone?: string; website?: string }>({});
  const fitCallStarted = useRef(false);
  const demoStarted = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isRealtor = industry === "real-estate";
  const isWellDriller = industry === "well-drilling";
  const isCabinetMaker = industry === "cabinet-making";

  const toggleService = (service: string) => {
    setMainServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
    );
  };

  const toggleProjectType = (option: string) => {
    setMainProjectTypes((prev) =>
      prev.includes(option) ? prev.filter((s) => s !== option) : [...prev, option],
    );
  };

  const toggleDesiredOutcome = (option: string) => {
    setDesiredOutcomes((prev) =>
      prev.includes(option) ? prev.filter((s) => s !== option) : [...prev, option],
    );
  };

  // Campaign start events — first interaction with any field, fired once.
  const handleFirstFocus = () => {
    if (isRealtor && !fitCallStarted.current) {
      fitCallStarted.current = true;
      trackRealtorEvent("realtor_fit_call_start", utmParams);
    }
    if (isCabinetMaker && !demoStarted.current) {
      demoStarted.current = true;
      trackCabinetMakerEvent("cabinet_maker_demo_start", utmParams);
    }
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
    if (isRealtor) {
      const errs: { phone?: string; website?: string } = {};
      const phoneDigits = phone.replace(/\D/g, "");
      if (phoneDigits.length < 10 || phoneDigits.length > 15) {
        errs.phone = "Enter a valid phone number";
      }
      const website = websiteUrl.trim();
      if (website && !/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}([\/?#]\S*)?$/i.test(website)) {
        errs.website = "Enter a valid website address (e.g., yourbusiness.com)";
      }
      setRtErrors(errs);
      if (Object.keys(errs).length > 0) return;
    }
    if (isCabinetMaker) {
      const errs: {
        business?: string;
        phone?: string;
        website?: string;
        projects?: string;
        outcomes?: string;
        timing?: string;
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
      if (mainProjectTypes.length === 0) errs.projects = "Select at least one project type";
      if (desiredOutcomes.length === 0) errs.outcomes = "Select at least one option";
      if (!launchTiming) errs.timing = "Please choose an option";
      setCmErrors(errs);
      if (Object.keys(errs).length > 0) return;
    }
    setIsSubmitting(true);

    const submittedAt = new Date().toISOString();
    const resolvedLandingPage =
      landingPagePath ||
      (typeof window !== "undefined" ? window.location.pathname : "");

    // market/rep/source (+ page-level utms) ride on the page URL — the modal
    // opens in place on the landing page, so they stay readable here.
    const campaignParams = isWellDriller
      ? getWellDrillerCampaignParams()
      : isCabinetMaker
        ? getCabinetMakerCampaignParams()
        : {};

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
      ...(isRealtor
        ? {
            industry,
            lead_source_label: "Realtor Landing Page",
            role,
            market: market.trim(),
            mls: mls.trim(),
            need_property_search: needSearch,
            launch_timing: launchTiming,
            intent: leadParams["intent"] || "",
            referrer: typeof document !== "undefined" ? document.referrer || "" : "",
          }
        : {}),
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
      ...(isCabinetMaker
        ? {
            industry,
            lead_source_label: "Cabinet Maker Landing Page",
            service_area: serviceArea.trim(),
            main_project_types: mainProjectTypes,
            desired_outcomes: desiredOutcomes,
            launch_timing: launchTiming,
            intent: leadParams["intent"] || "",
            market: campaignParams["market"] || "",
            rep: campaignParams["rep"] || "",
            source: campaignParams["source"] || "",
            referrer: typeof document !== "undefined" ? document.referrer || "" : "",
          }
        : {}),
      ...(isWellDriller || isCabinetMaker
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
            isWellDriller
              ? "Well Driller Custom Demo request"
              : isCabinetMaker
                ? "Cabinet Maker Custom Demo request"
                : isRealtor
                  ? "Real Estate Website + IDX Fit Call request"
                  : "Discovery call request",
            isRealtor && "Lead source: Realtor Landing Page",
            isRealtor && role && `Role: ${role}`,
            isRealtor && market.trim() && `Market / service area: ${market.trim()}`,
            isRealtor && mls.trim() && `MLS: ${mls.trim()}`,
            isRealtor && needSearch && `Needs property search: ${needSearch}`,
            isRealtor && launchTiming && `Target launch timing: ${launchTiming}`,
            isRealtor && leadParams["intent"] && `Intent: ${leadParams["intent"]}`,
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
            isCabinetMaker && "Lead source: Cabinet Maker Landing Page",
            isCabinetMaker && campaignParams["market"] && `Market: ${campaignParams["market"]}`,
            isCabinetMaker && campaignParams["rep"] && `Rep: ${campaignParams["rep"]}`,
            isCabinetMaker && campaignParams["source"] && `Source: ${campaignParams["source"]}`,
            isCabinetMaker && serviceArea.trim() && `Service area: ${serviceArea.trim()}`,
            isCabinetMaker &&
              mainProjectTypes.length > 0 &&
              `Main project types: ${mainProjectTypes.join(", ")}`,
            isCabinetMaker &&
              desiredOutcomes.length > 0 &&
              `Wants more of: ${desiredOutcomes.join(", ")}`,
            isCabinetMaker && launchTiming && `Target launch timing: ${launchTiming}`,
            isCabinetMaker && leadParams["intent"] && `Intent: ${leadParams["intent"]}`,
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
        // realtor_form_submit stays for GA continuity; realtor_fit_call_complete
        // is the scope's canonical completion event.
        trackRealtorEvent("realtor_form_submit", utmParams);
        trackRealtorEvent("realtor_fit_call_complete", {
          role,
          need_property_search: needSearch,
          market: market.trim(),
          ...utmParams,
        });
      }
      if (isWellDriller) {
        trackWellDrillerEvent("well_driller_form_submit", {
          services_selected: mainServices.join(", "),
          ...(leadParams["stated_goal"] ? { stated_goal: leadParams["stated_goal"] } : {}),
          ...utmParams,
        });
      }
      if (isCabinetMaker) {
        trackCabinetMakerEvent("cabinet_maker_demo_complete", {
          project_types_selected: mainProjectTypes.join(", "),
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
          {isWellDriller || isCabinetMaker ? (
            <>You're in.</>
          ) : (
            <>You're all set{name ? `, ${name.split(" ")[0]}` : ""}!</>
          )}
        </h3>
        <p className="text-[#0F0F0F]/70 font-sans text-lg md:text-xl leading-relaxed max-w-md mx-auto">
          {isWellDriller || isCabinetMaker ? (
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
    <form
      onSubmit={handleSubmit}
      onFocusCapture={handleFirstFocus}
      noValidate={false}
      className="flex flex-col gap-6"
    >
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

      {!isRealtor && (
        <div className="flex flex-col gap-1.5 group">
          <label htmlFor="bc-business" className={LABEL_CLASSES}>
            Business name
          </label>
          <input
            id="bc-business"
            type="text"
            required
            autoComplete="organization"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Your business"
            className={`${INPUT_BASE} text-[#0F0F0F]`}
          />
          {isWellDriller && wdErrors.business && (
            <span role="alert" className="text-[#B23E16] font-sans font-semibold text-sm">
              {wdErrors.business}
            </span>
          )}
          {isCabinetMaker && cmErrors.business && (
            <span role="alert" className="text-[#B23E16] font-sans font-semibold text-sm">
              {cmErrors.business}
            </span>
          )}
        </div>
      )}

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
        {isCabinetMaker && cmErrors.phone && (
          <span role="alert" className="text-[#B23E16] font-sans font-semibold text-sm">
            {cmErrors.phone}
          </span>
        )}
        {isRealtor && rtErrors.phone && (
          <span role="alert" className="text-[#B23E16] font-sans font-semibold text-sm">
            {rtErrors.phone}
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

      {isCabinetMaker && (
        <>
          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-cm-website" className={LABEL_CLASSES}>
              Current Website <span className={OPTIONAL_CLASSES}>(Optional)</span>
            </label>
            <input
              id="bc-cm-website"
              type="text"
              inputMode="url"
              autoComplete="url"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="yourbusiness.com"
              className={`${INPUT_BASE} text-[#0F0F0F]`}
            />
            {cmErrors.website && (
              <span role="alert" className="text-[#B23E16] font-sans font-semibold text-sm">
                {cmErrors.website}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-cm-service-area" className={LABEL_CLASSES}>
              Primary Service Area
            </label>
            <input
              id="bc-cm-service-area"
              type="text"
              required
              value={serviceArea}
              onChange={(e) => setServiceArea(e.target.value)}
              placeholder="e.g., Boise metro and surrounding communities"
              className={`${INPUT_BASE} text-[#0F0F0F]`}
            />
          </div>

          <fieldset className="flex flex-col gap-1.5 border-0 p-0 m-0">
            <legend className={`${LABEL_CLASSES} p-0`}>
              Main Project Types{" "}
              <span className={OPTIONAL_CLASSES}>(Select all that apply)</span>
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1">
              {CABINET_MAKER_PROJECT_OPTIONS.map((option) => {
                const checked = mainProjectTypes.includes(option);
                return (
                  <label
                    key={option}
                    className={`flex items-center gap-2.5 border-2 px-3.5 py-2.5 font-sans text-base cursor-pointer transition-all ${
                      checked
                        ? "border-[#E85D26] bg-[#E85D26]/10 text-[#0F0F0F]"
                        : "border-[#0F0F0F]/20 text-[#0F0F0F]/70 hover:border-[#0F0F0F]/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleProjectType(option)}
                      className="w-4 h-4 accent-[#E85D26] flex-shrink-0"
                    />
                    {option}
                  </label>
                );
              })}
            </div>
            {cmErrors.projects && (
              <span role="alert" className="text-[#B23E16] font-sans font-semibold text-sm">
                {cmErrors.projects}
              </span>
            )}
          </fieldset>

          <fieldset className="flex flex-col gap-1.5 border-0 p-0 m-0">
            <legend className={`${LABEL_CLASSES} p-0`}>
              What do you want more of?{" "}
              <span className={OPTIONAL_CLASSES}>(Select all that apply)</span>
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1">
              {CABINET_MAKER_OUTCOME_OPTIONS.map((option) => {
                const checked = desiredOutcomes.includes(option);
                return (
                  <label
                    key={option}
                    className={`flex items-center gap-2.5 border-2 px-3.5 py-2.5 font-sans text-base cursor-pointer transition-all ${
                      checked
                        ? "border-[#E85D26] bg-[#E85D26]/10 text-[#0F0F0F]"
                        : "border-[#0F0F0F]/20 text-[#0F0F0F]/70 hover:border-[#0F0F0F]/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleDesiredOutcome(option)}
                      className="w-4 h-4 accent-[#E85D26] flex-shrink-0"
                    />
                    {option}
                  </label>
                );
              })}
            </div>
            {cmErrors.outcomes && (
              <span role="alert" className="text-[#B23E16] font-sans font-semibold text-sm">
                {cmErrors.outcomes}
              </span>
            )}
          </fieldset>

          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-cm-launch-timing" className={LABEL_CLASSES}>
              Target launch timing
            </label>
            <div className="relative">
              <select
                id="bc-cm-launch-timing"
                required
                value={launchTiming}
                onChange={(e) => setLaunchTiming(e.target.value)}
                className={`${INPUT_BASE} appearance-none pr-10 cursor-pointer ${
                  launchTiming ? "text-[#0F0F0F]" : "text-[#0F0F0F]/60"
                }`}
              >
                <option value="" disabled>
                  Select one
                </option>
                {REALTOR_LAUNCH_TIMING_OPTIONS.map((opt) => (
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
            {cmErrors.timing && (
              <span role="alert" className="text-[#B23E16] font-sans font-semibold text-sm">
                {cmErrors.timing}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-cm-note" className={LABEL_CLASSES}>
              Additional notes <span className={OPTIONAL_CLASSES}>(Optional)</span>
            </label>
            <textarea
              id="bc-cm-note"
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              maxLength={500}
              placeholder="Anything about your shop, projects, or current website we should know."
              className={`${INPUT_BASE} text-[#0F0F0F] resize-none`}
            />
          </div>
        </>
      )}

      {isRealtor && (
        <>
          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-role" className={LABEL_CLASSES}>
              Role
            </label>
            <div className="relative">
              <select
                id="bc-role"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className={`${INPUT_BASE} appearance-none pr-10 cursor-pointer ${
                  role ? "text-[#0F0F0F]" : "text-[#0F0F0F]/60"
                }`}
              >
                <option value="" disabled>
                  Select one
                </option>
                {REALTOR_ROLE_OPTIONS.map((opt) => (
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
          </div>

          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-market" className={LABEL_CLASSES}>
              Market / service area
            </label>
            <input
              id="bc-market"
              type="text"
              required
              value={market}
              onChange={(e) => setMarket(e.target.value)}
              placeholder="e.g., Twin Falls + surrounding Southern Idaho"
              className={`${INPUT_BASE} text-[#0F0F0F]`}
            />
          </div>

          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-brokerage" className={LABEL_CLASSES}>
              Brokerage <span className={OPTIONAL_CLASSES}>(Optional)</span>
            </label>
            <input
              id="bc-brokerage"
              type="text"
              autoComplete="organization"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Your brokerage"
              className={`${INPUT_BASE} text-[#0F0F0F]`}
            />
          </div>

          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-mls" className={LABEL_CLASSES}>
              MLS, if known <span className={OPTIONAL_CLASSES}>(Optional)</span>
            </label>
            <input
              id="bc-mls"
              type="text"
              value={mls}
              onChange={(e) => setMls(e.target.value)}
              placeholder="e.g., Intermountain MLS"
              className={`${INPUT_BASE} text-[#0F0F0F]`}
            />
          </div>

          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-website" className={LABEL_CLASSES}>
              Current website URL <span className={OPTIONAL_CLASSES}>(Optional)</span>
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
            {rtErrors.website && (
              <span role="alert" className="text-[#B23E16] font-sans font-semibold text-sm">
                {rtErrors.website}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-need-search" className={LABEL_CLASSES}>
              Do you need property search?
            </label>
            <div className="relative">
              <select
                id="bc-need-search"
                required
                value={needSearch}
                onChange={(e) => setNeedSearch(e.target.value)}
                className={`${INPUT_BASE} appearance-none pr-10 cursor-pointer ${
                  needSearch ? "text-[#0F0F0F]" : "text-[#0F0F0F]/60"
                }`}
              >
                <option value="" disabled>
                  Select one
                </option>
                {REALTOR_NEED_SEARCH_OPTIONS.map((opt) => (
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
          </div>

          <div className="flex flex-col gap-1.5 group">
            <label htmlFor="bc-launch-timing" className={LABEL_CLASSES}>
              Target launch timing
            </label>
            <div className="relative">
              <select
                id="bc-launch-timing"
                required
                value={launchTiming}
                onChange={(e) => setLaunchTiming(e.target.value)}
                className={`${INPUT_BASE} appearance-none pr-10 cursor-pointer ${
                  launchTiming ? "text-[#0F0F0F]" : "text-[#0F0F0F]/60"
                }`}
              >
                <option value="" disabled>
                  Select one
                </option>
                {REALTOR_LAUNCH_TIMING_OPTIONS.map((opt) => (
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
          </div>
        </>
      )}

      {!isWellDriller && !isRealtor && !isCabinetMaker && (
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

      {!isWellDriller && !isRealtor && !isCabinetMaker && (
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

      {!isWellDriller && !isCabinetMaker && (
      <div className="flex flex-col gap-1.5 group">
        <label htmlFor="bc-note" className={LABEL_CLASSES}>
          {isRealtor
            ? "Anything you want the new site to do better?"
            : "Anything we should know?"}{" "}
          <span className={OPTIONAL_CLASSES}>(Optional)</span>
        </label>
        <textarea
          id="bc-note"
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          maxLength={isRealtor ? 500 : undefined}
          placeholder={
            isRealtor
              ? "Search, seller leads, local visibility — whatever matters most."
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
        ) : isCabinetMaker ? (
          "Request My Free Custom Demo"
        ) : isWellDriller ? (
          "Request My Custom Demo"
        ) : isRealtor ? (
          "Book My Fit Call"
        ) : (
          "Request My Call"
        )}
      </button>

      <p className="text-[#0F0F0F]/60 text-sm font-sans text-center mt-2">
        {isWellDriller || isCabinetMaker
          ? "Takes under a minute. No pressure, no obligation."
          : isRealtor
            ? "Takes under a minute. We'll reach out within one business day to schedule your 15-minute fit call."
            : "Takes under a minute. No pressure, no obligation — we'll reach out within one business day."}
      </p>
    </form>
  );
}
