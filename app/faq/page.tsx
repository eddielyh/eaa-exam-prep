import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "地產代理考試常見問題 FAQ — 學歷要求、成績有效期及牌照申請",
  description:
    "地產代理考試常見問題解答：報考學歷要求、考試語言選擇、E 牌與 S 牌分別、成績有效期、重考安排及牌照申請流程，一文釐清你的疑問。",
};

const faqCategories: { heading: string; faqs: { question: string; answer: string }[] }[] = [
  {
    heading: "報考資格",
    faqs: [
      {
        question: "沒有學歷要求嗎？",
        answer:
          "不是。報考 EAQE 或 SQE 本身不設學歷要求，但一般申請營業員牌照或地產代理牌照（個人）時，申請人須完成中五程度或同等學歷。只有個別符合豁免條件的人士，才可能毋須符合一般學歷要求，詳情應以地監局官方要求為準。",
      },
      {
        question: "有冇年齡限制？",
        answer:
          "報考本身不設年齡限制，但申請牌照時申請人須年滿 18 歲。",
      },
      {
        question: "非香港居民可唔可以報考？",
        answer:
          "報名時須持有有效的香港身份證或護照。具體資格要求請參閱 EAA 及 PEAK 官方網站。",
      },
    ],
  },
  {
    heading: "考試選擇與比較",
    faqs: [
      {
        question: "EAQE 同 SQE 有咩分別？應該考邊個？",
        answer:
          "EAQE 合格後可申請地產代理（個人）牌照或營業員牌照，持個人牌照可獨立經營或開設公司；SQE 合格後只可申請營業員牌照，須受僱於持牌代理。EAQE 大綱分 8 個部分，SQE 分 6 個部分。如你有意長遠發展或自行開業，建議直接報考 EAQE。",
      },
      {
        question: "可唔可以同時報考 EAQE 同 SQE？",
        answer:
          "可以，但一般不建議。如你通過 EAQE，已自動符合 SQE 的要求，毋須再考 SQE。建議按自己的職業規劃選擇其中一個考試報考。",
      },
      {
        question: "考咗 SQE 之後可唔可以升級做 E 牌？",
        answer:
          "可以，但需要重新報考並通過 EAQE 考試，SQE 成績不可直接轉換。如果有機會考慮獨立經營，直接報考 EAQE 會更划算。",
      },
    ],
  },
  {
    heading: "考試內容與語言",
    faqs: [
      {
        question: "考試可以用中文定英文？",
        answer:
          "考生可於報名時選擇以中文或英文應考。如需更改考試語言，須於指定期限前以書面向 PEAK 提出申請並繳付手續費。詳情請參閱 EAA 官方網站。建議按自己最熟悉的語言選擇。",
      },
      {
        question: "考試合格分數係幾多？",
        answer:
          "EAQE 及 SQE 的合格要求均為總分達 60 分或以上，且卷一及卷二須分別達到合格線。EAQE 卷一（30 題多項選擇，60 分）須取得 ≥36 分，卷二（20 題個案分析，40 分）須取得 ≥24 分。SQE 卷一（40 題多項選擇，80 分）須取得 ≥48 分，卷二（10 題個案分析，20 分）須取得 ≥12 分。",
      },
      {
        question: "有冇官方模擬試題練習？",
        answer:
          "有。EAA 官網提供免費網上模擬考試，幫助考生熟悉題型及作答方式。此外 EAA 亦提供《地產代理法律及實務研習指引》等溫習材料。",
      },
    ],
  },
  {
    heading: "考試當日",
    faqs: [
      {
        question: "考試當日需要帶啲咩？",
        answer:
          "必須攜帶准考證及與報名時相符的有效身份證明文件正本（如香港身份證或護照）。建議提早至少 15 分鐘到達試場。如攜帶的證件與報名資料不符，可能被拒絕入場。",
      },
      {
        question: "考試遲到點算？",
        answer:
          "EAA 建議考生提早至少 15 分鐘到達試場，並預先了解考場位置。遲到有可能不獲准入場，具體安排以 EAA 考生須知為準。",
      },
    ],
  },
  {
    heading: "考試後及牌照申請",
    faqs: [
      {
        question: "幾耐會知道考試成績？",
        answer:
          "紙筆考試的成績通知書一般於考試後第 14 個工作天以平郵寄出。電腦考試（僅限 SQE）的成績於考試後第 7 個工作天發出，考生可於 PEAK 網站查閱。EAA 不接受電話或電郵查詢成績。",
      },
      {
        question: "考試唔合格可以重考嗎？",
        answer:
          "可以。考試不合格的考生可再次報名應考，不設重考次數限制。每次重考均須重新繳付考試費。",
      },
      {
        question: "考試成績有冇有效期？",
        answer:
          "有。考生須於成績通知書發出日期起 12 個月內向 EAA 提交牌照申請，逾期成績將不獲接納，須重新應考。請妥善保存成績通知書正本，遺失後須另行申請補發。",
      },
      {
        question: "通過考試後點申請牌照？",
        answer:
          "考試合格後，可向地產代理監管局（EAA）提交牌照申請。根據 EAA，申請人須提供文件證明符合發牌條件。請注意，通過考試並不代表自動獲發牌照，EAA 會就每宗申請個別審核。申請表格及詳情可於 EAA 網站查閱。",
      },
      {
        question: "成績通知書掉咗點算？",
        answer:
          "兩個月內可聯絡 PEAK 考試中心申請補發。超過兩個月則須向 EAA 財務部以書面申請，並繳付手續費。",
      },
    ],
  },
];

