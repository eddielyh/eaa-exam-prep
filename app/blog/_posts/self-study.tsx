import Link from "next/link";

export default function SelfStudyContent() {
  return (
    <>
      {/* Self-study vs course */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">自修定報班？先了解自己需要</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-white p-5">
            <h3 className="mb-2 font-bold text-primary">自修適合你如果…</h3>
            <ul className="space-y-1.5 text-sm text-text-light">
              <li>有自律溫習的習慣</li>
              <li>識得自己搵重點、做筆記</li>
              <li>想以較低成本備考</li>
              <li>時間彈性，可以自行安排進度</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-white p-5">
            <h3 className="mb-2 font-bold text-primary">報班適合你如果…</h3>
            <ul className="space-y-1.5 text-sm text-text-light">
              <li>完全冇接觸過地產相關法例</li>
              <li>需要人帶住學、有人解答疑問</li>
              <li>自覺自修容易分心或拖延</li>
              <li>想短時間內密集式衝刺</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-text-light">
          注意：EAA 不認可任何備考課程或機構，報班純屬個人選擇。無論自修定報班，最終都係考同一份卷。
        </p>
      </section>

      {/* EAQE schedule */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">建議溫習時間表</h2>

        <h3 className="mb-3 text-base font-bold text-text">EAQE 自修時間表（建議 8–12 週）</h3>
        <div className="mb-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead><tr className="bg-surface">
              <th className="px-4 py-3 text-left font-bold text-text">週次</th>
              <th className="px-4 py-3 text-left font-bold text-text">溫習範圍</th>
              <th className="px-4 py-3 text-left font-bold text-text">建議活動</th>
            </tr></thead>
            <tbody className="divide-y divide-border">
              <Tr w="1–2" t="地產代理條例及操守守則" a="精讀第 511 章條文、EAA 操守守則，做筆記" />
              <Tr w="3–4" t="規管地產代理實務的法例" a="溫習物業轉易條例、一手銷售條例、印花稅" />
              <Tr w="5–6" t="土地註冊、查冊、契約文件" a="了解查冊流程、臨約/正約/轉讓契要點" />
              <Tr w="7–8" t="估值知識及餘下範疇" a="學習估值方法、物管相關法例" />
              <Tr w="9–10" t="模擬試題練習" a="做 EAA 官方模擬考試 + 坊間練習" />
              <Tr w="11–12" t="重溫弱項 + 考前衝刺" a="針對弱項重點溫習，限時做模擬卷" />
            </tbody>
          </table>
        </div>

        <h3 className="mb-3 text-base font-bold text-text">SQE 自修時間表（建議 4–8 週）</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead><tr className="bg-surface">
              <th className="px-4 py-3 text-left font-bold text-text">週次</th>
              <th className="px-4 py-3 text-left font-bold text-text">溫習範圍</th>
              <th className="px-4 py-3 text-left font-bold text-text">建議活動</th>
            </tr></thead>
            <tbody className="divide-y divide-border">
              <Tr w="1–2" t="地產代理條例、操守守則、營業員責任" a="精讀條例重點及營業員角色限制" />
              <Tr w="3–4" t="相關法例、土地註冊、物業買賣" a="溫習基礎法例及查冊重點" />
              <Tr w="5–6" t="模擬試題 + 弱項重溫" a="做模擬考試、針對弱項衝刺" />
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-text-light">
          以上時間表僅供參考。如果你已經有相關工作經驗或法律背景，可以適當壓縮時間。
        </p>
      </section>

      {/* Subject strategies */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">各科溫習策略</h2>
        <div className="space-y-4">
          <StrategyCard title="地產代理條例（重中之重）" tips={["呢部分佔比最大，務必熟讀《地產代理條例》（第 511 章）", "重點記住：發牌條件、操守守則條文、違規後果", "用自己嘅字重新整理重點，唔好死記"]} />
          <StrategyCard title="一手住宅物業銷售條例" tips={["近年考核比重增加", "了解銷售安排、示範單位規定、價單要求", "留意與二手交易的分別"]} />
          <StrategyCard title="土地註冊及查冊" tips={["了解查冊目的及基本步驟", "知道土地登記冊各部分代表咩", "唔需要記住所有細節，理解概念為主"]} />
          <StrategyCard title="契約及法律文件" tips={["重點分清臨約、正約、轉讓契的分別", "了解各文件嘅法律效力", "常考情境：買賣雙方權利義務"]} />
        </div>
      </section>

      {/* Free resources */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">免費及官方溫習資源</h2>
        <div className="rounded-lg border border-border p-5">
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <span className="shrink-0 text-primary">&#10003;</span>
              <span className="text-text-light">
                <a href="https://www.eaa.org.hk/en-us/Examination/Qualifying-examinations-syllabi" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">EAA 考試大綱 PDF</a> — 了解考試範圍的官方依據
              </span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 text-primary">&#10003;</span>
              <span className="text-text-light">
                <a href="https://www.eaa.org.hk/en-us/Examination/Online-Mock-Examination" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">EAA 網上模擬考試</a> — 免費練習，熟悉題型
              </span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 text-primary">&#10003;</span>
              <span className="text-text-light">
                <a href="https://www.eaa.org.hk/en-us/Examination/Preparing-for-qualifying-examinations" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">EAA 備考資源頁</a> — 研習指引及參考材料
              </span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 text-primary">&#10003;</span>
              <span className="text-text-light">
                <a href="https://www.elegislation.gov.hk" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">電子版香港法例</a> — 查閱《地產代理條例》等相關法例全文
              </span>
            </li>
          </ul>
        </div>
        <p className="mt-3 text-sm text-text-light">
          更多模擬試題資源及練習策略，請參閱 <Link href="/blog/mock-exam" className="font-medium text-primary hover:underline">模擬試題及練習資源</Link>。
        </p>
      </section>

      {/* Paper II tips */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">卷二個案分析備考技巧</h2>
        <div className="rounded-lg bg-surface p-5 text-sm leading-relaxed text-text-light">
          <p className="mb-3">卷二嘅個案分析題考嘅係將法規知識應用到實際場景，唔係單純背書就得。以下係幾個備考技巧：</p>
          <ol className="ml-5 list-decimal space-y-2">
            <li><strong className="text-text">熟讀操守守則</strong> — 大部分個案都涉及代理人有冇違反操守</li>
            <li><strong className="text-text">練習「搵關鍵詞」</strong> — 題目通常會暗示某條守則或法例，學識辨認</li>
            <li><strong className="text-text">角色代入</strong> — 將自己代入做個代理人，想吓正確做法係咩</li>
            <li><strong className="text-text">限時練習</strong> — EAQE 卷二每題約 4 分鐘，SQE 約 4.5 分鐘，平時練習都要計時</li>
          </ol>
          <p className="mt-3">
            了解更多題型細節：<Link href="/blog/exam-format" className="font-medium text-primary hover:underline">考試形式詳解</Link>
          </p>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">自修常見疑問</h2>
        <div className="space-y-3">
          <Faq q="自修大概要幾耐先夠準備？" a="EAQE 建議 8–12 週，SQE 建議 4–8 週。視乎你嘅背景知識及每日投入時間，有相關經驗可以適當壓縮。" />
          <Faq q="有冇免費模擬試題？" a={<>有。EAA 官網提供免費網上模擬考試。詳見 <Link href="/blog/mock-exam" className="font-medium text-primary hover:underline">模擬試題頁</Link>。</>} />
          <Faq q="淨係睇天書 / 精讀得唔得？" a="坊間精讀可以幫你快速掌握重點，但建議同時參考官方大綱及法例原文，確保理解準確。" />
          <Faq q="零基礎自修可唔可以 pass？" a="絕對可以。考試不設學歷要求，只要有系統地溫習及充分練習，自修通過的大有人在。" />
        </div>
      </section>
    </>
  );
}

function Tr({ w, t, a }: { w: string; t: string; a: string }) {
  return (<tr><td className="whitespace-nowrap px-4 py-3 font-medium text-text">{w}</td><td className="px-4 py-3 text-text-light">{t}</td><td className="px-4 py-3 text-text-light">{a}</td></tr>);
}

function StrategyCard({ title, tips }: { title: string; tips: string[] }) {
  return (
    <div className="rounded-lg border border-border p-5">
      <h3 className="mb-2 font-bold text-text">{title}</h3>
      <ul className="space-y-1 text-sm text-text-light">
        {tips.map((t, i) => <li key={i} className="flex gap-2"><span className="shrink-0 text-primary">&#8226;</span>{t}</li>)}
      </ul>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: React.ReactNode }) {
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
