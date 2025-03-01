import React from 'react';
import { Link } from 'react-router-dom';

function LocationHomeFour({ className }) {
    return (
        <>
            <section className={`locations-section-two pt-0 ${className || ''}`}>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Get an awesome service</span>
                        <h2>Our Customer Points <br/>Worldwide</h2>
                    </div>

                    <div className="row">
                        {/* Location 1 */}
                        <div className="location-block-two home4-style col-xl-3 col-md-6 wow fadeInUp">
                            <div className="inner-box">
                                <h5 className="title">Newyork</h5>
                                <ul className="info-list">
                                    <li>66 Road Broklyn Street, New York</li>
                                    <li><a href="mailto:needhelp@company.com">needhelp@company.com</a></li>
                                    <li><a href="tel:+926668889999">+92 666 888 9999</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Location 1 */}
                        <div className="location-block-two home4-style col-xl-3 col-md-6 wow fadeInUp">
                            <div className="inner-box">
                                <h5 className="title">Washington</h5>
                                <ul className="info-list">
                                    <li>66 Road Broklyn Street, New York</li>
                                    <li><a href="mailto:needhelp@company.com">needhelp@company.com</a></li>
                                    <li><a href="tel:+926668889999">+92 666 888 9999</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Location 1 */}
                        <div className="location-block-two home4-style col-xl-3 col-md-6 wow fadeInUp">
                            <div className="inner-box">
                                <h5 className="title">Boston</h5>
                                <ul className="info-list">
                                    <li>66 Road Broklyn Street, New York</li>
                                    <li><a href="mailto:needhelp@company.com">needhelp@company.com</a></li>
                                    <li><a href="tel:+926668889999">+92 666 888 9999</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Location 1 */}
                        <div className="location-block-two home4-style col-xl-3 col-md-6 wow fadeInUp">
                            <div className="inner-box">
                                <h5 className="title">Chicago</h5>
                                <ul className="info-list">
                                    <li>66 Road Broklyn Street, New York</li>
                                    <li><a href="mailto:needhelp@company.com">needhelp@company.com</a></li>
                                    <li><a href="tel:+926668889999">+92 666 888 9999</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default LocationHomeFour;
