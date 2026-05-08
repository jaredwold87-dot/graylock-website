import { UserCheck, FileText, BarChart3, MessageCircle } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: UserCheck,
    subheading: "Your compliance reviewer is part of the process",
    body: "For attorneys, every state bar has its own advertising rules — sometimes including specific disclaimer language, font sizes, or prohibited testimonials. For SEC- or state-registered advisors, your firm has a Chief Compliance Officer or compliance reviewer who needs to sign off on public-facing claims. Our process builds in their review at the right stages, with copy delivered in formats they can comment on directly.",
  },
  {
    icon: FileText,
    subheading: "Disclaimers and notices, ready to plug in",
    body: "Most regulated professions require specific disclaimers — “Attorney Advertising,” “Past results do not guarantee future outcomes,” “Investment advisory services offered through [registered entity],” and so on. We’ve built templates for the most common requirements; your compliance reviewer specifies which apply, and we implement them site-wide.",
  },
  {
    icon: BarChart3,
    subheading: "Performance, results, and testimonials handled carefully",
    body: "The SEC Marketing Rule specifically governs testimonials, endorsements, and performance advertising on advisor websites. State bars place their own restrictions on case results and client testimonials. We don’t publish that content without your compliance reviewer’s explicit sign-off, and we keep records of what was approved.",
  },
  {
    icon: MessageCircle,
    subheading: "Engagement language that doesn’t accidentally form a relationship",
    body: "Contact forms and “book a consultation” workflows on attorney sites can inadvertently create the appearance of an attorney-client relationship — which has real implications for conflicts checks and confidentiality. Our intake patterns include the disclaimers your bar requires and route inquiries appropriately.",
  },
];

export default function LocalServiceBusinessesComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="BUILT FOR TRUST-BASED PROFESSIONALS"
      heading="How we build for trust-based professionals — law, finance, and beyond."
      lead="Attorneys, financial advisors, and other licensed professionals work under some of the strictest advertising rules in the economy — state bar associations, the SEC’s Marketing Rule, FINRA, and a long list of state-specific requirements. The rules in these professions vary so much by state and credential that no agency should claim to know all of them in advance. What we do bring is a build process that works alongside your compliance reviewer instead of around them."
      items={items}
      closing="Your compliance reviewer is the authority. Our role is to make sure your website is the easiest part of their job — not the hardest."
      showFullApproachLink
    />
  );
}
