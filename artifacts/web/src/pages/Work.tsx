import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { cn } from "@/lib/utils";
import { ArrowRight, Quote, Star, Check, Lock, MapPin } from "lucide-react";
import { Link } from "wouter";
import spiTransformation from "@/assets/work/spi-transformation.webp";
import perksTransformation from "@/assets/work/perks-transformation.webp";
import emboxedTransformation from "@/assets/work/emboxed-transformation.webp";
import kingsburyTransformation from "@/assets/work/kingsbury-transformation.webp";
import montanaTransformation from "@/assets/work/montana-transformation.webp";
import wceTransformation from "@/assets/work/wce-transformation.webp";
import smartTaxCrnaTransformation from "@/assets/work/smart-tax-crna-transformation.webp";
import heroBackground from "@/assets/work/featured-hero-bg-v2.webp";

type Theme = "light" | "dark";

type FeaturedProject = {
  name: string;
  category: string;
  location?: string;
  description: string;
  image: string;
  theme: Theme;
  delivered: string[];
  testimonial?: {
    quote: string[];
    name: string;
    role: string;
  };
  placeholder?: {
    name: string;
    role: string;
    note: string;
  };
};

const featuredProjects: FeaturedProject[] = [
  {
    name: "Smart Tax CRNA",
    category: "Tax Strategy for CRNAs",
    location: "Serving CRNAs in All 50 States",
    description:
      "A credible, trust-first site for a CRNA-owned tax firm \u2014 built to speak directly to nurse anesthetists and turn specialized expertise into booked strategy calls.",
    image: smartTaxCrnaTransformation,
    theme: "light",
    delivered: [
      "Industry-researched design",
      "Strategy call booking flow",
      "Client portal integration",
      "Mobile-responsive build",
    ],
    placeholder: {
      name: "Rosi",
      role: "Founder, Smart Tax CRNA",
      note: "We\u2019re gathering Rosi\u2019s words on the project \u2014 check back shortly to hear about her experience working with Graylock Digital.",
    },
  },
  {
    name: "L.A. Perks Petroleum Specialists",
    category: "Petroleum & Fueling Services",
    location: "Serving the West",
    description:
      "A bold, credible site for a third-generation fueling company \u2014 built to reflect the scale and trust behind their work across the West.",
    image: perksTransformation,
    theme: "light",
    delivered: [
      "Industry-researched design",
      "Quote & service-call flows",
      "Mobile-responsive build",
      "Brand-aligned visuals",
    ],
    testimonial: {
      quote: [
        "Working with Tim and the team at Graylock Digital was an outstanding experience from start to finish. The amount of time and effort they invested in researching our industry and truly understanding our vision for the new website was beyond impressive. Their attention to detail, communication, and dedication to delivering a product that reflected our goals exceeded all expectations. They consistently went above and beyond throughout the entire process. We highly recommend Tim and the Graylock Digital team to anyone looking for a professional, creative, and results-driven website partner.",
      ],
      name: "Kylen & Keith Perks",
      role: "L.A. Perks Petroleum Specialists",
    },
  },
  {
    name: "Emboxed",
    category: "Luxury Gifting Concierge",
    location: "Curated by Emily",
    description:
      "A dark, editorial storefront for a luxury gifting concierge \u2014 built so every curated detail feels as intentional as the gifts themselves.",
    image: emboxedTransformation,
    theme: "light",
    delivered: [
      "Editorial luxury design",
      "Occasion-based browsing",
      "Concierge inquiry flow",
      "Mobile-responsive build",
    ],
    testimonial: {
      quote: [
        "After working with two other designers before finding Graylock Digital, I can confidently say the difference was night and day. Graylock Digital built the website for Emboxed and made the entire process seamless. They were fast, responsive, and incredibly thorough, delivering a beautiful website that perfectly captured my vision and brand. I highly recommend them to anyone looking for a professional, reliable, and talented web design team.",
      ],
      name: "Emily Berg",
      role: "Founder, Emboxed",
    },
  },
  {
    name: "Kingsbury Chiropractic",
    category: "Chiropractic Care",
    location: "Stateline, Nevada",
    description:
      "A clear, credible site for a Lake Tahoe chiropractor \u2014 built to turn answers, not guesswork, into booked appointments.",
    image: kingsburyTransformation,
    theme: "light",
    delivered: [
      "Online appointment booking",
      "Service & method pages",
      "Local SEO foundation",
      "Mobile-responsive build",
    ],
    placeholder: {
      name: "Kingsbury Chiropractic",
      role: "Stateline, Nevada",
      note: "We\u2019re gathering the team\u2019s words on the project \u2014 check back shortly to hear about their experience working with Graylock Digital.",
    },
  },
  {
    name: "Montana Counseling Solutions",
    category: "Counseling & Therapy",
    location: "Kalispell, MT",
    description:
      "A warm, compassionate site for a child and teen therapy practice \u2014 built to put anxious families at ease and route them straight to a free consultation.",
    image: montanaTransformation,
    theme: "light",
    delivered: [
      "Free consultation booking",
      "Warm, trust-building design",
      "Clear service navigation",
      "Mobile-responsive build",
    ],
    testimonial: {
      quote: [
        "Before working with Graylock, I struggled to put into words exactly what I do and who I help. Tim and his team built a site that explains my practice clearly and speaks straight to the parents and families I want to serve \u2014 so by the time someone reaches out, they already understand how I can help them.",
        "It has made a real difference. I\u2019m getting more of the right inquiries, and new clients regularly tell me they booked because the website made them feel comfortable and confident before we ever spoke. I couldn\u2019t be happier with how it represents my work.",
      ],
      name: "Bobbie Wold",
      role: "Owner, Montana Counseling Solutions",
    },
  },
  {
    name: "West Coast Eye Institute",
    category: "Ophthalmology & Eye Care",
    location: "Citrus County, FL",
    description:
      "A polished, reassuring site for a five-specialist ophthalmology practice \u2014 built to make world-class eye care feel close to home and easy to book across two locations.",
    image: wceTransformation,
    theme: "light",
    delivered: [
      "Appointment request flow",
      "Services & conditions library",
      "Multi-location presentation",
      "Mobile-responsive build",
    ],
    placeholder: {
      name: "West Coast Eye Institute",
      role: "Citrus County, FL",
      note: "We\u2019re gathering the team\u2019s words on the project \u2014 check back shortly to hear about their experience working with Graylock Digital.",
    },
  },
  {
    name: "Shooting Performance Institute",
    category: "Firearms Training & Retail",
    location: "Minden, Nevada",
    description:
      "An outdated firearms-training site rebuilt into a bold, modern presence that matches the caliber of their work.",
    image: spiTransformation,
    theme: "light",
    delivered: [
      "Custom homepage design",
      "Online shop integration",
      "Mobile-responsive build",
      "Back-end they can manage",
    ],
    testimonial: {
      quote: [
        "Tim and his team had a rough-draft site to me in a matter of days that far exceeded what I had before. They delivered at every point of the process and answered every text and random phone call with nothing but professionalism and kindness.",
        "10 out of 10, hands down. If you\u2019re even remotely considering a new website, do yourself a favor and use Graylock Digital!",
      ],
      name: "Jim Erwin",
      role: "CEO & Founder, Shooting Performance Institute",
    },
  },
];

