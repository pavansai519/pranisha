import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../HomeOne/Header.jsx";
import Footer from "../HomeOne/Footer1.jsx";
import { Link } from "react-router-dom";
import Circle from "../Circle.jsx";
import "../Portfolio3.css"
import Banner from "../../assets/images/Portfolio/Bst/Banner2.webp";
import pic1 from "../../assets/images/Portfolio/Bst/pic6.webp";
import pic2 from "../../assets/images/Portfolio/Bst/pic2.webp";
import pic3 from "../../assets/images/Portfolio/Bst/pic3.webp";
import pic4 from "../../assets/images/Portfolio/Bst/pic4.webp";
import pic5 from "../../assets/images/Portfolio/Bst/pic5.webp";


function ProjectDetail() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic" });
  }, []);

  // Static project data
  const project = {
    title: "",
    category: "",
    heroImage: Banner,
    gallery: [
      pic1,pic2,pic3,pic4,pic5,


    ],
    galleryExtras: [
      
    ],
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
            </div>
          ))}

          {project.galleryExtras && (
            <div className="pd-gallery-row">
              {project.galleryExtras.map((extra, idx) => (
                <div
                  key={idx}
                  className="pd-gallery-item"
                  data-aos="fade-up"
                  data-aos-delay={600 + idx * 200}
                >
                  <img src={extra} alt={`Extra ${idx + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

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
