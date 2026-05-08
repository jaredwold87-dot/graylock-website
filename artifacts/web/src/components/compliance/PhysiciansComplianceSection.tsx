import { Award, MessageSquare, FileSearch, Video, Sparkles } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: Award,
    subheading: "Board certification, displayed exactly as required",
    body: "“Board certified” appears on your site only with the certifying board explicitly named (e.g., “Board certified in internal medicine by the American Board of Internal Medicine”). Naming the board is required by FSMB-aligned rules in most states; “board certified” alone is not enough.",
  },
  {
    icon: MessageSquare,
    subheading: "Patient testimonials handled by your state’s rule",
    body: "Some states (notably New York) prohibit patient testimonials in physician advertising entirely — regardless of patient consent. Most permit them with substantial caveats: HIPAA authorization, no implied guarantees, no atypical results without context. Our default for physician sites in restrictive states is to not include patient testimonials at all; in permissive states, we structure them with the documentation and disclaimers required.",
  },
  {
    icon: FileSearch,
    subheading: "Substantiation for every objective claim",
    body: "“Award-winning,” “the area’s top heart surgeon,” “30 years of experience,” “more than 5,000 procedures” — all objective claims that need a source on file before they appear on your site. The FTC and your state board both require substantiation; we capture it as part of the build.",
  },
  {
    icon: Video,
    subheading: "Telehealth scope stated with state-by-state precision",
    body: "If you offer virtual visits, the site lists every state you’re licensed in. Patient location at the time of the visit determines which state’s medical practice law applies — getting this wrong is one of the most common compliance failures in modern practice.",
  },
  {
    icon: Sparkles,
    subheading: "Cosmetic and aesthetic services handled with extra care",
    body: "Plastic surgery, dermatology, cosmetic-adjacent specialties draw the most state-board scrutiny and the most FTC enforcement. Before-and-after photos, weight-loss claims, and outcome statements all need substantiation — and we build accordingly.",
  },
];

export default function PhysiciansComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="PHYSICIAN-SPECIFIC"
      heading="And the rules specific to physician practice."
      lead="Physician advertising is governed by your state medical board, which typically follows model rules from the Federation of State Medical Boards. The American Medical Association’s Code of Medical Ethics provides ethical guidance. The FTC overlays substantiation requirements. And board-certification claims have their own specific rules tied to ABMS, AOA-BOS, or equivalent certifying bodies. There is more here than a generic web shop sees."
      items={items}
      closing="Your state medical board has the final say on what your advertising can claim. We build your site so that every claim on it has a defensible source — and so the parts most likely to draw scrutiny draw the least."
      showFullApproachLink
    />
  );
}
