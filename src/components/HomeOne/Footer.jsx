import React from 'react';
import {Link} from 'react-router-dom';
import BacktoTop from '../BackToTop'

 
function FooterHomeOne({ className }) {
    return (
        <>
            <footer  className={`footer-section-six pt-90 pb-10  ${className || ''}`}>
                <div className=""></div>
                <div className="widgets-section pb-4">
                    <div className="auto-container">
                        <div className="row footer-row">
                           <div className={`footer-logo footer-column col-xl-3 ${className || ''}`}>
                                 <div className="footer-widget about-widget">
                                    <div className="logo"><Link to="/"><img src="/pranisha.png" alt=""/></Link></div>
                                    <div className="logo-text">Pranisha Technologies delivers creative branding, web development, and digital marketing solutions that build strong brand identities and drive business growth.</div>
                                   <ul className="social-icon-two">
                                        <li><Link to="https://in.linkedin.com/company/pranishatechnologies" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></Link></li>
                                        <li><Link to="https://www.facebook.com/pranishatechnologies" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook"></i></Link></li>
                                        <li><Link to="https://www.instagram.com/pranishatechnologies/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
 
                            {/* <div className="footer-column col-xl-2">
                                <div className="footer-widget">
                                    <p className="widget-title">Quick Links</p>
                                    <ul className="user-links">
                                        <li><Link to="/#">Home</Link></li>
                                        <li><Link to="/aboutus">About Us</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div> */}
 
                            <div className="footer-column col-xl-2">
                                <div className="footer-widget">
                                    <p className="widget-title">Our Services</p>
                                    <ul className="user-links">
                                        <li><Link to="/branding">Branding</Link></li>
                                        <li><Link to="/digitalmarketing">Digital Marketing</Link></li>
                                        <li><Link to="/webdevelopment">Web Development</Link></li>
                                        <li><Link to="/ai">Ai</Link></li>
                                        <li><Link to="/pr-media">PR & Media</Link></li>
                                    </ul>
                                </div>
                            </div>
 
                            {/* <div className="footer-column col-xl-2">
                                <div className="footer-widget">
                                    <p className="widget-title">Training</p>
                                    <ul className="user-links">
                                        <li><Link to="/#">Digital Marketing</Link></li>
                                        <li><Link to="/#">SEO</Link></li>
                                        <li><Link to="/#">Google Ads</Link></li>
                                        <li><Link to="/#">Web Development</Link></li>
                                    </ul>
                                </div>
                            </div> */}
 
                            <div className="footer-column col-xl-3">
                                <div className="footer-widget">
                                    <p className="widget-title">Contact Us</p>
                                    <ul className="user-links">
                                            <li> <a href="mailto:info@pranisha.com"> Email: info@pranisha.com</a><br/></li>
                                           <li> <a href="tel:+919963326393"> Phone:+91 9963326393</a><br/></li>
                                           <li> <span style={{color: '#737678'}}> Address: 1st Floor, Sri Sri Dwarkamai, Gokul plots Venkata Ramana Colony Kukatpally, Hyderabad, Telangana 500085</span></li>
                                    </ul>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                                <div className="footer-copyright p-3">
                    <div className="auto-container">
                        <div className="inner-container footer-bottom-row">
                        <div className="copyright-text">
                            © 2025 Pranisha Technologies Pvt Ltd
                        </div>
                        <BacktoTop />
                        </div>
                    </div>
                    </div>

            </footer>
        </>
    );
}
 
export default FooterHomeOne;
 
 