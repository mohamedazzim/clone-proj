import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { IndustryCard } from "@/components/industry-card";
import { SectionHeading } from "@/components/section-heading";
import type { IndustryDetail } from "@/lib/industry-details";
import { industries } from "@/lib/site-data";

const compactHeroDescription =
  "From high-level strategy to operational execution, our tailored solutions are designed to deliver measurable impact across every stage of your business.";

export function IndustryDetailPage({ detail }: { detail: IndustryDetail }) {
  const otherIndustries = detail.otherSlugs
    .map((slug) => industries.find((industry) => industry.slug === slug))
    .filter((industry) => industry !== undefined);

  return (
    <>
      <section className="bg-navy pb-20 pt-8 text-white sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <span className="inline-flex rounded-md bg-gold px-2.5 py-1.5 text-sm font-medium">{detail.category}</span>
          <h1 className="mt-6 max-w-[1160px] font-heading text-[44px] leading-[1.08] sm:text-[54px] lg:text-[64px]">
            {detail.heroTitle}
          </h1>
          <p className="mt-5 max-w-[1180px] text-base leading-7 text-white/72 min-[1200px]:hidden sm:text-lg">
            {compactHeroDescription}
          </p>
          <p className="mt-5 hidden max-w-[1180px] text-lg leading-7 text-white/72 min-[1200px]:block">
            {detail.heroDescription}
          </p>
          {detail.moreDetails && (
            <a
              href={detail.moreDetails}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-gold-light"
            >
              More Details
              <ArrowUpRight className="size-4" />
            </a>
          )}
          <div className="relative mt-12 aspect-[1.52/1] max-h-[790px] overflow-hidden rounded-lg">
            <Image src={detail.heroImage} alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-navy pb-20 text-white sm:pb-24 lg:pb-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[1.3625/1] overflow-hidden rounded-lg">
            <Image src={detail.whatImage} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="What We Do" title={detail.whatTitle} inverse />
            <div className="mt-6 space-y-5 text-base leading-7 text-white/68">
              {detail.whatBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ef] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title={detail.servicesTitle}
            description="Our specialist teams combine practical experience with responsive support to deliver dependable results at every stage."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-black/10 md:grid-cols-2 lg:grid-cols-3">
            {detail.services.map((service, index) => (
              <article key={service.title} className="min-h-[245px] bg-white p-7 sm:p-8">
                <span className="font-heading text-5xl text-gold">{index + 1}</span>
                <h3 className="mt-7 font-heading text-2xl leading-tight">{service.title}</h3>
                <p className="mt-4 text-[15px] leading-6 text-black/60">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.78fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading eyebrow="How We Work" title={detail.processTitle} inverse description={detail.processIntro} />
            <div className="mt-10 space-y-0">
              {detail.process.map((step, index) => (
                <article key={step.title} className="border-l border-gold py-4 pl-6">
                  <div className="flex gap-4">
                    <span className="w-7 shrink-0 text-sm font-medium text-gold-light">0{index + 1}</span>
                    <div>
                      <h3 className="font-heading text-2xl">{step.title}</h3>
                      <p className="mt-2 text-[15px] leading-6 text-white/60">{step.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="relative aspect-[.838/1] overflow-hidden rounded-lg">
            <Image src={detail.processImage} alt="" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
          </div>
        </div>
      </section>

      <ContactSection
        phone={detail.phone}
        email={detail.email}
        showAddress={false}
        backgroundImage="/images/zQMCh5iJVxF2RGHGmfd6cIWpZI.jpg"
      />

      <section className="bg-navy py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <SectionHeading eyebrow="All services" title="Other Industries" inverse />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {otherIndustries.map((industry) => <IndustryCard key={industry.slug} industry={industry} />)}
          </div>
        </div>
      </section>
    </>
  );
}
