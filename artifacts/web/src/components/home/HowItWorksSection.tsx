import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { Phone, Sparkles, Rocket, Clock, Wrench, Zap } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <Phone size={26} />,
      title: "Book a 15-Minute Call",
      desc: "Quick chat about your business and what's not working on your current site.",
    },
    {
      icon: <Sparkles size={26} />,
      title: "Get a Free Custom Demo",
      desc: "We design a real homepage concept so you can see the strategy before committing.",
    },
    {
      icon: <Rocket size={26} />,
      title: "Decide to Launch",
      desc: "Love it? We build and launch in 7–10 days. Not for you? Walk away with clarity.",
    },
  ];

  const highlights = [
    { icon: <Clock className="text-orange" size={24} />, title: "Built in 7–10 business days" },
    { icon: <Wrench className="text-orange" size={24} />, title: "Month-to-month support" },
    { icon: <Zap className="text-orange" size={24} />, title: "Built to convert" },
  ];

  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4f5f7] via-[#f7f8fa] to-[#f0f1f3]" />
      <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Our Process</p>
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
            How It Works
          </h2>
          <p className="text-stone text-lg font-sans max-w-2xl mx-auto leading-relaxed">
            A simple, low-risk path from uncertainty to a better website.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] p-7 flex flex-col items-start hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/15 to-orange/5 border border-orange/20 flex items-center justify-center text-orange">
                    {step.icon}
                  </div>
                  <span className="text-xs font-sans font-bold uppercase tracking-widest text-orange/80">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-display text-charcoal mb-2 leading-snug">{step.title}</h3>
                <p className="text-stone font-sans leading-relaxed text-sm md:text-base">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14 max-w-4xl mx-auto">
          {highlights.map((h, i) => (
            <ScrollReveal key={i} delay={0.5 + i * 0.1} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] flex gap-4 items-center justify-center text-center">
              <div className="w-11 h-11 bg-gradient-to-br from-orange/15 to-orange/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-orange/10">
                {h.icon}
              </div>
              <h4 className="text-base font-display text-charcoal text-left">{h.title}</h4>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6} className="text-center">
          <CTAButton href="/get-started">Get Your Free Homepage Demo</CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
