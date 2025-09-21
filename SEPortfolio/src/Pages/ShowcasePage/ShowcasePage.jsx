import React from "react";
import "./ShowcasePage.scss";
import Banner from "../../Components/Banner/Banner";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

export const ShowcasePage = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, admin dashboard, and real-time inventory management.",
      image: "🚀",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "Express",
        "JWT",
      ],
      liveUrl: "https://your-ecommerce-demo.com",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and project tracking capabilities.",
      image: "📱",
      technologies: ["Vue.js", "Socket.io", "MongoDB", "Express", "Vuex"],
      liveUrl: "https://your-task-app-demo.com",
      githubUrl: "https://github.com/yourusername/task-management",
      featured: true,
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description:
        "Data visualization dashboard with machine learning insights, real-time data processing, interactive charts, and predictive analytics capabilities.",
      image: "🤖",
      technologies: [
        "Python",
        "Django",
        "D3.js",
        "TensorFlow",
        "PostgreSQL",
        "Redis",
      ],
      liveUrl: "https://your-analytics-demo.com",
      githubUrl: "https://github.com/yourusername/analytics-dashboard",
      featured: true,
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with modern React patterns and responsive design.",
      image: "🌤️",
      technologies: [
        "React",
        "TypeScript",
        "OpenWeather API",
        "Chart.js",
        "Sass",
      ],
      liveUrl: "https://your-weather-demo.com",
      githubUrl: "https://github.com/yourusername/weather-app",
      featured: false,
    },
    {
      id: 5,
      title: "Blog Platform",
      description:
        "Modern blog platform with markdown support, comment system, user authentication, and admin panel. Built with Next.js and optimized for SEO.",
      image: "📝",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      liveUrl: "https://your-blog-demo.com",
      githubUrl: "https://github.com/yourusername/blog-platform",
      featured: false,
    },
    {
      id: 6,
      title: "Chat Application",
      description:
        "Real-time chat application with private messaging, group chats, file sharing, and emoji reactions. Built with Socket.io for real-time communication.",
      image: "💬",
      technologies: [
        "React",
        "Socket.io",
        "Node.js",
        "MongoDB",
        "JWT",
        "Multer",
      ],
      liveUrl: "https://your-chat-demo.com",
      githubUrl: "https://github.com/yourusername/chat-app",
      featured: false,
    },
  ];

  return (
    <div className="showcase-page">
      <Nav />
      <Banner
        title="My Projects"
        subtitle="A collection of my work and side projects"
      />

      <section className="projects-showcase">
        <div className="container">
          <div className="projects-filter">
            <button className="filter-btn filter-btn--active">
              All Projects
            </button>
            <button className="filter-btn">Featured</button>
            <button className="filter-btn">Frontend</button>
            <button className="filter-btn">Full-Stack</button>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`project-card ${
                  project.featured ? "project-card--featured" : ""
                }`}
              >
                <div className="project-card__image">
                  <div className="project-image-placeholder">
                    <span>{project.image}</span>
                  </div>
                  {project.featured && (
                    <div className="project-card__badge">Featured</div>
                  )}
                </div>

                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">
                    {project.description}
                  </p>

                  <div className="project-card__technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-card__links">
                    <a
                      href={project.liveUrl}
                      className="project-link project-link--primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="project-link project-link--secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
