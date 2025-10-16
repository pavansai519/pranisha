import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
 
// Import Client Logos
import ClientImg from '../../assets/images/logos/1.png';
import ClientImg1 from "../../assets/images/logos/2.png";
import ClientImg2 from "../../assets/images/logos/3.png";
import ClientImg3 from "../../assets/images/logos/4.png";
import ClientImg4 from "../../assets/images/logos/5.png";
import ClientImg5 from "../../assets/images/logos/6.png";
import ClientImg6 from "../../assets/images/logos/7.png";
import ClientImg7 from "../../assets/images/logos/8.png";
import ClientImg8 from "../../assets/images/logos/9.png";
import ClientImg9 from "../../assets/images/logos/10.png";
import ClientImg10 from '../../assets/images/logos/11 (1).png';
import ClientImg11 from "../../assets/images/logos/12.png";
import ClientImg12 from "../../assets/images/logos/13.png";
import ClientImg13 from "../../assets/images/logos/14.png";
import ClientImg14 from "../../assets/images/logos/15.png";
import ClientImg15 from "../../assets/images/logos/16.png";
import ClientImg16 from "../../assets/images/logos/17.png";
import ClientImg17 from "../../assets/images/logos/18.png";
import ClientImg18 from "../../assets/images/logos/19.png";
import ClientImg19 from "../../assets/images/logos/20.png";
import ClientImg20 from "../../assets/images/logos/21.png";
import ClientImg21 from "../../assets/images/logos/22.png";
import ClientImg22 from "../../assets/images/logos/23.png";
import ClientImg23 from "../../assets/images/logos/24.png";
import ClientImg24 from "../../assets/images/logos/25.png";
import ClientImg25 from "../../assets/images/logos/26.png";
import ClientImg26 from "../../assets/images/logos/27.png";
import ClientImg27 from "../../assets/images/logos/28.png";
import ClientImg28 from "../../assets/images/logos/29.png";
import ClientImg29 from "../../assets/images/logos/30.png";
import ClientImg30 from '../../assets/images/logos/31.png';
import ClientImg31 from "../../assets/images/logos/32.png";
import ClientImg32 from "../../assets/images/logos/33.png";
import ClientImg33 from "../../assets/images/logos/34.png";
import ClientImg34 from "../../assets/images/logos/35.png";
import ClientImg35 from "../../assets/images/logos/36.png";
import ClientImg36 from "../../assets/images/logos/37.png";
import ClientImg37 from "../../assets/images/logos/38.png";
import ClientImg38 from "../../assets/images/logos/39.png";
import ClientImg39 from "../../assets/images/logos/40.png";
import ClientImg40 from '../../assets/images/logos/41.png';
import ClientImg41 from "../../assets/images/logos/42.png";
import ClientImg42 from "../../assets/images/logos/43.png";
import ClientImg43 from "../../assets/images/logos/44.png";
import ClientImg44 from "../../assets/images/logos/45.png";
import ClientImg45 from "../../assets/images/logos/46.png";
import ClientImg46 from "../../assets/images/logos/47.png";
import ClientImg47 from "../../assets/images/logos/48.png";
import ClientImg48 from "../../assets/images/logos/49.png";
import ClientImg49 from "../../assets/images/logos/50.png";
 
const clientLogos = [
ClientImg1, ClientImg2,ClientImg8,ClientImg45, ClientImg26,ClientImg22,ClientImg23,ClientImg9,ClientImg29,
ClientImg31,ClientImg35,  ClientImg38,ClientImg41,ClientImg42,ClientImg43,ClientImg44,ClientImg21,ClientImg40,
ClientImg39, ClientImg37,ClientImg34, ClientImg32,ClientImg30,ClientImg28,ClientImg27,ClientImg25, ClientImg24,
ClientImg20,ClientImg19, ClientImg18,ClientImg17,ClientImg16,  ClientImg15,ClientImg14,ClientImg13,ClientImg12,
ClientImg10,ClientImg7,ClientImg6,ClientImg5,ClientImg4, ClientImg3,ClientImg, ClientImg33, ClientImg36, ClientImg11,
ClientImg46,ClientImg47,ClientImg48,ClientImg49
];
 
function ClientsHomeOne({ className }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
 
  const totalSlides = 5;
 
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
 
    if (!isMobile) {
      startAutoSlide();
    }
 
    return () => {
      stopAutoSlide();
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
 
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 2000);
  };
  const stopAutoSlide = () => clearInterval(intervalRef.current);
 
  const getSlideLogos = (slideIndex) => {
    const start = slideIndex * 10;
    return clientLogos.slice(start, start + 10);
  };
 
  return (
    <section className={`clients-section ${className || ""}`}>
      <div className="auto-container">
        <div className="sec-title text-center">
          
          <h2>Our Clients</h2>
          <span className="sub-title pt-4" style={{fontSize:"18px", color:"#a0a0a0"}}>
          </span>
        </div>
 
        {/* Mobile/Tablet → marquee scroll */}
        {isMobile ? (
          <div className="marquee">
            <div className="marquee-content">
              {clientLogos.concat(clientLogos).map((logo, index) => (
                <div className="client-box" key={index}>
                  <Link to="/#">
                    <img src={logo} alt={`Client ${index + 1}`} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Desktop/Laptop → existing carousel */
          <div
            className="sponsors-outer"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <div className="clients-carousel">
              <div className="clients-grid">
                {getSlideLogos(currentSlide).map((logo, index) => (
                  <div className="client-box" key={index}>
                      <img src={logo} alt={`Client ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
 
            {/* Dots (hidden on mobile) */}
            <div className="carousel-dots">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className={`dot ${i === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
 
 
export default ClientsHomeOne;