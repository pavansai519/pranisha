import React from "react";

function Footer() {
  return (
    <footer className="cracking-footer">
      <div className="footer-content">
        <h3>LET'S GET CRACKING</h3>
        <p>
          info@pranisha.com / +91 99633 26393
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} Pranisha Advertising Pvt Ltd
        </p>
      </div>

      
    </footer>
  );
}

export default Footer;
