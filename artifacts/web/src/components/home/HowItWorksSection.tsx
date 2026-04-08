import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { Layers } from "lucide-react";

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
      desc: "We create a custom homepage concept for your practice so you can see exactly how we'd improve your messaging, design, and brand presence. You also receive a comprehensive written report. Both are yours to keep — whether you work with us or not."
    },
    {
      num: "04",
      title: "You Decide — No Pressure",
      desc: "Love it? We build the full site within 3–5 business days on average and launch. Not ready? No problem. You keep the evaluation insights, the full report, and the demo concept. Zero hard feelings."
    }
  ];

  return (
    <section className="bg-offwhite py-24 px-6 md:px-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
            How It Works — Simple and Risk-Free
          </h2>
          <p className="text-gray-600 text-lg font-sans max-w-2xl mx-auto">
            From first call to a live website that gets you clients. No contracts, no surprises, no pressure.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16 relative">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gray-300 z-0"></div>

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-charcoal text-orange flex items-center justify-center font-display text-2xl tracking-widest shadow-lg mb-6 border-4 border-offwhite">
                {step.num}
              </div>
              <h3 className="text-xl font-display text-charcoal mb-4">{step.title}</h3>
              <p className="text-gray-600 font-sans leading-relaxed text-sm max-w-xs">{step.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="mt-16 max-w-3xl mx-auto">
          <div className="bg-charcoal rounded-2xl p-8 md:p-10 border border-gray-200/10">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Layers className="text-orange" size={24} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display text-offwhite mb-3">How We Build Fast Without Cutting Corners</h3>
                <p className="text-stone font-sans leading-relaxed mb-4">
                  We don't reinvent the wheel for every client. We use a proven, high-converting structural framework — then we customize the design, copy, and SEO strategy entirely around your practice. That's how we launch in 5 days without cutting corners.
                </p>
                <p className="text-stone font-sans leading-relaxed">
                  Think of it like a custom-built home using tested construction methods. The foundation and engineering are proven — but the layout, finishes, and details are designed specifically for you. Not a prefab kit. Not a template. A real website built on a system that works.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6} className="text-center mt-12">
          <CTAButton href="/get-started">See How It Works for My Practice</CTAButton>
        </ScrollReveal>

      </div>
    </section>
  );
}
