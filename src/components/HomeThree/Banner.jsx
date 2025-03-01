import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SliderImg1 from '../../assets/images/main-slider/1.jpg'; 
import SliderImg2 from '../../assets/images/main-slider/2.jpg'; 

const swiperOptions = {
  modules: [Autoplay, Navigation],
  slidesPerView: 1,
  navigation: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true
};

function ZeroHome3({ className }) {
  return (
    <>
    <section className={`banner-section-two ${className || ''}`}>
      <Swiper {...swiperOptions} className="banner-carousel owl-carousel owl-theme">
        <SwiperSlide className="slide-item">
          <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/2.jpg)' }}></div>
          <div className="bg-image" style={{ backgroundImage: `url(${SliderImg2})` }}></div>
          <div className="auto-container">
            <div className="content-box">
              <span className="sub-title animate-2">Solutions for your businesses</span>
              <h1 className="title animate-3">Technology Solutaions for Future</h1>
              <div className="btn-box animate-4">
                <Link to="/about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide-item">
          <div className="bg-image" style={{ backgroundImage: `url(${SliderImg1})` }}></div>
          <div className="auto-container">
            <div className="content-box">
              <span className="sub-title animate-2">Solutions for your businesses</span>
              <h1 className="title animate-3">Technology Solutaions for Future</h1>
              <div className="btn-box animate-4">
                <Link to="/about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  );
}

export default ZeroHome3;