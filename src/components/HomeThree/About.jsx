import React from 'react';
import { Link } from 'react-router-dom';

import AboutImg1 from '../../assets/images/resource/about-5.jpg';
import AboutImg2 from '../../assets/images/resource/about-6.jpg';

function AboutHomeThree({ className }) {
    return (
        <>
          <section className={`about-section-three layout_6 ${className || ''}`}>
            <div className="auto-container">
              <div className="row">
                <div className="image-column col-lg-6">
                  <div className="inner-column wow fadeInLeft">
                    <figure className="image-1 overlay-anim wow fadeInUp"><img src={AboutImg1} alt=""/></figure>
                    <figure className="image-2 overlay-anim wow fadeInRight"><img src={AboutImg2} alt=""/></figure>
                  </div>
                </div>

                <div className="content-column col-lg-6 wow fadeInRight" data-wow-delay="600ms">
                  <div className="inner-column">
                    <div className="sec-title">
                      <span className="sub-title">Welcome to tech</span>
                      <h2>Best IT Technology Services you can Trust</h2>
                      <h5>The professional approach to technology.</h5>
                      <div className="text">System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis unde omnis natus error voluptatems accusa.</div>
                    </div>

                    <div className="content-box">
                      <div className="row">
                        <div className="about-block-three col-md-6">
                          <h5 className="title"><i className="icon fa fa-arrow-alt-circle-right"></i> Cloud Based </h5>
                          <p className="text">Lorem ipsum dolor sit amet not is consectetur notted</p>
                        </div>

                        <div className="about-block-three col-md-6">
                          <h5 className="title"><i className="icon fa fa-arrow-alt-circle-right"></i> Full Backup </h5>
                          <p className="text">Lorem ipsum dolor sit amet not is consectetur notted.</p>
                        </div>
                      </div>

                      <div className="about-info-box">
                        <span className="icon lnr-icon-phone"></span>
                        <div className="content">
                          <span className="title">Call to Get a Free Estimate</span>
                          <a href="tel:001112223333" className="number">00 111 222 3333</a>
                        </div>
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

export default AboutHomeThree;
