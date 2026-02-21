import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export interface Project {
  name: string;
  slug: string;
  location: string;
  badge: string;
  handover_year: string;
  size_range: string;
  bedrooms_range: string;
  starting_price: string;
  description: string;
  images: string[];
  brochure_link: string;
}

export const projects: Project[] = [
  {
    name: "Azure Residences",
    slug: "azure-residences",
    location: "Marina Waterfront",
    badge: "New Launch",
    handover_year: "Q4 2027",
    size_range: "750 – 2,400 sqft",
    bedrooms_range: "1 – 4 BR",
    starting_price: "AED 1.2M",
    description: "Ultra-premium waterfront apartments with panoramic marina views and world-class amenities.",
    images: [project1, project2, project3],
    brochure_link: "#",
  },
  {
    name: "Coral Villas",
    slug: "coral-villas",
    location: "Palm District",
    badge: "Limited Units",
    handover_year: "Q2 2026",
    size_range: "3,200 – 6,800 sqft",
    bedrooms_range: "4 – 6 BR",
    starting_price: "AED 8.5M",
    description: "Beachfront villa collection with private pools, direct beach access and lush landscaping.",
    images: [project2, project3, project1],
    brochure_link: "#",
  },
  {
    name: "Horizon Tower",
    slug: "horizon-tower",
    location: "Downtown Core",
    badge: "Sold 70%",
    handover_year: "Q1 2026",
    size_range: "1,100 – 3,600 sqft",
    bedrooms_range: "2 – 5 BR",
    starting_price: "AED 2.8M",
    description: "Iconic sky-high penthouses and residences with 360° city and ocean views.",
    images: [project3, project1, project2],
    brochure_link: "#",
  },
  {
    name: "Oasis Gardens",
    slug: "oasis-gardens",
    location: "Creek Side",
    badge: "Pre-Launch",
    handover_year: "Q3 2028",
    size_range: "600 – 1,800 sqft",
    bedrooms_range: "Studio – 3 BR",
    starting_price: "AED 850K",
    description: "Tranquil garden residences with creek views, jogging trails and community parks.",
    images: [project1, project3, project2],
    brochure_link: "#",
  },
  {
    name: "Sapphire Bay",
    slug: "sapphire-bay",
    location: "Island District",
    badge: "New Launch",
    handover_year: "Q2 2027",
    size_range: "900 – 2,800 sqft",
    bedrooms_range: "1 – 4 BR",
    starting_price: "AED 1.9M",
    description: "Island living redefined with crystal lagoon access and resort-style living.",
    images: [project2, project1, project3],
    brochure_link: "#",
  },
  {
    name: "Elysium Heights",
    slug: "elysium-heights",
    location: "Hills Estate",
    badge: "Limited Edition",
    handover_year: "Q4 2026",
    size_range: "2,000 – 5,500 sqft",
    bedrooms_range: "3 – 6 BR",
    starting_price: "AED 5.2M",
    description: "Elevated hillside mansions with golf course views and private elevator access.",
    images: [project3, project2, project1],
    brochure_link: "#",
  },
];

export const faqItems = [
  {
    question: "Why should investors consider Soulever by Beyond?",
    answer: "Soulever by Beyond is positioned in Dubai Maritime City — a rapidly emerging waterfront district with limited premium supply. Its prime coastal location, strong end-user demand, and luxury positioning create strong potential for capital appreciation and attractive rental yields.",
  },
  {
    question: "What ROI potential does Soulever by Beyond offer?",
    answer: "Dubai waterfront properties consistently outperform standard residential assets in both rental returns and long-term value growth. With increasing demand for premium lifestyle residences, Soulever presents strong prospects for both short-term rental income and long-term equity growth.",
  },
  {
    question: "Is Dubai Maritime City a high-growth investment zone?",
    answer: "Yes. Dubai Maritime City is undergoing major infrastructure and luxury development expansion, positioning it as one of Dubai's next prime waterfront hubs — similar to early-stage investments in Dubai Marina or Palm Jumeirah.",
  },
  {
    question: "What payment plan is available for investors?",
    answer: "Soulever by Beyond offers flexible post-handover-friendly payment structures, allowing investors to leverage capital efficiently while securing a high-demand waterfront asset.",
  },
  {
    question: "Can international investors buy at Soulever by Beyond?",
    answer: "Yes. Dubai Maritime City is a designated freehold zone, allowing both UAE residents and international investors to purchase property with full ownership rights.",
  },
  {
    question: "What makes Soulever different from other waterfront projects?",
    answer: "Soulever combines OMNIYAT's BEYOND design philosophy with limited waterfront inventory, premium architecture, and curated lifestyle amenities — creating a differentiated asset positioned for exclusivity and long-term value retention.",
  },
];
