"use client";

import { useState } from "react";
import Link from "next/link";
import type { Question, QuizMode, ExamFilter, UserAnswer, TestResult } from "../types";
import { QuizScreen } from "../components/QuizScreen";
import { ResultScreen } from "../components/ResultScreen";
import { useLanguage } from "../context/LanguageContext";
import questionsData from "../data/questions.json";

const allQuestions = questionsData as Question[];

type Screen = "home" | "quiz" | "result";

const examCounts = {
  all: allQuestions.length,
  EAQE: allQuestions.filter((q) => q.examType === "EAQE").length,
  SQE: allQuestions.filter((q) => q.examType === "SQE" || q.examType === "SAMPLE").length,
};

export default function PracticePage() {
  const [screen, setScreen] = useState<Screen>("home");
  const { language } = useLanguage();
  const [mode, setMode] = useState<QuizMode>("learning");
  const [examFilter, setExamFilter] = useState<ExamFilter>("all");
  const [questionCount, setQuestionCount] = useState(20);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const filtered =
    examFilter === "all"
      ? allQuestions
      : examFilter === "EAQE"
      ? allQuestions.filter((q) => q.examType === "EAQE")
      : allQuestions.filter((q) => q.examType === "SQE" || q.examType === "SAMPLE");
  const available = filtered.length;

  function startQuiz(overrideFilter?: ExamFilter) {
    const f = overrideFilter || examFilter;
    let pool = allQuestions;
    if (f === "EAQE") pool = pool.filter((q) => q.examType === "EAQE");
    else if (f === "SQE") pool = pool.filter((q) => q.examType === "SQE" || q.examType === "SAMPLE");
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled.slice(0, Math.min(questionCount, shuffled.length)));
    setScreen("quiz");
  }

  function handleQuizComplete(answers: UserAnswer[]) {
    const correctCount = answers.filter((a) => a.isCorrect).length;
    setTestResult({
      answers,
      totalQuestions: answers.length,
      correctCount,
      score: Math.round((correctCount / answers.length) * 100),
      totalTime: answers.reduce((sum, a) => sum + a.timeSpent, 0),
      examType: examFilter,
      completedAt: new Date(),
    });
    setScreen("result");
  }

  function goHome() {
    setScreen("home");
    setTestResult(null);
  }

  // Quiz or Result screen
  if (screen === "quiz") {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        <QuizScreen
          questions={quizQuestions}
          language={language}
          mode={mode}
          onComplete={handleQuizComplete}
          onExit={goHome}
        />
      </div>
    );
  }

  if (screen === "result" && testResult) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        <ResultScreen
          result={testResult}
          questions={quizQuestions}
          language={language}
          onRestart={() => startQuiz()}
          onHome={goHome}
        />
      </div>
    );
  }

  // Home screen
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark px-4 py-12 text-white md:py-16">
        <div className="mx-auto max-w-4xl">
          <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
            292 題
          </span>
          <h1 className="text-2xl font-extrabold md:text-4xl">模擬練習</h1>
          <p className="mt-3 max-w-2xl text-blue-100">
            練習 EAQE 及 SQE 資格考試題目，每題即時提供答案及詳細解說，支援中英雙語。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        {/* Mode Selection */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-text">
            {language === "cn" ? "選擇模式" : "Select Mode"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => setMode("learning")}
              className={`rounded-xl border-2 p-5 text-left transition-all ${
                mode === "learning"
                  ? "border-primary bg-primary/5 ring-1 ring-primary"
                  : "border-border bg-white hover:border-primary-light"
              }`}
            >
              <div className="mb-1 flex items-center gap-2">
                <span className="text-2xl">📖</span>
                <span className="font-bold text-text">
                  {language === "cn" ? "學習模式" : "Learning Mode"}
                </span>
              </div>
              <p className="text-sm text-text-light">
                {language === "cn"
                  ? "每題作答後即時顯示正確答案及解說"
                  : "See correct answer and explanation after each question"}
              </p>
            </button>
            <button
              onClick={() => setMode("test")}
              className={`rounded-xl border-2 p-5 text-left transition-all ${
                mode === "test"
                  ? "border-primary bg-primary/5 ring-1 ring-primary"
                  : "border-border bg-white hover:border-primary-light"
              }`}
            >
              <div className="mb-1 flex items-center gap-2">
                <span className="text-2xl">📝</span>
                <span className="font-bold text-text">
                  {language === "cn" ? "測驗模式" : "Test Mode"}
                </span>
              </div>
              <p className="text-sm text-text-light">
                {language === "cn"
                  ? "完成所有題目後才顯示成績及詳細解說"
                  : "See score and full review after completing all questions"}
              </p>
            </button>
          </div>
        </section>

        {/* Exam Filter */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-text">
            {language === "cn" ? "考試類型" : "Exam Type"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {(["all", "EAQE", "SQE"] as ExamFilter[]).map((f) => (
              <button
                key={f}
                onClick={() => setExamFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                  examFilter === f
                    ? "bg-primary text-white shadow-sm"
                    : "border border-border bg-white text-text-light hover:bg-surface"
                }`}
              >
                {f === "all"
                  ? language === "cn"
                    ? "所有題目"
                    : "All Questions"
                  : f === "EAQE"
                  ? "EAQE (E 牌)"
                  : "SQE (S 牌)"}
              </button>
            ))}
          </div>
          <p className="mt-2 text-sm text-text-light">
            {available} {language === "cn" ? "題可用" : "questions available"}
          </p>
        </section>

        {/* Question Count */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-text">
            {language === "cn" ? "題目數量" : "Number of Questions"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {[10, 20, 40, 80].map((n) => (
              <button
                key={n}
                onClick={() => setQuestionCount(n)}
                disabled={n > available}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                  questionCount === n
                    ? "bg-primary text-white shadow-sm"
                    : n > available
                    ? "border border-border bg-surface text-text-light/40 cursor-not-allowed"
                    : "border border-border bg-white text-text-light hover:bg-surface"
                }`}
              >
                {n} {language === "cn" ? "題" : "Qs"}
              </button>
            ))}
            <button
              onClick={() => setQuestionCount(available)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                questionCount === available
                  ? "bg-primary text-white shadow-sm"
                  : "border border-border bg-white text-text-light hover:bg-surface"
              }`}
            >
              {language === "cn" ? "全部" : "All"} ({available})
            </button>
          </div>
        </section>

        {/* Start Button */}
        <button
          onClick={() => startQuiz()}
          className="mb-10 w-full rounded-xl bg-primary py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-primary-dark"
        >
          {language === "cn" ? "開始練習" : "Start Practice"}
        </button>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="rounded-xl border border-border bg-surface p-4">
            <div className="text-2xl font-extrabold text-primary">{examCounts.all}</div>
            <div className="mt-1 text-xs text-text-light">
              {language === "cn" ? "總題數" : "Total"}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <div className="text-2xl font-extrabold text-primary">{examCounts.EAQE}</div>
            <div className="mt-1 text-xs text-text-light">EAQE</div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <div className="text-2xl font-extrabold text-primary">{examCounts.SQE}</div>
            <div className="mt-1 text-xs text-text-light">SQE</div>
          </div>
        </div>

        {/* Related */}
        <section className="mt-12 rounded-xl bg-surface p-6">
          <h2 className="mb-4 text-lg font-bold text-text">相關資訊</h2>
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
              <Link href="/blog/self-study" className="font-medium text-primary hover:underline">
                自修攻略
              </Link>
              <span className="text-text-light"> — 溫習時間表、各科策略及免費資源</span>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
