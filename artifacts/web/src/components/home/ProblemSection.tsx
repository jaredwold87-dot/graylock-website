import { ScrollReveal } from "@/components/ui/ScrollReveal";
import expertiseImg from "@/assets/pain-expertise.webp";
import unclearImg from "@/assets/pain-unclear.webp";
import conversionImg from "@/assets/pain-conversion.webp";

export function ProblemSection() {
  const problems = [
    {
      image: expertiseImg,
      title: "It Does Not Reflect Your Expertise",
      desc: "An outdated or generic site can make the quality of your business harder to recognize.",
    },
    {
      image: unclearImg,
      title: "Your Message Is Not Clear Enough",
      desc: "If a visitor cannot quickly understand what you do and who you help, they move on.",
    },
    {
      image: conversionImg,
      title: "The Next Step Is Not Clear",
      desc: "When proof, service information, and calls to action are disconnected, good prospects leave without reaching out.",
    },
  ];

  return (
    <section className="bg-white pt-14 pb-24 px-6 md:px-12 md:pt-[4.5rem] md:pb-24 relative overflow-hidden border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto">

        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">The Problem With Most Service Business Websites</p>
          <h2 className="text-3xl md:text-5xl font-display text-[#1a202c] mb-6">
            A Professional Website Has to Do More Than Look Professional.
          </h2>
          <p className="text-[#1a202c]/70 text-lg font-sans leading-relaxed">
            Before a prospect calls, they are already deciding whether your business feels credible, relevant, and easy to choose.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((prob, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="min-w-0">
              <div className="group relative w-full min-w-0 rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[3/4] min-h-[320px]">
                <img
                  src={prob.image}
                  alt={prob.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-105"
                />
                {/* Persistent dark overlay keeps every title and description readable. */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-5 lg:p-7">
                  <h3 className="text-white font-sans font-semibold text-lg leading-snug">
                    {prob.title}
                  </h3>
                  <p className="text-white/90 font-sans text-base leading-relaxed pt-2">
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
