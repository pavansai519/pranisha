import React from 'react';
import { Link } from 'react-router-dom';

function LocationHomeFour({ className }) {
    return (
        <>
            <section className={`locations-section-two pt-5 ${className || ''}`}>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Get an awesome service</span>
                        <h2>Our Customer Points <br/>Worldwide</h2>
                    </div>

                    <div className="row">
                        {/* Location 1 */}
                        <div className="location-block-two home4-style col-xl-3 col-md-6 wow fadeInUp">
                            <div className="inner-box">
                                <h5 className="title">INDIA</h5>
                                <ul className="info-list">
                                    <li>1st Floor, Sri Sri Dwarkamai, Gokul plots Venkata Ramana Colony Kukatpally, Hyderabad, Telangana </li>
                                    <li><a href="mailto:info@pranisha.in">info@pranisha.in</a></li>
                                    <li><a href="tel:+919963326393">(+91) 9963326393</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Location 1 */}
                        <div className="location-block-two home4-style col-xl-3 col-md-6 wow fadeInUp">
                            <div className="inner-box">
                                <h5 className="title">CANADA</h5>
                                <ul className="info-list">
                                    <li>3075 14th Avenue Markham Ontario L3R 0G9 Canada.</li>
                                    <li><a href="mailto:info@pranisha.in">info@pranisha.in</a></li>
                                    <li><a href="tel:+919963326393">(+91) 9963326393</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Location 1 */}
                        <div className="location-block-two home4-style col-xl-3 col-md-6 wow fadeInUp">
                            <div className="inner-box">
                                <h5 className="title">U.A.E</h5>
                                <ul className="info-list">
                                    <li>Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai, U.A.E</li>
                                    <li><a href="mailto:info@pranisha.in">info@pranisha.in</a></li>
                                    <li><a href="tel:+919963326393">(+91) 9963326393</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Location 1 */}
                        <div className="location-block-two home4-style col-xl-3 col-md-6 wow fadeInUp">
                            <div className="inner-box">
                                <h5 className="title">USA</h5>
                                <ul className="info-list">
                                    <li>901 E Grove St, STE Q, Bloomington, IL - 61701</li>
                                    <li><a href="mailto:info@pranisha.in">info@pranisha.in</a></li>
                                    <li><a href="tel:+919963326393">(+91) 9963326393</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="consultation-section">
           <div className="auto-container">
               <div className="consultation-content">
                   <h5>We are here to answer your questions 24/7</h5>
                   <h2>Need A Consultation?</h2>
                     <p>
                         Our clients achieve their business goals. Contact us today to learn more about our services
                         and how we can build a strong online presence.
                     </p>
                     <a href="/contact" className="btn-consult">Contact Us →</a>
                </div>
               
                
           </div>
           
           
        </section>
        </>
    );
}

export default LocationHomeFour;
