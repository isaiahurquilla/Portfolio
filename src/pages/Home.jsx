import { Link } from "react-router-dom";
import Isaiah from "../assets/PortfolioPicture.jpg";

export default function Home() {
  return (
    <section className="page">
      <h1>Isaiah Urquilla</h1>
      <p>Frontend Software Engineer | React Developer</p>
      <p>
        I'm a Computer Science student at CSUB with a strong interest in
        frontend engineering and building applications that solve real problems.
        I work with React, JavaScript, and APIs to create responsive,
        data-driven experiences across web and mobile projects. My portfolio
        highlights work in UI development, reusable component design, and
        dynamic application features.
      </p>

      <div style={{ marginTop: "1rem" }}>
        <img
          src={Isaiah}
          alt="Isaiah Urquilla"
          width="200"
          height="200"
          style={{ borderRadius: "12px" }}
        />
      </div>

      <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
        <Link to="/portfolio">View Projects</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </section>
  );
}