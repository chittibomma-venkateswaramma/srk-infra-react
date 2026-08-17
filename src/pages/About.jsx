import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">

      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="section-label">ABOUT SRK INFRA</p>

          <h1>
            Building Trust.
            <br />
            Creating Landmarks.
          </h1>

          <p>
            Sri Radha Krishna Infra Developers is committed to creating
            quality residential and commercial spaces that bring lasting
            value to people and communities.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story">

        <div className="about-story-content">
          <p className="section-label">WHO WE ARE</p>

          <h2>
            Creating Spaces
            <br />
            With Purpose
          </h2>

          <p>
            At SRK Infra Developers, we believe that every project is
            more than just a structure. It is a space where people live,
            work, grow and build their future.
          </p>

          <p>
            We focus on quality construction, thoughtful planning,
            modern design and reliable execution to deliver spaces
            that stand the test of time.
          </p>
        </div>

        <div className="about-highlight">
          <strong>10+</strong>
          <span>Years of Experience</span>
        </div>

      </section>

      {/* VALUES */}
      <section className="values-section">

        <div className="values-header">
          <p className="section-label">OUR VALUES</p>

          <h2>
            What Drives
            <br />
            Everything We Build
          </h2>
        </div>

        <div className="values-grid">

          <div className="value-card">
            <span>01</span>
            <h3>Quality</h3>
            <p>
              We maintain high standards of quality in every stage of
              planning, construction and delivery.
            </p>
          </div>

          <div className="value-card">
            <span>02</span>
            <h3>Innovation</h3>
            <p>
              We embrace modern ideas, technologies and designs to
              create better spaces for the future.
            </p>
          </div>

          <div className="value-card">
            <span>03</span>
            <h3>Integrity</h3>
            <p>
              We believe in transparency, honesty and building strong
              relationships with our customers.
            </p>
          </div>

          <div className="value-card">
            <span>04</span>
            <h3>Customer First</h3>
            <p>
              Our customers are at the heart of everything we do,
              from planning to project completion.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">

        <div>
          <p className="section-label">LET'S BUILD TOGETHER</p>

          <h2>
            Have a project
            <br />
            in mind?
          </h2>
        </div>

        <Link to="/contact" className="services-btn">
          Contact Us →
        </Link>

      </section>

    </main>
  );
}

export default About;