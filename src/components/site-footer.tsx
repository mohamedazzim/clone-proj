import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/lib/company-info";

const companyLinks = [
  ["Home", "/"],
  ["News", "/news"],
  ["Our Industries", "/industries"],
  ["Careers", "/careers"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/15 bg-navy text-white">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.35fr_.7fr_1fr_.55fr] lg:py-20">
        <div>
          <Link href="/" aria-label={`${companyInfo.companyName} home`}>
            <Image
              src="/images/CZLu8ELa3fwwBftGN3WmB7n118.png"
              alt={companyInfo.companyName}
              width={120}
              height={103}
              className="h-auto w-[120px]"
            />
          </Link>
          <p className="mt-6 max-w-[340px] text-base leading-7 text-white/70">
            {companyInfo.tagline}
          </p>
        </div>

        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.16em] text-white/45">Company</p>
          <div className="grid gap-3">
            {companyLinks.map(([label, href]) => (
              <Link key={href} href={href} className="w-fit text-[15px] text-white/75 hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.16em] text-white/45">Contact us</p>
          <p className="max-w-[280px] text-[15px] leading-6 text-white/75">
            {companyInfo.address}
          </p>
          <p className="mt-5 text-[15px] text-white/55">Email</p>
          <a href={`mailto:${companyInfo.email}`} className="mt-1 inline-block text-[15px] text-white/85 hover:text-white">
            {companyInfo.email}
          </a>
          <p className="mt-4 text-[15px] text-white/55">Phone</p>
          <a href={`tel:${companyInfo.phone.replaceAll(" ", "")}`} className="mt-1 inline-block text-[15px] text-white/85 hover:text-white">
            {companyInfo.phone}
          </a>
        </div>

        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.16em] text-white/45">Social Media</p>
          <div className="flex gap-3">
            <a
              href={companyInfo.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`${companyInfo.companyName} on Instagram`}
              className="grid size-11 place-items-center rounded-full border border-white/25 text-white/80 hover:border-white hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="size-[19px]" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.4" cy="6.6" r=".8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={companyInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${companyInfo.companyName} on LinkedIn`}
              className="grid size-11 place-items-center rounded-full border border-white/25 text-white/80 hover:border-white hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="size-[19px]" fill="currentColor" aria-hidden="true">
                <path d="M5.3 7.9H2.2V21h3.1V7.9ZM3.8 2A1.8 1.8 0 1 0 3.8 5.6 1.8 1.8 0 0 0 3.8 2ZM21.8 13.5c0-4-2.1-5.9-5-5.9-2.3 0-3.4 1.3-4 2.2V7.9H9.7V21h3.1v-6.5c0-1.7.3-3.4 2.5-3.4 2.1 0 2.2 2 2.2 3.5V21h3.1l1.2-7.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-[1280px] px-5 py-6 text-sm text-white/50 sm:px-8">
          Copyright © 2025 {companyInfo.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
