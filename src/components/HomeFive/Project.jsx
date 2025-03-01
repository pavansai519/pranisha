import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import ProjectImg1 from '../../assets/images/resource/project-8.jpg';
import ProjectImg2 from '../../assets/images/resource/project-9.jpg';
import ProjectImg3 from '../../assets/images/resource/project-10.jpg';
import ProjectImg4 from '../../assets/images/resource/project-11.jpg';

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
			slidesPerView: 3,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 4,
			// spaceBetween: 30,
		},
	}
};

const projecth5 = [
  { id: 1, img: ProjectImg1, title: "Tech Solutions", cate: "DESIGN / IDEAS"},
  { id: 2, img: ProjectImg2, title: "Tech Solutions", cate: "DESIGN / IDEAS"},
  { id: 3, img: ProjectImg3, title: "Tech Solutions", cate: "DESIGN / IDEAS"},
  { id: 4, img: ProjectImg1, title: "Tech Solutions", cate: "DESIGN / IDEAS"},
  { id: 5, img: ProjectImg2, title: "Tech Solutions", cate: "DESIGN / IDEAS"},
];

function ProjectHome5({ className }) {
    return (
        <>
        <section className={`project-section-three overflow-hidden ${className || ''}`}>
          <div className="auto-container">
            <div className="sec-title light">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <span className="sub-title">recently Completed work</span>
                  <h2>Improve & Enhance the <br/>Tech Projects</h2>
                </div>
                <div className="col-lg-5 text-end btn-box">
                  <Link to="/projects" className="theme-btn btn-style-one"><span className="btn-title">View all work</span></Link>
                </div>
              </div>
            </div>

            <div className="carousel-outer">
              {/* Prject Carousel */}
              <Swiper {...swiperOptions} className="project-carousel-three owl-theme">
                {projecth5.map((projecth5) => (
                  <SwiperSlide key={projecth5.id} className="project-block-three">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image"><Link to="/project-details" className="lightbox-image"><img src={projecth5.img} alt=""/></Link></figure>
                        <div className="overlay-box">
                          <Link to="/project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                          <h4 className="title"><Link to="/project-details">{projecth5.title}</Link></h4>
                          <span className="cat">{projecth5.cate}</span>
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

export default ProjectHome5;
