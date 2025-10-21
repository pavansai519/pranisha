import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "./PortfolioShowcase.css";

import BSM from "../../assets/images/Portfolio/Bst/pic1.webp";
import pcg from "../../assets/images/Portfolio/pcg/pcg1.webp";
import shr from "../../assets/images/Portfolio/shr/shr.webp";
import poh from "../../assets/images/Portfolio/poh/poh1.webp";
import rof from "../../assets/images/Portfolio/rof/rof1.webp";
import dess from "../../assets/images/Portfolio/dess/dess.webp";

/*
  Per-project controls:
    area:  must match one of grid-template-areas (tile1..tile6). Use unique names.
    width/height: for large-screen explicit pixel sizes (will scale on smaller screens).
    fit: object-fit for image (cover | contain | scale-down)
    pos: object-position (like 'center top', 'left center', '50% 30%')
*/

const projects = [
  { id: 1, image: BSM, title: "BondStreet", url: "/portfolio/bondstreet", area: "tile1", width: "460px", height: "460px", fit: "cover", pos: "center center" },
  { id: 2, image: pcg,  title: "pcg",       url: "/portfolio/pcg",        area: "tile2", width: "360px", height: "450px", fit: "cover", pos: "center center" },
  { id: 3, image: shr,  title: "SHR",       url: "/portfolio/shr",        area: "tile3", width: "440px", height: "450px", fit: "cover", pos: "center center" },
  
  /* 🔼 ROF moved up (now in tile4 position) */
  { id: 4, image: poh,  title: "POH",       url: "/portfolio/poh",        area: "tile4", width: "360px", height: "460px", fit: "fill", pos: "center center" },

  { id: 5, image: dess,  title: "dess",   url: "/portfolio/dess",        area: "tile5", width: "460px", height: "520px", fit: "cover", pos: "center center" },
  
  /* 🔽 PCG moved down (now in tile6 position) */
  { id: 6, image: rof,  title: "ROF",       url: "/portfolio/rof",        area: "tile6", width: "360px", height: "460px", fit: "cover", pos: "center center" },
];

export default function PortfolioShowcase() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true });

    // Tilt effect: visual only (won't affect layout)
    const tiles = Array.from(document.querySelectorAll(".ps-tile"));
    let raf = null;
    tiles.forEach((tile) => {
      const onMove = (e) => {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const rect = tile.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          const rx = -py * 8; // smaller angle so layout not disrupted visually
          const ry = px * 8;
          tile.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        });
      };
      const onLeave = () => tile.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";

      tile.addEventListener("pointermove", onMove, { passive: true });
      tile.addEventListener("pointerleave", onLeave);

      // cleanup reference
      tile._handlers = { onMove, onLeave };
    });

    return () => {
      tiles.forEach(t => {
        if (!t._handlers) return;
        t.removeEventListener("pointermove", t._handlers.onMove);
        t.removeEventListener("pointerleave", t._handlers.onLeave);
        delete t._handlers;
      });
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="ps-section">
      <div className="ps-inner container">
        <header className="ps-header">
          <h3 className="ps-eyebrow">Our Precious Best</h3>
          <p className="ps-sub">And it only gets better</p>
        </header>

        {/* Grid uses explicit template areas on large screens */}
        <div className="ps-grid custom-grid grid-areas" aria-label="Portfolio showcase">
          {projects.map((project) => {
            const style = {
              gridArea: project.area,
              ["--tile-w"]: project.width,
              ["--tile-h"]: project.height,
              ["--img-fit"]: project.fit,
              ["--img-pos"]: project.pos || "center center",
            };
            return (
              <Link
                to={project.url}
                key={project.id}
                className={`ps-tile ${project.area}`}
                style={style}
                aria-label={project.title}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    objectFit: project.fit,
                    objectPosition: project.pos || "center center",
                  }}
                  draggable="false"
                />
                <div className="ps-tile-meta">
                  <h4>{project.title}</h4>
                </div>
              </Link>
            );
          })}

          
        
      </div>
           {/* <div className="ps-load"  aria-label="Load more area">
              <Link to="/portfolio" className="ps-btn">Load More ➜</Link>
            </div> */}
        </div>

    </section>
  );
}
