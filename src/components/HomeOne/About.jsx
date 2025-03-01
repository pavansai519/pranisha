import React from 'react';
import { Link } from 'react-router-dom';
import AboutMen from '../../assets/images/resource/men.png';

function AboutHomeOne({ className }) {
    return (
        <>
          <section className={`about-section-six pt-0 pb-70 ${className || ''}`}>
            <div className="features-section pull-up pt-0">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row justify-content-center">
                            <div className="service-block-three col wow fadeInUp">
                                <div className="inner-box ">
                                    <i className="icon flaticon-business-002-graph"></i>
                                    <h6 className="title"><Link to="/service-details">Branding </Link></h6>
                                    <div className="text">Providing the solutions for tech business</div>
                                </div>
                            </div>
    
                            <div className="service-block-three col wow fadeInUp" data-wow-delay="200ms">
                                <div className="inner-box ">
                                    <i className="icon flaticon-business-010-startup"></i>
                                    <h6 className="title"><Link to="/service-details">Digital Markting</Link></h6>
                                    <div className="text">Providing the solutions for tech business</div>
                                </div>
                            </div>
    
                            <div className="service-block-three col wow fadeInUp" data-wow-delay="400ms">
                                <div className="inner-box ">
                                    <i className="icon flaticon-business-030-settings"></i>
                                    <h6 className="title"><Link to="/service-details">AI</Link></h6>
                                    <div className="text">Providing the solutions for tech business</div>
                                </div>
                            </div>
    
                            <div className="service-block-three col wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner-box ">
                                    <i className="icon flaticon-business-045-stationery"></i>
                                    <h6 className="title"><Link to="/service-details">Web Designing</Link></h6>
                                    <div className="text">Providing the solutions for tech business</div>
                                </div>
                            </div>
    
                            {/* <div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
                                <div className="inner-box">
                                    <i className="icon flaticon-business-054-graph"></i>
                                    <h6 className="title"><Link to="/service-details">Data <br/>Analysis</Link></h6>
                                    <div className="text">Providing the solutions for tech business</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
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
                                <figure className="image wow fadeIn"><img src={AboutMen} alt=""/></figure>
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
        </>
    );
}

export default AboutHomeOne;
