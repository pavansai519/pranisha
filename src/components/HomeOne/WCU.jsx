import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import WhyChoseImg from '../../assets/images/background/bg2.jpg';

function WCUHomeOne({ className }) {
  const [isOpen, setOpen] = useState(false)
    return (
        <>
          <section className={`why-choose-us-four ${className || ''}`}>
            <div className="auto-container">
                <div className="row align-items-lg-center">
                    <div className="content-column col-xl-5 col-lg-7 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">why choose our company</span>
                                <h2>Why Choose Our IT Services</h2>
                                <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
                            </div>
    
                            <div className="content-box pe-lg-5">
                                <div className="whychose-block-four">
                                    <i className="icon flaticon-business-018-startup"></i>
                                    <h5 className="title">Affordable Service Prices</h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                </div>
    
                                <div className="whychose-block-four">
                                    <i className="icon flaticon-business-012-startup"></i>
                                    <h5 className="title">Internal Networking</h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate.</div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="image-column col-xl-7 col-lg-5">
                        <div className="inner-column wow fadeInRight">
                            <figure className="image overlay-anim">
                                <img src={WhyChoseImg} alt=""/>
                                <div className="video-box video-box-home1 wow fadeInUp">
                                    <div className="content">
                                        <a onClick={() => setOpen(true)} className="play-now-two lightbox-image"><i className="icon fa fa-play"></i></a>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
}

export default WCUHomeOne;
