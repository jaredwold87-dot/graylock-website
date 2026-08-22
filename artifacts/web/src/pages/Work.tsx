import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { X, Quote, Check, MapPin, ExternalLink } from "lucide-react";

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
import willowTransformation from "@/assets/work/willow-transformation.webp";
import meagherBuildersTransformation from "@/assets/work/meagher-builders-transformation.webp";
import interiorFinishesTransformation from "@/assets/work/interior-finishes-transformation.webp";
import crnaMentorTransformation from "@/assets/work/crna-mentor-transformation.webp";
import bluegrassTransformation from "@/assets/work/bluegrass-transformation.webp";
import jcsWellServicesTransformation from "@/assets/work/jcs-well-services-transformation.webp";
import rosenlundDrillingTransformation from "@/assets/work/rosenlund-drilling-transformation.webp";
import erinSells775Transformation from "@/assets/work/erin-sells-775-transformation.webp";
import tekmarkTransformation from "@/assets/work/tekmark-transformation.webp";
import { ElevatedHero } from "@/components/ui/ElevatedHero";
import portfolioHeroBg from "@/assets/portfolio-hero-bg.webp";

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
    name: "Willow Realty Group",
    category: "Southern Idaho Real Estate",
    location: "Serving the Magic Valley",
    description:
      "A polished, landscape-driven site for a Southern Idaho real estate group — built to pair full property search with the trust Willow has earned from hundreds of Magic Valley families.",
    image: willowTransformation,
    url: "https://willowrealestategroup.com/",
    theme: "light",
    delivered: [
      "Custom IDX integration with their local MLS",
      "Home valuation tool",
      "Agent contact flows",
      "Mobile-responsive build",
    ],
    placeholder: {
      name: "Willow Realty Group",
      role: "Serving the Magic Valley",
      note: "We're gathering the team's words on the project — check back shortly to hear about their experience working with Graylock Digital.",
    },
  },
  {
    name: "Meagher Builders",
    category: "Custom Homes & Luxury Remodels",
    location: "Carson Valley & Lake Tahoe",
    description:
      "A refined, photo-led website for a high-end custom home builder — built to show the craftsmanship behind each project and start more qualified project conversations.",
    image: meagherBuildersTransformation,
    url: "https://meagherbuilders.com/",
    theme: "light",
    delivered: [
      "Custom portfolio presentation",
      "Project conversation flow",
      "Craftsmanship-led visual design",
      "Mobile-responsive build",
    ],
    placeholder: {
      name: "Meagher Builders",
      role: "Carson Valley & Lake Tahoe",
      note: "We're gathering the team's words on the project — check back shortly to hear about their experience working with Graylock Digital.",
    },
  },
  {
    name: "Interior Finishes",
    category: "Cabinets & Design",
    location: "Northern Nevada & Northern California",
    description:
      "An elevated, design-forward website for a cabinetry and interiors studio — built to showcase tailored spaces and turn inspired homeowners into consultation requests.",
    image: interiorFinishesTransformation,
    url: "https://www.interiorfinishesreno.com/",
    theme: "light",
    delivered: [
      "Design-led visual direction",
      "Consultation request flow",
      "Services & process presentation",
      "Mobile-responsive build",
    ],
    placeholder: {
      name: "Interior Finishes",
      role: "Northern Nevada & Northern California",
      note: "We're gathering the team's words on the project — check back shortly to hear about their experience working with Graylock Digital.",
    },
  },
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
        "The Graylock Digital team did an amazing job on my new website, and I've already seen an increase in new client inquiries since it launched. Tim has been wonderful to work with throughout the process. He's incredibly knowledgeable, responsive, and always willing to answer questions or help whenever I need it. I highly recommend Graylock Digital to anyone looking for a team that truly cares about helping your business grow.",
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
    name: "CRNA Mentor",
    category: "CRNA Admissions Mentorship",
    location: "Serving Aspiring CRNAs Nationwide",
    description:
      "A confident, conversion-focused site for a CRNA admissions mentorship program — built to speak directly to ICU nurses chasing anesthesia school and turn them into booked calls and members.",
    image: crnaMentorTransformation,
    url: "https://www.crnamentor.com/",
    theme: "light",
    delivered: [
      "Free call booking flow",
      "Membership & program pages",
      "Podcast & community hub",
      "Mobile-responsive build",
    ],
    testimonial: {
      quote: [
        "Tim and his team were incredible to work with — thorough, efficient, and professional! I couldn't have had a better experience building my website! Thanks Graylock Digital!",
      ],
      name: "CRNA Mentor",
      role: "Founder",
    },
  },
];

const featuredProjectPriority = [
  "Willow Realty Group",
  "Meagher Builders",
  "Interior Finishes",
  "L.A. Perks Petroleum Specialists",
  "Emboxed",
  "Kingsbury Chiropractic",
  "Rosenlund Drilling",
  "West Coast Eye Institute",
];

const orderedFeaturedProjects = [
  ...featuredProjectPriority
    .map((name) => featuredProjects.find((project) => project.name === name))
    .filter((project): project is FeaturedProject => Boolean(project)),
  ...featuredProjects.filter((project) => !featuredProjectPriority.includes(project.name)),
];

