"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Image from "next/image";

const skills = [
  ["Frontend", "React, Next.js, JavaScript, HTML, CSS, Tailwind CSS"],
  [
    "Backend",
    "Java, Spring Boot, Spring MVC, Express.js, Flask, REST APIs",
  ],
  [
    "Data & Security",
    "MySQL, MongoDB, Supabase, Spring Security, JWT",
  ],
  [
    "AI & Tools",
    "Gemini API, OpenAI API, RAG pipelines, Git, Docker, Figma",
  ],
];

const certificates = [
  "GenAI Workshop — OpenAI x NxtWave",
  "Java Full Stack Programming — ExcelR",
  "Cybersecurity Fundamentals — IBM SkillsBuild",
  "Programming Essentials in Python — Cisco",
  "Cloud Computing Basics — AWS",
  "Core Java Programming — Infosys Springboard",
];

function SectionPortrait({ label, image = "/FormalFemale.png", alt = "Kalyani Mantramurthi" }) {
  const isIllustration = image !== "/FormalFemale.png";

  return (
    <Reveal>
      <div className="section-portrait">
        <p className="section-label">{label}</p>
        <div className="portrait-frame">
          <Image
            src={image}
            alt={alt}
            width={isIllustration ? 512 : 760}
            height={isIllustration ? 512 : 1013}
            className={`portfolio-photo${isIllustration ? " portfolio-illustration" : ""}`}
          />
        </div>
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="hero-grid overflow-hidden px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.3fr_.7fr]">
          <div>
            <Reveal>
              <p className="eyebrow">FULL-STACK SOFTWARE ENGINEER · INDIA</p>

              <h1 className="hero-title mt-5">
                Kalyani
                <br />
                <em>Mantramurthi.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                I build reliable, user-focused digital products—from secure Java
                and Spring Boot APIs to polished React and Next.js interfaces.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a className="button-primary" href="#projects">
                  Explore my work <span>↘</span>
                </a>

                <a
                  className="button-secondary"
                  href="mailto:kalyanimantramurthi@gmail.com"
                >
                  Let&apos;s talk
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={48}>
            <div
              className="hero-mark"
              aria-label="Kalyani Mantramurthi initials"
            >
              <span>KM</span>

              <p>
                ENGINEER
                <br />· BUILDER ·
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-y border-slate-200 bg-white px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <SectionPortrait label="01 / ABOUT" />

          <div>
            <Reveal>
              <h2 className="section-title">
                End-to-end thinking, from the first endpoint to the final
                interaction.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="body-copy mt-7">
                I&apos;m a full-stack engineer with production experience
                building design-system components and AI-integrated
                applications. I enjoy turning fuzzy ideas into thoughtful,
                scalable experiences—owning API design, authentication, data
                modeling, and the UI that makes it all feel simple.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="stat-row mt-10">
                <div>
                  <strong>20+</strong>
                  <span>reusable UI components shipped</span>
                </div>

                <div>
                  <strong>4</strong>
                  <span>product modules supported</span>
                </div>

                <div>
                  <strong>8.88</strong>
                  <span>engineering CGPA</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-slate-950 px-6 py-20 text-white sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl text-slate-50">
          <Reveal>
            <p className="section-label text-teal-300">
              02 / SELECTED PROJECTS
            </p>

            <h2 className="section2-title mt-4 max-w-3xl">
              Things I&apos;ve built to solve real workflow problems.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <a
                href="/projects/orbit-ds"
                className="project-card project-orbit"
              >
                <p className="project-index">01 — DESIGN SYSTEM</p>

                <h3>Orbit-DS</h3>

                <p className="project-stack">
                  React · TypeScript · Tailwind CSS · Storybook
                </p>

                <p>
                  Shadcn-inspired component system with advanced features,
                  composable APIs, and a live Storybook playground for clear
                  component documentation.
                </p>

                <div className="project-footer">
                  <span>Components · Storybook · Design system</span>
                  <span>↗</span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href="/projects/persistai"
                className="project-card project-persist"
              >
                <p className="project-index">02 — AI WORKSPACE</p>

                <h3>PersistAI</h3>

                <p className="project-stack">
                  Next.js · Express.js · TypeScript · Supabase · Gemini AI
                </p>

                <p>
                  AI writing-style workspace that ingests PDF, DOCX, TXT, CSV,
                  and JSON documents to generate responses that reflect each
                  user&apos;s voice. Includes JWT authentication, per-user data
                  isolation, feedback, profiles, and persistent chat history.
                </p>

                <div className="project-footer">
                  <span>Document ingestion · AI generation · Auth · Style analysis</span>
                  <span>↗</span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.16}>
              <a
                href="/projects/food-delivery"
                className="project-card project-food lg:col-span-2"
              >
                <p className="project-index">
                  03 — FULL-STACK APPLICATION
                </p>

                <h3>Food Delivery App</h3>

                <p className="project-stack">
                  Spring Boot · React · MySQL · JWT
                </p>

                <p>
                  Full order-lifecycle platform with 10+ RESTful endpoints,
                  Spring Security, role-based JWT access, and a responsive admin
                  dashboard for live menu updates and order tracking.
                </p>

                <div className="project-footer">
                  <span>REST APIs · Roles · Admin dashboard</span>
                  <span>↗</span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.16}>
              <a
                href="/projects/smart-free-time-utilizer"
                className="project-card project-smart-time lg:col-span-2"
              >
                <p className="project-index">
                  04 — FULL-STACK APPLICATION
                </p>

                <h3>Smart Free Time Utilizer</h3>

                <p className="project-stack">
                  Reactjs · Python · JWT · Flask · MySQL
                </p>

                <p>
                  Full order-lifecycle platform with 10+ RESTful endpoints,
                  Spring Security, role-based JWT access, and a responsive admin
                  dashboard for live menu updates and order tracking.
                </p>

                <div className="project-footer">
                  <span>REST APIs ·  LLM integration · Kanban board</span>
                  <span>↗</span>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <SectionPortrait
            label="03 / EXPERIENCE"
            image="/briefcase.png"
            alt="Briefcase representing professional experience"
          />

          <div>
            <Reveal>
              <div className="experience-head">
                <div>
                  <p className="eyebrow">OCT 2025 — JUN 2026</p>

                  <div className="flex items-center gap-4 mt-4">
                    <img
                      src="/design_Duh.jpg"
                      alt="Design Duh! logo"
                      className="w-16 h-16 rounded-full object-cover border border-slate-200"
                    />

                    <div>
                      <h2 className="text-3xl font-semibold text-slate-900">
                        Software Development Engineer Intern
                      </h2>

                      <a
                        className="mt-1 text-lg text-teal-700"
                        href="https://in.linkedin.com/company/design-duh"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Design Duh!
                      </a>
                    </div>
                  </div>
                </div>

                <span className="experience-number">01</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="experience-list">
                <li>
                  Built 20+ reusable React and Tailwind CSS components for
                  Orbit-DS, adopted across four product modules and reducing
                  new-screen build time by an estimated 30%.
                </li>

                <li>
                  Extended Unstructured DS with components used by downstream
                  teams.
                </li>

                <li>
                  Led the Superloops website refactor into a responsive,
                  pixel-perfect implementation from Figma, improving mobile
                  usability and load performance.
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="bg-teal-50 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="section-label">04 / TOOLKIT</p>

            <h2 className="section-title mt-4">
              A practical stack for building modern products.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden border border-teal-950/15 bg-teal-950/15 md:grid-cols-2">
            {skills.map(([title, detail], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="skill-card">
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="bg-white px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <SectionPortrait
            label="05 / EDUCATION & CERTIFICATES"
            image="/bookandpen.png"
            alt="Books representing education and certifications"
          />

          <div>
            <Reveal>
              <div className="education-item">
                <p>2022 — 2026</p>

                <div>
                  <h3>
                    Sri Venkateswara Engineering College, Suryapet
                  </h3>

                  <span>JNTUH · CGPA 8.88/10</span>
                </div>
              </div>

              <div className="education-item">
                <p>2020 — 2022</p>

                <div>
                  <h3>Prathiba College, Suryapet</h3>
                  <span>93%</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-12 grid gap-3 sm:grid-cols-2">
                {certificates.map((certificate) => (
                  <p key={certificate} className="certificate">
                    {certificate}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="contact-section px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow text-teal-200">06 / CONTACT</p>

            <h2 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Have a role, product idea, or collaboration in mind? I&apos;d
              love to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                className="button-light"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kalyanimantramurthi@gmail.com"
              >
                kalyanimantramurthi@gmail.com ↗
              </a>

              <a
                className="button-ghost"
                href="tel:+918341818438"
              >
                +91 8341818438
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
