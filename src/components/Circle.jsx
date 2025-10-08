import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // <-- import Link
 
const BackToWorks = () => {
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
    <Link to="/">
      <div id="backtoworks" className={visible ? "active" : ""}>
        <div className="tooltip">Home</div>
        <div className="circle-wrapper">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 80 80"
            xmlSpace="preserve"
          >
            <circle className="circle-action is-inner" cx="40" cy="40" r="36"></circle>
            <circle className="circle-action is-outer" cx="40" cy="40" r="36"></circle>
          </svg>
          <span className="close-icon"> x</span>
        </div>
      </div>
    </Link>
  );
};
 
export default BackToWorks;