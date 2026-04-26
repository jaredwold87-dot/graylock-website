import { UserCheck, FileText, BarChart3, MessageCircle } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: UserCheck,
    subheading: "Your compliance reviewer is part of the process",
    body: "For attorneys, every state bar has its own advertising rules \u2014 sometimes including specific disclaimer language, font sizes, or prohibited testimonials. For SEC- or state-registered advisors, your firm has a Chief Compliance Officer or compliance reviewer who needs to sign off on public-facing claims. Our process builds in their review at the right stages, with copy delivered in formats they can comment on directly.",
  },
  {
    icon: FileText,
    subheading: "Disclaimers and notices, ready to plug in",
    body: "Most regulated professions require specific disclaimers \u2014 \u201CAttorney Advertising,\u201D \u201CPast results do not guarantee future outcomes,\u201D \u201CInvestment advisory services offered through [registered entity],\u201D and so on. We\u2019ve built templates for the most common requirements; your compliance reviewer specifies which apply, and we implement them site-wide.",
  },
  {
    icon: BarChart3,
    subheading: "Performance, results, and testimonials handled carefully",
    body: "The SEC Marketing Rule specifically governs testimonials, endorsements, and performance advertising on advisor websites. State bars place their own restrictions on case results and client testimonials. We don\u2019t publish that content without your compliance reviewer\u2019s explicit sign-off, and we keep records of what was approved.",
  },
  {
    icon: MessageCircle,
    subheading: "Engagement language that doesn\u2019t accidentally form a relationship",
    body: "Contact forms and \u201Cbook a consultation\u201D workflows on attorney sites can inadvertently create the appearance of an attorney-client relationship \u2014 which has real implications for conflicts checks and confidentiality. Our intake patterns include the disclaimers your bar requires and route inquiries appropriately.",
  },
];

export default function LocalServiceBusinessesComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="BUILT FOR TRUST-BASED PROFESSIONALS"
      heading="How we build for trust-based professionals \u2014 law, finance, and beyond."
      lead="Attorneys, financial advisors, and other licensed professionals work under some of the strictest advertising rules in the economy \u2014 state bar associations, the SEC\u2019s Marketing Rule, FINRA, and a long list of state-specific requirements. The rules in these professions vary so much by state and credential that no agency should claim to know all of them in advance. What we do bring is a build process that works alongside your compliance reviewer instead of around them."
      items={items}
      closing="Your compliance reviewer is the authority. Our role is to make sure your website is the easiest part of their job \u2014 not the hardest."
    />
  );
}
