import Image from "next/image";
import { ContactSection } from "@/components/contact-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { StatsPanel } from "@/components/stats-panel";

const benefits = [
  ["Purposeful Work", "Contribute to impactful projects across key sectors."],
  ["Career Growth", "Access to mentorship and professional development."],
  ["Inclusive Culture", "A collaborative and empowering work environment."],
  ["Competitive Benefits", "A package that supports your growth and well-being."],
] as const;

export function CareersPage() {
  return (
    <>
      <PageHero
        current="Careers"
        title="Shape the Future With Us"
        description="At AMER Holding, we believe that people are the driving force behind progress. By joining our team, you become part of a purpose-driven organization committed to innovation, sustainable growth, and positive impact across industries."
      >
        <div className="mt-12 grid gap-5 sm:grid-cols-[.8fr_1.2fr]">
          <div className="relative min-h-[290px] overflow-hidden rounded-lg sm:min-h-[410px]">
            <Image src="/images/GqseMwUDdRUfIgxyxiVW1IWxU.jpg" alt="Emirati professionals working together" fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover" />
          </div>
          <div className="relative min-h-[290px] overflow-hidden rounded-lg sm:min-h-[410px]">
            <Image src="/images/HSqqasAMgbMM0aJEU4ASxcVYdM.jpg" alt="AMER Holding team members" fill sizes="(max-width: 640px) 100vw, 60vw" className="object-cover" />
          </div>
        </div>
      </PageHero>

      <section className="bg-[#f5f3ef] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Join Us"
            title="Why Work With Us?"
            description="We are more than just a workplace—we are a community united by shared values and ambition. At AMER Holding, you will find the opportunity to learn, grow, and be part of projects that shape the future."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([title, description], index) => (
              <article key={title} className="bg-white p-7">
                <span className="font-heading text-5xl text-gold">0{index + 1}</span>
                <h3 className="mt-7 font-heading text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-16">
          <div className="relative min-h-[430px] overflow-hidden rounded-lg">
            <Image src="/images/8m43hDVRLlB9tZDh6Hv2MDxIZw4.jpg" alt="AMER Holding professionals in the UAE" fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Emiratization" title="Supporting Emiratization" />
            <div className="mt-6 space-y-5 text-base leading-7 text-black/65">
              <p>In alignment with the UAE’s national vision, AMER Holding is deeply committed to advancing Emiratization as a cornerstone of our corporate strategy. We believe that the future of our nation lies in the empowerment of Emirati talent, and we actively invest in programs that support their growth, development, and long-term success.</p>
              <p>Through dedicated training, mentorship, and career development opportunities, we ensure that Emirati professionals can thrive across our diverse subsidiaries and industries. Our goal is to create pathways for local talent not only to participate in the workforce, but to take on leadership roles that drive innovation, competitiveness, and sustainable progress.</p>
              <p>By fostering an environment where national expertise is celebrated and supported, we contribute to the UAE’s mission of building a knowledge-based economy—one where Emiratis are at the forefront of shaping the nation’s future across regional and global markets.</p>
            </div>
          </div>
        </div>
      </section>

      <StatsPanel />
      <ContactSection
        eyebrow="Job Opportunities"
        title="Submit Your Resume"
        description="We are always on the lookout for passionate and talented individuals to join our growing team. If you believe your skills and aspirations align with our vision, submit your resume today and take the first step towards shaping the future with AMER Holding."
        resume
        backgroundImage="/images/TpwpD3a6i7jy6w9FhBbveYaYBMc.jpg"
      />
    </>
  );
}
