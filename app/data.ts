export type PortfolioProject = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  tags: string[];
  features: string[];
  github: string;
  demo?: string;
  updated: string;
  thumbnail: "careerlab" | "daamkhoj" | "fluentup";
  stack: string[];
};

export const projects: PortfolioProject[] = [
  {
    slug: "careerlab",
    name: "CareerLab",
    subtitle: "Keep your next steps in one place.",
    description:
      "A private workspace for tracking job applications, research opportunities, contacts, deadlines, and reminders.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    features: [
      "Job and internship application tracking",
      "Research opportunity and project tracking",
      "Status boards, deadlines, and reminders",
      "Analytics and recent activity dashboard",
    ],
    github: "https://github.com/roybipro/careerlab",
    demo: "https://careerlab-opal.vercel.app",
    updated: "Updated Nov 7, 2026",
    thumbnail: "careerlab",
    stack: ["Next.js / TypeScript", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    slug: "daamkhoj",
    name: "DaamKhoj",
    subtitle: "Compare products and shop offers in Bangladesh.",
    description:
      "A product discovery and price comparison experience designed for English, Bangla, and Banglish search.",
    tags: ["TypeScript", "HTML", "CSS", "Search"],
    features: [
      "Product search across a curated catalogue",
      "Side-by-side shop price comparison",
      "Bangla, English, and Banglish search support",
      "Shareable comparisons and price trends",
    ],
    github: "https://github.com/roybipro/daamkhoj-price-comparison",
    updated: "Updated Nov 6, 2026",
    thumbnail: "daamkhoj",
    stack: ["TypeScript", "HTML / CSS", "Search and data visualization"],
  },
  {
    slug: "fluentup",
    name: "FluentUp",
    subtitle: "Practice English with a guided AI tutor.",
    description:
      "A mobile English-learning app and API for structured practice, IELTS preparation, and AI-assisted feedback.",
    tags: ["React Native", "Expo", "Python", "FastAPI", "AI"],
    features: [
      "CEFR-aligned lessons and IELTS preparation",
      "AI conversation practice",
      "Grammar feedback and vocabulary review",
      "Listening practice with offline support",
    ],
    github: "https://github.com/roybipro/fluentup",
    updated: "Updated Nov 6, 2026",
    thumbnail: "fluentup",
    stack: ["React Native / Expo", "Python / FastAPI", "AI services"],
  },
];

export const skills = [
  {
    category: "Programming languages",
    items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "REST APIs"],
  },
  {
    category: "AI & machine learning",
    items: ["XGBoost", "Large language models", "NLP", "RAG"],
  },
  {
    category: "Data & databases",
    items: ["PostgreSQL", "Tabular evaluation"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "Linux"],
  },
];

export const researchInterests = [
  "Natural Language Processing",
  "Large Language Models",
  "Machine Learning",
  "Retrieval-Augmented Generation",
  "AI for Healthcare",
  "Low-Resource Language AI",
  "Tabular Machine Learning",
];

export const benchmarkResults = [
  { dataset: "Adult Income", auc: 0.9291, f1: 0.711, accuracy: 0.8755 },
  { dataset: "German Credit", auc: 0.799, f1: 0.549, accuracy: 0.77 },
  { dataset: "Heart Disease", auc: 0.9513, f1: 0.8852, accuracy: 0.8852 },
];

export const ongoingResearch = [
  {
    title: "Temporal Graph Neural Network-Enhanced RAG",
    detail: "Time-aware multi-hop question answering over evolving knowledge.",
  },
  {
    title: "Bangla LLM hallucination detection",
    detail: "Exploring ways to identify unsupported answers in a low-resource language setting.",
  },
  {
    title: "Low-resource language model optimization",
    detail: "Research interest in making language models more useful under limited data and compute.",
  },
  {
    title: "AI applications in healthcare",
    detail: "Exploring responsible applications of machine learning in healthcare contexts.",
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
