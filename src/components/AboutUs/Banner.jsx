// Pranisha.jsx
import React from "react";
import { Link } from 'react-router-dom';

import "./pranisha-okai.css";

/**
 * Okai-style banner (canvas removed — use global particle canvas)
 *
 * Props:
 *  - imagePath: hero image for the right side (string)
 *  - logoPath: small logo used inside bottom card (string)
 *  - fontFamily: font family name (string)
 *  - eyebrow, heading, subheading, description (strings)
 *  - primaryText (string)
 *  - buttonText (string)
 *  - background: optional background image path for the mid card (string)
 *  - color: primary text color (string)
 *
 * Canvas/particle code removed because a global canvas is provided elsewhere.
 */
export default function ParticleBanner({
  imagePath = "/praneetha.png",
  logoPath = "/logo1.png",
  fontFamily = "",
  eyebrow = "Welcome to Pranisha Technologies",
  description = "Praneetha Devireddy, the visionary founder of Pranisha Technologies, brings over 15 years of experience in Digital Marketing and IT Services. With a strong passion for innovation and technology-driven solutions, she established Pranisha Technologies in 2021 with a mission to help businesses grow through creativity, technology, and strategy.",
    description1 = "What began with a focus on Web Development, Branding, and Digital Marketing soon evolved into a full-fledged agency offering AI Solutions, PR & Media Services, and Event Management.",
  primaryText = "",
  buttonText = "Get Free Consultation",
  background = "",
  color = "#ffffff",
}) {
  const bgStyleMid = {
    backgroundImage: background ? `url(${background})` : "none",
  };

  return (
    <section className="okai-banner-root small-left" style={{ fontFamily }}>
      {/* global particle canvas is used — local canvas removed */}
      <div className="okai-banner-overlay" />
      <div className="okai-inner okai-container">
        {/* LEFT: small narrow text column */}
        <div className="okai-left-col">
          <div className="okai-left-eyebrow">{eyebrow}</div>

          {/* Small / condensed text like Okai */}
          <div className="okai-left-primary">{primaryText}</div>

          {/* Optional small description */}
          <p className="okai-left-desc">{description}</p>
          <p className="okai-left-desc">{description1}</p>

          <div className="okai-left-ctas">
          <Link to="/contact" className="okai-btn-primary small" role="button">
            {buttonText}
          </Link>


          {/* <button
              className="okai-btn-ghost small"
              onClick={() => {
                const section = document.getElementById("portfolio");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Our Work
            </button> */}
          </div>

         
        </div>

        {/* RIGHT: large image stack */}
        <div className="okai-right-col">
          <div className="okai-media-stack-right">
            <div
              className="okai-media-card okai-media-card-top"
              style={{
                 '--main-img': `url(${imagePath})`,
                '--hover-img': `url("/praneetha1.png")`

               
              }}
            />
            <div className="okai-description">
            
              <h4>Praneetha Devireddy</h4>
                <span>Founder and CEO </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
