"use client";

import { SiteImage as Image } from "@/components/site-image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Globe2, Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { companyInfo } from "@/lib/company-info";
import { headerSpring, revealVariants } from "@/lib/motion";

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
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function updateHeaderState() {
      setIsScrolled(window.scrollY > 24);
    }

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

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

  const lightTop = pathname.startsWith("/news/");
  const headerColors = isOpen
    ? {
        backgroundColor: "rgba(1, 33, 56, 1)",
        borderColor: "rgba(255, 255, 255, 0.15)",
        color: "#ffffff",
      }
    : isScrolled
      ? {
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderColor: "rgba(1, 33, 56, 0.12)",
          color: "#012138",
        }
      : {
          backgroundColor: "rgba(1, 33, 56, 0)",
          borderColor: "rgba(255, 255, 255, 0)",
          color: lightTop ? "#012138" : "#ffffff",
        };

  return (
    <motion.header
      data-motion-header
      initial={false}
      animate={headerColors}
      transition={reduceMotion ? { duration: 0 } : headerSpring}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
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

        <motion.nav
          key={`desktop-navigation-${pathname}`}
          data-motion-reveal="header-load"
          aria-label="Primary navigation"
          className="hidden items-center gap-8 lg:flex"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={revealVariants.fadeUp7}
          custom={0.65}
        >
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href) || (item.href === "/industries" && industryPaths.has(pathname));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[15px] hover:opacity-100 ${active ? "opacity-100" : "opacity-80"}`}
              >
                {item.label}
                {active && <span className="absolute inset-x-0 -bottom-1 h-px bg-gold" />}
              </Link>
            );
          })}
        </motion.nav>

        <motion.div
          key={`header-actions-${pathname}`}
          data-motion-reveal="header-load"
          className="flex items-center gap-4"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={revealVariants.fadeUp7}
          custom={0.65}
        >
          <span className="flex items-center opacity-90" title="English">
            <Globe2 className="size-[19px]" strokeWidth={1.6} aria-hidden="true" />
            <span className="sr-only">Language: English</span>
          </span>
          <Link
            href="/contact"
            className="hidden h-12 items-center gap-5 rounded-md bg-gold px-5 text-[15px] font-medium text-white hover:bg-gold-light sm:flex"
          >
            Contact Us
            <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="grid size-11 place-items-center lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X className="size-7" /> : <Menu className="size-7" strokeWidth={1.4} />}
          </button>
        </motion.div>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-[88px] min-h-[calc(100vh-88px)] border-t border-white/10 bg-navy px-5 py-8 text-white lg:hidden"
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
    </motion.header>
  );
}
