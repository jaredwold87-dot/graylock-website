import { ScrollReveal } from "@/components/ui/ScrollReveal";
import premiumImg from "@/assets/realtor-pain-premium.webp";
import nextStepImg from "@/assets/realtor-pain-nextstep.webp";
import conversationImg from "@/assets/realtor-pain-conversation.webp";

export function RealtorProblemSection() {
  const problems = [
    {
      image: premiumImg,
      alt: "A premium modern home at dusk — the level of homes your website should live up to",
      title: "Your website doesn't match the level of homes you represent.",
      desc: "A generic template can make a strong brand, polished listings, and years of local expertise feel interchangeable.",
    },
    {
      image: nextStepImg,
      alt: "A refined property-search interaction on a phone",
      title: "Buyers and sellers can't see a clear next step.",
      desc: "If a visitor cannot quickly search homes, request a valuation, or contact you, they move on to someone whose site makes the decision easier.",
    },
    {
      image: conversationImg,
      alt: "A new website inquiry arriving next to a set of house keys",
      title: "Your site isn't turning attention into conversations.",
      desc: "Search traffic, listing views, and social clicks do not matter if your website gives visitors no compelling reason to reach out.",
    },
  ];

  return (
    <section className="bg-[#0f0f0f] py-24 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
            The Problem With Most Agent Websites
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
            You've Built a Reputation. Your Website Should Help Prove It.
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            You know your market, your inventory, and the people you serve. But if your site
            looks generic, hides your value, or makes listings hard to explore, the next
            conversation goes to an agent whose website feels easier to trust.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((prob, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[3/4]">
                <img
                  src={prob.image}
                  alt={prob.alt}
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
