import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { Clock, Wrench, Zap } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Book a Free Call",
      desc: "Pick a time that works for you. It takes 20 minutes and there's zero obligation. We want to learn about your practice, your ideal clients, and your current online presence."
    },
    {
      num: "02",
      title: "We Review Your Website",
      desc: "We analyze your current site and walk you through what's working, what's not, and exactly what's costing you leads. You'll leave the call with real clarity — whether you hire us or not."
    },
    {
      num: "03",
      title: "We Build You a Demo Homepage",
      desc: "We create a custom homepage concept for your practice so you can see exactly how we'd improve your messaging, design, and brand presence. You also receive a comprehensive written report."
    },
    {
      num: "04",
      title: "You Decide — No Pressure",
      desc: "Love it? We build the full site within 7–10 business days on average and launch. Not ready? No problem. You keep the evaluation insights, the report, and the demo. Zero hard feelings."
    }
  ];

  const highlights = [
    { icon: <Clock className="text-orange" size={24} />, title: "Built in 7–10 Days", desc: "Once you say go, we build and launch. No endless back and forth." },
    { icon: <Wrench className="text-orange" size={24} />, title: "Maintained Monthly", desc: "Hosting, security, and content updates are all handled for you." },
    { icon: <Zap className="text-orange" size={24} />, title: "Built to Convert", desc: "Every page is structured to turn visitors into booked appointments." },
  ];

  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4f5f7] via-[#f7f8fa] to-[#f0f1f3]" />
      <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-20">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Our Process</p>
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
            How It Works — Simple and Risk-Free
          </h2>
          <p className="text-stone text-lg font-sans max-w-2xl mx-auto leading-relaxed">
            From first call to a live website that gets you clients. No contracts, no surprises, no pressure.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-20 relative">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 z-0" />

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-[72px] h-[72px] rounded-full bg-charcoal text-orange flex items-center justify-center font-display text-2xl tracking-widest shadow-xl mb-8 border-[5px] border-[#f4f5f7] ring-1 ring-gray-200">
                {step.num}
              </div>
              <h3 className="text-xl font-display text-charcoal mb-4">{step.title}</h3>
              <p className="text-stone font-sans leading-relaxed text-sm max-w-xs">{step.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {highlights.map((h, i) => (
            <ScrollReveal key={i} delay={0.5 + i * 0.1} className="bg-white/80 backdrop-blur-sm p-7 rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] flex gap-5 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-orange/15 to-orange/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-orange/10">
                {h.icon}
              </div>
              <div>
                <h4 className="text-lg font-display text-charcoal mb-1">{h.title}</h4>
                <p className="text-stone font-sans text-sm leading-relaxed">{h.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6} className="text-center">
          <CTAButton href="/get-started">Book Your Free Website Review</CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
