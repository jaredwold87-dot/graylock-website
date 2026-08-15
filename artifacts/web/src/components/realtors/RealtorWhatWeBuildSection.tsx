import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import willowDevices from "@/assets/willow-devices-crop.webp";

const BUILD_ITEMS = [
  {
    title: "A brand that looks established",
    description:
      "Custom positioning, premium visual hierarchy, reviews, credentials, and local proof points make your first impression match the level of service you provide.",
  },
  {
    title: "Property search that keeps leads on your site",
    description:
      "When your MLS and brokerage eligibility allow it, we integrate IDX search so buyers can explore available homes without immediately leaving your brand experience.",
  },
  {
    title: "Buyer and seller paths that make sense",
    description:
      "Search homes, request a valuation, schedule a consultation, or contact your team—each audience gets a clear, low-friction next step.",
  },
  {
    title: "Local visibility built into the foundation",
    description:
      "We structure the site around the areas, communities, services, and questions that matter to the people looking for real estate help in your market.",
  },
];

export function RealtorWhatWeBuildSection() {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#B23E16] text-sm md:text-base font-sans font-bold uppercase tracking-[0.2em] mb-3">
            What We Deliver
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display text-[#1A1A1A] mb-4 leading-[1.05]">
            A Real Estate Website That Does More Than Look the Part.
          </h2>
          <p className="font-display italic text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
            One custom website—built to show up locally, make your expertise obvious, keep
            buyers exploring, and give sellers a clear reason to start the conversation with
            you.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-10 items-center">
          <ScrollReveal className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#17161B]">
              <img
                src={willowDevices}
                alt="The Willow Realty Group website — a custom real estate website by Graylock Digital, shown on a laptop and phone"
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="order-1 lg:order-2">
            <ul className="space-y-4">
              {BUILD_ITEMS.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="text-orange shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-[#1A1A1A] font-sans font-semibold text-base mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[#4A4A4A] font-sans text-sm md:text-[15px] leading-snug">
                      {item.description}
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
