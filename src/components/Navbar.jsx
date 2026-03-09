import {useEffect, useRef, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) => 
    `nav_link ${isActive ? "nav_link--active" : "" }`;

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function onDocClick(e) {
            if (!dropdownRef.current) return;
            if (!dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
            document.addEventListener("mousedown", onDocClick);
            return () => document.removeEventListener("mousedown", onDocClick);
        }
    }, []);

    function closeAll(){
        setMobileOpen(false);
        setDropdownOpen(false);
    }

    return (
        <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__brand" onClick={closeAll}>
          Portfolio
        </Link>

        {/* Desktop links */}
        <nav className="nav__links">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/resume" className={linkClass}>
            Resume
          </NavLink>
          <NavLink to="/portfolio" className={linkClass}>
            Portfolio
          </NavLink>

          {/* Dropdown (must include Blog) */}
          <div className="nav__dropdown" ref={dropdownRef}>
            <button
              className="nav__dropdownBtn"
              type="button"
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
              aria-haspopup="menu"
            >
              More <span className="nav__chev">▾</span>
            </button>

            {dropdownOpen && (
              <div className="nav__menu" role="menu">
                <NavLink
                  to="/blog"
                  className="nav__menuItem"
                  onClick={closeAll}
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/contact"
                  className="nav__menuItem"
                  onClick={closeAll}
                >
                  Contact
                </NavLink>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nav__hamburger"
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="nav__mobile">
          <NavLink to="/" className={linkClass} end onClick={closeAll}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeAll}>
            About
          </NavLink>
          <NavLink to="/resume" className={linkClass} onClick={closeAll}>
            Resume
          </NavLink>
          <NavLink to="/portfolio" className={linkClass} onClick={closeAll}>
            Portfolio
          </NavLink>
          <NavLink to="/blog" className={linkClass} onClick={closeAll}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={closeAll}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}