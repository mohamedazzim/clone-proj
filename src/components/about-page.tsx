import { SiteImage as Image } from "@/components/site-image";
import { Check } from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { LoadReveal, ScrollReveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

const values = [
  ["1", "Integrity First", "We conduct our business with honesty, transparency, and respect—building trust with every stakeholder."],
  ["2", "Purpose-Driven Innovation", "We embrace change and think ahead, creating solutions that are both impactful and meaningful for future generations."],
  ["3", "Sustainability & Stewardship", "We are committed to responsible growth that safeguards resources, uplifts communities, and leaves a lasting legacy."],
  ["4", "Empowerment & Inclusion", "We cultivate an inclusive culture where every voice matters, and individuals are empowered to lead, grow, and thrive."],
  ["5", "Excellence Always", "We set high standards in everything we do—striving not only to meet expectations, but to exceed them consistently."],
] as const;

export function AboutPage() {
  return (
    <>
      <PageHero
        current="About Us"
        title="Innovation. Growth. Sustainability."
        description="AMER Holding is a diversified group headquartered in Abu Dhabi, uniting leading businesses with one purpose: to shape a future where innovation, progress, and sustainability go hand in hand. Driven by a bold ambition and supported by strong family business values, we have grown into a trusted partner for private and public sectors across the GCC. Our subsidiaries operate in high-impact industries, delivering integrated solutions that elevate lives, empower economies, and drive collective progress."
      >
        <LoadReveal variant="fadeUp28" delay={0.25} className="mt-12 grid gap-5 sm:grid-cols-[.8fr_1.2fr]">
          <div className="relative min-h-[260px] overflow-hidden rounded-lg sm:min-h-[360px]">
            <Image src="/images/pV9Tf8ZtJxRJNDOM4u7e477SBo.jpg" alt="AMER Holding development plan" fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover" />
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-lg sm:min-h-[360px]">
            <Image src="/images/8obnPmfdlaJOXwWP1AV9E4EcA8.jpg" alt="AMER Holding professionals" fill sizes="(max-width: 640px) 100vw, 60vw" className="object-cover" />
          </div>
        </LoadReveal>
      </PageHero>

      <section className="bg-navy py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
          <div className="relative mx-auto hidden aspect-[.82/1] w-full max-w-[420px] overflow-hidden rounded-lg bg-[#ddc2a2] lg:block">
            <Image src="/images/OSpeSy3JOyewYLBpbMbpDphSII.jpg" alt="Ahmed Amer Omar, Chairman of AMER Holding" fill sizes="420px" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 to-transparent px-6 pb-6 pt-20 text-left">
              <h2 className="font-heading text-3xl">Ahmed Amer Omar</h2>
              <p className="mt-1 text-sm text-white/65">Chairman – Amer Holding</p>
            </div>
          </div>
          <ScrollReveal variant="fadeUp17">
            <SectionHeading eyebrow="Chairman's Message" title="A Vision for Sustainable Growth" inverse />
            <p className="mt-7 text-lg leading-8 text-white/85">The GCC is on a transformative journey, and at AMER Holding, we are proud to be part of shaping its future.</p>
            <div className="mt-6 space-y-5 text-base leading-7 text-white/65">
              <p>Our strategic footprint across vital sectors reflects both our ambition and responsibility. With a legacy built on performance and trust, and a future anchored in purpose and innovation, AMER Holding is uniquely positioned to create long-lasting impact.</p>
              <p>We are committed to maintaining the highest standards of professionalism, governance, and sustainability. As we expand our reach across regional and international markets, we remain steadfast in our belief that business success must go hand in hand with societal benefit.</p>
              <p>Together with our partners, stakeholders, and dedicated teams, we look forward to writing the next chapter of growth - one defined by resilience, progress, and shared value creation.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <ScrollReveal variant="fadeUp18">
              <SectionHeading
                eyebrow="About Us"
                title="A Legacy of Growth & Innovation"
                description="AMER Holding is a diversified family business group based in Abu Dhabi, driving transformation across key industries including contracting, real estate, F&B, recruitment, healthcare, and more. With a legacy of over 50 years, we are committed to empowering sustainable growth and delivering long-term value."
              />
            </ScrollReveal>
            <div className="relative min-h-[380px] overflow-hidden rounded-lg">
              <Image src="/images/EVYJBUq90H3M5JHcD6jc6mI7mKc.png" alt="AMER Holding development" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>

          <ScrollReveal variant="fadeUp18" className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-black/10 bg-white p-7 sm:p-9">
              <h3 className="font-heading text-3xl">Our Vision</h3>
              <p className="mt-4 text-base leading-7 text-black/65">At AMER Holding, our vision is to be a driving force of sustainable excellence—enabling transformation that benefits industries, communities, and future generations.</p>
              <ul className="mt-6 space-y-4">
                {["Champion innovation to unlock long-term growth", "Lead with integrity and purpose across every sector", "Create lasting impact aligned with regional and global goals"].map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-6 text-black/70"><Check className="mt-0.5 size-5 shrink-0 rounded-full bg-gold p-1 text-white" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-gold p-7 text-white sm:p-9">
              <h3 className="font-heading text-3xl">Our Mission</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/80">To bring together specialist businesses under one trusted group, deliver integrated solutions with purpose, and create measurable progress that endures.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f5f3ef] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <ScrollReveal variant="fadeUp18">
            <SectionHeading eyebrow="Our Values" title="Our Core Values" description="At AMER Holding, our values are more than principles—they are the foundation of how we lead, build, and impact. These core beliefs guide every decision we make, shaping a culture of excellence, trust, and responsibility across all our ventures." />
          </ScrollReveal>
          <ScrollReveal variant="fadeUp17" className="mt-12 grid gap-px overflow-hidden rounded-lg bg-black/10 md:grid-cols-2 xl:grid-cols-5">
            {values.map(([number, title, description]) => (
              <article key={title} className="bg-white p-6 sm:p-7">
                <span className="font-heading text-5xl text-gold">{number}</span>
                <h3 className="mt-7 font-heading text-2xl leading-tight">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-black/60">{description}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-24 lg:py-28">
        <Image src="/images/ujML8hiNfVccRPOKWBvhcJtcqeE.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-20" />
        <div className="absolute inset-0 -z-10 bg-navy/80" />
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <SectionHeading
            eyebrow="Investor Relations"
            title="Where strategic vision meets operational excellence."
            inverse
            description="AMER Holding offers an integrated investment ecosystem where strategic vision meets operational excellence. As a trusted partner for long-term value, we continuously seek to expand our investor network and engage stakeholders with transparency and integrity."
          />
          <div>
            <h3 className="font-heading text-3xl">Why Clients Return</h3>
            <div className="mt-7 space-y-6">
              {[
                ["Diversified Solutions", "From construction to healthcare, clients benefit from integrated services across industries."],
                ["Trusted Partnerships", "Built on consistent delivery and ethical governance."],
                ["Proven Success", "Case studies and testimonials reflect strong return and satisfaction."],
              ].map(([title, text]) => (
                <div key={title} className="border-l border-gold pl-5">
                  <h4 className="font-heading text-2xl">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