function ProjectCard({ project, onClick }: { project: FeaturedProject; onClick: () => void }) {
  return (
    <div className="group flex flex-col gap-5 md:gap-6">
      <button
        type="button"
        onClick={onClick}
        aria-label={`View details for ${project.name}`}
        className="relative block w-full text-left rounded-xl overflow-hidden bg-[#16161d] border border-white/[0.06] shadow-2xl cursor-pointer group-hover:border-white/[0.15] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]"
      >
        <div className="absolute inset-0 bg-[#0f0f0f]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center backdrop-blur-[2px]">
          <div className="translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-black px-7 py-3.5 rounded-full font-sans font-semibold text-sm shadow-2xl flex items-center gap-2">
            View Details
          </div>
        </div>
        {/* Sleek Browser Bar */}
        <div className="flex items-center px-4 py-3 bg-[#111116] border-b border-white/[0.04]">
          <span className="flex gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12] group-hover:bg-[#ff5f57] transition-colors duration-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12] group-hover:bg-[#febc2e] transition-colors duration-300 delay-75" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12] group-hover:bg-[#28c840] transition-colors duration-300 delay-150" />
          </span>
        </div>
        <div className="overflow-hidden bg-[#0a0a0a] aspect-[1600/870] relative">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-contain block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </button>
      <div className="flex justify-between items-start px-2 mt-1">
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide">{project.name}</h3>
          <p className="font-sans text-[#E85D26] font-medium text-[13px] md:text-sm mt-1.5 tracking-widest uppercase">{project.category}</p>
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors flex-shrink-0 ml-4"
            title="Visit live site"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectBlock({ projects, onSelect }: { projects: FeaturedProject[]; onSelect: (p: FeaturedProject) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-16 lg:gap-y-20 items-start px-6 md:px-12 max-w-[90rem] mx-auto">
      {projects.map((p, i) => (
        <ScrollReveal key={p.name} delay={i % 2 === 1 ? 0.12 : 0}>
          <ProjectCard project={p} onClick={() => onSelect(p)} />
        </ScrollReveal>
      ))}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: FeaturedProject; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} project details`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md cursor-pointer"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[72rem] h-[90vh] md:h-[85vh] bg-[#0F0F0F] border border-white/[0.08] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
      >
        <button
          type="button"
          autoFocus
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2.5 bg-black/40 hover:bg-black text-white/70 hover:text-white rounded-full backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26]"
        >
          <X size={20} />
        </button>

        {/* Left side: Image */}
        <div className="w-full md:w-[55%] lg:w-[60%] h-[28vh] sm:h-[30vh] md:h-full shrink-0 border-b md:border-b-0 md:border-r border-white/[0.08] bg-[#050505] flex items-center justify-center overflow-hidden">
          <img src={project.image} alt={project.name} className="max-w-full max-h-full w-auto h-auto object-contain block" />
        </div>

        {/* Right side: Content — scrollable so all content is reachable at any viewport height */}
        <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col min-h-0 flex-1 overflow-y-auto bg-[#0F0F0F]">
          <div className="flex flex-col flex-1 p-5 md:p-8 lg:p-10">
            <span className="text-[#E85D26] font-sans font-bold text-[11px] uppercase tracking-[0.25em] mb-2">
              {project.category}
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-white leading-tight mb-2">
              {project.name}
            </h2>
            {project.location && (
              <div className="flex items-center gap-2 text-white/50 text-[13px] font-sans mb-4">
                <MapPin size={13} />
                {project.location}
              </div>
            )}

            <p className="text-white/70 font-sans text-[13px] md:text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="mb-4">
              <h4 className="text-white/80 text-[11px] font-semibold uppercase tracking-wider mb-2.5">Delivered</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.delivered.map((d) => (
                  <span key={d} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] text-white/80 text-[11px] font-medium">
                    <Check size={11} className="text-[#E85D26]" />
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {(project.testimonial || project.placeholder) && (
              <div className="mt-auto pt-4 border-t border-white/[0.05] flex flex-col">
                <Quote size={16} className="text-[#E85D26]/50 mb-2.5 shrink-0" />
                {project.testimonial ? (
                  <>
                    <p className="text-white/90 font-sans italic text-[13px] leading-relaxed mb-3">
                      &ldquo;{project.testimonial.quote.join(" ")}&rdquo;
                    </p>
                    <div>
                      <p className="text-white font-semibold text-[13px]">{project.testimonial.name}</p>
                      <p className="text-white/50 text-[11px] mt-0.5">{project.testimonial.role}</p>
                    </div>
                  </>
                ) : project.placeholder ? (
                  <>
                    <p className="text-white/60 font-sans text-[13px] leading-relaxed mb-3">
                      {project.placeholder.note}
                    </p>
                    <div>
                      <p className="text-white font-semibold text-[13px]">{project.placeholder.name}</p>
                      {project.placeholder.role && (
                        <p className="text-white/40 text-[11px] mt-0.5">{project.placeholder.role}</p>
                      )}
                    </div>
                  </>
                ) : null}
              </div>
            )}

            {project.url && (
              <div className="mt-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#E85D26] hover:bg-[#B23E16] text-white py-3 rounded-lg font-semibold text-sm transition-colors duration-300"
                >
                  Visit Live Site <ExternalLink size={15} />
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);

  return (
    <>
      <SEO
        title="Featured Projects | Custom Websites We've Built | Graylock Digital"
        description="A closer look at real, custom websites we've designed and built for trust-based local businesses — and the results they're getting."
        url="https://graylockdigital.com/featured-projects"
      />

      {/* ── Hero ── */}
      <ElevatedHero
        lines={[
          { text: "The Work Speaks" },
          { text: "For Itself.", accent: true },
        ]}
        backgroundImage={portfolioHeroBg}
      />

      {/* ── Gallery ── */}
      <section className="bg-[#0f0f0f] py-24 md:py-32 relative z-10">
        <ProjectBlock projects={orderedFeaturedProjects} onSelect={setSelectedProject} />
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <div className="theme-black border-t border-white/[0.05]">
        <FinalCTASection />
      </div>
    </>
  );
}
