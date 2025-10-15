import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../HomeOne/Header.jsx";
import Footer from "../HomeOne/Footer1.jsx";
import { Link } from "react-router-dom";
import Circle from "../Circle.jsx";
import "./Portfolio3.css";
import { FaExpandAlt, FaTimes } from "react-icons/fa";
import StickyNav from "../StickyNav.jsx";

import Banner from "../../assets/images/Portfolio/Bst/Banner2.webp";
import pic1 from "../../assets/images/Portfolio/Bst/pic6.webp";
import pic2 from "../../assets/images/Portfolio/Bst/pic2.webp";
import pic3 from "../../assets/images/Portfolio/Bst/pic3.webp";
import pic4 from "../../assets/images/Portfolio/Bst/pic4.webp";
import pic5 from "../../assets/images/Portfolio/Bst/pic5.webp";

// ✅ Video file
import demoVideo from "/car.mp4";
import OnlyRingCursorUnified from "../HomeOne/CustomCursor.jsx"; // custom cursor

function ProjectDetail() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic" });
  }, []);

    useEffect(() => {
      const isOpen = !!selectedImage || !!selectedVideo;
      document.body.classList.toggle('no-scroll', isOpen);
      return () => document.body.classList.remove('no-scroll');
    }, [selectedImage, selectedVideo]);

  const project = {
    title: "",
    category: "",
    heroImage: Banner,
    gallery: [pic1, pic2, pic3, pic4, pic5],
  };

  return (
    <>
      {/* === Custom Animated Cursor === */}
      <OnlyRingCursorUnified />

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
          {/* === Normal Images === */}
          {project.gallery.map((img, index) => (
            <div
              className="pd-gallery-item ps-tile"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                onClick={() => setSelectedImage(img)} // still allow clicking the image itself
                style={{ cursor: "pointer" }}
              />

          
           
            </div>
          ))}

          {/* === Inline Video Item === */}
          <div
            className="pd-gallery-item video-item ps-tile"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <video
              src={demoVideo}
              autoPlay
              muted
              loop
              playsInline
              className="video-thumb"
              onClick={() => setSelectedVideo(demoVideo)} // click thumbnail to open popup
              style={{ cursor: "pointer" }}
            />
           
          </div>
        </div>
      </section>

      {/* === IMAGE POPUP === */}
      {selectedImage && (
        <div className="image-popup" onClick={() => setSelectedImage(null)}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()} // prevent overlay click when interacting with content
          >
            <button
              className="close-popup"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <FaTimes />
            </button>
            <img src={selectedImage} alt="Expanded view" />
          </div>
        </div>
      )}

      {/* === VIDEO POPUP === */}
      {selectedVideo && (
        <div className="video-popup" onClick={() => setSelectedVideo(null)}>
          <div
            className="video-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-popup"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
            >
              <FaTimes />
            </button>
            <video src={selectedVideo} controls autoPlay />


          </div>
        </div>
      )}

     <div data-aos="fade-up" data-aos-delay="300" style={{ position: "relative" }}>
        <StickyNav />
      </div>

      <Circle />
      <Footer />
    </>
  );
}

export default ProjectDetail;
