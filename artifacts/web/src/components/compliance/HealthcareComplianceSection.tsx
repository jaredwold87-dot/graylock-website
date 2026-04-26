import { Lock, EyeOff, Cookie, FileText, Accessibility } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: Lock,
    subheading: "Forms designed to stay outside HIPAA's scope",
    body: [
      "Our contact forms are deliberately designed not to collect Protected Health Information. They ask for a name, a way to reach the person, and a general reason for inquiry — never symptoms, diagnoses, treatment history, or insurance details. By keeping PHI out of the website entirely, we reduce your risk surface and avoid the complications that come with hosting protected data.",
      "When a prospective patient does need to share medical information, we route them to your existing patient portal, EHR system, or HIPAA-compliant intake platform — the systems your practice has already vetted for that purpose.",
    ],
  },
  {
    icon: EyeOff,
    subheading: "Privacy-first analytics, not Meta Pixel",
    body: [
      "Standard analytics and advertising tools — Google Analytics with default settings, Meta Pixel, TikTok Pixel, conversion tags from ad networks — can transmit information to third parties that, when combined with the page a visitor was on, becomes Protected Health Information in the eyes of HHS. Practices have settled cases for putting Meta Pixel on a page describing a specific medical condition.",
      "Graylock healthcare sites use privacy-respecting analytics by default and never place ad-network pixels on pages that describe specific conditions, treatments, or diagnoses. You still get the data you need to understand how your site is performing — without the regulatory risk.",
    ],
  },
  {
    icon: Cookie,
    subheading: "A consent layer configured for healthcare",
    body: "Our cookie banner and consent management setup is configured for the strictest privacy law that applies to your patient population, and is set up to honor browser-level signals like Global Privacy Control automatically. For healthcare specifically, we err toward the side of asking permission before any non-essential script runs.",
  },
  {
    icon: FileText,
    subheading: "Notice of Privacy Practices, easy to find",
    body: "HIPAA requires every covered healthcare provider to make a Notice of Privacy Practices available to patients. We link your Notice from the footer of every page and from every form — so a patient looking for it never has to search.",
  },
  {
    icon: Accessibility,
    subheading: "Accessibility built to WCAG 2.1 AA",
    body: "ADA-related lawsuits against healthcare websites have grown every year, and HHS now expects providers receiving federal funds to meet WCAG 2.1 Level AA standards. We build to that standard from the start — semantic HTML, proper alt text, keyboard navigation, color contrast, captioned video — instead of bolting on an overlay widget that doesn't actually fix anything.",
  },
];

export default function HealthcareComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="BUILT FOR HEALTHCARE"
      heading="How we build a healthcare website that respects patient privacy from the ground up."
      lead="Patients judge a healthcare practice by its website before they ever walk in the door. So do regulators. The HHS Office for Civil Rights has been actively enforcing privacy rules around website tracking technologies since 2022 — sending warning letters to over a hundred hospital systems and telehealth providers, and pursuing settlements with practices whose websites quietly leaked patient data to advertising platforms. The bar has moved, and most healthcare sites haven't caught up."
      items={items}
      closing="We're not your privacy officer and we're not your attorney. Our role is to make sure the website itself doesn't create privacy risks your practice has to defend later."
    />
  );
}
