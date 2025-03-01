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
};

const projects = [
  { id: 1, img: ProjectImg1, title: "Tech Solutions" },
  { id: 2, img: ProjectImg2, title: "Smart Visions" },
  { id: 3, img: ProjectImg3, title: "Platform Integration" },
  { id: 4, img: ProjectImg4, title: "Web Development" },
  { id: 5, img: ProjectImg1, title: "Tech Solutions" },
];

function ProjectHomeTwo({ className }) {
    return (
        <>
        <section className={`project-section alternate ${className || ''}`}>
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">recently Completed work</span>
              <h2>Improve & Enhance the <br/>Tech Projects</h2>
            </div>

            <div className="carousel-outer">
              <Swiper {...swiperOptions} className="project-carousel owl-theme">
                {projects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className="project-block">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link to="/project-details">
                              <img src={project.img} alt={project.title} loading="lazy" />
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
                          <span className="cat">DESIGN / IDEAS</span>
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

export default ProjectHomeTwo;
