import React from 'react';
import { Link } from 'react-router-dom';

import AboutImg1 from '../../assets/images/resource/about-5.jpg';
import AboutImg2 from '../../assets/images/resource/about-6.jpg';

const Progress_Line = ({ label, percent }) => (
  <div className="progress-box">
      <p>{label}</p>
      <div className="bar-inner">
          <div className="bar progress-line" style={{ width: `${percent}%` }}></div>
          <div className="count-text">{`${percent}%`}</div>
      </div>
  </div>
);
function AboutHome5({ className }) {
    return (
        <>
          <section className={`about-section-three pb-60 ${className || ''}`}>
            <div className="auto-container">
              <div className="row">
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
                        <div className="about-block-three col-lg-6 col-md-6 col-sm-12">
                          <h5 className="title"><i className="icon fa fa-arrow-alt-circle-right"></i> Cloud Based </h5>
                          <p className="text">Lorem ipsum dolor sit amet not is consectetur notted</p>
                        </div>
                        <div className="about-block-three col-lg-6 col-md-6 col-sm-12">
                          <h5 className="title"><i className="icon fa fa-arrow-alt-circle-right"></i> Full Backup </h5>
                          <p className="text">Lorem ipsum dolor sit amet not is consectetur notted.</p>
                        </div>
                      </div>
                      {/* Skills */}
                      <div className="skills">
                        {/* Skill Item */}
                        <div className="skill-item">
                          <div className="skill-header">
                            <h6 className="skill-title">Technology</h6>
                          </div>
                          <div className="skill-bar">
                            <div className="bar-inner">
                              <div className="bar progress-line" style={{ width: `${90}%` }}>
                                <div className="skill-percentage">
                                  <div className="count-box">90%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="btn-box">
                        <Link to="/about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Column */}
                <div className="image-column col-lg-6">
                  <div className="inner-column wow fadeInLeft">
                    <figure className="image-1 overlay-anim wow fadeInUp"><img src={AboutImg1} alt=""/></figure>
                    <figure className="image-2 overlay-anim wow fadeInRight"><img src={AboutImg2} alt=""/></figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}

export default AboutHome5;