function buildFaqSchema() {
  const allFaqs = faqCategories.flatMap((c) => c.faqs);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema()) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark px-4 py-12 text-white md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-extrabold md:text-4xl">
            地產代理考試常見問題
          </h1>
          <p className="mt-3 max-w-2xl text-blue-100">
            關於 EAQE 及 SQE 考試的報考資格、合格要求及牌照申請，一次過解答你的疑問。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="mb-8 rounded-xl border border-primary/20 bg-blue-50 p-5 text-sm text-text-light">
          <p>
            以下資料僅供參考，一切以{" "}
            <a
              href="https://www.eaa.org.hk/en-us/Examination/FAQs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              EAA 官方常見問題
            </a>
            {" "}最新公佈為準。
          </p>
        </div>

        {/* Quick Summary */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">快速摘要</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="mb-1 text-sm font-bold text-text">報考門檻</h3>
              <p className="text-sm text-text-light">考試不設學歷要求；申請牌照一般須中五或同等學歷</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="mb-1 text-sm font-bold text-text">兩種考試</h3>
              <p className="text-sm text-text-light">
                <Link href="/eaqe" className="text-primary hover:underline">EAQE</Link>（E 牌）可獨立經營；
                <Link href="/sqe" className="text-primary hover:underline">SQE</Link>（S 牌）須受僱於持牌代理
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="mb-1 text-sm font-bold text-text">合格要求</h3>
              <p className="text-sm text-text-light">總分 ≥60 且卷一、卷二分別達標</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="mb-1 text-sm font-bold text-text">成績有效期</h3>
              <p className="text-sm text-text-light">12 個月內須向 EAA 申請牌照，逾期須重考</p>
            </div>
          </div>
        </section>

        {/* Categorized FAQs */}
        {faqCategories.map((category, ci) => (
          <section key={ci} className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-text">{category.heading}</h2>
            <div className="space-y-3">
              {category.faqs.map((faq, fi) => (
                <details
                  key={fi}
                  className="group rounded-lg border border-border bg-white [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-text hover:bg-surface">
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-text-light transition-transform group-open:rotate-180">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        {/* Related Pages */}
        <div className="mt-12 rounded-xl bg-surface p-6">
          <h2 className="mb-4 text-lg font-bold text-text">深入了解各項考試</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/eaqe" className="font-medium text-primary hover:underline">
                EAQE 地產代理資格考試攻略
              </Link>
              <span className="text-text-light"> — 考試結構、科目範圍及備考建議</span>
            </li>
            <li>
              <Link href="/sqe" className="font-medium text-primary hover:underline">
                SQE 營業員資格考試攻略
              </Link>
              <span className="text-text-light"> — 考試內容及 EAQE / SQE 比較</span>
            </li>
            <li>
              <Link href="/registration" className="font-medium text-primary hover:underline">
                考試報名教學
              </Link>
              <span className="text-text-light"> — PEAK 報名步驟、所需文件及注意事項</span>
            </li>
            <li>
              <Link href="/blog/pass-requirements" className="font-medium text-primary hover:underline">
                合格要求詳解
              </Link>
              <span className="text-text-light"> — 雙卷達標制、不合格情境分析</span>
            </li>
            <li>
              <Link href="/blog/result-check" className="font-medium text-primary hover:underline">
                成績查詢全攻略
              </Link>
              <span className="text-text-light"> — 放榜時間、補發及覆核申請</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-text-light">
            仲有其他疑問？可瀏覽{" "}
            <a
              href="https://www.eaa.org.hk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              地產代理監管局（EAA）官方網站
            </a>
            {" "}獲取最新資訊。
          </p>
        </div>
      </div>
    </>
  );
}
