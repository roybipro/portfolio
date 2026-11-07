"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Check, Code2,
  Github, Instagram, Linkedin, Menu, Moon, Send, Sparkles, Sun, X,
} from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Project = {
  name: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  kind: "Product" | "AI & learning";
  url: string;
  demo?: string;
  accent: string;
  symbol: string;
  number: string;
  updated: string;
};

const projects: Project[] = [
  {
    name: "careerlab",
    title: "A calmer way to build your career.",
    summary: "Applications, research, people, and deadlines — finally in one place.",
    description: "A private workspace for the whole search journey. Track jobs and research opportunities on a Kanban board, keep notes and contacts close, and see deadlines and activity from a focused dashboard. Includes a live demo.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    kind: "Product",
    url: "https://github.com/roybipro/careerlab",
    demo: "https://careerlab-opal.vercel.app",
    accent: "mint",
    symbol: "CL",
    number: "01",
    updated: "Updated Nov 7, 2026",
  },
  {
    name: "daamkhoj-price-comparison",
    title: "Know the price. Know the shop.",
    summary: "Compare online shop offers with trust signals made visible.",
    description: "A Bangladesh-focused shopping comparison experience with tolerant English, Bangla, and Banglish search, shareable comparisons, price trends, and a transparent trust score. Product listings and ratings are sample data today.",
    tags: ["TypeScript", "Search", "Data visualization", "Accessibility"],
    kind: "Product",
    url: "https://github.com/roybipro/daamkhoj-price-comparison",
    accent: "orange",
    symbol: "দাম",
    number: "02",
    updated: "Updated Nov 6, 2026",
  },
  {
    name: "fluentup",
    title: "Find your voice, one day at a time.",
    summary: "An English-learning companion built with Bengali learners in mind.",
    description: "A mobile app and API for guided English practice: structured CEFR and IELTS learning, AI conversation, vocabulary review, grammar feedback, and listening practice with offline support.",
    tags: ["React Native", "Expo", "Python", "FastAPI", "AI"],
    kind: "AI & learning",
    url: "https://github.com/roybipro/fluentup",
    accent: "violet",
    symbol: "Fluent",
    number: "03",
    updated: "Updated Nov 6, 2026",
  },
];

