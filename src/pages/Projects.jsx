import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: "01",
      category: "Residential",
      title: "Premium Residential Community",
      location: "Hyderabad, Telangana",
      description:
        "Thoughtfully planned residential spaces designed for comfortable and modern living.",
      image: "/project1.jpg",
    },
    {
      id: "02",
      category: "Villa Development",
      title: "Modern Villa Development",
      location: "Hyderabad, Telangana",
      description:
        "Elegant villas combining contemporary architecture, comfort and lasting value.",
      image: "/project2.jpg",
    },
    {
      id: "03",
      category: "Commercial",
      title: "Commercial Development",
      location: "Hyderabad, Telangana",
      description:
        "Modern commercial spaces designed to support businesses and future growth.",
      image: "/project3.jpg",
    },
    {
      id: "04",
      category: "Infrastructure",
      title: "Infrastructure Development",
      location: "Telangana, India",
      description:
        "Reliable infrastructure solutions built with quality, safety and long-term performance.",
      image: "/project4.jpg",
    },
  ];

  return (
    <main className="projects-page">

      {/* HERO */}
      <section className="projects-hero">
        <div className="projects-hero-overlay">
          <div className="projects-hero-content">
            <p className="projects-label">
              OUR PROJECTS
            </p>

            <h1>
              Building Spaces.
              <br />
              Creating Landmarks.
            </h1>

            <p>
              Explore our residential, commercial, villa and
              infrastructure developments built with quality,
              innovation and lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section">

        <div className="projects-heading">
          <div>
            <p className="section-label">
              FEATURED PROJECTS
            </p>

            <h2>
              Our Work
            </h2>
          </div>

          <p className="projects-intro">
            Every project reflects our commitment to thoughtful
            design, strong construction and creating spaces
            that stand the test of time.
          </p>
        </div>


        <div className="projects-grid">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >

              {/* IMAGE */}
              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <span className="project-number">
                  {project.id}
                </span>

              </div>


              {/* CONTENT */}
              <div className="project-content">

                <p className="project-category">
                  {project.category}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p className="project-location">
                  📍 {project.location}
                </p>

                <p className="project-description">
                  {project.description}
                </p>

                <Link
                  to="/contact"
                  className="project-link"
                >
                  Enquire About Project →
                </Link>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="projects-cta">

        <div className="projects-cta-content">

          <p className="projects-label">
            HAVE A PROJECT IN MIND?
          </p>

          <h2>
            Let's Create
            <br />
            Something Great.
          </h2>

        </div>

        <Link
          to="/contact"
          className="projects-cta-button"
        >
          Contact Us →
        </Link>

      </section>

    </main>
  );
}

export default Projects;