"use client";

import { useState } from "react";
import Link from "next/link";
import type { Question, QuizMode, ExamFilter, UserAnswer, TestResult, ExamSimConfig, ExamPartResult } from "../types";
import { QuizScreen } from "../components/QuizScreen";
import { ResultScreen } from "../components/ResultScreen";
import { ExamResultScreen } from "../components/ExamResultScreen";
import { useLanguage } from "../context/LanguageContext";
import { EAQE_CONFIG, SQE_CONFIG } from "../data/examConfigs";
import questionsData from "../data/questions.json";

const allQuestions = questionsData as Question[];

type Screen = "home" | "quiz" | "result";

export default function PracticePage() {
  const [screen, setScreen] = useState<Screen>("home");
  const { language } = useLanguage();
  const [mode, setMode] = useState<QuizMode>("learning");
  const [examFilter, setExamFilter] = useState<ExamFilter>("all");
  const [questionCount, setQuestionCount] = useState(20);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [examSimConfig, setExamSimConfig] = useState<ExamSimConfig | null>(null);
  const [partBoundaries, setPartBoundaries] = useState<number[]>([]);

  const eaqePool = allQuestions.filter((q) => q.examType === "EAQE");
  const sqePool = allQuestions.filter((q) => q.examType === "SQE" || q.examType === "SAMPLE");
  const filtered = examFilter === "all" ? allQuestions : examFilter === "EAQE" ? eaqePool : sqePool;
  const available = filtered.length;

  function startQuiz() {
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled.slice(0, Math.min(questionCount, shuffled.length)));
    setExamSimConfig(null);
    setScreen("quiz");
  }

  function startExamSim(examType: "EAQE" | "SQE") {
    const config = examType === "EAQE" ? EAQE_CONFIG : SQE_CONFIG;
    const pool = examType === "EAQE" ? eaqePool : sqePool;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const totalNeeded = config.parts.reduce((s, p) => s + p.questionCount, 0);
    const selected = shuffled.slice(0, Math.min(totalNeeded, shuffled.length));

    let cum = 0;
    const boundaries = config.parts.map((p) => { cum += p.questionCount; return cum; });

    setExamSimConfig(config);
    setPartBoundaries(boundaries);
    setQuizQuestions(selected);
    setMode("exam");
    setScreen("quiz");
  }

  function handleQuizComplete(answers: UserAnswer[]) {
    if (mode === "exam" && examSimConfig) {
      const partResults: ExamPartResult[] = [];
      let offset = 0;
      for (const part of examSimConfig.parts) {
        const partAnswers = answers.slice(offset, offset + part.questionCount);
        const correctCount = partAnswers.filter((a) => a.isCorrect).length;
        const marks = correctCount * part.marksPerQuestion;
        partResults.push({ partConfig: part, answers: partAnswers, correctCount, marks, passed: marks >= part.passMarks });
        offset += part.questionCount;
      }
      const totalMarks = partResults.reduce((s, p) => s + p.marks, 0);
      setTestResult({
        answers, totalQuestions: answers.length,
        correctCount: answers.filter((a) => a.isCorrect).length,
        score: Math.round((totalMarks / examSimConfig.overallTotalMarks) * 100),
        totalTime: answers.reduce((sum, a) => sum + a.timeSpent, 0),
        examType: examSimConfig.examType as ExamFilter,
        completedAt: new Date(),
        examSimConfig, partResults,
        overallPassed: partResults.every((p) => p.passed),
      });
    } else {
      const correctCount = answers.filter((a) => a.isCorrect).length;
      setTestResult({
        answers, totalQuestions: answers.length, correctCount,
        score: Math.round((correctCount / answers.length) * 100),
        totalTime: answers.reduce((sum, a) => sum + a.timeSpent, 0),
        examType: examFilter, completedAt: new Date(),
      });
    }
    setScreen("result");
  }

  function goHome() {
    setScreen("home");
    setTestResult(null);
    setExamSimConfig(null);
  }

  // Quiz screen
  if (screen === "quiz") {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        <QuizScreen
          questions={quizQuestions} language={language} mode={mode}
          onComplete={handleQuizComplete} onExit={goHome}
          examSimConfig={examSimConfig || undefined}
          partBoundaries={partBoundaries.length > 0 ? partBoundaries : undefined}
        />
      </div>
    );
  }

  // Result screen
  if (screen === "result" && testResult) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        {testResult.examSimConfig ? (
          <ExamResultScreen
            result={testResult} questions={quizQuestions} language={language}
            onRestart={() => startExamSim(testResult.examSimConfig!.examType)}
            onHome={goHome}
          />
        ) : (
          <ResultScreen
            result={testResult} questions={quizQuestions} language={language}
            onRestart={startQuiz} onHome={goHome}
          />
        )}
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
            {allQuestions.length} {language === "cn" ? "題" : "Questions"}
          </span>
          <h1 className="text-2xl font-extrabold md:text-4xl">
            {language === "cn" ? "模擬練習" : "Practice"}
          </h1>
          <p className="mt-3 max-w-2xl text-blue-100">
            {language === "cn"
              ? "練習 EAQE 及 SQE 資格考試題目，支援學習模式、測驗模式及模擬考試。"
              : "Practice EAQE and SQE qualifying exam questions with learning, test, and exam simulation modes."}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14 space-y-12">
        {/* ====== SECTION 1: Exam Simulation ====== */}
        <section>
          <h2 className="mb-2 text-xl font-bold text-text">
            {language === "cn" ? "模擬考試" : "Exam Simulation"}
          </h2>
          <p className="mb-5 text-sm text-text-light">
            {language === "cn"
              ? "完全模擬真實考試：題目數量、計時、雙卷獨立合格制。"
              : "Full exam simulation: real question count, countdown timer, dual-pass scoring."}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* EAQE Card */}
            <button
              onClick={() => startExamSim("EAQE")}
              className="group rounded-xl border-2 border-border bg-white p-6 text-left transition-all hover:border-primary hover:shadow-md"
            >
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                E 牌
              </span>
              <h3 className="mb-1 text-lg font-bold text-text group-hover:text-primary">
                EAQE {language === "cn" ? "地產代理資格考試" : "Estate Agent Exam"}
              </h3>
              <div className="space-y-1 text-sm text-text-light">
                <p>{language === "cn" ? "第一部分" : "Part 1"}: 30 {language === "cn" ? "題" : "Qs"} (60 {language === "cn" ? "分，合格" : "marks, pass"} ≥36)</p>
                <p>{language === "cn" ? "第二部分" : "Part 2"}: 20 {language === "cn" ? "題" : "Qs"} (40 {language === "cn" ? "分，合格" : "marks, pass"} ≥24)</p>
                <p className="font-medium text-text">
                  {language === "cn" ? "50 題 · 3 小時 · 雙卷合格制" : "50 Qs · 3 hours · dual-pass"}
                </p>
              </div>
              <div className="mt-3 text-xs text-text-light">
                {language === "cn" ? `題庫：${eaqePool.length} 題` : `Pool: ${eaqePool.length} questions`}
              </div>
            </button>

            {/* SQE Card */}
            <button
              onClick={() => startExamSim("SQE")}
              className="group rounded-xl border-2 border-border bg-white p-6 text-left transition-all hover:border-primary hover:shadow-md"
            >
              <span className="mb-2 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent-dark">
                S 牌
              </span>
              <h3 className="mb-1 text-lg font-bold text-text group-hover:text-primary">
                SQE {language === "cn" ? "營業員資格考試" : "Salesperson Exam"}
              </h3>
              <div className="space-y-1 text-sm text-text-light">
                <p>{language === "cn" ? "第一部分" : "Part 1"}: 40 {language === "cn" ? "題" : "Qs"} (80 {language === "cn" ? "分，合格" : "marks, pass"} ≥48)</p>
                <p>{language === "cn" ? "第二部分" : "Part 2"}: 10 {language === "cn" ? "題" : "Qs"} (20 {language === "cn" ? "分，合格" : "marks, pass"} ≥12)</p>
                <p className="font-medium text-text">
                  {language === "cn" ? "50 題 · 2.5 小時 · 雙卷合格制" : "50 Qs · 2.5 hours · dual-pass"}
                </p>
              </div>
              <div className="mt-3 text-xs text-text-light">
                {language === "cn" ? `題庫：${sqePool.length} 題` : `Pool: ${sqePool.length} questions`}
              </div>
            </button>
          </div>
        </section>

        {/* ====== SECTION 2: Free Practice ====== */}
        <section>
          <h2 className="mb-2 text-xl font-bold text-text">
            {language === "cn" ? "自由練習" : "Free Practice"}
          </h2>
          <p className="mb-5 text-sm text-text-light">
            {language === "cn"
              ? "自訂題目數量及範圍，學習模式即時顯示答案，測驗模式完成後一次過回顧。"
              : "Customize question count and scope. Learning mode shows answers instantly, test mode reviews after completion."}
          </p>

          {/* Mode */}
          <div className="mb-6 grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => setMode("learning")}
              className={`rounded-xl border-2 p-4 text-left transition-all ${
                mode === "learning" ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-white hover:border-primary-light"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">📖</span>
                <span className="font-bold text-text">{language === "cn" ? "學習模式" : "Learning Mode"}</span>
              </div>
              <p className="text-sm text-text-light">
                {language === "cn" ? "每題即時顯示答案及解說" : "Instant feedback after each question"}
              </p>
            </button>
            <button
              onClick={() => setMode("test")}
              className={`rounded-xl border-2 p-4 text-left transition-all ${
                mode === "test" ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-white hover:border-primary-light"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">📝</span>
                <span className="font-bold text-text">{language === "cn" ? "測驗模式" : "Test Mode"}</span>
              </div>
              <p className="text-sm text-text-light">
                {language === "cn" ? "完成後才顯示成績及解說" : "See results after completing all questions"}
              </p>
            </button>
          </div>

          {/* Exam filter + question count */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {(["all", "EAQE", "SQE"] as ExamFilter[]).map((f) => (
              <button
                key={f}
                onClick={() => setExamFilter(f)}
                className={`rounded-full px-4 py-1.5 text-sm font-bold transition-all ${
                  examFilter === f ? "bg-primary text-white" : "border border-border bg-white text-text-light hover:bg-surface"
                }`}
              >
                {f === "all" ? (language === "cn" ? "全部" : "All") : f === "EAQE" ? "E牌" : "S牌"}
              </button>
            ))}
            <span className="text-xs text-text-light">({available} {language === "cn" ? "題" : "Qs"})</span>
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {[10, 20, 40, 80].map((n) => (
              <button
                key={n}
                onClick={() => setQuestionCount(n)}
                disabled={n > available}
                className={`rounded-full px-4 py-1.5 text-sm font-bold transition-all ${
                  questionCount === n ? "bg-primary text-white" : n > available ? "bg-surface text-border cursor-not-allowed" : "border border-border bg-white text-text-light hover:bg-surface"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setQuestionCount(available)}
              className={`rounded-full px-4 py-1.5 text-sm font-bold transition-all ${
                questionCount === available ? "bg-primary text-white" : "border border-border bg-white text-text-light hover:bg-surface"
              }`}
            >
              {language === "cn" ? "全部" : "All"}
            </button>
          </div>

          <button
            onClick={startQuiz}
            className="w-full rounded-xl bg-primary py-3.5 text-base font-bold text-white shadow-lg transition-colors hover:bg-primary-dark"
          >
            {language === "cn" ? "開始練習" : "Start Practice"}
          </button>
        </section>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-border bg-surface p-4">
            <div className="text-2xl font-extrabold text-primary">{allQuestions.length}</div>
            <div className="mt-1 text-xs text-text-light">{language === "cn" ? "總題數" : "Total"}</div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <div className="text-2xl font-extrabold text-primary">{eaqePool.length}</div>
            <div className="mt-1 text-xs text-text-light">E牌 EAQE</div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <div className="text-2xl font-extrabold text-primary">{sqePool.length}</div>
            <div className="mt-1 text-xs text-text-light">S牌 SQE</div>
          </div>
        </div>

        {/* Related */}
        <section className="rounded-xl bg-surface p-6">
          <h2 className="mb-4 text-lg font-bold text-text">{language === "cn" ? "相關資訊" : "Related"}</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/eaqe" className="font-medium text-primary hover:underline">EAQE {language === "cn" ? "考試攻略" : "Exam Guide"}</Link></li>
            <li><Link href="/sqe" className="font-medium text-primary hover:underline">SQE {language === "cn" ? "考試攻略" : "Exam Guide"}</Link></li>
            <li><Link href="/blog/self-study" className="font-medium text-primary hover:underline">{language === "cn" ? "自修攻略" : "Self-study Guide"}</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
