import React from 'react';
import { Link } from 'react-router-dom';
function ServiceHomeOne({ className }) {
    return (
        <>
            <section className={`services-section-four ${className || ''}`}>
                <div className="anim-icons">
                    <span className="icon icon-lines-9-top bounce-x"></span>
                    <span className="icon icon-dots-9-top bounce-y"></span>
                </div>
                <div className="auto-container">
                    <div className="row">
                        <div className="sec-title col-lg-3 col-md-6 wow fadeInUp">
                            <span className="sub-title">Services we offer</span>
                            <h2>We Provide Full Range Services</h2>
                        </div>
        
                        <div className="service-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box ">
                                <div className="icon-box">
                                    <i className="icon flaticon-business-012-startup"></i>
                                </div>
                                <h5 className="title"><Link to="/service-details">Digital <br/>Marketing</Link></h5>
                                <div className="text">Providing the solutions for tech business</div>
                            </div>
                        </div>
        
                        <div className="service-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="800ms">
                            <div className="inner-box ">
                                <div className="icon-box">
                                    <i className="icon flaticon-business-046-like"></i>
                                </div>
                                <h5 className="title"><Link to="/service-details">Branding</Link></h5>
                                <div className="text">Providing the solutions for tech business</div>
                            </div>
                        </div>
        
                        <div className="service-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1200ms">
                            <div className="inner-box ">
                                <div className="icon-box">
                                    <i className="icon flaticon-business-006-target"></i>
                                </div>
                                <h5 className="title"><Link to="/service-details">AI</Link></h5>
                                <div className="text">Providing the solutions for tech business</div>
                            </div>
                        </div>
        
                        <div className="service-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1200ms">
                            <div className="inner-box ">
                                <div className="icon-box">
                                    <i className="icon flaticon-business-006-target"></i>
                                </div>
                                <h5 className="title"><Link to="/service-details">Cyber Security</Link></h5>
                                <div className="text">Providing the solutions for tech business</div>
                            </div>
                        </div>
        
                        <div className="service-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1200ms">
                            <div className="inner-box ">
                                <div className="icon-box">
                                    <i className="icon flaticon-business-006-target"></i>
                                </div>
                                <h5 className="title"><Link to="/service-details">E-commerce</Link></h5>
                                <div className="text">Providing the solutions for tech business</div>
                            </div>
                        </div>
        
                        <div className="short-banner-six col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                            <div className="banner-inner">
                                <p>Get Your IT Technology Solutions</p>
                                <h4>Don't Waste a Second! Call Us to Solve Your Any IT Solutions</h4>
                                <Link to="/projects" className="theme-btn btn-style-two"><span className="btn-title">Find your solution</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServiceHomeOne;
