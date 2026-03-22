import { Clock, Wrench, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function SolutionSection() {
  const solutions = [
    {
      icon: <Clock className="text-orange mb-4" size={32} />,
      title: "Built Fast",
      desc: "Skip the endless revisions. We build and launch your custom website in just 1–3 business days."
    },
    {
      icon: <Wrench className="text-orange mb-4" size={32} />,
      title: "Maintained Monthly",
      desc: "Hosting, security, and monthly content updates are all handled for you. Zero technical headaches."
    },
    {
      icon: <Zap className="text-orange mb-4" size={32} />,
      title: "Built to Convert",
      desc: "We don't just make it pretty. We structure your site to turn visitors into phone calls and booked appointments."
    }
  ];

  return (
    <section className="bg-navy py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#F2F3F5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
            A Done-For-You Website That Actually Works — Starting at $59/month
          </h2>
          <p className="text-stone text-lg font-sans">
            Stop worrying about hosting, plugins, and design templates. Focus on running your business while we handle your web presence entirely.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.map((sol, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className="bg-charcoal p-10 rounded-xl border-t-4 border-t-orange border-x border-b border-gunmetal shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform duration-300">
              {sol.icon}
              <h3 className="text-2xl font-display text-offwhite mb-4">{sol.title}</h3>
              <p className="text-stone font-sans leading-relaxed">{sol.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="max-w-4xl mx-auto">
          <img 
            src={`${import.meta.env.BASE_URL}devices-hero.png`}
            alt="Graylock Digital websites displayed across laptop, tablet, and mobile devices"
            className="w-full rounded-xl shadow-2xl shadow-orange/10"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
