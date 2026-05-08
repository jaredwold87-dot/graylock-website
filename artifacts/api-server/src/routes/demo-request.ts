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
  if (!phone) {
    return res.status(400).json({ success: false, error: "Phone number is required." });
  }
  if (!businessName) {
    return res.status(400).json({ success: false, error: "Business name is required." });
  }
  if (!preferredDate) {
    return res.status(400).json({ success: false, error: "Preferred date is required." });
  }
  if (!preferredTime) {
    return res.status(400).json({ success: false, error: "Preferred time is required." });
  }

  const submittedAt = new Date().toISOString();
  const fullName = lastName ? `${firstName} ${lastName}` : firstName;

  const teamSubject = `New Demo Request: ${businessName} (${fullName})`;
  const teamBody = `New free homepage demo request from graylockdigital.com

Name: ${fullName}
Business: ${businessName}
Email: ${email}
Phone: ${phone}

Preferred Meeting Date: ${preferredDate}
Preferred Meeting Time: ${preferredTime}${timezone ? ` (${timezone})` : ""}

Notes: ${notes || "None"}

Source: ${source}
Submitted: ${submittedAt}

---
Reply directly to this email to reach the lead, or schedule the meeting and send them a calendar invite.`;

  const recipients: string[] = [];
  if (process.env.TEAM_EMAIL_TIM) {
    recipients.push(process.env.TEAM_EMAIL_TIM);
  } else {
    recipients.push("jared@graylockdigital.com");
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    logger.error("RESEND_API_KEY not set, cannot send demo request notification");
    return res.status(500).json({ success: false, error: "Email service is not configured. Please contact us directly at hello@graylockdigital.com." });
  }

  const resend = new Resend(resendKey);

  try {
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
    return res.status(500).json({ success: false, error: "We couldn't send your request right now. Please try again or email us at hello@graylockdigital.com." });
  }

  res.json({ success: true });
});

export default demoRequestRouter;
