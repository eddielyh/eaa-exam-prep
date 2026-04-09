import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./_posts";

export const metadata: Metadata = {
  title: "地產考牌誌 — 備考攻略及考試資訊文章",
  description:
    "香港地產代理考試備考文章：自修攻略、模擬試題資源、E 牌 S 牌比較、考試形式、合格要求及成績查詢，助你全面準備考牌。",
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark px-4 py-12 text-white md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-extrabold md:text-4xl">地產考牌誌</h1>
          <p className="mt-3 max-w-2xl text-blue-100">
            深入了解地產代理考試的各個環節，從自修備考到成績查詢，助你全面準備考牌。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h2 className="mb-2 text-base font-bold text-text group-hover:text-primary">
                {post.h1}
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-text-light">
                {post.summary}
              </p>
              <span className="text-sm font-medium text-primary">
                閱讀全文 &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* Back to main */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-primary hover:underline"
          >
            &larr; 返回首頁
          </Link>
        </div>
      </div>
    </>
  );
}
