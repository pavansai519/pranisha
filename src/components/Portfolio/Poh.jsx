import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../HomeOne/Header.jsx";
import Footer from "../HomeOne/Footer1.jsx";
import { Link } from "react-router-dom";

function ProjectDetail() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic" });
  }, []);

  // 🖼 Static single project data
  const project = {
    title: "NextGen Startup",
    category: "Branding",
    heroImage: "https://picsum.photos/seed/startup/1200/800",
    gallery: [
      "https://picsum.photos/seed/startup1/900/600",
      "https://picsum.photos/seed/startup2/900/600",
      "https://picsum.photos/seed/startup3/900/600",
    ],
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="project-hero-section" data-aos="fade-down">
        <img src={project.heroImage} alt={project.title} className="hero-bg" />
        <div className="project-hero-overlay">
          <h1>{project.title}</h1>
          <p>{project.category}</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="project-gallery-section">
        <div className="project-gallery">
          {project.gallery.map((img, index) => (
            <div
              className="gallery-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <img src={img} alt={`${project.title} ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Back Button */}
      <div className="project-back-btn">
        <Link to="/Portfolio">← Back to Portfolio</Link>
      </div>

      <Footer />
    </>
  );
}

export default ProjectDetail;
