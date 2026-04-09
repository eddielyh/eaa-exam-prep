import Link from "next/link";

export default function MockExamContent() {
  return (
    <>
      {/* Why mock exams */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">為甚麼要做模擬試題？</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: "📝", title: "熟悉題型", desc: "了解 MC 及個案分析題的出題模式，避免考試時手忙腳亂" },
            { icon: "⏱", title: "掌握時間", desc: "模擬真實考試時限，練習合理分配卷一卷二的作答時間" },
            { icon: "🎯", title: "找出弱項", desc: "透過模擬試題發現溫習不足的範疇，針對性加強" },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-white p-5 text-center">
              <div className="mb-2 text-2xl">{c.icon}</div>
              <h3 className="mb-1 text-sm font-bold text-text">{c.title}</h3>
              <p className="text-sm text-text-light">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EAA official mock */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">EAA 官方免費模擬考試</h2>
        <p className="mb-4 text-sm text-text-light">EAA 官網提供免費的網上模擬考試，以下係使用步驟：</p>
        <div className="space-y-5">
          {[
            { n: "1", t: "前往 EAA 模擬考試頁面", d: "瀏覽 EAA 官網的「網上模擬考試」專頁。" },
            { n: "2", t: "選擇考試類別", d: "揀選 EAQE 或 SQE 模擬考試。" },
            { n: "3", t: "開始作答", d: "系統會模擬考試介面，限時完成所有題目。" },
            { n: "4", t: "查看結果", d: "完成後即時顯示成績及答案解說，記低錯題重點溫習。" },
          ].map((s) => (
            <div key={s.n} className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{s.n}</div>
              <div><h3 className="text-sm font-bold text-text">{s.t}</h3><p className="text-sm text-text-light">{s.d}</p></div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <a
            href="https://www.eaa.org.hk/en-us/Examination/Online-Mock-Examination"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            前往 EAA 模擬考試 &rarr;
          </a>
        </div>
        <p className="mt-3 text-sm text-text-light">
          注意：官方模擬考試主要涵蓋 MC 部分，個案分析題的模擬練習較少。建議配合其他方法練習卷二。
        </p>
      </section>

      {/* EAQE practice */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">EAQE 模擬試題攻略</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-5">
            <h3 className="mb-2 font-bold text-text">卷一 MC 練習要點</h3>
            <ul className="space-y-1.5 text-sm text-text-light">
              <li><strong className="text-text">排除法</strong> — 先剔除明顯錯誤選項，提高命中率</li>
              <li><strong className="text-text">條例記憶法</strong> — 用關鍵字聯想法記住重要條文</li>
              <li><strong className="text-text">計時練習</strong> — 卷一 30 題建議控制在 80 分鐘內</li>
              <li><strong className="text-text">錯題本</strong> — 記錄每次做錯的題目及原因，考前重溫</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h3 className="mb-2 font-bold text-text">卷二個案分析練習要點</h3>
            <ul className="space-y-1.5 text-sm text-text-light">
              <li><strong className="text-text">情境代入</strong> — 將自己代入做個代理人，判斷正確做法</li>
              <li><strong className="text-text">辨認關鍵詞</strong> — 題目中「必須」、「不得」、「可以」等用字係提示</li>
              <li><strong className="text-text">自製情境題</strong> — 根據操守守則條文，自行設計場景練習</li>
              <li><strong className="text-text">時間分配</strong> — 卷二 20 題建議用 80 分鐘，每題約 4 分鐘</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SQE practice */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">SQE 模擬試題攻略</h2>
        <div className="rounded-lg border border-border p-5 text-sm leading-relaxed text-text-light">
          <p className="mb-3">SQE 嘅練習策略同 EAQE 類似，但有幾點要留意：</p>
          <ul className="space-y-1.5">
            <li><strong className="text-text">卷一比重更大</strong> — SQE 卷一佔 80%（40 題 MC），MC 練習更加重要</li>
            <li><strong className="text-text">卷二佔比較少</strong> — 只有 10 題（20 分），但合格線為 12 分，即只可以錯 4 題</li>
            <li><strong className="text-text">電腦考試練習</strong> — 如果揀咗電腦考試，建議用 EAA 網上模擬考試熟悉介面操作</li>
          </ul>
          <p className="mt-3">
            唔確定揀 EAQE 定 SQE？睇吓 <Link href="/blog/eaqe-vs-sqe" className="font-medium text-primary hover:underline">E 牌 S 牌比較</Link>。
          </p>
        </div>
      </section>

      {/* Strategy */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">做模擬題的最佳策略</h2>
        <div className="rounded-lg bg-surface p-5">
          <ol className="space-y-3 text-sm leading-relaxed text-text-light">
            <li className="flex gap-2"><span className="shrink-0 font-bold text-primary">1.</span><span><strong className="text-text">限時練習</strong> — 模擬真實考試環境，唔好做完先對答案</span></li>
            <li className="flex gap-2"><span className="shrink-0 font-bold text-primary">2.</span><span><strong className="text-text">逐題檢討</strong> — 對完答案後，理解每題嘅正確原因，唔係淨係知邊個啱</span></li>
            <li className="flex gap-2"><span className="shrink-0 font-bold text-primary">3.</span><span><strong className="text-text">間隔重複</strong> — 做錯的題目隔幾日再做一次，加深記憶</span></li>
            <li className="flex gap-2"><span className="shrink-0 font-bold text-primary">4.</span><span><strong className="text-text">模擬考場環境</strong> — 搵個安靜地方、計時、中途唔好睇手機</span></li>
            <li className="flex gap-2"><span className="shrink-0 font-bold text-primary">5.</span><span><strong className="text-text">記錄分數趨勢</strong> — 追蹤每次模擬試的分數，確認進步方向</span></li>
          </ol>
        </div>
        <p className="mt-4 text-sm text-text-light">
          需要完整溫習計劃？參考 <Link href="/blog/self-study" className="font-medium text-primary hover:underline">自修攻略</Link> 制定時間表。
        </p>
      </section>

      {/* Mini FAQ */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">模擬試題常見疑問</h2>
        <div className="space-y-3">
          <Faq q="EAA 模擬考試同真正考試有幾似？" a="官方模擬考試嘅題型同真正考試一致，但題目難度可能略有差異。主要用途係熟悉作答方式同介面，唔好當作唯一的備考依據。" />
          <Faq q="有冇地產考試 past paper 可以買？" a="EAA 不公開歷屆試題。坊間有精讀書及題庫出售，但 EAA 不認可任何第三方材料。建議以官方大綱及模擬考試為主要參考。" />
          <Faq q="做幾多份模擬卷先夠？" a="冇標準答案，但建議至少做 3–5 次完整限時模擬，直到穩定達到合格線以上。重點唔係做幾多份，而係每份都有認真檢討。" />
          <Faq q="模擬試題做到幾分先有信心考試？" a="建議模擬試穩定攞到 70 分以上（合格線 60 分）再去考。預留 10 分 buffer 應付真實考試嘅緊張同陌生題目。" />
        </div>
      </section>
    </>
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
