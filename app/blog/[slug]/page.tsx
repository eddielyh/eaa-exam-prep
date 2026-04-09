import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost } from "../_posts";

// Static content components — one per slug
import EaqeVsSqeContent from "../_posts/eaqe-vs-sqe";
import ExamFormatContent from "../_posts/exam-format";
import PassRequirementsContent from "../_posts/pass-requirements";
import ResultCheckContent from "../_posts/result-check";
import SelfStudyContent from "../_posts/self-study";
import MockExamContent from "../_posts/mock-exam";

const contentMap: Record<string, React.ComponentType> = {
  "eaqe-vs-sqe": EaqeVsSqeContent,
  "exam-format": ExamFormatContent,
  "pass-requirements": PassRequirementsContent,
  "result-check": ResultCheckContent,
  "self-study": SelfStudyContent,
  "mock-exam": MockExamContent,
};

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const Content = contentMap[slug];
  if (!Content) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.h1,
    description: post.description,
    url: `https://estate-exam.hk/blog/${slug}`,
    inLanguage: "zh-HK",
    publisher: {
      "@type": "Organization",
      name: "地產考牌攻略",
      url: "https://estate-exam.hk",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-gradient-to-br from-primary to-primary-dark px-4 py-12 text-white md:py-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="mb-3 inline-block text-sm text-blue-200 hover:text-white"
          >
            &larr; 地產考牌誌
          </Link>
          <h1 className="text-2xl font-extrabold md:text-4xl">{post.h1}</h1>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <Content />

        {/* Related posts */}
        <section className="mt-12 rounded-xl bg-surface p-6">
          <h2 className="mb-4 text-lg font-bold text-text">相關文章</h2>
          <ul className="space-y-2 text-sm">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="font-medium text-primary hover:underline"
                >
                  {r.h1}
                </Link>
                <span className="text-text-light"> — {r.summary}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/eaqe"
            className="inline-block rounded-lg bg-primary px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            了解 EAQE 考試
          </Link>
          <Link
            href="/registration"
            className="inline-block rounded-lg border border-border px-6 py-3 text-center text-sm font-bold text-text transition-colors hover:bg-surface"
          >
            查看報名教學
          </Link>
        </div>
      </article>
    </>
  );
}
