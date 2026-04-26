import { BadgeCheck, AlertCircle, MessageSquare, Archive, BookOpen } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: BadgeCheck,
    subheading: "Every CPA credentialed correctly",
    body: "Each licensed practitioner on your site is displayed with their name, license state, license number, and any additional credentials they hold (CPA, EA, CFP, PFS, ABV). We don\u2019t let \u201CCPA\u201D appear next to a name unless the individual is currently licensed in a state where that designation is permitted.",
  },
  {
    icon: AlertCircle,
    subheading: "No \u201Cspecialist\u201D language unless your state recognizes it",
    body: "Most state boards of accountancy do not formally recognize specialty designations the way medical boards do. Calling a partner a \u201Ctax specialist\u201D or \u201Caudit specialist\u201D can be treated as misleading. We use language that describes what your firm actually does (\u201Cfocused on,\u201D \u201Cexperienced in,\u201D \u201Cserves clients in\u201D) without making credential claims your state board hasn\u2019t authorized.",
  },
  {
    icon: MessageSquare,
    subheading: "Testimonials handled by state rule",
    body: "Some states permit client testimonials on a CPA\u2019s website with substantiation; some are stricter. We work to your state\u2019s rule, not a generic template. When testimonials are used, we capture the client\u2019s permission and keep a record of when and how it was given.",
  },
  {
    icon: Archive,
    subheading: "A 36-month archive of your live site",
    body: "Several state accountancy boards require firms to keep copies of advertising materials for at least 36 months \u2014 and the website itself counts as advertising. Graylock OS automatically captures quarterly archives of your live site, so if your state board ever requests records, you have them.",
  },
  {
    icon: BookOpen,
    subheading: "Tax-practice pages reviewed against Circular 230",
    body: "Treasury Circular 230 governs what a tax practitioner can say in solicitations. No false or coercive claims. No fee schedules you\u2019re not bound to honor. No suggestion of IRS endorsement. We review every tax-services page against those rules before it goes live.",
  },
];

export default function AccountantsComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="BUILT FOR CPAs & ACCOUNTING FIRMS"
      heading="How we build a CPA website that the AICPA and your state board would recognize."
      lead="CPAs operate under stricter advertising rules than most professions. The AICPA Code of Professional Conduct prohibits any advertising that is false, misleading, or deceptive \u2014 and several state accountancy boards add specific requirements on top: no \u201Cspecialist\u201D claims, no testimonials without verifiable facts, recordkeeping of advertising materials for up to 36 months. A website that doesn\u2019t account for those rules is a license-defense issue waiting to happen."
      items={items}
      closing="Your professional license is your firm\u2019s most valuable asset. We make sure your website never becomes the reason your state board takes a closer look."
    />
  );
}
