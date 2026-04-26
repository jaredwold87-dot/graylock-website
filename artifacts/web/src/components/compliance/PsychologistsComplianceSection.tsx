import { MessageSquareOff, Video, LifeBuoy, BadgeCheck } from "lucide-react";
import ComplianceSection, { ComplianceItem } from "./ComplianceSection";

const items: ComplianceItem[] = [
  {
    icon: MessageSquareOff,
    subheading: "No testimonials by default",
    body: "APA Ethics Code Standard 5.05 prohibits soliciting testimonials from current therapy clients. Several states (notably New York) prohibit patient testimonials in psychology advertising entirely. Our default for psychology practices is to not include patient testimonials at all \u2014 and if your state\u2019s rules and your judgment make a narrow exception possible, we structure it carefully and capture the documentation.",
  },
  {
    icon: Video,
    subheading: "Telehealth scope clearly stated",
    body: "If your practice offers virtual sessions, the website explicitly lists which states you\u2019re licensed in and can practice in. Patient location at the time of the session is what governs jurisdiction \u2014 getting this wrong is one of the most common ways psychologists run into licensing issues.",
  },
  {
    icon: LifeBuoy,
    subheading: "Crisis resources prominently displayed",
    body: "Several states require crisis resources on a psychology practice website, and it\u2019s a best practice everywhere. We include the 988 Suicide and Crisis Lifeline and other relevant resources where a patient in distress can find them quickly \u2014 typically in the footer and on every contact page.",
  },
  {
    icon: BadgeCheck,
    subheading: "Credentials displayed with state-board accuracy",
    body: "Each psychologist on your site is displayed with their doctoral credential, license number, licensing state(s), and only those specialty designations your state board formally recognizes. We don\u2019t let an unrecognized specialty claim through, even if the practitioner uses it informally in conversation.",
  },
];

export default function PsychologistsComplianceSection() {
  return (
    <ComplianceSection
      eyebrow="PSYCHOLOGY-SPECIFIC"
      heading="And the rules unique to psychology practice."
      lead="Psychology has stricter advertising rules than almost any other healthcare field. The APA Ethics Code prohibits soliciting testimonials from current therapy clients \u2014 period. Several states ban patient testimonials in psychology advertising entirely, regardless of consent. Telehealth scope, crisis resource availability, and specialty designations are all governed by your state psychology board. A generic web shop won\u2019t know any of this."
      items={items}
      closing="Your relationship with your state psychology board is your responsibility. We make sure your website never gives them a reason to call."
    />
  );
}
