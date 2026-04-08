import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";

const steps = [
  {
    num: "01",
    title: "Book a Free Call",
    desc: "Pick a time that works for you. It takes 20 minutes and there's zero obligation. We want to learn about your practice, your ideal clients, and your current online presence.",
  },
  {
    num: "02",
    title: "We Review Your Website",
    desc: "We analyze your current site and walk you through what's working, what's not, and exactly what's costing you leads. You'll leave the call with real clarity — whether you hire us or not.",
  },
  {
    num: "03",
    title: "We Build You a Demo Homepage",
    desc: "We create a custom homepage concept for your practice so you can see exactly how we'd improve your messaging, design, and brand presence. You also receive a comprehensive written report. Both are yours to keep — whether you work with us or not.",
  },
  {
    num: "04",
    title: "You Decide — No Pressure",
    desc: "Love it? We build the full site within 7–10 business days on average and launch. Not ready? No problem. You keep the evaluation insights, the full report, and the demo concept. Zero hard feelings.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-charcoal py-24 px-6 md:px-12 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(46,123,180,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-20">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">
            Our Process
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
            How It Works — Simple and Risk-Free
          </h2>
          <p className="text-stone text-lg font-sans max-w-2xl mx-auto">
            From first call to a live website that gets you clients. No
            contracts, no surprises, no pressure.
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange/60 via-orange/30 to-transparent md:-translate-x-px" />

          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal
                key={i}
                delay={i * 0.12}
                className={`relative flex items-start mb-16 last:mb-0 ${
                  isEven
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-orange border-4 border-charcoal -translate-x-1/2 mt-8 z-10 shadow-[0_0_12px_rgba(46,123,180,0.6)]" />

                <div className="hidden md:block md:w-[45%]" />

                <div className="w-full md:w-[45%] pl-14 md:pl-0">
                  <div
                    className={`relative bg-navy/80 backdrop-blur-sm p-8 rounded-xl border border-gunmetal/60 hover:border-orange/40 transition-all duration-300 shadow-lg hover:shadow-orange/5 group ${
                      isEven ? "md:ml-12" : "md:mr-12"
                    }`}
                  >
                    <div className="absolute -top-4 left-6 bg-gradient-to-br from-orange to-[#1a5a8a] text-white font-display text-lg px-4 py-1.5 rounded-lg shadow-md tracking-wider">
                      {step.num}
                    </div>
                    <h3 className="text-xl md:text-2xl font-display text-offwhite mb-3 mt-2">
                      {step.title}
                    </h3>
                    <p className="text-stone font-sans leading-relaxed text-sm md:text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.5} className="text-center mt-16">
          <CTAButton href="/get-started">
            See How It Works for My Practice
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
