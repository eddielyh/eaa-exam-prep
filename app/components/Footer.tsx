import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      {/* Disclaimer */}
      <div className="border-b border-border bg-amber-50">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <p className="text-xs leading-relaxed text-amber-800">
            <strong>免責聲明 Disclaimer：</strong>
            本網站所提供的所有資料、模擬試題及答案僅供學習及參考用途，並不構成任何專業意見或官方指引。本網站不保證內容的準確性、完整性或時效性，亦不對因使用本網站資料而導致的任何損失或損害承擔責任。考試內容、規則及要求以
            <a href="https://www.eaa.org.hk" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">地產代理監管局（EAA）</a>
            及
            <a href="https://www.peak.edu.hk" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">高峰進修學院考試中心（PEAK）</a>
            官方最新公佈為準。
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-amber-700">
            All information, practice questions and answers on this website are for learning and reference purposes only. They do not constitute professional advice or official guidance. We do not guarantee the accuracy, completeness or timeliness of the content, and accept no liability for any loss or damage arising from the use of this website. Please refer to the official EAA and PEAK websites for the latest exam requirements.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/logo.png" alt="HomeDash" width={120} height={28} className="mb-3 h-7 w-auto" />
            <p className="text-sm leading-relaxed text-text-light">
              由 HomeDash 提供，為有志投身香港地產行業的人士提供考牌資訊及模擬練習。
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-text">快速連結</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/eaqe" className="text-text-light hover:text-primary">
                  EAQE 地產代理考試
                </Link>
              </li>
              <li>
                <Link href="/sqe" className="text-text-light hover:text-primary">
                  SQE 營業員考試
                </Link>
              </li>
              <li>
                <Link href="/practice" className="text-text-light hover:text-primary">
                  模擬練習
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-text-light hover:text-primary">
                  報名教學
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-text-light hover:text-primary">
                  常見問題
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-text">備考文章</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog/eaqe-vs-sqe" className="text-text-light hover:text-primary">
                  E 牌 S 牌比較
                </Link>
              </li>
              <li>
                <Link href="/blog/self-study" className="text-text-light hover:text-primary">
                  自修攻略
                </Link>
              </li>
              <li>
                <Link href="/blog/mock-exam" className="text-text-light hover:text-primary">
                  模擬試題資源
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-text-light hover:text-primary">
                  所有文章 &rarr;
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-text">相關資源</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.eaa.org.hk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-light hover:text-primary"
                >
                  地產代理監管局 (EAA)
                </a>
              </li>
              <li>
                <a
                  href="https://www.peak.edu.hk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-light hover:text-primary"
                >
                  高峰進修學院考試中心 (PEAK)
                </a>
              </li>
              <li>
                <a
                  href="https://homedash.hk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-light hover:text-primary"
                >
                  HomeDash 家速
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-text-light">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://homedash.hk" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              HomeDash 家速
            </a>
            。本網站僅供學習參考，一切以官方公佈為準。
          </p>
        </div>
      </div>
    </footer>
  );
}
