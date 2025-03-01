import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="nav main-menu">
            <ul className="navigation">
                <li ><Link to="/">Home</Link></li>

                <li className="dropdown">
                    <Link to="#">Services</Link>
                    <ul className="sub-menu">
                        <li className="dropdown">
                            <Link to="#">Branding</Link>
                            <ul className="sub-menu">
                                <li><Link to="/services/logo-design">Logo Design</Link></li>
                                <li><Link to="/services/packaging">Packaging</Link></li>
                                <li><Link to="/services/hoarding">Hoarding</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link to="#">Digital Marketing</Link>
                            <ul className="sub-menu">
                                <li><Link to="/digital/seo">Search Engine Optimization</Link></li>
                                <li><Link to="/digital/social-media">Social Media Management</Link></li>
                                <li><Link to="/digital/lead-gen">Lead Generation</Link></li>
                                <li><Link to="/digital/ecommerce">E-commerce Marketing</Link></li>
                                <li><Link to="/digital/influencers">Influencer Marketing</Link></li>
                            </ul>
                        </li>
                        
                        <li className="dropdown">
                            <Link to="#">Web Designing</Link>
                            <ul className="sub-menu">
                                <li><Link to="/web/responsive">Responsive Web Design</Link></li>
                                <li><Link to="/web/wordpress">WordPress Website</Link></li>
                                <li><Link to="/web/shopify">Shopify Website</Link></li>
                                <li><Link to="/web/redesign">Redesign Services</Link></li>
                                <li><Link to="/web/ui-ux">UI/UX Designing</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link to="#">AI</Link>
                            <ul className="sub-menu">
                                <li><Link to="/ai/artificial-intelligence">Artificial Intelligence</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>

               

                <li><Link to="/contact">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/contact">Digital Marketing Traning</Link></li>
                <li><Link to="/contact">Blog</Link></li>


            </ul>
        </nav>
    );
}

export default Navigation;
