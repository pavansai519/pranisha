import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "swiper/css/pagination";


import TestiImg1 from '../../assets/images/resource/testimonial-1.png';

import TestiImgS1 from '../../assets/images/resource/testi-thumb-1.jpg';
import TestiImgS2 from '../../assets/images/resource/testi-thumb-2.jpg';
import TestiImgS3 from '../../assets/images/resource/testi-thumb-3.jpg';

const testimonials = [
  {
    text: "This is due to their excellent service, competitive pricing, and customer support. It’s refreshing to get such a personal touch.",
    name: "Mike Hardson",
    designation: "Senior Designer",
    image: TestiImg1,
  },
  {
    text: "Duis aute lorem ipsum is simply free text available in the market reprehen. Their support is outstanding!",
    name: "Sarah Johnson",
    designation: "Marketing Manager",
    image: TestiImg1,
  },
  {
    text: "They provide excellent solutions and outstanding service. I highly recommend their team!",
    name: "David Williams",
    designation: "CEO, TechCorp",
    image: TestiImg1,
  },
];

const thumbsImages = [TestiImgS1, TestiImgS2, TestiImgS3, TestiImgS1];

function TestimonialHomeTwo({ className }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <section className={`testimonial-section ${className || ''}`}>
              <div className="auto-container">
                <div className="sec-title">
                  <span className="sub-title">Our feedbakcs</span>
                  <h2>What They’re Talking<br/> About Us</h2>
                </div>

                <div className="testimonials">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    autoPlay={1500}
                    loop={true}
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="swiper-container testimonial-content">
                    {testimonials.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="testimonial-block">
                          <div className="row">
                            <div className="content-column col-lg-6">
                              <div className="icon-box">
                                <span className="icon icon-quote"></span>
                                <div className="rating">
                                  {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fa fa-star"></i>
                                  ))}
                                </div>
                              </div>
                              <div className="text">{item.text}</div>
                              <div className="info-box">
                                <h4 className="name">{item.name}</h4>
                                <span className="designation">{item.designation}</span>
                              </div>
                            </div>
                            <div className="image-column col-lg-6">
                              <figure className="image"><img src={item.image} alt={item.name} /></figure>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    autoPlay={1500}
                    slidesPerView={3}
                    direction= 'vertical'
                    freeMode={true}
                    loop={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="swiper-container testimonial-thumbs">
                    {thumbsImages.map((thumb, index) => (
                      <SwiperSlide key={index} className="testimonial-thumb">
                        <figure className="image"> <img src={thumb} alt={`Testimonial ${index + 1}`} /> </figure>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </section>
        </>
    );
}

export default TestimonialHomeTwo;
