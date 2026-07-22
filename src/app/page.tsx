import { SiteImage as Image } from "@/components/site-image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { IndustryMarquee } from "@/components/industry-marquee";
import { LoadReveal, ScrollReveal } from "@/components/motion/reveal";
import { NewsCard } from "@/components/news-card";
import { ProjectShowcase } from "@/components/project-showcase";
import { SectionHeading } from "@/components/section-heading";
import { StatsPanel } from "@/components/stats-panel";
import { industries, newsArticles } from "@/lib/site-data";

const projects = [
  {
    title: "Radiant Square",
    image: "/images/ytHfaJRatOEZUgKMsqKXqP9HE.webp",
    description:
      "A visionary mixed-use development in the City of Lights, Reem Island, bringing residential, commercial, and retail spaces together for modern living.",
  },
  {
    title: "AK Tower Project",
    image: "/images/WoRVKY68XI9fRmcilfNA4DDbjM.webp",
    description:
      "A premier Abu Dhabi destination created to balance sophisticated residential living with flexible business spaces.",
  },
  {
    title: "Holiday Inn",
    image: "/images/RSvzgyVB7WFuHEC5CHJg9DqYA.png",
    description:
      "A trusted hospitality landmark offering comfort, convenience, and thoughtful service in the heart of the UAE capital.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy text-white">
        <Image
          src="/images/GTQTLpTvdbBuISZv7F45diQ4.jpg"
          alt="Abu Dhabi skyline at dusk"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-navy/70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/20 via-transparent to-navy/55" />

        <div className="mx-auto w-full max-w-[1280px] px-5 pb-20 pt-32 text-center sm:px-8">
          <LoadReveal variant="fadeUp7" delay={0.35} className="inline-flex items-center gap-2 text-sm sm:text-base">
            <span className="rounded-md bg-white px-2.5 py-1.5 font-medium text-black">Your partners</span>
            <span className="text-white/90">Where innovation meets impact</span>
          </LoadReveal>
          <LoadReveal variant="fadeBlur10" delay={0.25}>
            <h1 className="mx-auto mt-6 max-w-[970px] text-balance font-heading text-[52px] leading-[1.02] sm:text-7xl lg:text-[82px]">
              Shaping Sustainable Progress Across Sectors
            </h1>
            <p className="mx-auto mt-7 max-w-[760px] border-t border-white/20 pt-7 text-base leading-7 text-white/85 sm:text-lg">
              Building a legacy of innovation, excellence, and impact across the GCC region.
            </p>
          </LoadReveal>
          <LoadReveal variant="fadeUp7" delay={0.65} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/industries" className="flex h-13 w-full items-center justify-between gap-8 rounded-md bg-white px-5 font-medium text-navy sm:w-auto">
              Explore Our Industries
              <ArrowRight className="size-4" />
            </Link>
            <a href="#projects" className="flex h-13 w-full items-center justify-between gap-8 rounded-md bg-gold px-5 font-medium text-white sm:w-auto">
              Explore Our Projects
              <ArrowRight className="size-4" />
            </a>
          </LoadReveal>
        </div>
      </section>

      <section className="bg-navy py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-16">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg sm:min-h-[560px]">
            <Image
              src="/images/opg5TgSGikEmszbh9Y3Nhnbvs.jpg"
              alt="AMER Holding development"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
          <div>
            <ScrollReveal variant="fadeUp18">
              <SectionHeading
                eyebrow="About Us"
                title="A Legacy of Growth & Innovation"
                inverse
                description="AMER Holding is a diversified family business group based in Abu Dhabi, driving transformation across key industries including contracting, real estate, F&B, recruitment, healthcare, and more. With a legacy of over 50 years, we are committed to empowering sustainable growth and delivering long-term value."
              />
              <p className="mt-8 text-sm font-medium uppercase tracking-[0.12em] text-gold-light">Shaping Sustainable Progress Across Sectors</p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp7">
              <Link href="/about" className="mt-7 inline-flex items-center gap-5 text-base font-medium text-white">
                Chairman&apos;s Message
                <ArrowRight className="size-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ef] py-20 sm:py-24 lg:py-28">
        <ScrollReveal variant="fadeUp18" className="mx-auto grid max-w-[1280px] gap-8 px-5 sm:px-8 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-7 sm:p-9">
            <h2 className="font-heading text-4xl">Our Vision</h2>
            <p className="mt-5 text-base leading-7 text-black/65">
              At AMER Holding, our vision is to be a driving force of sustainable excellence—enabling transformation that benefits industries, communities, and future generations.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Champion innovation to unlock long-term growth",
                "Lead with integrity and purpose across every sector",
                "Create lasting impact aligned with regional and global goals",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-6 text-black/70">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold text-white"><Check className="size-3" /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative isolate overflow-hidden rounded-lg bg-gold p-7 text-white sm:p-9">
            <Image src="/images/EVYJBUq90H3M5JHcD6jc6mI7mKc.png" alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="-z-20 object-cover opacity-25" />
            <div className="absolute inset-0 -z-10 bg-gold/80" />
            <h2 className="font-heading text-4xl">Our Mission</h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/80">
              To connect expertise across our businesses, deliver dependable all-in-one solutions, and create enduring value for partners, communities, and generations to come.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-navy py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <ScrollReveal variant="fadeUp18">
            <SectionHeading eyebrow="All In One Service" title="Our Industries" description="Discover the sectors where we create synergies and drive value" inverse />
          </ScrollReveal>
          <ScrollReveal variant="fadeUp18" className="mt-12">
            <IndustryMarquee industries={industries} />
          </ScrollReveal>
        </div>
      </section>

      <StatsPanel />

      <section id="projects" className="bg-[#f7f7f7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <ScrollReveal variant="fadeBlur10">
            <SectionHeading
              eyebrow="Projects"
              title="Strategic Projects & Flagship Entities"
              description="We proudly support and operate leading companies across industries—delivering innovative solutions and iconic projects."
            />
          </ScrollReveal>
          <ScrollReveal variant="fadeUp17" className="mt-12">
            <ProjectShowcase projects={projects} />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <ScrollReveal variant="fadeUp18">
              <SectionHeading eyebrow="Our News" title="Latest News & Highlights" description="Stay updated with the latest news, achievements, and milestones from Amer Holding." inverse />
            </ScrollReveal>
            <ScrollReveal variant="fadeUp7" className="shrink-0">
              <Link href="/news" className="inline-flex h-12 items-center gap-5 rounded-md bg-gold px-5 font-medium text-white">
                View All News
                <ArrowRight className="size-4" />
              </Link>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="fadeUp18" className="mt-12 grid gap-6 lg:grid-cols-3">
            {newsArticles.slice(0, 3).map((article) => <NewsCard key={article.slug} article={article} />)}
          </ScrollReveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
