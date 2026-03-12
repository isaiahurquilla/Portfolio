import { useLocation } from "react-router-dom";

export default function Contact() {
  const { search } = useLocation();
  const sent = new URLSearchParams(search).get("sent") === "1";

  return (
    <section className="page">
      <h1>Contact</h1>

      {sent ? (
        <p className="muted">✅ Message sent! Thanks for reaching out.</p>
      ) : null}

      <h2>Social</h2>
      <hr />

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/isaiahurquilla"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>

      <h2 style={{ marginTop: "2rem" }}>Message Me</h2>
      <hr />

      <form action="https://formspree.io/f/mzdjrqlz" method="POST">
        <p>
          <label>
            Name{" "}
            <input name="name" required style={{ marginLeft: "0.5rem" }} />
          </label>
        </p>

        <p>
          <label>
            Email{" "}
            <input
              name="email"
              type="email"
              required
              style={{ marginLeft: "0.5rem" }}
            />
          </label>
        </p>

        <p>
          <label style={{ display: "block" }}>
            Message
            <br />
            <textarea name="message" rows="6" required />
          </label>
        </p>

        <input
          type="hidden"
          name="_redirect"
          value="https://portfolio-rust-eta-21.vercel.app/contact?sent=1"
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}