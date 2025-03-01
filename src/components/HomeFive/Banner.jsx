import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Slide1 from '../../assets/images/main-slider/1.jpg'; 
import Slide2 from '../../assets/images/main-slider/2.jpg'; 

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

function ZeroHome5({ className }) {
    return (
        <>
          <section className={`banner-section-four ${className || ''}`}>
            <Swiper {...swiperOptions} className="banner-carousel owl-theme">
              <SwiperSlide className="slide-item">
                <div className="bg-image" style={{ backgroundImage: `url(${Slide1})` }}></div>
                <div className="auto-container">
                  <div className="content-box">
                    <h1 className="title animate-1">Tools For <br/>Development</h1>
                    <div className="text animate-2">There are many of passages of lorem Ipsum, but the majori have<br/> suffered alteration in some form.</div>
                    <div className="btn-box animate-3">
                      <Link to="/about" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Discover more</span></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="slide-item">
                <div className="bg-image" style={{ backgroundImage: `url(${Slide2})` }}></div>
                <div className="auto-container">
                  <div className="content-box">
                    <h1 className="title animate-1">Tools For <br/>Development</h1>
                    <div className="text animate-2">There are many of passages of lorem Ipsum, but the majori have<br/> suffered alteration in some form.</div>
                    <div className="btn-box animate-3">
                      <Link to="/about" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Discover more</span></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
        </>
    );
}

export default ZeroHome5;
