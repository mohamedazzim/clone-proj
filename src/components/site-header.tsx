"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Globe2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { companyInfo } from "@/lib/company-info";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/industries", label: "Our Industries" },
  { href: "/news", label: "News" },
  { href: "/careers", label: "Careers" },
];

const industryPaths = new Set([
  "/food-beverage",
  "/real-estate-development",
  "/contracting-trading",
  "/automotive-services",
  "/medical-healthcare",
  "/recruitment",
]);

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-navy text-white">
      <div className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label={`${companyInfo.companyName} home`} className="shrink-0">
          <Image
            src="/images/xyswYr4wrJNpj8sSIDJdZKjC2w.png"
            alt={companyInfo.companyName}
            width={143}
            height={47}
            priority
            className="h-auto w-[140px] rounded-full"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href) || (item.href === "/industries" && industryPaths.has(pathname));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[15px] transition-colors hover:text-white ${
                  active ? "text-white" : "text-white/80"
                }`}
              >
                {item.label}
                {active && <span className="absolute inset-x-0 -bottom-1 h-px bg-gold" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <span className="flex items-center text-white/90" title="English">
            <Globe2 className="size-[19px]" strokeWidth={1.6} aria-hidden="true" />
            <span className="sr-only">Language: English</span>
          </span>
          <Link
            href="/contact"
            className="hidden h-12 items-center gap-5 rounded-md bg-gold px-5 text-[15px] font-medium text-white transition-colors hover:bg-gold-light sm:flex"
          >
            Contact Us
            <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="grid size-11 place-items-center text-white lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X className="size-7" /> : <Menu className="size-7" strokeWidth={1.4} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-[88px] min-h-[calc(100vh-88px)] border-t border-white/10 bg-navy px-5 py-8 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/15 py-5 font-heading text-3xl text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 flex h-14 items-center justify-between rounded-md bg-gold px-5 font-medium text-white"
            >
              Contact Us
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
