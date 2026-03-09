import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function PortfolioDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="page">
        <h1>Project not found</h1>
        <p className="muted">
          No project exists for: <strong>{slug}</strong>
        </p>
        <Link className="btn" to="/portfolio">
          ← Back to Portfolio
        </Link>
      </section>
    );
  }

  return (
    <section className="page">
      <Link className="btn" to="/portfolio">
        ← Back to Portfolio
      </Link>

      <h1 style={{ marginTop: "1rem" }}>{project.title}</h1>
      <p className="muted">{project.description}</p>

      <h2>Tech Stack</h2>
      <div className="tagRow">
        {project.techStack.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      {project.highlights?.length ? (
        <>
          <h2>Highlights</h2>
          <ul>
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </>
      ) : null}

      <h2>Links</h2>
      <div className="btnRow">
        {project.github ? (
          <a className="btn" href={project.github} target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
        ) : null}

        {project.live ? (
          <a className="btn" href={project.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        ) : (
          <span className="muted">Live demo: not available</span>
        )}
      </div>
    </section>
  );
}