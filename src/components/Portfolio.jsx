import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer1.jsx";
import PageBanner from "./PageBanner.jsx";
import { Link } from "react-router-dom";

const projects = [
  { id: 1, image: "https://picsum.photos/seed/startup/900/700", title: "NextGen Startup", category: "Technology", link: "/portfolio/bondstreet" },
  { id: 2, image: "https://picsum.photos/seed/ecommerce/900/700", title: "Novotel", category: "Campaign", link: "/portfolio/bondstreet" },
  { id: 3, image: "https://picsum.photos/seed/finance/900/700", title: "GMR", category: "Finance", link: "/portfolio/bondstreet" },
  { id: 4, image: "https://picsum.photos/seed/creative/900/700", title: "Hyderabad Hunters", category: "Sports", link: "/portfolio/bondstreet" },
  { id: 5, image: "https://picsum.photos/seed/tech/900/700", title: "Prost", category: "Packaging", link: "/portfolio/bondstreet" },
  { id: 6, image: "https://picsum.photos/seed/design/900/700", title: "Thickshake", category: "F&B", link: "/portfolio/bondstreet" },
  { id: 7, image: "https://picsum.photos/seed/health/900/700", title: "Y-Axis", category: "Marketing", link: "/portfolio/bondstreet" },
  { id: 8, image: "https://picsum.photos/seed/robotics/900/700", title: "International Paper", category: "Corporate", link: "/portfolio/bondstreet" },
  { id: 9, image: "https://picsum.photos/seed/creative2/900/700", title: "Hyderabad Hunters 2", category: "Sports", link: "/portfolio/bondstreet" },
  { id: 10, image: "https://picsum.photos/seed/tech2/900/700", title: "Prost 2", category: "Packaging", link: "/portfolio/bondstreet" },
];

export default function PortfolioShowcase() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true });
  }, []);

  // 🎯 Smooth parallax hover effect
  useEffect(() => {
    const tiles = document.querySelectorAll(".pf-tile");
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
    <>
      <Header />
      <PageBanner title="Our Portfolio" subtitle="Showcasing Excellence" />

      <section className="pf-section">
        <div className="pf-inner container">
          <header className="pf-header" data-aos="fade-up">
            <h3 className="pf-eyebrow">Our Portfolio</h3>
          </header>

          <div className="pf-grid">
            {/* Row 1 - small left, large right */}
            <div className="pf-row row1" data-aos="fade-up" data-aos-delay="100">
              <article className="pf-tile small">
                <Link to={projects[0].link}>
                  <img src={projects[0].image} alt={projects[0].title} loading="lazy" />
                  <div className="pf-tile-meta">
                    <h4>{projects[0].title}</h4>
                    <span>{projects[0].category}</span>
                  </div>
                </Link>
              </article>
              <article className="pf-tile large">
                <Link to={projects[1].link}>
                  <img src={projects[1].image} alt={projects[1].title} loading="lazy" />
                  <div className="pf-tile-meta">
                    <h4>{projects[1].title}</h4>
                    <span>{projects[1].category}</span>
                  </div>
                </Link>
              </article>
            </div>

            {/* Row 2 - large left, small right */}
            <div className="pf-row row2" data-aos="fade-up" data-aos-delay="200">
              <article className="pf-tile large">
                <Link to={projects[2].link}>
                  <img src={projects[2].image} alt={projects[2].title} loading="lazy" />
                  <div className="pf-tile-meta">
                    <h4>{projects[2].title}</h4>
                    <span>{projects[2].category}</span>
                  </div>
                </Link>
              </article>
              <article className="pf-tile small">
                <Link to={projects[3].link}>
                  <img src={projects[3].image} alt={projects[3].title} loading="lazy" />
                  <div className="pf-tile-meta">
                    <h4>{projects[3].title}</h4>
                    <span>{projects[3].category}</span>
                  </div>
                </Link>
              </article>
            </div>

            {/* Row 3 - 3 equal columns */}
            <div className="pf-row row3" data-aos="fade-up" data-aos-delay="250">
              {projects.slice(4, 7).map((p) => (
                <article key={p.id} className="pf-tile">
                  <Link to={p.link}>
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <div className="pf-tile-meta">
                      <h4>{p.title}</h4>
                      <span>{p.category}</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Special Row - 8, 9, 10 */}
            <div className="pf-row special-row" data-aos="fade-up" data-aos-delay="300">
              <article className="pf-tile wide">
                <Link to={projects[7].link}>
                  <img src={projects[7].image} alt={projects[7].title} loading="lazy" />
                  <div className="pf-tile-meta">
                    <h4>{projects[7].title}</h4>
                    <span>{projects[7].category}</span>
                  </div>
                </Link>
              </article>

              <div className="pf-vertical-stack">
                {projects.slice(8, 10).map((p) => (
                  <article key={p.id} className="pf-tile stacked">
                    <Link to={p.link}>
                      <img src={p.image} alt={p.title} loading="lazy" />
                      <div className="pf-tile-meta">
                        <h4>{p.title}</h4>
                        <span>{p.category}</span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
