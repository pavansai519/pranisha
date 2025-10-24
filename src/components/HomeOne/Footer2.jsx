import React from "react";

function Footer() {
  return (
    <footer className="cracking-footerr">
      <div className="footer-contentt">
        <div className="contact-line">
    <p>
      Let’s Collaborate{" "}
      <a href="/contact" className="contact-btn1">
        Contact Us
      </a>
    </p>
  </div>
        <h3>START YOUR JOURNEY WITH US</h3>
        <p>
          info@pranisha.com / +91 99633 26393
        </p>
        <p className="footer-copyy">
          © {new Date().getFullYear()} Pranisha Advertising Pvt Ltd
        </p>
      </div>

      
    </footer>
  );
}

export default Footer;
