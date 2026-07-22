import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IndustryCard } from "@/components/industry-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { industries } from "@/lib/site-data";

const steps = [
  ["01", "Understanding Needs", "We listen, analyze, and align with client and market goals."],
  ["02", "Strategic Planning", "Designing tailored strategies with measurable impact."],
  ["03", "Execution Excellence", "Delivering projects with quality, speed, and precision."],
  ["04", "Sustainable Growth", "Building long-term partnerships that create shared value."],
] as const;

export function IndustriesPage() {
  return (
    <>
      <PageHero
        current="Industries"
        title="Shaping Progress Across Sectors"
        description="At AMER Holding, our strength lies in diversification. With a presence across high-impact sectors, we bring together expertise, innovation, and trusted partnerships to create lasting value for communities and economies."
      />

      <section className="bg-navy py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-6 px-5 sm:px-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => <IndustryCard key={industry.slug} industry={industry} />)}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="A Unified Approach to Growth"
            description="Across all industries, our approach remains consistent: driven by vision, powered by expertise, and focused on impact. We believe in collaboration, innovation, and sustainable value creation."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-black/10 md:grid-cols-2 xl:grid-cols-4">
            {steps.map(([number, title, description]) => (
              <article key={number} className="bg-[#f7f7f7] p-7">
                <span className="font-heading text-[52px] text-gold">{number}</span>
                <h3 className="mt-6 font-heading text-[28px] leading-tight">{title}</h3>
                <p className="mt-4 text-[15px] leading-6 text-black/60">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl font-heading text-4xl leading-[1.08] sm:text-5xl lg:text-[52px]">Let’s Build What’s Next, Together!</h2>
          <Link href="/contact" className="flex h-13 w-fit items-center gap-8 rounded-md bg-gold px-6 font-medium text-white">
            Contact Us
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
