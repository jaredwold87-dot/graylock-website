import { BadgeCheck, ClipboardCheck, FileCheck, ShieldCheck, Camera, Receipt } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: BadgeCheck,
    subheading: "License number, displayed correctly",
    body: "Your contractor registration or license number — and any specialty trade licenses your team holds — is displayed in the footer of every page, exactly the way your state board requires. The business name on the site matches the registered name on your license, exactly, because licensing boards have cited contractors for variations as small as adding \u201CLLC\u201D where it wasn\u2019t on the registration.",
  },
  {
    icon: ClipboardCheck,
    subheading: "Services that match your licensed scope",
    body: "We review every services page against your licensed classification. If you\u2019re a residential builder, we don\u2019t accidentally let you advertise commercial work. If your team includes a separately-licensed electrician or plumber, those licenses are credited specifically to the work they cover.",
  },
  {
    icon: FileCheck,
    subheading: "Claims you can actually back up",
    body: "\u201CAward-winning,\u201D \u201C30 years of experience,\u201D \u201Cthe area\u2019s most trusted builder\u201D \u2014 every objective claim on your site gets a substantiation note in our build documentation. If a board investigator or a competitor\u2019s attorney ever asks where the claim came from, the answer is on file before the site goes live.",
  },
  {
    icon: ShieldCheck,
    subheading: "\u201CBonded\u201D and similar language, handled by state rule",
    body: "Several states (California is the strictest) restrict or prohibit advertising the fact that you\u2019re bonded \u2014 the concern being that consumers misunderstand what a bond actually protects. We know the rule in your state and write the site accordingly, instead of using the boilerplate language a generic web shop would default to.",
  },
  {
    icon: Camera,
    subheading: "Project galleries with the right permissions",
    body: "Photos of completed homes \u2014 especially ones where the property is identifiable \u2014 should be published with written permission from the homeowner. Our build process includes a simple homeowner photo-release template you can use, and we keep track of which projects are cleared for public display.",
  },
  {
    icon: Receipt,
    subheading: "Pricing pages that don\u2019t trip the FTC junk-fee rule",
    body: "If you publish \u201Cstarting at\u201D pricing or fixed-fee packages, we make sure the displayed price reflects what a customer actually pays \u2014 including any mandatory add-ons. The FTC\u2019s 2025 rule on unfair fees is currently focused on lodging and ticketing, but the principle (no hidden fees, total price up front) is applied across all advertising review and we apply it from the start.",
  },
];

export default function HomeBuildersComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="BUILT FOR HOME BUILDERS"
      heading="How we build a home-builder website that protects your license."
      lead="Contractor licensing boards in most states explicitly cover websites in their definition of \u201Cadvertising.\u201D That means the same rules that apply to a billboard or a yard sign apply to your homepage \u2014 and a missing license number, an overstated scope of services, or an unsupported claim about your work can trigger a citation. Your reputation took years to build; we make sure your website doesn\u2019t put your license at risk."
      items={items}
      closing="Final compliance with your state contractor board\u2019s rules is your responsibility \u2014 that\u2019s true for any contractor with any website. Our job is to make sure your site is built so that responsibility is easy to meet, not a moving target."
      showFullApproachLink
    />
  );
}
