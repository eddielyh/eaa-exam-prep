import Link from "next/link";

export default function EaqeVsSqeContent() {
  return (
    <>
      {/* Speed overview */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">一分鐘速覽：E 牌 vs S 牌</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-white p-5">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">E 牌 — EAQE</span>
            <ul className="mt-3 space-y-1.5 text-sm text-text-light">
              <li>可申請個人牌照或營業員牌照</li>
              <li>持個人牌照可獨立經營、開設公司</li>
              <li>考試大綱 8 個部分，3 小時</li>
              <li>紙筆作答</li>
              <li>涵蓋範圍較廣、難度較高</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-white p-5">
            <span className="mb-2 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent-dark">S 牌 — SQE</span>
            <ul className="mt-3 space-y-1.5 text-sm text-text-light">
              <li>只可申請營業員牌照</li>
              <li>須受僱於持牌地產代理</li>
              <li>考試大綱 6 個部分，2.5 小時</li>
              <li>紙筆或電腦作答</li>
              <li>範圍較精簡、入門門檻較低</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Detailed comparison */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">詳細比較表</h2>
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
              <Row label="考試全稱" a="地產代理資格考試" b="營業員資格考試" />
              <Row label="牌照類別" a="個人牌照或營業員牌照" b="營業員牌照" />
              <Row label="可否獨立經營" a="可以（持個人牌照）" b="不可以" />
              <Row label="卷一" a="30 題 MC（60 分）" b="40 題 MC（80 分）" />
              <Row label="卷二" a="20 題個案分析（40 分）" b="10 題個案分析（20 分）" />
              <Row label="總題數" a="50 題" b="50 題" />
              <Row label="考試時間" a="3 小時" b="2 小時 30 分鐘" />
              <Row label="合格要求" a="總分 ≥60 且卷一 ≥36、卷二 ≥24" b="總分 ≥60 且卷一 ≥48、卷二 ≥12" />
              <Row label="考試模式" a="紙筆作答" b="紙筆或電腦作答" />
              <Row label="大綱部分" a="8 個部分" b="6 個部分" />
              <Row label="考試語言" a="中文或英文" b="中文或英文" />
              <tr>
                <td className="px-4 py-3 font-medium text-text">考試費用</td>
                <td className="px-4 py-3 text-text-light" colSpan={2}>
                  請參閱{" "}
                  <a href="https://www.eaa.org.hk/en-us/Examination/Registration-details-post-registration-matters" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">EAA 官方最新公佈</a>
                </td>
              </tr>
              <Row label="成績有效期" a="12 個月" b="12 個月" />
            </tbody>
          </table>
        </div>
      </section>

      {/* Content depth comparison */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">考試內容深度比較</h2>
        <h3 className="mb-3 text-base font-bold text-text">大綱範圍比較</h3>
        <p className="mb-4 text-sm leading-relaxed text-text-light">
          EAQE 大綱涵蓋 8 個部分，SQE 涵蓋 6 個部分。EAQE 額外涵蓋的內容主要涉及較深入的物業估值知識及物業管理相關法例。如果你對呢啲範疇完全冇底，EAQE 的備考時間會比 SQE 長。
        </p>
        <h3 className="mb-3 text-base font-bold text-text">題型難度比較</h3>
        <p className="text-sm leading-relaxed text-text-light">
          兩個考試都係 50 題，但 EAQE 卷二佔 40%（20 題個案分析），SQE 卷二只佔 20%（10 題）。個案分析考的係情境應用同實務判斷，難度通常高過 MC。所以 EAQE 整體難度較高，需要更多時間理解同練習。詳見{" "}
          <Link href="/blog/exam-format" className="font-medium text-primary hover:underline">考試形式詳解</Link>。
        </p>
      </section>

      {/* Licence permissions */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">牌照權限比較</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface">
                <th className="px-4 py-3 text-left font-bold text-text">權限</th>
                <th className="px-4 py-3 text-center font-bold text-primary">個人牌照（E 牌）</th>
                <th className="px-4 py-3 text-center font-bold text-primary">營業員牌照（S 牌）</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <PermRow label="獨立經營地產代理業務" e="可以" s="不可以" />
              <PermRow label="開設地產代理公司" e="可以" s="不可以" />
              <PermRow label="受僱於持牌代理從事代理工作" e="可以" s="可以" />
              <PermRow label="獨立簽署地產代理協議" e="可以" s="須在持牌代理監督下" />
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-text-light">
          重點：通過 EAQE 後，你可以選擇申請個人牌照<strong className="text-text">或</strong>營業員牌照。但通過 SQE 後只可申請營業員牌照。
        </p>
      </section>

      {/* Career paths */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">職業路徑比較</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-5">
            <h3 className="mb-2 font-bold text-primary">S 牌路徑</h3>
            <p className="text-sm text-text-light">
              通過 SQE → 申請營業員牌照 → 受僱於持牌代理 → 日後如想獨立經營，須另外通過 EAQE → 申請個人牌照
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h3 className="mb-2 font-bold text-primary">E 牌路徑</h3>
            <p className="text-sm text-text-light">
              通過 EAQE → 可直接申請個人牌照（獨立經營）或營業員牌照（受僱）→ 毋須再考 SQE
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-lg border-l-4 border-accent bg-amber-50 p-4">
          <p className="text-sm text-text-light">
            <strong className="text-text">注意：</strong>SQE 成績不可轉換為 EAQE 資格。如果你考完 SQE 之後想升級做 E 牌，須由頭再考 EAQE。
          </p>
        </div>
      </section>

      {/* Decision guide */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">應該揀 EAQE 定 SQE？決策指南</h2>
        <div className="space-y-3">
          <DecisionItem question="想自己開舖或做老闆？" answer="直接考 EAQE" />
          <DecisionItem question="想盡快入行搵錢？" answer="SQE 備考時間較短，但如果時間許可建議考 EAQE" />
          <DecisionItem question="未決定長遠方向？" answer="考 EAQE，因為可以申請任何牌照，最靈活" />
          <DecisionItem question="溫習時間非常有限？" answer="SQE 大綱較精簡（6 vs 8 部分），較容易應付" />
          <DecisionItem question="已經持有 S 牌想升級？" answer="須重新報考並通過 EAQE" />
        </div>
        <p className="mt-4 text-sm text-text-light">
          準備好報名？查看{" "}
          <Link href="/registration" className="font-medium text-primary hover:underline">報名教學</Link>
          {" "}了解報考流程。
        </p>
      </section>

      {/* Mini FAQ */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">E 牌 S 牌常見疑問</h2>
        <div className="space-y-3">
          <Faq q="考咗 SQE 再考 EAQE 使唔使重頭嚟？" a="係，EAQE 需要獨立報考及通過，SQE 成績不可轉換。所有科目須重新應考。" />
          <Faq q="兩個考試可唔可以同日考？" a="EAQE 同 SQE 係獨立安排的考試場次，能否同日報考視乎 PEAK 當期時間表。一般建議專注其中一個考試。" />
          <Faq q="持 S 牌可唔可以簽臨約？" a="營業員須在持牌代理監督下執行工作。獨立簽署地產代理協議的權限屬於個人牌照持有人。" />
          <Faq q="E 牌考試費係咪貴好多？" a={<>兩者費用由 EAA 釐定，差距以官方公佈為準。查閱 <a href="https://www.eaa.org.hk/en-us/Examination/Registration-details-post-registration-matters" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">最新費用</a>。</>} />
        </div>
      </section>
    </>
  );
}

function Row({ label, a, b }: { label: string; a: string; b: string }) {
  return (
    <tr>
      <td className="px-4 py-3 font-medium text-text">{label}</td>
      <td className="px-4 py-3 text-text-light">{a}</td>
      <td className="px-4 py-3 text-text-light">{b}</td>
    </tr>
  );
}

function PermRow({ label, e, s }: { label: string; e: string; s: string }) {
  return (
    <tr>
      <td className="px-4 py-3 font-medium text-text">{label}</td>
      <td className="px-4 py-3 text-center text-text-light">{e}</td>
      <td className="px-4 py-3 text-center text-text-light">{s}</td>
    </tr>
  );
}

function DecisionItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="flex gap-3 rounded-lg border border-border p-4">
      <span className="mt-0.5 shrink-0 text-lg text-primary">?</span>
      <div>
        <p className="text-sm font-bold text-text">{question}</p>
        <p className="text-sm text-text-light">{answer}</p>
      </div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <details className="group rounded-lg border border-border bg-white [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-text hover:bg-surface">
        <span>{q}</span>
        <span className="shrink-0 text-text-light transition-transform group-open:rotate-180">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </span>
      </summary>
      <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">{a}</div>
    </details>
  );
}
