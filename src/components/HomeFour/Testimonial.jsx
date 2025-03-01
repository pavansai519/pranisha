import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import TestiImg1 from '../../assets/images/resource/testi-thumb-4.jpg';
import TestiImg2 from '../../assets/images/resource/testi-thumb-5.jpg';
import TestiImg3 from '../../assets/images/resource/testi-thumb-6.jpg';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 0,
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
          slidesPerView: 3,
          // spaceBetween: 30,
      },
  }
};

const testimonials = [
  {
    image: TestiImg1,
    name: 'Sarah Albert',
    designation: 'Designer',
    text: 'Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.',
  },
  {
    image: TestiImg2,
    name: 'Mike Hardson',
    designation: 'Designer',
    text: 'Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.',
  },
  {
    image: TestiImg3,
    name: 'Jessica Brown',
    designation: 'Designer',
    text: 'Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.',
  },
  {
    image: TestiImg1,
    name: 'Sarah Albert',
    designation: 'Designer',
    text: 'Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.',
  },
];

function TestimonialHome4({ className }) {
    return (
        <>
            <section className={`testimonial-section-two ${className || ''}`}>
              <div className="auto-container">
                <div className="row">
                  {/* Title Column */}
                  <div className="title-column col-xl-3 col-lg-12">
                    <div className="sec-title">
                      <span className="sub-title">Our feedbacks</span>
                      <h3>What They’re Talking About Company</h3>
                      <div className="text">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free text quis bibendum.</div>
                    </div>
                  </div>

                  {/* Testimonial Column */}
                  <div className="testimonial-column col-xl-9 col-lg-12">
                    <div className="inner-column">
                      {/* Testimonial Carousel */}
                      <Swiper {...swiperOptions} className="testimonial-carousel owl-theme">
                        {testimonials.map((testimonial, index) => (
                          <SwiperSlide key={index}>
                            <div className="testimonial-block-two">
                              <div className="inner-box">
                                <div className="content-box">
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
                                  <div className="thumb">
                                    <img src={testimonial.image} alt=""/>
                                  </div>
                                  <h6 className="name">{testimonial.name}</h6>
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

export default TestimonialHome4;
