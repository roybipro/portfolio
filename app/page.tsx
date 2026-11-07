"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import ParticleNetwork from "./components/ParticleNetwork";
import { navItems, projects, publications, skills } from "./data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const posts = [
  {
    title: "Top 7 AI Skills You Need to Learn in 2026 to Stay Ahead",
    url: "https://roybipro.blogspot.com/2026/03/top-7-ai-skills-you-need-to-learn-in.html",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC9_BG9OV4gxN2Iocr-xU5qLIrQsu86hgAk1AiwexnzwRik5IQTL3wkp2lfNSr4h-r3C3Iw-oxZsabSHFbq12U4jA3ES2gQVFs-fnajmPcc-_ejMvDAaJF2x6Tdr2xk6mq9ohfW4sjE10ZNxZGi9zLaCwEi1sIk5iLAS_pZv2jwTxmEcmLB8vHPG8avzuW/s960/7-Benefits-That-Highlight-The-Importance-Of-Soft-Skills-In-The-Workplace.png",
    alt: "AI skills blog cover",
    date: "March 22, 2026 | 07:42 AM",
    excerpt: "A look at AI skills worth learning this year, and how to keep pace with a fast-changing field.",
  },
  {
    title: "How AI Is Changing Student Life: Smarter Learning in the Digital Age",
    url: "https://roybipro.blogspot.com/2026/03/how-ai-is-changing-student-life-smarter.html",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPT0GL36pg-3PYhRIY8yfUhB6tXIf50tU7a7cqGbR7QYckLZufObIqXszXWbiNSFmUDde579P5y_tEyvcqmTnmqnpgfe9xoopMbyfeT8EBw_P3OD8W5BbT6x-f1VbYu3yKvWLFnMA9R9KRDeMgH1RxGtTzoxc_vE-qUCn0wr3IemI3uysdkksuZKor5DMF/s960/1520135695087.jpeg",
    alt: "AI and student life blog cover",
    date: "March 22, 2026 | 07:38 AM",
    excerpt: "Practical examples of how AI tools can help students study, research, and organize their work.",
  },
  {
    title: "Will AI Replace Developers? A Realistic Look at the Future of Coding",
    url: "https://roybipro.blogspot.com/2026/03/will-ai-replace-developers-realistic.html",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgT0fYKn0AMRpynfhryPooh0S4hpjd6ZdI31Pb4a4opdRpz8u19ZdEzFoArf0Sg7LtM6F_iEW-miV3uft4MM-K1oApooAYgSCxM52eN6Q3ROC9Lal_li5BtMCWOyWMzIefwbs1HyfRjfActtzxEgP7ZJssZFCdp8i4yqt4_41j7ptzXW72zueX3D5adesWO/s960/AI-assisted-coding.png",
    alt: "AI and coding blog cover",
    date: "March 22, 2026 | 07:36 AM",
    excerpt: "What AI can automate today, where developers still matter, and why adapting to new tools helps.",
  },
  {
    title: "The Future of Artificial Intelligence: From Past to Possibilities",
    url: "https://roybipro.blogspot.com/2026/03/future-of-artificial-intelligence-from.html",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfb3bmIYkCfYlZbd6JE8xQJdMoqjZWENC8mDhNksCPTVtqy2u-XqaIeMvbErIuEPYEhUo6285OGqc5Qw2JRZ1fhAjUOi-ehUOKjb_XnVQNqKv4FkJozceqeDzu_EhinfoyBL6_BIQ6NnM5ys1aGiI-6dDZqZO9fX7j5kdI1Z19fodMJc3FGVHgqAv_4kG-/s960/The-Future-of-AI-and-Its-Impact-on-Humanity.webp",
    alt: "The future of AI blog cover",
    date: "March 22, 2026 | 07:28 AM",
    excerpt: "A tour through AI’s evolution and the possibilities it may open up in the future.",
  },
];

function getCardsPerView() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  return 3;
}

