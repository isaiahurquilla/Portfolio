import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <section className="page">
      <h1>Projects</h1>
      <p className="muted">
        A selection of projects I’ve built in mobile development, web
        development, and software systems.
      </p>

      <div className="grid">
        {projects.map((project) => (
          <article key={project.id} className="card">
            <h2 style={{ marginTop: 0 }}>{project.title}</h2>
            <p>{project.description}</p>

            <div className="tagRow">
              {project.techStack.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="btnRow">
              <Link className="btn" to={`/portfolio/${project.slug}`}>
                View details →
              </Link>

              {project.github ? (
                <a className="btn" href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}