export type IndustrySummary = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  icon: string;
  available: boolean;
};

export const industries: IndustrySummary[] = [
  {
    slug: "food-beverage",
    title: "Food & Beverage",
    summary:
      "Platinum Hospitality Management partners with investors to create and scale successful restaurants, offering franchise opportunities and long-term growth.",
    image: "/images/VRaNcetcckNHp4pJvBCgOze5sF4.jpg",
    icon: "/images/x2VoGrCdk3wLCKprhwuG73L4.png",
    available: true,
  },
  {
    slug: "real-estate-development",
    title: "Real Estate Development",
    summary:
      "Developing landmark properties that redefine living and working spaces through innovation, sustainability, and architectural excellence.",
    image: "/images/EVYJBUq90H3M5JHcD6jc6mI7mKc.png",
    icon: "/images/kSrrNAnlcgYt4tvAxlfSn3hZHc.png",
    available: true,
  },
  {
    slug: "contracting-trading",
    title: "Contracting & Trading",
    summary:
      "Delivering large-scale infrastructure and turnkey contracting solutions across the GCC with a focus on quality, safety, and impact.",
    image: "/images/WECumoDhAZuwBn8P4iYhnBlhk4.jpeg",
    icon: "/images/lZKGiUhglgCxwiHTTIfnMpOCsZY.png",
    available: true,
  },
  {
    slug: "automotive-services",
    title: "Automotive Services",
    summary:
      "Offering full-service automotive solutions from diagnostics to advanced repairs with a strong focus on quality, speed, customer care, and long-term vehicle performance.",
    image: "/images/BDTu90b4vIXL0AGh6V4Rh5TpB0.jpg",
    icon: "/images/43oiW8cLqMjebjModaWjkxDnRUI.png",
    available: true,
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    summary:
      "Driving energy logistics, trading, and supply-chain excellence across the oil and gas sector. We deliver strategic value to clients.",
    image: "/images/7cE1ebolv1oTUF6N1N4JJV82pc.jpg",
    icon: "/images/oU1gUewLmTJ5aHHcWVN1jOujI.png",
    available: false,
  },
  {
    slug: "medical-healthcare",
    title: "Medical & Healthcare",
    summary:
      "Empowering healthcare through distribution, innovation, and patient-centered solutions that raise industry standards. A leader in UAE.",
    image: "/images/rpOi0yLU760ZXCZDas9uqtCqeuU.jpeg",
    icon: "/images/VhQjjErYTkMwfygD1xAYdIBppxk.png",
    available: true,
  },
  {
    slug: "investment-services",
    title: "Investment Services",
    summary:
      "Fueling strategic growth and wealth creation through intelligent capital deployment and long-term financial stewardship.",
    image: "/images/W0uoXAmnb4a3xKXLoHlZSqTTU.jpg",
    icon: "/images/EGDa22aCX1itq8xNTKWlNebPFSg.png",
    available: false,
  },
  {
    slug: "recruitment",
    title: "Recruitment",
    summary:
      "Taeen connecting talent with opportunity through tailored recruitment strategies. Empowering careers and strengthening organizations.",
    image: "/images/8obnPmfdlaJOXwWP1AV9E4EcA8.jpg",
    icon: "/images/PF6nqdRpb4TBkFiequC2VtcwPmk.png",
    available: true,
  },
];

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  sections: Array<{
    heading?: string;
    paragraphs?: string[];
    bullets?: Array<{ title?: string; text: string }>;
  }>;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "radiant-square-the-future-of-mixed-use-development-in-abu-dhabi",
    title: "Radiant Square: The Future of Mixed-Use Development in Abu Dhabi",
    excerpt:
      "As Abu Dhabi continues to grow as a hub for business, tourism, and luxury living, mixed-use developments have emerged as the ideal solution to meet the city’s evolving urban demands. One standout project leading the charge is Radiant Square, an innovative development that seamlessly integrates residential, commercial, and retail spaces to offer a vibrant lifestyle in the heart of Al Reem Island.",
    image: "/images/ytHfaJRatOEZUgKMsqKXqP9HE.webp",
    category: "Real Estate",
    sections: [],
  },
  {
    slug: "celebrating-2025-radiant-real-estate-s-journey-of-excellence-and-innovation",
    title: "Celebrating 2025: Radiant Real Estate’s Journey of Excellence and Innovation",
    excerpt:
      "As 2025 begins, Radiant Real Estate reflects on milestones achieved and exciting opportunities ahead. Our vision, rooted in excellence, innovation, and sustainability, continues to drive progress in Abu Dhabi’s real estate market.",
    image: "/images/ZSbocx6zcBgUxbNfaPcHlUwe2zc.webp",
    category: "Real Estate",
    sections: [],
  },
  {
    slug: "what-makes-holiday-inn-abu-dhabi-a-top-choice-for-business-and-leisure-travelers",
    title: "What Makes Holiday Inn Abu Dhabi a Top Choice for Business and Leisure Travelers?",
    excerpt:
      "Holiday Inn Abu Dhabi stands as a beacon of comfort, convenience, and modern hospitality in the heart of the UAE’s capital. Whether you’re visiting for business or leisure, this 4-star hotel offers everything you need for a memorable stay, making it a top choice for travelers seeking value, excellent service, and a prime location.",
    image: "/images/RSvzgyVB7WFuHEC5CHJg9DqYA.png",
    category: "Real Estate",
    sections: [],
  },
  {
    slug: "ak-tower-the-ideal-balance-of-business-and-residential-spaces-in-abu-dhabi",
    title: "AK Tower: The Ideal Balance of Business and Residential Spaces in Abu Dhabi",
    excerpt:
      "Abu Dhabi’s ever-growing skyline is home to a variety of impressive developments, and AK Tower stands out as a premier destination for both residential and commercial purposes.",
    image: "/images/WoRVKY68XI9fRmcilfNA4DDbjM.webp",
    category: "Real Estate",
    sections: [],
  },
];
