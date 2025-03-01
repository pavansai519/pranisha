import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import WhyChoseUsImg from '../../assets/images/resource/why-us-3.jpg';

const Progress_Line = ({ label, percent }) => (
    <div className="progress-box">
        <p>{label}</p>
        <div className="bar-inner">
            <div className="bar progress-line" style={{ width: `${percent}%` }}></div>
            <div className="count-text">{`${percent}%`}</div>
        </div>
    </div>
  );
function WHCHomeFive({ className }) {
  const [isOpen, setOpen] = useState(false)
    return (
        <>
          <section className={`why-choose-us-two pt-0 ${className || ''}`}>
            <div className="auto-container">
              <div className="row">
                <div className="content-column col-xl-6 col-lg-7 wow fadeInLeft" data-wow-delay="600ms">
                  <div className="inner-column">
                    <div className="sec-title">
                      <span className="sub-title">why choose our company</span>
                      <h2>Why you Should Choose Our Services?</h2>
                      <div className="text">There are many variations of passages of but the majority have in some form, by injected humou or words which don't look even slightly believable of but the majority have suffered.</div>
                    </div>


                    <div className="row">
                      <div className="col-md-6">
                        <div className="info-box">
                          <i className="icon fa fa-check-circle"></i>
                          <h6 className="title">Integer et massa sit</h6>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="info-box">
                          <i className="icon fa fa-check-circle"></i>
                          <h6 className="title">Integer et massa sit</h6>
                        </div>
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

                      {/* Skill Item */}
                      <div className="skill-item">
                        <div className="skill-header">
                          <h6 className="skill-title">Solutions</h6>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div className="bar progress-line" style={{ width: `${80}%` }}>
                              <div className="skill-percentage">
                                <div className="count-box">80%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Column */}
                <div className="image-column col-xl-6 col-lg-5">
                  <div className="image-box wow fadeInRight">
                    <figure className="image overlay-anim">
                      <img src={WhyChoseUsImg} alt=""/>
                      <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play"></i></a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
          </section>
        </>
    );
}

export default WHCHomeFive;
