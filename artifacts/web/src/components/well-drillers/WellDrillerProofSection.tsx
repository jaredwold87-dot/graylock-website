import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackWellDrillerEvent } from "@/lib/wellDrillerAnalytics";
import rosenlundImg from "@/assets/work/rosenlund-drilling-transformation.webp";
import tekmarkImg from "@/assets/work/tekmark-transformation.webp";
import jcsImg from "@/assets/work/jcs-well-services-transformation.webp";

/**
 * "See the Standard" (spec §9) — showcases the three live well-drilling
 * portfolio builds. Intentionally no testimonial quotes anywhere in this
 * section until clients approve them for publication.
 */
const PROJECTS = [
  {
    name: "Rosenlund Drilling",
    meta: "Industrial Drilling · Elko, NV",
    url: "https://rosenlunddrilling.com/",
    image: rosenlundImg,
    alt: "Rosenlund Drilling website transformation — before and after the Graylock rebuild",
    description:
      "A bold, heritage-driven site for Elko's premier industrial drilling contractor — built for mining operations, ranches, and rural property owners who can't afford to guess on their water supply.",
  },
  {
    name: "TekMark Industries",
    meta: "Casing Handling Tools · Global · Manufactured in the USA",
    url: "https://www.tekmarkwellcasingtools.com/",
    image: tekmarkImg,
    alt: "TekMark Industries website transformation — before and after the Graylock rebuild",
    description:
      "A precision-focused site for a U.S. manufacturer of well casing handling tools — built to give drilling professionals a clear path from product specs to a purchase conversation.",
  },
  {
    name: "JC's Well Services",
    meta: "Well Pumps & Water Systems · Eugene & Lane County, OR",
    url: "https://jcswellservices.com/",
    image: jcsImg,
    alt: "JC's Well Services website transformation — before and after the Graylock rebuild",
    description:
      "A trust-forward site for a well pump and water treatment specialist — built to make emergency service and estimate requests effortless across Lane County.",
  },
];

export function WellDrillerProofSection() {
  return (
    <section className="bg-[#1a1a1a] py-20 md:py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            See the Standard
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
            This Is What a Well-Drilling Website Can Look Like.
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            A serious website should make your company&rsquo;s capability obvious in seconds—on a
            desktop in the office and on the phone a customer uses in the field. It should show
            the work, explain the services, and make the next step simple.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-14">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 0.1}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWellDrillerEvent("well_driller_portfolio_click", {
                    project: project.name,
                    destination: project.url,
                  })
                }
                className="group block h-full rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-colors hover:border-[#E85D26]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0f0f0f]">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-sans font-semibold text-lg leading-snug mb-1">
                    {project.name}
                  </h3>
                  <p className="text-[#E85D26] font-sans text-xs font-semibold uppercase tracking-wider mb-3">
                    {project.meta}
                  </p>
                  <p className="text-stone font-sans text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-white/80 group-hover:text-[#E85D26] font-sans text-sm font-semibold transition-colors">
                    Visit the live site
                    <ExternalLink size={14} aria-hidden="true" />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <Link
            href="/featured-projects"
            onClick={() =>
              trackWellDrillerEvent("well_driller_portfolio_click", {
                destination: "/featured-projects",
              })
            }
            className="inline-flex items-center gap-2 border border-white/25 hover:border-[#E85D26] hover:text-[#E85D26] text-white font-sans font-semibold text-sm uppercase tracking-[0.14em] rounded-lg px-7 py-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          >
            View More of Our Work
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
