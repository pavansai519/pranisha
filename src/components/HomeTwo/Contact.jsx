import React from 'react';

import ContactImg from '../../assets/images/resource/contact.jpg';

function ContactHomeTwo({ className }) {
    return (
        <>
            <section className={`contact-section-two pull-up layout_8 overflow-hidden ${className || ''}`}>
                <div className="auto-container">
                    <div className="row">
                        <div className="info-column col-xl-7 col-lg-6 order-2">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title">
                                    <div className="sub-title">Get to know</div>
                                    <h3>Keep your Vision to Our Projects</h3>
                                </div>
                                <figure className="image overlay-anim"><img src={ContactImg} alt=""/></figure>
                                <div className="info-box">
                                  <span className="icon fa fa-check"></span>
                                  <h5 className="title">Cloud Based Services</h5>
                                  <div className="text">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free</div>
                                </div>
                                <div className="info-box">
                                  <span className="icon fa fa-check"></span>
                                  <h5 className="title">End to End Solutions</h5>
                                  <div className="text">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-column col-xl-5 col-lg-6">
                            <div className="inner-column">
                                <div className="contact-form light wow fadeInLeft">
                                    <div className="title-box">
                                        <span className="sub-title">Contact us</span>
                                        <h3>Write Email</h3>
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
                                          <button type="submit" className="theme-btn btn-style-one"><span className="btn-title">Send A Message</span></button>
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

export default ContactHomeTwo;
