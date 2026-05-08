import { Route, ClipboardCheck, AlertCircle, BadgeCheck } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: Route,
    subheading: "Direct access reflected accurately",
    body: "We confirm your state’s direct-access status before writing the “how to start care” section of your site. Overstating direct access (telling patients they can come straight to PT in a state that requires a referral) is a state-board issue. Understating it (sending patients through unnecessary steps) costs you patients.",
  },
  {
    icon: ClipboardCheck,
    subheading: "Scope-of-practice claims that match your state",
    body: "Dry needling, pelvic floor therapy, chiropractic-adjacent services — what a PT can advertise depends on the state. We check your state’s scope-of-practice rules before publishing service pages, instead of using a generic template that might describe work you can’t legally provide.",
  },
  {
    icon: AlertCircle,
    subheading: "No outcome guarantees, careful language about results",
    body: "“Get back on the field in 6 weeks” sounds like marketing; to a state board, it’s an outcome guarantee. We use language that describes what the practice does and the kinds of recoveries patients have experienced, without making promises about any individual patient’s outcome.",
  },
  {
    icon: BadgeCheck,
    subheading: "Specialty certifications credited correctly",
    body: "Board-certified specialties (OCS, SCS, GCS, etc.) and other recognized credentials appear on the site only when they’re current and accurate, with the certifying body named. We don’t let “sports specialist” appear next to a name where the board certification doesn’t support it.",
  },
];

export default function PhysicalTherapistsComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="PT-SPECIFIC"
      heading="And the rules specific to physical therapy practice."
      lead="Physical therapy advertising rules vary more by state than most healthcare professions. Direct access — whether a patient can see a PT without a physician referral — is state-specific and changes how you can position your services. Scope of practice is state-specific. And outcome guarantees, whether stated or implied, draw scrutiny from both the FTC and your state board."
      items={items}
      closing="Your scope of practice is defined by your state board. Your website should reflect it — not stretch it."
      showFullApproachLink
    />
  );
}
