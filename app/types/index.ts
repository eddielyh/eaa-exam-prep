export interface Question {
  id: string;
  examType: string;
  questionNumber: number;
  question_en: string;
  question_cn: string;
  options_en: Record<string, string>;
  options_cn: Record<string, string>;
  correctAnswer: string;
  explanation_en: string;
  explanation_cn: string;
}

export type Language = "en" | "cn";
export type QuizMode = "learning" | "test";
export type ExamFilter = "all" | "EAQE" | "SQE";

export interface UserAnswer {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  timeSpent: number; // seconds
}

export interface TestResult {
  answers: UserAnswer[];
  totalQuestions: number;
  correctCount: number;
  score: number; // percentage
  totalTime: number;
  examType: ExamFilter;
  completedAt: Date;
}
