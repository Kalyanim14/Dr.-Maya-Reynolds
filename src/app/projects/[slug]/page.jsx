import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) notFound();

  return (
    <main className="project-page">
      <header className="project-nav">
        <Link href="/">
          KM<span>.</span>
        </Link>

        <Link href="/#projects">← All projects</Link>
      </header>

      <section className="project-hero">
        <div>
          <p className="eyebrow">
            {project.number} / {project.eyebrow}
          </p>

          <h1>{project.name}</h1>

          <p>{project.summary}</p>

          <div className="project-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live project ↗
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>

        <div className="project-stack-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
<section className="project-visual-wrap">
  <figure className="project-shot">
    <Image
      src={project.screenshot}
      alt={project.screenshotAlt || `${project.name} screenshot`}
      width={1600}
      height={900}
      className="project-image"
      priority
    />

    <figcaption>
      {project.name} Preview
    </figcaption>
  </figure>
</section>

      <section className="project-content">
        <div className="project-detail-list">
          {project.details.map(([heading, description], index) => (
            <article key={heading}>
              <span>0{index + 1}</span>

              <div>
                <h2>{heading}</h2>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="project-highlights">
          <p className="eyebrow">KEY HIGHLIGHTS</p>

          {project.highlights.map((item) => (
            <p key={item}>↗ {item}</p>
          ))}
        </aside>
      </section>

      <section className="case-study-cta">
        <p>Interested in the thinking behind this work?</p>

        <a href="mailto:kalyanimantramurthi@gmail.com">
          Start a conversation ↗
        </a>
      </section>
    </main>
  );
}