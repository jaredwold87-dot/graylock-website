import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Phone, LayoutDashboard, CheckCircle, Rocket } from "lucide-react";
import discoveryCallImg from "@/assets/process-discovery-call.webp";
import homepageDemoImg from "@/assets/process-homepage-demo.webp";
import approvePayImg from "@/assets/process-approve-pay.webp";
import launchDomainImg from "@/assets/process-launch-domain.webp";

export function OfferBreakdownSection() {
  const offers = [
    {
      icon: <Phone size={24} strokeWidth={2.2} />,
      image: discoveryCallImg,
      title: "15-Minute Discovery Call",
      desc: "A quick call to hear what you like and dislike about your current site, and what you want from a new one.",
    },
    {
      icon: <LayoutDashboard size={24} strokeWidth={2.2} />,
      image: homepageDemoImg,
      title: "Free Custom Homepage Demo",
      desc: "We turn that input into a real, custom homepage concept for your business — no payment required to see it.",
    },
    {
      icon: <CheckCircle size={24} strokeWidth={2.2} />,
      image: approvePayImg,
      title: "You Approve the Design & Direction",
      desc: "If you like what you see, you give the design and direction the green light and we move ahead with the full build.",
    },
    {
      icon: <Rocket size={24} strokeWidth={2.2} />,
      image: launchDomainImg,
      title: "Built & Launched on Your Domain",
      desc: "We build out the full site in 7–10 business days, then launch it live on your own domain.",
    },
  ];

  return (
    <section className="relative bg-[#f5f5f4] py-16 md:py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] mb-6 leading-tight">
            We Prove Our Value Before You Pay a Dollar.
          </h2>
          <p className="text-[#4a5568] text-base md:text-lg font-sans leading-relaxed">
            We do real strategic work before asking you to commit, so you can see the direction clearly and decide with confidence.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {offers.map((offer, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-full overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 w-12 h-12 rounded-lg bg-[#E85D26] flex items-center justify-center text-white shadow-lg">
                    {offer.icon}
                  </div>
                </div>
                <div className="p-7 md:p-8 flex-1">
                  <h3 className="text-xl md:text-2xl font-display text-[#1a202c] mb-3 leading-tight">{offer.title}</h3>
                  <p className="text-[#4a5568] font-sans text-base leading-relaxed">{offer.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
