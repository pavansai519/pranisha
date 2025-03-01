import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import ProjectImg1 from '../../assets/images/resource/project-1.jpg';
import ProjectImg2 from '../../assets/images/resource/project-2.jpg';
import ProjectImg3 from '../../assets/images/resource/project-3.jpg';
import ProjectImg4 from '../../assets/images/resource/project-4.jpg';

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 30,
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
			slidesPerView: 4,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 4,
			// spaceBetween: 30,
		},
	}
}

const projects = [
  { img: ProjectImg1, title: "Tech Solutions", category: "DESIGN / IDEAS" },
  { img: ProjectImg2, title: "Smart Visions", category: "DESIGN / IDEAS" },
  { img: ProjectImg3, title: "Platform Integration", category: "DESIGN / IDEAS" },
  { img: ProjectImg4, title: "Web Development", category: "DESIGN / IDEAS" },
  { img: ProjectImg2, title: "Smart Visions", category: "DESIGN / IDEAS" },
];;

function ProjectHomeOne({ className }) {
    return (
        <>
        <section className={`project-section style-two pb-0 overflow-hidden ${className || ''}`}>
          <div className="auto-container">
            <div className="sec-title light">
              <div className="row">
                <div className="col-lg-7">
                  <span className="sub-title">recently Completed work</span>
                  <h2>Improve & Enhance the <br/>Best Tech Projects</h2>
                </div>
                <div className="col-lg-5">
                  <div className="text">There are many variations of passages of available but majority have suffered
                    alteration in some form, by humou or randomised words which don't look even slightly believable.
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-outer">
              <Swiper {...swiperOptions} className="project-carousel owl-theme">
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="project-block">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link to="/project-details" className="lightbox-image">
                              <img src={project.img} alt={project.title} />
                            </Link>
                          </figure>
                          <Link to="/project-details" className="icon">
                            <i className="fa fa-long-arrow-alt-right"></i>
                          </Link>
                        </div>
                        <div className="content-box">
                          <h4 className="title">
                            <Link to="/project-details">{project.title}</Link>
                          </h4>
                          <span className="cat">{project.category}</span>
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

export default ProjectHomeOne;
