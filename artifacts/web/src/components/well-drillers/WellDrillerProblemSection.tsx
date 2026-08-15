import { ScrollReveal } from "@/components/ui/ScrollReveal";
import painServiceArea from "@/assets/well-pain-service-area.webp";
import painRigCrew from "@/assets/well-pain-rig-crew.webp";
import painRequests from "@/assets/well-pain-requests.webp";

const problems = [
  {
    title: "You Are Hard to Find Where You Actually Work.",
    desc: "If your website does not clearly connect your services to the towns, rural areas, and project types you serve, the next local search can go to a competitor instead.",
    image: painServiceArea,
    alt: "Remote rural service area at dusk — scattered ranch properties connected by a winding gravel road",
  },
  {
    title: "Your Website Does Not Show the Level of Work You Do.",
    desc: "Old templates and weak photos make a capable drilling company look smaller, less experienced, or less prepared than it really is.",
    image: painRigCrew,
    alt: "Well-drilling rig with its mast raised while a crew member works the controls on a rural jobsite",
  },
  {
    title: "Interest Is Not Becoming Service Requests.",
    desc: "A visitor may find you, look around, and leave without calling if the site does not make it simple to request service, ask for an estimate, or explain the problem they need solved.",
    image: painRequests,
    alt: "Work-gloved hand holding a phone on a jobsite — the moment a service request should be easy to send",
  },
];

export function WellDrillerProblemSection() {
  return (
    <section className="bg-[#0f0f0f] py-24 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
            The Problem With Most Well-Drilling Websites
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
            Your Crew Does Serious Work. Your Website Should Look Like It.
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            Your customers are not looking for a polished slogan. They are looking for a company
            that looks equipped, credible, local, and easy to contact when they need drilling,
            pumps, water-system work, or an estimate. An outdated website makes the decision
            harder than it needs to be.
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
