import React from "react";
import { Link } from "react-router-dom";
import AboutMen from "../../../public/about-us.png"; // your image
 
function AboutHomeOne({ className }) {
  return (
    <section className={`about-section-six ${className || ""}`}>
      <div className="auto-container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="aboutimage-box">
              <img src={AboutMen} alt="About" />
            </div>
          </div>
 
          {/* Right Content */}
          <div className="col-lg-6 col-md-12">
            <div className="content-box">
              <span className="sub-title">ABOUT US</span>
              <h2>
                All our experience <br />
                started <span>7 years ago</span>
              </h2>
              <p>
                My first business card designed 7 years ago <br />gave us the
                motivation and drive to be today <br />offering a different and
                personalized service.
              </p>
 
              <Link to="/contact" className="theme-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default AboutHomeOne;