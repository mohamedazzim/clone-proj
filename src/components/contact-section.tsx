"use client";

import { SiteImage as Image } from "@/components/site-image";
import { Mail, MapPin, Phone, Send, Upload } from "lucide-react";
import { type FormEvent, useState } from "react";
import { ScrollReveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { companyInfo } from "@/lib/company-info";

type ContactSectionProps = {
  title?: string;
  description?: string;
  eyebrow?: string;
  resume?: boolean;
  phone?: string;
  email?: string;
  showAddress?: boolean;
  backgroundImage?: string;
  animateHeading?: boolean;
};

const inputClass =
  "h-12 w-full rounded-md border border-black/10 bg-[#f3f3f3] px-3.5 text-base text-black outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/15";

export function ContactSection({
  title = "Contact Us",
  description = "We welcome your inquiries and look forward to connecting.",
  eyebrow = "Get In Touch",
  resume = false,
  phone = companyInfo.phone,
  email = companyInfo.email,
  showAddress = true,
  backgroundImage = "/images/ujML8hiNfVccRPOKWBvhcJtcqeE.jpg",
  animateHeading = true,
}: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <section className="bg-[#f5f3ef] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {animateHeading ? (
          <ScrollReveal variant="fadeUp18">
            <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          </ScrollReveal>
        ) : (
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        )}

        <div className="mt-12 grid overflow-hidden rounded-xl bg-navy shadow-[0_24px_70px_rgba(1,33,56,.12)] lg:grid-cols-[.85fr_1.15fr]">
          <div className="relative isolate min-h-[470px] overflow-hidden px-6 py-9 text-white sm:px-10 lg:min-h-full lg:px-12 lg:py-12">
            <Image
              src={backgroundImage}
              alt={`${companyInfo.companyName} office interior`}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="-z-20 object-cover opacity-25"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/55 via-navy/80 to-navy" />
            <h3 className="font-heading text-3xl">{resume ? "Submit Your Resume" : "Reach Out to Us"}</h3>
            <p className="mt-4 max-w-md text-base leading-7 text-white/72">
              {resume
                ? `Joining ${companyInfo.companyName} is simple. Submit your details directly to our HR team and our recruitment specialists will contact you when a suitable opportunity arises.`
                : "Fill out the form, and let’s talk about how we can support your business with tailored solutions."}
            </p>

            <div className="mt-10 space-y-5">
              <a href={`tel:${phone.replaceAll(" ", "")}`} className="flex items-center gap-4 text-white/85 hover:text-white">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/25">
                  <Phone className="size-5" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-sm text-white/50">Call us</span>
                  <span className="mt-0.5 block text-base">{phone}</span>
                </span>
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-4 text-white/85 hover:text-white">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/25">
                  <Mail className="size-5" strokeWidth={1.5} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-white/50">Email us</span>
                  <span className="mt-0.5 block break-all text-base">{email}</span>
                </span>
              </a>
              {showAddress && (
                <a
                  href={companyInfo.socialLinks.googleMaps}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 text-white/85 hover:text-white"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/25">
                    <MapPin className="size-5" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-sm text-white/50">Visit us</span>
                    <span className="mt-0.5 block max-w-sm text-base leading-6">
                      {companyInfo.address}
                    </span>
                  </span>
                </a>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white px-6 py-9 text-black sm:px-10 lg:px-12 lg:py-12">
            <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/xyswYr4wrJNpj8sSIDJdZKjC2w.png"
                  alt={companyInfo.companyName}
                  width={103}
                  height={34}
                  className="h-auto w-[96px]"
                />
                <h3 className="font-heading text-2xl">Let’s Talk</h3>
              </div>
              <Send className="size-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                First name
                <input name="firstName" autoComplete="given-name" className={inputClass} required />
              </label>
              <label className="grid gap-2 text-sm">
                Last name
                <input name="lastName" autoComplete="family-name" className={inputClass} required />
              </label>
              <label className="grid gap-2 text-sm sm:col-span-2">
                Email
                <input name="email" type="email" autoComplete="email" className={inputClass} required />
              </label>
              <label className="grid gap-2 text-sm sm:col-span-2">
                Phone
                <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
              </label>

              {resume ? (
                <>
                  <label className="grid gap-2 text-sm sm:col-span-2">
                    Your Resume
                    <span className="flex min-h-24 cursor-pointer items-center justify-center gap-3 rounded-md border border-dashed border-black/20 bg-[#f7f7f7] px-4 text-center text-black/55 hover:border-gold">
                      <Upload className="size-5 text-gold" />
                      Click to upload file or drag-and-drop. Max 25 MB
                      <input type="file" name="resume" className="sr-only" accept=".pdf,.doc,.docx" required />
                    </span>
                  </label>
                  <label className="grid gap-2 text-sm sm:col-span-2">
                    Industries You Are Interested In
                    <select name="industry" className={inputClass} defaultValue="Corporate">
                      <option>Corporate</option>
                      <option>Real Estate Development</option>
                      <option>Contracting</option>
                      <option>Food &amp; Beverage</option>
                      <option>Automotive Service</option>
                      <option>Healthcare</option>
                      <option>Oil &amp; Gas</option>
                      <option>Recruitment</option>
                      <option>Investment Services</option>
                    </select>
                  </label>
                </>
              ) : (
                <>
                  <label className="grid gap-2 text-sm">
                    Company
                    <input name="company" autoComplete="organization" className={inputClass} />
                  </label>
                  <label className="grid gap-2 text-sm">
                    Job Title
                    <input name="jobTitle" autoComplete="organization-title" className={inputClass} />
                  </label>
                </>
              )}

              <label className="grid gap-2 text-sm sm:col-span-2">
                Message
                <textarea name="message" rows={4} className={`${inputClass} h-auto min-h-28 py-3`} required />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 flex h-12 w-full items-center justify-center gap-3 rounded-md bg-gold px-5 font-medium text-white transition-colors hover:bg-gold-light"
            >
              Submit
              <Send className="size-4" aria-hidden="true" />
            </button>
            <p className="mt-4 text-xs leading-5 text-black/45">
              By submitting this form you agree to our Privacy Policy. {companyInfo.companyName} may contact you via email or phone for scheduling or marketing purposes.
            </p>
            {submitted && (
              <p role="status" className="mt-4 rounded-md bg-[#f5f3ef] px-4 py-3 text-sm leading-6 text-black/65">
                Thank you. Please email {email} to complete your {resume ? "application" : "enquiry"}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
