import React from 'react';
import {Link} from 'react-router-dom';
import FooterBg from '../../assets/images/background/2.jpg';
import FooterLogo from '../../assets/images/logo.png';
import pranisha from '../../assets/images/pranisha.png'

import ProjectImg1 from '../../assets/images/resource/project-thumb-1.jpg';
import ProjectImg2 from '../../assets/images/resource/project-thumb-2.jpg';
import ProjectImg3 from '../../assets/images/resource/project-thumb-3.jpg';
import ProjectImg4 from '../../assets/images/resource/project-thumb-4.jpg';
import ProjectImg5 from '../../assets/images/resource/project-thumb-5.jpg';
import ProjectImg6 from '../../assets/images/resource/project-thumb-6.jpg';

const projectImages = [
  { id: 1, src: ProjectImg1, alt: "Project Image 1" },
  { id: 2, src: ProjectImg2, alt: "Project Image 2" },
  { id: 3, src: ProjectImg3, alt: "Project Image 3" },
  { id: 4, src: ProjectImg4, alt: "Project Image 4" },
  { id: 5, src: ProjectImg5, alt: "Project Image 5" },
  { id: 6, src: ProjectImg6, alt: "Project Image 6" },
];

function FooterHomeOne({ className }) {
    return (
        <>
            <footer className={`main-footer ${className || ''}`}>
                <div className="bg-image" style={{ backgroundImage: `url(${FooterBg})` }}></div>
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="footer-column col-xl-3 col-lg-12 col-md-6">
                                <div className="footer-widget about-widget">
                                    <div className="logo"><Link to="/"><img src={pranisha} alt=""/></Link></div>
                                    <div className="text">We execute industry level digital marketing concepts everyday and we enjoy being this thorough and precise.</div>
                                    <ul className="social-icon-two">
                                    <li><Link to="https://in.linkedin.com/company/pranishatechnologies" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></Link></li>
                                    <li><Link to="https://www.facebook.com/pranishatechnologies" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook"></i></Link></li>
                                    <li><Link to="https://www.instagram.com/pranishatechnologies/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-column col-xl-3 col-lg-4 col-md-6">
                                <div className="footer-widget">
                                    <h3 className="widget-title">Explore</h3>
                                    <ul className="user-links">
                                        <li><Link to="/#">About Company</Link></li>
                                        <li><Link to="/#">Meet the Team</Link></li>
                                        <li><Link to="/#">News & Media</Link></li>
                                        <li><Link to="/#">Our Projects</Link></li>
                                        <li><Link to="/#">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-column col-xl-3 col-lg-4 col-md-6">
                                <div className="footer-widget contact-widget">
                                    <h3 className="widget-title">Contact</h3>
                                    <div className="widget-content">
                                        <div className="text">1st Floor, Sri Sri Dwarkamai, Gokul plots Venkata Ramana Colony Kukatpally, Hyderabad, Telangana 500085</div>
                                        <ul className="contact-info">
                                            <li><i className="fa fa-envelope"></i> <a href="mailto:info@pranisha.com">info@pranisha.com</a><br/></li>
                                            <li><i className="fa fa-phone-square"></i> <a href="tel:+919963326393">+91 9963326393</a><br/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-xl-3 col-lg-4 col-md-6">
                                <div className="footer-widget gallery-widget">
                                    <h3 className="widget-title">Gallery</h3>
                                    <div className="widget-content">
                                        <div className="outer clearfix">
                                            {projectImages.map((image) => (
                                                <figure className="image" key={image.id}>
                                                    <Link to="/#">
                                                        <img src={image.src} alt={image.alt} />
                                                    </Link>
                                                </figure>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">Copyright © 2021 - 2024 Pranisha Technologies PVT LTD. All Rights Reserved. 
                            </div>
                        </div>
                    </div>
                </div>
                        
            </footer>
        </>
    );
}

export default FooterHomeOne;
