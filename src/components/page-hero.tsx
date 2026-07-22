import type { ReactNode } from "react";
import Link from "next/link";
import { LoadReveal } from "@/components/motion/reveal";

type PageHeroProps = {
  current: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
};

export function PageHero({ current, title, description, align = "center", children }: PageHeroProps) {
  const centered = align === "center";

  return (
    <section className="bg-navy text-white">
      <div className={`mx-auto max-w-[1280px] px-5 pb-20 pt-[142px] sm:px-8 sm:pb-24 sm:pt-[152px] ${centered ? "text-center" : ""}`}>
        <nav aria-label="Breadcrumb" className={`mb-7 flex items-center gap-2 text-[15px] ${centered ? "justify-center" : ""}`}>
          <Link href="/" className="text-white/90 hover:text-white">Home</Link>
          <span aria-hidden="true" className="text-white/45">›</span>
          <span className="text-gold-light">{current}</span>
        </nav>
        <LoadReveal variant="fadeBlur10">
          <h1 className={`text-balance font-heading text-[44px] leading-[1.06] sm:text-6xl lg:text-[64px] ${centered ? "mx-auto max-w-[1080px]" : "max-w-[1050px]"}`}>
            {title}
          </h1>
          {description && (
            <div className={`mt-5 text-base leading-7 text-white/72 sm:text-lg ${centered ? "mx-auto max-w-[1040px]" : "max-w-[1120px]"}`}>
              {description}
            </div>
          )}
        </LoadReveal>
        {children}
      </div>
    </section>
  );
}
