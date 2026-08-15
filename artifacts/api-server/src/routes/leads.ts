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
  submitted_at?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

leadsRouter.post("/leads", async (req: Request, res: Response) => {
  const payload: LeadPayload = req.body;
  const submittedAt = payload.submitted_at || new Date().toISOString();

  const isRealtorLead =
    payload.lead_source_label === "Realtor Landing Page" ||
    payload.industry === "real-estate";

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
        ...(payload.local_mls ? [`Local MLS: ${payload.local_mls}`] : []),
        ...(payload.idx_need ? [`Needs IDX property search: ${payload.idx_need}`] : []),
        ...(payload.realtor_goals ? [`Realtor goals: ${payload.realtor_goals}`] : []),
        ...(utmPairs.length ? [`UTM: ${utmPairs.join(", ")}`] : []),
      ].join("\n")
    : "";

  // Only render the fields the visitor actually provided — the quick
  // discovery-call form captures far less than the old wizard did.
  const detailLines = [
    `Name: ${payload.first_name}`,
    `Business: ${payload.business_name}`,
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

${detailLines.join("\n")}${realtorLines}

Submitted: ${submittedAt}

---
Reply directly to this email to reach the lead.
Or log in to the GOS to view full lead record.`;

  const recipients = ["jared@graylockdigital.com"];
  if (process.env.TEAM_EMAIL_TIM) {
    recipients.push(process.env.TEAM_EMAIL_TIM);
  }

  const subject = isRealtorLead
    ? `New Lead (Realtor Landing Page): ${payload.business_name}`
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
                localMls: payload.local_mls || "",
                idxNeed: payload.idx_need || "",
                realtorGoals: payload.realtor_goals || "",
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
