// MobileMenu.jsx
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
            <li className="dropdown">
                <Link to="#">Home</Link>
                <ul className={menuState.activeMenu === 1 ? "d-block" : "d-none"}>
                    <li><Link to="/">Home page 01</Link></li>
                    <li><Link to="/home-two">Home page 02</Link></li>
                    <li><Link to="/home-three">Home page 03</Link></li>
                    <li><Link to="/home-four">Home page 04</Link></li>
                    <li><Link to="/home-five">Home page 05</Link></li>
                </ul>
                <div className={menuState.activeMenu === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleMenuClick(1)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>

            <li className="dropdown">
                <Link to="#">Services</Link>
                <ul className={menuState.activeMenu === 2 ? "d-block" : "d-none"}>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/services-details">Services Details</Link></li>
                </ul>
                <div className={menuState.activeMenu === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleMenuClick(2)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>

            <li className="dropdown">
                <Link to="#">Pages</Link>
                <ul className={menuState.activeMenu === 3 ? "d-block" : "d-none"}>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/testimonial">Testimonials</Link></li>
                    <li><Link to="/404">404</Link></li>

                    <li className="dropdown">
                        <Link to="#">Team</Link>
                        <ul className={menuState.activeSubMenu === 7 ? "d-block" : "d-none"}>
                            <li><Link to="/team">Team List</Link></li>
                            <li><Link to="/team-details">Team Details</Link></li>
                        </ul>
                        <div className={menuState.activeSubMenu === 7 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubMenuClick(7)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>

                    <li className="dropdown">
                        <Link to="#">Shop</Link>
                        <ul className={menuState.activeSubMenu === 8 ? "d-block" : "d-none"}>
                            <li><Link to="/shop-products">Products</Link></li>
                            <li><Link to="/shop-products-sidebar">Products with Sidebar</Link></li>
                            <li><Link to="/shop-product-details">Product Details</Link></li>
                            <li><Link to="/shop-cart">Cart</Link></li>
                            <li><Link to="/shop-checkout">Checkout</Link></li>
                        </ul>
                        <div className={menuState.activeSubMenu === 8 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubMenuClick(8)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                </ul>
                <div className={menuState.activeMenu === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleMenuClick(3)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>

            <li className="dropdown">
                <Link to="#">News</Link>
                <ul className={menuState.activeMenu === 4 ? "d-block" : "d-none"}>
                    <li><Link to="/news-grid">News Grid</Link></li>
                    <li><Link to="/news-details">News Details</Link></li>
                </ul>
                <div className={menuState.activeMenu === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleMenuClick(4)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>

            <li><Link to="/contact">Contact</Link></li>
        </ul>
    );
};

export default MobileMenu;
