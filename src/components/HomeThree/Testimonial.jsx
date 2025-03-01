import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import TestiImg1 from '../../assets/images/resource/testi-thumb-1.jpg';
import TestiImg2 from '../../assets/images/resource/testi-thumb-2.jpg';
import TestiImg3 from '../../assets/images/resource/testi-thumb-3.jpg';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination:{
    dynamicBullets: true,
  },
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
          slidesPerView: 2,
          // spaceBetween: 30,
      },
      1350: {
          slidesPerView: 2,
          // spaceBetween: 30,
      },
  }
};

function TestimonialHomeThree({ className }) {
    return (
        <>
            <section className={`testimonial-section-five ${className || ''}`}>
              <div className="auto-container">
                <div className="row">
                  {/* Title Column */}
                  <div className="title-column col-xl-12 col-lg-12 col-md-12">
                    <div className="inner-column">
                      <div className="sec-title text-center">
                        <span className="sub-title">CLIENT’S TESTIMONIALS</span>
                        <h2>What They’re Talking About Us</h2>
                      </div>
                    </div>
                  </div>
                  <Swiper {...swiperOptions} className="testimonial-carousel-five owl-theme">
                    {[
                      {
                        image: TestiImg3,
                        name: 'Jessica Brown',
                        designation: 'Co Founder',
                        text: 'Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.',
                      },
                      {
                        image: TestiImg2,
                        name: 'Jessica Brown',
                        designation: 'Co Founder',
                        text: 'Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.',
                      },
                      {
                        image: TestiImg1,
                        name: 'Jessica Brown',
                        designation: 'Co Founder',
                        text: 'Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.',
                      },
                    ].map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="testimonial-block-five">
                          <div className="inner-box">
                            <div className="content-box">
                              <span className="icon far fa-quote-left"></span>
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
                              <figure className="thumb">
                                <img src={testimonial.image} alt=""/>
                              </figure>
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
            </section>
        </>
    );
}

export default TestimonialHomeThree;
