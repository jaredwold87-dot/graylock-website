import { ScrollReveal } from "@/components/ui/ScrollReveal";
import expertiseImg from "@/assets/pain-expertise.webp";
import unclearImg from "@/assets/pain-unclear.webp";
import conversionImg from "@/assets/pain-conversion.webp";

export function ProblemSection() {
  const problems = [
    {
      image: expertiseImg,
      title: "It doesn't reflect your expertise",
      desc: "An outdated, generic site makes prospects question your quality before they ever call.",
    },
    {
      image: unclearImg,
      title: "Your message is unclear",
      desc: "If visitors can't tell what you do in seconds, they leave for someone easier to understand.",
    },
    {
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
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[3/4]">
                <img
                  src={prob.image}
                  alt={prob.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Bottom gradient so the title reads over any image */}
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/95 via-black/55 to-transparent transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h3 className="text-white font-sans font-semibold text-lg leading-snug">
                    {prob.title}
                  </h3>
                  <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-stone font-sans text-sm md:text-base leading-relaxed pt-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                        {prob.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
