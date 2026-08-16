import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import devicesCutout from "@/assets/auctioneer-devices-cutout.webp";

/**
 * "What a Better Auctioneer Website Does" (spec §4, repositioned per client
 * direction Aug 2026) — type-only handwritten lead-in, six-feature list, and
 * the Summit Benefit Auctions laptop + phone cutout as the example of what we
 * deliver. The features market the auctioneer to the organizations who hire
 * them — no upcoming-auction calendars, bidder/attendee paths, or
 * bidding-platform features.
 */
const FEATURES = [
  {
    title: "Service Pages That Sell Your Range",
    desc: "Give every event you take on—benefit and charity auctions, nonprofit galas, and fundraising events—a clear home with the detail organizers and committees need.",
  },
  {
    title: "A Clear Path for Event Organizers",
    desc: "Make it simple for nonprofits, charities, and gala committees to understand your event services, see your professionalism, and request your availability.",
  },
  {
    title: "Guidance for First-Time Committees",
    desc: "Many benefit and gala committees are hiring an auctioneer for the first time. Clear process and planning content makes it easy for them to book you with confidence.",
  },
  {
    title: "Trust That Holds Up Before the Call",
    desc: "Use credentials, experience, service types, team information, past-event proof, and clear process content to make your professionalism obvious before a prospect compares you to someone else.",
  },
  {
    title: "SEO for Local and Specialty Searches",
    desc: "Structure the site around your services, specialties, and locations—and the searches organizers and committees actually make when they need an auctioneer.",
  },
  {
    title: "Inquiries Delivered Where You Need Them",
    desc: "Send booking requests, event inquiries, consultation requests, and general contact submissions directly to the email inbox or CRM your business designates.",
  },
];

const LEAD_IN_LINES = [
  "You run the kind of auction they need.",
  "Your experience is easy to see and trust.",
  "You are easy to book before they call anyone else.",
];

export function AuctioneerWhatSection() {
  return (
    <section
      id="what-we-do"
      className="scroll-mt-[118px] bg-white py-20 md:py-28 px-6 md:px-12 border-t border-black/5"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <p className="text-[#B23E16] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-[44px] font-display text-[#1A1A1A] leading-tight">
            When an Organization Is Deciding Whether to Hire You, Your Website
            Should Make Three Things Clear:
          </h2>
        </ScrollReveal>

        {/* Large type-only lead-in (spec) — handwritten, always visible */}
        <ScrollReveal className="text-center mb-14 md:mb-20">
          <div className="flex flex-col items-center gap-1">
            {LEAD_IN_LINES.map((line) => (
              <p
                key={line}
                className="font-hand font-semibold text-[28px] md:text-[34px] xl:text-[38px] text-[#B23E16] leading-snug lg:whitespace-nowrap"
              >
                {line}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          {/* Devices cutout — visual first on mobile (spec responsive) */}
          <ScrollReveal>
            <img
              src={devicesCutout}
              alt="The Summit Benefit Auctions concept site shown on a laptop and phone — a charity and gala auction homepage with a plan-your-event call to action"
              className="w-full h-auto"
              style={{ filter: "drop-shadow(0 24px 32px rgba(0,0,0,0.16))" }}
              loading="lazy"
              decoding="async"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ul className="space-y-6">
              {FEATURES.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <CheckCircle2
                    size={24}
                    strokeWidth={2}
                    className="text-[#E85D26] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-[#1A1A1A] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[#1A1A1A]/70 text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
