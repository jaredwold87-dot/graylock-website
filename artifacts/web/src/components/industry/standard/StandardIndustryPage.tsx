import React from "react";
import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FounderAccountabilitySection } from "@/components/home/FounderAccountabilitySection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StandardIndustryContent, IndustryProof, IndustrySection } from "./types";
import { RichText } from "./RichText";
import { isProofVerified } from "./proof-verification";
import { PROJECT_ASSETS } from "./project-assets";
import { IndustryHeroArt } from "./IndustryHeroArt";
import { RealtorHeroVisual } from "./RealtorHeroVisual";

export type StandardCtaPlacement = "hero" | "offer" | "final_cta";

interface StandardIndustryPageProps {
  data: StandardIndustryContent;
  primaryHref?: string | ((placement: StandardCtaPlacement) => string);
  onPrimaryClick?: (placement: StandardCtaPlacement) => void;
  onProjectClick?: () => void;
  onFaqExpand?: (question: string) => void;
}

function ProofSection({ proof, slot }: { proof: IndustryProof; slot: string }) {
  if (!proof) return null;
  return (
    <section data-section={slot} className="bg-white py-20 px-6 md:px-12 border-b border-black/[0.06]">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          {proof.eyebrow && (
            <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#B23E16] md:text-sm">
              {proof.eyebrow}
            </p>
          )}
          {proof.heading && (
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#1a202c] mb-8">
              {proof.heading}
            </h2>
          )}
          {proof.intro && (
            <p className="text-[#4a5568] text-lg mb-10">
              <RichText text={proof.intro} linkColorClass="text-[#B23E16]" />
            </p>
          )}

          {proof.kind === "quote" ? (
            <blockquote className="text-xl md:text-3xl font-display text-[#1a202c] leading-snug italic mb-6">
              {proof.quote}
            </blockquote>
          ) : (
            <div className="text-left space-y-6 text-[#1a202c]/80 text-lg font-sans">
              {proof.paragraphs?.map((p, i) => (
                <p key={i}>
                  <RichText text={p} linkColorClass="text-[#B23E16]" />
                </p>
              ))}
              {proof.items && (
                <ul className="space-y-4">
                  {proof.items.map((item, i) => (
                    <li key={i}>
                      <strong>{item.title}</strong>: <RichText text={item.body} linkColorClass="text-[#B23E16]" />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {(proof.attribution || proof.source) && (
            <div className="mt-8 text-sm text-[#4a5568]">
              {proof.attribution && <div className="font-semibold text-[#1a202c]">{proof.attribution}</div>}
              {proof.source && (
                <div>
                  {proof.sourceUrl ? (
                    <a href={proof.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[#B23E16] hover:underline">
                      {proof.source}
                    </a>
                  ) : (
                    proof.source
                  )}
                </div>
              )}
            </div>
          )}
          {proof.qualifier && <p className="mt-4 text-xs text-[#4a5568]/70 italic">{proof.qualifier}</p>}
        </ScrollReveal>
      </div>
    </section>
  );
}

function BulletSection({ section, slot }: { section: IndustrySection; slot: string }) {
  if (!section) return null;

  const hasWrapperHeading = !!section.heading;
  const CardTitleTag = hasWrapperHeading ? "h3" : "h2";

  return (
    <section data-section={slot} className="bg-white py-24 md:py-32 px-6 md:px-12 border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          {(section.eyebrow || section.heading || section.intro) && (
            <div className="max-w-3xl mb-16">
              {section.eyebrow && (
                <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#B23E16] md:text-sm">
                  {section.eyebrow}
                </p>
              )}
              {section.heading && (
                <h2 className="font-display text-4xl leading-tight text-[#1a202c] md:text-5xl">
                  {section.heading}
                </h2>
              )}
              {section.intro && (
                <p className="mt-6 font-sans text-lg text-[#4a5568] leading-relaxed">
                  <RichText text={section.intro} linkColorClass="text-[#B23E16]" />
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.items.map((item, i) => (
              <div key={i} className="bg-[#F8F7F5] rounded-xl p-8 border border-black/[0.05]">
                <CardTitleTag className="font-display text-2xl text-[#1a202c] mb-4">
                  {item.title}
                </CardTitleTag>
                <p className="font-sans text-base text-[#4a5568] leading-relaxed">
                  <RichText text={item.body} linkColorClass="text-[#B23E16]" />
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function StandardIndustryPage({
  data,
  primaryHref = "/get-started",
  onPrimaryClick,
  onProjectClick,
  onFaqExpand,
}: StandardIndustryPageProps) {
  const getPrimaryHref = (placement: StandardCtaPlacement) =>
    typeof primaryHref === "function" ? primaryHref(placement) : primaryHref;

  return (
    <div data-industry-route={data.route} className="theme-black bg-[#0F0F0F] min-h-screen">
      <section data-section="hero" className="relative bg-[#0F0F0F] text-offwhite overflow-hidden border-b border-white/5 py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
           <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#E85D26]/[0.05] blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="text-left">
              <ScrollReveal>
                <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E85D26] md:text-sm">
                  {data.hero.eyebrow}
                </p>
                <h1 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
                  {data.hero.heading}
                </h1>
                <p className="mt-6 max-w-2xl font-sans text-lg md:text-xl leading-relaxed text-stone">
                  <RichText text={data.hero.body} linkColorClass="text-[#E85D26]" />
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <CTAButton
                    href={getPrimaryHref("hero")}
                    onClick={() => onPrimaryClick?.("hero")}
                    className="w-full sm:w-auto h-auto min-h-[3.5rem] py-3 px-8 text-center leading-snug break-words"
                    variant="funnel"
                  >
                    Get Your Free Homepage Direction
                  </CTAButton>
                  {data.hero.secondaryHref && (
                    data.hero.secondaryHref.startsWith("#") ? (
                      <a
                        href={data.hero.secondaryHref}
                        className="text-sm font-semibold text-[#E85D26] hover:underline underline-offset-4 decoration-[#E85D26]/45 block"
                      >
                        {data.hero.secondaryLabel}
                      </a>
                    ) : data.hero.secondaryHref.startsWith("http") ? (
                      <a href={data.hero.secondaryHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-[#E85D26] hover:underline underline-offset-4 decoration-[#E85D26]/45">
                        {data.hero.secondaryLabel} <ExternalLink size={14} className="flex-shrink-0" />
                      </a>
                    ) : (
                      <Link href={data.hero.secondaryHref} className="text-sm font-semibold text-[#E85D26] hover:underline underline-offset-4 decoration-[#E85D26]/45 block">
                        {data.hero.secondaryLabel}
                      </Link>
                    )
                  )}
                </div>
                {data.hero.microcopy && (
                  <p className="mt-6 text-xs text-stone max-w-xl">
                    <RichText text={data.hero.microcopy} linkColorClass="text-[#E85D26]" />
                  </p>
                )}
              </ScrollReveal>
            </div>

            {/* Right Art */}
            <div className={data.route === "/websites-for-realtors"
              ? "relative max-w-2xl mx-auto w-full"
              : "hidden lg:block relative aspect-square max-w-xl mx-auto w-full opacity-80"}>
              <ScrollReveal delay={0.2} className="h-full">
                {data.route === "/websites-for-realtors"
                  ? <RealtorHeroVisual />
                  : <IndustryHeroArt route={data.route} />}
              </ScrollReveal>
            </div>
            
          </div>
        </div>
      </section>

      <section data-section="offer" className="bg-[#292B2E] py-24 md:py-32 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E85D26] md:text-sm text-center">
              {data.offer.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-white text-center mb-8">
              {data.offer.heading}
            </h2>
            <p className="text-stone text-lg leading-relaxed text-center mb-12">
              <RichText text={data.offer.body} linkColorClass="text-[#E85D26]" />
            </p>

            {data.offer.points && (
              <div className={`grid gap-8 mb-12 ${data.offer.points!.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                {data.offer.points.map((pt, i) => (
                  <div key={i} className={data.offer.points!.length > 1 ? "bg-[#0F0F0F] border border-white/10 rounded-xl p-6 md:p-8" : "max-w-3xl mx-auto"}>
                    <p className={`text-offwhite font-sans leading-relaxed ${data.offer.points!.length > 1 ? 'text-base' : 'text-lg text-center border-l-2 border-[#E85D26] pl-6 py-2'}`}>
                      <RichText text={pt} linkColorClass="text-[#E85D26]" />
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="text-center">
              <div className="mb-10 flex justify-center">
                <CTAButton
                  href={getPrimaryHref("offer")}
                  onClick={() => onPrimaryClick?.("offer")}
                  variant="funnel"
                  className="min-h-12 w-full max-w-[360px] px-7 text-base sm:w-auto"
                >
                  Get Your Free Homepage Direction
                </CTAButton>
              </div>
              {data.offer.microcopy && (
                <p className="text-stone text-sm mb-4">
                  <RichText text={data.offer.microcopy} linkColorClass="text-[#E85D26]" />
                </p>
              )}
              {data.offer.clarification && (
                <p className="text-stone text-xs italic mb-4">
                  <RichText text={data.offer.clarification} linkColorClass="text-[#E85D26]" />
                </p>
              )}
              {data.offer.links && (
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  {data.offer.links.map((lnk, i) => (
                    <Link key={i} href={lnk.href} className="text-[#E85D26] hover:underline underline-offset-4 decoration-[#E85D26]/45">
                      {lnk.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {data.review && isProofVerified(data.route, 'review') && (
        <ProofSection proof={data.review} slot="review" />
      )}

      <section data-section="featured-project" id="featured-project" className="bg-[#F4F1EC] py-24 md:py-32 px-6 md:px-12 border-b border-black/[0.06] scroll-mt-28" tabIndex={-1}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#B23E16] md:text-sm">
                  {data.project.eyebrow}
                </p>
                <h2 className="font-display text-4xl leading-tight text-[#1a202c] md:text-5xl lg:text-6xl mb-4">
                  {data.project.name}
                </h2>
                <p className="font-sans text-[#B23E16] font-semibold text-sm tracking-widest uppercase mb-6">
                  {data.project.descriptor}
                </p>
                <p className="font-sans text-lg text-[#4a5568] leading-relaxed mb-8">
                  <RichText text={data.project.body} linkColorClass="text-[#B23E16]" />
                </p>
                {data.project.href.startsWith("http") ? (
                  <a
                    href={data.project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onProjectClick}
                    className="inline-flex items-center gap-2 font-semibold text-[#B23E16] hover:text-[#B23E16] transition-colors motion-reduce:transition-none group"
                  >
                    {data.project.cta}
                    <ExternalLink
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform motion-reduce:transition-none motion-reduce:transform-none"
                    />
                  </a>
                ) : (
                  <Link
                    href={data.project.href}
                    onClick={onProjectClick}
                    className="inline-flex items-center gap-2 font-semibold text-[#B23E16] hover:text-[#B23E16] transition-colors motion-reduce:transition-none group"
                  >
                    {data.project.cta}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform motion-reduce:transition-none motion-reduce:transform-none"
                    />
                  </Link>
                )}
                {data.project.note && (
                  <p className="mt-6 text-sm text-[#4a5568] italic border-l-2 border-[#E85D26] pl-4">
                    <RichText text={data.project.note} linkColorClass="text-[#B23E16]" />
                  </p>
                )}
              </div>
              <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-black/[0.05]">
                <div className="flex items-center px-4 py-3 bg-[#e5e5e5] border-b border-black/[0.05]">
                  <span className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-black/[0.15]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-black/[0.15]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-black/[0.15]" />
                  </span>
                </div>
                <img
                  src={PROJECT_ASSETS[data.project.key]}
                  alt={data.project.alt}
                  className="w-full h-auto block object-cover group-hover:scale-[1.02] transition-transform duration-700 motion-reduce:transition-none motion-reduce:transform-none"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BulletSection section={data.problems} slot="problems" />
      <BulletSection section={data.delivery} slot="delivery" />

      <section data-section="how-it-works" id="how-it-works" className="relative bg-[#F4F1EC] py-24 md:py-32 px-6 md:px-12 border-b border-black/[0.06] scroll-mt-28" tabIndex={-1}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
            {data.process.eyebrow && (
              <span className="text-[#B23E16] font-sans font-semibold tracking-wider text-sm uppercase mb-4 block">
                {data.process.eyebrow}
              </span>
            )}
            {data.process.heading && (
              <h2 className="text-3xl md:text-5xl font-display text-[#1a202c] mb-6 leading-tight">
                {data.process.heading}
              </h2>
            )}
            {data.process.intro && (
              <p className="text-[#4a5568] text-base md:text-lg lg:text-xl font-sans leading-relaxed">
                <RichText text={data.process.intro} linkColorClass="text-[#B23E16]" />
              </p>
            )}
          </ScrollReveal>

          <div className="relative">
            <div className="block md:hidden absolute left-[20px] top-[20px] bottom-[40px] w-[1px] bg-[#d1d5db]" aria-hidden="true" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-y-24 gap-x-8 lg:gap-x-12 relative z-10">
              {data.process.items.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.15} className="relative">
                  <div
                    className={`hidden absolute top-[20px] left-[50px] w-[calc(100%+2rem-50px)] lg:w-[calc(100%+3rem-50px)] h-[1px] bg-[#d1d5db] -z-10
                      ${i === data.process.items.length - 1 ? '!hidden' : ''} 
                      ${i === 1 ? 'lg:block md:hidden' : 'md:block'}
                    `}
                    aria-hidden="true"
                  />
                  <div className="relative flex flex-col md:block items-start text-left pl-16 md:pl-0">
                    <div className="absolute md:relative top-0 left-0 md:inline-block bg-[#F4F1EC] md:pr-6 md:pb-6 z-10">
                      <span className="text-4xl md:text-5xl font-display leading-none block text-[#E85D26]">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="md:mt-2">
                      <h3 className="font-display mb-3 md:mb-4 leading-tight text-xl md:text-2xl text-[#1a202c]">
                        {step.title}
                      </h3>
                      <p className="font-sans leading-relaxed text-[#4a5568] text-base">
                        <RichText text={step.body} linkColorClass="text-[#B23E16]" />
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {!data.finalProofAfterTeam && data.finalProof && isProofVerified(data.route, 'finalProof') && (
        <ProofSection proof={data.finalProof} slot="final-proof" />
      )}

      <section data-section="faq" className="bg-white py-24 md:py-32 px-6 md:px-12 border-b border-black/[0.06]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-4xl leading-tight text-[#1a202c] md:text-5xl mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="multiple" className="w-full">
              {data.faq.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-black/[0.06] py-2">
                  <AccordionTrigger
                    onClick={(event) => {
                      if (event.currentTarget.dataset.state === "closed") {
                        onFaqExpand?.(faq.question);
                      }
                    }}
                    className="text-left font-sans text-lg font-semibold text-[#1a202c] hover:text-[#B23E16] hover:no-underline data-[state=open]:text-[#B23E16]"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#4a5568] leading-relaxed pb-6 pt-2 pr-6">
                    <RichText text={faq.answer} linkColorClass="text-[#B23E16]" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      <section data-section="team">
        <FounderAccountabilitySection />
      </section>

      {data.finalProofAfterTeam && data.finalProof && isProofVerified(data.route, 'finalProof') && (
        <ProofSection proof={data.finalProof} slot="final-proof" />
      )}

      <section data-section="final-cta" className="relative overflow-hidden border-t border-white/5 bg-[#0F0F0F] px-6 py-20 md:px-12 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E85D26]/[0.07] blur-[130px]"
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E85D26] md:text-sm">
              {data.finalCta.eyebrow}
            </p>
            <h2 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              {data.finalCta.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-stone md:text-xl">
              <RichText text={data.finalCta.body} linkColorClass="text-[#E85D26]" />
            </p>
            {data.finalCta.support && (
              <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-stone">
                <RichText text={data.finalCta.support} linkColorClass="text-[#E85D26]" />
              </p>
            )}
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
              <CTAButton
                href={getPrimaryHref("final_cta")}
                onClick={() => onPrimaryClick?.("final_cta")}
                variant="funnel"
                className="w-full max-w-[360px] sm:w-auto h-auto min-h-[3rem] py-3 px-4 text-center leading-snug break-words"
              >
                Get Your Free Homepage Direction
              </CTAButton>
            </div>
            {data.finalCta.microcopy && (
              <p className="mt-6 font-sans text-sm font-semibold text-offwhite text-center">
                <RichText text={data.finalCta.microcopy} linkColorClass="text-[#E85D26]" />
              </p>
            )}
            {data.finalCta.links && (
              <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs">
                {data.finalCta.links.map((lnk, i) => (
                  <Link key={i} href={lnk.href} className="text-[#E85D26] hover:underline underline-offset-4 decoration-[#E85D26]/45">
                    {lnk.label}
                  </Link>
                ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}