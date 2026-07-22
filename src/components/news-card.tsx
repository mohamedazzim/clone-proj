import { SiteImage as Image } from "@/components/site-image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { NewsArticle } from "@/lib/site-data";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5 text-white"
    >
      <div className="relative aspect-[1.55/1] overflow-hidden">
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80">{article.category}</span>
        <div className="mt-4 flex items-start justify-between gap-4">
          <h3 className="font-heading text-[25px] leading-[1.18]">{article.title}</h3>
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-gold" />
        </div>
        <p className="mt-4 line-clamp-3 text-[15px] leading-6 text-white/60">{article.excerpt}</p>
      </div>
    </Link>
  );
}
