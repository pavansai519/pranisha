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
                                <li><Link to="/branding/logodesign">Logo Design</Link></li>
                                <li><Link to="/branding/packaging">Packaging</Link></li>
                                <li><Link to="/branding/hoarding">Hoarding</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link to="#">Digital Marketing</Link>
                            <ul className="sub-menu">
                                <li><Link to="/digitalmarketing/seo">Search Engine Optimization</Link></li>
                                <li><Link to="/digitalmarketing/smm">Social Media Marketing</Link></li>
                                <li><Link to="/digitalmarketing/lead-gen">Lead Generation</Link></li>
                                <li><Link to="/digitalmarketing/influencer">Influencer Marketing</Link></li>
                            </ul>
                        </li>
                        
                        <li className="dropdown">
                            <Link to="#">Web Development</Link>
                            <ul className="sub-menu">
                                <li><Link to="/webdevelopment/wordpress">Wordpress Development</Link></li>
                                <li><Link to="/webdevelopment/app">App Development</Link></li>
                                <li><Link to="/webdevelopment/reactjs">ReactJs</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="#">e-commerce</Link>
                            <ul className="sub-menu">
                                <li><Link to="/e-commerce/shopify">Shopify</Link></li>
                                <li><Link to="/e-commerce/magento">Magento</Link></li>
                                <li><Link to="/e-commerce/woocommerce">Woocommerce</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/ai">AI</Link></li>
                        <li><Link to="/Pr&media">Pr&Media</Link></li>
                        <li><Link to="/cloud">Cloud</Link></li>

                    </ul>
                </li>

               

                <li><Link to="/aboutus">About Us</Link></li>

                {/* <li><Link to="/digitalmarketingtraning">Digital Marketing Traning</Link></li> */}
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>



            </ul>
        </nav>
    );
}

export default Navigation;
