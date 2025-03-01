import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import TeamImg1 from '../../assets/images/resource/team-2.jpg';
import TeamImg2 from '../../assets/images/resource/team-3.jpg';
import TeamImg3 from '../../assets/images/resource/team-4.jpg';

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

const teamMembers = [
  {
    image: TeamImg3,
    name: 'Adman Michel',
    designation: 'Web Developer',
    socialLinks: {
      twitter: '#',
      facebook: '#',
      pinterest: '#',
      instagram: '#',
    },
  },
  {
    image: TeamImg2,
    name: 'Jessica Brown',
    designation: 'Web Developer',
    socialLinks: {
      twitter: '#',
      facebook: '#',
      pinterest: '#',
      instagram: '#',
    },
  },
  {
    image: TeamImg1,
    name: 'Richerd William',
    designation: 'Web Developer',
    socialLinks: {
      twitter: '#',
      facebook: '#',
      pinterest: '#',
      instagram: '#',
    },
  },
  {
    image: TeamImg3,
    name: 'Adman Michel',
    designation: 'Web Developer',
    socialLinks: {
      twitter: '#',
      facebook: '#',
      pinterest: '#',
      instagram: '#',
    },
  },
];

function TeamHome5({ className }) {
    return (
        <>
          <section className={`team-section-ten ${className || ''}`}>
            <div className="auto-container">
              <div className="row">
                {/* Title Column */}
                <div className="title-column col-xl-4 col-lg-4 col-md-12">
                  <div className="inner-column">
                    <div className="sec-title">
                      <span className="sub-title">our Expart Members</span>
                      <h2>Professional Expert Team</h2>
                      <div className="text">There are many variations of passages of ipsum available, but the majority have suffered alteration in form.</div>
                    </div>
                  </div>
                </div>

                {/* Carousel Column */}
                <div className="carousel-column col-xl-8 col-lg-8 col-md-12">
                  <div className="carousel-outer">
                    <Swiper {...swiperOptions} className="team-ten-carousel owl-theme">
                      {teamMembers.map((member, index) => (
                        <SwiperSlide key={index}>
                          <div className="team-block-two">
                            <div className="inner-box">
                              <div className="info-box">
                                <h5 className="name">
                                  <Link to="/team-details">{member.name}</Link>
                                </h5>
                                <span className="designation">{member.designation}</span>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-links">
                                  <Link to={member.socialLinks.twitter}>
                                    <i className="fab fa-twitter"></i>
                                  </Link>
                                  <Link to={member.socialLinks.facebook}>
                                    <i className="fab fa-facebook-f"></i>
                                  </Link>
                                  <Link to={member.socialLinks.pinterest}>
                                    <i className="fab fa-pinterest-p"></i>
                                  </Link>
                                  <Link to={member.socialLinks.instagram}>
                                    <i className="fab fa-instagram"></i>
                                  </Link>
                                </div>
                              </div>
                              <div className="image-box">
                                <figure className="image">
                                  <Link to="/team-details">
                                    <img src={member.image} alt={member.name} />
                                  </Link>
                                </figure>
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

export default TeamHome5;
