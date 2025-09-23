import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import MapSection from './MapSection.jsx';
import PageBanner from '../PageBanner.jsx';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
 
function Contact() {
    return (
        <>
            <Header />
           
            <section className="contact-page-section">
                <div className="contact-container">
                    <div className="contact-row">
                        <div className="contact-left">
                            <div className="section-header">
                                <span className="header-subtitle">Send us a message</span>
                                <h2 className="header-title">We’d love to hear from you</h2>
                            </div>
 
                            {/* Contact Form */}
                            <form className="contact-form" id="contact_form" name="contact_form" action="/" method="get">
                                <div className="form-row">
                                    <div className="form-col">
                                        <input type="text" name="form_name" className="input-field" placeholder="Enter Name" />
                                    </div>
                                    <div className="form-col">
                                        <input type="email" name="form_email" className="input-field" placeholder="Enter Email" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-col">
                                        <input type="text" name="form_subject" className="input-field" placeholder="Enter Subject" />
                                    </div>
                                    <div className="form-col">
                                        <input type="text" name="form_phone" className="input-field" placeholder="Enter Phone" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea name="form_message" className="textarea-field" rows="7" placeholder="Enter Message"></textarea>
                                </div>
                                <div className="form-actions">
                                    <input type="hidden" name="form_botcheck" value="" />
                                    <button type="submit" className="btn btn-primary"><span>Send Message</span></button>
                                    <button type="reset" className="btn btn-secondary"><span>Reset</span></button>
                                </div>
                            </form>
                        </div>
 
                        <div className="contact-right">
                            <div className="section-header">
                                <span className="header-subtitle">Need Assistance?</span>
                                <h2 className="header-title">Get in Touch</h2>
                            </div>
 
                            <ul className="contact-info-list">
                                <li className="contact-item">
                                    <div className="contact-icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div className="contact-text">
                                        <h6>Call us</h6>
                                        <a href="tel:9963326393">(+91) 9963326393</a>
                                    </div>
                                </li>
                                <li className="contact-item">
                                    <div className="contact-icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="contact-text">
                                        <h6>Email us</h6>
                                        <a href="mailto:info@pranisha.in">info@pranisha.in</a>
                                    </div>
                                </li>
                                <li className="contact-item">
                                    <div className="contact-icon">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </div>
                                    <div className="contact-text">
                                        <h6>Visit Us</h6>
                                        <span>Kukatpally, Hyderabad, Telangana 500085</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
           
 
 
            <MapSection />
            <Footer />
        </>
    );
}
 
export default Contact;