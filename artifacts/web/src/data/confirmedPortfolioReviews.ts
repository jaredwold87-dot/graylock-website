import type { FeaturedProject } from "./portfolioTypes";

// Original review wording from the supplied Google review export and client messages.
// Project associations explicitly confirmed by the client.
export const confirmedPortfolioReviews: Record<string, NonNullable<FeaturedProject["testimonial"]>> = {
  "Greenfield Mobile Welding": {
    name: "Pj Greenfield",
    role: "5-star Google Review",
    quote: ["Jared provided me with exceptional service. He built my website from the ground up very quickly. I know I didn’t make things easy, but Jared did a great job collecting everything he needed and walked me through anything I needed help with. I’m not great with computers and there isn’t a chance my business would have this professional of a website for my customers to see without him."],
  },
  "The Snooze Society": {
    name: "The Snooze Society",
    role: "Client Testimonial",
    quote: ["Had the BEST experience with this company. Tim was amazing. He listened to all my requests and made any tweaks I needed to make my website perfect and something I feel so proud of! He is always quick to respond and quick to help me if needed. Cannot recommend Graylock enough!!"],
  },
  "Liquid Soul Hydration": {
    name: "Cassandra Smith",
    role: "5-star Google Review",
    quote: ["I thoroughly enjoyed working with Tim and his team to get my new website launched. The creative design was excellent, the communication was clear and the turnaround time was quicker than I expected. I couldn't have asked for a better experience."],
  },
  "Montana Counseling Solutions": {
    name: "Bobbie Wold",
    role: "5-star Google Review",
    quote: ["The Graylock Digital team did an amazing job on my new website, and I’ve already seen an increase in new client inquiries since it launched. Tim has been wonderful to work with throughout the process. He’s incredibly knowledgeable, responsive, and always willing to answer questions or help whenever I need it. I highly recommend Graylock Digital to anyone looking for a team that truly cares about helping your business grow."],
  },
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
