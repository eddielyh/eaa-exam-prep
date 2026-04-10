"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import type { Question, Language, QuizMode, UserAnswer, ExamSimConfig } from "../types";

interface Props {
  questions: Question[];
  language: Language;
  mode: QuizMode;
  onComplete: (answers: UserAnswer[]) => void;
  onExit: () => void;
  examSimConfig?: ExamSimConfig;
  partBoundaries?: number[];
}

const t = {
  en: {
    question: "Question",
    of: "of",
    next: "Next",
    prev: "Previous",
    submit: "Submit Answer",
    finish: "Finish Test",
    exit: "Exit",
    correct: "Correct!",
    incorrect: "Incorrect",
    correctAnswer: "Correct answer",
    explanation: "Explanation",
    selectAnswer: "Please select an answer",
    progress: "Progress",
    answered: "answered",
    confirmExit: "Are you sure you want to exit? Your progress will be lost.",
    confirmFinish: "Submit test? You have",
    unanswered: "unanswered questions",
  },
  cn: {
    question: "題目",
    of: "/",
    next: "下一題",
    prev: "上一題",
    submit: "提交答案",
    finish: "完成測驗",
    exit: "離開",
    correct: "正確！",
    incorrect: "不正確",
    correctAnswer: "正確答案",
    explanation: "解說",
    selectAnswer: "請選擇答案",
    progress: "進度",
    answered: "已答",
    confirmExit: "確定要離開嗎？你的進度將會遺失。",
    confirmFinish: "確定提交測驗？你有",
    unanswered: "題未作答",
  },
};

