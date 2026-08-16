import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import devicesCutout from "@/assets/interior-finishes-devices.webp";
import galleryExample from "@/assets/cabinet-gallery-example.webp";

/**
 * "What a Better Cabinet-Maker Website Does" (spec §4.4) — type-only
 * handwritten lead-in, six-feature list, and a browser-framed gallery page
 * from the sample cabinet-maker build as the example of what we deliver.
 */
const FEATURES = [
  {
    title: "Project Galleries That Sell the Work",
    desc: "Show kitchens, built-ins, closets, bathroom vanities, and commercial or specialty work in a structure that makes every project easy to explore—not buried in a random photo folder.",
  },
  {
    title: "Trust Before the Consultation",
    desc: "Tell the story behind your shop: experience, process, materials, service area, reviews, craftsmanship, and the kind of projects you are built to take on.",
  },
  {
    title: "Clear Paths for Homeowners, Builders + Designers",
    desc: "Guide each visitor toward the right next step—request a consultation, ask about a remodel, share plans, upload inspiration, or start a quote request.",
  },
  {
    title: "Local Search Built Into the Foundation",
    desc: "Structure the website around the services, project types, communities, and questions people actually use when searching for custom cabinetry in your area.",
  },
  {
    title: "Inquiries Delivered Where You Need Them",
    desc: "Send consultation and quote requests to the designated email inbox or CRM with the details your team needs to begin the right conversation.",
  },
  {
    title: "Premium on Every Screen",
    desc: "The homeowner who saves your work on a phone should experience the same level of quality as the person reviewing your portfolio on a desktop.",
  },
];

const LEAD_IN_LINES = [
  "You build the kind of work they want.",
  "You serve their project area.",
  "You are easy to start a conversation with.",
];

export function CabinetMakerWhatSection() {
  return (
    <section
      id="what-we-do"
      className="scroll-mt-[118px] bg-white py-20 md:py-28 px-6 md:px-12 border-t border-black/5"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <p className="text-[#B23E16] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-[44px] font-display text-[#1A1A1A] leading-tight">
            When Someone Is Investing in a Custom Space, Your Website Should Make Three Things
            Clear:
          </h2>
        </ScrollReveal>

        {/* Large type-only lead-in (spec) — handwritten, spread left / center /
            right across the top of the section (stacked + centered on mobile) */}
        <ScrollReveal className="mb-14 md:mb-20">
          <div className="flex flex-col items-center gap-1 lg:flex-row lg:items-baseline lg:justify-between lg:gap-x-8">
            {LEAD_IN_LINES.map((line) => (
              <p
                key={line}
                className="font-hand font-semibold text-[28px] md:text-[32px] lg:text-[21px] xl:text-[26px] text-[#B23E16] leading-snug text-center lg:whitespace-nowrap"
              >
                {line}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          {/* Device mockup stacked above the browser-framed gallery-page
              example — images first on mobile (spec responsive) */}
          <ScrollReveal>
            <img
              src={devicesCutout}
              alt="A custom cabinet-maker website concept shown on a laptop and phone, with premium kitchen photography and a consultation call to action"
              className="w-full h-auto mb-10"
              style={{ filter: "drop-shadow(0 24px 32px rgba(0,0,0,0.16))" }}
              loading="lazy"
              decoding="async"
            />
            <figure>
              <div className="rounded-xl overflow-hidden bg-white border border-black/10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)]">
                <div
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-[#F5F5F5] border-b border-black/[0.06]"
                  aria-hidden="true"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DBD7CF]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DBD7CF]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DBD7CF]" />
                </div>
                <img
                  src={galleryExample}
                  alt="A project-gallery page from a sample cabinet-maker website — a clean grid of custom kitchen photography that makes every project easy to explore"
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-4 text-center font-hand font-semibold text-[22px] md:text-[24px] text-[#B23E16]">
                An elegant gallery to showcase your portfolio.
              </figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ul className="space-y-6">
              {FEATURES.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <CheckCircle2
                    size={24}
                    strokeWidth={2}
                    className="text-[#E85D26] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-[#1A1A1A] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[#1A1A1A]/70 text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
