import { Router, type Request, type Response } from "express";
import { Resend } from "resend";
import { logger } from "../lib/logger";

const demoRequestRouter = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface DemoRequestPayload {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  business_name?: string;
  website_url?: string;
  preferred_date?: string;
  preferred_time?: string;
  timezone?: string;
  notes?: string;
  source?: string;
}

demoRequestRouter.post("/demo-request", async (req: Request, res: Response) => {
  const payload: DemoRequestPayload = req.body ?? {};

  const firstName = (payload.first_name || "").toString().trim();
  const lastName = (payload.last_name || "").toString().trim();
  const email = (payload.email || "").toString().trim();
  const phone = (payload.phone || "").toString().trim();
  const businessName = (payload.business_name || "").toString().trim();
  const websiteUrl = (payload.website_url || "").toString().trim();
  const preferredDate = (payload.preferred_date || "").toString().trim();
  const preferredTime = (payload.preferred_time || "").toString().trim();
  const timezone = (payload.timezone || "").toString().trim();
  const notes = (payload.notes || "").toString().trim();
  const source = (payload.source || "home-builders-funnel").toString();

  if (!firstName) {
    return res.status(400).json({ success: false, error: "First name is required." });
  }
  if (!EMAIL_RE.test(email.toLowerCase())) {
    return res.status(400).json({ success: false, error: "Please enter a valid email address." });
  }
  if (!businessName) {
    return res.status(400).json({ success: false, error: "Business name is required." });
  }
  if (!websiteUrl) {
    return res.status(400).json({ success: false, error: "Current website URL is required (enter \"none\" if you don't have one yet)." });
  }

  const submittedAt = new Date().toISOString();
  const fullName = lastName ? `${firstName} ${lastName}` : firstName;

  const teamSubject = `New Demo Request: ${businessName} (${fullName})`;
  const teamBody = `New free homepage demo request from graylockdigital.com

Name: ${fullName}
Business: ${businessName}
Current Website: ${websiteUrl}
Email: ${email}
Phone: ${phone || "—"}

${preferredDate || preferredTime ? `Preferred Meeting Date: ${preferredDate || "—"}
Preferred Meeting Time: ${preferredTime || "—"}${timezone ? ` (${timezone})` : ""}` : `Time Zone: ${timezone || "—"}`}

Notes: ${notes || "None"}

Source: ${source}
Submitted: ${submittedAt}

---
Reply directly to this email to reach the lead, or schedule the meeting and send them a calendar invite.`;

  const recipients = ["jared@graylockdigital.com"];
  if (process.env.TEAM_EMAIL_TIM) {
    recipients.push(process.env.TEAM_EMAIL_TIM);
  }

  const emailPromise = (async () => {
    try {
      const resendKey = process.env.RESEND_API_KEY;
      if (!resendKey) {
        logger.error("RESEND_API_KEY not set, skipping demo request team notification");
        return;
      }
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "noreply@graylockdigital.com",
        to: recipients,
        replyTo: email,
        subject: teamSubject,
        text: teamBody,
      });
      logger.info({ email, businessName }, "Demo request team email sent");
    } catch (err) {
      logger.error({ err }, "Failed to send demo request team email");
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
          firstName,
          businessName,
          email,
          phone,
          serviceArea: "",
          hasWebsite: websiteUrl.toLowerCase() !== "none",
          websiteUrl,
          primaryGoal: "Free custom homepage demo",
          idealCustomer: "",
          brandingNotes: notes,
          heardAboutUs: "",
          source: "home-builders-funnel",
          submittedAt,
        }),
      });
      const responseBody = await response.text();
      logger.info({ status: response.status, body: responseBody }, "GOS demo request webhook response");
    } catch (err) {
      logger.error({ err }, "Failed to POST demo request to GOS webhook");
    }
  })();

  await Promise.allSettled([emailPromise, gosPromise]);

  return res.json({ success: true });
});

export default demoRequestRouter;
