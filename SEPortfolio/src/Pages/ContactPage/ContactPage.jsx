import React, { useState } from "react";
import "./ContactPage.scss";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend or email service
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      <Nav />

      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-hero__title">Get In Touch</h1>
          <p className="contact-hero__subtitle">
            Let's discuss your next project or just say hello!
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Connect</h2>
              <p>
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question about my work or want to
                discuss a potential collaboration, I'd love to hear from you!
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method__icon">📧</div>
                  <div className="contact-method__content">
                    <h3>Email</h3>
                    <p>your.email@example.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method__icon">💼</div>
                  <div className="contact-method__content">
                    <h3>LinkedIn</h3>
                    <p>linkedin.com/in/yourprofile</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method__icon">🐙</div>
                  <div className="contact-method__content">
                    <h3>GitHub</h3>
                    <p>github.com/yourusername</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send a Message</h2>

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project or question..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn--primary btn--full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactPage;
