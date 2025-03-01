import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useScrollPosition from "../../lib/useScrollPosition";
import logo1 from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo-2.png';
import Navigation from '../Navigation.jsx';
import MobileMenu from '../MobileMenu.jsx';

function Header3({ className = '', scroll = false}) {
    const [menuState, setMenuState] = useState({
        isMobileMenuOpen: false,
        isSearchPopupOpen: false,
    });
    const isSticky = useScrollPosition(100);

    const toggleMenu = useCallback((menuType) => {
        setMenuState((prev) => ({
          ...prev,
          [menuType]: !prev[menuType],
        }));
    }, []);

    const closeMenu = useCallback((menuType) => {
        setMenuState((prev) => ({
          ...prev,
          [menuType]: false,
        }));
    }, []);

    return (
        <header className={`main-header header-style-three ${className || ''}`}>
            {/* Header Top */}
            <div className="header-top">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="top-left">
                            <ul className="social-icon-one">
                                <li><Link to="#"><span className="fab fa-twitter"></span></Link></li>
                                <li><Link to="#"><span className="fab fa-facebook-square"></span></Link></li>
                                <li><Link to="#"><span className="fab fa-pinterest-p"></span></Link></li>
                                <li><Link to="#"><span className="fab fa-instagram"></span></Link></li>
                            </ul>
                        </div>

                        <div className="top-right">
                            <ul className="list-style-one">
                                <li><i className="fa fa-envelope"></i> <Link to="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                <li><i className="fa fa-map-marker"></i> 88 Broklyn Golden Street. New York</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-lower">
                <div className="auto-container">
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo"><Link to="/"><img src={logo1} alt="Logo" title="Techo"/></Link></div>
                        </div>

                        <div className="nav-outer">

                            <nav className="nav main-menu">
                                <Navigation />
                            </nav>


                            <div className="outer-box">
                                <div className="ui-btn-outer border-0">
                                    <button className="ui-btn ui-btn search-btn" onClick={() => toggleMenu('isSearchPopupOpen')}>
                                        <span className="icon lnr lnr-icon-search"></span>
                                    </button>
                                    <Link to="/shop-cart" className="ui-btn"><i className="lnr-icon-shopping-cart"></i></Link>
                                </div>

                                <div className="mobile-nav-toggler" onClick={() => toggleMenu('isMobileMenuOpen')}><span className="icon lnr-icon-bars"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Header Search */}
                <div className={`search-popup ${menuState.isSearchPopupOpen ? 'active' : ''}`}>
                    <span className="search-back-drop" onClick={() => closeMenu('isSearchPopupOpen')} />
                    <button className="close-search" onClick={() => closeMenu('isSearchPopupOpen')}>
                    <span className="fa fa-times" />
                </button>
                <div className="search-inner">
                    <form method="get" action="/">
                        <div className="form-group">
                            <input
                                type="search"
                                name="search-field"
                                placeholder="Search..."
                                required
                            />
                            <button type="submit">
                                <i className="fa fa-search" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* End Header Search */}       

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuState.isMobileMenuOpen ? 'open' : ''}`}>
                <div className="menu-backdrop" onClick={() => closeMenu('isMobileMenuOpen')} />
                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo">
                            <Link to="/"><img src={logo1} alt="Techo" title="Techo" /></Link>
                        </div>
                        <div className="close-btn" onClick={() => closeMenu('isMobileMenuOpen')}>
                            <i className="icon fa fa-times" />
                        </div>
                    </div>
                    <MobileMenu />
                    <ul className="contact-list-one">
                        <li>
                            <div className="contact-info-box">
                                <i className="icon lnr-icon-phone-handset" />
                                <span className="title">Call Now</span>
                                <a href="tel:+92880098670">+92 (8800) - 98670</a>
                            </div>
                        </li>
                        <li>
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-envelope1" />
                                <span className="title">Send Email</span>
                                <a href="mailto:help@company.com">help@company.com</a>
                            </div>
                        </li>
                        <li>
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-clock" />
                                <span className="title">Opening Hours</span>
                                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                            </div>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link to="#"><i className="fab fa-pinterest" /></Link></li>
                        <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                    </ul>
                </nav>
            </div>
            {/* Sticky Header */}
            <div className={`sticky-header ${isSticky ? "fixed-header" : ""} animated slideInDown' : ''}`}>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="logo">
                            <Link to="/"><img src={logo2} alt="Techo" /></Link>
                        </div>
                        <div className="nav-outer">
                            <nav className="main-menu">
                                <div className="navbar-collapse show collapse clearfix">
                                    <Navigation />
                                </div>
                            </nav>
                            <div className="mobile-nav-toggler" onClick={() => toggleMenu('isMobileMenuOpen')}>
                                <span className="icon lnr-icon-bars"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header3;
