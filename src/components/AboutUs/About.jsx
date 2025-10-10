import React from "react";
import { Link } from "react-router-dom";
import AboutMen from "../../../public/about-us.png"; // your image
 
function AboutHomeOne({ className }) {
  return (
    <section className={`about-sections-six ${className || ""}`}>
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
              <span className="sub-title"></span>
              <h2>
                All our experience <br />
                started <span>7 years ago</span>
              </h2>
              <p>
               Pranisha Technologies stands out as a creative and technology-driven digital solutions company, delivering high-quality services in branding, web development, and digital marketing. Their best work includes crafting professional brand identities through logo design, packaging, and hoarding creatives that leave a lasting impression. On the technology side, they excel in custom websites, WordPress solutions, ReactJS development, and mobile applications, ensuring businesses achieve strong online visibility.<br/>
               Their digital marketing expertise covers SEO, social media, and performance marketing, helping brands grow faster and reach the right audience. With a passionate team, industry-level strategies, and innovative execution, Pranisha Technologies has become a trusted partner for businesses seeking modern, scalable, and result-oriented digital solutions.
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