const themes: Record<Theme, Record<string, string>> = {
  light: {
    section: "bg-[#F4F1EC]",
    eyebrow: "text-[#B23E16]",
    heading: "text-charcoal",
    body: "text-charcoal/75",
    pill: "bg-white text-charcoal/70 border-black/10",
    card: "bg-white border-black/10",
    cardDashed: "bg-white border-dashed border-black/15",
    deliver: "bg-white border-black/10 text-charcoal/80",
    check: "text-[#B23E16]",
    quote: "text-charcoal",
    divider: "border-black/10",
    capName: "text-charcoal",
    capRole: "text-charcoal/70",
  },
  dark: {
    section: "bg-charcoal border-t border-gunmetal",
    eyebrow: "text-[#E85D26]",
    heading: "text-offwhite",
    body: "text-stone",
    pill: "bg-navy text-stone border-gunmetal",
    card: "bg-navy border-gunmetal",
    cardDashed: "bg-navy border-dashed border-gunmetal",
    deliver: "bg-navy border-gunmetal text-offwhite/90",
    check: "text-[#E85D26]",
    quote: "text-offwhite",
    divider: "border-gunmetal",
    capName: "text-offwhite",
    capRole: "text-stone",
  },
};

function SiteMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-[#15151a] ring-1 ring-black/5">
          <div className="flex items-center gap-2 px-4 py-2.5 md:py-3 bg-[#1f1f26] border-b border-white/5">
            <span className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </span>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 w-full max-w-xs px-3 py-1.5 rounded-md bg-[#15151a] border border-white/5">
                <Lock size={11} className="text-stone/60 shrink-0" aria-hidden="true" />
                <span className="h-1.5 flex-1 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
          <img
            src={src}
            alt={alt}
            className="w-full h-auto block"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-col items-center" aria-hidden="true">
          <div className="w-24 md:w-28 h-5 bg-gradient-to-b from-[#c4c8d0] to-[#8d919b] [clip-path:polygon(32%_0,68%_0,80%_100%,20%_100%)]" />
          <div className="w-40 md:w-48 h-2.5 rounded-full bg-[#aeb2bb] shadow-md" />
        </div>
    </div>
  );
}

