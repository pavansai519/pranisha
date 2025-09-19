import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import "./Header.css";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Add sticky class on scroll
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const onScroll = () => {
      const offset = window.scrollY || window.pageYOffset;
      // toggle class when scrolled past 50px (tweak as you like)
      if (offset > 50) header.classList.add("is-sticky");
      else header.classList.remove("is-sticky");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent content jump: set top padding on main app root equal to header height
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    function setRootPadding() {
      // measure header's full height (including padding)
      const height = header.getBoundingClientRect().height;
      // attempt to find common app root containers
      const rootSelectors = ["#root", "#__next", "#app", ".app-root", "main", "body > #root"];
      let rootEl = null;
      for (const sel of rootSelectors) {
        const el = document.querySelector(sel);
        if (el) { rootEl = el; break; }
      }
      // fallback: first element child of body that is not the header
      if (!rootEl) {
        rootEl = Array.from(document.body.children).find((ch) => ch !== header && ch.nodeType === 1);
      }
      if (rootEl) {
        // only set padding if not already set inline (safe)
        if (!rootEl.dataset.__headerPaddingSet) {
          const prev = rootEl.style.paddingTop || "";
          rootEl.dataset.__prevPaddingTop = prev;
          rootEl.style.paddingTop = `${height}px`;
          rootEl.dataset.__headerPaddingSet = "1";
        } else {
          // update padding if header height changes (responsive)
          rootEl.style.paddingTop = `${height}px`;
        }
      }
    }

    // initial
    setRootPadding();
    // update on resize (header height can change on responsive)
    window.addEventListener("resize", setRootPadding);
    return () => {
      window.removeEventListener("resize", setRootPadding);
      // restore previous padding if we set it
      const root = document.querySelector("#root, #__next, #app, .app-root, main") || Array.from(document.body.children).find(ch => ch !== header);
      if (root && root.dataset && root.dataset.__prevPaddingTop !== undefined) {
        root.style.paddingTop = root.dataset.__prevPaddingTop || "";
        delete root.dataset.__prevPaddingTop;
        delete root.dataset.__headerPaddingSet;
      }
    };
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
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

     <div className={`fullscreen-nav ${isMenuOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>

        <div className="nav-content">
          {/* LEFT: Links */}
          <nav className="nav-links">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </nav>

          {/* RIGHT: Small containers */}
          <div className="info-boxes">
            <div className="info-card">
              <h4>Location</h4>
              <p>1st Floor, Sri Sri Dwarkamai, Gokul plots Venkata Ramana Colony Kukatpally Hyderabad, Telangana 500085</p>
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
