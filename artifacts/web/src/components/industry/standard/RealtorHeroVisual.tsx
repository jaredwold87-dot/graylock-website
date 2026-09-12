import devices from "@/assets/hero-mobile-willow-devices.webp";
import review from "@/assets/reviews/mark_nelson_hero_extended.webp";

/** The homepage's original Willow devices and complete review artwork. */
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
      <figure className="relative z-10 ml-[5%] -mt-[16.46%] w-[62.5%]">
        <img
          src={review}
          width={962}
          height={396}
          alt="Mark Nelson’s five-star Google review excerpt: The lead generation has been amazing, we have been converting leads into actual customers because of this website. My previous vendor I used for our website platform generated a lot of leads, but no conversions into actual customers. I highly recommend Graylock Digital."
          className="w-full h-auto rounded-lg shadow-lg ring-2 ring-[#C5DA5A]"
        />
        <figcaption className="mt-2 text-center text-offwhite/80 font-sans text-[9px] sm:text-xs">
          Mark Nelson · Willow Realty Group · Review excerpt
        </figcaption>
      </figure>
    </div>
  );
}