import { FileText, Receipt, BadgeCheck, Users, ShoppingCart } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: FileText,
    subheading: "Prescription rights, never obscured",
    body: "The FTC Eyeglass Rule and Contact Lens Rule require automatic provision of prescriptions to patients at no extra charge. Your website never suggests otherwise \u2014 no language implying a patient has to buy glasses or contacts from the practice to receive their Rx.",
  },
  {
    icon: Receipt,
    subheading: "Pricing offers with full disclosure",
    body: "\u201C$99 eye exam\u201D and similar promotional pricing must include any additional charges that may apply \u2014 contact lens fitting fees, refraction fees, dilation fees. We disclose those clearly on the same page as the headline price.",
  },
  {
    icon: BadgeCheck,
    subheading: "Specialty claims tied to actual recognition",
    body: "Vision therapy, low vision rehabilitation, behavioral optometry \u2014 specialty claims appear on your site only when supported by the credentials your state board recognizes.",
  },
  {
    icon: Users,
    subheading: "Co-management language that doesn\u2019t overstate scope",
    body: "Optometrists co-manage with ophthalmology in many cases, but the website never implies the optometrist performs surgery. The line is subtle and we know where it sits.",
  },
  {
    icon: ShoppingCart,
    subheading: "Telehealth and e-commerce considerations",
    body: "If the practice sells contacts or glasses online, additional FTC rules apply. We build to those rules from the start.",
  },
];

export default function OptometristsComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="OPTOMETRY-SPECIFIC"
      heading="And the rules specific to optometric practice."
      lead="Optometric advertising sits at the intersection of state optometry board rules and two specific FTC rules \u2014 the Eyeglass Rule and the Contact Lens Rule \u2014 that govern how prescriptions are provided to patients. The website itself can violate these rules without anyone realizing it."
      items={items}
      closing="Your state optometry board\u2019s advertising rules and the FTC\u2019s Eyeglass and Contact Lens Rules form a layered framework. We build for all of it, not just the parts that are obvious."
    />
  );
}
