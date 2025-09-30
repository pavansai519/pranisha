import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './pranisha-okai.css';

// Portfolio Projects
const projects = [
  {
    image: 'https://picsum.photos/seed/portrait1/600/800',
    title: 'Project One',
    category: 'Branding',
  },
  {
    image: 'https://picsum.photos/seed/landscape1/800/600',
    title: 'Project Two',
    category: 'Web Development',
  },
  {
    image: 'https://picsum.photos/seed/square1/600/600',
    title: 'Project Three',
    category: 'UI/UX',
  },
  {
    image: 'https://picsum.photos/seed/portrait2/600/800',
    title: 'Project Four',
    category: 'E-commerce',
  },
];

function PortfolioGrid() {
  // Init AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      offset: 120,    // how early the animation starts
      once: true,     // animate only once
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section id="portfolio" className="portfolio-grid-section">
      <div className="container">
        <div className="portfolio-grid-container">
          {/* Left Column */}
          <div className="portfolio-column-left">
            <div
              className="portfolio-header"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <span className="sub-title">Portfolio</span>
              <p>
                Take a look at our latest design projects. From our renowned clients,
                we have worked on various houses for latest multitasking.
              </p>
            </div>

            <div
              className="portfolio-card"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src={projects[0].image} alt={projects[0].title} />
              <div className="card-info">
                <h3>{projects[0].title}</h3>
                <p>{projects[0].category}</p>
              </div>
            </div>

            <div
              className="portfolio-card"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <img src={projects[2].image} alt={projects[2].title} />
              <div className="card-info">
                <h3>{projects[2].title}</h3>
                <p>{projects[2].category}</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="portfolio-column-right">
            <div
              className="portfolio-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img src={projects[1].image} alt={projects[1].title} />
              <div className="card-info">
                <h3>{projects[1].title}</h3>
                <p>{projects[1].category}</p>
              </div>
            </div>

            <div
              className="portfolio-card"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <img src={projects[3].image} alt={projects[3].title} />
              <div className="card-info">
                <h3>{projects[3].title}</h3>
                <p>{projects[3].category}</p>
              </div>
            </div>

            <div
              className="view-all-button-wrapper"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Link to="/portfolio" className="view-all-btn">
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioGrid;
