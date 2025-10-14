import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../HomeOne/Header.jsx";
import Footer from "../HomeOne/Footer1.jsx";
import { Link } from "react-router-dom";
import Circle from "../Circle.jsx";

import { FaExpandAlt, FaTimes } from "react-icons/fa";


import "../Portfolio3.css";
import pcgBanner from "../../assets/images/Portfolio/pcg/pcg banner.webp" ;
import pic2 from "../../assets/images/Portfolio/pcg/pcg2.webp";
import pic3 from "../../assets/images/Portfolio/pcg/pcg3.webp";
import pic4 from "../../assets/images/Portfolio/pcg/pcg4.webp";
import pic5 from "../../assets/images/Portfolio/pcg/pcg5.webp";
import pic6 from "../../assets/images/Portfolio/pcg/pcg6.webp";
 
function ProjectDetail() {
  const [selectedImage, setSelectedImage] = useState(null);
 
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic" });
  }, []);
 
  const project = {
    title: "",
    category: "",
    heroImage: pcgBanner,
    gallery: [ pic2, pic3, pic4, pic5,pic6],
  };
 
  return (
    <>
      <Header />
 
      {/* === HERO SECTION === */}
      <section className="pd-hero" data-aos="fade-down">
        <img src={project.heroImage} alt={project.title} className="pd-hero-img" />
        <div className="pd-hero-overlay">
          <h1>{project.title}</h1>
          <p>{project.category}</p>
        </div>
      </section>
 
      {/* === GALLERY SECTION === */}
      <section className="pd-gallery">
        <div className="pd-gallery-grid">
          {project.gallery.map((img, index) => (
            <div
              className="pd-gallery-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <img src={img} alt={`${project.title} ${index + 1}`} />
             
              {/*  View Icon */}
              <button className="view-icon" onClick={() => setSelectedImage(img)}>
                <FaExpandAlt />
              </button>
            </div>
          ))}
        </div>
      </section>
 
      {/* === IMAGE POPUP === */}
      {selectedImage && (
        <div className="image-popup">
          <div className="popup-content">
            <button className="close-popup" onClick={() => setSelectedImage(null)}>
              x
            </button>
            <img src={selectedImage} alt="Expanded view" />
          </div>
        </div>
      )}
 
      {/* === BACK BUTTON === */}
      <div className="pd-back-btn">
        <Link to="/Portfolio">← Back to Portfolio</Link>
      </div>
 
      <Circle />
      <Footer />
    </>
  );
}
 
export default ProjectDetail;
 
 