function ProjectThumbnail({ kind }: { kind: (typeof projects)[number]["thumbnail"] }) {
  if (kind === "careerlab") {
    return (
      <div className="project-visual project-screenshot">
        <Image
          src={`${basePath}/images/projects/careerlab-dashboard.png`}
          alt="CareerLab dashboard with sample demo records"
          fill
          sizes="(max-width: 768px) 90vw, 560px"
          className="project-thumbnail-image"
          loading="lazy"
        />
        <span className="thumbnail-caption">Repository screenshot · seeded demo data</span>
      </div>
    );
  }

  if (kind === "fluentup") {
    return (
      <div className="project-visual fluent-preview" role="img" aria-label="Illustrative FluentUp English practice screen">
        <div className="fluent-phone">
          <div className="fluent-topline"><span>9:41</span><span>● ● ▰</span></div>
          <div className="fluent-app-label">FLUENTUP <span>DAILY PRACTICE</span></div>
          <div className="fluent-app-card">
            <span className="fluent-orbit" aria-hidden="true"><i /></span>
            <strong>Practice speaking</strong>
            <small>Build confidence, one conversation at a time.</small>
            <span className="fluent-start">Start a conversation <i className="fa-solid fa-arrow-right" aria-hidden="true" /></span>
          </div>
          <div className="fluent-bottom-nav"><span>Learn</span><span>Practice</span><span>Vocabulary</span></div>
        </div>
        <span className="thumbnail-caption">Illustrative preview · not an app screenshot</span>
      </div>
    );
  }

  if (kind === "fake-news") {
    return (
      <div className="project-visual fake-news-preview" role="img" aria-label="Illustrative Bangla news classification preview">
        <div className="preview-window-bar"><i /><i /><i /><span>Bangla news classifier</span></div>
        <div className="news-preview-body">
          <span className="preview-eyebrow">ARTICLE CHECK</span>
          <strong>সংবাদ শিরোনাম</strong>
          <span className="news-preview-line" /><span className="news-preview-line short" />
          <div className="news-prediction"><span>MODEL OUTPUT</span><strong>Prediction ready</strong></div>
        </div>
        <span className="thumbnail-caption">Illustrative preview · not an app screenshot</span>
      </div>
    );
  }

  return (
    <div className="project-visual faculty-preview" role="img" aria-label="Illustrative faculty search and index preview">
      <div className="preview-window-bar"><i /><i /><i /><span>Faculty research index</span></div>
      <div className="faculty-preview-body">
        <span className="preview-eyebrow">SEARCH THE INDEX</span>
        <div className="faculty-search"><i className="fa-solid fa-magnifying-glass" aria-hidden="true" /><span>research interests</span></div>
        <div className="faculty-index-row"><strong>stemming</strong><span>641 indexed stems</span></div>
        <div className="faculty-index-row"><strong>regex query</strong><span>faculty records</span></div>
      </div>
      <span className="thumbnail-caption">Illustrative preview · no personal records shown</span>
    </div>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [blogIndex, setBlogIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const blogGridRef = useRef<HTMLDivElement>(null);
  const themeInitialized = useRef(false);
  const maxBlogIndex = Math.max(0, posts.length - cardsPerView);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const frame = window.requestAnimationFrame(() => {
      if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    });

    const updateCards = () => {
      const nextCardsPerView = getCardsPerView();
      setCardsPerView(nextCardsPerView);
      setBlogIndex((index) => Math.min(index, Math.max(0, posts.length - nextCardsPerView)));
    };
    updateCards();
    window.addEventListener("resize", updateCards, { passive: true });

    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-23% 0px -62% 0px", threshold: [0, 0.15, 0.35] });
    document.querySelectorAll<HTMLElement>("main section[id]").forEach((section) => sectionObserver.observe(section));

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });
    document.querySelectorAll<HTMLElement>(".scroll-reveal").forEach((element) => revealObserver.observe(element));
    document.body.classList.add("reveal-ready");

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("click", closeOnOutsideClick);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateCards);
      document.removeEventListener("click", closeOnOutsideClick);
      sectionObserver.disconnect();
      revealObserver.disconnect();
      document.body.classList.remove("reveal-ready");
    };
  }, []);

  useEffect(() => {
    if (!themeInitialized.current) {
      themeInitialized.current = true;
      return;
    }
    document.body.classList.toggle("light-theme", theme === "light");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const grid = blogGridRef.current;
    const firstCard = grid?.querySelector<HTMLElement>(".blog-card");
    if (!grid || !firstCard) return;
    const gap = Number.parseFloat(window.getComputedStyle(grid).gap) || 0;
    grid.style.transform = `translateX(-${blogIndex * (firstCard.getBoundingClientRect().width + gap)}px)`;
  }, [blogIndex, cardsPerView]);

  function moveBlogCarousel(index: number) {
    setBlogIndex(Math.max(0, Math.min(index, maxBlogIndex)));
  }

  function validateField(field: HTMLInputElement | HTMLTextAreaElement) {
    const value = field.value.trim();
    let error = "";
    if (field.name === "name" && value.length < 2) error = "Name must be at least 2 characters.";
    if (field.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) error = "Enter a valid email address.";
    if (field.name === "message" && value.length < 20) error = "Message should be at least 20 characters.";
    setFormErrors((previous) => ({ ...previous, [field.name]: error }));
    return error === "";
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea"));
    if (!fields.map(validateField).every(Boolean)) {
      setFormStatus("Please fix the highlighted fields.");
      return;
    }
    const values = new FormData(form);
    const subject = `Portfolio message from ${String(values.get("name"))}`;
    const body = `From: ${String(values.get("name"))} (${String(values.get("email"))})\n\n${String(values.get("message"))}`;
    setFormStatus("Opening your email app to send the message…");
    window.location.href = `mailto:roybipro896@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <ParticleNetwork />
      <header className="navbar">
        <div className="navbar-inner">
          <div className="logo"><a href="#top" aria-label="Roy Bipro home">RoyBipro<span>.dev</span></a></div>
          <nav className="main-nav" aria-label="Primary" ref={navRef}>
            <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-controls="primary-menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
              <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} aria-hidden="true" />
            </button>
            <div className={`nav-links${menuOpen ? " open" : ""}`} id="primary-menu">
              {navItems.map(([label, id]) => <a className={activeSection === id ? "active" : ""} href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}
            </div>
            <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`} aria-hidden="true" />
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-left">
            <p className="intro hero-enter hero-enter-one">Hello, my name is</p>
            <h1 className="hero-enter hero-enter-two">Roy Bipro</h1>
            <h2 className="hero-enter hero-enter-three">Full-Stack Developer<br /><span className="hero-role-secondary">AI/ML Researcher</span></h2>
            <p className="description hero-enter hero-enter-four">I build practical software products and explore intelligent solutions through machine learning, natural language processing, and modern web technologies.</p>
            <div className="hero-ctas hero-enter hero-enter-five">
              <a className="btn" href="#projects">View projects <i className="fa-solid fa-arrow-down-right-from-square" aria-hidden="true" /></a>
              <a className="btn btn-outline" href="#research">Research &amp; publications <i className="fa-solid fa-arrow-down" aria-hidden="true" /></a>
              <a className="btn btn-outline cv-request" href={`${basePath}/files/Bipro_Roy_CV.pdf`} download="Bipro_Roy_CV.pdf">Download CV <i className="fa-solid fa-download" aria-hidden="true" /></a>
            </div>
            <div className="hero-links hero-enter hero-enter-six">
              <a href="https://github.com/roybipro" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" aria-hidden="true" /> GitHub <i className="fa-solid fa-arrow-up-right-from-square link-arrow" aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/roy-bipro/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin" aria-hidden="true" /> LinkedIn <i className="fa-solid fa-arrow-up-right-from-square link-arrow" aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-right hero-enter hero-enter-four">
            <Image className="avatar" src={`${basePath}/images/avatar.png`} alt="Roy Bipro avatar" width={490} height={735} priority />
            <div className="hero-image-note"><span className="tiny-pulse" /> Building software · exploring intelligent systems</div>
          </div>
          <div className="social" aria-label="Social links">
            <a href="https://github.com/roybipro" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa-brands fa-github" aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/roy-bipro/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" aria-hidden="true" /></a>
            <a href="https://dev.to/roybipro" target="_blank" rel="noreferrer" aria-label="Dev.to"><i className="fa-brands fa-dev" aria-hidden="true" /></a>
            <a href="https://www.instagram.com/bipro.raw/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" aria-hidden="true" /></a>
          </div>
          <a className="scroll-indicator" href="#about"><span className="scroll-label">Scroll</span><span className="scroll-mouse" aria-hidden="true"><span className="scroll-wheel" /></span><i className="fa-solid fa-chevron-down" aria-hidden="true" /></a>
        </section>

        <section id="about" aria-labelledby="about-title" className="scroll-reveal">
          <h2 className="section-title" id="about-title">Who am I?</h2>
          <div className="about-container">
            <div className="about-left"><Image src={`${basePath}/images/my-photo.jpg`} alt="Roy Bipro" className="about-image" width={320} height={400} /></div>
            <div className="about-right">
              <p className="about-description">I’m Roy Bipro, an undergraduate Computer Science student at American International University-Bangladesh (AIUB). I enjoy building full-stack software, exploring artificial intelligence and machine learning, and learning how research can turn into useful systems. My long-term goal is to pursue advanced research in NLP and intelligent systems.</p>
              <p className="about-intro">Education &amp; achievements</p>
              <div className="education-item">
                <h3>B.Sc. in Computer Science</h3>
                <p className="education-meta">American International University-Bangladesh (AIUB) · 2023–expected April 2027</p>
                <ul><li>CGPA: 3.40 / 4.00 · final semester</li><li>Undergraduate study in Computer Science and Engineering</li></ul>
              </div>
              <div className="education-item">
                <h3>HSC in Science</h3>
                <p className="education-meta">Gaokhali School and College · 2022</p>
                <ul><li>GPA: 5.00 / 5.00</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-title" className="scroll-reveal">
          <div className="skills-shell">
            <p className="skills-kicker">TOOLS I USE</p>
            <h2 id="skills-title" className="skills-title">The Magic <span>Behind</span></h2>
            <p className="skills-intro">A practical toolkit shaped by the products I build and the research questions I explore.</p>
            <div className="skills-categories">
              {skills.map((group) => <article className="skill-category" key={group.category}>
                <h3>{group.category}</h3>
                <div className="skills-grid" role="list" aria-label={`${group.category} skills`}>
                  {group.items.map((skill) => <span className="skill-chip" role="listitem" key={skill}>{skill}</span>)}
                </div>
              </article>)}
            </div>
            <p className="skills-note">Skills shown here are connected to the projects and research described on this page.</p>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title" className="scroll-reveal">
          <h2 id="projects-title" className="section-title">Selected Projects</h2>
          <p className="projects-subtitle">Real tools for useful problems, shaped by curiosity and hands-on work.</p>
          <p className="projects-subtitle projects-subtitle-second">Explore a project for its features and engineering choices.</p>
          <div className="projects-grid">
            {projects.map((project, index) => <article className="project-card" key={project.slug}>
              <ProjectThumbnail kind={project.thumbnail} />
              <div className="project-info-row">
                <h3>{project.name}</h3>
                <div className="project-meta-icons">
                  {project.demo && <a className="project-demo-link" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live demo`} title="Live demo"><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a>}
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`} title="GitHub repository"><i className="fa-brands fa-github" aria-hidden="true" /></a>
                </div>
              </div>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <details className="project-case-study">
                <summary>Project details <i className="fa-solid fa-chevron-down" aria-hidden="true" /></summary>
                <div className="case-study-body">
                  <p>{project.description}</p>
                  <h4>What it includes</h4>
                  <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <p className="case-stack"><strong>Stack:</strong> {project.stack.join(" · ")}</p>
                </div>
              </details>
              {index === 0 && <span className="project-number" aria-hidden="true">01</span>}
            </article>)}
          </div>
        </section>

        <section id="research" aria-labelledby="research-title" className="research-section scroll-reveal">
          <h2 id="research-title" className="section-title">Research &amp; Publications</h2>
          <div className="publication-list">
            {publications.map((publication) => <article className="publication-item" key={publication.title}>
              <h3>{publication.title}</h3>
              <p>{publication.venue}</p>
              <a href={publication.url} target="_blank" rel="noreferrer">{publication.linkLabel} <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a>
            </article>)}
          </div>
        </section>

        <section id="blog" aria-labelledby="blog-title" className="scroll-reveal">
          <h2 id="blog-title" className="section-title">Blog</h2>
          <p className="blog-subtitle">I write about what I have done and what I am learning. Here are some recent posts.</p>
          <div className="blog-carousel-shell">
            <button className="blog-arrow blog-arrow-left" aria-label="Previous posts" type="button" disabled={blogIndex === 0} onClick={() => moveBlogCarousel(blogIndex - 1)}><i className="fa-solid fa-chevron-left" aria-hidden="true" /></button>
            <div className="blog-viewport"><div className="blog-grid" ref={blogGridRef}>
              {posts.map((post) => <article className="blog-card" key={post.url}>
                <a className="blog-thumb-link" href={post.url} target="_blank" rel="noreferrer" aria-label={`Open blog post: ${post.title}`}><Image className="blog-thumb" src={post.image} alt={post.alt} width={960} height={540} unoptimized loading="lazy" /></a>
                <h3><a href={post.url} target="_blank" rel="noreferrer">{post.title}</a></h3>
                <p className="blog-meta"><i className="fa-regular fa-calendar" aria-hidden="true" />{post.date}</p>
                <p className="blog-excerpt">{post.excerpt}</p>
              </article>)}
            </div></div>
            <button className="blog-arrow blog-arrow-right" aria-label="Next posts" type="button" disabled={blogIndex >= maxBlogIndex} onClick={() => moveBlogCarousel(blogIndex + 1)}><i className="fa-solid fa-chevron-right" aria-hidden="true" /></button>
          </div>
          <div className="blog-dots" aria-label="Choose a blog page">{Array.from({ length: maxBlogIndex + 1 }, (_, index) => <button key={index} type="button" className={index === blogIndex ? "active" : ""} aria-label={`Show blog page ${index + 1}`} aria-current={index === blogIndex ? "page" : undefined} onClick={() => moveBlogCarousel(index)} />)}</div>
          <a className="blog-read-all" href="https://roybipro.blogspot.com/" target="_blank" rel="noreferrer">Read all blog posts <i className="fa-solid fa-arrow-right" aria-hidden="true" /></a>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="scroll-reveal">
          <div className="contact-shell">
            <h2 id="contact-title" className="contact-title"><span>LET&apos;S WORK</span><span className="contact-title-muted">TOGETHER</span></h2>
            <p className="contact-intro">Have a project, research question, or opportunity in mind? I’d be glad to hear from you.</p>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-row">
                <div className="contact-field"><label htmlFor="contact-name">Name</label><input id="contact-name" type="text" name="name" placeholder="Your Name" required aria-invalid={Boolean(formErrors.name)} onBlur={(event) => validateField(event.currentTarget)} onChange={(event) => { if (formErrors.name) validateField(event.currentTarget); }} />{formErrors.name && <p className="contact-error" role="alert">{formErrors.name}</p>}</div>
                <div className="contact-field"><label htmlFor="contact-email">Email</label><input id="contact-email" type="email" name="email" placeholder="Your@email.com" required aria-invalid={Boolean(formErrors.email)} onBlur={(event) => validateField(event.currentTarget)} onChange={(event) => { if (formErrors.email) validateField(event.currentTarget); }} />{formErrors.email && <p className="contact-error" role="alert">{formErrors.email}</p>}</div>
              </div>
              <div className="contact-field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={5} placeholder="Message" required aria-invalid={Boolean(formErrors.message)} onBlur={(event) => validateField(event.currentTarget)} onChange={(event) => { if (formErrors.message) validateField(event.currentTarget); }} />{formErrors.message && <p className="contact-error" role="alert">{formErrors.message}</p>}</div>
              <button className="contact-submit" type="submit">Open email app</button>
              <p className="contact-form-status" aria-live="polite">{formStatus}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-inner">
        <p className="footer-brand">RoyBipro<span>.dev</span></p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Roy Bipro. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/roybipro" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa-brands fa-github" aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/roy-bipro/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" aria-hidden="true" /></a>
          <a href="mailto:roybipro896@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope" aria-hidden="true" /></a>
        </div>
      </div></footer>
    </>
  );
}
