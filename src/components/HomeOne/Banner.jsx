import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import SliderImg1 from '../../assets/images/main-slider/1.jpg'; 
import SliderImg2 from '../../assets/images/main-slider/2.jpg'; 

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay, EffectFade],
  loop: true,
  autoplay: { delay: 5000, disableOnInteraction: false },
  navigation: true,
  pagination: { clickable: true },
  effect: "fade"
};

const slides = [
  {
    id: 1,
    image: SliderImg1,
    title: "Solutions for your businesses",
    heading: "Cost Effective Agency",
    text: "There are many passages of lorem Ipsum, but the majority have suffered alteration in some form.",
    link: "/contact"
  },
  {
    id: 2,
    image: SliderImg2,
    title: "Solutions for your businesses",
    heading: "IT Solutions & Services",
    text: "There are many passages of lorem Ipsum, but the majority have suffered alteration in some form.",
    link: "/contact"
  }
];


function ZeroHomeOne({ className }) {
    return (
        <>
            <section className={`main-slider ${className || ''}`}>
                <div className="outer-box">
                    <Swiper {...swiperOptions} className="hero-slider">
                      {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className="slide-item">
                          <div className="bg-image" style={{ backgroundImage: `url(${slide.image})` }}></div>
                          <div className="tp-dottedoverlay on"></div>
                          <div className="auto-container content-box pt-80 pb-150">
                            <div className="row">
                              <div className="content-column col-lg-7 pt-100">
                                <span className="title animate-1">{slide.title}</span>
                                <h1 className="animate-2">{slide.heading}</h1>
                                <p className="text animate-3">{slide.text}</p>
                                <div className="btn-box mt-30">
                                  <div className="btn-outer">
                                    <Link to={slide.link} className="theme-btn btn-style-one animate-4">
                                      <span className="btn-title">Get Started</span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default ZeroHomeOne;
