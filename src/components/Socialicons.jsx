import React, { useEffect, useState } from "react";
 
function Socials() {
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <div id="socials-holder" className={visible ? "active" : ""}>
      <ul className="socials-text">
        <li>
          <a
            href="https://www.facebook.com/pranishatechnologies"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/pranishatechnologies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/pranishatechnologies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}
 
export default Socials;