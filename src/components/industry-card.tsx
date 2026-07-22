import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { IndustrySummary } from "@/lib/site-data";

type IndustryCardProps = {
  industry: IndustrySummary;
  light?: boolean;
};

export function IndustryCard({ industry, light = true }: IndustryCardProps) {
  return (
    <Link
      href={industry.available ? `/${industry.slug}` : "/industries"}
      className={`group flex h-full flex-col overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1 ${
        light ? "bg-white text-black shadow-[0_12px_35px_rgba(1,33,56,.08)]" : "bg-white/8 text-white"
      }`}
    >
      <div className="relative aspect-[1.45/1] overflow-hidden">
        <Image
          src={industry.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-heading text-2xl leading-tight">{industry.title}</h3>
          <Image src={industry.icon} alt="" width={44} height={44} className="size-11 shrink-0" />
        </div>
        <p className={`mt-4 text-[15px] leading-6 ${light ? "text-black/60" : "text-white/60"}`}>{industry.summary}</p>
        <span className={`mt-6 inline-flex items-center gap-3 text-sm font-medium ${light ? "text-gold" : "text-gold-light"}`}>
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
