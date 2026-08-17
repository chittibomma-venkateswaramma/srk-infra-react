import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">

            <p className="hero-tag">
              SRI RADHA KRISHNA INFRA DEVELOPERS
            </p>

            <h1>
              Building Dreams,
              <br />
              Creating Landmarks
            </h1>

            <p className="hero-text">
              We build quality residential and commercial spaces
              with modern design, strong construction and lasting value.
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="primary-btn">
                Explore Projects
              </Link>

              <Link to="/contact" className="secondary-btn">
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro-section">

        <div className="intro-content">

          <p className="section-label">
            ABOUT SRK INFRA
          </p>

          <h2>
            Creating Spaces That
            <br />
            Inspire Better Living
          </h2>

          <p>
            At SRK Infra Developers, we believe that every structure
            should be more than just a building. It should be a place
            where people can live, work and grow with confidence.
          </p>

          <p>
            Our commitment to quality, innovation and customer
            satisfaction drives everything we build.
          </p>

          <Link to="/about" className="read-more">
            Discover More →
          </Link>

        </div>

        <div className="experience-box">
          <strong>10+</strong>
          <span>Years of Experience</span>
        </div>

      </section>

    </main>
  );
}

export default Home;