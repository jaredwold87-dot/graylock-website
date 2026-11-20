import type { FeaturedProject } from "./portfolioTypes";

// Original review wording from the supplied Google review export.
// Project associations explicitly confirmed by the client.
export const confirmedPortfolioReviews: Record<string, NonNullable<FeaturedProject["testimonial"]>> = {
  "Beymer Auctions": {
    name: "Tanner Beymer",
    role: "5-star Google Review",
    quote: ["The Graylock crew leveled up my business website in a way I could never have done on my own. They are hard chargers that get the job done fast, but more importantly get it done right. They keep you informed every step of the way, and they are the utmost professionals. I highly recommend them if you're looking for that big company product coupled with that small business customer service."],
  },
  "A2Z": {
    name: "JD Johnston",
    role: "5-star Google Review",
    quote: ["Amazing work! Built and launched a new website faster then I thought possible. Explained the entire process and answered all my questions. (Even the dumb ones) lol. Would and will recommend to anyone."],
  },
  "Summit View Counseling & Assessment": {
    name: "Stephen Jennings",
    role: "5-star Google Review",
    quote: ["Graylock created an amazing website for my new counseling practice that far surpassed my expectations. Tim was great to work with, as was Jameson. Timely responses and very approachable guys. Highly recommend their services!"],
  },
  "Wicks Land & Yard Management": {
    name: "M W",
    role: "5-star Google Review",
    quote: ["Tim was excellent throughout the entire process of creating the website. The whole team really exceeded my expectations. The process was efficient, straightforward, and thorough. Tim and his team did an exceptional job obtaining information regarding the desired direction of the website and executed it perfectly. Highly recommended!!!"],
  },
  "IANA PAC": {
    name: "Nijma Yusuf",
    role: "5-star Google Review",
    quote: ["I have recently worked with Tim and his team to revamp our association website that was severely lacking. It is evident through their work they care about the quality and service they provide. I sent over multiple rounds of edits and questions and never faced any pushback. Tim went above and beyond to ensure our site was the best version it could be. I would recommend this service 10/10 especially relative to their pricing as compared to similar services. Thank you Tim and I will definitely be a customer for life!"],
  },
  "Olive Creek Nursery": {
    name: "Laressa Bazzell",
    role: "5-star Google Review",
    quote: ["The startup was easy and the company was great to work with! Our website launch was seamlessly perfect!"],
  },
  "Southpaw CPA Services": {
    name: "Shawn O'Neill",
    role: "5-star Google Review",
    quote: ["Tim and his team were incredibly easy to work with. They were extremely professional and were quick to respond to any all questions and changes. Their assistance was invaluable to the launch of my business and website."],
  },
};
