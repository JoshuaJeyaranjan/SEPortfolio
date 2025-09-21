import React from "react";
import "./AboutPage.scss";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

function AboutPage() {
  return (
    <div className="about-page">
      <Nav />

      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero__title">About Me</h1>
          <p className="about-hero__subtitle">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>My Story</h2>
              <p>
                I'm a passionate software engineer with a love for creating
                innovative digital solutions. With a strong foundation in both
                frontend and backend development, I enjoy tackling complex
                problems and turning ideas into reality through code.
              </p>
              <p>
                My journey in software development began with curiosity about
                how websites work, and it has evolved into a career focused on
                building scalable, user-friendly applications that make a
                positive impact on people's lives.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community through blog posts and mentoring.
              </p>
            </div>

            <div className="about-image">
              <div className="about-image__placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <h2 className="section-title">Experience & Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Software Engineer</h3>
                <h4>Company Name • 2022 - Present</h4>
                <p>
                  Developed and maintained full-stack web applications using
                  React, Node.js, and PostgreSQL. Led a team of 3 developers and
                  improved application performance by 40%.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Frontend Developer</h3>
                <h4>Previous Company • 2020 - 2022</h4>
                <p>
                  Built responsive user interfaces and collaborated with design
                  teams to implement pixel-perfect designs. Specialized in React
                  and modern CSS frameworks.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Computer Science Degree</h3>
                <h4>University Name • 2016 - 2020</h4>
                <p>
                  Bachelor of Science in Computer Science with focus on software
                  engineering, data structures, and algorithms. Graduated Magna
                  Cum Laude.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2 className="section-title">What Drives Me</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>
                I love exploring new technologies and finding creative solutions
                to complex problems.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>
                I believe the best solutions come from working together and
                sharing knowledge.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">📚</div>
              <h3>Learning</h3>
              <p>
                Continuous learning is essential in tech. I'm always exploring
                new frameworks and methodologies.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Problem Solving</h3>
              <p>
                I enjoy breaking down complex problems into manageable pieces
                and finding elegant solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage;
