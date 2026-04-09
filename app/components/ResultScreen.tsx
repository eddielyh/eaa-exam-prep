"use client";

import { useState } from "react";
import type { TestResult, Question, Language } from "../types";

interface Props {
  result: TestResult;
  questions: Question[];
  language: Language;
  onRestart: () => void;
  onHome: () => void;
}

const t = {
  en: {
    title: "Test Results",
    score: "Score",
    correct: "Correct",
    incorrect: "Incorrect",
    unanswered: "Unanswered",
    totalTime: "Total Time",
    minutes: "min",
    seconds: "sec",
    pass: "PASS",
    fail: "FAIL",
    passMsg: "Congratulations! You passed!",
    failMsg: "Keep practicing! You need 60% to pass.",
    review: "Review Answers",
    tryAgain: "Try Again",
    home: "Back to Home",
    question: "Question",
    yourAnswer: "Your answer",
    correctAnswer: "Correct answer",
    explanation: "Explanation",
    showAll: "Show All",
    showWrong: "Wrong Only",
    noAnswer: "Not answered",
    stats: "Statistics",
    byExam: "By Exam Type",
  },
  cn: {
    title: "測驗結果",
    score: "分數",
    correct: "正確",
    incorrect: "不正確",
    unanswered: "未作答",
    totalTime: "用時",
    minutes: "分",
    seconds: "秒",
    pass: "合格",
    fail: "不合格",
    passMsg: "恭喜！你合格了！",
    failMsg: "繼續努力！合格分數為 60%。",
    review: "回顧答案",
    tryAgain: "再試一次",
    home: "返回主頁",
    question: "題目",
    yourAnswer: "你的答案",
    correctAnswer: "正確答案",
    explanation: "解說",
    showAll: "顯示全部",
    showWrong: "只顯示錯題",
    noAnswer: "未作答",
    stats: "統計",
    byExam: "按考試類型",
  },
};

