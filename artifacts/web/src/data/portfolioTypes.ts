export type FeaturedProject = {
  name: string;
  category: string;
  location?: string;
  description: string;
  image: string;
  url?: string;
  theme: "light" | "dark";
  delivered: string[];
  testimonial?: {
    quote: string[];
    name: string;
    role: string;
    image?: string;
  };
  placeholder?: {
    name: string;
    role: string;
    note: string;
  };
};