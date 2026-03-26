import { Clock, Wrench, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

function SolutionLaptop() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full rounded-t-xl bg-[#1c1c1e] border border-[#3a3a3c] shadow-2xl shadow-black/60 overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2c2c2e] border-b border-[#3a3a3c]">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
          <span className="flex-1 mx-2 h-4 rounded-md bg-[#1c1c1e] border border-[#3a3a3c]" />
        </div>
        <div className="relative w-full bg-[#1c1c1e]" style={{ aspectRatio: "1919/927" }}>
          <picture>
            <source srcSet={`${BASE}wce-after-desktop.webp`} type="image/webp" />
            <img src={`${BASE}wce-after-desktop.png`} alt="" className="w-full h-full object-contain" loading="lazy" />
          </picture>
        </div>
      </div>
      <div className="w-[90%] h-3 bg-gradient-to-b from-[#2c2c2e] to-[#1c1c1e] rounded-b-lg border-x border-b border-[#3a3a3c]" />
      <div className="w-[110%] h-[6px] bg-gradient-to-b from-[#3a3a3c] to-[#2c2c2e] rounded-b-xl" />
    </div>
  );
}

function SolutionTablet() {
  return (
    <div className="relative w-full rounded-[16px] bg-[#1c1c1e] border-[2.5px] border-[#3a3a3c] shadow-2xl shadow-black/60 overflow-hidden p-[3px]">
      <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[20%] h-[5px] bg-[#1c1c1e] rounded-b-lg z-10 border-x border-b border-[#3a3a3c]" />
      <div className="relative w-full rounded-[12px] overflow-hidden bg-[#1c1c1e]" style={{ aspectRatio: "3/4" }}>
        <picture>
          <source srcSet={`${BASE}wce-after-desktop.webp`} type="image/webp" />
          <img src={`${BASE}wce-after-desktop.png`} alt="" className="w-full h-full object-cover object-left-top" loading="lazy" />
        </picture>
      </div>
    </div>
  );
}

function SolutionPhone() {
  return (
    <div className="relative w-full rounded-[20px] bg-[#1c1c1e] border-[2.5px] border-[#3a3a3c] shadow-2xl shadow-black/60 overflow-hidden p-[3px]">
      <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[30%] h-[5px] bg-[#1c1c1e] rounded-b-lg z-10 border-x border-b border-[#3a3a3c]" />
      <div className="relative w-full rounded-[16px] overflow-hidden" style={{ aspectRatio: "9/19.5" }}>
        <picture>
          <source srcSet={`${BASE}wce-after-mobile.webp`} type="image/webp" />
          <img src={`${BASE}wce-after-mobile.jpeg`} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
        </picture>
      </div>
    </div>
  );
}

function SolutionDevices() {
  return (
    <div className="flex items-end justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl mx-auto px-4">
      <div className="flex-[2.5]">
        <SolutionLaptop />
      </div>
      <div className="flex-[0.65] hidden sm:block">
        <SolutionPhone />
      </div>
      <div className="flex-[1.2] hidden md:block">
        <SolutionTablet />
      </div>
    </div>
  );
}

export function SolutionSection() {
  const solutions = [
    {
      icon: <Clock className="text-orange mb-4" size={32} />,
      title: "Built Fast",
      desc: "Once you say go, we build and launch your custom website within 5 business days. No endless back and forth."
    },
    {
      icon: <Wrench className="text-orange mb-4" size={32} />,
      title: "Maintained Monthly",
      desc: "Hosting, security, and content updates are all handled for you. Your site stays fresh and performing — no technical headaches."
    },
    {
      icon: <Zap className="text-orange mb-4" size={32} />,
      title: "Built to Convert",
      desc: "We don't just make it pretty. Every page is structured to turn visitors into phone calls and booked appointments."
    }
  ];

  return (
    <section id="solution" className="bg-navy py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#F2F3F5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
            A Done-For-You Website That Actually Gets Results — Starting at $79/month
          </h2>
          <p className="text-stone text-lg font-sans">
            Most websites are just digital brochures. We build high-performance sales engines. Book a free 20-minute call, and you'll receive a comprehensive written report covering your website analysis, SEO audit, competitive landscape, and growth opportunities — plus a custom homepage demo — all before you pay us anything.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.map((sol, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className="card-glow gradient-border bg-charcoal/80 p-10 rounded-xl border border-gunmetal/50">
              <div className="w-16 h-16 bg-gradient-to-br from-orange/20 to-orange/5 rounded-xl flex items-center justify-center mb-6 border border-orange/10">
                {sol.icon}
              </div>
              <h3 className="text-2xl font-display text-offwhite mb-4">{sol.title}</h3>
              <p className="text-stone font-sans leading-relaxed">{sol.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="w-full" aria-label="Graylock Digital websites displayed across laptop, tablet, and mobile devices">
          <SolutionDevices />
        </ScrollReveal>
      </div>
    </section>
  );
}
