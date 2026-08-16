import { Router, type Request, type Response } from "express";
import { Resend } from "resend";
import { logger } from "../lib/logger";

const leadsRouter = Router();

interface LeadPayload {
  first_name: string;

  business_name: string;

  email: string;

  phone?: string;
  /** Optional free-text note from the quick discovery-call form. */

  note?: string;
  // Legacy wizard fields — optional; rendered only when present.

  service_area?: string;

  has_website?: boolean;

  website_url?: string;

  primary_goal?: string;

  ideal_customer?: string;

  branding_notes?: string;

  heard_about_us?: string;
  // Attribution context (optional)

  industry?: string;

  lead_source_label?: string;

  landing_page?: string;

  local_mls?: string;

  idx_need?: string;

  realtor_goals?: string;
  // Realtor fit-call fields (current realtor landing form)

  role?: string;

  mls?: string;

  need_property_search?: string;

  launch_timing?: string;
  // Well-driller campaign context (optional — present only for well-driller leads)

  submitted_at?: string;

  utm_source?: string;

  utm_medium?: string;

  utm_campaign?: string;

  utm_term?: string;

  utm_content?: string;

  market?: string;

  rep?: string;

  source?: string;

  main_services?: string[];

  desired_jobs?: string;

  website_goal?: string;

  preferred_contact_method?: string;
  // Cabinet-maker campaign fields (optional — present only for cabinet-maker leads)

  main_project_types?: string[];

  desired_outcomes?: string[];
  // Auctioneer campaign fields (optional — present only for auctioneer leads)

  auction_types?: string[];


  /** Reflection-card label the visitor selected before clicking through. */
  stated_goal?: string;

  /** CTA intent carried from the landing page (e.g. "free_demo"). */
  intent?: string;

  referrer?: string;
}

