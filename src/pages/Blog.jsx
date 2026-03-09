import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Blog() {
  return (
    <section className="page">
      <h1>Blog</h1>
      <p className="muted">
        Posts about my projects, what I’m learning, and my journey in software +
        robotics.
      </p>

      <div className="list">
        {posts.map((post) => (
          <article key={post.id} className="card">
            <h2 style={{ marginTop: 0 }}>{post.title}</h2>
            <p className="muted" style={{ marginTop: "-0.25rem" }}>
              {post.date}
            </p>
            <p>{post.excerpt}</p>

            <Link className="btn" to={`/blog/${post.slug}`}>
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}