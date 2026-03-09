import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="page">
        <h1>Post not found</h1>
        <p className="muted">
          No blog post exists for: <strong>{slug}</strong>
        </p>
        <Link className="btn" to="/blog">
          ← Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <section className="page">
      <Link className="btn" to="/blog">
        ← Back to Blog
      </Link>

      <h1 style={{ marginTop: "1rem" }}>{post.title}</h1>
      <p className="muted">{post.date}</p>

      {/* Render content with line breaks */}
      <div className="prose">
        {post.content
          .trim()
          .split("\n")
          .map((line, i) => (
            <p key={i}>{line}</p>
          ))}
      </div>

      {post.tags?.length ? (
        <div style={{ marginTop: "1rem" }}>
          <strong>Tags:</strong> {post.tags.join(", ")}
        </div>
      ) : null}
    </section>
  );
}