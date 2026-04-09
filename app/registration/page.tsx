import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "地產代理考試報名教學 — 報名流程、所需文件及注意事項",
  description:
    "地產代理考試報名完整教學：透過 PEAK 考試中心網上報名的六個步驟、所需文件、付款方式及注意事項，適用於 E 牌及 S 牌考試。",
};

export default function RegistrationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark px-4 py-12 text-white md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-extrabold md:text-4xl">
            地產代理考試報名教學
          </h1>
          <p className="mt-3 max-w-2xl text-blue-100">
            一步步教你完成 EAQE 或 SQE 考試的報名程序，透過 PEAK 考試中心輕鬆搞掂。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        {/* Before You Start */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">報名前準備</h2>
          <div className="rounded-xl bg-surface p-6">
            <ul className="space-y-2 text-sm leading-relaxed text-text-light">
              <li className="flex gap-2">
                <span className="shrink-0 text-primary">&#10003;</span>
                香港身份證副本（正反面）
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-primary">&#10003;</span>
                近照一張（電子檔，用於准考證）
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-primary">&#10003;</span>
                信用卡（Visa / MasterCard / UnionPay）用於網上報名繳費；郵寄報名則以劃線支票或本票繳付
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-primary">&#10003;</span>
                有效的電郵地址及聯絡電話
              </li>
            </ul>
          </div>
        </section>

        {/* Step-by-step */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold text-text">網上報名步驟</h2>
          <div className="space-y-6">
            <Step
              number="1"
              title="前往 PEAK 網站"
              description="瀏覽高峰進修學院考試中心（PEAK）網站，進入「資格考試」專區，選擇你要報考的考試類別（EAQE 或 SQE）。具體報名開放日期請查閱 EAA 官方考試時間表。"
            />
            <Step
              number="2"
              title="建立帳戶或登入"
              description="首次報名需註冊帳戶，填寫個人資料包括姓名（須與身份證一致）、聯絡方式及通訊地址。已有帳戶的考生可直接登入。"
            />
            <Step
              number="3"
              title="選擇考試場次"
              description="揀選合適的考試日期、時間及考試語言（中文或英文）。各場次名額有限，建議盡早報名並預留充足溫習時間。"
            />
            <Step
              number="4"
              title="上載文件"
              description="上載香港身份證或護照副本。郵寄報名則須連同填妥的報名表格及證件副本一併寄出。"
            />
            <Step
              number="5"
              title="繳付考試費"
              description="網上報名以信用卡（Visa / MasterCard / UnionPay）付款；郵寄報名以劃線支票或本票繳付，抬頭「職業訓練局」。最新考試費用請查閱 EAA 官方網站。"
            />
            <Step
              number="6"
              title="收取准考證"
              description="完成報名後，准考證將按 PEAK 公佈的時間發出。考試當日須攜帶准考證及與報名時相符的有效身份證明文件正本出席。如未能如期收到准考證，請聯絡 PEAK 考試中心查詢。"
            />
          </div>
        </section>

        {/* Online vs Postal */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">網上報名 vs 郵寄報名</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface">
                  <th className="px-4 py-3 text-left font-bold text-text">項目</th>
                  <th className="px-4 py-3 text-left font-bold text-primary">網上報名</th>
                  <th className="px-4 py-3 text-left font-bold text-primary">郵寄報名</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-text">適用考試</td>
                  <td className="px-4 py-3 text-text-light">EAQE（紙筆）、SQE（紙筆及電腦）</td>
                  <td className="px-4 py-3 text-text-light">EAQE（紙筆）、SQE（紙筆）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">付款方式</td>
                  <td className="px-4 py-3 text-text-light">信用卡（Visa / MC / UnionPay）</td>
                  <td className="px-4 py-3 text-text-light">劃線支票 / 本票</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">准考證發出</td>
                  <td className="px-4 py-3 text-text-light">較快（按 PEAK 公佈時間）</td>
                  <td className="px-4 py-3 text-text-light">較慢（經短訊通知後郵寄）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-text">試場選擇</td>
                  <td className="px-4 py-3 text-text-light">系統分配</td>
                  <td className="px-4 py-3 text-text-light">可填寫偏好地區（不保證）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-text-light">
            <strong className="text-text">建議：</strong>SQE 電腦考試只接受網上報名。如非特殊情況，網上報名較方便快捷。
          </p>
        </section>

        {/* Fees */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">考試費用</h2>
          <div className="rounded-xl border border-border bg-white p-6">
            <p className="mb-3 text-sm leading-relaxed text-text-light">
              EAQE 及 SQE 的考試費用由 EAA 釐定，或會不時調整。付款方式包括信用卡（Visa / MasterCard / UnionPay）及劃線支票 / 本票。
            </p>
            <a
              href="https://www.eaa.org.hk/en-us/Examination/Registration-details-post-registration-matters"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              查閱最新考試費用及付款詳情 &rarr;
            </a>
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">注意事項</h2>
          <div className="rounded-xl border-l-4 border-accent bg-amber-50 p-5">
            <ul className="space-y-2 text-sm leading-relaxed text-text-light">
              <li>考試當日須攜帶准考證及與報名時相符的有效身份證明文件正本，建議提早至少 15 分鐘到達試場。</li>
              <li>考試本身不設學歷要求，但申請牌照時一般須具備中五程度或同等學歷。個別情況或可獲豁免，請以地監局最新要求為準。</li>
              <li>考試費一經繳付，除特殊情況經 EAA 批准外，概不退還亦不可轉讓。</li>
              <li>如需更改考試語言，須於指定期限前提出申請並繳付手續費，詳情請參閱 EAA 網站。</li>
              <li>如需申請覆核成績，須於指定期限內提出並繳付手續費，詳情請參閱 EAA 網站。</li>
              <li>紙筆考試可選擇網上或郵寄報名；SQE 電腦考試只接受網上報名。</li>
            </ul>
          </div>
        </section>

        {/* Registration FAQ */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text">報名常見疑問</h2>
          <div className="space-y-3">
            <details className="group rounded-lg border border-border bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-text hover:bg-surface">
                <span>報咗名之後可唔可以改期？</span>
                <span className="shrink-0 text-text-light transition-transform group-open:rotate-180"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></span>
              </summary>
              <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">
                報名後如需更改安排，須於指定期限前提出申請並可能需繳付手續費。具體期限及費用請參閱 EAA 官方網站，不同情況（改期、改語言、退考）的安排各有不同。
              </div>
            </details>
            <details className="group rounded-lg border border-border bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-text hover:bg-surface">
                <span>報名有冇截止日期？</span>
                <span className="shrink-0 text-text-light transition-transform group-open:rotate-180"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></span>
              </summary>
              <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">
                有。網上報名及郵寄報名的截止日期各有不同，而且電腦考試名額有限，額滿即止。建議查閱{" "}
                <a href="https://www.eaa.org.hk/en-us/Examination/Forthcoming-qualifying-examination-schedules" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">EAA 考試時間表</a> 及早報名。
              </div>
            </details>
            <details className="group rounded-lg border border-border bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-text hover:bg-surface">
                <span>我應該報 EAQE 定 SQE？</span>
                <span className="shrink-0 text-text-light transition-transform group-open:rotate-180"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></span>
              </summary>
              <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">
                視乎你的職業規劃。想獨立經營或開公司就考{" "}
                <Link href="/eaqe" className="font-medium text-primary hover:underline">EAQE</Link>
                ；想先入行做營業員就考{" "}
                <Link href="/sqe" className="font-medium text-primary hover:underline">SQE</Link>
                。詳細比較可參閱 SQE 頁面的比較表。
              </div>
            </details>
          </div>
        </section>

        {/* Official Disclaimer */}
        <section className="mb-12">
          <div className="rounded-xl border border-primary/20 bg-blue-50 p-5 text-sm text-text-light">
            <p className="font-bold text-text">免責聲明</p>
            <p className="mt-1">
              本頁資料僅供參考，一切以{" "}
              <a
                href="https://www.eaa.org.hk/en-us/Examination/Exam"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                地產代理監管局（EAA）
              </a>
              {" "}及{" "}
              <a
                href="https://www.peak.edu.hk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                高峰進修學院考試中心（PEAK）
              </a>
              {" "}官方最新公佈為準。報名前請務必查閱官方網站以獲取最新考試時間表、費用及報名詳情。
            </p>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-12 rounded-xl bg-surface p-6">
          <h2 className="mb-4 text-lg font-bold text-text">未決定考邊個？先了解考試內容</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/eaqe" className="font-medium text-primary hover:underline">
                EAQE 地產代理資格考試攻略
              </Link>
              <span className="text-text-light"> — 適合想獨立經營或開設公司的人士</span>
            </li>
            <li>
              <Link href="/sqe" className="font-medium text-primary hover:underline">
                SQE 營業員資格考試攻略
              </Link>
              <span className="text-text-light"> — 適合想加入地產代理公司的人士</span>
            </li>
            <li>
              <Link href="/faq" className="font-medium text-primary hover:underline">
                常見問題 FAQ
              </Link>
              <span className="text-text-light"> — 學歷要求、成績有效期、重考安排等疑問</span>
            </li>
            <li>
              <Link href="/blog/eaqe-vs-sqe" className="font-medium text-primary hover:underline">
                E 牌 S 牌全面比較
              </Link>
              <span className="text-text-light"> — 唔知考邊個？睇完比較再決定</span>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
        {number}
      </div>
      <div>
        <h3 className="mb-1 font-bold text-text">{title}</h3>
        <p className="text-sm leading-relaxed text-text-light">{description}</p>
      </div>
    </div>
  );
}
