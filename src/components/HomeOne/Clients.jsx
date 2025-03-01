import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import ClientImg from '../../assets/images/resource/client.png';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 5,
        },
    }
};

const clientLogos = [ClientImg, ClientImg, ClientImg, ClientImg, ClientImg, ClientImg];

function ClientsHomeOne({ className }) {
    return (
        <>
        <section className={`clients-section ${className || ''}`}>
            <div className="auto-container">
                <div className="sponsors-outer">
                    <Swiper {...swiperOptions} className="clients-carousel owl-theme">
                        {clientLogos.map((logo, index) => (
                            <SwiperSlide key={index} className="slide-item">
                                <Link to="/#">
                                    <img src={logo} alt={`Client ${index + 1}`} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
        </>
    );
}

export default ClientsHomeOne;
