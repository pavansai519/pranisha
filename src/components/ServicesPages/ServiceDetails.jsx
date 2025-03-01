import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeTwo/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';

import ServiceBgWd from '../../assets/images/resource/contact.jpg';
import ServiceBgWd1 from '../../assets/images/resource/overlay-shape.png';

import ServiceDtls from '../../assets/images/resource/service-details.jpg';

function ServiceDetails() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })
  
    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Header />
            <PageTitle
                title="Services Details"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/service-details', title: 'Services Details' },
                ]}
            />
            <section className="services-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service-sidebar">
                                <div className="sidebar-widget service-sidebar-single">
                                    <div className="service-list">
                                        <ul>
                                            <li><Link to="/service-details" className="current"><i className="fas fa-angle-right"></i><span>Digital Marketing</span></Link></li>
                                            <li className="current"><Link to="/service-details"><i className="fas fa-angle-right"></i><span>UI/UX Designing</span></Link></li>
                                            <li><Link to="/service-details"><i className="fas fa-angle-right"></i><span>Product Development</span></Link></li>
                                            <li><Link to="/service-details"><i className="fas fa-angle-right"></i><span>Data Analysis</span></Link></li>
                                            <li><Link to="/service-details"><i className="fas fa-angle-right"></i><span>Security System</span></Link></li>
                                            <li><Link to="/service-details"><i className="fas fa-angle-right"></i><span>Data Visualization</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget banner-widget">
                                    <div className="widget-content" style={{ backgroundImage: `url(${ServiceBgWd})` }}>
                                        <div className="shape" style={{ backgroundImage: `url(${ServiceBgWd1})` }}></div>
                                        <div className="content-box">
                                            <div className="icon-box">
                                            <i className="lnr lnr-icon-pie-chart"></i>
                                            </div>
                                            <h3>Be healthy & eat only fresh</h3>
                                            <Link to="/contact" className="theme-btn btn-style-one"><span className="btn-title"> Contact us</span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget service-sidebar-single mt-4">
                                    <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                                        <Link to="/contact" className="theme-btn btn-style-one d-grid"><span className="btn-title"><span className="fas fa-file-pdf"></span> download pdf file</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="services-details__content">
                                <img src={ServiceDtls} alt="" />
                                <h2 className="mt-4">Service Overview</h2>
                                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                <div className="content">
                                    <div className="text">
                                        <h3>Service Center</h3>
                                        <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                    <div className="feature-list">
                                        <div className="row clearfix">
                                            <div className="col-md-6 column">
                                                <div className="single-item">
                                                <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                <h6 className="title">Fast home delivery</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-6 column">
                                                <div className="single-item">
                                                <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                <h6 className="title">Secure Payments</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-6 column">
                                                <div className="single-item">
                                                <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                <h6 className="title">Delivering best products</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-6 column">
                                                <div className="single-item">
                                                <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                <h6 className="title">Food Inspections</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-6 column">
                                                <div className="single-item">
                                                <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                <h6 className="title">Generator Systems</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-6 column">
                                                <div className="single-item">
                                                <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                <h6 className="title">Assessments</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <h3>Frequently Asked Question</h3>
                                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <ul className="accordion-box wow fadeInRight">
                                        {/* Block */}
                                        <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>Is my technology allowed on tech?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* Block */}
                                        <li className="accordion block active-block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>How to soft launch your business?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* Block */}
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>How to turn visitors into contributors
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* Block */}
                                        <li className="accordion block">
                                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>How can i find my solutions?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
        </>
    );
}

export default ServiceDetails;
