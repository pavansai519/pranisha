import React from "react";
import { FaChevronUp } from "react-icons/fa";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="back-to-top-footer" onClick={scrollToTop}>
      <FaChevronUp className="arrow" />
      <span>Back to top</span>
    </div>
  );
};

export default BackToTop;
