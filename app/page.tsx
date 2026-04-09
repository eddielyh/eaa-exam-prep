import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "香港地產代理考試攻略 | 考牌資訊一站式指南",
  description:
    "香港地產代理考試一站式指南：了解 E 牌與 S 牌的分別、考試結構、報名流程及考牌常見問題，助你揀選合適路徑投身地產行業。",
};

export default function HomePage() {
  return (
    <>
      {/* Hero / CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark px-4 py-16 text-center text-white md:py-24">
        <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
          香港地產代理考試攻略
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-100 md:text-lg">
          一站式了解 E 牌與 S 牌的分別、考試結構及報名流程，助你揀選合適路徑考取地產牌照。
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/eaqe"
            className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white shadow transition-colors hover:bg-accent-dark"
          >
            了解 EAQE 考試
          </Link>
          <Link
            href="/sqe"
            className="inline-block rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            了解 SQE 考試
          </Link>
        </div>
      </section>

      {/* Exam Categories */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="mb-10 text-center text-2xl font-bold text-text md:text-3xl">
          兩大資格考試
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ExamCard
            href="/eaqe"
            title="EAQE 地產代理資格考試"
            description="適合有意成為持牌地產代理（個人牌照）的人士。考試涵蓋地產代理條例、土地法律、估值及物業管理等範疇。"
            badge="E 牌"
          />
          <ExamCard
            href="/sqe"
            title="SQE 營業員資格考試"
            description="適合有意成為地產代理營業員的人士。考試範圍較 EAQE 精簡，涵蓋基礎法規及實務知識。"
            badge="S 牌"
          />
        </div>
        <p className="mt-6 text-center text-sm text-text-light">
          唔知揀邊個？睇吓{" "}
          <Link href="/blog/eaqe-vs-sqe" className="font-medium text-primary hover:underline">
            E 牌 S 牌全面比較
          </Link>
        </p>
      </section>

      {/* Key Info */}
      <section className="bg-surface px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-text md:text-3xl">
            重點資訊
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              icon="✏️"
              title="模擬練習"
              description="292 題 EAQE 及 SQE 模擬試題，即時批改及詳細解說，學習模式及測驗模式任你揀。"
              href="/practice"
              linkText="開始練習"
            />
            <InfoCard
              icon="📋"
              title="報名流程"
              description="了解網上報名步驟、所需文件、考試費用及付款方式，輕鬆完成報考手續。"
              href="/registration"
              linkText="查看報名教學"
            />
            <InfoCard
              icon="✏️"
              title="模擬練習"
              description="292 題 EAQE 及 SQE 模擬試題，即時批改及詳細解說，學習模式及測驗模式任你揀。"
              href="/practice"
              linkText="開始練習"
            />
            <InfoCard
              icon="📖"
              title="考試範圍"
              description="詳細了解各科目考核內容、題型分佈及合格分數，制定高效溫習計劃。"
              href="/eaqe"
              linkText="查看考試內容"
            />
            <InfoCard
              icon="✏️"
              title="模擬練習"
              description="292 題 EAQE 及 SQE 模擬試題，即時批改及詳細解說，學習模式及測驗模式任你揀。"
              href="/practice"
              linkText="開始練習"
            />
            <InfoCard
              icon="❓"
              title="常見問題"
              description="考試可否用中文應考？成績何時公佈？牌照如何申請？一次過解答你的疑問。"
              href="/faq"
              linkText="查看 FAQ"
            />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="mb-10 text-center text-2xl font-bold text-text md:text-3xl">
          考試概覽
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatItem label="EAQE 考試題數" value="50 題" />
          <StatItem label="SQE 考試題數" value="50 題" />
          <StatItem label="合格分數" value="60 分" />
          <StatItem label="考試語言" value="中 / 英" />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary px-4 py-12 text-center text-white md:py-16">
        <h2 className="text-2xl font-bold md:text-3xl">準備好開始備考了嗎？</h2>
        <p className="mx-auto mt-3 max-w-xl text-blue-100">
          瀏覽報名教學，了解如何踏出第一步。
        </p>
        <Link
          href="/registration"
          className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-bold text-white shadow transition-colors hover:bg-accent-dark"
        >
          查看報名教學
        </Link>
      </section>
    </>
  );
}

function ExamCard({
  href,
  title,
  description,
  badge,
}: {
  href: string;
  title: string;
  description: string;
  badge: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
        {badge}
      </span>
      <h3 className="mb-2 text-lg font-bold text-text group-hover:text-primary">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-text-light">{description}</p>
    </Link>
  );
}

function InfoCard({
  icon,
  title,
  description,
  href,
  linkText,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  linkText: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
      <div className="mb-3 text-3xl">{icon}</div>
      <h3 className="mb-2 text-base font-bold text-text">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-text-light">{description}</p>
      <Link href={href} className="text-sm font-medium text-primary hover:underline">
        {linkText} &rarr;
      </Link>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5 text-center">
      <div className="text-2xl font-extrabold text-primary">{value}</div>
      <div className="mt-1 text-xs text-text-light">{label}</div>
    </div>
  );
}
