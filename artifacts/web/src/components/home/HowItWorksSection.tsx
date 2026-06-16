import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { Phone, Sparkles, CreditCard, Hammer, Rocket, Clock, Wrench, Zap } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      Icon: Phone,
      title: "15-Minute Discovery Call",
      desc: "A quick call to hear what you like and dislike about your current site, and what you want from the new one.",
    },
    {
      Icon: Sparkles,
      title: "Free Custom Homepage Demo",
      desc: "We turn that input into a real demo of what your new homepage could look like — no payment required to see it.",
    },
    {
      Icon: CreditCard,
      title: "Approve the Demo & Pay the Build Fee",
      desc: "Like the direction? You pay the build fee at this point — after the demo, not before — and we get started on the full site.",
    },
    {
      Icon: Hammer,
      title: "Build (7–10 Business Days)",
      desc: "We build out the full site. Most builds finish in 7–10 business days, with regular check-ins along the way.",
    },
    {
      Icon: Rocket,
      title: "Review & Launch on Your Domain",
      desc: "We walk you through the finished site, make any final adjustments, then launch it live on your domain.",
    },
  ];

  const highlights = [
    { Icon: Clock, title: "Built in 7–10 business days" },
    { Icon: Wrench, title: "Month-to-month support" },
    { Icon: Zap, title: "Built to convert" },
  ];

  return (
    <section className="bg-[#0f0f0f] py-24 md:py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4 leading-tight">
            How It Works
          </h2>
          <p className="text-stone text-base md:text-lg font-sans max-w-2xl mx-auto leading-relaxed">
            A simple, low-risk path from uncertainty to a better website.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting flow line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-[10%] right-[10%] top-[60px] h-px bg-gradient-to-r from-transparent via-[#E85D26]/30 to-transparent"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-10 lg:gap-6 relative">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="relative flex flex-col items-center text-center px-2">
                  {/* Icon with radial glow */}
                  <div className="relative mb-6">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 -m-6 rounded-full bg-[#E85D26]/20 blur-2xl"
                    />
                    <div className="relative w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#E85D26] to-[#c04416] flex items-center justify-center shadow-[0_8px_40px_-8px_rgba(232,93,38,0.6)]">
                      <step.Icon className="text-white" size={52} strokeWidth={1.5} />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-[#0f0f0f] border-2 border-[#E85D26] flex items-center justify-center">
                      <span className="text-[#E85D26] font-display text-base font-bold leading-none">
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#E85D26] font-sans text-xs font-bold uppercase tracking-[0.18em] mb-2">
                    Step {i + 1}
                  </p>
                  <h3 className="text-xl md:text-2xl font-display text-white mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-stone font-sans text-sm md:text-base leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 mb-14 max-w-4xl mx-auto">
          {highlights.map((h, i) => (
            <ScrollReveal key={i} delay={0.4 + i * 0.1} className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl flex gap-4 items-center justify-center text-center">
              <div className="w-11 h-11 bg-[#E85D26]/10 border border-[#E85D26]/20 rounded-xl flex items-center justify-center flex-shrink-0 text-[#E85D26]">
                <h.Icon size={22} />
              </div>
              <h4 className="text-base font-display text-white text-left">{h.title}</h4>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6} className="text-center">
          <CTAButton href="/get-started" variant="funnel">Book a Discovery Call</CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