leadsRouter.post("/leads", async (req: Request, res: Response) => {
  const payload: LeadPayload = req.body;
  const submittedAt = payload.submitted_at || new Date().toISOString();

  const isRealtorLead =
    payload.lead_source_label === "Realtor Landing Page" ||
    payload.industry === "real-estate";

  const isWellDrillerLead =
    payload.lead_source_label === "Well Driller Landing Page" ||
    payload.industry === "well-drilling";

  const isCabinetMakerLead =
    payload.lead_source_label === "Cabinet Maker Landing Page" ||
    payload.industry === "cabinet-making";

  const isAuctioneerLead =
    payload.lead_source_label === "Auctioneer Landing Page" ||
    payload.industry === "auctioneering";

  const truncate = (value: string, max = 60) =>
    value.length > max ? `${value.slice(0, max - 1).trimEnd()}…` : value;

  const mainServices = Array.isArray(payload.main_services)
    ? payload.main_services.filter((s) => typeof s === "string" && s.trim()).join(", ")
    : "";

  const mainProjectTypes = Array.isArray(payload.main_project_types)
    ? payload.main_project_types.filter((s) => typeof s === "string" && s.trim()).join(", ")
    : "";

  const desiredOutcomes = Array.isArray(payload.desired_outcomes)
    ? payload.desired_outcomes.filter((s) => typeof s === "string" && s.trim()).join(", ")
    : "";

  const auctionTypes = Array.isArray(payload.auction_types)
    ? payload.auction_types.filter((s) => typeof s === "string" && s.trim()).join(", ")
    : "";

  // Subject shows the primary service area (spec: Business Name — Primary
  // Service Area); campaign market is the fallback when the area is missing.
  const wellDrillerServiceArea =
    (payload.service_area ? truncate(payload.service_area.trim()) : "") ||
    (payload.market || "").trim() ||
    "Service Area TBD";

  const cabinetMakerServiceArea =
    (payload.service_area ? truncate(payload.service_area.trim()) : "") ||
    (payload.market || "").trim() ||
    "Service Area TBD";

  const auctioneerServiceArea =
    (payload.service_area ? truncate(payload.service_area.trim()) : "") ||
    (payload.market || "").trim() ||
    "Service Area TBD";
  const utmPairs = (
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const
  )
    .filter((key) => payload[key])
    .map((key) => `${key}=${payload[key]}`);

  const realtorLines = isRealtorLead
    ? [
        "",
        "— Realtor Landing Page lead —",
        `Landing page: ${payload.landing_page || "/websites-for-realtors"}`,
        `Industry: ${payload.industry || "real-estate"}`,
        ...(payload.role ? [`Role: ${payload.role}`] : []),
        ...(payload.market ? [`Market / service area: ${payload.market}`] : []),
        ...(payload.mls ? [`MLS: ${payload.mls}`] : []),
        ...(payload.need_property_search
          ? [`Needs property search: ${payload.need_property_search}`]
          : []),
        ...(payload.launch_timing
          ? [`Target launch timing: ${payload.launch_timing}`]
          : []),
        ...(payload.intent ? [`Intent: ${payload.intent}`] : []),
        ...(payload.referrer ? [`Referrer: ${payload.referrer}`] : []),
        // Legacy realtor-form fields — kept for old payloads.
        ...(payload.local_mls ? [`Local MLS: ${payload.local_mls}`] : []),
        ...(payload.idx_need ? [`Needs IDX property search: ${payload.idx_need}`] : []),
        ...(payload.realtor_goals ? [`Realtor goals: ${payload.realtor_goals}`] : []),
        ...(utmPairs.length ? [`UTM: ${utmPairs.join(", ")}`] : []),
      ].join("\n")
    : "";

  const wellDrillerLines = isWellDrillerLead
    ? [
        "",
        "— Well Driller Custom Demo lead —",
        `Landing page: ${payload.landing_page || "/websites-for-well-drillers"}`,
        `Industry: ${payload.industry || "well-drilling"}`,
        ...(payload.intent ? [`Intent: ${payload.intent}`] : []),
        ...(payload.stated_goal ? [`Stated goal (reflection card): ${payload.stated_goal}`] : []),
        `Market: ${payload.market || "Not provided"}`,
        `Rep: ${payload.rep || "Not provided"}`,
        `Source: ${payload.source || "Not provided"}`,
        `Main services: ${mainServices || "Not provided"}`,
        `Desired jobs: ${payload.desired_jobs || "Not provided"}`,
        `Website goal: ${payload.website_goal || "Not provided"}`,
        `Preferred contact method: ${payload.preferred_contact_method || "Not provided"}`,
        `Referrer: ${payload.referrer || "Not provided"}`,
        ...(utmPairs.length ? [`UTM: ${utmPairs.join(", ")}`] : []),
      ].join("\n")
    : "";

  const cabinetMakerLines = isCabinetMakerLead
    ? [
        "",
        "— Cabinet Maker Custom Demo lead —",
        `Landing page: ${payload.landing_page || "/websites-for-cabinet-makers"}`,
        `Industry: ${payload.industry || "cabinet-making"}`,
        ...(payload.intent ? [`Intent: ${payload.intent}`] : []),
        `Market: ${payload.market || "Not provided"}`,
        `Rep: ${payload.rep || "Not provided"}`,
        `Source: ${payload.source || "Not provided"}`,
        `Main project types: ${mainProjectTypes || "Not provided"}`,
        `Wants more of: ${desiredOutcomes || "Not provided"}`,
        `Target launch timing: ${payload.launch_timing || "Not provided"}`,
        `Referrer: ${payload.referrer || "Not provided"}`,
        ...(utmPairs.length ? [`UTM: ${utmPairs.join(", ")}`] : []),
      ].join("\n")
    : "";

  const auctioneerLines = isAuctioneerLead
    ? [
        "",
        "— Auctioneer Custom Demo lead —",
        `Landing page: ${payload.landing_page || "/websites-for-auctioneers"}`,
        `Industry: ${payload.industry || "auctioneering"}`,
        ...(payload.intent ? [`Intent: ${payload.intent}`] : []),
        `Market: ${payload.market || "Not provided"}`,
        `Rep: ${payload.rep || "Not provided"}`,
        `Source: ${payload.source || "Not provided"}`,
        `Auction types: ${auctionTypes || "Not provided"}`,
        `Wants more of: ${desiredOutcomes || "Not provided"}`,
        `Target launch timing: ${payload.launch_timing || "Not provided"}`,
        `Referrer: ${payload.referrer || "Not provided"}`,
        ...(utmPairs.length ? [`UTM: ${utmPairs.join(", ")}`] : []),
      ].join("\n")
    : "";

  // Only render the fields the visitor actually provided — the quick
  // discovery-call form captures far less than the old wizard did.
  const detailLines = [
    `Name: ${payload.first_name}`,
    `Business: ${payload.business_name || "Not provided"}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    ...(payload.note ? [`Note: ${payload.note}`] : []),
    ...(payload.service_area ? [`Service Area: ${payload.service_area}`] : []),
    ...(typeof payload.has_website === "boolean"
      ? [`Has website: ${payload.has_website ? "Yes" : "No"}`]
      : []),
    ...(payload.website_url ? [`Website URL: ${payload.website_url}`] : []),
    ...(payload.primary_goal ? [`Primary goal: ${payload.primary_goal}`] : []),
    ...(payload.ideal_customer ? [`Ideal customer: ${payload.ideal_customer}`] : []),
    ...(payload.branding_notes ? [`Branding notes: ${payload.branding_notes}`] : []),
    ...(payload.heard_about_us ? [`Heard about us: ${payload.heard_about_us}`] : []),
    ...(!isRealtorLead && payload.landing_page
      ? [`Came from: ${payload.landing_page}`]
      : []),
    ...(!isRealtorLead && utmPairs.length ? [`UTM: ${utmPairs.join(", ")}`] : []),
  ];

  const emailBody = `New discovery call request from graylockdigital.com

${detailLines.join("\n")}${realtorLines}${wellDrillerLines}${cabinetMakerLines}${auctioneerLines}

Submitted: ${submittedAt}

---
Reply directly to this email to reach the lead.
Or log in to the GOS to view full lead record.`;

  const recipients = ["jared@graylockdigital.com"];
  if (process.env.TEAM_EMAIL_TIM) {
    recipients.push(process.env.TEAM_EMAIL_TIM);
  }

  const subject = isWellDrillerLead
    ? `New Well-Driller Custom Demo Request — ${payload.business_name} — ${wellDrillerServiceArea}`
    : isCabinetMakerLead
      ? `New Cabinet-Maker Custom Demo Request — ${payload.business_name} — ${cabinetMakerServiceArea}`
      : isAuctioneerLead
        ? `New Auctioneer Custom Demo Request — ${payload.business_name} — ${auctioneerServiceArea}`
        : isRealtorLead
          ? `New Lead (Realtor Landing Page): ${payload.business_name || payload.first_name}`
          : `New Lead: ${payload.business_name} — ${payload.primary_goal || "Discovery Call"}`;

  const emailPromise = (async () => {
    try {
      const resendKey = process.env.RESEND_API_KEY;
      if (!resendKey) {
        logger.error("RESEND_API_KEY not set");
        return;
      }
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "noreply@graylockdigital.com",
        to: recipients,
        replyTo: payload.email,
        subject,
        text: emailBody,
      });
      logger.info({ email: payload.email }, "Lead email sent successfully");
    } catch (err) {
      logger.error({ err }, "Failed to send lead email via Resend");
    }
  })();

  const gosPromise = (async () => {
    try {
      const gosUrl = process.env.GRAYLOCK_API_URL;
      if (!gosUrl) {
        logger.warn("GRAYLOCK_API_URL not set, skipping GOS webhook");
        return;
      }
      const response = await fetch(`${gosUrl}/api/webhook/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: payload.first_name,
          businessName: payload.business_name,
          email: payload.email,
          phone: payload.phone || "",
          note: payload.note || "",
          serviceArea: payload.service_area || "",
          // Omitted entirely when the short form didn't ask.
          hasWebsite: payload.has_website,
          websiteUrl: payload.website_url || "",
          primaryGoal: payload.primary_goal || "",
          idealCustomer: payload.ideal_customer || "",
          brandingNotes: payload.branding_notes || "",
          heardAboutUs: payload.heard_about_us || "",
          source: "graylockdigital.com",
          landingPage: payload.landing_page || "",
          submittedAt: submittedAt,
          utmSource: payload.utm_source || "",
          utmMedium: payload.utm_medium || "",
          utmCampaign: payload.utm_campaign || "",
          ...(isRealtorLead
            ? {
                industry: payload.industry || "real-estate",
                leadSourceLabel: "Realtor Landing Page",
                landingPage: payload.landing_page || "/websites-for-realtors",
                role: payload.role || "",
                market: payload.market || "",
                mls: payload.mls || "",
                needPropertySearch: payload.need_property_search || "",
                launchTiming: payload.launch_timing || "",
                intent: payload.intent || "",
                referrer: payload.referrer || "",
                localMls: payload.local_mls || "",
                idxNeed: payload.idx_need || "",
                realtorGoals: payload.realtor_goals || "",
              }
            : {}),
          ...(isWellDrillerLead
            ? {
                industry: payload.industry || "well-drilling",
                leadSourceLabel: "Well Driller Landing Page",
                landingPage: payload.landing_page || "/websites-for-well-drillers",
                market: payload.market || "",
                rep: payload.rep || "",
                // "source" above stays the site origin; the sales-campaign
                // source param rides separately.
                campaignSource: payload.source || "",
                mainServices,
                desiredJobs: payload.desired_jobs || "",
                websiteGoal: payload.website_goal || "",
                statedGoal: payload.stated_goal || "",
                intent: payload.intent || "",
                preferredContactMethod: payload.preferred_contact_method || "",
                referrer: payload.referrer || "",
                utmSource: payload.utm_source || "",
                utmMedium: payload.utm_medium || "",
                utmCampaign: payload.utm_campaign || "",
              }
            : {}),
          ...(isCabinetMakerLead
            ? {
                industry: payload.industry || "cabinet-making",
                leadSourceLabel: "Cabinet Maker Landing Page",
                landingPage: payload.landing_page || "/websites-for-cabinet-makers",
                market: payload.market || "",
                rep: payload.rep || "",
                // "source" above stays the site origin; the sales-campaign
                // source param rides separately.
                campaignSource: payload.source || "",
                mainProjectTypes,
                desiredOutcomes,
                launchTiming: payload.launch_timing || "",
                intent: payload.intent || "",
                referrer: payload.referrer || "",
                utmSource: payload.utm_source || "",
                utmMedium: payload.utm_medium || "",
                utmCampaign: payload.utm_campaign || "",
              }
            : {}),
          ...(isAuctioneerLead
            ? {
                industry: payload.industry || "auctioneering",
                leadSourceLabel: "Auctioneer Landing Page",
                landingPage: payload.landing_page || "/websites-for-auctioneers",
                market: payload.market || "",
                rep: payload.rep || "",
                // "source" above stays the site origin; the sales-campaign
                // source param rides separately.
                campaignSource: payload.source || "",
                auctionTypes,
                desiredOutcomes,
                launchTiming: payload.launch_timing || "",
                intent: payload.intent || "",
                referrer: payload.referrer || "",
                utmSource: payload.utm_source || "",
                utmMedium: payload.utm_medium || "",
                utmCampaign: payload.utm_campaign || "",
              }
            : {}),
        }),
      });
      const responseBody = await response.text();
      logger.info({ status: response.status, body: responseBody }, "GOS webhook response");
    } catch (err) {
      logger.error({ err }, "Failed to POST to GOS webhook");
    }
  })();

  await Promise.allSettled([emailPromise, gosPromise]);

  res.json({ success: true });
});

export default leadsRouter;
