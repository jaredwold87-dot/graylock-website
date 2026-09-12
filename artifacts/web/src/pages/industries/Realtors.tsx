import { useEffect, useRef } from "react";
import { RealtorDifferenceSection } from "@/components/realtors/RealtorDifferenceSection";
import { RealtorFeaturedProject } from "@/components/realtors/RealtorFeaturedProject";
import { OfferBreakdownSection } from "@/components/home/OfferBreakdownSection";
import { SEO } from "@/components/SEO";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { realtorGetStartedHref } from "@/lib/realtorLinks";
import { RealtorHeroVisual } from "@/components/industry/standard/RealtorHeroVisual";
import { FounderAccountabilitySection } from "@/components/home/FounderAccountabilitySection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const PAGE_TITLE = "Custom Real Estate Websites for Agents & Teams | Graylock Digital";
const PAGE_URL = "https://graylockdigital.com/websites-for-realtors";
const META_DESCRIPTION = "Give buyers a clear way to explore, give sellers a clear reason to reach out, and make the local expertise behind your business easy to understand.";

const FAQ_DATA = [
  {
    question: "What is a Free Homepage Direction?",
    answer: "It is a custom direction for your homepage, built around your market, services, proof, and buyer and seller paths. You review it before deciding whether to approve a paid website build. A Free Homepage Direction is not a free website."
  },
  {
    question: "Can my website include property search or IDX?",
    answer: "Possibly. Property-search and IDX availability depend on your local MLS, brokerage, provider, eligibility, available data, required disclosures, and third-party fees. Graylock reviews that path before the final build scope is confirmed."
  },
  {
    question: "How quickly can a standard website be built?",
    answer: "After the Homepage Direction, required materials, and approvals are confirmed, standard websites are typically built, tested, and launched in 7–10 business days. Larger, more complex, or third-party-dependent work may take longer."
  },
  {
    question: "What should I provide?",
    answer: "The final scope determines the required inputs, which may include business and team details, service-area information, brand assets, approved photography, property or integration information, copy inputs, domain access, and any MLS, brokerage, or provider items that require your involvement."
  }
];

