import { Helmet } from "react-helmet-async";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import aboutHeroBg from "@/assets/about-hero-bg.webp";

interface ElevatedHeroProps {
  /** Stacked headline lines; `accent` renders the line in brand orange. */
  lines: { text: string; accent?: boolean }[];
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Background image URL; defaults to the mountain shot used on /about. */
  backgroundImage?: string;
}

/**
 * Shared cinematic page header — mountain background with a stacked
 * uppercase headline. Used on /about and /services; each page passes
 * its own copy.
 */
export function ElevatedHero({
  lines,
  subheadline,
  ctaLabel,
  ctaHref,
  backgroundImage = aboutHeroBg,
}: ElevatedHeroProps) {
  const hasContentBelow = Boolean(subheadline || (ctaLabel && ctaHref));
  return (
    <>
    <Helmet>
      {/* LCP: fetch the hero background at high priority before CSS resolves it */}
      <link rel="preload" as="image" href={backgroundImage} fetchPriority="high" />
    </Helmet>
    <section
      className="relative min-h-[70vh] md:min-h-[65vh] flex items-center justify-center px-6 md:px-12 py-24 overflow-hidden"
      style={{
        backgroundColor: "#0f0f0f",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(10, 10, 10, 0.65)" }} />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h1
            className={`font-display font-bold uppercase text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.98] tracking-[-0.02em]${hasContentBelow ? " mb-8" : ""}`}
          >
            {lines.map((line) => (
              <span key={line.text} className={`block${line.accent ? " text-[#E85D26]" : ""}`}>
                {line.text}
              </span>
            ))}
          </h1>
          {subheadline && (
            <p className="text-white/85 font-sans text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              {subheadline}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-3 bg-[#E85D26] text-white font-sans font-bold uppercase tracking-[0.18em] text-sm px-8 py-4 rounded-none hover:bg-[#c94f20] transition-colors"
            >
              {ctaLabel}
              <ArrowRight size={16} />
            </Link>
          )}
        </ScrollReveal>
      </div>
    </section>
    </>
  );
}
