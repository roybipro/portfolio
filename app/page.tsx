"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const projects = [
  {
    name: "CareerLab",
    repo: "careerlab",
    description: "A private workspace for tracking job applications, research opportunities, contacts, reminders, and deadlines. Includes status boards, analytics, and a live demo.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    visual: "project-visual-one",
    updated: "Updated Nov 7, 2026",
    demo: "https://careerlab-opal.vercel.app",
  },
  {
    name: "DaamKhoj",
    repo: "daamkhoj-price-comparison",
    description: "A Bangladesh-focused shop comparison experience with English, Bangla, and Banglish search, price trends, and transparent trust signals. Current prices and ratings are sample data.",
    tags: ["TypeScript", "Search", "Data visualization"],
    visual: "project-visual-two",
    updated: "Updated Nov 6, 2026",
  },
  {
    name: "FluentUp",
    repo: "fluentup",
    description: "An English-learning mobile app and API with structured CEFR and IELTS practice, AI conversation, vocabulary review, grammar feedback, and offline support.",
    tags: ["React Native", "Expo", "Python", "FastAPI", "AI"],
    visual: "project-visual-one",
    updated: "Updated Nov 6, 2026",
  },
];

const posts = [
  {
    title: "Top 7 AI Skills You Need to Learn in 2026 to Stay Ahead",
    url: "https://roybipro.blogspot.com/2026/03/top-7-ai-skills-you-need-to-learn-in.html",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC9_BG9OV4gxN2Iocr-xU5qLIrQsu86hgAk1AiwexnzwRik5IQTL3wkp2lfNSr4h-r3C3Iw-oxZsabSHFbq12U4jA3ES2gQVFs-fnajmPcc-_ejMvDAaJF2x6Tdr2xk6mq9ohfW4sjE10ZNxZGi9zLaCwEi1sIk5iLAS_pZv2jwTxmEcmLB8vHPG8avzuW/s960/7-Benefits-That-Highlight-The-Importance-Of-Soft-Skills-In-The-Workplace.png",
    alt: "AI skills blog cover",
    date: "March 22, 2026 | 07:42 AM",
    excerpt: "A look at the AI skills worth learning this year, and how to keep pace with a fast-changing field.",
  },
  {
    title: "How AI Is Changing Student Life: Smarter Learning in the Digital Age",
    url: "https://roybipro.blogspot.com/2026/03/how-ai-is-changing-student-life-smarter.html",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPT0GL36pg-3PYhRIY8yfUhB6tXIf50tU7a7cqGbR7QYckLZufObIqXszXWbiNSFmUDde579P5y_tEyvcqmTnmqnpgfe9xoopMbyfeT8EBw_P3OD8W5BbT6x-f1VbYu3yKvWLFnMA9R9KRDeMgH1RxGtTzoxc_vE-qUCn0wr3IemI3uysdkksuZKor5DMF/s960/1520135695087.jpeg",
    alt: "AI and student life blog cover",
    date: "March 22, 2026 | 07:38 AM",
    excerpt: "Practical examples of how AI tools can help students study, research, and organize everyday work.",
  },
  {
    title: "Will AI Replace Developers? A Realistic Look at the Future of Coding",
    url: "https://roybipro.blogspot.com/2026/03/will-ai-replace-developers-realistic.html",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgT0fYKn0AMRpynfhryPooh0S4hpjd6ZdI31Pb4a4opdRpz8u19ZdEzFoArf0Sg7LtM6F_iEW-miV3uft4MM-K1oApooAYgSCxM52eN6Q3ROC9Lal_li5BtMCWOyWMzIefwbs1HyfRjfActtzxEgP7ZJssZFCdp8i4yqt4_41j7ptzXW72zueX3D5adesWO/s960/AI-assisted-coding.png",
    alt: "AI and coding blog cover",
    date: "March 22, 2026 | 07:36 AM",
    excerpt: "What AI can automate today, where developers still matter, and why adapting to new tools is useful.",
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

const skills = [
  ["fa-brands fa-react icon-react", "ReactJS"], ["fa-brands fa-js icon-next", "NextJS"],
  ["fa-solid fa-code icon-typescript", "TypeScript"], ["fa-solid fa-wind icon-tailwind", "Tailwind CSS"],
  ["fa-solid fa-bolt icon-motion", "Motion"], ["fa-solid fa-layer-group icon-sanity", "Sanity"],
  ["fa-solid fa-cubes icon-contentful", "Contentful"], ["fa-brands fa-node-js icon-node", "NodeJS"],
  ["fa-solid fa-server icon-express", "ExpressJS"], ["fa-solid fa-database icon-postgres", "PostgreSQL"],
  ["fa-solid fa-leaf icon-mongo", "MongoDB"], ["fa-solid fa-gem icon-prisma", "Prisma"],
  ["fa-solid fa-circle-nodes icon-zustand", "Zustand"], ["fa-solid fa-shield-halved icon-zod", "Zod"],
  ["fa-solid fa-box-open icon-pnpm", "pnpm"], ["fa-solid fa-fire icon-bun", "Bun"],
  ["fa-brands fa-git-alt icon-git", "Git"], ["fa-brands fa-github icon-github", "GitHub"],
  ["fa-solid fa-cloud icon-vercel", "Vercel"], ["fa-brands fa-aws icon-aws", "AWS"],
  ["fa-brands fa-docker icon-docker", "Docker"], ["fa-solid fa-mobile-screen-button icon-expo", "Expo"],
  ["fa-solid fa-user-lock icon-clerk", "Clerk"], ["fa-brands fa-linux icon-linux", "Linux"],
];

const navItems = [
  ["Who am I?", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Blog", "blog"], ["Contact", "contact"],
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [blogIndex, setBlogIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const blogGridRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const maxBlogIndex = Math.max(0, posts.length - cardsPerView);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const frame = window.requestAnimationFrame(() => {
      if (saved === "light" || saved === "dark") setTheme(saved);
    });

    const getCardsPerView = () => window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 3;
    const updateCardsPerView = () => {
      setCardsPerView(getCardsPerView());
      setBlogIndex((index) => Math.min(index, Math.max(0, posts.length - getCardsPerView())));
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] });
    sections.forEach((section) => observer.observe(section));

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("click", closeOnOutsideClick);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateCardsPerView);
      document.removeEventListener("click", closeOnOutsideClick);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      return;
    }
    document.body.classList.toggle("light-theme", theme === "light");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function updateBlogCarousel(nextIndex: number) {
    const grid = blogGridRef.current;
    const firstCard = grid?.querySelector<HTMLElement>(".blog-card");
    if (!grid || !firstCard) return;
    const gap = Number.parseFloat(window.getComputedStyle(grid).gap) || 0;
    const offset = Math.max(0, Math.min(nextIndex, maxBlogIndex)) * (firstCard.getBoundingClientRect().width + gap);
    grid.style.transform = `translateX(-${offset}px)`;
    setBlogIndex(Math.max(0, Math.min(nextIndex, maxBlogIndex)));
  }

  useEffect(() => {
    const grid = blogGridRef.current;
    const firstCard = grid?.querySelector<HTMLElement>(".blog-card");
    if (!grid || !firstCard) return;
    const gap = Number.parseFloat(window.getComputedStyle(grid).gap) || 0;
    grid.style.transform = `translateX(-${blogIndex * (firstCard.getBoundingClientRect().width + gap)}px)`;
  }, [blogIndex, cardsPerView]);

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
    const valid = fields.map(validateField).every(Boolean);
    if (!valid) {
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
      <header className="navbar">
        <div className="navbar-inner">
          <div className="logo"><a href="#top">RoyBipro<span>.dev</span></a></div>
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
            <p className="intro">Hello my name is</p>
            <h1>Roy Bipro</h1>
            <h2>Undergraduate CS student</h2>
            <p className="description">I’m a Computer Science student who loves building things with code. My main interests are Artificial Intelligence, Machine Learning, and Web Development. I enjoy learning new technologies, experimenting with ideas, and creating projects that solve real-world problems.</p>
            <a className="btn" href="mailto:roybipro896@gmail.com">Contact me!</a>
          </div>
          <div className="hero-right">
            <Image className="avatar" src={`${basePath}/images/avatar.png`} alt="Roy Bipro avatar" width={490} height={735} priority />
          </div>
          <div className="social" aria-label="Social links">
            <a href="https://github.com/roybipro" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa-brands fa-github" aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/roy-bipro/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" aria-hidden="true" /></a>
            <a href="https://dev.to/roybipro" target="_blank" rel="noreferrer" aria-label="Dev.to"><i className="fa-brands fa-dev" aria-hidden="true" /></a>
            <a href="https://www.instagram.com/bipro.raw/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" aria-hidden="true" /></a>
          </div>
          <a className="scroll-indicator" href="#about"><span className="scroll-label">Scroll</span><span className="scroll-mouse" aria-hidden="true"><span className="scroll-wheel" /></span><i className="fa-solid fa-chevron-down" aria-hidden="true" /></a>
        </section>

        <section id="about" aria-labelledby="about-title">
          <h2 className="section-title" id="about-title">Who am I?</h2>
          <div className="about-container">
            <div className="about-left"><Image src={`${basePath}/images/my-photo.jpg`} alt="Roy Bipro" className="about-image" width={320} height={400} /></div>
            <div className="about-right">
              <p className="about-description">I am a Computer Science student with a strong foundation in programming and problem-solving. I have developed skills in data structures and algorithms, web development, and Python programming. Alongside my academic journey, I am actively exploring artificial intelligence and machine learning, building practical knowledge through continuous learning and hands-on projects. My education and self-driven learning approach are helping me shape a solid foundation for a future career in technology.</p>
              <p className="about-intro">Here is my educational background.</p>
              <div className="education-item"><h3>B.Sc (Hons) in Computer Science</h3><p className="education-meta">American International University - Bangladesh (AIUB) | 2023-3 ~ 2027-1</p><ul><li>Studied computer science</li><li>CGPA: 3.5</li></ul></div>
              <div className="education-item"><h3>HSC in Science</h3><p className="education-meta">Gaokhali School and College | 2020 ~ 2022</p><ul><li>Studied modules in Science</li><li>Passed HSC with overall Merit GPA: 5.00</li></ul></div>
            </div>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-title">
          <div className="skills-shell">
            <p className="skills-kicker">MY SKILLSET</p>
            <h2 id="skills-title" className="skills-title">The Magic <span>Behind</span></h2>
            <div className="skills-grid" role="list" aria-label="Technology skill badges">
              {skills.map(([icon, label]) => <span className="skill-chip" role="listitem" key={label}><i className={icon} aria-hidden="true" />{label}</span>)}
            </div>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title" className="section-title">Featured Projects</h2>
          <p className="projects-subtitle">&quot;Talk is cheap. Show me the code&quot;? I got you.</p>
          <p className="projects-subtitle projects-subtitle-second">Here is some of my recent work you should not miss.</p>
          <div className="projects-grid">
            {projects.map((project) => <article className="project-card" key={project.repo}>
              <div className={`project-visual ${project.visual}`} role="img" aria-label={`${project.name} project preview`} />
              <div className="project-info-row"><h3>{project.name}</h3><div className="project-meta-icons">
                {project.demo && <a className="project-demo-link" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live demo`} title="Live demo"><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a>}
                <a href={`https://github.com/roybipro/${project.repo}`} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`} title="GitHub repository"><i className="fa-brands fa-github" aria-hidden="true" /></a>
                <button className="project-details-toggle" type="button" aria-expanded={expandedProject === project.repo} aria-label={`${expandedProject === project.repo ? "Hide" : "Show"} details for ${project.name}`} onClick={() => setExpandedProject(expandedProject === project.repo ? null : project.repo)}><i className={`fa-solid ${expandedProject === project.repo ? "fa-chevron-up" : "fa-chevron-down"}`} aria-hidden="true" /></button>
              </div></div>
              <p className="project-description">{project.description}</p>
              {expandedProject === project.repo && <div className="project-extra"><p>{project.updated}{project.repo === "daamkhoj-price-comparison" ? " · Current prices and trust values are sample data." : " · View the source for implementation details."}</p></div>}
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>)}
          </div>
        </section>

        <section id="blog" aria-labelledby="blog-title">
          <h2 id="blog-title" className="section-title">Blog</h2>
          <p className="blog-subtitle">I write blog posts about what I have done and what I am doing as a documenting practice. Here are some of my recent blog posts.</p>
          <div className="blog-carousel-shell">
            <button className="blog-arrow blog-arrow-left" aria-label="Previous posts" type="button" disabled={blogIndex === 0} onClick={() => updateBlogCarousel(blogIndex - 1)}><i className="fa-solid fa-chevron-left" aria-hidden="true" /></button>
            <div className="blog-viewport"><div className="blog-grid" ref={blogGridRef}>
              {posts.map((post) => <article className="blog-card" key={post.url}>
                <a className="blog-thumb-link" href={post.url} target="_blank" rel="noreferrer" aria-label={`Open blog post: ${post.title}`}><Image className="blog-thumb" src={post.image} alt={post.alt} width={960} height={540} unoptimized loading="lazy" /></a>
                <h3><a href={post.url} target="_blank" rel="noreferrer">{post.title}</a></h3>
                <p className="blog-meta"><i className="fa-regular fa-calendar" aria-hidden="true" />{post.date}</p>
                <p className="blog-excerpt">{post.excerpt}</p>
              </article>)}
            </div></div>
            <button className="blog-arrow blog-arrow-right" aria-label="Next posts" type="button" disabled={blogIndex >= maxBlogIndex} onClick={() => updateBlogCarousel(blogIndex + 1)}><i className="fa-solid fa-chevron-right" aria-hidden="true" /></button>
          </div>
          <div className="blog-dots" aria-label="Choose a blog page">{Array.from({ length: maxBlogIndex + 1 }, (_, index) => <button key={index} type="button" className={index === blogIndex ? "active" : ""} aria-label={`Show blog page ${index + 1}`} aria-current={index === blogIndex ? "page" : undefined} onClick={() => updateBlogCarousel(index)} />)}</div>
          <a className="blog-read-all" href="https://roybipro.blogspot.com/" target="_blank" rel="noreferrer">Read all blog posts <i className="fa-solid fa-arrow-right" aria-hidden="true" /></a>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <div className="contact-shell">
            <h2 id="contact-title" className="contact-title"><span>LET&apos;S WORK</span><span className="contact-title-muted">TOGETHER</span></h2>
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
