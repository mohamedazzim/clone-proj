export type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: Array<{ title?: string; text: string }>;
  ordered?: boolean;
};

type ArticleContent = {
  sections: ArticleSection[];
  cta?: { label: string; href: string };
};

export const articleContent: Record<string, ArticleContent> = {
  "radiant-square-the-future-of-mixed-use-development-in-abu-dhabi": {
    sections: [
      {
        paragraphs: [
          "Abu Dhabi’s growth is creating demand for places where homes, offices, shops, and leisure experiences work together. Radiant Square answers that need with a connected destination on Al Reem Island.",
        ],
      },
      {
        heading: "What is Radiant Square?",
        paragraphs: [
          "Radiant Square is a five-tower mixed-use community comprising Radiant Bay, Radiant Viewz 1, Radiant Viewz 2, Radiant Boulevard, and Radiant Height. The destination combines residences, workspaces, retail, and everyday services in one carefully planned setting.",
        ],
      },
      {
        heading: "Why Choose Mixed-Use Developments?",
        paragraphs: ["Bringing complementary uses together creates a more convenient and resilient urban experience."],
        bullets: [
          { title: "Convenience", text: "Daily needs, workplaces, dining, and leisure can all be reached with less travel." },
          { title: "Community", text: "Shared public spaces and services encourage people to meet and participate in neighborhood life." },
          { title: "Sustainability", text: "Compact planning and more efficient land use can reduce travel and environmental impact." },
        ],
      },
      {
        heading: "Radiant Square’s Key Features",
        ordered: true,
        bullets: [
          { title: "Prime Al Reem Island location", text: "Close to Reem Mall, Galleria Mall, Reem Central Park, and Abu Dhabi’s key business areas." },
          { title: "Luxury residential living", text: "Studios and spacious apartments pair modern interiors with expansive city and waterfront views." },
          { title: "Vibrant retail and dining", text: "Convenient shops, cafés, and restaurants support residents, visitors, and office workers." },
          { title: "Flexible office spaces", text: "Contemporary layouts and advanced facilities create an adaptable workplace environment." },
          { title: "Exceptional amenities", text: "Pools, gyms, children’s areas, and dedicated parking make daily life easy." },
        ],
      },
      {
        heading: "Radiant Square’s Impact on Abu Dhabi’s Urban Landscape",
        paragraphs: [
          "The project presents a connected model for urban living: one that supports convenience, social interaction, and a strong sense of place while contributing a distinctive new landmark to the capital.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "With a strategic location, thoughtful mix of uses, and broad amenity offer, Radiant Square establishes a compelling destination for people looking to live, work, or invest in Abu Dhabi.",
        ],
      },
    ],
    cta: { label: "Explore Radiant Real Estate", href: "https://radiantrealestate.ae/contact" },
  },
  "celebrating-2025-radiant-real-estate-s-journey-of-excellence-and-innovation": {
    sections: [
      {
        paragraphs: [
          "The start of 2025 offers an opportunity to reflect on a year of progress for Radiant Real Estate and to look ahead at the next stage of growth in Abu Dhabi’s property market.",
          "The company’s focus remains clear: create distinctive developments, strengthen long-term partnerships, and make sustainability part of every project decision.",
        ],
      },
      {
        heading: "Celebrating Landmarks of Success",
        paragraphs: [
          "The past year brought meaningful project milestones, broader market recognition, and continued work across signature destinations including Radiant Square and the forthcoming Radiant Marina Towers.",
        ],
      },
      {
        heading: "2025 A Year of Growth and Achievement",
        paragraphs: [
          "As we we embrace 2025, Radiant Real Estate is preparing for new launches, stronger customer experiences, and further investment in design and delivery standards.",
        ],
      },
      {
        heading: "A Thank You to Our Clients and Partners",
        paragraphs: [
          "Every achievement is shared with the customers, consultants, contractors, and public-sector partners whose trust and collaboration turn ambitious plans into lasting places.",
        ],
      },
      {
        heading: "The Real Estate Market in Abu Dhabi: 2025 Outlook",
        paragraphs: [
          "Abu Dhabi’s fundamentals remain strong, supported by population growth, international investment, infrastructure, and sustained demand for thoughtfully designed homes and mixed-use communities.",
        ],
      },
      {
        heading: "Building the Future Together",
        paragraphs: [
          "Radiant Real Estate enters the year with optimism and a commitment to projects that combine commercial value with better everyday experiences for the people who use them.",
        ],
      },
    ],
    cta: { label: "Visit Radiant Real Estate", href: "https://radiantrealestate.ae/" },
  },
  "what-makes-holiday-inn-abu-dhabi-a-top-choice-for-business-and-leisure-travelers": {
    sections: [
      {
        paragraphs: [
          "Holiday Inn Abu Dhabi combines a central location, comfortable rooms, practical business facilities, and approachable service for guests visiting the capital for work or leisure.",
        ],
      },
      {
        heading: "Prime Location: At the Heart of Abu Dhabi",
        bullets: [
          { title: "Abu Dhabi National Exhibition Centre", text: "Convenient access for exhibitions, conferences, and major events." },
          { title: "Sheikh Zayed Grand Mosque", text: "One of the capital’s defining cultural landmarks is within easy reach." },
          { title: "Business districts", text: "A practical base for meetings across the city." },
          { title: "Shopping and attractions", text: "Popular retail, dining, and entertainment destinations are nearby." },
        ],
      },
      {
        heading: "Modern and Comfortable Rooms",
        bullets: [
          { title: "Restful interiors", text: "Calm finishes and supportive bedding make it easy to recharge." },
          { title: "Productive work areas", text: "In-room desks and reliable connectivity support business travelers." },
          { title: "Contemporary bathrooms", text: "Well-appointed facilities add everyday convenience." },
          { title: "Connected stays", text: "High-speed Wi-Fi is available throughout the hotel." },
          { title: "Room choice", text: "A range of layouts suits solo travelers, couples, and families." },
        ],
      },
      {
        heading: "Dining and Entertainment Options",
        bullets: [
          { title: "All-day dining", text: "A varied international menu supports busy schedules." },
          { title: "Relaxed social spaces", text: "Comfortable venues provide an easy setting to meet or unwind." },
          { title: "In-room dining", text: "Convenient options are available when guests prefer to stay in." },
        ],
      },
      {
        heading: "World-Class Amenities for Business and Leisure",
        ordered: true,
        bullets: [
          { title: "Meeting spaces", text: "Flexible rooms and practical event support." },
          { title: "Fitness facilities", text: "Equipment for maintaining a regular routine while traveling." },
          { title: "Outdoor pool", text: "A welcoming space to relax in Abu Dhabi’s sunshine." },
          { title: "Business services", text: "Useful support for printing, planning, and last-minute requirements." },
          { title: "Attentive service", text: "A knowledgeable team available throughout the stay." },
        ],
      },
      {
        heading: "Why Choose Holiday Inn Abu Dhabi?",
        ordered: true,
        bullets: [
          { title: "Convenient", text: "Well placed for both business and leisure itineraries." },
          { title: "Comfortable", text: "Modern rooms and dependable amenities." },
          { title: "Flexible", text: "Dining, meeting, and recreation options in one property." },
          { title: "Welcoming", text: "Friendly service backed by a globally recognized hospitality brand." },
        ],
      },
      {
        heading: "Customer Reviews: What Guests Are Saying",
        bullets: [
          { text: "Guests regularly highlight the helpful team and smooth arrival experience." },
          { text: "Business visitors value the location, Wi-Fi, and practical working facilities." },
          { text: "Leisure travelers appreciate the comfortable rooms and relaxed atmosphere." },
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: ["For a city stay that balances location, value, and dependable hospitality, Holiday Inn Abu Dhabi is a versatile choice."],
      },
    ],
    cta: { label: "Explore Holiday Inn Abu Dhabi", href: "https://www.ihg.com/holidayinn/hotels/us/en/abu-dhabi/auhar/hoteldetail" },
  },
  "ak-tower-the-ideal-balance-of-business-and-residential-spaces-in-abu-dhabi": {
    sections: [
      {
        paragraphs: [
          "AK Tower brings modern homes, offices, and retail opportunities together in one well-connected Abu Dhabi address, giving residents and businesses a practical base in the capital.",
        ],
      },
      {
        heading: "What is AK Tower?",
        paragraphs: ["The project is a contemporary mixed-purpose tower designed around efficient layouts, quality finishes, and convenient access to the city’s key destinations."],
      },
      {
        heading: "Prime Location: At the Heart of Abu Dhabi",
        bullets: [
          { title: "Central access", text: "Quick connections to important commercial and government districts." },
          { title: "Everyday convenience", text: "Retail, dining, schools, and services are close by." },
          { title: "Connected travel", text: "Major roads make journeys across the capital straightforward." },
          { title: "Established neighborhood", text: "The surrounding area offers a mature range of amenities." },
        ],
      },
      {
        heading: "Modern Apartments for Comfortable Living",
        bullets: [
          { title: "Efficient layouts", text: "Thoughtfully planned homes make strong use of space." },
          { title: "Natural light", text: "Large windows create bright interiors and wide views." },
          { title: "Contemporary finishes", text: "Durable materials support a refined, low-maintenance home." },
          { title: "Practical storage", text: "Everyday organization is considered throughout the apartments." },
          { title: "Resident comfort", text: "Shared services and amenities support an easy daily routine." },
        ],
      },
      {
        heading: "Exceptional Office and Retail Spaces",
        paragraphs: ["Flexible commercial spaces serve organizations of different sizes, while street-level retail contributes convenience and activity to the development."],
      },
      {
        heading: "World-Class Amenities for an Elevated Lifestyle",
        ordered: true,
        bullets: [
          { title: "Fitness", text: "Well-equipped exercise facilities for residents." },
          { title: "Parking", text: "Dedicated spaces and straightforward access." },
          { title: "Security", text: "Professionally managed entry and building services." },
          { title: "Retail convenience", text: "Useful services integrated within the destination." },
          { title: "Shared spaces", text: "Comfortable areas that support community and connection." },
        ],
      },
      {
        heading: "Why Choose AK Tower?",
        ordered: true,
        bullets: [
          { title: "Balanced use", text: "Homes and workplaces are brought together efficiently." },
          { title: "Strategic address", text: "A location with strong connections across Abu Dhabi." },
          { title: "Modern design", text: "Contemporary architecture and practical interior planning." },
          { title: "Investment appeal", text: "A broad audience supports long-term leasing potential." },
          { title: "Trusted delivery", text: "A project shaped by experienced development partners." },
        ],
      },
      {
        heading: "Investing in AK Tower",
        paragraphs: ["The mix of residential and commercial demand creates multiple routes to value for buyers seeking a centrally located Abu Dhabi asset."],
      },
      {
        heading: "Conclusion",
        paragraphs: ["AK Tower offers a considered combination of place, practicality, and design for people who want to live, work, or invest in the capital."],
      },
    ],
    cta: { label: "Contact Radiant Real Estate", href: "https://radiantrealestate.ae/contact" },
  },
};
