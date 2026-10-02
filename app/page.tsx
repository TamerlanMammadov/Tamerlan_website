"use client";

import { useState } from "react";
import Hero from "./Hero";
import Chrome from "./Chrome";

const projects = [
  {
    title: "International Chovken Federation",
    category: "Production Website",
    description:
      "Built and maintained the federation website, including front-end and back-end functionality, content management, and user-facing registration workflows.",
    technologies: ["HTML", "CSS", "JavaScript", "CMS", "Backend"],
    link: "https://icfed.org",
  },
  {
    title: "BBG Energy",
    category: "Business Website",
    description:
      "Developed a responsive business website focused on presenting company information, services, and content through a clean web interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://bbgenergy.com",
  },
  {
    title: "Urtas Industry",
    category: "Business Website",
    description:
      "Created and maintained a professional company website with responsive layouts and structured business content.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://urtasindustry.com",
  },
  {
    title: "Eltra",
    category: "Business Website",
    description:
      "Developed a responsive website with a clean interface and user-friendly navigation for a business client.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://eltra.az",
  },
  {
    title: "Proteam Temizlik",
    category: "Client Website",
    description:
      "Delivered a production business website for a cleaning-services client, translating requirements into a responsive web presence.",
    technologies: ["Web Development", "Responsive Design"],
    link: "https://proteamtemizlik.com.tr",
  },
  {
    title: "Naftalan Central",
    category: "Client Website",
    description:
      "Developed a production website as part of a portfolio of freelance and client web projects.",
    technologies: ["Web Development", "Responsive Design"],
    link: "https://naftalancentral.az",
  },
  {
    title: "Vent.az",
    category: "Client Website",
    description:
      "Built and maintained a professional website as part of independent web-development work for business clients.",
    technologies: ["Web Development", "Responsive Design"],
    link: "https://vent.az",
  },
];

const skillGroups = [
  {
    title: "Cybersecurity",
    skills: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Web Security",
      "Network Security",
      "CTF Labs",
      "Burp Suite",
      "Kali Linux",
    ],
  },
  {
    title: "Systems & Networking",
    skills: [
      "Linux Administration",
      "Windows",
      "TCP/IP",
      "DNS",
      "DHCP",
      "Subnetting",
      "VLSM",
      "System Troubleshooting",
      "Network Configuration",
    ],
  },
  {
    title: "Web & Databases",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Front-End Development",
      "Back-End Development",
      "SQL",
      "Oracle APEX",
      "Database Design & Modeling",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: ["Oracle APEX", "TryHackMe", "Git", "GitHub", "Linux", "Kali Linux"],
  },
];

const education = [
  {
    period: "2026 — Present",
    degree: "Master of Science in Cybersecurity",
    school: "Webster University",
    detail: "Emphasis in Artificial Intelligence · St. Louis, Missouri",
  },
  {
    period: "2022 — 2026",
    degree: "Bachelor of Science in Computer Engineering",
    school: "Khazar University",
    detail: "Baku, Azerbaijan",
  },
];

