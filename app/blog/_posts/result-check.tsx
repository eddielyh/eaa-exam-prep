import Link from "next/link";

export default function ResultCheckContent() {
  return (
    <>
      {/* Timeline */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">成績通知時間</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface">
                <th className="px-4 py-3 text-left font-bold text-text">考試</th>
                <th className="px-4 py-3 text-left font-bold text-text">模式</th>
                <th className="px-4 py-3 text-left font-bold text-text">成績通知時間</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-medium text-text">EAQE</td>
                <td className="px-4 py-3 text-text-light">紙筆</td>
                <td className="px-4 py-3 text-text-light">考試後第 14 個工作天以平郵寄出</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text">SQE</td>
                <td className="px-4 py-3 text-text-light">紙筆</td>
                <td className="px-4 py-3 text-text-light">考試後第 14 個工作天以平郵寄出</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-text">SQE</td>
                <td className="px-4 py-3 text-text-light">電腦</td>
                <td className="px-4 py-3 text-text-light">考試後第 7 個工作天，可於 PEAK 網站查閱</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 rounded-lg border-l-4 border-accent bg-amber-50 p-4">
          <p className="text-sm text-text-light">
            <strong className="text-text">注意：</strong>EAA 不接受電話或電郵查詢考試成績。請耐心等候成績通知書。
          </p>
        </div>
      </section>

      {/* What's on the result slip */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">成績通知書內容</h2>
        <div className="text-sm leading-relaxed text-text-light">
          <p className="mb-3">成績通知書（Result Slip）係你申請牌照的必要文件，內容包括：</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>考生姓名及身份證明文件編號</li>
            <li>考試類別（EAQE / SQE）及日期</li>
            <li>考試成績（合格 / 不合格）</li>
            <li>成績有效期限</li>
          </ul>
          <div className="mt-4 rounded-lg bg-surface p-4">
            <p><strong className="text-text">重要：</strong>收到成績通知書後，請即刻影印或掃描留底。正本須於申請牌照時出示，如遺失可能導致申請被拒。</p>
          </div>
        </div>
      </section>

      {/* Online check for CBE */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">網上查閱成績（SQE 電腦考試）</h2>
        <p className="mb-4 text-sm text-text-light">如果你應考的係 SQE 電腦考試，可以透過 PEAK 網站查閱成績：</p>
        <div className="space-y-5">
          {[
            { n: "1", t: "前往 PEAK 網站", d: "瀏覽高峰進修學院考試中心網站的成績查閱頁面。" },
            { n: "2", t: "登入帳戶", d: "使用報名時建立的帳戶登入。" },
            { n: "3", t: "查閱成績", d: "進入考試成績專區查閱結果。成績一般於考試後第 7 個工作天上載。" },
          ].map((s) => (
            <div key={s.n} className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{s.n}</div>
              <div><h3 className="text-sm font-bold text-text">{s.t}</h3><p className="text-sm text-text-light">{s.d}</p></div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-text-light">紙筆考試（EAQE 及 SQE）的成績不設網上查閱，只以郵寄方式通知。</p>
      </section>

      {/* Lost cert */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">成績通知書遺失補發</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-5">
            <h3 className="mb-2 font-bold text-text">兩個月內</h3>
            <p className="text-sm text-text-light">
              直接聯絡 PEAK 考試中心申請補發。<br />
              電話：2919 1467 / 2919 1468 / 2919 1478<br />
              電郵：cpdc@vtc.edu.hk
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h3 className="mb-2 font-bold text-text">超過兩個月</h3>
            <p className="text-sm text-text-light">
              須以書面向 EAA 財務部提出申請，並繳付行政費用。具體費用以 EAA 官方公佈為準。
            </p>
          </div>
        </div>
      </section>

      {/* Appeal */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">覆核成績申請</h2>
        <div className="text-sm leading-relaxed text-text-light">
          <p className="mb-3">如果你對考試成績有疑問，可以申請覆核：</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>須於指定期限內以書面向 EAA 提出</li>
            <li>須繳付覆核手續費（以 EAA 官方公佈為準）</li>
            <li>覆核結果為最終決定</li>
          </ul>
          <p className="mt-3">
            管理期望：成績覆核主要核查有冇計算或紀錄上的錯誤，並非重新批改。結果出現改變的情況非常罕見。
          </p>
        </div>
      </section>

      {/* Validity and next steps */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">成績有效期及後續步驟</h2>
        <div className="rounded-lg border border-border p-5 text-sm leading-relaxed text-text-light">
          <p>合格成績有效期為<strong className="text-text"> 12 個月</strong>，由成績通知書發出日期起計。你須於期限內向 EAA 提交牌照申請。</p>
          <p className="mt-3">後續步驟：</p>
          <ol className="ml-5 mt-2 list-decimal space-y-1">
            <li>保存成績通知書正本</li>
            <li>準備牌照申請所需文件</li>
            <li>於 EAA 網站下載並填妥申請表格</li>
            <li>連同所需文件及牌照費遞交 EAA</li>
          </ol>
          <p className="mt-3">了解合格分數詳情：<Link href="/blog/pass-requirements" className="font-medium text-primary hover:underline">合格要求詳解</Link></p>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-text">成績查詢常見疑問</h2>
        <div className="space-y-3">
          <Faq q="考完幾耐會收到成績通知書？" a="紙筆考試一般於考試後第 14 個工作天以平郵寄出；SQE 電腦考試則於第 7 個工作天可於 PEAK 網站查閱。" />
          <Faq q="成績通知書寄丟咗點算？" a="兩個月內聯絡 PEAK 考試中心（2919 1467）申請補發；超過兩個月則須向 EAA 財務部書面申請並繳費。" />
          <Faq q="可唔可以打電話去 EAA 問成績？" a="唔可以。EAA 明確表示不接受電話或電郵查詢考試成績，請耐心等候通知書。" />
          <Faq q="成績 12 個月有效期由幾時開始計？" a="由成績通知書的發出日期起計（非考試日期），須於 12 個月內向 EAA 遞交牌照申請。" />
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
