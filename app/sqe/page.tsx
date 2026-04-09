import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SQE 營業員資格考試 — 營業員牌照考試內容及與 EAQE 比較",
  description:
    "全面了解 SQE 營業員資格考試（S 牌）：卷一卷二共 50 題考試結構、六大考試範圍及合格要求，並詳列 EAQE 與 SQE 分別，助你揀選適合的牌照路徑。",
};

export default function SqePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark px-4 py-12 text-white md:py-16">
        <div className="mx-auto max-w-4xl">
          <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
            S 牌
          </span>
          <h1 className="text-2xl font-extrabold md:text-4xl">
            SQE 營業員資格考試
          </h1>
          <p className="mt-3 max-w-2xl text-blue-100">
            Salespersons Qualifying Examination —
            通過此考試可申請營業員牌照，於持牌地產代理公司從事地產代理工作。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        {/* Key Takeaways */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">SQE 重點速覽</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="mb-1 text-sm font-bold text-text">考試結構</h3>
              <p className="text-sm text-text-light">卷一 40 題 MC + 卷二 10 題個案分析，共 2.5 小時</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="mb-1 text-sm font-bold text-text">合格要求</h3>
              <p className="text-sm text-text-light">總分 ≥60，且卷一 ≥48、卷二 ≥12 才算合格</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="mb-1 text-sm font-bold text-text">考試模式</h3>
              <p className="text-sm text-text-light">紙筆或電腦作答（視乎場次），可選中文或英文</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="mb-1 text-sm font-bold text-text">通過後可申請</h3>
              <p className="text-sm text-text-light">營業員牌照（須受僱於持牌地產代理）</p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">考試概覽</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border">
                <TableRow label="考試全稱" value="營業員資格考試（Salespersons Qualifying Examination）" />
                <TableRow label="主辦機構" value="高峰進修學院考試中心（PEAK）" />
                <TableRow label="題目數量" value="卷一：40 題多項選擇題（80 分）；卷二：10 題個案分析題（20 分），合共 50 題" />
                <TableRow label="考試時間" value="2 小時 30 分鐘" />
                <TableRow label="合格分數" value="總分取得 60 分或以上，且卷一及卷二分別達到合格線（卷一 ≥ 48 分、卷二 ≥ 12 分）" />
                <TableRow label="考試語言" value="中文或英文（報名時選擇）" />
                <TableRow label="學歷要求" value="考試不設學歷要求；惟申請牌照時一般須具備中五程度或同等學歷，個別情況或可獲豁免" />
                <TableRow label="考試費用" value="請參閱 EAA 官方最新公佈" />
                <TableRow label="考試模式" value="紙筆作答或電腦作答（視乎場次）" />
                <TableRow label="成績有效期" value="合格成績須於指定期限內申請牌照，詳情參閱 EAA 網站" />
              </tbody>
            </table>
          </div>
        </section>

        {/* EAQE vs SQE Comparison */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">EAQE 與 SQE 比較</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface">
                  <th className="px-4 py-3 text-left font-bold text-text">項目</th>
                  <th className="px-4 py-3 text-left font-bold text-primary">EAQE（E 牌）</th>
                  <th className="px-4 py-3 text-left font-bold text-primary">SQE（S 牌）</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-text">牌照類別</td>
                  <td className="px-4 py-3 text-text-light">地產代理（個人）牌照或營業員牌照</td>
                  <td className="px-4 py-3 text-text-light">營業員牌照</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">可否獨立經營</td>
                  <td className="px-4 py-3 text-text-light">可以（持個人牌照）</td>
                  <td className="px-4 py-3 text-text-light">不可以，須受僱於持牌代理</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">題目數量</td>
                  <td className="px-4 py-3 text-text-light">50 題（卷一 30 + 卷二 20）</td>
                  <td className="px-4 py-3 text-text-light">50 題（卷一 40 + 卷二 10）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">考試時間</td>
                  <td className="px-4 py-3 text-text-light">3 小時</td>
                  <td className="px-4 py-3 text-text-light">2 小時 30 分鐘</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">考試費用</td>
                  <td className="px-4 py-3 text-text-light" colSpan={2}>
                    請參閱{" "}
                    <a href="https://www.eaa.org.hk/en-us/Examination/Registration-details-post-registration-matters" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">EAA 官方最新公佈</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">考試模式</td>
                  <td className="px-4 py-3 text-text-light">紙筆作答</td>
                  <td className="px-4 py-3 text-text-light">紙筆或電腦作答</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">大綱部分</td>
                  <td className="px-4 py-3 text-text-light">8 個部分</td>
                  <td className="px-4 py-3 text-text-light">6 個部分</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Paper I vs II */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">卷一與卷二比較</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface">
                  <th className="px-4 py-3 text-left font-bold text-text">項目</th>
                  <th className="px-4 py-3 text-left font-bold text-primary">卷一</th>
                  <th className="px-4 py-3 text-left font-bold text-primary">卷二</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-text">題型</td>
                  <td className="px-4 py-3 text-text-light">多項選擇題</td>
                  <td className="px-4 py-3 text-text-light">個案分析題</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">題數</td>
                  <td className="px-4 py-3 text-text-light">40 題</td>
                  <td className="px-4 py-3 text-text-light">10 題</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">滿分</td>
                  <td className="px-4 py-3 text-text-light">80 分</td>
                  <td className="px-4 py-3 text-text-light">20 分</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">合格線</td>
                  <td className="px-4 py-3 text-text-light">≥ 48 分</td>
                  <td className="px-4 py-3 text-text-light">≥ 12 分</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">考核重點</td>
                  <td className="px-4 py-3 text-text-light">法規知識、基礎條例</td>
                  <td className="px-4 py-3 text-text-light">情境應用、角色判斷</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-text-light">
            同 EAQE 一樣，卷一同卷二要<strong className="text-text">分別</strong>達到合格線先算 pass。SQE 卷二只有 10 題、20 分，但仍須取得 ≥12 分。
          </p>
        </section>

        {/* Who should take */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">邊啲人適合考 SQE？</h2>
          <div className="space-y-3">
            <div className="flex gap-3 rounded-lg border border-border p-4">
              <span className="mt-0.5 shrink-0 text-lg text-primary">&#10003;</span>
              <div>
                <h3 className="text-sm font-bold text-text">想盡快入行做地產</h3>
                <p className="text-sm text-text-light">SQE 大綱較精簡（6 部分 vs EAQE 8 部分），備考時間相對較短</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-lg border border-border p-4">
              <span className="mt-0.5 shrink-0 text-lg text-primary">&#10003;</span>
              <div>
                <h3 className="text-sm font-bold text-text">計劃加入現有地產公司</h3>
                <p className="text-sm text-text-light">營業員牌照足以於持牌代理公司從事地產代理工作</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-lg border border-border p-4">
              <span className="mt-0.5 shrink-0 text-lg text-primary">&#10003;</span>
              <div>
                <h3 className="text-sm font-bold text-text">暫時無意獨立經營</h3>
                <p className="text-sm text-text-light">如日後改變主意，可再報考 EAQE 申請個人牌照</p>
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-lg border-l-4 border-accent bg-amber-50 p-4">
            <p className="text-sm text-text-light">
              <strong className="text-text">考慮清楚：</strong>如果你有機會長遠發展或自己開舖，建議直接考{" "}
              <Link href="/eaqe" className="font-medium text-primary hover:underline">EAQE</Link>
              ，一次過搞掂，省返日後重考的時間同費用。
            </p>
          </div>
        </section>

        {/* Subjects */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">考試科目及範圍</h2>
          <p className="mb-4 text-sm text-text-light">
            SQE 考試大綱共分為六個部分，涵蓋以下主要範疇。詳細考試大綱請參閱{" "}
            <a
              href="https://www.eaa.org.hk/en-us/Examination/Qualifying-examinations-syllabi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              EAA 官方考試大綱
            </a>
            。
          </p>
          <div className="space-y-4">
            <SubjectCard
              number="1"
              title="地產代理條例及其附屬法例"
              topics={[
                "《地產代理條例》（第 511 章）主要條文",
                "牌照制度及操守守則基礎",
                "營業員的責任及限制",
              ]}
            />
            <SubjectCard
              number="2"
              title="規管地產代理實務的法例"
              topics={[
                "與物業買賣相關的基本法例",
                "一手住宅物業銷售條例重點",
                "印花稅及差餉基礎知識",
              ]}
            />
            <SubjectCard
              number="3"
              title="土地註冊及查冊基礎"
              topics={[
                "土地登記冊的基本內容",
                "查冊的目的及基本步驟",
              ]}
            />
            <SubjectCard
              number="4"
              title="物業買賣及租賃的基本知識"
              topics={[
                "臨時買賣合約的主要條款",
                "租約的基本條款",
                "地產代理在交易中的角色",
              ]}
            />
          </div>
          <p className="mt-4 text-xs text-text-light">
            * 以上僅列出部分主要範疇，SQE 大綱共有六個部分，完整內容以 EAA 官方公佈為準。
          </p>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">備考建議</h2>
          <div className="rounded-xl bg-surface p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex gap-2">
                <span className="shrink-0 font-bold text-primary">1.</span>
                SQE 考試範圍較 EAQE 精簡，建議集中溫習地產代理條例及操守守則。
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-bold text-primary">2.</span>
                留意營業員與持牌代理的權限分別，此為常見考核重點。
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-bold text-primary">3.</span>
                多做模擬試題，熟悉多項選擇題的出題方式。
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-bold text-primary">4.</span>
                如日後有意升級為 E 牌，建議直接報考 EAQE。
              </li>
            </ul>
          </div>
        </section>

        {/* SQE FAQ */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">SQE 考試常見疑問</h2>
          <div className="space-y-3">
            <details className="group rounded-lg border border-border bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-text hover:bg-surface">
                <span>SQE 電腦考試同紙筆考試有咩分別？</span>
                <ChevronIcon />
              </summary>
              <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">
                考試內容、題數、時間及合格要求完全一樣，只係作答方式不同。電腦考試於灣仔 VTC Tower 應考，成績通知較紙筆考試快（第 7 個工作天 vs 第 14 個工作天）。
              </div>
            </details>
            <details className="group rounded-lg border border-border bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-text hover:bg-surface">
                <span>考咗 SQE 之後可唔可以升級做 E 牌？</span>
                <ChevronIcon />
              </summary>
              <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">
                可以，但需要重新報考並通過{" "}
                <Link href="/eaqe" className="font-medium text-primary hover:underline">EAQE 考試</Link>
                ，SQE 成績不可直接轉換為 EAQE 資格。所以如果有機會考慮獨立經營，直接報考 EAQE 會更划算。
              </div>
            </details>
            <details className="group rounded-lg border border-border bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-text hover:bg-surface">
                <span>SQE 有冇官方模擬試題？</span>
                <ChevronIcon />
              </summary>
              <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">
                有。EAA 官網提供免費網上模擬考試。前往{" "}
                <a href="https://www.eaa.org.hk/en-us/Examination/Online-Mock-Examination" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">EAA 網上模擬考試</a>。
              </div>
            </details>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-12 rounded-xl bg-surface p-6">
          <h2 className="mb-4 text-lg font-bold text-text">相關資訊</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/eaqe" className="font-medium text-primary hover:underline">
                EAQE 地產代理資格考試攻略
              </Link>
              <span className="text-text-light"> — 考取個人牌照、獨立經營的進階選擇</span>
            </li>
            <li>
              <Link href="/registration" className="font-medium text-primary hover:underline">
                考試報名教學
              </Link>
              <span className="text-text-light"> — 了解 PEAK 網上報名步驟及所需文件</span>
            </li>
            <li>
              <Link href="/faq" className="font-medium text-primary hover:underline">
                常見問題 FAQ
              </Link>
              <span className="text-text-light"> — 學歷要求、成績有效期、牌照申請等疑問</span>
            </li>
            <li>
              <Link href="/blog/self-study" className="font-medium text-primary hover:underline">
                自修攻略
              </Link>
              <span className="text-text-light"> — 溫習時間表、各科策略及免費資源</span>
            </li>
            <li>
              <Link href="/blog/eaqe-vs-sqe" className="font-medium text-primary hover:underline">
                E 牌 S 牌全面比較
              </Link>
              <span className="text-text-light"> — 深入比較考試結構、牌照權限及職業路徑</span>
            </li>
          </ul>
        </section>

        {/* Practice CTA */}
        <section className="mb-12 rounded-xl border-2 border-primary/20 bg-primary/5 p-6 text-center">
          <h2 className="mb-2 text-lg font-bold text-text">即刻開始練習 SQE 題目</h2>
          <p className="mb-4 text-sm text-text-light">292 題模擬試題，即時批改及詳細解說</p>
          <Link href="/practice" className="inline-block rounded-lg bg-primary px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark">
            開始練習
          </Link>
        </section>

        {/* CTA */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/registration"
            className="inline-block rounded-lg bg-primary px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            查看報名教學
          </Link>
          <Link
            href="/eaqe"
            className="inline-block rounded-lg border border-border px-6 py-3 text-center text-sm font-bold text-text transition-colors hover:bg-surface"
          >
            比較 EAQE 考試
          </Link>
        </div>
      </div>
    </>
  );
}

function TableRow({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td className="whitespace-nowrap bg-surface px-4 py-3 font-medium text-text">
        {label}
      </td>
      <td className="px-4 py-3 text-text-light">{value}</td>
    </tr>
  );
}

function ChevronIcon() {
  return (
    <span className="shrink-0 text-text-light transition-transform group-open:rotate-180">
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  );
}

function SubjectCard({
  number,
  title,
  topics,
}: {
  number: string;
  title: string;
  topics: string[];
}) {
  return (
    <div className="rounded-lg border border-border p-5">
      <h3 className="mb-3 flex items-center gap-2 font-bold text-text">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
          {number}
        </span>
        {title}
      </h3>
      <ul className="ml-9 list-disc space-y-1 text-sm text-text-light">
        {topics.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