function FeaturedProjectSection({ project, index }: { project: FeaturedProject; index: number }) {
  const t = themes[project.theme];
  const imageRight = index % 2 === 1;

  return (
    <section
      className={cn(
        "md:min-h-screen flex items-center py-16 md:py-20 px-6 md:px-12",
        t.section
      )}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <ScrollReveal className={cn(imageRight && "md:order-2")} delay={0.1}>
            <SiteMockup
              src={project.image}
              alt={`${project.name} website homepage designed by Graylock Digital`}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15} className={cn(imageRight && "md:order-1")}>
            <span
              className={cn(
                "text-xs font-sans font-bold uppercase tracking-[0.2em] mb-3 block",
                t.eyebrow
              )}
            >
              {project.category}
            </span>
            <h2 className={cn("text-2xl md:text-3xl lg:text-4xl font-display mb-3", t.heading)}>
              {project.name}
            </h2>
            {project.location && (
              <div
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-sans font-medium mb-4",
                  t.pill
                )}
              >
                <MapPin size={12} aria-hidden="true" />
                {project.location}
              </div>
            )}
            <p className={cn("font-sans text-sm md:text-base leading-relaxed mb-5", t.body)}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.delivered.map(d => (
                <span
                  key={d}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-sans",
                    t.deliver
                  )}
                >
                  <Check size={12} className={cn("shrink-0", t.check)} aria-hidden="true" />
                  {d}
                </span>
              ))}
            </div>

            {project.testimonial ? (
              <figure className={cn("border-l-2 border-[#E85D26] pl-5", t.quote)}>
                <div className="flex gap-1 mb-3" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className="text-[#E85D26] fill-[#E85D26]" />
                  ))}
                </div>
                <blockquote className="font-sans text-sm md:text-base leading-relaxed space-y-3">
                  {project.testimonial.quote.map((p, i) => (
                    <p key={i}>&ldquo;{p}&rdquo;</p>
                  ))}
                </blockquote>
                <figcaption className="mt-4">
                  <p className={cn("font-display text-base", t.capName)}>{project.testimonial.name}</p>
                  <p className={cn("font-sans text-xs", t.capRole)}>{project.testimonial.role}</p>
                </figcaption>
              </figure>
            ) : project.placeholder ? (
              <figure className={cn("rounded-xl border shadow-sm p-6", t.cardDashed)}>
                <Quote className="mb-3 text-[#E85D26]/50" size={28} aria-hidden="true" />
                <p className={cn("font-display text-lg mb-1.5", t.capName)}>
                  Client testimonial coming soon
                </p>
                <p className={cn("font-sans text-sm", t.capRole)}>{project.placeholder.note}</p>
                <figcaption className={cn("mt-4 pt-4 border-t", t.divider)}>
                  <p className={cn("font-display text-base", t.capName)}>{project.placeholder.name}</p>
                  <p className={cn("font-sans text-xs", t.capRole)}>{project.placeholder.role}</p>
                </figcaption>
              </figure>
            ) : null}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function Work() {
  return (
    <>
      <SEO title="Featured Projects | Custom Websites We've Built | Graylock Digital" description="A closer look at real, custom websites we've designed and built for trust-based local businesses — and the results they're getting." url="https://graylockdigital.com/featured-projects" />

      <section className="relative overflow-hidden bg-charcoal pt-28 md:pt-36 pb-20 md:pb-28 px-6 md:px-12">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full object-cover object-[72%_center] md:object-right opacity-90"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/30"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/50"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-1/4 -right-1/4 w-[60%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(232,93,38,0.18),transparent_60%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gunmetal to-transparent"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-10 bg-[#E85D26]" aria-hidden="true" />
                <span className="text-[#E85D26] text-xs md:text-sm font-sans font-bold uppercase tracking-[0.32em]">
                  The Portfolio
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[5.25rem] font-display text-offwhite mb-7 leading-[0.98] tracking-[-0.01em]">
                Websites Worthy
                <br />
                of the Work
                <br />
                <span className="text-[#E85D26]">Behind Them.</span>
              </h1>
              <p className="text-lg md:text-xl font-sans text-stone max-w-xl leading-relaxed">
                Custom-built digital storefronts for trust-based local businesses &mdash;
                engineered to command attention, signal credibility, and turn quiet
                visitors into committed clients.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-started"
                  className="group inline-flex items-center justify-center gap-2 bg-[#E85D26] text-white font-sans font-bold text-sm md:text-base px-7 py-3.5 rounded-lg shadow-[0_8px_24px_rgba(232,93,38,0.35)] hover:bg-[#d4521f] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get Your Free Homepage Demo
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-offwhite font-sans font-semibold text-sm md:text-base px-7 py-3.5 rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                >
                  See Pricing
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-stone/70 font-sans text-[13px] font-semibold uppercase tracking-[0.18em]">
                <span>100% Custom</span>
                <span className="text-[#E85D26]/50" aria-hidden="true">&middot;</span>
                <span>No Templates</span>
                <span className="text-[#E85D26]/50" aria-hidden="true">&middot;</span>
                <span>Built to Convert</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {featuredProjects.map((project, i) => (
        <FeaturedProjectSection key={project.name} project={project} index={i} />
      ))}

      <section className="bg-charcoal py-20 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
              See What Your Site Could Look Like — On Us
            </h2>
            <p className="text-stone text-lg font-sans mb-8 max-w-2xl mx-auto">
              Book a free 15-minute discovery call and we will show you a custom homepage demo for your business before you commit to anything.
            </p>
            <Link href="/get-started">
              <span className="inline-flex items-center gap-2 bg-[#E85D26] hover:bg-[#E85D26]/90 text-white font-sans font-bold text-lg px-10 py-4 rounded-lg shadow-lg shadow-[#E85D26]/20 transition-all duration-300 cursor-pointer">
                Get Your Free Homepage Demo <ArrowRight size={20} />
              </span>
            </Link>
            <p className="text-stone text-sm font-sans mt-4">
              No pressure. No obligation. Just a clearer path forward.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
