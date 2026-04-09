export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  summary: string;
  primaryKeyword: string;
};

export const posts: BlogPost[] = [
  {
    slug: "eaqe-vs-sqe",
    title: "EAQE 與 SQE 分別 — E 牌 S 牌全面比較及選擇指南",
    description:
      "EAQE 與 SQE 有咩分別？全面比較 E 牌與 S 牌的考試結構、牌照權限、職業前景，附決策指南助你揀選最適合的地產代理資格考試。",
    h1: "EAQE 與 SQE 分別：E 牌 S 牌全面比較",
    summary: "全面比較 E 牌與 S 牌的考試結構、牌照權限及職業路徑，助你作出最佳選擇。",
    primaryKeyword: "EAQE SQE 分別",
  },
  {
    slug: "exam-format",
    title: "地產考試形式 — 題型、作答模式及時間分配詳解",
    description:
      "詳解地產代理考試形式：EAQE 紙筆考試及 SQE 紙筆／電腦考試的作答模式、MC 與個案分析題型解構、時間分配建議及考試當日流程。",
    h1: "地產考試形式詳解",
    summary: "拆解 MC 及個案分析題型、紙筆與電腦考試分別，附時間分配建議。",
    primaryKeyword: "地產考試形式",
  },
  {
    slug: "pass-requirements",
    title: "地產考試合格要求 — 合格分數、雙卷達標制及常見誤解",
    description:
      "詳解地產代理考試合格要求：EAQE 及 SQE 總分合格線、卷一卷二獨立達標制度、常見不合格情境分析及成績有效期，釐清常見誤解。",
    h1: "地產考試合格要求詳解",
    summary: "拆解雙卷獨立達標制、常見不合格情境及成績有效期。",
    primaryKeyword: "地產考試合格要求",
  },
  {
    slug: "result-check",
    title: "地產考試成績查詢 — 放榜時間、查閱方法及覆核申請",
    description:
      "地產代理考試成績查詢全攻略：EAQE 及 SQE 成績通知時間、查閱方法、覆核申請流程及成績有效期須知，考完試必讀。",
    h1: "地產考試成績查詢",
    summary: "了解放榜時間、成績通知書補發及覆核申請流程。",
    primaryKeyword: "地產考試成績查詢",
  },
  {
    slug: "self-study",
    title: "地產考試自修攻略 — 溫習方法、時間規劃及免費資源",
    description:
      "地產代理考試自修完整攻略：EAQE 及 SQE 自學溫習時間表、考試範圍溫習策略、免費官方資源整合及備考心得，助你自修一 take pass。",
    h1: "地產考試自修攻略",
    summary: "自修溫習時間表、各科策略及免費官方資源整合，助你高效備考。",
    primaryKeyword: "地產考試自修",
  },
  {
    slug: "mock-exam",
    title: "地產考試模擬試題 — 免費練習資源及備考策略",
    description:
      "整合地產代理考試官方及坊間模擬試題資源：EAA 免費網上模擬考試使用教學、EAQE 及 SQE 練習策略，助你熟悉題型提升合格機會。",
    h1: "地產考試模擬試題及練習資源",
    summary: "EAA 官方模擬考試教學、EAQE 及 SQE 練習策略整合。",
    primaryKeyword: "地產考試模擬試題",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
