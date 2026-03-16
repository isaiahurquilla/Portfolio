export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="muted">© {year} Isaiah Urquilla</p>

        <div className="footer__links">
          <a
            className="btn"
            href="https://github.com/isaiahurquilla"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/isaiah-urquilla-0091763b6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}