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
  // pagination:{
  //   dynamicBullets: true,
  // },

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

const testimonials = [
  {
    image: TestiImg1,
    name: 'Vamshi Krishna',
    designation: 'Developer',
    text: 'I was looking for a reliable digital marketing agency that could help me with my SEO and Google Ads campaigns, and I am glad that I found Pranisha Technologies. Their team is highly professional and knowledgeable, and they helped me.',
  },
  {
    image: TestiImg2,
    name: 'Suresh Deevi',
    designation: 'Client',
    text: 'Pranisha Technologies helped us with influencer marketing campaigns, and we were impressed with their approach and results. Their team understood our target audience and goals, and they helped us to reach out to the right influencers and maximize our ROI.',
  },
  {
    image: TestiImg3,
    name: 'Goutham Kumar',
    designation: 'Designer',
    text: "I am extremely happy with the website design and development services provided by Pranisha Technologies. They not only understood my requirements but also offered valuable suggestions to improve the website's performance. ",
  },
  {
    image: TestiImg1,
    name: 'Khaja Wasim',
    designation: 'Client',
    text: 'Pranisha Technologies provided us with a stunning website design that perfectly reflected our brand’s image and values. Their team was highly responsive and easy to work with, and they delivered the project on time and within budget. We are extremely...',
  },
  {
    image: TestiImg1,
    name: 'Laxman',
    designation: 'Developer',
    text: 'Pranisha Technologies helped us with our social media marketing campaigns, and the results have been exceptional. Their team is highly skilled and knowledgeable, and they helped us to reach a wider audience and improve our engagement rates. ',
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
                      <h4>What They’re Talking About Company</h4>
                      <div className="text">Hear what our clients say — real stories of success, satisfaction, and impactful digital transformations.
                  </div>
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
                                  {/* <div className="thumb">
                                    <img src={testimonial.image} alt=""/>
                                  </div> */}
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
