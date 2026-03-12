import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Submitted! (frontend only for now)");
    e.currentTarget.reset();
  }

  return (
    <section className="page">
      <h1>Contact</h1>
      <p className="muted">
        Want to connect? Send a message or reach out through my social links.
      </p>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Social</h2>
          <div className="btnRow">
            <a
              className="btn"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn"
              href="https://github.com/isaiahurquilla"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Message Me</h2>
          <form onSubmit={handleSubmit} style = {{ display: "grid", gap: "0.75rem" }}>
          <label>
            Name
            <input name="name" required />
          </label>

          <label>
            Email
            <input name="email" type="email" required />      
          </label>

          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>

          <button type = "submit">Submit</button>
          {status ? <p className = "muted">{status}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}