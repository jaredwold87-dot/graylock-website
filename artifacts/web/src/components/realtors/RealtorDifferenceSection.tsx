import { Link } from "wouter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { realtorGetStartedHref } from "@/lib/realtorLinks";

const commitments = [
  {
    title: "No build fee before you see the direction.",
    body: "If Graylock is the right fit, we create a custom Homepage Direction around your business before any build fee is due.",
  },
  {
    title: "Clear Buyer and Seller Paths",
    body: "Buyer and seller paths that are clear from the first visit.",
  },
  {
    title: "Built Around Your Local Market",
    body: "A local-market structure built around the places and services that matter to your business.",
  },
  {
    title: "An IDX and MLS Plan Before the Build",
    body: "Graylock is an IDX Broker Developer Partner. We review your IDX and MLS plan before it becomes a late-stage scope surprise.",
  },
];

export function RealtorDifferenceSection() {
  return (
    <section
      id="realtor-difference"
      data-section="offer"
      className="bg-[#FDFCFB] py-16 md:py-24 border-y border-black/5"
      aria-labelledby="realtor-difference-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start flex flex-col justify-start">
              <span className="text-[#B23E16] font-bold tracking-wider text-sm uppercase mb-4 block">
                The Graylock Difference
              </span>
              <h2
                id="realtor-difference-heading"
                className="text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1] font-display font-medium text-[#292B2E] tracking-tight mb-6 text-balance"
              >
                See the Direction Before You Approve the Build Fee.
              </h2>
              <p className="text-lg md:text-xl text-[#292B2E]/70 leading-relaxed text-balance mb-10">
                Before you commit to a build, we create a custom Homepage Direction around your market, your business, your buyer and seller paths, and the next action you want the right visitor to take.
              </p>
              <div className="flex flex-col items-start">
                <CTAButton
                  href={realtorGetStartedHref("package_scope")}
                  variant="funnel"
                  className="mb-5 w-full sm:w-auto"
                >
                  Get Your Free Homepage Direction
                </CTAButton>
                <p className="text-sm md:text-base text-[#292B2E]/60 text-balance max-w-sm">
                  You review the direction, scope, and price before deciding whether to move forward.
                </p>
                <Link
                  href="/pricing"
                  className="mt-6 inline-block font-sans text-sm font-semibold text-[#292B2E]/60 underline decoration-[#292B2E]/30 underline-offset-4 transition-colors hover:text-[#292B2E]"
                >
                  View pricing and terms →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col pt-4 lg:pt-0">
              {commitments.map((commitment, index) => (
                <div
                  key={commitment.title}
                  className={`flex flex-row gap-6 md:gap-8 ${
                    index === 0
                      ? "pb-10 md:pb-12 border-b border-black/10"
                      : index === commitments.length - 1
                        ? "pt-10 md:pt-12"
                        : "py-10 md:py-12 border-b border-black/10"
                  }`}
                >
                  <div className="text-[#B23E16] font-display font-medium tracking-tight mt-1 shrink-0 text-xl md:text-2xl">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-medium text-[#292B2E] mb-3 tracking-tight text-xl md:text-2xl">
                      {commitment.title}
                    </h3>
                    <p className="text-[#292B2E]/70 leading-relaxed text-base md:text-lg">
                      {commitment.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}