import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


function Header() {
  const [isMenuOpen, setMenuOpen] = useState({ main: false, services: false });
  const headerRef = useRef(null);

  // Sticky header on scroll
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const onScroll = () => {
      const offset = window.scrollY || window.pageYOffset;
      if (offset > 50) header.classList.add("is-sticky");
      else header.classList.remove("is-sticky");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header ref={headerRef} className="custom-header">
        <div className="header-left">
          <Link to="/" className="logo">
            <img src="/Pranisha.png" alt="Logo" />
            <span className="dot" />
          </Link>
        </div>

        <div className="header-right">
          <span className="phone-label">Phone:</span>
          <a href="tel:+057951237851" className="phone-number">
            +91 9963326393
          </a>

          <button
            className={`hamburger ${isMenuOpen.main ? "open" : ""}`}
            onClick={() =>
              setMenuOpen((prev) => ({ ...prev, main: !prev.main }))
            }
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`fullscreen-nav ${isMenuOpen.main ? "active" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setMenuOpen({ main: false, services: false })}
        >
          ✕
        </button>

        <div className="nav-content">
          {/* LEFT: Links */}
          <nav className="nav-links">
            <Link to="/" onClick={() => setMenuOpen({ main: false })}>
              Home
            </Link>
            <Link to="/about" onClick={() => setMenuOpen({ main: false })}>
              About
            </Link>

            {/* Services Dropdown */}
            <div className="nav-item has-submenu">
                          <button
                className="submenu-toggle"
                onClick={() =>
                  setMenuOpen((prev) => ({
                    ...prev,
                    services: !prev.services,
                  }))
                }
              >
                Services{" "}
                {isMenuOpen.services ? (
                  <FaChevronUp className="menu-icon" />
                ) : (
                  <FaChevronDown className="menu-icon" />
                )}
              </button>

              <ul className={`submenu ${isMenuOpen.services ? "active" : ""}`}>
                <li>
                  <Link to="/branding" onClick={() => setMenuOpen({ main: false })}>
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    to="/digitalmarketing"
                    onClick={() => setMenuOpen({ main: false })}
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/webdevelopment"
                    onClick={() => setMenuOpen({ main: false })}
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/ai" onClick={() => setMenuOpen({ main: false })}>
                    AI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pr-media"
                    onClick={() => setMenuOpen({ main: false })}
                  >
                    PR & Media
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/cloud"
                    onClick={() => setMenuOpen({ main: false })}
                  >
                    Cloud
                  </Link>
                </li> */}
              </ul>
            </div>

            <Link to="/contact" onClick={() => setMenuOpen({ main: false })}>
              Contact Us
            </Link>
          </nav>

          {/* RIGHT: Info Boxes */}
          <div className="info-boxes">
            <div className="info-card">
              <h4>Location</h4>
              <p>
                1st Floor, Sri Sri Dwarkamai, Gokul plots Venkata Ramana Colony
                Kukatpally Hyderabad, Telangana 500085
              </p>
            </div>
            <div className="info-card">
              <h4>Support</h4>
              <p>info@pranisha.in</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
