"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const navLinks = [
  { href: "/eaqe", label_cn: "EAQE 地產代理考試", label_en: "EAQE Exam" },
  { href: "/sqe", label_cn: "SQE 營業員考試", label_en: "SQE Exam" },
  { href: "/practice", label_cn: "模擬練習", label_en: "Practice" },
  { href: "/registration", label_cn: "報名教學", label_en: "Registration" },
  { href: "/faq", label_cn: "常見問題", label_en: "FAQ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-primary">
          {language === "cn" ? "地產考牌攻略" : "HK Estate Exam"}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-light transition-colors hover:text-primary"
            >
              {language === "cn" ? link.label_cn : link.label_en}
            </Link>
          ))}
          <button
            onClick={() => setLanguage(language === "cn" ? "en" : "cn")}
            className="ml-1 rounded-full border border-border px-3 py-1 text-xs font-bold text-text-light transition-colors hover:bg-surface hover:text-primary"
          >
            {language === "cn" ? "ENG" : "中文"}
          </button>
        </nav>

        {/* Mobile: lang toggle + menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setLanguage(language === "cn" ? "en" : "cn")}
            className="rounded-full border border-border px-2.5 py-1 text-xs font-bold text-text-light transition-colors hover:bg-surface"
          >
            {language === "cn" ? "ENG" : "中文"}
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md text-text-light hover:bg-surface"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="切換選單"
            aria-expanded={menuOpen}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-t border-border bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2.5 text-sm font-medium text-text-light transition-colors hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {language === "cn" ? link.label_cn : link.label_en}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
