import { Ban, Tag, MessageSquare, Type, Wallet } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: Ban,
    subheading: "\u201CCure\u201D claims and similar language, avoided by design",
    body: "Most state chiropractic boards prohibit or heavily restrict claims that chiropractic care \u201Ccures\u201D any condition. We use language that describes what the practice does \u2014 manage, treat, relieve, support \u2014 instead of language that implies guaranteed outcomes. Every condition page is reviewed against your state\u2019s specific rule before publication.",
  },
  {
    icon: Tag,
    subheading: "Free-exam and discount offers handled correctly",
    body: "Free spinal exam, free consultation, $XX special \u2014 these offers are tightly regulated in many states. Your state may require disclosure of any additional charges that could result, or specific language about insurance billing. We write these offers to your state\u2019s rule, not a generic template that might trigger a citation.",
  },
  {
    icon: MessageSquare,
    subheading: "Testimonials, with the documentation each state requires",
    body: "Some state boards permit chiropractic testimonials with patient consent and disclaimers about typical results. Some, like Ohio, require specific written consent to the exact wording, retained for one year after the last publication. Our build process captures consent at the level your state requires, and we keep the records for the duration the rule specifies.",
  },
  {
    icon: Type,
    subheading: "Required terminology where states mandate it",
    body: "Some state codes require the words \u201Cchiropractic,\u201D \u201Cchiropractor,\u201D \u201Cdoctor of chiropractic,\u201D or \u201Cchiropractic physician\u201D to appear in advertising in a specific font size. We know which states require this and we build it in \u2014 not as small print, but as a design element that does the job correctly.",
  },
  {
    icon: Wallet,
    subheading: "Insurance and copay language handled by rule",
    body: "Many states prohibit advertising that you\u2019ll waive a deductible or copayment. We don\u2019t write that copy, even when a practice asks for it \u2014 and we explain why so the practice understands the boundary.",
  },
];

export default function ChiropractorsComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="CHIROPRACTIC-SPECIFIC"
      heading="And the rules specific to chiropractic advertising."
      lead="Chiropractic advertising is among the most heavily regulated in healthcare \u2014 for historical reasons rooted in concerns about overstated claims of cure. State chiropractic boards across the country prohibit specific words and phrases, regulate free-exam offers, govern testimonials in detail, and set rules for telemarketing. A website that ignores those specifics is a state-board complaint waiting to be filed."
      items={items}
      closing="Your state board has been writing chiropractic advertising rules for decades. We\u2019ve read them. Most web shops haven\u2019t."
      showFullApproachLink
    />
  );
}
