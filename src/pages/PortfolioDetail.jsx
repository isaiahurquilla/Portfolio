import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function normalizeLiveDemo(live) {
  if (!live) return null;

  if (typeof live === "string") {
    return {
      url: live,
      label: "Open Live Demo",
    };
  }

  if (!live.url) return null;

  return {
    label: "Open Live Demo",
    ...live,
  };
}

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
        <Link className="btn btn--secondary" to="/portfolio">
          Back to Portfolio
        </Link>
      </section>
    );
  }

  const liveDemo = normalizeLiveDemo(project.live);

  return (
    <section className="page">
      <Link className="btn btn--secondary" to="/portfolio">
        Back to Portfolio
      </Link>

      <div className="projectHeader">
        <h1>{project.title}</h1>
        <p className="muted">{project.description}</p>
      </div>

      <h2>Tech Stack</h2>
      <div className="tagRow">
        {project.techStack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {project.highlights?.length ? (
        <>
          <h2>Highlights</h2>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </>
      ) : null}

      <h2>Links</h2>
      <div className="btnRow">
        {project.github ? (
          <a
            className="btn btn--secondary"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        ) : null}

        {liveDemo ? (
          <a
            className="btn btn--secondary"
            href={liveDemo.url}
            target="_blank"
            rel="noreferrer"
          >
            {liveDemo.label}
          </a>
        ) : null}
      </div>
    </section>
  );
}
