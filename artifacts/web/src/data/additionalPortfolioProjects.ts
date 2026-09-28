import type { FeaturedProject } from "./portfolioTypes";
import liquidSoul from "@/assets/work/liquid-soul-hydration.webp";
import backroadsBeauty from "@/assets/work/backroads-beauty.webp";
import shaneCamp from "@/assets/work/shane-camp.webp";
import legacyOutdoorLiving from "@/assets/work/legacy-outdoor-living.webp";
import alanReview from "@/assets/reviews/alan-garcia.webp";
import ericaReview from "@/assets/reviews/erica-hadley.webp";

export const additionalPortfolioProjects: FeaturedProject[] = [
  {
    name: "Liquid Soul Hydration",
    category: "IV Hydration & Wellness",
    location: "Simpsonville, South Carolina",
    description: "A vibrant wellness website presenting IV hydration, wellness injections, weight management, and lab services, with clear paths to book an appointment or ask a question.",
    image: liquidSoul,
    url: "https://liquidsoulhydration.com/",
    theme: "light",
    delivered: [
      "Wellness services presentation",
      "Packages and memberships navigation",
      "First-visit information and FAQs",
      "Appointment, text, and call links",
    ],
  },
  {
    name: "Backroads Beauty",
    category: "Hormone Care & Aesthetics",
    location: "Burlington, Kansas",
    description: "A distinctive website for Erica Hadley’s practice, introducing hormone care and aesthetic services with clear service pathways and a direct text-to-contact call to action.",
    image: backroadsBeauty,
    url: "https://backroads-beauty.com/",
    theme: "light",
    delivered: [
      "Hormone-care service pathways",
      "Aesthetic services presentation",
      "Provider introduction",
      "Text-to-contact calls to action",
    ],
    testimonial: {
      name: "Erica Hadley",
      role: "5-star Google Review",
      image: ericaReview,
      quote: [
        "I cannot say enough good things about my experience working with this company. Building a website is definitely not my area of expertise, and they made the entire process so much easier than I expected.",
        "They listened to what I wanted, answered all of my questions, dealt with me changing my mind more than once 😂 and somehow took all of the ideas in my head and turned them into a website that actually feels like my business.",
        "They were easy to communicate with, incredibly helpful, and genuinely cared about getting it right. I absolutely love how my website turned out and would recommend them without hesitation!",
      ],
    },
  },
  {
    name: "Shane Camp",
    category: "Comedy & Entertainment",
    description: "A bold, personality-led website for comedian Shane Camp, highlighting his Kill Tony Golden Ticket recognition with navigation for show dates, merchandise, booking, and contact.",
    image: shaneCamp,
    url: "https://shanecampcomedian.com/",
    theme: "light",
    delivered: [
      "Comedian brand showcase",
      "Show-date navigation",
      "Merchandise and Cameo links",
      "Booking and contact calls to action",
    ],
  },
  {
    name: "Legacy Outdoor Living",
    category: "Outdoor Living Design & Build",
    location: "Reno, Sparks, Carson Valley & Lake Tahoe",
    description: "An immersive, project-led website showcasing outdoor living spaces, with service, portfolio, process, and financing navigation and prominent project-consultation calls to action.",
    image: legacyOutdoorLiving,
    url: "https://legacyoutdoorlivingnv.com/",
    theme: "light",
    delivered: [
      "Outdoor living project showcase",
      "Services and process navigation",
      "Financing information pathway",
      "Project-consultation calls to action",
    ],
    testimonial: {
      name: "Alan Garcia",
      role: "5-star Google Review",
      image: alanReview,
      quote: [
        "I highly recommend working with Tim at Graylock Digital. He built an amazing new website for my company, and we couldn’t be happier with the results.",
        "The entire website was completed in less than a week, while other companies I spoke with were quoting around six weeks. The process was fast, smooth, and the quality exceeded our expectations.",
        "What I appreciate most is that the relationship didn’t end once the website was finished. We’re able to continue making changes, improvements, and updates as our business grows, so the site just keeps getting better and better.",
        "If you’re looking for someone who is responsive, efficient, and builds a great website, I would definitely recommend Tim and Graylock Digital.",
      ],
    },
  },
];