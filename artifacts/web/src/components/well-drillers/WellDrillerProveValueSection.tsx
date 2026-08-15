import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Phone, LayoutDashboard, CheckCircle, Rocket } from "lucide-react";
import discoveryCallImg from "@/assets/process-discovery-call.webp";
import homepageDemoImg from "@/assets/process-homepage-demo.webp";
import approvePayImg from "@/assets/process-approve-pay.webp";
import launchDomainImg from "@/assets/process-launch-domain.webp";

/**
 * Well-drillers variant of the home page's "We Prove Our Value" section.
 * Same four steps and copy, but flat — photo + icon chip, title, body on the
 * section background. No card boxes (per Tim); matches this page's flat
 * dash/title style. The home page keeps its carded OfferBreakdownSection.
 */
const STEPS = [
  {
    icon: <Phone size={24} strokeWidth={2.2} />,
    image: discoveryCallImg,
    title: "15-Minute Discovery Call",
    desc: "A quick call to hear what you like and dislike about your current site, and what you want from a new one.",
  },
  {
    icon: <LayoutDashboard size={24} strokeWidth={2.2} />,
    image: homepageDemoImg,
    title: "Free Custom Homepage Demo",
    desc: "We turn that input into a real, custom homepage concept for your business — no payment required to see it.",
  },
  {
    icon: <CheckCircle size={24} strokeWidth={2.2} />,
    image: approvePayImg,
    title: "You Approve the Design & Direction",
    desc: "If you like what you see, you give the design and direction the green light and we move ahead with the full build.",
  },
  {
    icon: <Rocket size={24} strokeWidth={2.2} />,
    image: launchDomainImg,
    title: "Built & Launched on Your Domain",
    desc: "We build out the full site in 7–10 business days, then launch it live on your own domain.",
  },
];

export function WellDrillerProveValueSection() {
  return (
    <section
      id="prove-value"
      className="scroll-mt-[118px] bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-[#1A1A1A] leading-tight mb-5">
            We Prove Our Value Before You Pay a Dollar.
          </h2>
          <p className="text-[#1A1A1A]/70 text-base md:text-lg font-sans leading-relaxed">
            We do real strategic work before asking you to commit, so you can see the direction
            clearly and decide with confidence.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.08}>
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-5">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
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
      </div>
    </section>
  );
}
