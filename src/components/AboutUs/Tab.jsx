import React, { useState } from 'react';

import WorkImg from '../../assets/images/resource/work-1.jpg';

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
                            <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)} data-tab="#tab2">Our Mission</li>                        </ul>
                
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
                                                    <h5 className="title"><i className="icon fa fa-angle-right"></i>To Deliver Optimum Insights</h5>
                                                    <p className="text">Strategies, and conversions by churning out fresh marketing ideas.</p>
                                                </div>

                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right"></i> To not only innovate</h5>
                                                    <p className="text">but also outperform competitors in every way possible.</p>
                                                </div>

                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right"></i> To bring commercial</h5>
                                                    <p className="text">success for our valuable customers.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* {/ Image Column /} */}
                                    <div className="image-column col-xl-5 col-lg-6">
                                        <figure className="image overlay-anim"><img src={WorkImg} alt=""/></figure>
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
                                                    <h5 className="title"><i className="icon fa fa-angle-right"></i> To work with strategies </h5>
                                                    <p className="text">that drive your brand through the roof.</p>
                                                </div>

                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right"></i> To contribute to your </h5>
                                                    <p className="text">business growth with our digital marketing expertise.</p>
                                                </div>

                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right"></i> To acquire the </h5>
                                                    <p className="text">WOW factor through our services.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* {/ Image Column /} */}
                                    <div className="image-column col-xl-5 col-lg-6">
                                        <figure className="image overlay-anim"><img src={WorkImg} alt=""/></figure>
                                    </div>
                                </div>
                            </div>
            
                            {/* <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                                <div className="row"> */}
                                    {/* {/ Content Column /} */}
                                    {/* <div className="content-column col-xl-7 col-lg-6 order-2">
                                        <div className="inner-column">
                                            <h3>We Execute Our ideas From The Start to Finish</h3>
                                            <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for
                                                our Company.</div>

                                            <div className="content-box">
                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right"></i> Cloud Based Services </h5>
                                                    <p className="text">Web designing in a powerful way of just</p>
                                                </div>

                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right"></i> End to End Solutions </h5>
                                                    <p className="text">Web designing in a powerful way of just</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* {/ Image Column /} */}
                                    {/* <div className="image-column col-xl-5 col-lg-6">
                                        <figure className="image overlay-anim"><img src={WorkImg} alt=""/></figure>
                                    </div> */}
                                {/* </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TabHome5;