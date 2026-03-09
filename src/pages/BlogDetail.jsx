import { Link, useParams } from "react-router-dom";

export default function BlogDetail() {
  const { slug } = useParams();

  return (
    <section className="page">
      <h1>Blog Detail</h1>
      <p>Slug: {slug}</p>

      <p>
        <Link to="/blog">← Back to Blog</Link>
      </p>
    </section>
  );
}