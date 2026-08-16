import { Phone, LayoutDashboard, CheckCircle, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { trackAuctioneerEvent } from "@/lib/auctioneerAnalytics";
import { auctioneerGetStartedHref, AUCTIONEER_CTA_LABEL } from "@/lib/auctioneerLinks";
import processCallImg from "@/assets/auctioneer-process-call.webp";
import processDemoImg from "@/assets/auctioneer-process-demo.webp";
import processApproveImg from "@/assets/auctioneer-process-approve.webp";
import processLaunchImg from "@/assets/auctioneer-process-launch.webp";

/**
 * "Our Process: We Prove the Direction Before You Pay" (spec §5) — the
 * four-card risk-reversal structure from the framework with auctioneer copy
 * and imagery. The hero's secondary anchor points here. No fixed launch
 * date promised where client content, integrations, platform requirements,
 * or feedback are incomplete (spec).
 */
const STEPS = [
  {
    icon: <Phone size={24} strokeWidth={2.2} />,
    image: processCallImg,
    alt: "Auction company owner taking a short discovery call at his office desk with an auction catalog and event schedule in front of him",
    title: "15-Minute Discovery Call",
    desc: "A short conversation about the auction services you provide, the kinds of opportunities you want more of, your current website, and what you need it to do better.",
  },
  {
    icon: <LayoutDashboard size={24} strokeWidth={2.2} />,
    image: processDemoImg,
    alt: "Owner reviewing a polished website concept on a desktop monitor in a warm office",
    title: "Free Custom Homepage Demo",
    desc: "We turn that input into a real homepage direction for your auction business—built around your brand, specialties, services, and the clients you need to reach.",
  },
  {
    icon: <CheckCircle size={24} strokeWidth={2.2} />,
    image: processApproveImg,
    alt: "Auctioneer and event coordinator reviewing printed pages of the new website together in a ballroom before an event",
    title: "You Approve the Design + Direction",
    desc: "If the strategy and design feel right, you give the direction the green light and we move ahead with the full build. If not, there is no obligation to move forward.",
  },
  {
    icon: <Rocket size={24} strokeWidth={2.2} />,
    image: processLaunchImg,
    alt: "Auctioneer at a live evening event glancing at a new inquiry on his phone",
    title: "Built + Launched on Your Domain",
    desc: "We build the full site in an average of 7–10 business days after direction and core content are ready, then launch it live on your domain.",
  },
];

export function AuctioneerProcessSection() {
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
            Your custom auctioneer website—built and launched in an average of 7–10 business
            days.
          </p>
          <CTAButton
            href={auctioneerGetStartedHref("process")}
            variant="funnel"
            onClick={() =>
              trackAuctioneerEvent("auctioneer_process_cta_click", {
                cta_placement: "process",
              })
            }
          >
            {AUCTIONEER_CTA_LABEL}
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
