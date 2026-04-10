import type { ExamSimConfig } from "../types";

export const EAQE_CONFIG: ExamSimConfig = {
  examType: "EAQE",
  label_cn: "EAQE 地產代理資格考試 (E牌)",
  label_en: "EAQE Estate Agent Qualifying Examination",
  parts: [
    {
      name_en: "Part 1 — Standalone Questions",
      name_cn: "第一部分 — 獨立試題",
      questionCount: 30,
      marksPerQuestion: 2,
      passMarks: 36,
      totalMarks: 60,
    },
    {
      name_en: "Part 2 — Case Study Questions",
      name_cn: "第二部分 — 個案分析",
      questionCount: 20,
      marksPerQuestion: 2,
      passMarks: 24,
      totalMarks: 40,
    },
  ],
  totalTimeSeconds: 3 * 60 * 60, // 3 hours
  overallPassMarks: 60,
  overallTotalMarks: 100,
};

export const SQE_CONFIG: ExamSimConfig = {
  examType: "SQE",
  label_cn: "SQE 營業員資格考試 (S牌)",
  label_en: "SQE Salesperson Qualifying Examination",
  parts: [
    {
      name_en: "Part 1 — Standalone Questions",
      name_cn: "第一部分 — 獨立試題",
      questionCount: 40,
      marksPerQuestion: 2,
      passMarks: 48,
      totalMarks: 80,
    },
    {
      name_en: "Part 2 — Case Study Questions",
      name_cn: "第二部分 — 個案分析",
      questionCount: 10,
      marksPerQuestion: 2,
      passMarks: 12,
      totalMarks: 20,
    },
  ],
  totalTimeSeconds: 2.5 * 60 * 60, // 2.5 hours
  overallPassMarks: 60,
  overallTotalMarks: 100,
};
