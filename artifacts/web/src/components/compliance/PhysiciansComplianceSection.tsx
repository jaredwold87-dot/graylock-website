import { Award, MessageSquare, FileSearch, Video, Sparkles } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: Award,
    subheading: "Board certification, displayed exactly as required",
    body: "\u201CBoard certified\u201D appears on your site only with the certifying board explicitly named (e.g., \u201CBoard certified in internal medicine by the American Board of Internal Medicine\u201D). Naming the board is required by FSMB-aligned rules in most states; \u201Cboard certified\u201D alone is not enough.",
  },
  {
    icon: MessageSquare,
    subheading: "Patient testimonials handled by your state\u2019s rule",
    body: "Some states (notably New York) prohibit patient testimonials in physician advertising entirely \u2014 regardless of patient consent. Most permit them with substantial caveats: HIPAA authorization, no implied guarantees, no atypical results without context. Our default for physician sites in restrictive states is to not include patient testimonials at all; in permissive states, we structure them with the documentation and disclaimers required.",
  },
  {
    icon: FileSearch,
    subheading: "Substantiation for every objective claim",
    body: "\u201CAward-winning,\u201D \u201Cthe area\u2019s top heart surgeon,\u201D \u201C30 years of experience,\u201D \u201Cmore than 5,000 procedures\u201D \u2014 all objective claims that need a source on file before they appear on your site. The FTC and your state board both require substantiation; we capture it as part of the build.",
  },
  {
    icon: Video,
    subheading: "Telehealth scope stated with state-by-state precision",
    body: "If you offer virtual visits, the site lists every state you\u2019re licensed in. Patient location at the time of the visit determines which state\u2019s medical practice law applies \u2014 getting this wrong is one of the most common compliance failures in modern practice.",
  },
  {
    icon: Sparkles,
    subheading: "Cosmetic and aesthetic services handled with extra care",
    body: "Plastic surgery, dermatology, cosmetic-adjacent specialties draw the most state-board scrutiny and the most FTC enforcement. Before-and-after photos, weight-loss claims, and outcome statements all need substantiation \u2014 and we build accordingly.",
  },
];

export default function PhysiciansComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="PHYSICIAN-SPECIFIC"
      heading="And the rules specific to physician practice."
      lead="Physician advertising is governed by your state medical board, which typically follows model rules from the Federation of State Medical Boards. The American Medical Association\u2019s Code of Medical Ethics provides ethical guidance. The FTC overlays substantiation requirements. And board-certification claims have their own specific rules tied to ABMS, AOA-BOS, or equivalent certifying bodies. There is more here than a generic web shop sees."
      items={items}
      closing="Your state medical board has the final say on what your advertising can claim. We build your site so that every claim on it has a defensible source \u2014 and so the parts most likely to draw scrutiny draw the least."
    />
  );
}
