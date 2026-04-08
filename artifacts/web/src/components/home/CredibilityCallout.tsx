import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CredibilityCallout() {
  return (
    <div className="bg-charcoal py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl md:text-7xl font-display text-gradient stat-glow mb-4">
            75%
          </div>
          <p className="text-offwhite font-sans text-lg md:text-xl leading-relaxed mb-3">
            of potential clients judge a practice's credibility based on their
            website design alone.
          </p>
          <p className="text-stone/60 font-sans text-sm">
            Source:{" "}
            <a
              href="https://credibility.stanford.edu/guidelines/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-orange transition-colors"
            >
              Stanford Web Credibility Research
            </a>
          </p>
        </div>
      </ScrollReveal>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </div>
  );
}
