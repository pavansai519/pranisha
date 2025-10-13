import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "./PortfolioShowcase.css";
import BSM from "../../assets/images/Portfolio/Bst/pic1.webp";
import New from "../../assets/images/Portfolio/new.png";

const projects = [
  { id: 1, image: New, title: "BondStreet", category: "", url: "/portfolio/bondstreet" },
  { id: 2, image: BSM, title: "Novotel", category: "Campaign", url: "/portfolio/bondstreet" },
  { id: 3, image: "https://picsum.photos/seed/3/800/800", title: "GMR", category: "Advertising", url: "/portfolio/bondstreet" },
  { id: 4, image: "https://picsum.photos/seed/4/800/800", title: "Hyderabad Hunters", category: "Sports", url: "/portfolio/bondstreet" },
  { id: 5, image: "https://picsum.photos/seed/5/800/800", title: "Prost", category: "Packaging", url: "/portfolio/bondstreet" },
  { id: 6, image: "https://picsum.photos/seed/6/800/800", title: "Thickshake", category: "F&B", url: "/portfolio/bondstreet" },
];

export default function PortfolioShowcase() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true });

    const tiles = document.querySelectorAll(".ps-tile");

    tiles.forEach((tile) => {
      tile.addEventListener("mousemove", (e) => {
        const rect = tile.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.9) * 14;
        const rotateX = -((y / rect.height) - 0.9) * 14;
        tile.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      tile.addEventListener("mouseleave", () => {
        tile.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      });
    });

    return () => {
      tiles.forEach((tile) => tile.replaceWith(tile.cloneNode(true)));
    };
  }, []);

  return (
    <section className="ps-section">
      <div className="ps-inner container">
        <header className="ps-header">
          <h3 className="ps-eyebrow">Our Precious Best</h3>
          <p className="ps-sub">And it only gets better</p>
        </header>

        {/* === Project Grid === */}
        <div className="ps-grid custom-grid">
          {projects.map((project, index) => (
            <Link
              to={project.url}
              key={project.id}
              className={`ps-tile tile-${index + 1}`}
            >
              <img src={project.image} alt={project.title} />
              <div className="ps-tile-meta">
                <h4>{project.title}</h4>
                <span>{project.category}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* === Load More Button === */}
        <div className="ps-load ">
          <Link to="/portfolio" className="ps-btn">
            Load More ➜
          </Link>
        </div>
      </div>
    </section>
  );
}
