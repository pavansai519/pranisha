import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import TestiImgBg from '../../assets/images/resource/testimonial-bg.png';

import TestiImg from '../../assets/images/resource/testi-thumb-3.jpg';

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
};

function TestimonialHomeOne({ className }) {
  return (
    <>
      <section className={`testimonial-section-four pb-0 ${className || ''}`}>
          <div className="auto-container">
            <div className="row">
              <div className="title-column col-xl-5 col-lg-6 col-md-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">Our feedbacks</span>
                    <h2>What They’re Talking About Us</h2>
                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-column col-xl-7 col-lg-6 col-md-12">
                <div className="carousel-outer">
                  <div className="testimonial-bg" style={{ backgroundImage: `url(${TestiImgBg})` }}></div>
                  <Swiper {...swiperOptions} className="testimonial-carousel-four owl-theme">
                    {[
                      {
                        image: TestiImg,
                        name: "Jessica Brown",
                        designation: "Co Founder",
                        text: "Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra."
                      },
                      {
                        image: TestiImg,
                        name: "Jessica Brown",
                        designation: "Co Founder",
                        text: "Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra."
                      }
                    ].map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="testimonial-block-four">
                          <div className="inner-box">
                            <div className="content-box">
                              <span className="icon icon-quote"></span>
                              <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </div>
                              <div className="text">{testimonial.text}</div>
                            </div>
                            <div className="info-box">
                              <figure className="thumb"><img src={testimonial.image} alt=""/></figure>
                              <h5 className="name">{testimonial.name}</h5>
                              <span className="designation">{testimonial.designation}</span>
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

export default TestimonialHomeOne;
