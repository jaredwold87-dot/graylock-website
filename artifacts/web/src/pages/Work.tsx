import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { cn } from "@/lib/utils";
import { ArrowRight, Quote, Star, Check, Lock, MapPin, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import spiTransformation from "@/assets/work/spi-transformation.webp";
import perksTransformation from "@/assets/work/perks-transformation.webp";
import emboxedTransformation from "@/assets/work/emboxed-transformation.webp";
import kingsburyTransformation from "@/assets/work/kingsbury-transformation.webp";
import montanaTransformation from "@/assets/work/montana-transformation.webp";
import wceTransformation from "@/assets/work/wce-transformation.webp";
import smartTaxCrnaTransformation from "@/assets/work/smart-tax-crna-transformation.webp";
import oliveCreekTransformation from "@/assets/work/olive-creek-transformation.webp";
import advantageTransformation from "@/assets/work/advantage-transformation.webp";
import bentOnEducationTransformation from "@/assets/work/bent-on-education-transformation.webp";
import wicksTransformation from "@/assets/work/wicks-transformation.webp";
import bluegrassTransformation from "@/assets/work/bluegrass-transformation.webp";
import jcsWellServicesTransformation from "@/assets/work/jcs-well-services-transformation.webp";
import rosenlundDrillingTransformation from "@/assets/work/rosenlund-drilling-transformation.webp";
import erinSells775Transformation from "@/assets/work/erin-sells-775-transformation.webp";
import tekmarkTransformation from "@/assets/work/tekmark-transformation.webp";
import heroBackground from "@/assets/work/portfolio-hero-black-v1.webp";

type Theme = "light" | "dark";

type FeaturedProject = {
  name: string;
  category: string;
  location?: string;
  description: string;
  image: string;
  url?: string;
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
    name: "Wicks Land & Yard Management",
    category: "Land Management & Excavation",
    location: "Godfrey, IL · Owner-Operated",
    description:
      "A rugged, high-impact site for an owner-operated land management and excavation company — built to show off heavy-duty capability and turn Metro-East property owners into estimate requests.",
    image: wicksTransformation,
    url: "https://wicklandandyard.com/",
    theme: "light",
    delivered: [
      "Bold, equipment-forward design",
      "Free estimate request flow",
      "Service & coverage-area pages",
      "Mobile-responsive build",
    ],
    testimonial: {
      quote: [
        "Tim was excellent throughout the entire process of creating the website. The whole team really exceeded my expectations. The process was efficient, straightforward, and thorough.",
        "Tim and his team did an exceptional job obtaining information regarding the desired direction of the website and executed it perfectly. Highly recommended!!!",
      ],
      name: "Wicks Land & Yard Management",
      role: "Godfrey, IL",
    },
  },
  {
    name: "Smart Tax CRNA",
    category: "Tax Strategy for CRNAs",
    location: "Serving CRNAs in All 50 States",
    description:
      "A credible, trust-first site for a CRNA-owned tax firm — built to speak directly to nurse anesthetists and turn specialized expertise into booked strategy calls.",
    image: smartTaxCrnaTransformation,
    url: "https://www.smarttaxcrna.com/",
    theme: "light",
    delivered: [
      "Industry-researched design",
      "Strategy call booking flow",
      "Service & pricing pages",
      "Mobile-responsive build",
    ],
    testimonial: {
      quote: [
        "I can't say enough great things about Tim and Graylock Digital! From start to finish, the entire process was seamless. Tim took the time to truly understand my vision for the website and went above and beyond to make sure every detail was exactly right. His communication, professionalism, and dedication made the experience stress-free and enjoyable. The final result exceeded every expectation I had. If you're looking for a team that genuinely cares about your success and delivers exceptional results, I highly recommend them!",
      ],
      name: "Rosi",
      role: "Founder, Smart Tax CRNA",
    },
  },
  {
    name: "L.A. Perks Petroleum Specialists",
    category: "Petroleum & Fueling Services",
    location: "Serving the West",
    description:
      "A bold, credible site for a third-generation fueling company — built to reflect the scale and trust behind their work across the West.",
    image: perksTransformation,
    url: "https://www.perkspetroleum.com/",
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
      "A dark, editorial storefront for a luxury gifting concierge — built so every curated detail feels as intentional as the gifts themselves.",
    image: emboxedTransformation,
    url: "https://emboxed.com/",
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
      "A clear, credible site for a Lake Tahoe chiropractor — built to turn answers, not guesswork, into booked appointments.",
    image: kingsburyTransformation,
    url: "https://kingsburychiropractictahoe.com/",
    theme: "light",
    delivered: [
      "Online appointment booking",
      "Service & method pages",
      "Local SEO foundation",
      "Mobile-responsive build",
    ],
    testimonial: {
      quote: [
        "I wanted to thank Tim so much for helping me and my business. I am a chiropractor that had a very basic site that looked very similar to other medical professional sites. I did not know how much could be done with a professional website and how it could change how my business presented itself to people finding me or interested in how I can help them through chiropractic.",
        "He was so helpful and took the time with me to make sure my site presented well and that I had everything I wanted to explain and show what I do as a chiropractor different from every other chiropractor.",
        "Tim was also helpful with transferring my old site information and domain name from another company, which was very difficult, but he showed me what I needed to do and how he could help.",
        "I cannot say enough great things about him and what he has done for me and my business.",
      ],
      name: "Kingsbury Chiropractic",
      role: "Stateline, Nevada",
    },
  },
  {
    name: "JC's Well Services",
    category: "Water Treatment & Well Pump Services",
    location: "Eugene & Lane County, OR",
    description:
      "A sharp, trust-forward site for a licensed well pump and water treatment specialist — built to capture 24/7 emergency calls and free-quote requests from homeowners across Lane County.",
    image: jcsWellServicesTransformation,
    url: "https://jcswellservices.com/",
    theme: "light",
    delivered: [
      "24/7 emergency call flow",
      "Free quote request page",
      "Service & coverage-area pages",
      "Mobile-responsive build",
    ],
    placeholder: {
      name: "JC's Well Services",
      role: "Eugene & Lane County, OR",
      note: "We're gathering the team's words on the project — check back shortly to hear about their experience working with Graylock Digital.",
    },
  },
  {
    name: "Montana Counseling Solutions",
    category: "Counseling & Therapy",
    location: "Kalispell, MT",
    description:
      "A warm, compassionate site for a child and teen therapy practice — built to put anxious families at ease and route them straight to a free consultation.",
    image: montanaTransformation,
    url: "https://mtcounselingsolutions.com/",
    theme: "light",
    delivered: [
      "Free consultation booking",
      "Warm, trust-building design",
      "Clear service navigation",
      "Mobile-responsive build",
    ],
    testimonial: {
      quote: [
        "Before working with Graylock, I struggled to put into words exactly what I do and who I help. Tim and his team built a site that explains my practice clearly and speaks straight to the parents and families I want to serve — so by the time someone reaches out, they already understand how I can help them.",
        "It has made a real difference. I'm getting more of the right inquiries, and new clients regularly tell me they booked because the website made them feel comfortable and confident before we ever spoke. I couldn't be happier with how it represents my work.",
      ],
      name: "Bobbie Wold",
      role: "Owner, Montana Counseling Solutions",
    },
  },
  {
    name: "Rosenlund Drilling",
    category: "Industrial Drilling",
    location: "Elko, NV",
    description:
      "A bold, heritage-driven site for Elko's premier industrial drilling contractor — built to convey decades of family expertise to mining operations, ranches, and rural property owners who can't afford to guess on their water supply.",
    image: rosenlundDrillingTransformation,
    url: "https://rosenlunddrilling.com/",
    theme: "light",
    delivered: [
      "Commercial quote request flow",
      "Service & financing pages",
      "Industrial-scale design",
      "Mobile-responsive build",
    ],
    placeholder: {
      name: "Rosenlund Drilling",
      role: "Elko, NV",
      note: "We're gathering the team's words on the project — check back shortly to hear about their experience working with Graylock Digital.",
    },
  },
  {
    name: "West Coast Eye Institute",
    category: "Ophthalmology & Eye Care",
    location: "Citrus County, FL",
    description:
      "A polished, reassuring site for a five-specialist ophthalmology practice — built to make world-class eye care feel close to home and easy to book across two locations.",
    image: wceTransformation,
    url: "https://westcoasteye.com/",
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
      note: "We're gathering the team's words on the project — check back shortly to hear about their experience working with Graylock Digital.",
    },
  },
  {
    name: "Erin Hutchinson — Erin Sells 775",
    category: "Northern Nevada Real Estate",
    location: "Northern Nevada",
    description:
      "An elegant, personal brand site for a trusted Northern Nevada realtor — built to warm up buyers and sellers before they ever make first contact, and turn browsing into booked consultations.",
    image: erinSells775Transformation,
    url: "https://erinsells775.com/",
    theme: "light",
    delivered: [
      "Personal brand design",
      "Home search & valuation flows",
      "Testimonials & about pages",
      "Mobile-responsive build",
    ],
    placeholder: {
      name: "Erin Hutchinson",
      role: "Erin Sells 775 · Northern Nevada",
      note: "We're gathering the team's words on the project — check back shortly to hear about their experience working with Graylock Digital.",
    },
  },
  {
    name: "Olive Creek Nursery",
    category: "Fruit Trees & Native Plants",
    location: "Marshall County, Kentucky",
    description:
      "A warm, naturally grown site for a family-run, home-based nursery — built to help homesteaders, homeowners, and landowners grow resilient, food-producing landscapes.",
    image: oliveCreekTransformation,
    url: "https://olivecreeknursery.com/",
    theme: "light",
    delivered: [
      "Browsable plant inventory",
      "Visit scheduling flow",
      "Growing guides & resources",
      "Mobile-responsive build",
    ],
    testimonial: {
      quote: [
        "The startup was easy and the company was great to work with! Our website launch was seamlessly perfect!",
      ],
      name: "Olive Creek Nursery",
      role: "Marshall County, Kentucky",
    },
  },
  {
    name: "TekMark Industries",
    category: "Casing Handling Tools",
    location: "Global · Manufactured in the USA",
    description:
      "A clean, authoritative product site for a 50-year-old manufacturer of premium casing handling tools — built to serve drillers in 103+ countries and route serious buyers straight to a free tool consultation.",
    image: tekmarkTransformation,
    url: "https://www.tekmarkwellcasingtools.com/",
    theme: "light",
    delivered: [
      "Product catalogue design",
      "Free consultation request flow",
      "Video demo integration",
      "Mobile-responsive build",
    ],
    placeholder: {
      name: "TekMark Industries",
      role: "Casing Handling Tools · USA",
      note: "We're gathering the team's words on the project — check back shortly to hear about their experience working with Graylock Digital.",
    },
  },
  {
    name: "Shooting Performance Institute",
    category: "Firearms Training & Retail",
    location: "Minden, Nevada",
    description:
      "An outdated firearms-training site rebuilt into a bold, modern presence that matches the caliber of their work.",
    image: spiTransformation,
    url: "https://shootingperformanceinstitute.com/",
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
        "10 out of 10, hands down. If you're even remotely considering a new website, do yourself a favor and use Graylock Digital!",
      ],
      name: "Jim Erwin",
      role: "CEO & Founder, Shooting Performance Institute",
    },
  },
  {
    name: "Advantage Home Improvement",
    category: "Replacement Windows & Doors",
    location: "Las Vegas – Henderson – Greater Valley",
    description:
      "A clean, trust-first site for a local windows and doors installer — built around honest, low-pressure pricing that turns visitors into free in-home estimates.",
    image: advantageTransformation,
    url: "https://windownv.com/",
    theme: "light",
    delivered: [
      "Free estimate request flow",
      "Window & door service pages",
      "Local SEO foundation",
      "Mobile-responsive build",
    ],
    placeholder: {
      name: "Advantage Home Improvement",
      role: "Las Vegas, Nevada",
      note: "We're gathering the team's words on the project — check back shortly to hear about their experience working with Graylock Digital.",
    },
  },
  {
    name: "Bent on Education",
    category: "Anesthesia & CRNA Education",
    location: "CRNA-Led Podcasts & AHA Training",
    description:
      "A polished, credible home for a CRNA educator's podcasts and AHA training — built to turn anesthesia learners into listeners, students, and booked trainees.",
    image: bentOnEducationTransformation,
    url: "https://bentoneducation.com/",
    theme: "light",
    delivered: [
      "Podcast & episode showcase",
      "AHA training inquiry flow",
      "Clear program navigation",
      "Mobile-responsive build",
    ],
    placeholder: {
      name: "Bent on Education",
      role: "Anesthesia & CRNA Education",
      note: "We're gathering the team's words on the project — check back shortly to hear about their experience working with Graylock Digital.",
    },
  },
  {
    name: "Bluegrass Dental Anesthesia Solutions",
    category: "Mobile Dental Anesthesia",
    location: "Serving Northern Kentucky & Lexington",
    description:
      "A clean, clinical site for a mobile CRNA anesthesia provider — built to reassure dental practices on safety and expertise and route them straight to a consultation request.",
    image: bluegrassTransformation,
    url: "https://bluegrassanes.com/",
    theme: "light",
    delivered: [
      "Trust-first clinical design",
      "Consultation request flow",
      "Services & service-area pages",
      "Mobile-responsive build",
    ],
    placeholder: {
      name: "Bluegrass Dental Anesthesia Solutions",
      role: "Northern Kentucky & Lexington",
      note: "We're gathering the team's words on the project — check back shortly to hear about their experience working with Graylock Digital.",
    },
  },
];

function SiteMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="max-w-5xl mx-auto group/mockup">
      {/* Browser chrome */}
      <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.22)] border border-black/[0.08] bg-[#16161d] ring-1 ring-black/5 transition-shadow duration-500 group-hover/mockup:shadow-[0_40px_100px_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-2 px-4 py-2.5 md:py-3 bg-[#1e1e27] border-b border-white/[0.06]">
          <span className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </span>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 w-full max-w-xs px-3 py-1.5 rounded-md bg-[#14141a] border border-white/[0.06]">
              <Lock size={10} className="text-white/30 shrink-0" aria-hidden="true" />
              <span className="h-1.5 flex-1 rounded-full bg-white/[0.08]" />
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto block transition-transform duration-700 group-hover/mockup:scale-[1.015]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      {/* Monitor stand */}
      <div className="flex flex-col items-center mt-0.5" aria-hidden="true">
        <div className="w-24 md:w-28 h-5 bg-gradient-to-b from-[#c2c6ce] to-[#8b8f99] [clip-path:polygon(32%_0,68%_0,80%_100%,20%_100%)]" />
        <div className="w-40 md:w-48 h-2.5 rounded-full bg-[#acb0b9] shadow-md" />
      </div>
    </div>
  );
}

function FeaturedProjectSection({ project, index }: { project: FeaturedProject; index: number }) {
  const t = {
    section: "bg-[#F4F1EC]",
    eyebrow: "text-[#B23E16]",
    heading: "text-[#1a1a1a]",
    body: "text-[#4a5568]",
    pill: "bg-white/80 text-[#4a5568] border-black/[0.09]",
    deliver: "bg-white border-black/[0.09] text-[#4a5568]",
    check: "text-[#B23E16]",
    quote: "text-[#1a1a1a]",
    divider: "border-black/[0.09]",
    capName: "text-[#1a1a1a]",
    capRole: "text-[#6b7280]",
    cardDashed: "bg-white/60 border-dashed border-black/[0.12]",
  };

  const imageRight = index % 2 === 1;

  return (
    <section
      className={cn(
        "relative py-24 md:py-32 px-6 md:px-12",
        t.section
      )}
    >
      {/* Subtle section separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/[0.07] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Mockup */}
          <ScrollReveal
            className={cn(imageRight && "md:order-2")}
            delay={0.08}
          >
            <SiteMockup
              src={project.image}
              alt={`${project.name} website homepage designed by Graylock Digital`}
            />
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.16} className={cn(imageRight && "md:order-1")}>
            <div className="space-y-5">

              {/* Eyebrow */}
              <span
                className={cn(
                  "text-[11px] font-sans font-bold uppercase tracking-[0.25em] block",
                  t.eyebrow
                )}
              >
                {project.category}
              </span>

              {/* Heading */}
              <h2 className={cn("text-2xl md:text-3xl lg:text-[2.15rem] font-display leading-tight", t.heading)}>
                {project.name}
              </h2>

              {/* Location pill */}
              {project.location && (
                <div
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-sans font-medium",
                    t.pill
                  )}
                >
                  <MapPin size={11} aria-hidden="true" className="shrink-0" />
                  {project.location}
                </div>
              )}

              {/* Divider accent */}
              <div className="w-10 h-0.5 bg-[#E85D26]/40 rounded-full" aria-hidden="true" />

              {/* Description */}
              <p className={cn("font-sans text-sm md:text-[0.9375rem] leading-[1.75] max-w-md", t.body)}>
                {project.description}
              </p>

              {/* Live site link */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 font-sans font-semibold text-sm text-[#B23E16] hover:text-[#E85D26] transition-colors duration-200"
                >
                  Visit the live site
                  <ExternalLink
                    size={13}
                    className="opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </a>
              )}

              {/* Delivered tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.delivered.map(d => (
                  <span
                    key={d}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-sans font-medium shadow-sm",
                      t.deliver
                    )}
                  >
                    <Check size={11} className={cn("shrink-0", t.check)} aria-hidden="true" />
                    {d}
                  </span>
                ))}
              </div>

              {/* Testimonial / placeholder */}
              {project.testimonial ? (
                <figure className="mt-2 rounded-xl bg-white border border-black/[0.07] shadow-sm p-5 relative overflow-hidden">
                  {/* Accent bar */}
                  <div className="absolute left-0 inset-y-0 w-[3px] bg-[#E85D26] rounded-l-xl" aria-hidden="true" />
                  <div className="pl-3">
                    <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={13} className="text-[#E85D26] fill-[#E85D26]" />
                      ))}
                    </div>
                    <blockquote className={cn("font-sans text-sm leading-[1.75] space-y-3", t.quote)}>
                      {project.testimonial.quote.map((p, i) => (
                        <p key={i} className="text-[#2d2d2d]">&ldquo;{p}&rdquo;</p>
                      ))}
                    </blockquote>
                    <figcaption className={cn("mt-4 pt-4 border-t", t.divider)}>
                      <p className={cn("font-display text-sm font-medium", t.capName)}>
                        {project.testimonial.name}
                      </p>
                      <p className={cn("font-sans text-xs mt-0.5", t.capRole)}>
                        {project.testimonial.role}
                      </p>
                    </figcaption>
                  </div>
                </figure>
              ) : project.placeholder ? (
                <figure className={cn("mt-2 rounded-xl border p-5", t.cardDashed)}>
                  <Quote className="mb-2 text-[#E85D26]/40" size={24} aria-hidden="true" />
                  <p className={cn("font-display text-base mb-1", t.capName)}>
                    Client testimonial coming soon
                  </p>
                  <p className={cn("font-sans text-[13px] leading-relaxed", t.capRole)}>
                    {project.placeholder.note}
                  </p>
                  <figcaption className={cn("mt-4 pt-4 border-t", t.divider)}>
                    <p className={cn("font-display text-sm font-medium", t.capName)}>
                      {project.placeholder.name}
                    </p>
                    <p className={cn("font-sans text-xs mt-0.5", t.capRole)}>
                      {project.placeholder.role}
                    </p>
                  </figcaption>
                </figure>
              ) : null}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function Work() {
  return (
    <>
      <SEO
        title="Featured Projects | Custom Websites We've Built | Graylock Digital"
        description="A closer look at real, custom websites we've designed and built for trust-based local businesses — and the results they're getting."
        url="https://graylockdigital.com/featured-projects"
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0f0f0f] pt-28 md:pt-36 pb-24 md:pb-32 px-6 md:px-12">
        {/* Background image */}
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full object-cover object-[72%_center] md:object-right opacity-85 select-none"
        />

        {/* Gradients */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/92 to-[#0f0f0f]/20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-[#0f0f0f]/40"
          aria-hidden="true"
        />
        {/* Orange radial glow */}
        <div
          className="pointer-events-none absolute -top-1/4 -right-1/4 w-[60%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(232,93,38,0.15),transparent_60%)]"
          aria-hidden="true"
        />
        {/* Bottom edge line */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
          aria-hidden="true"
        />
        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-[#E85D26]" aria-hidden="true" />
                <span className="text-[#E85D26] text-[11px] md:text-xs font-sans font-bold uppercase tracking-[0.32em]">
                  The Portfolio
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-[5.25rem] font-display text-white mb-7 leading-[0.97] tracking-[-0.015em]">
                Websites Worthy
                <br />
                of the Work
                <br />
                <span className="text-[#E85D26]">Behind Them.</span>
              </h1>

              {/* Subhead */}
              <p className="text-lg md:text-xl font-sans text-stone/80 max-w-xl leading-[1.7]">
                Custom-built digital storefronts for trust-based local businesses &mdash;
                engineered to command attention, signal credibility, and turn quiet
                visitors into committed clients.
              </p>

              {/* Project count badge */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85D26] animate-pulse" aria-hidden="true" />
                <span className="text-white/60 font-sans text-xs font-medium tracking-wide">
                  {featuredProjects.length} client projects below
                </span>
              </div>

              {/* CTAs */}
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-started"
                  className="group inline-flex items-center justify-center gap-2 bg-[#E85D26] text-white font-sans font-bold text-sm md:text-base px-7 py-3.5 rounded-lg shadow-[0_8px_32px_rgba(232,93,38,0.38)] hover:bg-[#d4521f] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(232,93,38,0.45)] transition-all duration-300"
                >
                  Book a Discovery Call
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 border border-white/[0.18] text-offwhite font-sans font-semibold text-sm md:text-base px-7 py-3.5 rounded-lg hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300"
                >
                  See Pricing
                </Link>
              </div>

              {/* Trust line */}
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-stone/50 font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.2em]">
                <span className="whitespace-nowrap">100% Custom</span>
                <span className="inline-flex items-center gap-x-4 whitespace-nowrap">
                  <span className="text-[#E85D26]/40" aria-hidden="true">&middot;</span>
                  <span>No Templates</span>
                </span>
                <span className="inline-flex items-center gap-x-4 whitespace-nowrap">
                  <span className="text-[#E85D26]/40" aria-hidden="true">&middot;</span>
                  <span>Built to Convert</span>
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <IndustriesSection />

      {featuredProjects.map((project, i) => (
        <FeaturedProjectSection key={project.name} project={project} index={i} />
      ))}

      <FinalCTASection />
    </>
  );
}
