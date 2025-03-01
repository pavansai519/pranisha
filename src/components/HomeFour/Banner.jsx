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
  navigation: true,
  slidesPerView: 1,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true
};

function ZeroHome4({ className }) {
    return (
        <>
            <section className={`banner-section-three ${className || ''}`}>
                <Swiper {...swiperOptions} className="banner-carousel owl-theme">
                    <SwiperSlide className="slide-item">
                      <div className="bg-image" style={{ backgroundImage: `url(${SliderImg1})` }}></div>
                      <div className="auto-container">
                        <div className="content-box">
                          <h1 className="title animate-1">Innovations</h1>
                          <h2 className="sub-title animate-2">Technology Partners</h2>
                          <div className="btn-box animate-3">
                            <Link to="/about" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Discover more</span></Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                      <div className="bg-image" style={{ backgroundImage: `url(${SliderImg2})` }}></div>
                      <div className="auto-container">
                        <div className="content-box">
                          <h1 className="title animate-1">Innovations</h1>
                          <h2 className="sub-title animate-2">Technolgy Partners</h2>
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

export default ZeroHome4;
