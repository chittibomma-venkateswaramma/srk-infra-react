import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/mzepjrge",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="contact-hero-content">

            <p className="contact-label">
              GET IN TOUCH
            </p>

            <h1>
              Let's Build
              <br />
              Something Great.
            </h1>

            <p>
              Have a project in mind? Talk to our team and
              let's turn your vision into reality.
            </p>

          </div>
        </div>
      </section>


      {/* CONTACT INTRO */}
      <section className="contact-intro">

        <div className="contact-intro-left">

          <p className="section-label">
            CONTACT SRK INFRA
          </p>

          <h2>
            Let's Start a
            <br />
            Conversation
          </h2>

          <p>
            Whether you are planning a residential project,
            commercial development or infrastructure project,
            our team is ready to help.
          </p>

          <p>
            Reach out to us and let's discuss how we can
            bring your ideas to life.
          </p>

        </div>


        <div className="contact-details">

          <div className="contact-item">
            <span className="contact-number">01</span>

            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>


          <div className="contact-item">
            <span className="contact-number">02</span>

            <div>
              <h3>Email</h3>
              <p>info@srkinfra.com</p>
            </div>
          </div>


          <div className="contact-item">
            <span className="contact-number">03</span>

            <div>
              <h3>Office</h3>
              <p>
                Hyderabad, Telangana
                <br />
                India
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* CONTACT FORM */}
      <section className="contact-form-section">

        <div className="form-heading">

          <p className="section-label">
            SEND US A MESSAGE
          </p>

          <h2>
            Tell Us About
            <br />
            Your Project
          </h2>

        </div>


        {status === "success" && (
          <div className="form-success">
            <div className="success-icon">✓</div>

            <div>
              <h3>Message Sent Successfully!</h3>
              <p>
                Thank you for contacting SRK Infra Developers.
                Our team will get back to you shortly.
              </p>
            </div>
          </div>
        )}


        {status === "error" && (
          <div className="form-error">
            Something went wrong. Please try again.
          </div>
        )}


        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </div>

          </div>


          <div className="form-row">

            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="project_type">
                Project Type
              </label>

              <select
                id="project_type"
                name="project_type"
                required
              >
                <option value="">
                  Select project type
                </option>

                <option value="Residential">
                  Residential
                </option>

                <option value="Commercial">
                  Commercial
                </option>

                <option value="Infrastructure">
                  Infrastructure
                </option>

                <option value="Villa Development">
                  Villa Development
                </option>
              </select>
            </div>

          </div>


          <div className="form-group">

            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell us about your project..."
              required
            ></textarea>

          </div>


          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending..."
              : "Send Message →"}
          </button>

        </form>

      </section>


      {/* CTA */}
      <section className="contact-cta">

        <div>

          <p className="contact-label">
            LET'S BUILD TOGETHER
          </p>

          <h2>
            Have a project
            <br />
            in mind?
          </h2>

        </div>

        <Link
          to="/projects"
          className="cta-button"
        >
          Explore Projects →
        </Link>

      </section>

    </main>
  );
}

export default Contact;