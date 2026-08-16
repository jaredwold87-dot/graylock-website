import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useAuctioneerSectionView } from "@/lib/auctioneerAnalytics";
import whoLive from "@/assets/auctioneer-who-live.webp";
import whoGeneric from "@/assets/auctioneer-who-generic.webp";
import whoSeller from "@/assets/auctioneer-who-seller.webp";

/**
 * "Who We Work With" (spec §2) — three dark cards with premium
 * auction-specific imagery (a live auction scene, an outdated generic
 * interface visual, and a seller/event-planning interaction) and orange
 * line accents on the light band, so the page keeps the framework's
 * dark/light rhythm after the dark hero.
 */
const CARDS = [
  {
    image: whoLive,
    alt: "Auctioneer working a live sale from the podium in front of an attentive seated crowd — the craft and command a website should put on display",
    title: "Are Exceptional in the Room—But Undersold Online.",
    copy: "You know how to run a room, keep a crowd engaged, and deliver on sale day. But when a nonprofit board, event committee, or seller looks you up, your website does not show them any of that.",
  },
  {
    image: whoGeneric,
    alt: "Auction company owner reviewing printed event materials in a ballroom while staff prepare tables behind her",
    title: "Look Generic Online—Even Though Their Business Is Not.",
    copy: "A template site can make a seasoned auctioneer look interchangeable with every other name in the search results. Your website should make your experience, specialties, and professionalism obvious before anyone picks up the phone.",
  },
  {
    image: whoSeller,
    alt: "Auctioneer sitting down with a charity committee at a ballroom table to review the auction program together",
    title: "Need More of the Right Clients Reaching Out.",
    copy: "The website should make it easy for a nonprofit, gala committee, property owner, rancher, or executor to understand what you do and take the next step toward booking a conversation.",
  },
];

export function AuctioneerWhoSection() {
  const sectionRef = useAuctioneerSectionView<HTMLElement>("auctioneer_who_we_work_with_view");

  return (
    <section
      ref={sectionRef}
      id="who-we-work-with"
      className="scroll-mt-[118px] relative bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* faint topo backdrop: light contour rings */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 110% -10%, rgba(15,15,15,0.03) 0px, rgba(15,15,15,0.03) 1px, transparent 1px, transparent 64px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#B23E16] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Who We Work With
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-[#1A1A1A] leading-tight">
            We Work With Auctioneers Who&hellip;
          </h2>
        </ScrollReveal>

        {/* Three dark image cards; 24px+ vertical spacing when stacked (spec) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-10 gap-x-8">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-xl overflow-hidden bg-[#141414] border border-black/10 shadow-[0_18px_40px_rgba(15,15,15,0.18)] flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-7 flex-1">
                  <div className="h-[3px] w-9 bg-[#E85D26] mb-4" aria-hidden="true" />
                  <h3 className="font-display text-2xl md:text-[26px] text-white leading-snug mb-3">
                    {card.title}
                  </h3>
                  <p className="text-stone font-sans text-base leading-relaxed">{card.copy}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center max-w-2xl mx-auto mt-12 md:mt-14">
          <p className="font-hand font-semibold text-[28px] md:text-[38px] text-[#B23E16] leading-snug">
            If your website is not building trust, promoting your services, and starting more
            of the right conversations, you are exactly who we can help.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
