import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import buyerVisual from "@/assets/realtor-buyer-visual.webp";
import sellerVisual from "@/assets/realtor-seller-visual.webp";

interface PathDef {
  key: "buyer" | "seller";
  event: "realtor_buyer_path_view" | "realtor_seller_path_view";
  label: string;
  img: string;
  imgAlt: string;
  actions: string[];
  outcome: string;
}

const PATHS: PathDef[] = [
  {
    key: "buyer",
    event: "realtor_buyer_path_view",
    label: "For Buyers",
    img: buyerVisual,
    imgAlt: "Home buyer browsing property listings on a phone",
    actions: [
      "Search homes.",
      "Explore listing details.",
      "Send a property inquiry.",
      "Start a conversation.",
    ],
    outcome: "A buyer conversation with property context\u2014not a random contact form submission.",
  },
  {
    key: "seller",
    event: "realtor_seller_path_view",
    label: "For Sellers",
    img: sellerVisual,
    imgAlt: "Well-kept home exterior representing a potential listing",
    actions: [
      "Request a valuation.",
      "Share an address and timing.",
      "See local proof.",
      "Book a listing conversation.",
    ],
    outcome: "A seller lead with context\u2014not just a bare email address.",
  },
];

/**
 * Buyer/seller two-path band — shows the site serves both audiences without
 * doubling page length. Photo panels as atmosphere with flat checklists.
 */
export function RealtorTwoPathsSection() {
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const fired = useRef<Record<string, boolean>>({});

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observers: IntersectionObserver[] = [];
    for (const path of PATHS) {
      const el = panelRefs.current[path.key];
      if (!el) continue;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !fired.current[path.key]) {
              fired.current[path.key] = true;
              trackRealtorEvent(path.event);
              observer.disconnect();
              return;
            }
          }
        },
        { threshold: 0.5 },
      );
      observer.observe(el);
      observers.push(observer);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="bg-[#F4F1EC] py-20 md:py-28 px-6 md:px-12 border-t border-[#0F0F0F]/10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center max-w-[860px] mx-auto mb-12 md:mb-16">
          <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Two Audiences. One Clear Website.
          </p>
          <h2 className="font-display text-[#0F0F0F] text-4xl md:text-[52px] leading-[1.08] mb-6">
            Buyers Need a Search Path. Sellers Need a Reason to Raise Their Hand.
          </h2>
          <p className="text-[#0F0F0F]/70 font-sans text-lg leading-relaxed">
            Your website should make both journeys feel simple, local, and unmistakably
            connected to your brand.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {PATHS.map((path, i) => (
            <ScrollReveal key={path.key} delay={i * 0.08}>
              <div
                ref={(el) => {
                  panelRefs.current[path.key] = el;
                }}
                className="relative rounded-lg overflow-hidden min-h-[420px] md:min-h-[480px] flex"
              >
                <img
                  src={path.img}
                  alt={path.imgAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(10,10,10,0.72) 55%, rgba(10,10,10,0.45) 100%)",
                  }}
                />
                <div className="relative z-10 p-7 md:p-9 flex flex-col justify-end mt-auto w-full">
                  <div className="h-[3px] w-9 bg-[#E85D26] mb-4" aria-hidden="true" />
                  <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-5">
                    {path.label}
                  </p>
                  <ul className="space-y-2.5">
                    {path.actions.map((action) => (
                      <li key={action} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          strokeWidth={3}
                          className="text-[#E85D26] flex-shrink-0 mt-[5px]"
                          aria-hidden="true"
                        />
                        <span className="text-offwhite font-sans text-base md:text-lg leading-snug">
                          {action}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 pt-5 border-t border-white/15 font-sans text-[15px] leading-relaxed text-stone">
                    <span className="text-white font-semibold">Outcome: </span>
                    {path.outcome}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12 md:mt-14">
          <p className="font-hand font-semibold text-[28px] md:text-[38px] leading-snug text-[#B23E16]">
            Buyers search. Sellers compare. Be ready for both.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