export default function Realtors() {
  const viewTracked = useRef(false);

  useEffect(() => {
    if (viewTracked.current) return;
    viewTracked.current = true;
    trackRealtorEvent("realtor_landing_view");
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["WebPage", "FAQPage"],
        "@id": PAGE_URL,
        name: PAGE_TITLE,
        url: PAGE_URL,
        description: META_DESCRIPTION,
        isPartOf: {
          "@type": "WebSite",
          name: "Graylock Digital",
          url: "https://graylockdigital.com",
        },
        mainEntity: FAQ_DATA.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <div data-realtor-page className="theme-black">
      <SEO
        title={PAGE_TITLE}
        description={META_DESCRIPTION}
        url={PAGE_URL}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 1. Hero */}
      <section
        data-section="hero"
        className="relative overflow-hidden bg-[#0F0F0F] pt-32 pb-16 md:py-24 lg:pt-[20vh] lg:pb-0"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center lg:items-start lg:min-h-[600px]">
            {/* Copy Column */}
            <div className="flex flex-col justify-center max-w-2xl lg:pb-24">
              <ScrollReveal>
                <p className="text-[#E85D26] text-xs md:text-sm font-sans font-bold uppercase tracking-widest mb-4">
                  CUSTOM WEBSITES FOR REAL ESTATE AGENTS & TEAMS
                </p>
                <h1 className="text-[2.5rem] md:text-4xl lg:text-6xl xl:text-[4rem] font-display text-white leading-[1.15] md:leading-[1.1] mb-6 lg:max-w-xl">
                  Your Market Is Local. Your Website Should Feel That Way.
                </h1>
                <p className="text-stone text-xl md:text-xl xl:text-[1.375rem] font-sans mb-6 md:mb-8 max-w-xl leading-snug md:leading-relaxed">
                  Give buyers a clear way to explore, give sellers a clear reason to reach out, and make the local expertise behind your business easy to understand.
                </p>
                <div className="mt-8 md:mt-0 flex flex-col items-stretch gap-4 md:flex-row md:items-center md:w-max">
                  <CTAButton
                    variant="funnel"
                    className="w-full min-h-14 px-5 md:w-auto md:min-h-0 md:px-8 md:shrink-0 md:whitespace-nowrap text-center"
                    href={realtorGetStartedHref("hero")}
                    onClick={() => trackRealtorEvent("realtor_hero_cta_click", { cta_placement: "hero" })}
                  >
                    Get Your Free Homepage Direction
                  </CTAButton>
                  <a
                    href="#featured-project"
                    className="cta-shimmer inline-flex items-center justify-center font-sans font-semibold tracking-wide py-4 rounded transition-all duration-300 border-2 border-orange text-orange hover:bg-orange hover:text-white bg-transparent hover:shadow-[0_4px_20px_rgba(232,93,38,0.25)] w-full min-h-14 px-5 md:w-auto md:min-h-0 md:px-8 md:shrink-0 md:whitespace-nowrap text-center"
                  >
                    View Willow Realty Group
                  </a>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-white/60">
                  Start with a 15-minute fit call. If Graylock is the right fit, you see a custom Homepage Direction before any build fee is due.
                </p>
              </ScrollReveal>
            </div>
            {/* Visual Column */}
            <div className="relative w-full lg:-mt-4 xl:-mt-8">
              <ScrollReveal delay={0.1}>
                <RealtorHeroVisual />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Direction-before-fee offer */}
      <RealtorDifferenceSection />

      {/* 3. Willow project and full client review */}
      <RealtorFeaturedProject />

      {/* 5. Shared homepage process layout with real-estate details */}
      <OfferBreakdownSection
        sectionId="realtor-how-it-works"
        dataSection="how-it-works"
        steps={[
          {
            num: "01",
            title: "15-Minute Fit Call",
            desc: "We learn about your market, current website, buyer and seller priorities, and any MLS or brokerage context that affects the website.",
            highlight: false,
          },
          {
            num: "02",
            title: "Your Free Homepage Direction",
            desc: "If Graylock is the right fit, we create a custom Homepage Direction around your business before any build fee is due.",
            highlight: false,
          },
          {
            num: "03",
            title: "Approve the Direction",
            desc: "You review the direction, scope, and next steps. If it feels right, you approve the build and move forward with clarity.",
            highlight: false,
          },
          {
            num: "04",
            title: "Built and Launched on Your Domain",
            desc: "After the Homepage Direction, required materials, and approvals are confirmed, standard websites are typically built, tested, and launched in 7–10 business days.",
            highlight: false,
          },
        ]}
      />

      {/* 6. FAQ */}
      <section
        data-section="faq"
        className="bg-white py-20 lg:py-32 border-t border-black/[0.06]"
      >
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-display text-3xl leading-tight text-[#1a202c] md:text-4xl text-center mb-12">
              Questions Before You Start?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Accordion type="multiple" className="w-full">
              {FAQ_DATA.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-black/10 py-2">
                  <AccordionTrigger
                    onClick={(event) => {
                      if (event.currentTarget.dataset.state === "closed") {
                        trackRealtorEvent("realtor_faq_expand", { question: faq.question });
                      }
                    }}
                    className="text-lg font-semibold text-[#1a202c] hover:text-[#B23E16]"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#1a202c]/70 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Shared existing Tim and Jared component */}
      <div data-section="team">
        <FounderAccountabilitySection />
      </div>

      {/* 8. Clean final CTA */}
      <section
        data-section="final-cta"
        className="bg-[#0F0F0F] py-20 lg:py-32 text-center"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E85D26]">
              YOUR NEXT STEP
            </p>
            <h2 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl mx-auto max-w-3xl">
              See the Direction for Your Real Estate Website Before You Commit to the Build.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-white/70 mx-auto max-w-2xl">
              Start with a 15-minute fit call. If Graylock is the right fit, we create a custom Homepage Direction for your business before any build fee is due.
            </p>

            <div className="mt-12 flex flex-col items-center">
              <CTAButton
                variant="funnel"
                href={realtorGetStartedHref("final_cta")}
                onClick={() => trackRealtorEvent("realtor_final_cta_click", { cta_placement: "final_cta" })}
                className="w-full sm:w-auto"
              >
                Get Your Free Homepage Direction
              </CTAButton>
              <p className="mt-6 text-sm text-white/50">
                No build fee to see the direction. No pressure. No obligation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
