export type PortfolioProject = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  tags: string[];
  features: string[];
  github: string;
  demo?: string;
  thumbnail: "careerlab" | "fluentup" | "fake-news" | "faculty-data";
  stack: string[];
};

export const projects: PortfolioProject[] = [
  {
    slug: "fluentup",
    name: "FluentUp",
    subtitle: "AI-powered English learning for Bengali speakers.",
    description: "A mobile learning app that assesses a learner's starting point, guides practice, and tracks progress with an AI tutor.",
    tags: ["React Native", "TypeScript", "FastAPI", "PostgreSQL", "Gemini API"],
    features: [
      "Five-question placement assessment recommends a CEFR or IELTS path",
      "Six levelled paths, lesson prerequisites, quiz types, and a mistake bank",
      "SM-2 spaced repetition schedules vocabulary review from recall performance",
      "Gemini conversation, grammar feedback, and IELTS answer evaluation with rule-based fallbacks",
      "Progress dashboard for XP, streaks, lessons, and achievements",
    ],
    github: "https://github.com/roybipro/fluentup",
    thumbnail: "fluentup",
    stack: ["React Native / Expo", "TypeScript", "FastAPI", "PostgreSQL", "Gemini API"],
  },
  {
    slug: "careerlab",
    name: "CareerLab",
    subtitle: "Career and research opportunities in one workspace.",
    description: "A full-stack tracker for job applications, research opportunities, and research projects.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    features: [
      "Kanban boards, deadlines, and reminders for applications and research work",
      "Status charts and monthly application trends calculated from the database",
      "239 backend tests against PostgreSQL and Playwright end-to-end coverage",
    ],
    github: "https://github.com/roybipro/careerlab",
    demo: "https://careerlab-opal.vercel.app",
    thumbnail: "careerlab",
    stack: ["Next.js / TypeScript", "FastAPI", "PostgreSQL", "Playwright"],
  },
  {
    slug: "bangla-fake-news-detector",
    name: "Bangla Fake News Detector",
    subtitle: "Bangla news classification with fine-tuned DistilBERT.",
    description: "A text classification project that distinguishes authentic and fake Bangla news using headline and article text.",
    tags: ["Python", "Transformers", "PyTorch", "Streamlit"],
    features: [
      "Fine-tuned multilingual DistilBERT on combined headline and article text",
      "Undersampled the imbalanced source dataset for balanced training",
      "Evaluated on held-out data using accuracy, precision, recall, and F1",
      "Interactive single-article prediction interface built with Streamlit",
    ],
    github: "https://github.com/roybipro/fake-news-project",
    thumbnail: "fake-news",
    stack: ["Python", "Hugging Face Transformers", "PyTorch", "Streamlit"],
  },
  {
    slug: "aiub-faculty-data-collector",
    name: "AIUB Faculty Data Collector",
    subtitle: "Regex-based extraction and search for NLP coursework.",
    description: "A Python information-retrieval project that collects faculty details and indexes research-interest text.",
    tags: ["Python", "NLP", "Regular expressions", "Information retrieval"],
    features: [
      "Extracted names, emails, and room numbers for 197 faculty members",
      "Located the JSON feed behind a JavaScript-rendered page",
      "Built stemming, an inverted index of 641 stems, and a regex query tool",
    ],
    github: "https://github.com/roybipro/NLP-Faculty-Data-Scraper-AIUB",
    thumbnail: "faculty-data",
    stack: ["Python", "Regular expressions", "Stemming", "Inverted index"],
  },
];

export const skills = [
  { category: "Programming", items: ["Python", "TypeScript", "JavaScript", "SQL", "C++"] },
  { category: "Frontend & mobile", items: ["Next.js", "React Native", "Expo", "Streamlit"] },
  { category: "Backend & data", items: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Pandas", "NumPy"] },
  { category: "Machine learning & NLP", items: ["Scikit-learn", "Hugging Face Transformers", "PyTorch", "DistilBERT", "LSTM"] },
  { category: "Modeling & analytics", items: ["SVR", "ARIMA", "Prophet", "Recharts", "Classification metrics"] },
  { category: "Tools", items: ["Docker", "Git", "GitHub Actions", "pytest", "Playwright"] },
];

export const publications = [
  {
    title: "Development of a Cloud-Linked Low-Cost Machine Learning-Enabled Weather Monitoring System",
    venue: "2026 IEEE Region 10 Symposium (TENSYMP 2026)",
    url: "https://ieeexplore.ieee.org/document/11704037",
    linkLabel: "IEEE Xplore",
  },
  {
    title: "AI for Stock Market Forecasting in Emerging Economies",
    venue: "7th International Conference on Integrated Sciences (ICIS 2025) · Dhaka, Bangladesh",
    url: "https://aiub.edu/Files/student-research/AI_for_Stock_Market_Forecasting_in_Emerging_Economies.html",
    linkLabel: "AIUB research page",
  },
];

export const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Research", "research"],
  ["Blog", "blog"],
  ["Contact", "contact"],
];
