import { Route, ClipboardCheck, AlertCircle, BadgeCheck } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: Route,
    subheading: "Direct access reflected accurately",
    body: "We confirm your state\u2019s direct-access status before writing the \u201Chow to start care\u201D section of your site. Overstating direct access (telling patients they can come straight to PT in a state that requires a referral) is a state-board issue. Understating it (sending patients through unnecessary steps) costs you patients.",
  },
  {
    icon: ClipboardCheck,
    subheading: "Scope-of-practice claims that match your state",
    body: "Dry needling, pelvic floor therapy, chiropractic-adjacent services \u2014 what a PT can advertise depends on the state. We check your state\u2019s scope-of-practice rules before publishing service pages, instead of using a generic template that might describe work you can\u2019t legally provide.",
  },
  {
    icon: AlertCircle,
    subheading: "No outcome guarantees, careful language about results",
    body: "\u201CGet back on the field in 6 weeks\u201D sounds like marketing; to a state board, it\u2019s an outcome guarantee. We use language that describes what the practice does and the kinds of recoveries patients have experienced, without making promises about any individual patient\u2019s outcome.",
  },
  {
    icon: BadgeCheck,
    subheading: "Specialty certifications credited correctly",
    body: "Board-certified specialties (OCS, SCS, GCS, etc.) and other recognized credentials appear on the site only when they\u2019re current and accurate, with the certifying body named. We don\u2019t let \u201Csports specialist\u201D appear next to a name where the board certification doesn\u2019t support it.",
  },
];

export default function PhysicalTherapistsComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="PT-SPECIFIC"
      heading="And the rules specific to physical therapy practice."
      lead="Physical therapy advertising rules vary more by state than most healthcare professions. Direct access \u2014 whether a patient can see a PT without a physician referral \u2014 is state-specific and changes how you can position your services. Scope of practice is state-specific. And outcome guarantees, whether stated or implied, draw scrutiny from both the FTC and your state board."
      items={items}
      closing="Your scope of practice is defined by your state board. Your website should reflect it \u2014 not stretch it."
      showFullApproachLink
    />
  );
}
