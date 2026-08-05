import { ScrollReveal } from "@/components/ui/ScrollReveal";
import aboutHeroBg from "@/assets/about-hero-bg.webp";

/**
 * Shared cinematic page header — mountain background with a stacked
 * uppercase headline. Used on /about and /services so both pages
 * carry the same header.
 */
export function ElevatedHero() {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-[65vh] flex items-center justify-center px-6 md:px-12 py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${aboutHeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(10, 10, 10, 0.65)" }} />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h1 className="font-display font-bold uppercase text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.98] tracking-[-0.02em]">
            <span className="block">We Started Graylock</span>
            <span className="block">Because Good Businesses</span>
            <span className="block text-[#E85D26]">Deserve Better.</span>
          </h1>
        </ScrollReveal>
      </div>
    </section>
  );
}
