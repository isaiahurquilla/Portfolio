import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

    return (
        <section className="page">
            <h1>404 - Not Found</h1>
            <p className="muted">
                The page "<strong>{location.pathname}</strong>" does not exist.
                </p>

                <div className="btnRow">
                    <Link className="btn" to="/">Go Home</Link>
                    <Link className="btn" to="/portfolio">View Portfolio</Link>
                    <Link className="btn" to="/blog">Read Blog</Link>
                    <Link className="btn" to="/contact">Contact Me</Link>
                </div>
        </section>
    );
}