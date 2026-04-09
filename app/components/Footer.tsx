import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 font-bold text-text">地產考牌攻略</h3>
            <p className="text-sm leading-relaxed text-text-light">
              為有志投身香港地產行業的人士提供最全面的考牌資訊，助你順利通過資格考試。
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
                <Link href="/registration" className="text-text-light hover:text-primary">
                  報名教學
                </Link>
              </li>
              <li>
                <Link href="/practice" className="text-text-light hover:text-primary">
                  模擬練習
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
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-text-light">
          <p>&copy; {new Date().getFullYear()} 地產考牌攻略。本網站僅供參考，一切以官方公佈為準。</p>
        </div>
      </div>
    </footer>
  );
}
