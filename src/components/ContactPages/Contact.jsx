import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import MapSection from './MapSection.jsx';
import PageBanner from '../PageBanner.jsx';

function Contact() {
    return (
        <>
        <Header />
      <PageBanner title="Contact Us" breadcrumb="Contact" />
       <section className="contact-details">
          <div className="container ">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="sec-title">
                  <span className="sub-title">Send us email</span>
                  <h2>Feel free to write</h2>
                </div>
                {/* Contact Form */}
                <form id="contact_form" name="contact_form" action="/" method="get">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea name="form_message" className="form-control required" rows="7" placeholder="Enter Message"></textarea>
                  </div>
                  <div className="mb-5">
                    <input name="form_botcheck" className="form-control" type="hidden" value="" />
                    <button type="submit" className="theme-btn btn-style-one me-2 mb-3 mb-sm-0" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>
                    <button type="reset" className="theme-btn btn-style-one bg-theme-color5"><span className="btn-title">Reset</span></button>
                  </div>
                </form>
                {/* Contact Form Validation*/}
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="contact-details__right">
                  <div className="sec-title">
                    <span className="sub-title">Need any help?</span>
                    <h2>Get in touch with us</h2>
                    <div className="text"> </div>
                  </div>
                  <ul className="list-unstyled contact-details__info">
                    <li className="d-block d-sm-flex align-items-sm-center ">
                      <div className="icon">
                        <span className="lnr-icon-phone-plus"></span>
                      </div>
                      <div className="text ml-xs--0 mt-xs-10">
                        <h6>Have any question?</h6>
                        <a href="tel:9963326393"><span>Free</span> (+91) 9963326393</a>
                      </div>
                    </li>
                    <li className="d-block d-sm-flex align-items-sm-center ">
                      <div className="icon">
                        <span className="lnr-icon-envelope1"></span>
                      </div>
                      <div className="text ml-xs--0 mt-xs-10">
                        <h6>Write email</h6>
                        <a href="mailto:info@pranisha.in">info@pranisha.in</a>
                      </div>
                    </li>
                    <li className="d-block d-sm-flex align-items-sm-center ">
                      <div className="icon">
                        <span className="lnr-icon-location"></span>
                      </div>
                      <div className="text ml-xs--0 mt-xs-10">
                        <h6>Visit anytime</h6>
                        <span> Kukatpally, Hyderabad, Telangana 500085</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      <MapSection width="80%" height="450px" />
        <Footer />
        <BackToTop />
        </>         
    );
}

export default Contact;
