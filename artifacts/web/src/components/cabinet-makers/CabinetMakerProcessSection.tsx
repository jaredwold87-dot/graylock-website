import { Phone, LayoutDashboard, CheckCircle, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { trackCabinetMakerEvent } from "@/lib/cabinetMakerAnalytics";
import { cabinetMakerGetStartedHref, CABINET_MAKER_CTA_LABEL } from "@/lib/cabinetMakerLinks";
import processCallImg from "@/assets/cabinet-process-call.webp";
import processDemoImg from "@/assets/cabinet-process-demo.webp";
import processApproveImg from "@/assets/cabinet-process-approve.webp";
import processLaunchImg from "@/assets/cabinet-process-launch.webp";

/**
 * "Our Process: We Prove the Direction Before You Pay" (spec §4.5) — the
 * four-card risk-reversal structure from the well-driller page with
 * cabinet-maker copy and imagery. The hero's secondary anchor points here.
 */
const STEPS = [
  {
    icon: <Phone size={24} strokeWidth={2.2} />,
    image: processCallImg,
    alt: "Cabinet-shop owner taking a short discovery call in a tidy showroom office with door samples on the wall",
    title: "15-Minute Discovery Call",
    desc: "A quick conversation about your work, ideal projects, service area, current site, and what you want your next website to do better.",
  },
  {
    icon: <LayoutDashboard size={24} strokeWidth={2.2} />,
    image: processDemoImg,
    alt: "Owner reviewing a polished custom homepage concept on a desktop monitor in a studio office",
    title: "Free Custom Homepage Demo",
    desc: "We turn that input into a real homepage direction for your cabinet-making business—built around your work, your market, and the project inquiries you want more of.",
  },
  {
    icon: <CheckCircle size={24} strokeWidth={2.2} />,
    image: processApproveImg,
    alt: "Owner and design partner reviewing website layouts and material samples together at a worktable",
    title: "You Approve the Design + Direction",
    desc: "If the strategy and design feel right, you give the direction the green light and we move ahead with the full build. If not, there is no obligation to move forward.",
  },
  {
    icon: <Rocket size={24} strokeWidth={2.2} />,
    image: processLaunchImg,
    alt: "Finished custom kitchen installation with the cabinet maker checking a new inquiry notification on a phone",
    title: "Built + Launched on Your Domain",
    desc: "We build the full website in an average of 7–10 business days after direction and core content are ready, then launch it live on your domain.",
  },
];

export function CabinetMakerProcessSection() {
  return (
    <section
      id="free-demo-process"
      className="scroll-mt-[118px] bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Our Process
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-[#1A1A1A] leading-tight mb-5">
            We Prove the Direction Before You Pay a Dollar.
          </h2>
          <p className="text-[#1A1A1A]/70 text-base md:text-lg font-sans leading-relaxed">
            We do real strategic and design work first, so you can see what your new website
            could feel like before deciding whether Graylock is the right fit.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.08}>
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-5">
                  <img
                    src={step.image}
                    alt={step.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 w-12 h-12 rounded-lg bg-[#E85D26] flex items-center justify-center text-white shadow-lg">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-[26px] text-[#1A1A1A] leading-snug mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-[#1A1A1A]/70 text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center max-w-3xl mx-auto mt-12 md:mt-16">
          <p className="font-hand font-semibold text-[28px] md:text-[34px] text-[#B23E16] leading-snug mb-8">
            Your custom cabinet-maker website—built and launched in an average of 7–10
            business days.
          </p>
          <CTAButton
            href={cabinetMakerGetStartedHref("process")}
            variant="funnel"
            onClick={() =>
              trackCabinetMakerEvent("cabinet_maker_process_cta_click", {
                cta_placement: "process",
              })
            }
          >
            {CABINET_MAKER_CTA_LABEL}
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
