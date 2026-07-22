import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { NewsCard } from "@/components/news-card";
import { articleContent } from "@/lib/article-content";
import { newsArticles } from "@/lib/site-data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);
  const content = articleContent[slug];

  if (!article || !content) notFound();

  return (
    <>
      <article>
        <header className="bg-[#f7f7f7] px-5 pb-6 pt-14 text-center text-black sm:px-8 sm:pt-16">
          <nav aria-label="Breadcrumb" className="flex justify-center gap-2 text-[15px]">
            <Link href="/" className="text-black/70 hover:text-black">Home</Link>
            <span aria-hidden="true" className="text-black/35">›</span>
            <Link href="/news" className="text-gold">News</Link>
          </nav>
          <h1 className="mx-auto mt-7 max-w-[900px] text-balance font-heading text-[44px] leading-[1.08] sm:text-[54px] lg:text-[64px]">{article.title}</h1>
          <span className="mt-7 inline-flex rounded-md bg-gold px-2.5 py-1 text-sm font-medium text-white">{article.category}</span>
          <div className="relative mx-auto mt-3 aspect-[1.9/1] max-w-[1200px] overflow-hidden rounded-lg">
            <Image src={article.image} alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
        </header>

        <div className="bg-navy px-5 py-14 text-white sm:px-8 sm:pb-24 lg:pb-28">
          <div className="mx-auto max-w-[850px]">
            {content.sections.map((section, sectionIndex) => (
              <section key={`${section.heading ?? "introduction"}-${sectionIndex}`} className={sectionIndex === 0 ? "" : "mt-10"}>
                {section.heading && <h2 className="font-heading text-[28px] leading-[1.1] sm:text-4xl">{section.heading}</h2>}
                {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-5 text-base leading-7 text-white/72">{paragraph}</p>)}
                {section.bullets && (
                  section.ordered ? (
                    <ol className="mt-5 list-decimal space-y-4 pl-6 text-base leading-7 text-white/72">
                      {section.bullets.map((bullet) => <li key={`${bullet.title}-${bullet.text}`} className="pl-2"><strong className="font-medium text-white">{bullet.title}</strong>{bullet.title ? ": " : ""}{bullet.text}</li>)}
                    </ol>
                  ) : (
                    <ul className="mt-5 space-y-4">
                      {section.bullets.map((bullet) => (
                        <li key={`${bullet.title}-${bullet.text}`} className="flex gap-4 text-base leading-7 text-white/72">
                          <span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold-light" />
                          <span><strong className="font-medium text-white">{bullet.title}</strong>{bullet.title ? ": " : ""}{bullet.text}</span>
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </section>
            ))}
            {content.cta && (
              <a href={content.cta.href} target="_blank" rel="noreferrer" className="mt-12 inline-flex h-12 items-center gap-4 rounded-md bg-gold px-5 font-medium text-white">
                {content.cta.label}
                <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        </div>
      </article>

      <section className="bg-navy pb-20 text-white sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1280px] border-t border-white/15 px-5 pt-20 sm:px-8 sm:pt-24">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[52px]">Related Reads for You</h2>
          <p className="mt-4 text-base text-white/60">Discover more articles that align with your interests and keep exploring.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {newsArticles
              .filter((related) => related.slug !== article.slug)
              .slice(0, 3)
              .map((related) => <NewsCard key={related.slug} article={related} />)}
          </div>
        </div>
      </section>
    </>
  );
}