const skills = ["TypeScript", "React & Next.js", "Python", "FastAPI", "PostgreSQL", "C++", "Machine learning", "UI engineering"];
const navItems = [["About", "#about"], ["Work", "#work"], ["Writing", "#writing"], ["Contact", "#contact"]];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [filter, setFilter] = useState("All work");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const initialized = useRef(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const frame = window.requestAnimationFrame(() => {
      if (saved === "light" || saved === "dark") setTheme(saved);
    });
    const onScroll = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(range > 0 ? (window.scrollY / range) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      return;
    }
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const visibleProjects = projects.filter((project) => filter === "All work" || project.kind === filter);

  async function copyEmail() {
    await navigator.clipboard.writeText("roybipro896@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Roy Bipro home">RB<span>.</span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="availability" href="#contact"><span /> Available for opportunities</a>
          <button className="icon-button theme-button" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="icon-button menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> COMPUTER SCIENCE · BANGLADESH</p>
            <h1>Curious mind.<br /><span>Useful things.</span></h1>
            <p className="hero-lede">I’m Roy — a CS student who likes turning ambitious ideas into thoughtful, useful software.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="mailto:roybipro896@gmail.com">Let’s talk <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-footnote"><span className="tiny-dot" /> Currently building products, learning AI, and shipping one idea at a time.</div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" />
          <div className="portrait-card">
              <Image src={`${basePath}/images/my-photo.jpg`} alt="Roy Bipro" fill priority sizes="(max-width: 760px) 72vw, 390px" className="portrait-image" />
              <div className="portrait-grain" />
              <div className="portrait-label"><span>ROY BIPRO</span><small>Student · Builder · Curious human</small></div>
            </div>
            <div className="float-note note-top"><Sparkles size={14} /> idea → shipped</div>
            <div className="float-note note-bottom"><span className="status-pulse" /> building in public</div>
            <span className="portrait-index">01 — 03</span>
          </div>
          <a className="hero-scroll" href="#about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
        </section>

        <section className="intro-strip" id="about">
          <div className="section-wrap intro-grid">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <div><h2>I care about the details that make software feel <em>human.</em></h2><p className="intro-body">I’m studying Computer Science at American International University–Bangladesh. I like full-stack product work, practical AI, and the satisfying moment when a rough idea becomes something another person can use.</p>
              <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
            <div className="study-note"><span className="study-icon"><Code2 size={19} /></span><span><b>Currently</b><small>B.Sc. in Computer Science<br />AIUB · 2023–2027</small></span></div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> RECENTLY MADE</p><h2>Selected work<span className="accent-dot">.</span></h2><p className="section-subtitle">A few ideas I’ve been shaping into real products.</p></div>
            <a className="text-link github-link" href="https://github.com/roybipro?tab=repositories" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16} /></a>
          </div>
          <div className="filter-row" role="group" aria-label="Filter projects">
            {["All work", "Product", "AI & learning"].map((item) => <button key={item} aria-pressed={filter === item} className={filter === item ? "filter-chip active" : "filter-chip"} onClick={() => setFilter(item)}>{item}<span>{item === "All work" ? projects.length : projects.filter((project) => project.kind === item).length}</span></button>)}
          </div>
          <div className="project-list">
            {visibleProjects.map((project) => <article className={`project-card ${project.accent} ${expanded === project.name ? "expanded" : ""}`} key={project.name}>
              <div className="project-visual" aria-hidden="true"><div className="visual-grid" /><div className="visual-orb" /><span className="visual-logo">{project.symbol}</span><span className="visual-window"><i /><i /><i /></span><span className="visual-label">{project.name}</span></div>
              <div className="project-content"><div className="project-topline"><span className="project-number">{project.number} / SELECTED PROJECT</span><span className="project-updated">{project.updated}</span></div>
                <h3>{project.title}</h3><p className="project-summary">{project.summary}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {expanded === project.name && <div className="project-details"><p>{project.description}</p>{project.name === "careerlab" && <p className="demo-note">The first request to the free-tier demo may take a minute to wake up.</p>}{project.name === "daamkhoj-price-comparison" && <p className="demo-note">Prices and shop ratings are sample data, clearly marked in the app.</p>}</div>}
                <div className="project-actions"><button className="details-button" aria-expanded={expanded === project.name} onClick={() => setExpanded(expanded === project.name ? null : project.name)}>{expanded === project.name ? "Less about it" : "What I built"}<ArrowDownRight size={15} className={expanded === project.name ? "rotate-icon" : ""} /></button>{project.demo && <a className="project-visit" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}<a className="project-visit repo-link" href={project.url} target="_blank" rel="noreferrer">Source <Github size={15} /></a></div>
              </div>
            </article>)}
          </div>
        </section>

        <section className="writing-section">
          <div className="section-wrap writing-inner" id="writing"><div><p className="eyebrow"><span className="eyebrow-line" /> NOTES FROM THE JOURNEY</p><h2>Learning out loud.</h2><p>Short reflections on technology, student life, and the things I’m figuring out along the way.</p></div><a className="button button-ghost" href="https://roybipro.blogspot.com/" target="_blank" rel="noreferrer">Read my writing <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-kicker"><span className="status-pulse" /> OPEN TO OPPORTUNITIES</div>
          <h2>Have a good idea?<br /><span>Let’s make it real.</span></h2>
          <div className="contact-bottom"><a href="mailto:roybipro896@gmail.com" className="email-link">roybipro896@gmail.com <ArrowUpRight size={19} /></a><button className="copy-button" onClick={copyEmail}>{copied ? <><Check size={15} /> Copied</> : "Copy email"}</button><span className="contact-location">Based in Bangladesh · Open to the world</span></div>
          <div className="contact-decoration"><Send size={18} /></div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="wordmark" href="#top">RB<span>.</span></a><p>Designed with curiosity. Built with care.</p><div className="social-links"><a href="https://github.com/roybipro" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={17} /></a><a href="https://www.linkedin.com/in/roy-bipro/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={17} /></a><a href="https://www.instagram.com/bipro.raw/" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={17} /></a><a href="mailto:roybipro896@gmail.com" aria-label="Email"><Send size={16} /></a></div><span className="copyright">© {new Date().getFullYear()} Roy Bipro</span></footer>
    </>
  );
}
