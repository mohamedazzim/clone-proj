import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { companyInfo } from "@/lib/company-info";

const stats = [
  ["50+", "Years of Legacy", "A trusted presence built over five decades of consistent growth and performance."],
  ["8", "Core Industries", "A diversified portfolio spanning real estate, healthcare, contracting, F&B, and more."],
  ["30+", "Strategic Partnerships", "Collaborating with key public and private sector players across the GCC."],
  ["100+", "Projects Delivered", "Impactful ventures that shape economies and communities across the region."],
] as const;

export function StatsPanel() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-20 bg-[url('/images/j2fr2JB5xD0rHQvADWNk0nCmj3Y.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/95 to-navy/75" />
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <h2 className="max-w-5xl text-balance font-heading text-4xl leading-[1.1] sm:text-5xl lg:text-[52px]">
          The GCC is on a transformative journey—and at {companyInfo.companyName}, we are proud to be part of shaping its future.
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, title, description]) => (
            <div key={title} className="bg-navy/90 p-6 sm:p-7">
              <p className="font-heading text-5xl text-gold-light">{value}</p>
              <p className="mt-3 text-base font-medium">{title}</p>
              <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
            </div>
          ))}
        </div>
        <Link href="/about" className="mt-10 inline-flex h-12 items-center gap-6 rounded-md bg-white px-5 font-medium text-navy">
          Know More About Us
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
