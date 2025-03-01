import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import ProjectImg1 from '../../assets/images/resource/project-5.jpg';
import ProjectImg2 from '../../assets/images/resource/project-6.jpg';
import ProjectImg3 from '../../assets/images/resource/project-7.jpg';

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
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
			slidesPerView: 3,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 3,
			// spaceBetween: 30,
		},
	}
};

const projects = [
  {
    image: ProjectImg1,
    title: 'Tech Solutions',
    category: 'DESIGN / IDEAS',
    link: '/project-details',
  },
  {
    image: ProjectImg2,
    title: 'Smart Visions',
    category: 'DESIGN / IDEAS',
    link: '/project-details',
  },
  {
    image: ProjectImg3,
    title: 'Platform Integration',
    category: 'DESIGN / IDEAS',
    link: '/project-details',
  },
  {
    image: ProjectImg1,
    title: 'Tech Solutions',
    category: 'DESIGN / IDEAS',
    link: '/project-details',
  },
];
  
function ProjectHome4({ className }) {
    return (
        <>
        <section className={`project-section-two ${className || ''}`}>
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">recently Completed work</span>
              <h2>Improve & Enhance the <br/>Tech Projects</h2>
            </div>

            <div className="carousel-outer">
              <Swiper {...swiperOptions} className="project-carousel-two owl-theme">
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="project-block-two">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link to={project.link} className="lightbox-image">
                              <img src={project.image} alt={project.title} />
                            </Link>
                          </figure>
                        </div>
                        <div className="content-box">
                          <h5 className="title">
                            <Link to={project.link}>{project.title}</Link>
                          </h5>
                          <span className="cat">{project.category}</span>
                          <Link to={project.link} className="icon">
                            <i className="fa fa-long-arrow-alt-right"></i>
                          </Link>
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

export default ProjectHome4;
