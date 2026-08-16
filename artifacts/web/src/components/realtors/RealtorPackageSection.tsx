import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";

/**
 * "What Your Realtor Website Package Includes" — makes the managed scope
 * tangible before pricing in plain customer language. Single centered
 * column (no technical "confirmed after review" checklist), with a quiet
 * listings/integrations note below the included list. Flat, no card boxes.
 */
const INCLUDED = [
  "Custom-branded website built for mobile",
  "Local pages that help buyers and sellers find you",
  "Clear paths for property inquiries, seller valuations, consultations, and contact requests",
  "Hosting, security, backups, maintenance, and ongoing support",
  "Website updates and refresh benefits while subscribed",
  "Standard property-listing display when it is available for your market",
];

export function RealtorPackageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewFired = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || viewFired.current || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !viewFired.current) {
            viewFired.current = true;
            trackRealtorEvent("realtor_package_scope_view");
            observer.disconnect();
            return;
          }
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="package-scope"
      className="bg-[#1a1a1a] py-20 md:py-28 px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-[820px] mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-white leading-tight mb-5">
            What Your Realtor Website Package Includes.
          </h2>
          <p className="text-stone font-sans text-lg leading-relaxed">
            A custom, maintained real-estate website built to help local buyers and
            sellers understand your services, trust your brand, and take the next step.
          </p>
        </ScrollReveal>

        <ScrollReveal className="max-w-[680px] mx-auto">
          <ul className="space-y-4 md:space-y-5">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <Check
                  size={17}
                  strokeWidth={2.5}
                  className="text-white bg-[#E85D26] rounded-full p-[3px] w-[19px] h-[19px] flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-offwhite font-sans text-[15px] md:text-base leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Quiet, secondary note — plain-language stand-in for the old technical column */}
        <ScrollReveal delay={0.1} className="max-w-[680px] mx-auto mt-12 md:mt-14">
          <div className="border-l-2 border-stone/30 pl-5 md:pl-6">
            <h3 className="font-display text-offwhite text-lg md:text-xl leading-snug mb-2">
              A quick note on property listings and integrations
            </h3>
            <p className="text-stone font-sans text-[15px] leading-relaxed">
              Live property listings and certain advanced tools depend on your local MLS
              rules and the systems you already use. Before we build, we confirm what is
              available in your area and make sure the website is scoped around the way
              you actually work &mdash; so there are no surprises.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
