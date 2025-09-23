import React from 'react';
import {Link} from 'react-router-dom';
import FooterBg from '../../assets/images/background/footer-bg52.png';

 
 
 

 

 
function FooterHomeOne({ className }) {
    return (
        <>
            <footer  className={`footer-section-six pt-170 pb-50  ${className || ''}`}>
                <div className=""></div>
                <div className="widgets-section pb-4">
                    <div className="auto-container">
                        <div className="row">
                           <div className={`footer-logo footer-column col-xl-3 ${className || ''}`}>
                                 <div className="footer-widget about-widget">
                                    <div className="logo"><Link to="/"><img src="/Pranisha.png" alt=""/></Link></div>
                                    <div className="logo-text">We execute industry level digital marketing concepts everyday and we enjoy being this thorough and precise.</div>
                                   
                                </div>
                            </div>
 
                            <div className="footer-column col-xl-2">
                                <div className="footer-widget">
                                    <p className="widget-title">Quick Links</p>
                                    <ul className="user-links">
                                        <li><Link to="/#">Home</Link></li>
                                        <li><Link to="/aboutus">About Us</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
 
                            <div className="footer-column col-xl-2">
                                <div className="footer-widget">
                                    <p className="widget-title">Our Services</p>
                                    <ul className="user-links">
                                        <li><Link to="/#">Branding</Link></li>
                                        <li><Link to="/#">Digital Marketing</Link></li>
                                        <li><Link to="/#">Web Development</Link></li>
                                        <li><Link to="/#">Web Designing</Link></li>
                                        <li><Link to="/#">Artifical Intellligence</Link></li>
                                    </ul>
                                </div>
                            </div>
 
                            <div className="footer-column col-xl-2">
                                <div className="footer-widget">
                                    <p className="widget-title">Training</p>
                                    <ul className="user-links">
                                        <li><Link to="/#">Digital Marketing</Link></li>
                                        <li><Link to="/#">SEO</Link></li>
                                        <li><Link to="/#">Google Ads</Link></li>
                                        <li><Link to="/#">Web Development</Link></li>
                                    </ul>
                                </div>
                            </div>
 
                            <div className="footer-column col-xl-3">
                                <div className="footer-widget">
                                    <p className="widget-title">Contact Us</p>
                                    <ul className="user-links">
                                            <li><i className="fa fa-envelope"></i> <a href="mailto:info@pranisha.com">info@pranisha.com</a><br/></li>
                                           <li><i className="fa fa-phone-square"></i> <a href="tel:+919963326393">+91 9963326393</a><br/></li>
                                    </ul>
                                    <ul className="social-icon-two">
                                        <li><Link to="https://in.linkedin.com/company/pranishatechnologies" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></Link></li>
                                        <li><Link to="https://www.facebook.com/pranishatechnologies" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook"></i></Link></li>
                                        <li><Link to="https://www.instagram.com/pranishatechnologies/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className={`footer-copyright text-center p-3 ${className || ''}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">Copyright © 2021 - 2025 Pranisha Technologies PVT LTD. All Rights Reserved.</div>
                        </div>
                    </div>
                </div>      
            </footer>
        </>
    );
}
 
export default FooterHomeOne;
 
 