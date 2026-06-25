import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Award, MessageSquareWarning, TrendingDown } from "lucide-react";
import expertiseImg from "@/assets/pain-expertise.webp";
import unclearImg from "@/assets/pain-unclear.webp";
import conversionImg from "@/assets/pain-conversion.webp";

export function ProblemSection() {
  const problems = [
    {
      icon: <Award size={22} />,
      image: expertiseImg,
      title: "It doesn't reflect your expertise",
      desc: "An outdated, generic site makes prospects question your quality before they ever call.",
    },
    {
      icon: <MessageSquareWarning size={22} />,
      image: unclearImg,
      title: "Your message is unclear",
      desc: "If visitors can't tell what you do in seconds, they leave for someone easier to understand.",
    },
    {
      icon: <TrendingDown size={22} />,
      image: conversionImg,
      title: "It isn't converting traffic",
      desc: "Weak structure, poor mobile UX, and unclear CTAs quietly cost you leads every month.",
    },
  ];

  return (
    <section className="bg-[#0f0f0f] py-24 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">The Problem With Most Service Business Websites</p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
            You Run a Professional Business. Your Website Should Look Like It.
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            Potential clients judge the quality of your service by the quality of your site before they ever speak to you. If the two don't match, they don't reach out.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((prob, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="h-full bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-[#E85D26]/40 transition-colors">
                <div className="aspect-[4/3] overflow-hidden border-b border-white/10">
                  <img
                    src={prob.image}
                    alt={prob.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7 flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#E85D26]/10 border border-[#E85D26]/20 flex items-center justify-center text-[#E85D26] mb-5">
                    {prob.icon}
                  </div>
                  <h3 className="text-white font-sans font-semibold text-lg mb-2 leading-snug">
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
    </section>
  );
}
