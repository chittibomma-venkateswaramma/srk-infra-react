import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* =========================
          FOOTER MAIN
      ========================= */}

      <div className="footer-container">

        {/* COMPANY */}
        <div className="footer-company">

          <Link to="/" className="footer-logo">

            <span className="footer-logo-main">
              SRK
            </span>

            <div className="footer-logo-details">
              <strong>
                SRI RADHA KRISHNA
              </strong>

              <span>
                INFRA DEVELOPERS
              </span>
            </div>

          </Link>

          <p>
            Building quality residential, commercial and
            infrastructure spaces with trust, innovation
            and lasting value.
          </p>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">

          <h3>QUICK LINKS</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/projects">
            Projects
          </Link>

          <Link to="/contact">
            Contact Us
          </Link>

        </div>


        {/* SERVICES */}
        <div className="footer-column">

          <h3>SERVICES</h3>

          <Link to="/services">
            Residential Development
          </Link>

          <Link to="/services">
            Commercial Development
          </Link>

          <Link to="/services">
            Infrastructure
          </Link>

          <Link to="/services">
            Villa Development
          </Link>

        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">

          <h3>CONTACT</h3>

          <p>
            Hyderabad, Telangana
            <br />
            India
          </p>

          <a href="tel:+919876543210">
            +91 98765 43210
          </a>

          <a href="mailto:info@srkinfra.com">
            info@srkinfra.com
          </a>

        </div>

      </div>


      {/* =========================
          FOOTER BOTTOM
      ========================= */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Sri Radha Krishna
          Infra Developers. All Rights Reserved.
        </p>

        <p>
          Designed &amp; Developed with care.
        </p>

      </div>

    </footer>
  );
}

export default Footer;