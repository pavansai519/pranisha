import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../HomeOne/Header.jsx";
import Footer from "../HomeOne/Footer1.jsx";
import { Link } from "react-router-dom";
import Circle from "../Circle.jsx";
import { FaTimes } from "react-icons/fa";
import StickyNav from "../StickyNav.jsx";
import "./Portfolio2.css";
import { Helmet } from "react-helmet-async";

import Banner from "../../assets/images/Portfolio/poh/pohBanner.webp";
import pic1 from "../../assets/images/Portfolio/poh/poh2.webp";
import pic2 from "../../assets/images/Portfolio/poh/poh3.webp";
import pic3 from "../../assets/images/Portfolio/poh/poh4.webp";
import pic4 from "../../assets/images/Portfolio/poh/poh5.webp";
import pic5 from "../../assets/images/Portfolio/poh/poh6.webp";

import demoVideo from "/logoo.mp4";
import OnlyRingCursorUnified from "../HomeOne/CustomCursor.jsx";

function ProjectDetail() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic" });
  }, []);

  useEffect(() => {
    const isOpen = !!selectedImage || !!selectedVideo;
    document.body.classList.toggle("no-scroll", isOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [selectedImage, selectedVideo]);

  const project = {
    title: "",
    category: "",
    heroImage: Banner,
    gallery: [pic1, pic2, pic3, pic4, pic5],
  };

  return (
    <>
    <Helmet>
            <title>Poh-Portfolio</title>
            <meta
              name="description"
              content="Get in touch with Pranishaa for digital marketing, branding, and web development solutions. We're here to turn your ideas into impact."
            />
            <meta
              name="keywords"
              content="Contact Pranishaa, Digital Marketing Agency, Branding, Web Design, SEO Help"
            />
            <meta property="og:title" content="Contact Pranishaa" />
            <meta property="og:description" content="Reach out to Pranishaa for expert marketing, branding, and design services that drive business success." />
            <meta property="og:image" content="https://pranishaa.com/images/og-contact.jpg" />
            <meta property="og:url" content="https://pranishaa.com/contact" />
          </Helmet>
      <OnlyRingCursorUnified />
      <Header />

      {/* === HERO SECTION === */}
      <section className="project-hero" data-aos="fade-down">
        <img
          src={project.heroImage}
          alt={project.title}
          className="project-hero-img"
        />
        <div className="project-hero-overlay">
          <h1>{project.title}</h1>
          <p>{project.category}</p>
        </div>
      </section>

      {/* === GALLERY SECTION === */}
      <section className="project-gallery">
        <div className="project-gallery-grid">
          {project.gallery.map((img, index) => (
            <div
              className="project-gallery-item ps-tile"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}

          <div
            className="project-gallery-item project-video-item ps-tile"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <video
              src={demoVideo}
              autoPlay
              muted
              loop
              playsInline
              className="project-video-thumb"
              onClick={() => setSelectedVideo(demoVideo)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </section>

      {/* === IMAGE POPUP === */}
      {selectedImage && (
        <div
          className="project-image-popup"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="project-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-close-popup"
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
        <div
          className="project-video-popup"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="project-video-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-close-popup"
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