export function QuizScreen({ questions, language, mode, onComplete, onExit, examSimConfig, partBoundaries }: Props) {
  const l = t[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, string>>(new Map());
  const [showFeedback, setShowFeedback] = useState(false);
  const [submittedQuestions, setSubmittedQuestions] = useState<Set<string>>(new Set());
  const questionStartTime = useRef(Date.now());
  const timesSpent = useRef<Map<string, number>>(new Map());

  // Exam timer
  const examEndTime = useRef(examSimConfig ? Date.now() + examSimConfig.totalTimeSeconds * 1000 : 0);
  const [timeRemaining, setTimeRemaining] = useState(examSimConfig?.totalTimeSeconds || 0);

  useEffect(() => {
    if (mode !== "exam" || !examSimConfig) return;
    const interval = setInterval(() => {
      const remaining = Math.max(0, Math.floor((examEndTime.current - Date.now()) / 1000));
      setTimeRemaining(remaining);
      if (remaining <= 0) {
        clearInterval(interval);
        finishTest();
      }
    }, 1000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, examSimConfig]);

  // Determine which part the current question belongs to
  const getCurrentPart = () => {
    if (!partBoundaries || !examSimConfig) return null;
    let offset = 0;
    for (let i = 0; i < examSimConfig.parts.length; i++) {
      const end = offset + examSimConfig.parts[i].questionCount;
      if (currentIndex < end) return { index: i, config: examSimConfig.parts[i], start: offset, end };
      offset = end;
    }
    return null;
  };

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const question = questions[currentIndex];
  const selectedAnswer = answers.get(question.id) || "";
  const isSubmitted = submittedQuestions.has(question.id);
  const isCorrect = selectedAnswer === question.correctAnswer;

  const getQuestionText = useCallback(
    (q: Question) => (language === "cn" && q.question_cn ? q.question_cn : q.question_en),
    [language]
  );

  const getOptions = useCallback(
    (q: Question) => (language === "cn" && Object.keys(q.options_cn).length > 0 ? q.options_cn : q.options_en),
    [language]
  );

  const getExplanation = useCallback(
    (q: Question) => (language === "cn" && q.explanation_cn ? q.explanation_cn : q.explanation_en),
    [language]
  );

  const isExplanationFallback = useCallback(
    (q: Question) => language === "cn" && !q.explanation_cn && !!q.explanation_en,
    [language]
  );

  const isQuestionFallback = useCallback(
    (q: Question) => language === "cn" && !q.question_cn && !!q.question_en,
    [language]
  );

  function selectOption(letter: string) {
    if (mode === "learning" && isSubmitted) return;
    if (mode === "test" && isSubmitted) return;
    setAnswers(new Map(answers.set(question.id, letter)));
  }

  function submitAnswer() {
    if (!selectedAnswer) return;
    const elapsed = (Date.now() - questionStartTime.current) / 1000;
    timesSpent.current.set(question.id, elapsed);
    setSubmittedQuestions(new Set(submittedQuestions.add(question.id)));
    setShowFeedback(true);
  }

  function goNext() {
    if (mode === "test" && selectedAnswer) {
      // Auto-record time for test mode
      const elapsed = (Date.now() - questionStartTime.current) / 1000;
      timesSpent.current.set(question.id, elapsed);
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowFeedback(false);
      questionStartTime.current = Date.now();
    }
  }

  function goPrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowFeedback(mode === "learning" && submittedQuestions.has(questions[currentIndex - 1].id));
      questionStartTime.current = Date.now();
    }
  }

  function finishTest() {
    const unansweredCount = questions.filter((q) => !answers.has(q.id)).length;
    if (unansweredCount > 0) {
      if (!confirm(`${l.confirmFinish} ${unansweredCount} ${l.unanswered}`)) return;
    }
    const userAnswers: UserAnswer[] = questions.map((q) => {
      const selected = answers.get(q.id) || "";
      return {
        questionId: q.id,
        selectedAnswer: selected,
        isCorrect: selected === q.correctAnswer,
        timeSpent: timesSpent.current.get(q.id) || 0,
      };
    });
    onComplete(userAnswers);
  }

  function handleExit() {
    if (confirm(l.confirmExit)) onExit();
  }

  const answeredCount = answers.size;
  const options = getOptions(question);
  const optionLetters = Object.keys(options).sort();

  const currentPart = getCurrentPart();

  return (
    <div className="space-y-4">
      {/* Exam Timer */}
      {mode === "exam" && examSimConfig && (
        <div className={`flex items-center justify-between rounded-lg px-4 py-2 text-sm font-bold ${
          timeRemaining <= 300 ? "bg-red-100 text-red-700" : timeRemaining <= 600 ? "bg-amber-100 text-amber-700" : "bg-surface text-text"
        }`}>
          <span>{language === "cn" ? examSimConfig.label_cn : examSimConfig.label_en}</span>
          <span className="font-mono text-lg">{formatTime(timeRemaining)}</span>
        </div>
      )}

      {/* Part Header (Exam mode) */}
      {mode === "exam" && currentPart && (
        <div className="rounded-lg bg-primary/10 px-4 py-2 text-center text-sm font-bold text-primary">
          {language === "cn" ? currentPart.config.name_cn : currentPart.config.name_en}
          <span className="ml-2 font-normal text-text-light">
            ({currentPart.config.questionCount} {language === "cn" ? "題" : "Qs"}, {currentPart.config.totalMarks} {language === "cn" ? "分" : "marks"})
          </span>
        </div>
      )}

      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleExit}
          className="text-sm text-text-light hover:text-text transition-colors"
        >
          &larr; {l.exit}
        </button>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-text-light">
            {l.question} {currentIndex + 1} {l.of} {questions.length}
          </span>
          <span className="px-2 py-0.5 bg-primary/10 text-primary-dark text-xs font-medium rounded-full">
            {question.examType}
          </span>
        </div>
        <span className="text-sm text-text-light">
          {answeredCount}{l.of === "/" ? "/" : " " + l.of + " "}{questions.length} {l.answered}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-surface-dark rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Case Study Context */}
      {question.caseStudyContext && question.caseStudyGroup && (
        // Show context only for first question in the group or when jumping to a group question
        (() => {
          const isFirstInGroup = currentIndex === 0 || questions[currentIndex - 1]?.caseStudyGroup !== question.caseStudyGroup;
          if (!isFirstInGroup) return null;
          const groupCount = questions.filter((q) => q.caseStudyGroup === question.caseStudyGroup).length;
          return (
            <div className="rounded-xl border-2 border-accent/30 bg-amber-50 p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-lg">📋</span>
                <span className="text-sm font-bold text-accent-dark">
                  {language === "cn" ? `個案分析 (${groupCount} 題)` : `Case Study (${groupCount} questions)`}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-text-light whitespace-pre-line">
                {question.caseStudyContext}
              </p>
            </div>
          );
        })()
      )}

      {/* Question Card */}
      <div className="bg-white rounded-xl shadow-sm border border-border p-6">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            {question.examType} #{question.questionNumber}
          </span>
          {question.caseStudyGroup && (
            <span className="text-xs text-accent-dark bg-accent/10 px-1.5 py-0.5 rounded font-medium">
              {language === "cn" ? "個案題" : "Case Study"}
            </span>
          )}
          {isQuestionFallback(question) && (
            <span className="text-xs text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
              English
            </span>
          )}
        </div>
        <p className="text-base leading-relaxed text-text whitespace-pre-line">
          {getQuestionText(question)}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-2">
        {optionLetters.map((letter) => {
          const isSelected = selectedAnswer === letter;
          const isCorrectOption = letter === question.correctAnswer;
          const showResult = mode === "learning" && isSubmitted;
          const testShowResult = false; // Never show in test mode during quiz

          let borderClass = "border-border";
          let bgClass = "bg-white";
          let ringClass = "";

          if (isSelected && !showResult && !testShowResult) {
            borderClass = "border-primary-light";
            bgClass = "bg-primary/5";
            ringClass = "ring-1 ring-primary-light";
          }
          if (showResult) {
            if (isCorrectOption) {
              borderClass = "border-green-500";
              bgClass = "bg-green-50";
              ringClass = "ring-1 ring-green-500";
            } else if (isSelected && !isCorrectOption) {
              borderClass = "border-red-500";
              bgClass = "bg-red-50";
              ringClass = "ring-1 ring-red-500";
            } else {
              borderClass = "border-border";
              bgClass = "bg-white opacity-60";
            }
          }

          return (
            <button
              key={letter}
              onClick={() => selectOption(letter)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${borderClass} ${bgClass} ${ringClass} ${
                showResult ? "cursor-default" : "hover:border-blue-300 cursor-pointer"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    showResult && isCorrectOption
                      ? "bg-green-500 text-white"
                      : showResult && isSelected && !isCorrectOption
                      ? "bg-red-500 text-white"
                      : isSelected
                      ? "bg-primary text-white"
                      : "bg-surface text-text-light"
                  }`}
                >
                  {showResult && isCorrectOption
                    ? "\u2713"
                    : showResult && isSelected && !isCorrectOption
                    ? "\u2717"
                    : letter}
                </span>
                <span className="text-sm leading-relaxed pt-1">{options[letter]}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Learning Mode: Submit & Feedback */}
      {mode === "learning" && !isSubmitted && (
        <button
          onClick={submitAnswer}
          disabled={!selectedAnswer}
          className={`w-full py-3 rounded-xl font-semibold text-white transition-all ${
            selectedAnswer
              ? "bg-primary hover:bg-primary-dark shadow-lg shadow-primary/20"
              : "bg-border cursor-not-allowed"
          }`}
        >
          {selectedAnswer ? l.submit : l.selectAnswer}
        </button>
      )}

      {/* Learning Mode Feedback */}
      {mode === "learning" && isSubmitted && showFeedback && (
        <div
          className={`rounded-xl border-2 p-5 ${
            !question.correctAnswer
              ? "border-blue-200 bg-primary/5"
              : isCorrect
              ? "border-green-200 bg-green-50"
              : "border-red-200 bg-red-50"
          }`}
        >
          {/* Header: Correct / Incorrect / No Answer Available */}
          <div className="flex items-center gap-2 mb-3">
            {question.correctAnswer ? (
              <>
                <span className={`text-2xl ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                  {isCorrect ? "\u2705" : "\u274C"}
                </span>
                <span
                  className={`font-bold text-lg ${isCorrect ? "text-green-700" : "text-red-700"}`}
                >
                  {isCorrect ? l.correct : l.incorrect}
                </span>
              </>
            ) : (
              <>
                <span className="text-2xl text-primary">{"\u2139\uFE0F"}</span>
                <span className="font-bold text-lg text-primary-dark">
                  {language === "en" ? "Answer Submitted" : "已提交答案"}
                </span>
              </>
            )}
          </div>

          {/* Wrong answer: show what user picked vs correct answer */}
          {!isCorrect && question.correctAnswer && (
            <div className="mb-4 space-y-2">
              {/* User's wrong answer */}
              <div className="flex items-start gap-2 p-2 rounded-lg bg-red-100/50">
                <span className="text-red-500 font-bold text-sm mt-0.5">{"\u2717"}</span>
                <div>
                  <span className="text-xs font-semibold text-red-600 uppercase">
                    {language === "en" ? "Your answer" : "你的答案"}
                  </span>
                  <p className="text-sm text-red-700">
                    <span className="font-bold">{selectedAnswer}.</span> {options[selectedAnswer]}
                  </p>
                </div>
              </div>
              {/* Correct answer */}
              <div className="flex items-start gap-2 p-2 rounded-lg bg-green-100/50">
                <span className="text-green-500 font-bold text-sm mt-0.5">{"\u2713"}</span>
                <div>
                  <span className="text-xs font-semibold text-green-600 uppercase">
                    {l.correctAnswer}
                  </span>
                  <p className="text-sm text-green-700">
                    <span className="font-bold">{question.correctAnswer}.</span>{" "}
                    {options[question.correctAnswer]}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* No answer available message */}
          {!question.correctAnswer && (
            <p className="text-sm text-primary-dark mb-3">
              {language === "en"
                ? "This question does not have an official answer yet. Your answer has been recorded."
                : "此題目暫時沒有官方答案。你的回答已記錄。"}
            </p>
          )}

          {/* Explanation */}
          {getExplanation(question) && (
            <div className="border-t border-border pt-3 mt-2">
              <p className="text-xs font-semibold text-text-light uppercase tracking-wide mb-1">
                {l.explanation}
                {isExplanationFallback(question) && (
                  <span className="ml-2 text-xs font-normal text-text-light">(English)</span>
                )}
              </p>
              <p className="text-sm text-text leading-relaxed">
                {getExplanation(question)}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
            currentIndex === 0
              ? "bg-surface text-text-light cursor-not-allowed"
              : "bg-white border border-border text-text hover:bg-surface"
          }`}
        >
          {l.prev}
        </button>

        {/* Question dots (visible on desktop) */}
        <div className="hidden sm:flex items-center gap-1 overflow-x-auto max-w-xs">
          {questions.map((q, i) => {
            const hasAnswer = answers.has(q.id);
            const isCurrent = i === currentIndex;
            let dotClass = "bg-surface-dark";
            if (mode === "learning" && submittedQuestions.has(q.id)) {
              const ans = answers.get(q.id);
              dotClass = ans === q.correctAnswer ? "bg-green-500" : "bg-red-500";
            } else if (hasAnswer) {
              dotClass = "bg-blue-400";
            }
            return (
              <button
                key={q.id}
                onClick={() => {
                  setCurrentIndex(i);
                  setShowFeedback(mode === "learning" && submittedQuestions.has(q.id));
                  questionStartTime.current = Date.now();
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all flex-shrink-0 ${dotClass} ${
                  isCurrent ? "ring-2 ring-primary ring-offset-1" : ""
                }`}
              />
            );
          })}
        </div>

        {currentIndex === questions.length - 1 ? (
          mode === "test" ? (
            <button
              onClick={finishTest}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-all"
            >
              {l.finish}
            </button>
          ) : mode === "learning" && isSubmitted ? (
            <button
              onClick={finishTest}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-all"
            >
              {l.finish}
            </button>
          ) : (
            <div className="w-24" />
          )
        ) : (
          <button
            onClick={goNext}
            disabled={mode === "learning" && !isSubmitted && !!selectedAnswer}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              mode === "learning" && !isSubmitted
                ? selectedAnswer
                  ? "bg-surface text-text-light cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary-dark"
                : "bg-primary text-white hover:bg-primary-dark"
            }`}
          >
            {l.next}
          </button>
        )}
      </div>
    </div>
  );
}
