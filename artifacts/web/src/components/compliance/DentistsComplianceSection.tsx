import { BadgeCheck, Camera, Wallet, Tag, Baby } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: BadgeCheck,
    subheading: "Specialty designations only where earned",
    body: "\u201COrthodontist,\u201D \u201Cendodontist,\u201D \u201Cperiodontist,\u201D \u201Coral surgeon,\u201D \u201Cpediatric dentist,\u201D \u201Cprosthodontist\u201D \u2014 these titles are restricted to dentists who have completed accredited specialty training. General dentists who provide these services can describe the service without claiming the specialty title. We make that distinction.",
  },
  {
    icon: Camera,
    subheading: "Before-and-after galleries with proper documentation",
    body: "Photos of patient outcomes carry HIPAA implications, plus most state dental boards require disclaimers about typical results. We build the gallery with the consent documentation referenced and the disclaimer in place.",
  },
  {
    icon: Wallet,
    subheading: "Insurance language that\u2019s actually accurate",
    body: "\u201CWe accept all insurance\u201D is essentially never true and many state boards treat it as deceptive. We write \u201Cin-network with: [specific list]\u201D and \u201Cwe file claims with most major insurers\u201D \u2014 language that\u2019s honest and that doesn\u2019t trigger a complaint.",
  },
  {
    icon: Tag,
    subheading: "Promotional pricing with full disclosure",
    body: "\u201C$XX exam,\u201D \u201Cfree whitening,\u201D \u201Cnew patient special\u201D \u2014 most states require disclosure of any additional charges that may apply. The headline price and the full picture appear on the same page.",
  },
  {
    icon: Baby,
    subheading: "Pediatric dentistry and COPPA awareness",
    body: "If the practice sees children, the website is built so we don\u2019t collect a child\u2019s information directly \u2014 every form routes through a parent. This keeps the site outside the scope of the Children\u2019s Online Privacy Protection Act.",
  },
];

export default function DentistsComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="DENTAL-SPECIFIC"
      heading="And the rules specific to dental practice."
      lead="Dental advertising rules are state-specific but share common themes \u2014 restrictions on \u201Cspecialist\u201D claims to formally recognized specialties, careful handling of before-and-after photos, accurate insurance language, and disclosure of pricing for promotional offers. The American Dental Association\u2019s Code of Ethics provides the backbone; your state board fills in the specifics."
      items={items}
      closing="Your state dental board, the ADA Code of Ethics, and the FTC all have a hand in what your website can say. We work to all three."
    />
  );
}
