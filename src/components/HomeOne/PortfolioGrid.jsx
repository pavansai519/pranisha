import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ add this import
import "./PortfolioShowcase.css";

const projects = [
  { id: 1, image: "https://picsum.photos/seed/1/400/700", title: "Popicorn", category: "Branding", link: "/portfolio/bondstreet" },
  { id: 2, image: "https://picsum.photos/seed/2/800/800", title: "Novotel", category: "Campaign", link: "/portfolio/bondstreet" },
  { id: 3, image: "https://picsum.photos/seed/3/900/600", title: "GMR", category: "Advertising", link: "/portfolio/bondstreet" },
  { id: 4, image: "https://picsum.photos/seed/4/900/1200", title: "Hyderabad Hunters", category: "Sports", link: "/portfolio/bondstreet" },
  { id: 5, image: "https://picsum.photos/seed/5/800/800", title: "Prost", category: "Packaging", link: "/portfolio/bondstreet" },
  { id: 6, image: "https://picsum.photos/seed/6/700/400", title: "Thickshake", category: "F&B", link: "/portfolio/bondstreet" },
  { id: 7, image: "https://picsum.photos/seed/7/400/700", title: "Y-Axis", category: "Marketing", link: "/portfolio/bondstreet" },
];

export default function PortfolioShowcase() {
  useEffect(() => {
    const tiles = document.querySelectorAll(".ps-tile");

    tiles.forEach((tile) => {
      const img = tile.querySelector("img");

      tile.addEventListener("mousemove", (e) => {
        const rect = tile.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const moveX = (x - rect.width / 2) / 25;
        const moveY = (y - rect.height / 2) / 25;

        img.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
      });

      tile.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
      });
    });

    return () => {
      tiles.forEach((tile) => {
        tile.onmousemove = null;
        tile.onmouseleave = null;
      });
    };
  }, []);

  return (
    <section className="ps-section">
      <div className="ps-inner container">
        <header className="ps-header">
          <h3 className="ps-eyebrow">Our Precious Best</h3>
          <p className="ps-sub">Showcasing our finest works that redefine digital experiences with passion</p>
        </header>

        <div className="ps-grid">
          {/* Row 1 - small left, large right */}
          <div className="ps-row row1">
            <Link to={projects[0].link} className="ps-tile small">
              <img src={projects[0].image} alt={projects[0].title} />
              <div className="ps-tile-meta">
                <h4>{projects[0].title}</h4>
                <span>{projects[0].category}</span>
              </div>
            </Link>

            <Link to={projects[1].link} className="ps-tile large">
              <img src={projects[1].image} alt={projects[1].title} />
              <div className="ps-tile-meta">
                <h4>{projects[1].title}</h4>
                <span>{projects[1].category}</span>
              </div>
            </Link>
          </div>

          {/* Row 2 - large left, small right */}
          <div className="ps-row row2">
            <Link to={projects[2].link} className="ps-tile large">
              <img src={projects[2].image} alt={projects[2].title} />
              <div className="ps-tile-meta">
                <h4>{projects[2].title}</h4>
                <span>{projects[2].category}</span>
              </div>
            </Link>

            <Link to={projects[3].link} className="ps-tile small">
              <img src={projects[3].image} alt={projects[3].title} />
              <div className="ps-tile-meta">
                <h4>{projects[3].title}</h4>
                <span>{projects[3].category}</span>
              </div>
            </Link>
          </div>

          {/* Row 3 - 3 equal images */}
          <div className="ps-row row3">
            {projects.slice(4, 7).map((project) => (
              <Link to={project.link} className="ps-tile equal" key={project.id}>
                <img src={project.image} alt={project.title} />
                <div className="ps-tile-meta">
                  <h4>{project.title}</h4>
                  <span>{project.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="ps-load">
          <Link to="/portfolio" className="ps-btn">Load More ➜</Link>
        </div>
      </div>
    </section>
  );
}
