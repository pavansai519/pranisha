// StickyNav.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Keep your original imports
import BSM from "../assets/images/Portfolio/Bst/Bond.png";
import pcg from "../assets/images/Portfolio/pcg/PCG.png";
import shr from "../assets/images/Portfolio/shr/HOG.png";
import poh from "../assets/images/Portfolio/poh/POH.png";
import rof from "../assets/images/Portfolio/rof/ROI.png";
import dess from "../assets/images/Portfolio/dess/dess.png"

// Projects array using imported images
const projects = [
  { title: "Next POH", link: "/portfolio/poh", thumbnail: poh },
  { title: "Next SHR", link: "/portfolio/shr", thumbnail: shr },
  { title: "Next PCG", link: "/portfolio/pcg", thumbnail: pcg },
  { title: "Next Rof", link: "/portfolio/rof", thumbnail: rof },
  { title: "Next Dress", link: "/portfolio/dess", thumbnail: dess },

  { title: "BondStreet", link: "/portfolio/bondstreet", thumbnail: BSM },

];

function StickyNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(0);

  useEffect(() => {
    const currentProjectIndex = projects.findIndex(p => p.link === location.pathname);
    if (currentProjectIndex !== -1) {
      setCurrentIndex(currentProjectIndex);
      setPreviewIndex((currentProjectIndex + 1) % projects.length);
    }
  }, [location.pathname]);

  const prevIndex = i => (i === 0 ? projects.length - 1 : i - 1);
  const nextIndex = i => (i === projects.length - 1 ? 0 : i + 1);

  const handleHover = () => setPreviewIndex(nextIndex(currentIndex));
  const handleMouseLeave = () => setPreviewIndex(nextIndex(currentIndex));

  const handlePrevClick = () => navigate(projects[prevIndex(currentIndex)].link);
  const handleNextClick = () => navigate(projects[nextIndex(currentIndex)].link);

  const previewProject = projects[previewIndex];

  return (
    <div
      className="sticky-nav"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      <div
        className="sticky-nav-thumbnail"
        style={{
          backgroundImage: `url(${previewProject.thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "300px",
          height: "200px",
          borderRadius: "8px",
        }}
        onClick={handleNextClick}
      ></div>

      <div className="sticky-nav-holder" style={{ marginTop: "10px" }}>
        <h6 className="title-project">{previewProject.title}</h6>
        <div className="nav-group" style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
          <button className="icon-button prev" onClick={handlePrevClick}>
            ←
          </button>
          <button className="icon-button next" onClick={handleNextClick}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default StickyNav;
