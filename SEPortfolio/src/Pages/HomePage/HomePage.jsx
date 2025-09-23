import React from "react";
import "./HomePage.scss";
import Nav from "../../Components/Nav/Nav";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";

function HomePage() {
  return (
    <div className="homepage">
      <Nav />
      <Banner
        title="Joshua Jeyaranjan"
        subtitle="Software Engineer & Full-Stack Developer"
      />

      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Building Digital Solutions</h1>
          <p className="hero__description">
            Passionate software engineer with expertise in modern web
            technologies, creating scalable applications and solving complex
            problems through code.
          </p>
          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn--secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__placeholder">
           
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section__title">Skills & Technologies</h2>
          <div className="skills__grid">
            <div className="skill__category">
              <h3>Frontend</h3>
              <div className="skill__tags">
                <span className="skill__tag">React</span>
                <span className="skill__tag">JavaScript</span>
                <span className="skill__tag">TypeScript</span>
                <span className="skill__tag">HTML5</span>
                <span className="skill__tag">CSS3</span>
                <span className="skill__tag">Sass</span>
                <span className="skill__tag">Vue.js</span>
                <span className="skill__tag">Next.js</span>
              </div>
            </div>
            <div className="skill__category">
              <h3>Backend</h3>
              <div className="skill__tags">
                <span className="skill__tag">Node.js</span>
                <span className="skill__tag">Python</span>
                <span className="skill__tag">Express</span>
                <span className="skill__tag">Django</span>
                <span className="skill__tag">PostgreSQL</span>
                <span className="skill__tag">MongoDB</span>
                <span className="skill__tag">REST APIs</span>
                <span className="skill__tag">GraphQL</span>
              </div>
            </div>
            <div className="skill__category">
              <h3>Tools & DevOps</h3>
              <div className="skill__tags">
                <span className="skill__tag">Git</span>
                <span className="skill__tag">Docker</span>
                <span className="skill__tag">AWS</span>
                <span className="skill__tag">Vercel</span>
                <span className="skill__tag">Netlify</span>
                <span className="skill__tag">Jest</span>
                <span className="skill__tag">Webpack</span>
                <span className="skill__tag">Vite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section__title">Featured Projects</h2>
          <div className="projects__grid">
            <div className="project__card">
              <div className="project__image">
                <div className="project__placeholder">🚀</div>
              </div>
              <div className="project__content">
                <h3>E-Commerce Platform</h3>
                <p>
                  Full-stack e-commerce solution built with React, Node.js, and
                  PostgreSQL. Features include user authentication, payment
                  processing, and admin dashboard.
                </p>
                <div className="project__tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>PostgreSQL</span>
                  <span>Stripe</span>
                </div>
                <div className="project__links">
                  <a href="#" className="project__link">
                    Live Demo
                  </a>
                  <a href="#" className="project__link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project__card">
              <div className="project__image">
                <div className="project__placeholder">📱</div>
              </div>
              <div className="project__content">
                <h3>Task Management App</h3>
                <p>
                  Collaborative task management application with real-time
                  updates, drag-and-drop functionality, and team collaboration
                  features.
                </p>
                <div className="project__tech">
                  <span>Vue.js</span>
                  <span>Socket.io</span>
                  <span>MongoDB</span>
                  <span>Express</span>
                </div>
                <div className="project__links">
                  <a href="#" className="project__link">
                    Live Demo
                  </a>
                  <a href="#" className="project__link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project__card">
              <div className="project__image">
                <div className="project__placeholder">🤖</div>
              </div>
              <div className="project__content">
                <h3>AI-Powered Analytics Dashboard</h3>
                <p>
                  Data visualization dashboard with machine learning insights,
                  real-time data processing, and interactive charts.
                </p>
                <div className="project__tech">
                  <span>Python</span>
                  <span>Django</span>
                  <span>D3.js</span>
                  <span>TensorFlow</span>
                </div>
                <div className="project__links">
                  <a href="#" className="project__link">
                    Live Demo
                  </a>
                  <a href="#" className="project__link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section__title">Let's Connect</h2>
          <div className="contact__content">
            <div className="contact__info">
              <p>Ready to work together or have a question about my work?</p>
              <div className="contact__links">
                <a
                  href="https://www.linkedin.com/in/joshuajeyaranjan/"
                  className="contact__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                           <img
                      className="contact-method__image"
                      src="/photoAssets/linkedin1.svg"
                    ></img> LinkedIn
                </a>
                <a
                  href="https://github.com/JoshuaJeyaranjan"
                  className="contact__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                      <img
                      className="contact-method__image"
                      src="/photoAssets/github.svg"
                    ></img> GitHub
                </a>
                <a
                  href="mailto:joshuajeyaranjan@gmail.com"
                  className="contact__link"
                >
                      <img
                      className="contact-method__image"
                      src="/photoAssets/email1.svg"
                    ></img> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
