import Link from "next/link";

export default function PassRequirementsContent() {
  return (
    <>
      {/* Speed overview */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">合格要求速覽</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card title="EAQE" badge="E 牌" items={["總分 ≥ 60 分（滿分 100）", "卷一 ≥ 36 分（滿分 60）", "卷二 ≥ 24 分（滿分 40）", "兩卷須分別達標"]} />
          <Card title="SQE" badge="S 牌" items={["總分 ≥ 60 分（滿分 100）", "卷一 ≥ 48 分（滿分 80）", "卷二 ≥ 12 分（滿分 20）", "兩卷須分別達標"]} />
        </div>
      </section>

      {/* EAQE detail */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">EAQE 合格分數詳解</h2>
        <Table rows={[
          ["卷一（MC）", "30 題", "60 分", "≥ 36 分", "60%"],
          ["卷二（個案）", "20 題", "40 分", "≥ 24 分", "60%"],
          ["合計", "50 題", "100 分", "≥ 60 分 + 兩卷達標", "—"],
        ]} />
        <p className="mt-3 text-sm text-text-light">
          詳細考試內容請參閱 <Link href="/eaqe" className="font-medium text-primary hover:underline">EAQE 考試頁面</Link>。
        </p>
      </section>

      {/* SQE detail */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">SQE 合格分數詳解</h2>
        <Table rows={[
          ["卷一（MC）", "40 題", "80 分", "≥ 48 分", "60%"],
          ["卷二（個案）", "10 題", "20 分", "≥ 12 分", "60%"],
          ["合計", "50 題", "100 分", "≥ 60 分 + 兩卷達標", "—"],
        ]} />
        <p className="mt-3 text-sm text-text-light">
          詳細考試內容請參閱 <Link href="/sqe" className="font-medium text-primary hover:underline">SQE 考試頁面</Link>。
        </p>
      </section>

      {/* Failure scenarios */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">常見不合格情境（以 EAQE 為例）</h2>
        <p className="mb-4 text-sm text-text-light">
          好多人以為「總分夠 60 就 pass」，但實際上卷一同卷二要<strong className="text-text">分別</strong>達到合格線。以下用 EAQE 做例子：
        </p>
        <div className="space-y-3">
          <Scenario p1={40} p2={25} p1Pass p2Pass pass label="卷一 40 + 卷二 25 = 65 分" />
          <Scenario p1={50} p2={20} p1Pass pass={false} label="卷一 50 + 卷二 20 = 70 分" reason="卷二未達 24 分合格線" />
          <Scenario p1={34} p2={30} p2Pass pass={false} label="卷一 34 + 卷二 30 = 64 分" reason="卷一未達 36 分合格線" />
          <Scenario p1={30} p2={22} pass={false} label="卷一 30 + 卷二 22 = 52 分" reason="總分不足 60 且兩卷均未達標" />
        </div>
      </section>

      {/* Validity */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">成績有效期</h2>
        <div className="rounded-lg border border-border p-5 text-sm leading-relaxed text-text-light">
          <p>合格成績的有效期為<strong className="text-text"> 12 個月</strong>，由成績通知書發出日期起計。考生須於期限內向 EAA 提交牌照申請，逾期成績將不獲接納，須重新應考。</p>
          <p className="mt-2">
            了解如何查閱成績：<Link href="/blog/result-check" className="font-medium text-primary hover:underline">成績查詢全攻略</Link>
          </p>
        </div>
      </section>

      {/* After failure */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">不合格後的安排</h2>
        <div className="space-y-3 text-sm leading-relaxed text-text-light">
          <p>考試不合格的考生可以<strong className="text-text">無限次重考</strong>，每次均須重新報名並繳付考試費。</p>
          <div className="rounded-lg bg-surface p-5">
            <h3 className="mb-2 text-sm font-bold text-text">重考策略建議</h3>
            <ul className="space-y-1.5">
              <li><strong className="text-text">分析弱項</strong> — 如果卷一唔夠分，集中溫習法規條例；卷二唔夠分就多做個案練習</li>
              <li><strong className="text-text">善用模擬題</strong> — 到 <Link href="/blog/mock-exam" className="font-medium text-primary hover:underline">模擬試題頁</Link> 了解練習資源</li>
              <li><strong className="text-text">調整溫習計劃</strong> — 參考 <Link href="/blog/self-study" className="font-medium text-primary hover:underline">自修攻略</Link> 制定針對性計劃</li>
            </ul>
          </div>
          <p>報名流程同首次報考一樣，詳見 <Link href="/registration" className="font-medium text-primary hover:underline">報名教學</Link>。</p>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">合格要求常見疑問</h2>
        <div className="space-y-3">
          <Faq q="總分夠 60 但其中一卷唔夠分，算唔算合格？" a="唔算。卷一及卷二須分別達到各自的合格線，同時總分亦須達 60 分。缺一不可。" />
          <Faq q="合格分數會唔會年年改？" a="合格標準由 EAA 訂定。如有調整會於官方網站公佈，建議報名前查閱最新資訊。" />
          <Faq q="考完可唔可以申請覆核成績？" a="可以，須於指定期限內提出書面申請並繳付手續費。詳情參閱 EAA 官方網站。" />
          <Faq q="成績通知書過咗 12 個月點算？" a="成績將不獲接納，須重新報考及通過考試才可申請牌照。" />
        </div>
      </section>
    </>
  );
}

function Card({ title, badge, items }: { title: string; badge: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{badge}</span>
      <h3 className="mb-2 font-bold text-text">{title}</h3>
      <ul className="space-y-1 text-sm text-text-light">{items.map((i) => <li key={i}>{i}</li>)}</ul>
    </div>
  );
}

function Table({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead><tr className="bg-surface">
          {["卷別", "題數", "滿分", "合格線", "合格 %"].map((h) => <th key={h} className="px-4 py-3 text-left font-bold text-text">{h}</th>)}
        </tr></thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-text" : "text-text-light"}`}>{c}</td>)}</tr>)}
        </tbody>
      </table>
    </div>
  );
}

function Scenario({ p1, p2, p1Pass, p2Pass, pass, label, reason }: { p1: number; p2: number; p1Pass?: boolean; p2Pass?: boolean; pass: boolean; label: string; reason?: string }) {
  return (
    <div className={`rounded-lg border-l-4 p-4 ${pass ? "border-green-500 bg-green-50" : "border-red-400 bg-red-50"}`}>
      <div className="flex items-center gap-2">
        <span className={`text-lg ${pass ? "text-green-600" : "text-red-500"}`}>{pass ? "PASS" : "FAIL"}</span>
        <span className="text-sm font-bold text-text">{label}</span>
      </div>
      {reason && <p className="mt-1 text-sm text-text-light">{reason}</p>}
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-lg border border-border bg-white [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-text hover:bg-surface">
        <span>{q}</span>
        <span className="shrink-0 text-text-light transition-transform group-open:rotate-180"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></span>
      </summary>
      <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">{a}</div>
    </details>
  );
}