export function ResultScreen({ result, questions, language, onRestart, onHome }: Props) {
  const l = t[language];
  const [showReview, setShowReview] = useState(false);
  const [filterWrongOnly, setFilterWrongOnly] = useState(false);

  const passed = result.score >= 60;
  const totalMinutes = Math.floor(result.totalTime / 60);
  const totalSeconds = Math.round(result.totalTime % 60);
  const unansweredCount = result.answers.filter((a) => !a.selectedAnswer).length;
  const incorrectCount = result.totalQuestions - result.correctCount - unansweredCount;

  // Stats by exam type
  const eaqeAnswers = result.answers.filter((a) => a.questionId.startsWith("EAQE"));
  const sqeAnswers = result.answers.filter((a) => a.questionId.startsWith("SQE"));
  const eaqeCorrect = eaqeAnswers.filter((a) => a.isCorrect).length;
  const sqeCorrect = sqeAnswers.filter((a) => a.isCorrect).length;

  const questionsToReview = filterWrongOnly
    ? questions.filter((q) => {
        const ans = result.answers.find((a) => a.questionId === q.id);
        return ans && (!ans.isCorrect || !ans.selectedAnswer);
      })
    : questions;

  const getQuestionText = (q: Question) =>
    language === "cn" && q.question_cn ? q.question_cn : q.question_en;
  const getOptions = (q: Question) =>
    language === "cn" && Object.keys(q.options_cn).length > 0 ? q.options_cn : q.options_en;
  const getExplanation = (q: Question) =>
    language === "cn" && q.explanation_cn ? q.explanation_cn : q.explanation_en;

  return (
    <div className="space-y-6">
      {/* Score Card */}
      <div
        className={`rounded-2xl p-8 text-center ${
          passed
            ? "bg-gradient-to-br from-green-500 to-emerald-600"
            : "bg-gradient-to-br from-red-500 to-rose-600"
        } text-white shadow-lg`}
      >
        <div className="text-6xl font-bold mb-2">{result.score}%</div>
        <div
          className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-3 ${
            passed ? "bg-green-400/30" : "bg-red-400/30"
          }`}
        >
          {passed ? l.pass : l.fail}
        </div>
        <p className="text-white/90 text-lg">{passed ? l.passMsg : l.failMsg}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white rounded-xl p-4 border border-border text-center">
          <div className="text-2xl font-bold text-green-600">{result.correctCount}</div>
          <div className="text-xs text-text-light">{l.correct}</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-border text-center">
          <div className="text-2xl font-bold text-red-600">{incorrectCount}</div>
          <div className="text-xs text-text-light">{l.incorrect}</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-border text-center">
          <div className="text-2xl font-bold text-amber-600">{unansweredCount}</div>
          <div className="text-xs text-text-light">{l.unanswered}</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-border text-center">
          <div className="text-2xl font-bold text-primary">
            {totalMinutes}:{totalSeconds.toString().padStart(2, "0")}
          </div>
          <div className="text-xs text-text-light">{l.totalTime}</div>
        </div>
      </div>

      {/* By Exam Type */}
      {eaqeAnswers.length > 0 && sqeAnswers.length > 0 && (
        <div className="bg-white rounded-xl border border-border p-5">
          <h3 className="text-sm font-semibold text-text-light mb-3">{l.byExam}</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">EAQE</span>
                <span className="text-text-light">
                  {eaqeCorrect}/{eaqeAnswers.length} (
                  {Math.round((eaqeCorrect / eaqeAnswers.length) * 100)}%)
                </span>
              </div>
              <div className="h-2 bg-surface rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{
                    width: `${(eaqeCorrect / eaqeAnswers.length) * 100}%`,
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">SQE</span>
                <span className="text-text-light">
                  {sqeCorrect}/{sqeAnswers.length} (
                  {Math.round((sqeCorrect / sqeAnswers.length) * 100)}%)
                </span>
              </div>
              <div className="h-2 bg-surface rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full"
                  style={{
                    width: `${(sqeCorrect / sqeAnswers.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onRestart}
          className="flex-1 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
        >
          {l.tryAgain}
        </button>
        <button
          onClick={onHome}
          className="flex-1 py-3 bg-white border border-border text-text font-semibold rounded-xl hover:bg-surface transition-colors"
        >
          {l.home}
        </button>
      </div>

      {/* Review Toggle */}
      <button
        onClick={() => setShowReview(!showReview)}
        className="w-full py-3 bg-text text-white font-semibold rounded-xl hover:bg-text transition-colors"
      >
        {showReview ? (language === "en" ? "Hide Review" : "隱藏回顧") : l.review}
      </button>

      {/* Review Section */}
      {showReview && (
        <div className="space-y-4">
          {/* Filter */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilterWrongOnly(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                !filterWrongOnly
                  ? "bg-text text-white"
                  : "bg-surface text-text-light hover:bg-surface-dark"
              }`}
            >
              {l.showAll} ({questions.length})
            </button>
            <button
              onClick={() => setFilterWrongOnly(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                filterWrongOnly
                  ? "bg-red-600 text-white"
                  : "bg-surface text-text-light hover:bg-surface-dark"
              }`}
            >
              {l.showWrong} ({incorrectCount + unansweredCount})
            </button>
          </div>

          {/* Question Reviews */}
          {questionsToReview.map((q, idx) => {
            const ans = result.answers.find((a) => a.questionId === q.id);
            const userAns = ans?.selectedAnswer || "";
            const isRight = ans?.isCorrect ?? false;
            const options = getOptions(q);

            return (
              <div
                key={q.id}
                className={`bg-white rounded-xl border-2 p-5 ${
                  !userAns
                    ? "border-amber-200"
                    : isRight
                    ? "border-green-200"
                    : "border-red-200"
                }`}
              >
                {/* Question Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
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
                      {!userAns ? l.noAnswer : isRight ? l.correct.replace("!", "") : l.incorrect}
                    </span>
                  </div>
                </div>

                {/* Question */}
                <p className="text-sm text-text mb-3 leading-relaxed">
                  {getQuestionText(q)}
                </p>

                {/* Options with results */}
                <div className="space-y-1.5 mb-4">
                  {Object.keys(options)
                    .sort()
                    .map((letter) => {
                      const isCorrectOpt = letter === q.correctAnswer;
                      const isUserChoice = letter === userAns;
                      let optClass = "text-text-light";
                      let prefix = "";
                      if (isCorrectOpt) {
                        optClass = "text-green-700 font-medium bg-green-50 rounded px-2 py-1";
                        prefix = "\u2713 ";
                      }
                      if (isUserChoice && !isCorrectOpt) {
                        optClass = "text-red-600 line-through opacity-75";
                        prefix = "\u2717 ";
                      }
                      return (
                        <div key={letter} className={`text-sm ${optClass}`}>
                          {prefix}
                          {letter}. {options[letter]}
                        </div>
                      );
                    })}
                </div>

                {/* Explanation */}
                <div className="border-t border-border pt-3">
                  <p className="text-xs font-semibold text-text-light uppercase tracking-wide mb-1">
                    {l.explanation}
                    {language === "cn" && !q.explanation_cn && q.explanation_en && (
                      <span className="ml-2 font-normal text-text-light">(English)</span>
                    )}
                  </p>
                  <p className="text-sm text-text-light leading-relaxed">
                    {getExplanation(q)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
