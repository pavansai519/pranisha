import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer1.jsx";
import "../components/HomeOne/PortfolioShowcase.css"
import Circle from "./Circle.jsx";

 

const projects = [
  { id: 1, image: "https://picsum.photos/seed/6/800/800", title: "Popicorn", category: "Branding" },
  { id: 2, image:"https://picsum.photos/seed/6/800/800", title: "Novotel", category: "Campaign" },
  { id: 3, image: "https://picsum.photos/seed/3/800/800", title: "GMR", category: "Advertising" },
  { id: 4, image: "https://picsum.photos/seed/4/800/800", title: "Hyderabad Hunters", category: "Sports" },
  { id: 5, image: "https://picsum.photos/seed/5/800/800", title: "Prost", category: "Packaging" },
  { id: 6, image: "https://picsum.photos/seed/6/800/800", title: "Thickshake", category: "F&B" },
];
 
export default function PortfolioShowcase() {
 useEffect(() => {
    // Initialize AOS animations
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true });
 
    // === 3D Card Tilt Effect ===
    const tiles = document.querySelectorAll(".ps-tile");
 
    tiles.forEach((tile) => {
      tile.addEventListener("mousemove", (e) => {
        const rect = tile.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.9) * 14;
        const rotateX = -((y / rect.height) - 0.9) * 14;
 
        tile.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) `;
      });
 
      tile.addEventListener("mouseleave", () => {
        tile.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      });
    });
 
    // Cleanup on unmount
    return () => {
      tiles.forEach((tile) => {
        tile.replaceWith(tile.cloneNode(true));
      });
    };
  }, []);
 
 
  return (
    <>
    <Header/>
    <section className="ps-section">
      <div className="ps-inner container">
        <header className="ps-header">
          <h3 className="ps-eyebrow">Our Precious Best</h3>
          <p className="ps-sub">And it only gets better</p>
        </header>
 
        <div className="ps-grid custom-grid">
          {projects.map((project, index) => (
            <article
              className={`ps-tile tile-${index + 1}`}
              key={project.id}
            >
              <img src={project.image} alt={project.title} />
              <div className="ps-tile-meta">
                <h4>{project.title}</h4>
                <span>{project.category}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <Circle/>
    <Footer/>
    </>
  );
}
 