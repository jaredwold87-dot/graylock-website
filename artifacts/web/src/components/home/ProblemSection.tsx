import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Award, MessageSquareWarning, TrendingDown } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

export function ProblemSection() {
  const problems = [
    {
      icon: <Award size={20} />,
      title: "Your website does not reflect your expertise",
      desc: "If your website looks outdated or generic, potential clients may question the quality of your business before they ever contact you.",
    },
    {
      icon: <MessageSquareWarning size={20} />,
      title: "Your message is unclear",
      desc: "If visitors cannot quickly understand what you do, who you help, and why you are different, they leave and choose someone easier to understand.",
    },
    {
      icon: <TrendingDown size={20} />,
      title: "Your site is not converting",
      desc: "Even if people find your website, weak structure, poor mobile experience, and unclear calls to action can quietly cost you leads every month.",
    },
  ];

  return (
    <section className="bg-charcoal py-24 px-6 md:px-12 relative overflow-hidden border-t border-gunmetal">
      <div className="max-w-6xl mx-auto">

        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">The Cost of an Underperforming Website</p>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
            If Your Website Is Underperforming, It Is Costing You More Than You Think.
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            Most business owners know their website needs work, but they are not sure what is wrong, what to fix first, or who to trust to fix it. That uncertainty costs credibility, inquiries, and momentum.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <ScrollReveal>
            <div className="relative">
              <img
                src={`${BASE}outdated-practice-website.png?v=2`}
                alt="Example of an outdated practice website"
                className="w-full h-auto drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {problems.map((prob, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-orange/10 text-orange">
                    {prob.icon}
                  </div>
                  <div>
                    <h3 className="text-offwhite font-sans font-semibold text-base md:text-lg mb-1.5">
                      {prob.title}
                    </h3>
                    <p className="text-stone font-sans text-sm md:text-base leading-relaxed">
                      {prob.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="text-center mt-14 max-w-2xl mx-auto">
          <p className="text-lg font-sans text-stone leading-relaxed">
            That is exactly why we start with a free review — so you can see clearly what is helping, what is hurting, and what to fix first.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
