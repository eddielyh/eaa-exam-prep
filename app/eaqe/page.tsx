import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EAQE 地產代理資格考試 — 考試內容、合格分數及考試範圍",
  description:
    "全面了解 EAQE 地產代理資格考試（E 牌）：卷一卷二共 50 題考試結構、合格分數線、八大考試範圍及紙筆作答模式，附備考建議助你取得個人牌照。",
};

export default function EaqePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark px-4 py-12 text-white md:py-16">
        <div className="mx-auto max-w-4xl">
          <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
            E 牌
          </span>
          <h1 className="text-2xl font-extrabold md:text-4xl">
            EAQE 地產代理資格考試
          </h1>
          <p className="mt-3 max-w-2xl text-blue-100">
            Estate Agents Qualifying Examination —
            通過此考試可申請地產代理（個人）牌照或營業員牌照。持有個人牌照可獨立經營或開設地產代理公司。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        {/* Key Takeaways */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">EAQE 重點速覽</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="mb-1 text-sm font-bold text-text">考試結構</h3>
              <p className="text-sm text-text-light">卷一 30 題 MC + 卷二 20 題個案分析，共 3 小時</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="mb-1 text-sm font-bold text-text">合格要求</h3>
              <p className="text-sm text-text-light">總分 ≥60，且卷一 ≥36、卷二 ≥24 才算合格</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="mb-1 text-sm font-bold text-text">考試模式</h3>
              <p className="text-sm text-text-light">紙筆作答，可選中文或英文應考</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="mb-1 text-sm font-bold text-text">通過後可申請</h3>
              <p className="text-sm text-text-light">地產代理（個人）牌照或營業員牌照</p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">考試概覽</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border">
                <TableRow label="考試全稱" value="地產代理資格考試（Estate Agents Qualifying Examination）" />
                <TableRow label="主辦機構" value="高峰進修學院考試中心（PEAK）" />
                <TableRow label="題目數量" value="卷一：30 題多項選擇題（60 分）；卷二：20 題個案分析題（40 分），合共 50 題" />
                <TableRow label="考試時間" value="3 小時" />
                <TableRow label="合格分數" value="總分取得 60 分或以上，且卷一及卷二分別達到合格線（卷一 ≥ 36 分、卷二 ≥ 24 分）" />
                <TableRow label="考試語言" value="中文或英文（報名時選擇）" />
                <TableRow label="學歷要求" value="考試不設學歷要求；惟申請牌照時一般須具備中五程度或同等學歷，個別情況或可獲豁免" />
                <TableRow label="考試費用" value="請參閱 EAA 官方最新公佈" />
                <TableRow label="考試模式" value="紙筆作答" />
                <TableRow label="成績有效期" value="合格成績須於指定期限內申請牌照，詳情參閱 EAA 網站" />
              </tbody>
            </table>
          </div>
        </section>

        {/* Subjects */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">考試科目及範圍</h2>
          <p className="mb-4 text-sm text-text-light">
            EAQE 考試大綱共分為八個部分，涵蓋以下主要範疇。詳細考試大綱請參閱{" "}
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
                "地產代理監管局的角色及權力",
                "牌照制度及發牌條件",
                "執業規例及操守守則",
              ]}
            />
            <SubjectCard
              number="2"
              title="規管地產代理實務的法例"
              topics={[
                "《物業轉易及財產條例》",
                "《建築物管理條例》",
                "《一手住宅物業銷售條例》",
                "差餉、地租及印花稅相關法例",
              ]}
            />
            <SubjectCard
              number="3"
              title="土地註冊制度及查冊"
              topics={[
                "土地註冊處的角色",
                "土地登記冊的內容及查閱",
                "物業資料查冊實務",
              ]}
            />
            <SubjectCard
              number="4"
              title="與物業有關的契約及法律文件"
              topics={[
                "臨時買賣合約",
                "正式買賣合約",
                "轉讓契及按揭契",
                "租約及相關文件",
              ]}
            />
            <SubjectCard
              number="5"
              title="物業估值的基本知識"
              topics={[
                "估值方法（比較法、收益法、成本法）",
                "影響物業價格的因素",
                "估值報告的基本內容",
              ]}
            />
          </div>
          <p className="mt-4 text-xs text-text-light">
            * 以上僅列出部分主要範疇，EAQE 大綱共有八個部分，完整內容以 EAA 官方公佈為準。
          </p>
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
                  <td className="px-4 py-3 text-text-light">30 題</td>
                  <td className="px-4 py-3 text-text-light">20 題</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">滿分</td>
                  <td className="px-4 py-3 text-text-light">60 分</td>
                  <td className="px-4 py-3 text-text-light">40 分</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">合格線</td>
                  <td className="px-4 py-3 text-text-light">≥ 36 分</td>
                  <td className="px-4 py-3 text-text-light">≥ 24 分</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">考核重點</td>
                  <td className="px-4 py-3 text-text-light">法規知識、條例理解</td>
                  <td className="px-4 py-3 text-text-light">情境應用、實務判斷</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-text-light">
            留意：卷一同卷二要<strong className="text-text">分別</strong>達到合格線先算 pass，唔係總分夠就得。即使卷一攞滿分，卷二唔夠 24 分一樣係不合格。
          </p>
        </section>

        {/* Who should take */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">邊啲人適合考 EAQE？</h2>
          <div className="space-y-3">
            <div className="flex gap-3 rounded-lg border border-border p-4">
              <span className="mt-0.5 shrink-0 text-lg text-primary">&#10003;</span>
              <div>
                <h3 className="text-sm font-bold text-text">想自己開舖或做老闆</h3>
                <p className="text-sm text-text-light">持有個人牌照可獨立經營地產代理公司</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-lg border border-border p-4">
              <span className="mt-0.5 shrink-0 text-lg text-primary">&#10003;</span>
              <div>
                <h3 className="text-sm font-bold text-text">打算長遠發展地產事業</h3>
                <p className="text-sm text-text-light">E 牌涵蓋範圍較廣，日後毋須由 S 牌升級重考</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-lg border border-border p-4">
              <span className="mt-0.5 shrink-0 text-lg text-primary">&#10003;</span>
              <div>
                <h3 className="text-sm font-bold text-text">想靈活選擇牌照類別</h3>
                <p className="text-sm text-text-light">EAQE 合格可申請個人牌照或營業員牌照，唔使再考 SQE</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">備考建議</h2>
          <div className="rounded-xl bg-surface p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex gap-2">
                <span className="shrink-0 font-bold text-primary">1.</span>
                熟讀《地產代理條例》及相關操守守則，此部分佔比最重。
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-bold text-primary">2.</span>
                多做歷屆試題及模擬題目，熟悉出題模式及時間控制。
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-bold text-primary">3.</span>
                了解一手住宅物業銷售條例的重點內容，近年考核比重增加。
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-bold text-primary">4.</span>
                善用 EAA 官方提供的參考資料及溫習指引。
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-bold text-primary">5.</span>

                留意考試以紙筆作答，作答時間為 3 小時，合理分配卷一及卷二的時間。
              </li>
            </ul>
          </div>
        </section>

        {/* EAQE FAQ */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">EAQE 考試常見疑問</h2>
          <div className="space-y-3">
            <details className="group rounded-lg border border-border bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-text hover:bg-surface">
                <span>EAQE 合格率大概幾多？</span>
                <ChevronIcon />
              </summary>
              <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">
                EAA 會於官網公佈每次考試的合格率統計。歷年合格率浮動較大，建議充分溫習而非依賴合格率估算。可瀏覽{" "}
                <a href="https://www.eaa.org.hk/en-us/Examination/Qualifying-examinations-results" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">EAA 考試成績及數據</a> 了解最新數字。
              </div>
            </details>
            <details className="group rounded-lg border border-border bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-text hover:bg-surface">
                <span>EAQE 同 SQE 可唔可以一齊考？</span>
                <ChevronIcon />
              </summary>
              <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">
                可以，但一般不建議。EAQE 合格已涵蓋 SQE 的要求，通過 EAQE 後可申請個人牌照或營業員牌照，毋須再考 SQE。詳見{" "}
                <Link href="/sqe" className="font-medium text-primary hover:underline">EAQE 與 SQE 比較</Link>。
              </div>
            </details>
            <details className="group rounded-lg border border-border bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-text hover:bg-surface">
                <span>有冇官方模擬試題可以練習？</span>
                <ChevronIcon />
              </summary>
              <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">
                有。EAA 官網提供免費網上模擬考試，可幫助熟悉題型。前往{" "}
                <a href="https://www.eaa.org.hk/en-us/Examination/Online-Mock-Examination" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">EAA 網上模擬考試</a>。
              </div>
            </details>
            <details className="group rounded-lg border border-border bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-text hover:bg-surface">
                <span>考完幾耐知成績？</span>
                <ChevronIcon />
              </summary>
              <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">
                EAQE 為紙筆考試，成績通知書一般於考試後第 14 個工作天以平郵寄出。更多考後安排可參閱{" "}
                <Link href="/faq" className="font-medium text-primary hover:underline">常見問題</Link>。
              </div>
            </details>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-12 rounded-xl bg-surface p-6">
          <h2 className="mb-4 text-lg font-bold text-text">相關資訊</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/sqe" className="font-medium text-primary hover:underline">
                SQE 營業員資格考試攻略
              </Link>
              <span className="text-text-light"> — 比較 EAQE 與 SQE 的分別，選擇適合你的考試</span>
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
          <h2 className="mb-2 text-lg font-bold text-text">即刻開始練習 EAQE 題目</h2>
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
            href="/sqe"
            className="inline-block rounded-lg border border-border px-6 py-3 text-center text-sm font-bold text-text transition-colors hover:bg-surface"
          >
            比較 SQE 考試
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
