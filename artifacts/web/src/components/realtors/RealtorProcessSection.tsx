import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { Phone, LayoutDashboard, CheckCircle, Network, Rocket } from "lucide-react";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { realtorGetStartedHref } from "@/lib/realtorLinks";
import strategyCallImg from "@/assets/realtor-process-call.webp";
import homepageDemoImg from "@/assets/realtor-process-demo.webp";
import approveImg from "@/assets/realtor-process-approve.webp";
import leadEngineImg from "@/assets/realtor-process-build.webp";
import launchImg from "@/assets/realtor-process-launch.webp";

export function RealtorProcessSection() {
  const steps = [
    {
      icon: <Phone size={24} strokeWidth={2.2} />,
      image: strategyCallImg,
      title: "15-Minute Strategy Call",
      desc: "We learn your market, your current website frustrations, your ideal clients, and whether you need property-search functionality.",
    },
    {
      icon: <LayoutDashboard size={24} strokeWidth={2.2} />,
      image: homepageDemoImg,
      title: "Free Custom Homepage Demo",
      desc: "We create a real homepage direction for your brand—built around the way you want buyers and sellers to experience you online.",
    },
    {
      icon: <CheckCircle size={24} strokeWidth={2.2} />,
      image: approveImg,
      title: "You Approve the Direction",
      desc: "If the strategy and design feel right, you green-light the full build. If not, there is no obligation to move forward.",
    },
    {
      icon: <Network size={24} strokeWidth={2.2} />,
      image: leadEngineImg,
      title: "Build Your Lead Engine",
      desc: "We build the site structure, local pages, buyer and seller paths, contact flows, and approved IDX experience where applicable.",
    },
    {
      icon: <Rocket size={24} strokeWidth={2.2} />,
      image: launchImg,
      title: "Launch With a Clear Handoff",
      desc: "After content, required approvals, and testing are complete, we launch on your domain and stay on to maintain the site.",
    },
  ];

  return (
    <section className="relative bg-[#f5f5f4] py-16 md:py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#B23E16] text-sm font-sans font-bold uppercase tracking-[0.2em] mb-4">
            See the Direction Before You Commit
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] mb-6 leading-tight">
            Your Real Estate Website Should Not Be a Guess.
          </h2>
          <p className="text-[#4a5568] text-base md:text-lg font-sans leading-relaxed">
            We do the strategic work first so you can see the direction, understand the
            process, and make a confident decision before you pay for a full build.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-5">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-full overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
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
                <div className="p-6 xl:p-5 flex-1">
                  <p className="text-[#B23E16] font-sans text-[11px] font-bold uppercase tracking-widest mb-2">
                    Step {i + 1}
                  </p>
                  <h3 className="text-xl xl:text-lg font-display text-[#1a202c] mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#4a5568] font-sans text-base xl:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15} className="text-center mt-12">
          <CTAButton
            href={realtorGetStartedHref("process_cta")}
            variant="funnel"
            onClick={() =>
              trackRealtorEvent("realtor_process_cta_click", { cta_placement: "process_cta" })
            }
          >
            Book a Realtor Website Call
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
