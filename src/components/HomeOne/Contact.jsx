import React from 'react';
import { Link } from 'react-router-dom';

function ContactHomeOne({ className }) {
    return (
        <>
            <section className={`contact-four-section ${className || ''}`}>
              <div className="auto-container">
                  <div className="row">
                      <div className="map-column col-lg-6">
                          <div className="row align-items-center">
                              <div className="title-column col-lg-8">
                                  <div className="inner-column">
                                      <div className="sec-title">
                                          <span className="sub-title">CONTACT US</span>
                                          <h2>Need an IT Solution?</h2>
                                          <div className="text">Lorem ipsum dolor sit amet, conse ctetur adipisicing elit is simply free text</div>
                                      </div>
                                  </div>
                              </div>						
                              <div className="column col-lg-4">
                                  <div className="inner-column">
                                      <div className="icon">
                                          <Link to="#"><i className="fa fa-phone"></i></Link>
                                          <h5>Service Available</h5>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <iframe className="map" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                      </div>
                      <div className="form-column col-lg-6">
                          <div className="inner-column">
                              <div className="contact-form-four wow fadeInLeft">
                                  <div className="title-box">
                                      <h3 className="text-white text-capitalize">Request a quote</h3>
                                  </div>
                                  <form id="contact_form" name="contact_form" action="/" method="get">
                                      <div className="form-group">
                                          <input name="form_name" className="form-control" type="text" placeholder="Your Name"/>
                                      </div>
                                      <div className="form-group">
                                          <input name="form_email" className="form-control required email" type="email" placeholder="Email Address"/>
                                      </div>
                                      <div className="form-group">
                                          <input name="form_phone" className="form-control" type="text" placeholder="Phone Number"/>
                                      </div>
                                      <div className="form-group">
                                          <textarea name="form_message" className="form-control required" rows="7" placeholder="Write a Message"></textarea>
                                      </div>
                                      <div className="form-group">
                                          <input name="form_botcheck" className="form-control" type="hidden" value="" />
                                          <button type="submit" className="theme-btn btn-style-two hvr-light" data-loading-text="Please wait..."><span className="btn-title">Send A Message</span></button>
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

export default ContactHomeOne;
