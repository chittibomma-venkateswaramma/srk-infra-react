function Services() {
  return (
    <div className="services-page">

      <section className="services-header">
        <p className="section-label">WHAT WE DO</p>

        <h1>
          Building Spaces.
          <br />
          Creating Value.
        </h1>

        <p className="services-intro">
          At SRK Infra Developers, we create quality residential
          and commercial spaces for a better future.
        </p>
      </section>

      <section className="services-grid">

        <div className="service-card">
          <span className="service-number">01</span>
          <h2>Residential Development</h2>
          <p>
            Modern residential spaces designed for comfortable
            and quality living.
          </p>
          <span className="service-arrow">→</span>
        </div>

        <div className="service-card">
          <span className="service-number">02</span>
          <h2>Commercial Development</h2>
          <p>
            Professional commercial spaces designed for business
            and long-term growth.
          </p>
          <span className="service-arrow">→</span>
        </div>

        <div className="service-card">
          <span className="service-number">03</span>
          <h2>Construction & Infrastructure</h2>
          <p>
            Reliable construction solutions with strong attention
            to quality and detail.
          </p>
          <span className="service-arrow">→</span>
        </div>

        <div className="service-card">
          <span className="service-number">04</span>
          <h2>Project Development</h2>
          <p>
            Complete development solutions from planning to
            execution and delivery.
          </p>
          <span className="service-arrow">→</span>
        </div>

      </section>

    </div>
  );
}

export default Services;