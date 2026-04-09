import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

const SITE_URL = "https://estate-exam.hk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "香港地產代理考試攻略 | HomeDash 考牌一站式指南",
    template: "%s | HomeDash 考牌攻略",
  },
  description:
    "香港地產代理考試一站式指南：涵蓋 EAQE 及 SQE 資格考試的考試內容、報名流程及常見問題，助你順利取得地產牌照。",
  openGraph: {
    type: "website",
    locale: "zh_HK",
    siteName: "HomeDash 考牌攻略",
    title: {
      default: "香港地產代理考試攻略",
      template: "%s | 地產考牌攻略",
    },
    description:
      "香港地產代理考試一站式指南：涵蓋 EAQE 及 SQE 資格考試的考試內容、報名流程及常見問題。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
