"use client";

import { useState } from "react";
import type { TestResult, Question, Language, ExamPartResult } from "../types";

interface Props {
  result: TestResult;
  questions: Question[];
  language: Language;
  onRestart: () => void;
  onHome: () => void;
}

export function ExamResultScreen({ result, questions, language, onRestart, onHome }: Props) {
  const [showReview, setShowReview] = useState(false);
  const [filterWrongOnly, setFilterWrongOnly] = useState(false);

  const config = result.examSimConfig!;
  const partResults = result.partResults!;
  const overallPassed = result.overallPassed!;
  const totalMarks = partResults.reduce((s, p) => s + p.marks, 0);
  const totalMinutes = Math.floor(result.totalTime / 60);
  const totalSeconds = Math.round(result.totalTime % 60);
  const allowedMinutes = Math.floor(config.totalTimeSeconds / 60);

  const getQuestionText = (q: Question) =>
    language === "cn" && q.question_cn ? q.question_cn : q.question_en;
  const getOptions = (q: Question) =>
    language === "cn" && Object.keys(q.options_cn || {}).length > 0 ? q.options_cn : q.options_en;
  const getExplanation = (q: Question) =>
    language === "cn" && q.explanation_cn ? q.explanation_cn : q.explanation_en;

  // Compute per-part question ranges
  const partQuestions: { part: ExamPartResult; questions: Question[] }[] = [];
  let offset = 0;
  for (const pr of partResults) {
    partQuestions.push({
      part: pr,
      questions: questions.slice(offset, offset + pr.partConfig.questionCount),
    });
    offset += pr.partConfig.questionCount;
  }

  return (
    <div className="space-y-6">
      {/* Overall Score Card */}
      <div
        className={`rounded-2xl p-8 text-center text-white shadow-lg ${
          overallPassed
            ? "bg-gradient-to-br from-green-500 to-emerald-600"
            : "bg-gradient-to-br from-red-500 to-rose-600"
        }`}
      >
        <div className="text-5xl font-bold mb-1">
          {totalMarks}/{config.overallTotalMarks}
        </div>
        <div className="text-xl font-medium mb-2">{result.score}%</div>
        <div
          className={`inline-block rounded-full px-5 py-1.5 text-sm font-bold mb-3 ${
            overallPassed ? "bg-green-400/30" : "bg-red-400/30"
          }`}
        >
          {overallPassed
            ? language === "cn" ? "合格 PASS" : "PASS"
            : language === "cn" ? "不合格 FAIL" : "FAIL"}
        </div>
        <p className="text-white/90">
          {language === "cn"
            ? overallPassed
              ? "恭喜！你通過了模擬考試！"
              : "未能通過，繼續努力！"
            : overallPassed
            ? "Congratulations! You passed the mock exam!"
            : "Not yet passed. Keep practicing!"}
        </p>
      </div>

      {/* Per-Part Breakdown */}
      <div className="grid gap-4 sm:grid-cols-2">
        {partResults.map((pr, i) => (
          <div
            key={i}
            className={`rounded-xl border-2 p-5 ${
              pr.passed ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-text">
                {language === "cn" ? pr.partConfig.name_cn : pr.partConfig.name_en}
              </h3>
              <span
                className={`rounded-full px-3 py-0.5 text-xs font-bold ${
                  pr.passed ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}
              >
                {pr.passed
                  ? language === "cn" ? "合格" : "PASS"
                  : language === "cn" ? "不合格" : "FAIL"}
              </span>
            </div>
            <div className="text-3xl font-bold text-text mb-1">
              {pr.marks}/{pr.partConfig.totalMarks}
            </div>
            <div className="text-sm text-text-light mb-3">
              {pr.correctCount}/{pr.partConfig.questionCount}{" "}
              {language === "cn" ? "題答對" : "correct"} &middot;{" "}
              {language === "cn" ? "合格線" : "Pass"}: {pr.partConfig.passMarks}/{pr.partConfig.totalMarks}
            </div>
            {/* Progress bar */}
            <div className="relative h-3 bg-white rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${pr.passed ? "bg-green-500" : "bg-red-500"}`}
                style={{ width: `${(pr.marks / pr.partConfig.totalMarks) * 100}%` }}
              />
              {/* Pass line marker */}
              <div
                className="absolute top-0 h-full w-0.5 bg-text/40"
                style={{ left: `${(pr.partConfig.passMarks / pr.partConfig.totalMarks) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dual-pass warning */}
      {result.score >= 60 && !overallPassed && (
        <div className="rounded-xl border-2 border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
          <strong>{language === "cn" ? "注意：" : "Note: "}</strong>
          {language === "cn"
            ? "你的總分達到 60% 以上，但其中一個部分未達到合格分數。根據考試規則，兩個部分必須分別合格才算通過。"
            : "Your overall score exceeds 60%, but one part did not meet the pass mark. Both parts must pass independently."}
        </div>
      )}

      {/* Time & Stats */}
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="rounded-xl border border-border bg-white p-4">
          <div className="text-xl font-bold text-primary">
            {totalMinutes}:{totalSeconds.toString().padStart(2, "0")}
          </div>
          <div className="text-xs text-text-light">
            {language === "cn" ? `用時 (共 ${allowedMinutes} 分鐘)` : `Time (of ${allowedMinutes} min)`}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-white p-4">
          <div className="text-xl font-bold text-green-600">{result.correctCount}</div>
          <div className="text-xs text-text-light">{language === "cn" ? "答對" : "Correct"}</div>
        </div>
        <div className="rounded-xl border border-border bg-white p-4">
          <div className="text-xl font-bold text-red-600">
            {result.totalQuestions - result.correctCount}
          </div>
          <div className="text-xs text-text-light">{language === "cn" ? "答錯/未答" : "Wrong/Unanswered"}</div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onRestart}
          className="flex-1 rounded-xl bg-primary py-3 font-bold text-white transition-colors hover:bg-primary-dark"
        >
          {language === "cn" ? "再考一次" : "Try Again"}
        </button>
        <button
          onClick={onHome}
          className="flex-1 rounded-xl border border-border bg-white py-3 font-bold text-text transition-colors hover:bg-surface"
        >
          {language === "cn" ? "返回主頁" : "Back to Home"}
        </button>
      </div>

      {/* Review Toggle */}
      <button
        onClick={() => setShowReview(!showReview)}
        className="w-full rounded-xl bg-text py-3 font-bold text-white transition-colors hover:bg-text/90"
      >
        {showReview
          ? language === "cn" ? "隱藏回顧" : "Hide Review"
          : language === "cn" ? "回顧答案" : "Review Answers"}
      </button>

      {/* Review Section */}
      {showReview && (
        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => setFilterWrongOnly(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                !filterWrongOnly ? "bg-text text-white" : "bg-surface text-text-light hover:bg-surface-dark"
              }`}
            >
              {language === "cn" ? "全部" : "All"} ({questions.length})
            </button>
            <button
              onClick={() => setFilterWrongOnly(true)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                filterWrongOnly ? "bg-red-600 text-white" : "bg-surface text-text-light hover:bg-surface-dark"
              }`}
            >
              {language === "cn" ? "錯題" : "Wrong"} (
              {result.answers.filter((a) => !a.isCorrect || !a.selectedAnswer).length})
            </button>
          </div>

          {partQuestions.map(({ part, questions: partQs }, pi) => (
            <div key={pi}>
              <h3 className="mb-3 rounded-lg bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                {language === "cn" ? part.partConfig.name_cn : part.partConfig.name_en}
                <span className="ml-2 font-normal">
                  — {part.marks}/{part.partConfig.totalMarks}{" "}
                  {part.passed
                    ? language === "cn" ? "✅ 合格" : "✅ Pass"
                    : language === "cn" ? "❌ 不合格" : "❌ Fail"}
                </span>
              </h3>
              {partQs
                .filter((q) => {
                  if (!filterWrongOnly) return true;
                  const a = result.answers.find((a) => a.questionId === q.id);
                  return !a?.isCorrect || !a?.selectedAnswer;
                })
                .map((q) => {
                  const ans = result.answers.find((a) => a.questionId === q.id);
                  const userAns = ans?.selectedAnswer || "";
                  const isRight = ans?.isCorrect ?? false;
                  const opts = getOptions(q);

                  return (
                    <div
                      key={q.id}
                      className={`mb-3 rounded-xl border-2 p-4 ${
                        !userAns ? "border-amber-200" : isRight ? "border-green-200" : "border-red-200"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium px-2 py-0.5 bg-surface rounded-full">
                          {q.examType} #{q.questionNumber}
                        </span>
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            !userAns
                              ? "bg-amber-100 text-amber-700"
                              : isRight
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {!userAns
                            ? language === "cn" ? "未答" : "Unanswered"
                            : isRight
                            ? language === "cn" ? "正確" : "Correct"
                            : language === "cn" ? "不正確" : "Incorrect"}
                        </span>
                      </div>
                      <p className="text-sm text-text mb-2">{getQuestionText(q)}</p>
                      <div className="space-y-1 mb-3">
                        {Object.keys(opts)
                          .sort()
                          .map((letter) => {
                            const isCorr = letter === q.correctAnswer;
                            const isUser = letter === userAns;
                            let cls = "text-text-light";
                            let pre = "";
                            if (isCorr) { cls = "text-green-700 font-medium bg-green-50 rounded px-2 py-0.5"; pre = "✓ "; }
                            if (isUser && !isCorr) { cls = "text-red-600 line-through opacity-75"; pre = "✗ "; }
                            return (
                              <div key={letter} className={`text-sm ${cls}`}>
                                {pre}{letter}. {opts[letter]}
                              </div>
                            );
                          })}
                      </div>
                      {getExplanation(q) && (
                        <div className="border-t border-border pt-2">
                          <p className="text-xs font-semibold text-text-light mb-1">
                            {language === "cn" ? "解說" : "Explanation"}
                          </p>
                          <p className="text-sm text-text-light">{getExplanation(q)}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
