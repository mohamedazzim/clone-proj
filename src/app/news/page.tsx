import type { Metadata } from "next";
import { NewsCard } from "@/components/news-card";
import { PageHero } from "@/components/page-hero";
import { newsArticles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "News & Insights",
  description: "Explore the latest news, projects, partnerships, and industry insights from AMER Holding.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        current="News"
        title="News & Insights"
        align="left"
        description="Explore the latest news, industry insights, and thought leadership from AMER Holding. Stay informed about our projects, partnerships, and the trends shaping the future of business across the GCC and beyond."
      />
      <section className="bg-navy pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto grid max-w-[1280px] gap-x-7 gap-y-10 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => <NewsCard key={article.slug} article={article} />)}
        </div>
      </section>
    </>
  );
}
