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
    alt: "The Rosenlund Drilling website built by Graylock Digital, shown on a laptop",
    description:
      "A bold, heritage-driven site for Elko's premier industrial drilling contractor — built for mining operations, ranches, and rural property owners who can't afford to guess on their water supply.",
  },
  {
    name: "TekMark Industries",
    meta: "Casing Handling Tools · Global · Manufactured in the USA",
    url: "https://www.tekmarkwellcasingtools.com/",
    image: tekmarkImg,
    alt: "The TekMark Industries website built by Graylock Digital, shown on a laptop",
    description:
      "A precision-focused site for a U.S. manufacturer of well casing handling tools — built to give drilling professionals a clear path from product specs to a purchase conversation.",
  },
  {
    name: "JC's Well Services",
    meta: "Well Pumps & Water Systems · Eugene & Lane County, OR",
    url: "https://jcswellservices.com/",
    image: jcsImg,
    alt: "The JC's Well Services website built by Graylock Digital, shown on a laptop",
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
            The Kind of Standard We Build Toward
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
            A Well-Drilling Website Should Look as Capable as the Company Behind It.
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            A better website is not about making the business look flashy. It is about helping a
            customer understand who they are calling, what work you do, where you work, and why
            they should trust you before they ever pick up the phone.
          </p>
        </ScrollReveal>

        <ScrollReveal className="text-center -mt-3 md:-mt-5 mb-10 md:mb-12">
          <p className="font-hand font-semibold text-[28px] md:text-[38px] text-[#E85D26] leading-snug">
            These are our customers and the websites we&rsquo;ve built.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14 mb-14 md:mb-16">
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
                className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
              >
                {/* Laptop mockup — screen bezel + base, no card wrapper */}
                <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
                  <div className="w-[94%] mx-auto rounded-t-lg bg-[#1c1c1e] border border-b-0 border-white/15 p-1.5 md:p-2 shadow-[0_28px_50px_-24px_rgba(0,0,0,0.85)]">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto block rounded-[3px]"
                    />
                  </div>
                  <div className="relative h-2.5 md:h-3 w-full rounded-b-xl bg-gradient-to-b from-[#3e3e42] to-[#232326] border border-white/10">
                    <div
                      className="absolute left-1/2 top-0 -translate-x-1/2 h-[45%] w-[13%] rounded-b-md bg-[#151517]"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Plain text below the device */}
                <div className="mt-6">
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
