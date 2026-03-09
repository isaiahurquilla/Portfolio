import { Link } from "react-router-dom";
import Isaiah from '../assets/Isaiah.jpg'
export default function Home() {
  return (
    <section className="page">
      <h1>Isaiah Urquilla</h1>
      <p>Software Developer</p>
      <p>
        Hello, I'm Isaiah, a passionate software developer and currently a full-time student
        at CSUB. This is my portfolio website where I showcase my projects, skills, and experience in software development. 
        I enjoy working on web applications, mobile apps, and exploring new technologies. 
        Feel free to explore my portfolio and contact me for any opportunities or collaborations!
      </p>

      {/* Replace with your real profile image later */}
      <div style={{ marginTop: "1rem" }}>
        <img
          src={Isaiah}
          alt="Isaiah Urquilla"
          width="200px"
          height="200px"
          style={{ borderRadius: "12px" }}
        />
      </div>

      <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
        <Link to="/portfolio">View Portfolio</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </section>
  );
}