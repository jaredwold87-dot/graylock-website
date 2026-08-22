import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import heroDesktopTopographic from "@/assets/hero-desktop-topographic.webp";
import heroMobileTopographic from "@/assets/hero-mobile-topographic.webp";
import heroMobileWillowDevices from "@/assets/hero-mobile-willow-devices.webp";

export function HeroSection() {
  return (
    <>
    <section
      className="overflow-hidden relative md:min-h-screen md:flex md:flex-col"
      style={{ backgroundColor: "#0f0f0f" }}
    >
      {/* Mobile: textured wallpaper with a dark text-safe overlay */}
      <img
        src={heroMobileTopographic}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover md:hidden pointer-events-none"
        loading="eager"
        decoding="async"
      />
      <div
        className="absolute inset-0 md:hidden pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, rgba(7,7,7,0.58) 0%, rgba(7,7,7,0.48) 55%, rgba(7,7,7,0.38) 100%)",
        }}
      />
      {/* Layer 6: hairline divider at bottom of hero */}
      <div
        className="absolute inset-x-0 bottom-0 h-px md:hidden pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(232,93,38,0.5) 50%, transparent 100%)",
        }}
      />
      {/* Desktop/tablet topographic background */}
      <div className="hidden md:block">
        <img
          src={heroDesktopTopographic}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {/* Tablet only (768–1023px): heavy near-black overlay over the desktop image */}
      <div
        className="absolute inset-0 hidden md:block lg:hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.85) 55%, rgba(10,10,10,0.78) 100%)",
        }}
      />
      {/* Desktop: subtle text-safe gradient over the topographic background */}
      <div
        className="absolute inset-0 hidden lg:block pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(8,8,8,0.58) 0%, rgba(8,8,8,0.38) 42%, rgba(8,8,8,0.12) 68%, transparent 82%)",
        }}
      />
      {/* Desktop: shared Willow laptop-and-phone cutout with proof caption */}
      <div className="absolute hidden lg:flex pointer-events-none right-[-1.5vw] top-[20vh] w-[min(55vw,820px)] z-[1] flex-col items-center">
        <img
          src={heroMobileWillowDevices}
          alt=""
          aria-hidden="true"
          className="w-full h-auto"
          loading="eager"
          decoding="async"
        />
        <p className="mt-2 text-center text-stone/80 font-sans text-xs tracking-wide">
          A real website designed and built by Graylock Digital.
        </p>
      </div>
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10 pt-32 pb-16 md:py-24 md:flex-1 md:flex md:items-center lg:items-start lg:pt-[20vh]">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="text-[#E85D26] text-xs md:text-sm font-sans font-bold uppercase tracking-widest mb-4">
              Custom Websites for Service Businesses
            </p>
            <h1 className="text-[2.5rem] md:text-4xl lg:text-6xl font-display text-white leading-[1.15] md:leading-[1.1] mb-6 lg:max-w-xl">
              Every Day Your Website Underperforms,{" "}
              <span>a Client Chooses Your Competitor.</span>
            </h1>
            <p className="text-stone text-xl md:text-xl font-sans mb-6 md:mb-8 max-w-xl leading-snug md:leading-relaxed">
              We build custom, conversion-focused websites that show up on Google, earn trust in seconds, and turn visitors into booked appointments — live in 7–10 days.
            </p>

            {/* Mobile-only sequence: proof image → CTA → reassurance */}
            <div className="md:hidden">
              <div className="-mx-6">
                <img
                  src={heroMobileWillowDevices}
                  alt="The Willow Realty Group website built by Graylock Digital, shown on a laptop and upright phone"
                  className="w-full h-auto"
                  loading="eager"
                  decoding="async"
                />
                <p className="text-stone/90 font-sans text-xs text-center mt-1">
                  A real website designed and built by Graylock Digital.
                </p>
              </div>

              <div className="flex justify-center mt-8 mb-6">
                <CTAButton
                  href="/get-started"
                  variant="funnel"
                  className="w-full"
                >
                  Book a Discovery Call
                </CTAButton>
              </div>

              <p className="text-offwhite font-sans text-sm text-center leading-snug text-balance">
                We'll show you exactly what your new site could look like — before you spend a dollar.
              </p>
            </div>

            {/* Tablet/desktop sequence */}
            <div className="hidden md:block">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <CTAButton href="/get-started" variant="funnel">
                  Book a Discovery Call
                </CTAButton>
              </div>

              <p className="text-stone/80 font-sans text-base">
                We'll show you exactly what your new site could look like — before you spend a dollar.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

    {/* Solid trust bar at the bottom of the hero */}
    <div className="relative z-10 hidden md:block bg-black border-t border-white/[0.08] py-4 md:py-5 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-start w-fit lg:w-auto lg:flex-row lg:flex-wrap lg:items-center lg:justify-between gap-x-8 gap-y-2.5">
        {[
          "Show up when clients search for you",
          "Turn visitors into calls and estimate requests",
          "Live in 7–10 days",
          "Free website refresh every two years",
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <Check size={15} strokeWidth={2.5} className="text-[#E85D26] flex-shrink-0" />
            <span className="text-stone font-sans text-sm md:text-[15px] leading-snug">{text}</span>
          </div>
        ))}
      </div>
    </div>
    </section>
    </>
  );
}
