import Link from "next/link";

export default function ExamFormatContent() {
  return (
    <>
      {/* Overview table */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">考試形式總覽</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface">
                <th className="px-4 py-3 text-left font-bold text-text">項目</th>
                <th className="px-4 py-3 text-left font-bold text-primary">EAQE</th>
                <th className="px-4 py-3 text-left font-bold text-primary">SQE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <Row l="作答模式" a="紙筆" b="紙筆或電腦" />
              <Row l="總題數" a="50 題" b="50 題" />
              <Row l="卷一" a="30 題 MC（60 分）" b="40 題 MC（80 分）" />
              <Row l="卷二" a="20 題個案分析（40 分）" b="10 題個案分析（20 分）" />
              <Row l="總時間" a="3 小時" b="2 小時 30 分鐘" />
              <Row l="滿分" a="100 分" b="100 分" />
            </tbody>
          </table>
        </div>
      </section>

      {/* MC detail */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">多項選擇題（MC）詳解</h2>
        <div className="space-y-3 text-sm leading-relaxed text-text-light">
          <p>MC 部分每題設有 4 個選項（A–D），考生須揀選一個最佳答案。每題配分相同（EAQE 每題 2 分，SQE 每題同為 2 分）。</p>
          <div className="rounded-lg bg-surface p-5">
            <h3 className="mb-2 text-sm font-bold text-text">MC 作答要點</h3>
            <ul className="space-y-1.5">
              <li><strong className="text-text">無倒扣機制</strong> — 答錯不會扣分，所以千祈唔好留空</li>
              <li><strong className="text-text">排除法</strong> — 先剔除明顯錯誤選項，收窄範圍</li>
              <li><strong className="text-text">留意關鍵字</strong> — 「必須」、「可以」、「不得」等用字會影響答案</li>
              <li><strong className="text-text">時間控制</strong> — 唔好花太多時間喺一題，標記跳過稍後再做</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case study detail */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">個案分析題詳解</h2>
        <div className="space-y-3 text-sm leading-relaxed text-text-light">
          <p>卷二以個案情境為基礎，每題描述一個地產代理實務場景，考生須根據相關法規及操守守則判斷最恰當的處理方式。同樣係選擇題形式，每題 2 分。</p>
          <p>常見情境主題包括：</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>代理人有否違反操守守則</li>
            <li>臨時買賣合約條款爭議</li>
            <li>物業資料披露責任</li>
            <li>佣金及利益衝突處理</li>
            <li>一手住宅物業銷售場景</li>
          </ul>
          <p>個案分析題的難度在於需要將法規知識<strong className="text-text">應用</strong>到具體情境，而非單純記憶。建議搭配{" "}
            <Link href="/blog/mock-exam" className="font-medium text-primary hover:underline">模擬試題</Link> 練習。
          </p>
        </div>
      </section>

      {/* Paper vs computer */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">紙筆考試 vs 電腦考試</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface">
                <th className="px-4 py-3 text-left font-bold text-text">項目</th>
                <th className="px-4 py-3 text-left font-bold text-primary">紙筆考試</th>
                <th className="px-4 py-3 text-left font-bold text-primary">電腦考試</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <Row l="適用考試" a="EAQE + SQE" b="僅限 SQE" />
              <Row l="作答方式" a="在答題紙上填寫" b="在電腦上點選" />
              <Row l="試場" a="多個地區（可填偏好）" b="灣仔 VTC Tower" />
              <Row l="成績通知" a="考試後第 14 個工作天郵寄" b="考試後第 7 個工作天，可於 PEAK 網站查閱" />
              <Row l="報名方式" a="網上或郵寄" b="只接受網上報名" />
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-text-light">
          考試內容、題數、時間及合格要求完全一樣，只係作答方式同出成績嘅時間唔同。SQE 考生如果想快啲知成績，可以揀電腦考試。
        </p>
      </section>

      {/* Time allocation */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">考試時間分配建議</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-base font-bold text-text">EAQE（3 小時 = 180 分鐘）</h3>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead><tr className="bg-surface"><th className="px-4 py-3 text-left font-bold text-text">部分</th><th className="px-4 py-3 text-left font-bold text-text">建議時間</th><th className="px-4 py-3 text-left font-bold text-text">每題平均</th></tr></thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-3 text-text-light">卷一（30 題 MC）</td><td className="px-4 py-3 text-text-light">約 80 分鐘</td><td className="px-4 py-3 text-text-light">約 2.5 分鐘</td></tr>
                  <tr><td className="px-4 py-3 text-text-light">卷二（20 題個案）</td><td className="px-4 py-3 text-text-light">約 80 分鐘</td><td className="px-4 py-3 text-text-light">約 4 分鐘</td></tr>
                  <tr><td className="px-4 py-3 text-text-light">覆核答案</td><td className="px-4 py-3 text-text-light">約 20 分鐘</td><td className="px-4 py-3 text-text-light">—</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-base font-bold text-text">SQE（2.5 小時 = 150 分鐘）</h3>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead><tr className="bg-surface"><th className="px-4 py-3 text-left font-bold text-text">部分</th><th className="px-4 py-3 text-left font-bold text-text">建議時間</th><th className="px-4 py-3 text-left font-bold text-text">每題平均</th></tr></thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-3 text-text-light">卷一（40 題 MC）</td><td className="px-4 py-3 text-text-light">約 90 分鐘</td><td className="px-4 py-3 text-text-light">約 2.25 分鐘</td></tr>
                  <tr><td className="px-4 py-3 text-text-light">卷二（10 題個案）</td><td className="px-4 py-3 text-text-light">約 45 分鐘</td><td className="px-4 py-3 text-text-light">約 4.5 分鐘</td></tr>
                  <tr><td className="px-4 py-3 text-text-light">覆核答案</td><td className="px-4 py-3 text-text-light">約 15 分鐘</td><td className="px-4 py-3 text-text-light">—</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Exam day */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">考試當日流程</h2>
        <div className="space-y-5">
          {[
            { n: "1", t: "提早到場", d: "建議至少 15 分鐘前到達試場，預先了解試場位置。" },
            { n: "2", t: "身份核實", d: "出示准考證及與報名時相符的有效身份證明文件正本。" },
            { n: "3", t: "入座", d: "按指示就座，將個人物品放於指定位置。" },
            { n: "4", t: "考試規則", d: "監考員宣讀考試規則及注意事項。" },
            { n: "5", t: "開始作答", d: "收到試卷後開始作答，留意時間分配。" },
            { n: "6", t: "交卷", d: "時間屆滿後停筆，按指示交回試卷及答題紙。" },
          ].map((s) => (
            <div key={s.n} className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{s.n}</div>
              <div>
                <h3 className="text-sm font-bold text-text">{s.t}</h3>
                <p className="text-sm text-text-light">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-text-light">
          更多考試當日須知請參閱{" "}
          <a href="https://www.eaa.org.hk/en-us/Examination/Instructions-to-Candidates" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">EAA 考生須知</a>。
        </p>
      </section>

      {/* Mini FAQ */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">考試形式常見疑問</h2>
        <div className="space-y-3">
          <Faq q="考試有冇 negative marking（答錯扣分）？" a="冇。答錯不會扣分，所以即使唔肯定都應該作答，千祈唔好留空。" />
          <Faq q="卷一同卷二係分開考定一次過考？" a="具體安排以 EAA 及 PEAK 當期公佈為準。考生應查閱准考證上的指示。" />
          <Faq q="SQE 電腦考試用咩介面？會唔會好難用？" a="電腦考試於灣仔 VTC Tower 應考，使用專門的考試系統。介面相對簡單，以點選答案為主。建議到 EAA 做網上模擬考試熟悉操作。" />
          <Faq q="可唔可以帶計算機入試場？" a="具體可攜帶物品以 EAA 考生須知為準，建議考試前查閱最新版本。" />
        </div>
      </section>
    </>
  );
}

function Row({ l, a, b }: { l: string; a: string; b: string }) {
  return (<tr><td className="px-4 py-3 font-medium text-text">{l}</td><td className="px-4 py-3 text-text-light">{a}</td><td className="px-4 py-3 text-text-light">{b}</td></tr>);
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
