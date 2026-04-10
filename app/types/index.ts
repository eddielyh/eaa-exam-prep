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
  source?: string;
  topic?: string;
}

export type Language = "en" | "cn";
export type QuizMode = "learning" | "test" | "exam";
export type ExamFilter = "all" | "EAQE" | "SQE";

export interface UserAnswer {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}

// Exam simulation types
export interface ExamPartConfig {
  name_en: string;
  name_cn: string;
  questionCount: number;
  marksPerQuestion: number;
  passMarks: number;
  totalMarks: number;
}

export interface ExamSimConfig {
  examType: "EAQE" | "SQE";
  label_cn: string;
  label_en: string;
  parts: ExamPartConfig[];
  totalTimeSeconds: number;
  overallPassMarks: number;
  overallTotalMarks: number;
}

export interface ExamPartResult {
  partConfig: ExamPartConfig;
  answers: UserAnswer[];
  correctCount: number;
  marks: number;
  passed: boolean;
}

export interface TestResult {
  answers: UserAnswer[];
  totalQuestions: number;
  correctCount: number;
  score: number;
  totalTime: number;
  examType: ExamFilter;
  completedAt: Date;
  // Exam simulation fields
  examSimConfig?: ExamSimConfig;
  partResults?: ExamPartResult[];
  overallPassed?: boolean;
}
