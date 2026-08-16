import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useAuctioneerSectionView } from "@/lib/auctioneerAnalytics";
import goalsBg from "@/assets/auctioneer-goals-bg.webp";

/**
 * "Three Goals. One Better Website." (spec §3) — full-width cinematic photo
 * of an auctioneer actively working a sale, black mask applied in CSS
 * (74% — inside the framework's 62–76% range; never baked into the asset),
 * heading + three equal cards on top, orange handwritten line at the bottom.
 * No guaranteed booking/ranking/revenue claims (spec).
 */
const GOALS = [
  {
    title: "Make Your Services Impossible to Miss.",
    copy: "We turn your auction services, specialties, event experience, and brand into a presentation that feels organized, professional, and worth hiring—before you ever get on a call.",
  },
  {
    title: "Elevate Your Website. Elevate Your Reputation.",
    copy: "Your website should match the confidence, preparation, and experience you bring to the room. We make your specialties, history, process, and proof easier for the committees, organizations, and sellers who hire you to trust.",
  },
  {
    title: "Make It Easier to Book Your Next Auction.",
    copy: "We structure the site around the auction services, event types, locations, and questions your clients search for—then give qualified visitors a direct path to request a consultation or discuss their event or sale.",
  },
];

export function AuctioneerGoalsSection() {
  const sectionRef = useAuctioneerSectionView<HTMLElement>("auctioneer_goals_section_view");

  return (
    <section
      ref={sectionRef}
      id="three-goals"
      className="scroll-mt-[118px] relative bg-[#0f0f0f] py-20 md:py-28 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Live-auction photo background */}
      <img
        src={goalsBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      {/* CSS black mask — 74%, inside the framework's 62–76% range; not baked in */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ backgroundColor: "rgba(10,10,10,0.74)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Three Goals. One Better Website.
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white leading-tight mb-5">
            What We Will Do for You.
          </h2>
          <p className="text-stone font-sans text-lg leading-relaxed max-w-[700px] mx-auto">
            We are not building another generic service-business website. We are building an
            auctioneer website designed to promote your services, establish trust, and make
            you the easy choice for the next event or sale.
          </p>
        </ScrollReveal>

        {/* Three equal cards over the image band; stack 1 → 2 → 3 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {GOALS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.05] p-6 md:p-7">
                <div className="h-[3px] w-9 bg-[#E85D26] mb-4" aria-hidden="true" />
                <h3 className="font-display text-2xl md:text-[26px] text-white leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-stone font-sans text-base md:text-lg leading-relaxed">
                  {item.copy}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center max-w-2xl mx-auto mt-12 md:mt-14">
          <p className="font-hand font-semibold text-[28px] md:text-[38px] text-[#E85D26] leading-snug">
            More trust. More inquiries. More bookings.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
