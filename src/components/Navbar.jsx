import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <Link to="/" className="logo" onClick={closeMenu}>
        <div className="logo-symbol">SRK</div>

        <div className="logo-details">
          <strong>SRI RADHA KRISHNA</strong>
          <span>INFRA DEVELOPERS</span>
        </div>
      </Link>


      {/* HAMBURGER */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>


      {/* NAVIGATION */}
      <nav className={`nav-links ${menuOpen ? "menu-open" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          HOME
        </Link>

        <Link to="/about" onClick={closeMenu}>
          ABOUT US
        </Link>

        <Link to="/services" onClick={closeMenu}>
          SERVICES
        </Link>

        <Link to="/projects" onClick={closeMenu}>
          PROJECTS
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          CONTACT US
        </Link>

      </nav>

    </header>
  );
}

export default Navbar;