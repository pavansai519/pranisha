import { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
    const [menuState, setMenuState] = useState({
        activeMenu: null,
        activeSubMenu: null
    });

    const handleMenuClick = (key) => {
        setMenuState((prev) => ({
            ...prev,
            activeMenu: prev.activeMenu === key ? null : key
        }));
    };

    const handleSubMenuClick = (key) => {
        setMenuState((prev) => ({
            ...prev,
            activeSubMenu: prev.activeSubMenu === key ? null : key
        }));
    };

    return (
        <ul className="navigation">
            <li><Link to="/">Home</Link></li>
            
            <li className="dropdown">
                <Link to="#">Services</Link>
                <ul className={menuState.activeMenu === 1 ? "d-block" : "d-none"}>
                    <li className="dropdown">
                        <Link to="#">Branding</Link>
                        <ul className={menuState.activeSubMenu === 1 ? "d-block" : "d-none"}>
                            <li><Link to="/branding/logodesign">Logo Design</Link></li>
                            <li><Link to="/branding/packaging">Packaging</Link></li>
                            <li><Link to="/branding/hoarding">Hoarding</Link></li>
                        </ul>
                        <div className="dropdown-btn" onClick={() => handleSubMenuClick(1)}>
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    
                    <li className="dropdown">
                        <Link to="#">Digital Marketing</Link>
                        <ul className={menuState.activeSubMenu === 2 ? "d-block" : "d-none"}>
                            <li><Link to="/digitalmarketing/seo">Search Engine Optimization</Link></li>
                            <li><Link to="/digitalmarketing/smm">Social Media Marketing</Link></li>
                            <li><Link to="/digitalmarketing/lead-gen">Lead Generation</Link></li>
                            <li><Link to="/digitalmarketing/influencer">Influencer Marketing</Link></li>
                        </ul>
                        <div className="dropdown-btn" onClick={() => handleSubMenuClick(2)}>
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    
                    <li className="dropdown">
                        <Link to="#">Web Development</Link>
                        <ul className={menuState.activeSubMenu === 3 ? "d-block" : "d-none"}>
                            <li><Link to="/webdevelopment/wordpress">WordPress Development</Link></li>
                            <li><Link to="/webdevelopment/app">App Development</Link></li>
                            <li><Link to="/webdevelopment/reactjs">ReactJs</Link></li>
                        </ul>
                        <div className="dropdown-btn" onClick={() => handleSubMenuClick(3)}>
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    
                    <li className="dropdown">
                        <Link to="#">E-commerce</Link>
                        <ul className={menuState.activeSubMenu === 4 ? "d-block" : "d-none"}>
                            <li><Link to="/e-commerce/shopify">Shopify</Link></li>
                            <li><Link to="/e-commerce/magento">Magento</Link></li>
                            <li><Link to="/e-commerce/woocommerce">WooCommerce</Link></li>
                        </ul>
                        <div className="dropdown-btn" onClick={() => handleSubMenuClick(4)}>
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    
                    <li><Link to="/ai">AI</Link></li>
                </ul>
                <div className="dropdown-btn" onClick={() => handleMenuClick(1)}>
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
    );
};

export default MobileMenu;
