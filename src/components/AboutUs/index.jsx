import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeTwo/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Team from '../HomeFour/Team.jsx';
import Clients from '../HomeOne/Clients.jsx';
import { Link } from 'react-router-dom';

import MenImg from '../../assets/images/resource/men.png';

function AboutUs() {

    return (
        <>
        <Header />
            <PageTitle
                title="About Us"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/about-us', title: 'About us' },
                ]}
            />
            <section className="about-section-six">
                <div className="auto-container">
                  <div className="row">
                      <div className="content-column col-xl-6 col-lg-7 order-2 wow fadeInRight"
                          data-wow-delay="600ms">
                          <div className="inner-column">
                              <div className="sec-title">
                                  <span className="sub-title">About Our Company</span>
                                  <h2>Always Deliver More than you Expected</h2>
                                  <div className="text">Sed non odio non elit porttitor tincidunt. Donec fermentum, elit sit amet gravida molestie, orci dui eleifend sem, at blandit ipsum diam non purus. Duis dapibus nisi eget vehicula dignissim.</div>
                              </div>
      
                              <div className="content-box">
                                  <div className="about-block-four">
                                      <i className="icon flaticon-business-018-startup"></i>
                                      <h5 className="title">End to End Developement </h5>
                                      <div className="text">Sed non odio non elit porttitor tincidunt. Donec fermentum, elit sit amet</div>
                                  </div>
      
                                  <div className="about-block-four">
                                      <i className="icon flaticon-business-027-world"></i>
                                      <h5 className="title">Software IT Outsource</h5>
                                      <div className="text">Sed non odio non elit porttitor tincidunt. Donec fermentum, elit sit amet</div>
                                  </div>
      
                                  <ul className="list-style-three">
                                      <li>Sed non odio non elit porttitor tincidunt donec</li>
                                      <li>Sed non odio non elit porttitor tinc</li>
                                  </ul>
                              </div>
      
                              <div className="btm-box">
                                  <Link to="/about" className="theme-btn btn-style-three"><span className="btn-title">Discover more</span></Link>
                              </div>
                          </div>
                      </div>
      
                      <div className="image-column col-xl-6 col-lg-5">
                          <div className="inner-column wow fadeInLeft">
                              <div className="image-box">
                                  <figure className="image wow fadeIn"><img src={MenImg} alt=""/></figure>
                                  <div className="completed-projects">
                                      <strong>870+</strong>
                                      <div className="text">PROJECT DONE</div>
                                  </div>
                                  <div className="experience bounce-y">
                                      <strong>25</strong>
                                      <div className="text">Years of <br/>Experience</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            </section>
            <section className="industries-section style-two">
                <div className="auto-container">
                    <div className="sec-title text-center light">
                        <span className="sub-title">Services we’re offering</span>
                        <h2>We’re Dedicated to Serve <br/>you All Time</h2>
                    </div>
                    <div className="row justify-content-center">
                      {[
                        { icon: "flaticon-business-011-dollar", title: "Banking" },
                        { icon: "flaticon-business-049-presentation", title: "Healthcare" },
                        { icon: "flaticon-business-061-meeting", title: "Education" },
                        { icon: "flaticon-business-030-settings", title: "Manufacturing" },
                        { icon: "flaticon-business-054-graph", title: "Capital Markets" },
                        { icon: "flaticon-business-020-hierarchy", title: "Networking" }
                      ].map((item, index) => (
                        <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" key={index}>
                          <div className="inner-box">
                            <i className={`icon ${item.icon}`}></i>
                            <h6 className="title"><Link to="/service-details">{item.title}</Link></h6>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
            </section>
            <Team className="pb-0" />
            <Clients />
            <Footer />
            <BackToTop />
        </>
    );
}

export default AboutUs;
