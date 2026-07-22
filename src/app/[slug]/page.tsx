import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPage } from "@/components/about-page";
import { CareersPage } from "@/components/careers-page";
import { ContactPage } from "@/components/contact-page";
import { IndustriesPage } from "@/components/industries-page";
import { IndustryDetailPage } from "@/components/industry-detail-page";
import { companyInfo } from "@/lib/company-info";
import { industryDetails } from "@/lib/industry-details";

const pageMetadata: Record<string, { title: string; description: string }> = {
  about: {
    title: "About | Vision, Mission & Leadership",
    description: `Learn how ${companyInfo.companyName} drives innovation, sustainable growth, and positive impact across the GCC and beyond.`,
  },
  industries: {
    title: "Our Industries | Business Sectors",
    description: `Explore ${companyInfo.companyName}’s diversified expertise across contracting, real estate, healthcare, automotive, hospitality, and recruitment.`,
  },
  careers: {
    title: "Careers",
    description: `Build a purpose-driven career with ${companyInfo.companyName} and help shape sustainable progress across the UAE.`,
  },
  contact: {
    title: "Contact",
    description: `Connect with ${companyInfo.companyName} in Abu Dhabi.`,
  },
};

type TopLevelPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...Object.keys(pageMetadata).map((slug) => ({ slug })),
    ...industryDetails.map((detail) => ({ slug: detail.slug })),
  ];
}

export async function generateMetadata({ params }: TopLevelPageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = industryDetails.find((industry) => industry.slug === slug);
  const page = pageMetadata[slug];

  if (detail) {
    return { title: detail.category, description: detail.heroDescription };
  }

  return page ?? {};
}

export default async function TopLevelPage({ params }: TopLevelPageProps) {
  const { slug } = await params;

  if (slug === "about") return <AboutPage />;
  if (slug === "industries") return <IndustriesPage />;
  if (slug === "careers") return <CareersPage />;
  if (slug === "contact") return <ContactPage />;

  const detail = industryDetails.find((industry) => industry.slug === slug);
  if (detail) return <IndustryDetailPage detail={detail} />;

  notFound();
}
