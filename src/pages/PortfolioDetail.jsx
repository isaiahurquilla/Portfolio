import { useParams } from "react-router-dom";

export default function PortfolioDetail() {
  const { slug } = useParams();

  return (
    <section className="page">
      <h1>Portfolio Detail</h1>
      <p>Slug: {slug}</p>
      <p>Project detail view will go here next.</p>
    </section>
  );
}