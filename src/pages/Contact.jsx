export default function Contact() {
  return (
    <section className="page">
      <h1>Contact</h1>

      <h2>Social</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/isaiah-urquilla-0091763b6/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/isaiahurquilla" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>

      <h2>Message Me</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitted! (frontend only for now)");
        }}
        style={{ display: "grid", gap: "0.75rem", maxWidth: "420px" }}
      >
        <label>
          Name
          <input name="Isaiah Urquilla" required />
        </label>

        <label>
          Email
          <input name="isaiah.urquilla@gmail.com" type="email" required />
        </label>

        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}