import React from 'react';
import CounterUp from '../../lib/CounterUp.jsx'; 

import ContactImg1 from '../../assets/images/resource/our-value.jpg';
import ContactImg2 from '../../assets/images/resource/our-value-2.jpg';

function FunfactHome3({ className }) {
    const percentage1 = 960;
    const percentage2 = 830;
    const percentage3 = 89;
    const percentage4 = 763;
    return (		
        <>
        <section className={`contact-section-four layout_6 pt-0 ${className || ''}`}>
          <div className="auto-container">
            <div className="fact-counter">
              <div className="row">
                <div className="counter-block-three col-lg-3 col-md-6 wow fadeInUp">
                  <div className="inner">
                    <div className="count-box"><span className="count-text justify-content-center" data-speed="3000" data-stop="30"><CounterUp count={percentage1} time={3} /></span></div>
                    <h6 className="counter-title">Project completed</h6>
                  </div>
                </div>

                <div className="counter-block-three col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="inner">
                    <div className="count-box"><span className="count-text justify-content-center" data-speed="3000" data-stop="30"><CounterUp count={percentage2} time={3} /></span></div>
                    <h6 className="counter-title">IT specialists</h6>
                  </div>
                </div>

                <div className="counter-block-three col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                  <div className="inner">
                    <div className="count-box"><span className="count-text justify-content-center" data-speed="3000" data-stop="30"><CounterUp count={percentage3} time={3} /></span></div>
                    <h6 className="counter-title">Satisfied clients</h6>
                  </div>
                </div>

                <div className="counter-block-three col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="900ms">
                  <div className="inner">
                    <div className="count-box"><span className="count-text justify-content-center" data-speed="3000" data-stop="30"><CounterUp count={percentage4} time={3} /></span></div>
                    <h6 className="counter-title">Smart solutions</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="info-column col-lg-7 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInRight">
                  <div className="title-box">
                    <h3 className="title">Best IT Technology <br/>Services you can Trust</h3>
                  </div>

                  <div className="our-values">
                    <figure className="image"><img src={ContactImg1} alt=""/></figure>
                    <div className="content">
                      <h5 className="title">Manage Tech Services</h5>
                      <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking</div>
                    </div>
                  </div>

                  <div className="info-box">
                    <figure className="image"><img src={ContactImg2} alt=""/></figure>
                    <div className="counter-block-two">
                      <div className="count-box"><span className="count-text" data-speed="3000" data-stop="4520">0</span></div>
                      <h6 className="counter-title">Clients worldwide took Professional IT services</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="contact-form light wow fadeInLeft">
                    <div className="title-box">
                      <span className="sub-title">Contact us</span>
                      <h3>Get a Free Quote</h3>
                      <p>There are many variations of passages</p>
                    </div>

                    <form id="contact_form" name="contact_form" action="/" method="get">
                      <div className="form-group">
                        <input name="form_name" className="form-control" type="text" placeholder="Your Name"/>
                      </div>
                      <div className="form-group">
                        <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                      </div>
                      <div className="form-group">
                        <input name="form_phone" className="form-control" type="text" placeholder="Phone Number"/>
                      </div>
                      <div className="form-group">
                        <textarea name="form_message" className="form-control required" rows="7" placeholder="Write a Message"></textarea>
                      </div>
                      <div className="form-group">
                        <input name="form_botcheck" className="form-control" type="hidden" value="" />
                        <button type="submit" className="theme-btn btn-style-two" data-loading-text="Please wait..."><span className="btn-title">Send A Message</span></button>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
		</>
    );
}

export default FunfactHome3;