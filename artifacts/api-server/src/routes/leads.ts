import { Router, type Request, type Response } from "express";
import { Resend } from "resend";
import { logger } from "../lib/logger";

const leadsRouter = Router();

interface LeadPayload {
  first_name: string;
  business_name: string;
  email: string;
  phone: string;
  service_area: string;
  has_website: boolean;
  website_url: string;
  primary_goal: string;
  ideal_customer: string;
  branding_notes: string;
  heard_about_us: string;
}

leadsRouter.post("/leads", async (req: Request, res: Response) => {
  const payload: LeadPayload = req.body;
  const submittedAt = new Date().toISOString();

  const emailBody = `New website evaluation request from graylockdigital.com

Name: ${payload.first_name}
Business: ${payload.business_name}
Email: ${payload.email}
Phone: ${payload.phone || "Not provided"}
Service Area: ${payload.service_area || "Not provided"}
Has website: ${payload.has_website ? "Yes" : "No"}
Website URL: ${payload.website_url || "None"}
Primary goal: ${payload.primary_goal || "Not provided"}
Ideal customer: ${payload.ideal_customer || "Not provided"}
Branding notes: ${payload.branding_notes || "Not provided"}
Heard about us: ${payload.heard_about_us || "Not provided"}

Submitted: ${submittedAt}

---
Reply directly to this email to reach the lead.
Or log in to the GOS to view full lead record.`;

  const recipients = ["jared@graylockdigital.com"];
  if (process.env.TEAM_EMAIL_TIM) {
    recipients.push(process.env.TEAM_EMAIL_TIM);
  }

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
        subject: `New Lead: ${payload.business_name} — ${payload.primary_goal || "Website Review"}`,
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
          serviceArea: payload.service_area || "",
          hasWebsite: payload.has_website,
          websiteUrl: payload.website_url || "",
          primaryGoal: payload.primary_goal || "",
          idealCustomer: payload.ideal_customer || "",
          brandingNotes: payload.branding_notes || "",
          heardAboutUs: payload.heard_about_us || "",
          source: "graylockdigital.com",
          submittedAt: submittedAt,
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
