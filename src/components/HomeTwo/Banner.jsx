import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SliderImg1 from '../../assets/images/main-slider/2.jpg';

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

function ZeroHomeTwo({ className }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <section className={`banner-section ${className || ''}`}>
            <Swiper {...swiperOptions} className="banner-carousel owl-carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SliderImg1})` }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-1">Solutions for your businesses</span>
                                <h1 className="title animate-2">Innovative Tech <br/>Solutions</h1>
                                <div className="btn-box animate-3">
                                    <Link to="/about" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play"></i>watch video</a>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>

                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SliderImg1})` }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-1">Solutions for your businesses</span>
                                <h1 className="title animate-2">Innovative Tech <br/>Solutions</h1>
                                <div className="btn-box animate-3">
                                    <Link to="/about" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play"></i>watch video</a>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
            </Swiper>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
}

export default ZeroHomeTwo;