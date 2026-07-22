import { ContactSection } from "@/components/contact-section";
import { PageHero } from "@/components/page-hero";

export function ContactPage() {
  return (
    <>
      <PageHero current="Contact" title="Get in Touch" description="We welcome your inquiries and look forward to connecting." align="left" />
      <ContactSection eyebrow="" title="Reach Out to Us" description="Fill out the form, and let’s talk about how we can support your business with tailored solutions." />
    </>
  );
}
