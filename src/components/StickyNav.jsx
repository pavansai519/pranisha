import React, { useState, useEffect } from "react";
import BSM from "../assets/images/Portfolio/Bst/Bond.png";
import pcg from "../assets/images/Portfolio/pcg/PCG.png";
import shr from "../assets/images/Portfolio/shr/HOG.png";
import poh from "../assets/images/Portfolio/poh/POH.png";
import rof from "../assets/images/Portfolio/rof/ROI.png";
 
const projects = [
  { title: "Next   POH", link: "/portfolio/poh", thumbnail: poh },
  { title: "Next SHR", link: "/portfolio/shr", thumbnail: shr },
  {
    title: "Next   PCG",
    link: "/portfolio/pcg",
    thumbnail: pcg,
  },
  
  {
    title: "Next Rof",
    link: "/portfolio/rof",
    thumbnail: rof,
  },
  
 
 
  { title: "BondStreet", link: "/portfolio/bondstreet", thumbnail: BSM },
];
 
function StickyNav() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(0);
 
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentProjectIndex = projects.findIndex(
      (p) => p.link === currentPath
    );
 
    if (currentProjectIndex !== -1) {
      setCurrentIndex(currentProjectIndex);
      const next = (currentProjectIndex + 1) % projects.length;
      setPreviewIndex(next);
    }
  }, []);
 
  const prevIndex = (i) => (i === 0 ? projects.length - 1 : i - 1);
  const nextIndex = (i) => (i === projects.length - 1 ? 0 : i + 1);
 
  const handleHover = () => {
    setPreviewIndex(nextIndex(currentIndex)); // show next preview on hover
  };
 
  const handleMouseLeave = () => {
    const next = nextIndex(currentIndex);
    setPreviewIndex(next); // reset to default next
  };
 
  const handlePrevClick = () => {
    const prev = prevIndex(currentIndex);
    window.location.href = projects[prev].link;
  };
 
  const handleNextClick = () => {
    const next = nextIndex(currentIndex);
    window.location.href = projects[next].link;
  };
 
  const previewProject = projects[previewIndex];
 
  return (
    <div
      className="sticky-nav"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="sticky-nav-thumbnail"
        style={{ backgroundImage: `url(${previewProject.thumbnail})` }}
        onClick={handleNextClick}
      ></div>
 
      <div className="sticky-nav-holder">
        <h6 className="title-project">{previewProject.title}</h6>
        <div className="nav-group">
          <button className="icon-button prev" onClick={handlePrevClick}>
            <i className="icon">←</i>
          </button>
 
          <button className="icon-button next" onClick={handleNextClick}>
            <i className="icon">→</i>
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default StickyNav;