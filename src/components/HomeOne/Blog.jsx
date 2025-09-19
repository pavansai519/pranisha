import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import NewsImg1 from '../../assets/images/resource/news-1.jpg';
import NewsImg2 from '../../assets/images/resource/news-2.jpg';
import NewsImg3 from '../../assets/images/resource/news-3.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
			breakpoints:{
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
};

const newsData = [
    { id: 1, img: NewsImg1, date: '28 OCT', title: 'Professional technology information & solutions are just like…' },
    { id: 2, img: NewsImg2, date: '28 OCT', title: 'Professional technology information & solutions are just like…' },
    { id: 3, img: NewsImg3, date: '28 OCT', title: 'Professional technology information & solutions are just like…' },
    { id: 4, img: NewsImg1, date: '28 OCT', title: 'Professional technology information & solutions are just like…' },
];

function BlogHomeTwo({ className }) {   
    return (
        <>
            <section className={`news-section-two ${className || ''}`}>
                <div className="auto-container">
                    <div className="row">
                        <div className="title-column col-xl-4 col-lg-4 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">from the blog</span>
                                    <h2>Our Latest News & Articles from the Blog</h2>
                                    <div className="text">There are many variations of passages of ipsum available, but the majority have suffered alteration in form.</div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-column col-xl-8 col-lg-8 col-md-12">
                            <div className="carousel-outer">
                                <Swiper {...swiperOptions} className="news-carousel">
                                    {newsData.map((news) => (
                                        <SwiperSlide key={news.id}>
                                            <div className="news-block">
                                                <div className="inner-box">
                                                    <div className="image-box">
                                                        <figure className="image">
                                                            <Link to="/news-details">
                                                                <img src={news.img} alt="News" />
                                                            </Link>
                                                        </figure>
                                                        <span className="date"><b>{news.date.split(' ')[0]}</b> {news.date.split(' ')[1]}</span>
                                                    </div>
                                                    <div className="content-box">
                                                        <ul className="post-info">
                                                            <li><i className="fa fa-user"></i> by Admin</li>
                                                            <li><i className="fa fa-tag"></i> Technology</li>
                                                        </ul>
                                                        <h4 className="title">
                                                            <Link to="/news-details">{news.title}</Link>
                                                        </h4>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                                        <div className="comments"><i className="fa fa-comments"></i> 02</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogHomeTwo;
