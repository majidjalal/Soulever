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
    question: "What is the minimum investment to get started?",
    answer: "Our projects start from AED 850,000 for studio apartments, with luxury villas beginning at AED 5.2M. We offer flexible payment plans with as low as 10% down payment.",
  },
  {
    question: "Are these properties freehold for foreign investors?",
    answer: "Yes, all our developments are located in designated freehold zones, allowing full ownership rights for international investors with no restrictions.",
  },
  {
    question: "What payment plans are available?",
    answer: "We offer a range of flexible payment plans including 60/40, 70/30, and post-handover options. Our advisors can tailor a plan that works best for your investment goals.",
  },
  {
    question: "Can I earn rental income from my property?",
    answer: "Absolutely. Our waterfront and downtown properties yield an average 7–9% ROI annually. We also offer full property management services for hassle-free rental income.",
  },
  {
    question: "What is the expected handover timeline?",
    answer: "Handover timelines vary by project, ranging from Q1 2026 to Q3 2028. All our projects are delivered on schedule with a proven track record of timely completion.",
  },
  {
    question: "Do you assist with visa and residency applications?",
    answer: "Yes, properties valued above AED 750,000 qualify for a residency visa. Our concierge team handles the entire visa application process on your behalf.",
  },
];
