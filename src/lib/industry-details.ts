export type IndustryDetail = {
  slug: string;
  category: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  moreDetails?: string;
  whatTitle: string;
  whatBody: string[];
  whatImage: string;
  servicesTitle: string;
  services: Array<{ title: string; description: string }>;
  processTitle: string;
  processIntro?: string;
  processImage: string;
  process: Array<{ title: string; description: string }>;
  phone: string;
  email: string;
  otherSlugs: string[];
};

export const industryDetails: IndustryDetail[] = [
  {
    slug: "food-beverage",
    category: "Food & Beverage",
    heroTitle: "30+ Years of Building Restaurant Brands That Grow",
    heroDescription:
      "Platinum Hospitality Management, an integral subsidiary of Amer Holding, is a leading F&B operator with a proven record of creating and scaling successful restaurant concepts across the Middle East. Today, we bring this expertise to partners through franchise opportunities, offering a full ecosystem designed for growth and long-term success.",
    heroImage: "/images/zyxJ4AxnUFWvEoRm3gJATWctJ0.jpg",
    whatTitle: "From Concept to Scale, We Deliver Growth",
    whatBody: [
      "With decades of experience, we design, launch, and operate restaurant brands that combine market insight with operational excellence. Our portfolio includes trusted names such as Shakespeare Middle East, Otantik, Shawarma King, and Chinese Connection - each concept developed to resonate with diverse audiences and proven to thrive in competitive markets.",
      "Beyond signature dining, our ecosystem extends to cloud kitchens, catering, and multi-brand operations, giving partners flexible models to capture new demand and maximize growth.",
    ],
    whatImage: "/images/VRaNcetcckNHp4pJvBCgOze5sF4.jpg",
    servicesTitle: "A Turnkey System for Partners Who Want to Scale",
    services: [
      { title: "Proven Restaurant Brands", description: "A diverse portfolio with established customer loyalty and regional recognition." },
      { title: "Full Turnkey Setup", description: "End-to-end support: site selection, design, fit-out, launch, and operations." },
      { title: "Centralized Supply Chain", description: "Ensuring cost efficiency, quality consistency, and seamless logistics." },
      { title: "Marketing & Brand Support", description: "In-house campaigns, digital presence, and brand-building to drive awareness and sales." },
      { title: "Training & Operations Manuals", description: "Structured onboarding, continuous staff training, and detailed SOPs to ensure smooth daily operations." },
      { title: "Scalable Growth Models", description: "From flagship restaurants to cloud kitchens, partners can expand efficiently across markets." },
    ],
    processTitle: "Concept & Market Fit",
    processIntro: "Our approach combines creativity, culinary expertise, and operational excellence to deliver dining experiences that leave a lasting impression—whether on-site, delivered, or catered.",
    processImage: "/images/Rgn7sjEws88LqltUe8pwfhh0ipg.webp",
    process: [
      { title: "Concept & Market Fit", description: "Tailoring restaurant concepts to consumer demand and cultural insights." },
      { title: "Execution & Launch", description: "Delivering ready-to-operate outlets with brand consistency and operational readiness." },
      { title: "Operational Excellence", description: "Maintaining high service standards and quality control through ongoing support." },
      { title: "Expansion & Adaptation", description: "Enabling partners to grow across new locations and formats with confidence." },
    ],
    phone: "+971 2 555 7884",
    email: "info@platinumhospitality.ae",
    otherSlugs: ["automotive-services", "contracting-trading", "recruitment"],
  },
  {
    slug: "real-estate-development",
    category: "Real Estate Development",
    heroTitle: "Redefining Urban Living & Landmark Developments",
    heroDescription:
      "Radiant Real Estate is a premier Abu Dhabi-based developer, delivering visionary mixed-use, residential, and commercial projects. From Marina Towers to Moon Flower City, our commitment to sustainability, quality, and design excellence shapes modern cityscapes.",
    heroImage: "/images/EVYJBUq90H3M5JHcD6jc6mI7mKc.png",
    moreDetails: "https://radiantrealestate.ae/",
    whatTitle: "Shaping Tomorrow’s Living Spaces",
    whatBody: [
      "We specialize in crafting integrated developments—from high-rise towers and luxury residences to large-scale communities. Our full-cycle approach ensures precision in design, quality construction, sustainability, and enriched living experiences.",
    ],
    whatImage: "/images/1JqTu85knVPppR418Tw18aS7dM.png",
    servicesTitle: "Our Areas of Expertise",
    services: [
      { title: "Mixed-Use Developments", description: "Combining residential, retail, and office space for vibrant, multifunctional communities." },
      { title: "Luxury Residential Towers", description: "Premium apartments and amenities in signature locations like Reem Island and Shams." },
      { title: "Integrated Community Projects", description: "Full-scale neighborhoods such as Moon Flower City—balancing housing, recreation, and infrastructure." },
      { title: "Architectural Masterplanning", description: "Holistic project visioning—from site design to urban integration and sustainability planning." },
      { title: "Sustainability & Green Building", description: "Prioritizing eco-conscious materials and strategies to minimize environmental impact." },
      { title: "Sales & After-Sales Support", description: "Seamless client experience across transactions, handovers, and post-delivery service." },
    ],
    processTitle: "A Seamless Process from Vision to Reality",
    processIntro: "Our structured methodology integrates design excellence, stakeholder collaboration, and sustainable construction to deliver projects that stand the test of time.",
    processImage: "/images/g8VMogPGwLbeU2rZlBbY8MYI.jpg",
    process: [
      { title: "Masterplan & Feasibility", description: "Analyze site potential, demographics, and market to define a strategic project blueprint." },
      { title: "Design & Architecture", description: "Craft distinctive, context-driven architectural and landscape designs aligned with brand identity." },
      { title: "Construction & Quality Control", description: "Execute with top-tier partners, ensuring rigorous standards in structure, materials, and finishes." },
      { title: "Delivery & Community Integration", description: "Final handover supported by client engagement, tailored amenities, and ongoing asset management." },
    ],
    phone: "+971 2 666 4431",
    email: "elitecare@radiantrealestate.ae",
    otherSlugs: ["food-beverage", "automotive-services", "contracting-trading"],
  },
  {
    slug: "contracting-trading",
    category: "Contracting & Trading",
    heroTitle: "Leaders in Construction & Comprehensive Solutions",
    heroDescription:
      "ATGC is a full-service contracting and trading company based in Abu Dhabi, delivering turnkey construction, civil engineering, MEP, transportation and material supply solutions—backed by decades of experience and ISO-certified quality standards.",
    heroImage: "/images/WECumoDhAZuwBn8P4iYhnBlhk4.jpeg",
    moreDetails: "https://atgc-uae.com/",
    whatTitle: "Engineering the Future of Infrastructure",
    whatBody: [
      "ATGC offers a complete spectrum of construction and civil engineering services, including road works, utilities, MEP systems, transportation logistics, cement production, firefighting vehicles, tankers, and specialized building materials—tailored to support the UAE’s infrastructure growth.",
    ],
    whatImage: "/images/KfkuvNPM82YmOBR9h7ErLURFs.jpg",
    servicesTitle: "Solutions That Build Tomorrow",
    services: [
      { title: "Construction & Civil Engineering", description: "Building residential and commercial structures, Green Houses & Data Centers with precision and safety." },
      { title: "Road Works & Infrastructure", description: "Planning, design, and construction of highways, arterialroads, utilities, sewerage and stormwater systems." },
      { title: "MEP Systems", description: "Design and installation of mechanical, electrical, and plumbing systems for large-scale developments." },
      { title: "Transportation & Logistics", description: "Specialized fleet deployment—including trucks, trailers, tankers, ambulances, and firefighting vehicles." },
      { title: "Material Production & Supply", description: "Cement manufacturing, pipes & fittings, and building material logistics for turnkey projects." },
      { title: "Comprehensive Project Services", description: "End-to-end project support—from site surveys and consultancy to delivery and commissioning." },
    ],
    processTitle: "Our Process, Your Guarantee",
    processIntro: "Our proven methodology ensures efficient delivery, quality compliance, and client satisfaction at every stage of the project lifecycle.",
    processImage: "/images/xe32m15mKwc0PNcuR9M8UejgCCs.jpg",
    process: [
      { title: "Consultation & Planning", description: "Understanding requirements and developing tailored solutions aligned with project goals." },
      { title: "Design & Engineering", description: "Implementing international standards with precision in design, structural engineering, and MEP systems." },
      { title: "Construction & Execution", description: "Coordinating civil works, site management, and quality control with certified procedures." },
      { title: "Delivery & Aftercare", description: "Final handover that ensures full compliance and ongoing support to meet client expectations." },
    ],
    phone: "+971 2 642 4199",
    email: "atgc@atgc.ae",
    otherSlugs: ["food-beverage", "real-estate-development", "automotive-services"],
  },
  {
    slug: "automotive-services",
    category: "Automotive Services",
    heroTitle: "Leading Spare Parts Distribution for European Trucks & Trailers",
    heroDescription:
      "With over 50 years of experience, Central Auto Parts Co. (LLC) is one of the UAE’s pioneering importers, exporters, and distributors of genuine and aftermarket parts for European trucks and trailers. Our branches in Abu Dhabi, Dubai, and Ras Al Khor serve both local and international markets with unmatched efficiency and quality.",
    heroImage: "/images/BDTu90b4vIXL0AGh6V4Rh5TpB0.jpg",
    whatTitle: "Driving Efficiency Through Trusted Spare Parts Distribution",
    whatBody: [
      "Established in 1980, Central Auto Parts Co. has built a reputation as a top-tier supplier of truck and trailer components across the UAE and GCC. We provide a wide selection of OEM and aftermarket parts for Mercedes-Benz, Volvo, MAN, and other leading European brands—backed by global partnerships and decades of expertise.",
    ],
    whatImage: "/images/WSDoBTlcLzpVZnk7N2U3u5Kk4.jpg",
    servicesTitle: "How We Help Our Partners",
    services: [
      { title: "Genuine & Aftermarket Parts Supply", description: "Full inventory of OEM and certified aftermarket parts for European trucks and trailers." },
      { title: "Multi-Branch Distribution Network", description: "Strategically located branches in Abu Dhabi, Deira, and Ras Al Khor to serve different market segments." },
      { title: "International Export Services", description: "Export-focused operations from our Deira branch, delivering parts across Africa and the GCC." },
      { title: "Local Wholesale & Retail", description: "Ras Al Khor and Mussafah branches ensure responsive support to UAE-based clients and resellers." },
      { title: "Authorized Brand Dealerships", description: "Official distributors for CEI, Temac, Lenger, MFILTERS, Eaton, Diesel Technic, FEBI, and more." },
      { title: "Just-in-Time Delivery", description: "Expert guidance to ensure clients receive the right part for the right vehicle—minimizing downtime." },
    ],
    processTitle: "Reliable Distribution, Region-Wide Reach",
    processImage: "/images/abgxI3Cmamob1yDbXr77nMzpaQ.jpg",
    process: [
      { title: "Sourcing & Procurement", description: "Strong partnerships with European manufacturers and brand suppliers for authentic and reliable products." },
      { title: "Inventory & Storage", description: "Centralized stock management across branches with real-time access and high availability." },
      { title: "Order Processing & Export", description: "Tailored logistics solutions for local clients and global export partners, including packaging and documentation." },
      { title: "After-Sales & Support", description: "Ongoing technical assistance and part compatibility advice from trained professionals." },
    ],
    phone: "+971 2 554 2424",
    email: "info@capcollc.ae",
    otherSlugs: ["contracting-trading", "recruitment", "medical-healthcare"],
  },
  {
    slug: "medical-healthcare",
    category: "Medical & Healthcare",
    heroTitle: "Medical & Healthcare",
    heroDescription:
      "With over 30 years of experience, Emirates Drugs Store (EDS) is a leading pharmaceutical wholesaler in the UAE—delivering high-quality medical products and innovative healthcare solutions with integrity, efficiency, and full regulatory compliance.",
    heroImage: "/images/rpOi0yLU760ZXCZDas9uqtCqeuU.jpeg",
    whatTitle: "Supporting Healthcare Through Reliable Supply Chains",
    whatBody: [
      "Since 1993, EDS has provided wholesale pharmaceutical distribution to healthcare providers across the UAE. Our experienced team ensures uninterrupted access to essential medicines, medical supplies, and healthcare equipment—sourced globally and managed with precision, compliance, and care.",
    ],
    whatImage: "/images/gSLinUCY625kUkzgdoOUvhTfic.png",
    servicesTitle: "What We Are Doing For The Industry",
    services: [
      { title: "Pharmaceutical Wholesale", description: "Distribution of prescription and OTC medications from certified global manufacturers." },
      { title: "Temperature-Controlled Logistics", description: "Safe, compliant transport and storage of sensitive pharmaceutical products." },
      { title: "Inventory Management", description: "Real-time tracking, automated reordering, and optimized stock handling." },
      { title: "Emergency Supply Services", description: "On-demand solutions to ensure access to critical medications when it matters most." },
      { title: "Product Sourcing & Registration", description: "End-to-end support in sourcing approved products and navigating UAE regulatory pathways." },
      { title: "Just-in-Time Delivery", description: "Customized delivery schedules aligned with healthcare provider needs." },
    ],
    processTitle: "Delivering With Precision, Built on Trust",
    processImage: "/images/oBznEahpLrp5Uwb5R6CR7r84W4.jpg",
    process: [
      { title: "Needs Assessment", description: "Understanding client requirements and creating custom distribution plans." },
      { title: "Regulatory Verification", description: "Ensuring all products meet UAE health authority standards and documentation." },
      { title: "Logistics & Fulfillment", description: "Coordinated storage, transport, and dispatch through secure, traceable systems." },
      { title: "Ongoing Support & Monitoring", description: "Post-delivery assistance, tracking tools, and responsive customer service." },
    ],
    phone: "+971 653 43154",
    email: "info@edsllc.ae",
    otherSlugs: ["automotive-services", "contracting-trading", "recruitment"],
  },
  {
    slug: "recruitment",
    category: "Recruitment",
    heroTitle: "Delivering Workforce Excellence Across Sectors",
    heroDescription:
      "Taeen Recruitment is a fully licensed and government authorized employment agency, headquartered in Abu Dhabi. Operating throughout the United Arab Emirates serving multiple clients for over a decade. We specialize in matching skilled professionals with opportunities across construction, oil & gas, hospitality, and engineering, providing comprehensive staffing solutions to government and private corporations.",
    heroImage: "/images/8obnPmfdlaJOXwWP1AV9E4EcA8.jpg",
    moreDetails: "https://www.taeen.ae",
    whatTitle: "Connecting Talent with Industry Needs",
    whatBody: [
      "Taeen provides tailored manpower solutions—from blue-collar labor to white-collar professionals—supporting sectors like oil & gas, construction, hospitality, and corporate services. We offer HR services, payroll management, and blue- and white-collar recruitment, underpinned by certified operational excellence.",
    ],
    whatImage: "/images/Mhfxqa2IsaHFWN4KxdMXq4l8BPc.jpg",
    servicesTitle: "What We Offer",
    services: [
      { title: "Blue-Collar Employment & Supply", description: "Skilled labor placement for construction, hospitality, and industrial sectors." },
      { title: "White-Collar Recruitment", description: "Placement of professionals in corporate, engineering, and operational roles." },
      { title: "Payroll & HR Administration", description: "Seamless payroll processing and HR back-office support." },
      { title: "Oil & Gas Manpower Solutions", description: "Tailored staffing services for the energy sector, including plant and field personnel." },
      { title: "Hospitality & Cleaning Services Staffing", description: "Workforce supply and management for hotels, events, and commercial cleaning." },
      { title: "Customized Recruitment Projects", description: "Temp-to-hire, agency representation, and long-term manpower programs." },
    ],
    processTitle: "Empowering Clients Through Efficient Recruitment",
    processImage: "/images/x6QJszrftWoA4VnR60MxIP7B9jA.jpg",
    process: [
      { title: "Client Needs Analysis", description: "Conducting workforce assessments and designing tailored staffing strategies." },
      { title: "Candidate Sourcing & Screening", description: "Pre-screening, skills testing, and verifying compliance readiness." },
      { title: "Deployment & Onboarding", description: "Facilitating prompt placement and orientation aligned with employer standards." },
      { title: "Ongoing Support & Payroll Services", description: "Providing payroll administration, retention solutions, and responsive HR support." },
    ],
    phone: "+971 2 643 9388",
    email: "info@taeen.ae",
    otherSlugs: ["contracting-trading", "medical-healthcare", "real-estate-development"],
  },
];