const training = [
  "CompTIA PenTest+ (PT0-002) — Packt, 2025",
  "CompTIA Linux+ (XK0-005) — Packt, 2025",
  "Advanced Penetration Techniques — Packt, 2025",
  "Advanced Linux Networking and Security — Packt, 2025",
  "System Administration — Coders",
  "Penetration Testing — Developia",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main>
      <Chrome />
      <nav className="navbar" aria-label="Main navigation">
        <div className="container nav-container">
          <button className="logo" onClick={() => scrollToSection("home")} aria-label="Go to home">
            TM<span>.</span>
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {[
              ["about", "About"],
              ["skills", "Skills"],
              ["projects", "Work"],
              ["experience", "Experience"],
              ["education", "Education"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <button key={id} data-id={id} onClick={() => scrollToSection(id)}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <Hero />

      <section id="about" className="section">
        <div className="container">
          <p className="section-label">01 — ABOUT</p>
          <div className="section-heading-row">
            <h2 className="section-title">A technical background with a security mindset.</h2>
            <p className="section-intro">From production websites to hands-on security labs, I like working close to the technology and understanding how systems actually behave.</p>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I&apos;m a Computer Engineering graduate currently pursuing a Master of Science in Cybersecurity at Webster University, with an emphasis in Artificial Intelligence.
              </p>
              <p>
                My practical experience spans system administration, networking, web development, database work, troubleshooting, and cybersecurity labs. I&apos;ve also built and maintained production websites for organizations and businesses.
              </p>
              <p>
                I&apos;m especially interested in cybersecurity, security operations, systems, networking, and building reliable technology that solves real problems.
              </p>
            </div>

            <div className="about-card">
              <div><strong>Current focus</strong><span>Cybersecurity &amp; IT</span></div>
              <div><strong>Education</strong><span>M.S. Cybersecurity</span></div>
              <div><strong>Foundation</strong><span>B.S. Computer Engineering</span></div>
              <div><strong>Languages</strong><span>Azerbaijani · English · Turkish · Russian</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-dark">
        <div className="container">
          <p className="section-label">02 — SKILLS</p>
          <h2 className="section-title">Tools I work with.</h2>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skills-grid">
                  {group.skills.map((skill) => <span className="skill-card" key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <p className="section-label">03 — PROJECTS</p>
          <div className="section-heading-row">
            <h2 className="section-title">Selected work.</h2>
            <p className="section-intro">A mix of production web projects and technical work across development, systems, networking, databases, and security.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-meta"><span>0{index + 1}</span><span>{project.category}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Visit Project <span>↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section section-dark">
        <div className="container">
          <p className="section-label">04 — EXPERIENCE</p>
          <h2 className="section-title">Experience.</h2>

          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <p className="timeline-date">Professional Experience</p>
                <h3>System Administrator &amp; Web Developer</h3>
                <h4>International Chovken Federation · Baku, Azerbaijan</h4>
                <ul>
                  <li>Managed website infrastructure and day-to-day technical operations.</li>
                  <li>Built and maintained icfed.org, including front-end, back-end functionality, and registration workflows.</li>
                  <li>Troubleshot website and system issues and coordinated technical updates.</li>
                </ul>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <p className="timeline-date">Freelance · OAWO &amp; Independent Clients</p>
                <h3>Web Developer</h3>
                <h4>Multiple business and organization websites · Azerbaijan</h4>
                <ul>
                  <li>Developed and maintained websites for BBG Energy, Urtas Industry, Eltra, Proteam Temizlik, Naftalan Central, Vent.az, and other clients.</li>
                  <li>Translated client requirements into responsive front-end interfaces and back-end features.</li>
                  <li>Handled updates, content changes, troubleshooting, and deployment-related tasks.</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <p className="section-label">05 — EDUCATION</p>
          <h2 className="section-title">Education.</h2>
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.school}>
                <span className="education-period">{item.period}</span>
                <h3>{item.degree}</h3>
                <p className="education-school">{item.school}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="academic-projects">
            <h3>Academic &amp; Cybersecurity Projects</h3>
            <div className="academic-grid">
              <div><span>01</span><h4>Cybersecurity Labs</h4><p>Hands-on TryHackMe CTFs and security labs using Kali Linux and Burp Suite, practicing enumeration, web security testing, and vulnerability assessment.</p></div>
              <div><span>02</span><h4>Enterprise Networking Lab</h4><p>Designed and configured an enterprise-style network using IP addressing, subnetting, and VLSM to meet networking requirements.</p></div>
              <div><span>03</span><h4>Oracle Database Modeling</h4><p>Created conceptual and logical database models and implemented sample database workflows using Oracle APEX and SQL.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="training" className="section section-dark">
        <div className="container">
          <p className="section-label">06 — TRAINING</p>
          <h2 className="section-title">Training &amp; certificates.</h2>
          <div className="training-grid">
            {training.map((item, index) => (
              <div className="training-card" key={item}><span>0{index + 1}</span><p>{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-content">
          <p className="section-label">07 — CONTACT</p>
          <h2 className="section-title">Let&apos;s connect.</h2>
          <p>Interested in cybersecurity, systems, web development, or technology projects? Feel free to reach out.</p>
          <a href="mailto:tamerlan.mamedov16@gmail.com" className="primary-button">tamerlan.mamedov16@gmail.com <span>↗</span></a>
          <div className="social-links large-socials">
            <a href="https://github.com/TamerlanMammadov" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/tamerlan-mammadov-244812254" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Tamerlan Mammadov</p>
          <p>Built with Next.js &amp; TypeScript</p>
        </div>
      </footer>
    </main>
  );
}
