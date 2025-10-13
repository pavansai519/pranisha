import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer1.jsx";
import "../components/HomeOne/PortfolioShowcase.css"
import Circle from "./Circle.jsx";

 

const projects = [
  { id: 1, image: "https://picsum.photos/seed/6/800/800", title: "Popicorn", category: "Branding", url: "/portfolio/bondstreet" },
  { id: 2, image:"https://picsum.photos/seed/6/800/800", title: "Novotel", category: "Campaign", url: "/portfolio/bondstreet" },
  { id: 3, image: "https://picsum.photos/seed/3/800/800", title: "GMR", category: "Advertising", url: "/portfolio/bondstreet" },
  { id: 4, image: "https://picsum.photos/seed/4/800/800", title: "Hyderabad Hunters", category: "Sports", url: "/portfolio/bondstreet" },
  { id: 5, image: "https://picsum.photos/seed/5/800/800", title: "Prost", category: "Packaging", url: "/portfolio/bondstreet" },
  { id: 6, image: "https://picsum.photos/seed/6/800/800", title: "Thickshake", category: "F&B", url: "/portfolio/bondstreet" },
];

export default function PortfolioShowcase() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <>
      <Header />
      <section className="ps-section">
        <div className="ps-inner container">
          <header className="ps-header">
            <h3 className="ps-eyebrow">Our Precious Best</h3>
            <p className="ps-sub">And it only gets better</p>
          </header>

          <div className="ps-grid custom-grid">
            {projects.map((project, index) => (
              <Link 
                to={project.url}
                key={project.id}
                className={`ps-tile tile-${index + 1}`}
                data-aos="zoom-in"
              >
                <img src={project.image} alt={project.title} />
                <div className="ps-tile-meta">
                  <h4>{project.title}</h4>
                  <span>{project.category}</span>
                </div>
              </Link>
            ))}
          </div>

                 
                </div>
        </section>
        <Circle />
        <Footer />
      </>
  );
}
