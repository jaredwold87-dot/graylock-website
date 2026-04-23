import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Award, MessageSquareWarning, TrendingDown } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: <Award size={22} />,
      title: "It doesn't reflect your expertise",
      desc: "An outdated, generic site makes prospects question your quality before they ever call.",
    },
    {
      icon: <MessageSquareWarning size={22} />,
      title: "Your message is unclear",
      desc: "If visitors can't tell what you do in seconds, they leave for someone easier to understand.",
    },
    {
      icon: <TrendingDown size={22} />,
      title: "It isn't converting traffic",
      desc: "Weak structure, poor mobile UX, and unclear CTAs quietly cost you leads every month.",
    },
  ];

  return (
    <section className="bg-charcoal py-24 px-6 md:px-12 relative overflow-hidden border-t border-gunmetal">
      <div className="max-w-6xl mx-auto">

        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">The Cost of an Underperforming Website</p>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
            If Your Website Is Underperforming, It Is Costing You.
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            Most owners know their site needs work — they just don't know what to fix first.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((prob, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="h-full bg-gunmetal/30 border border-gunmetal/60 rounded-2xl p-7 flex flex-col items-start hover:border-orange/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center text-orange mb-5">
                  {prob.icon}
                </div>
                <h3 className="text-offwhite font-sans font-semibold text-lg mb-2 leading-snug">
                  {prob.title}
                </h3>
                <p className="text-stone font-sans text-sm md:text-base leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
