import React, { useState } from 'react';

import WorkImg from '../../assets/images/OUR VISION.webp';
import WorkImg1 from '../../assets/images/OUR MISSION.webp';

function TabHome5({ className }) {
    const [activeIndex, setActiveIndex] = useState(1);
  
    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <section className={`work-section ${className || ''}`}>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Tech Management</span>
                        <h2>The Best Source for <br/> IT Solutions</h2>
                    </div>

                    <div className="tabs-box work-tabs">
                        {/* {/ Tabs Box /} */}
                        <ul className="tab-btns tab-buttons">
                            <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)} data-tab="#tab1">Our Vision</li>
                            <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)} data-tab="#tab2">Our Mission</li>                        
                        </ul>
                
                        <div className="tabs-content">
                            <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                <div className="row">
                                    {/* {/ Content Column /} */}
                                    <div className="content-column col-xl-7 col-lg-6 order-2">
                                        <div className="inner-column">
                                            <h3>Our Vision</h3>
                                            {/* {/ <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company.</div> /} */}

                                            <div className="content-box">
                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right"></i>Digital Excellence</h5>
                                                    <p className="text">Creating seamless, high-impact digital experiences that inspire, engage, and transform brands globally.</p>
                                                </div>

                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right"></i>Client Empowerment</h5>
                                                    <p className="text">Empowering clients through strategy, creativity, and technology to achieve measurable, meaningful business growth.</p>
                                                </div>

                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right"></i> Innovation & Integrity</h5>
                                                    <p className="text">Innovating with purpose, delivering reliable, ethical, and future-ready digital solutions for modern brands.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* {/ Image Column /} */}
                                    <div className="image-column col-xl-5 col-lg-6">
                                        <img className="tab-image overlay-anim" src={WorkImg} alt=""/>
                                    </div>
                                </div>
                            </div>
            
                            <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                                <div className="row">
                                    {/* {/ Content Column /} */}
                                    <div className="content-column col-xl-7 col-lg-6 order-2">
                                        <div className="inner-column">
                                            <h3>Our Mission</h3>
                                            {/* <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for
                                                our Company.</div> */}

                                            <div className="content-box">
                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right"></i> Creative Innovation </h5>
                                                    <p className="text">Deliver groundbreaking digital solutions blending design, technology, and strategy to redefine modern brand experiences.</p>
                                                </div>

                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right"></i> Client Success </h5>
                                                    <p className="text">Collaborate closely with clients to transform their vision into impactful, results-driven digital realities.</p>
                                                </div>

                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right"></i> Mission: Quality & Trust</h5>
                                                    <p className="text">Maintain excellence, transparency, and reliability in every project to build lasting partnerships and credibility.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* {/ Image Column /} */}
                                    <div className="image-column col-xl-5 col-lg-6">
                                        <img className="tab-image overlay-anim" src={WorkImg1} alt=""/>
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

export default TabHome5;