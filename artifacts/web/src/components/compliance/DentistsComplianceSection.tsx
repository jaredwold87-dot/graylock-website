import { BadgeCheck, Camera, Wallet, Tag, Baby } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: BadgeCheck,
    subheading: "Specialty designations only where earned",
    body: "“Orthodontist,” “endodontist,” “periodontist,” “oral surgeon,” “pediatric dentist,” “prosthodontist” — these titles are restricted to dentists who have completed accredited specialty training. General dentists who provide these services can describe the service without claiming the specialty title. We make that distinction.",
  },
  {
    icon: Camera,
    subheading: "Before-and-after galleries with proper documentation",
    body: "Photos of patient outcomes carry HIPAA implications, plus most state dental boards require disclaimers about typical results. We build the gallery with the consent documentation referenced and the disclaimer in place.",
  },
  {
    icon: Wallet,
    subheading: "Insurance language that’s actually accurate",
    body: "“We accept all insurance” is essentially never true and many state boards treat it as deceptive. We write “in-network with: [specific list]” and “we file claims with most major insurers” — language that’s honest and that doesn’t trigger a complaint.",
  },
  {
    icon: Tag,
    subheading: "Promotional pricing with full disclosure",
    body: "“$XX exam,” “free whitening,” “new patient special” — most states require disclosure of any additional charges that may apply. The headline price and the full picture appear on the same page.",
  },
  {
    icon: Baby,
    subheading: "Pediatric dentistry and COPPA awareness",
    body: "If the practice sees children, the website is built so we don’t collect a child’s information directly — every form routes through a parent. This keeps the site outside the scope of the Children’s Online Privacy Protection Act.",
  },
];

export default function DentistsComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="DENTAL-SPECIFIC"
      heading="And the rules specific to dental practice."
      lead="Dental advertising rules are state-specific but share common themes — restrictions on “specialist” claims to formally recognized specialties, careful handling of before-and-after photos, accurate insurance language, and disclosure of pricing for promotional offers. The American Dental Association’s Code of Ethics provides the backbone; your state board fills in the specifics."
      items={items}
      closing="Your state dental board, the ADA Code of Ethics, and the FTC all have a hand in what your website can say. We work to all three."
      showFullApproachLink
    />
  );
}
