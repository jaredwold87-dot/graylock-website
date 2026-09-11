import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import heroDesktopTopographic from "@/assets/hero-desktop-topographic.webp";
import heroMobileTopographic from "@/assets/hero-mobile-topographic.webp";
import heroMobileWillowDevices from "@/assets/hero-mobile-willow-devices.webp";
import markHeroExcerpt from "@/assets/reviews/mark_nelson_hero_excerpt.webp";

function HeroClientReview() {
  return (
    <figure className="mt-4 w-full max-w-[410px] mx-auto lg:mt-[-84px] lg:translate-x-[-68px] relative z-10">
      <img
        src={markHeroExcerpt}
        width={962}
        height={276}
        alt="Mark Nelson’s five-star Google review excerpt: The lead generation has been amazing, we have been converting leads into actual customers because of this website."
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <figcaption className="mt-2 text-center text-offwhite/80 font-sans text-xs">
        Mark Nelson · Willow Realty Group · Review excerpt
      </figcaption>
    </figure>
  );
}

export function HeroSection() {
  return (
    <>
    <section
      className="overflow-hidden relative md:min-h-screen lg:min-h-[max(100vh,calc(20vh+min(28.633vw,427px)+170px))] md:flex md:flex-col"
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
      <div className="absolute hidden lg:flex pointer-events-none left-[75%] -translate-x-1/2 top-[20vh] w-[min(44vw,656px)] z-[1] flex-col items-center">
        <img
          src={heroMobileWillowDevices}
          alt="Willow Realty Group’s website on a laptop and phone"
          className="w-full h-auto"
          loading="eager"
          decoding="async"
        />
        <HeroClientReview />
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

            <div className="md:hidden">
              <div className="mt-8">
                <CTAButton href="/get-started" variant="funnel" className="w-full min-h-14 px-5">
                  Request a 15-Minute Discovery Call
                </CTAButton>
              </div>
              <CTAButton href="/featured-projects" variant="outline" className="w-full min-h-14 px-5 mt-4">
                See Real Client Websites
              </CTAButton>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <CTAButton href="/get-started" variant="funnel">
                  Request a 15-Minute Discovery Call
                </CTAButton>
                <CTAButton href="/featured-projects" variant="outline">
                  See Real Client Websites
                </CTAButton>
              </div>
            </div>
            <div className="lg:hidden mt-10 max-w-lg mx-auto">
              <img
                src={heroMobileWillowDevices}
                alt="Willow Realty Group’s website on a laptop and phone"
                className="w-full h-auto"
                loading="lazy"
              />
              <HeroClientReview />
            </div>
          </ScrollReveal>
        </div>
      </div>

    </section>
    </>
  );
}
