import { BadgeCheck, AlertTriangle, HardHat, Leaf, ClipboardCheck } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: BadgeCheck,
    subheading: "Every license, displayed by trade",
    body: "Your master license, every trade-specific license your team holds, and any specialty certifications all appear in the footer with their numbers and issuing jurisdictions. Each capability page is reviewed against the licenses that actually authorize that work \u2014 so an HVAC capability page references HVAC licensure, not your general contractor registration.",
  },
  {
    icon: AlertTriangle,
    subheading: "Asbestos and environmental work, handled correctly",
    body: "If you do asbestos abatement, lead remediation, or other regulated environmental work, the website carries the certification numbers your state requires for advertising those services. In states like California, an asbestos ad without both the state asbestos certification number and the work registration number is a $100\u2013$1,500 civil penalty per violation \u2014 we know that, and we don\u2019t let you ship a page that triggers it.",
  },
  {
    icon: HardHat,
    subheading: "Safety claims with actual records behind them",
    body: "\u201CZero injuries since 2020,\u201D \u201Caward-winning safety record,\u201D \u201COSHA-compliant\u201D \u2014 all claims that the FTC and OSHA take seriously. Before any safety claim goes on your site, our build documentation captures the source: which OSHA logs, which awarding body, which audit. If anyone ever asks, the answer is ready.",
  },
  {
    icon: Leaf,
    subheading: "Environmental claims that hold up under FTC Green Guides",
    body: "\u201CGreen,\u201D \u201Csustainable,\u201D \u201CLEED-certified,\u201D \u201Ceco-friendly\u201D \u2014 the FTC\u2019s Green Guides at 16 C.F.R. Part 260 require these claims to be specific and substantiated. We don\u2019t write generic \u201Ceco-friendly\u201D copy; we write claims that point to specific certifications, projects, or measurable outcomes.",
  },
  {
    icon: ClipboardCheck,
    subheading: "Capabilities scoped to what you\u2019re actually licensed for",
    body: "It\u2019s surprisingly easy for a marketing-focused web shop to write services pages that imply work outside your licensed scope. We treat your capabilities page as the legal document it functionally is \u2014 every service listed maps to a license your team currently holds, and we update it when your licensure changes.",
  },
];

export default function IndustrialConstructionComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="BUILT FOR INDUSTRIAL & CONSTRUCTION"
      heading="How we build an industrial construction website that respects every license you hold."
      lead="Industrial contractors and trades operate under more layered licensure than almost any other small business. State contractor registration. Trade-specific licenses for electricians, plumbers, mechanical contractors, structural specialists. OSHA recordkeeping that supports any safety claim you make. Specialty certifications like asbestos abatement that come with their own advertising rules. A website that ignores any of those layers is a citation waiting to happen \u2014 your competitors know this, and so do the regulators."
      items={items}
      closing="Your licenses, certifications, and OSHA records are yours to maintain. Our job is to make sure your website tells your story without ever overstating what those credentials authorize."
    />
  );
}
