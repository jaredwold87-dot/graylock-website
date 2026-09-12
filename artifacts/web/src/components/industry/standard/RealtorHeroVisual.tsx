import devices from "@/assets/hero-mobile-willow-devices.webp";

/** The homepage's original Willow laptop-and-phone artwork. */
export function RealtorHeroVisual() {
  return (
    <div className="relative isolate w-full overflow-hidden py-10 sm:py-12">
      <img
        src={devices}
        alt="Willow Realty Group’s website on a laptop and phone"
        className="w-full h-auto"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}