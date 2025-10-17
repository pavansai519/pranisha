import React, { useEffect, useState } from 'react';
import './Services.css';
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer2.jsx";
import PageBanner from "./PageBanner.jsx";
import { Helmet } from "react-helmet-async";


const DigitalMarketing = () => {
  const [activeSection, setActiveSection] = useState('WordPress Website');
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [openSection, setOpenSection] = useState('WordPress Website');

    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);
  
      const elements = document.querySelectorAll('.content-item, .content-section');
      elements.forEach(el => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  
    // Switch whole section
    const scrollToSection = (sectionId) => {
      setHighlightedItem(null);
      setOpenSection(sectionId);
      setActiveSection(sectionId);
    };

  return (
    <>
    <Helmet>
        <title>IT Development | Web, Mobile & eCommerce Solutions</title>
        <meta
          name="description"
          content="Explore our IT development services including WordPress, Magento, Shopify, ReactJS, and Mobile App development. We build scalable, secure, and creative digital solutions."
        />
        <meta
          name="keywords"
          content="Web Development, WordPress, Magento, Shopify, ReactJS, Mobile App Development, IT Solutions, Pranishaa"
        />
        <meta property="og:title" content="IT Development | Pranishaa" />
        <meta
          property="og:description"
          content="Pranishaa offers custom IT development services across web, eCommerce, and mobile platforms. Build your digital success with us."
        />
        <meta property="og:image" content="https://pranishaa.com/images/og-development.jpg" />
        <meta property="og:url" content="https://pranishaa.com/it-development" />
      </Helmet>

      <Header />
      <PageBanner title="IT Development" breadcrumb="IT Development" />

      <div className="branding-page">
        <div className="branding-container">
          {/* ==== SIDEBAR NAVIGATION ==== */}
          <aside className="services-sidebar">
            <h3>Our Services</h3>
            <nav className="services-nav">
              <ul>
                {/* WordPress Website */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'WordPress Website' ? 'active' : ''}`}
                    onClick={() => scrollToSection('WordPress Website')}
                  >
                    <i className="fab fa-wordpress"></i>
                    <span>WordPress Website</span>
                  </button>
                  {openSection === 'WordPress Website' && (
                    <ul className="sub-nav">
                      <li>Custom Design</li>
                      <li>Responsive Design</li>
                      <li>Custom Development</li>
                      <li>eCommerce Solutions</li>
                    </ul>
                  )}
                </li>

                {/* Magento Website */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'Magento Website' ? 'active' : ''}`}
                    onClick={() => scrollToSection('Magento Website')}
                  >
                    <i className="fab fa-magento"></i>
                    <span>Magento Website</span>
                  </button>
                  {openSection === 'Magento Website' && (
                    <ul className="sub-nav">
                      <li>Custom Development</li>
                      <li>Responsive Design</li>
                      <li>API & Extension Integration</li>
                      <li>Performance Optimization</li>
                    </ul>
                  )}
                </li>

                {/* Shopify Website */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'Shopify Website' ? 'active' : ''}`}
                    onClick={() => scrollToSection('Shopify Website')}
                  >
                    <i className="fab fa-shopify"></i>
                    <span>Shopify Website</span>
                  </button>
                  {openSection === 'Shopify Website' && (
                    <ul className="sub-nav">
                      <li>Custom Themes</li>
                      <li>Store Setup</li>
                      <li>App Integration</li>
                      <li>Maintenance & Support</li>
                    </ul>
                  )}
                </li>

                {/* ReactJS Development */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'ReactJS Development' ? 'active' : ''}`}
                    onClick={() => scrollToSection('ReactJS Development')}
                  >
                    <i className="fab fa-react"></i>
                    <span>ReactJS Development</span>
                  </button>
                  {openSection === 'ReactJS Development' && (
                    <ul className="sub-nav">
                      <li>Web App Development</li>
                      <li>Component Development</li>
                      <li>UI/UX Design</li>
                      <li>API Integration</li>
                    </ul>
                  )}
                </li>

                {/* Mobile App Development */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'Mobile App Development' ? 'active' : ''}`}
                    onClick={() => scrollToSection('Mobile App Development')}
                  >
                    <i className="fas fa-mobile-alt"></i>
                    <span>Mobile App Development</span>
                  </button>
                  {openSection === 'Mobile App Development' && (
                    <ul className="sub-nav">
                      <li>Native App Development</li>
                      <li>Cross-Platform Development</li>
                      <li>Backend Integration</li>
                      <li>Maintenance & Support</li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </aside>

          {/* ==== MAIN CONTENT SECTIONS ==== */}
          <main className="services-content">
            {/* WORDPRESS WEBSITE */}
            {openSection === 'WordPress Website' && (
              <section className="content-section">
                <div className="section-header">
                  <h2>WordPress Website</h2>
                  <p>Build custom, SEO-friendly WordPress websites designed to deliver fast performance, strong branding, and effortless content management capabilities.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item"><div className="item-icon"><i className="fas fa-pencil-ruler"></i></div><h3>Custom Design</h3><p>We design tailored WordPress layouts that reflect your brand identity, ensuring high usability, better engagement, and a memorable user journey.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-laptop"></i></div><h3>Responsive Design</h3><p>Your website adapts perfectly across mobile, tablet, and desktop screens with smooth navigation and visually rich layouts optimized for every device.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-code"></i></div><h3>Custom Development</h3><p>We integrate advanced plugins, optimize databases, and use clean code to create robust, scalable, and easily manageable WordPress websites.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-shopping-cart"></i></div><h3>eCommerce Solutions</h3><p>Our WooCommerce integration enables easy product management, secure payment systems, and flexible customization options for better online sales.</p></div>
                </div>
              </section>
            )}

            {/* MAGENTO WEBSITE */}
            {openSection === 'Magento Website' && (
              <section className="content-section">
                <div className="section-header">
                  <h2>Magento Website</h2>
                  <p>Empower your eCommerce business with high-performance, scalable, and feature-rich Magento solutions crafted for enterprise-grade growth.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item"><div className="item-icon"><i className="fas fa-cogs"></i></div><h3>Custom Development</h3><p>We deliver tailor-made Magento stores that ensure flexibility, scalability, and flawless functionality aligned with your business model.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-mobile"></i></div><h3>Responsive Design</h3><p>Your Magento website looks amazing across all screen sizes with lightning-fast performance and a superior shopping experience.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-plug"></i></div><h3>API & Extension Integration</h3><p>Seamlessly integrate CRMs, ERPs, payment gateways, and third-party extensions for a fully functional eCommerce ecosystem.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-rocket"></i></div><h3>Performance Optimization</h3><p>We optimize load speed, server response time, and SEO metrics to deliver top-tier performance and conversion efficiency.</p></div>
                </div>
              </section>
            )}

            {/* SHOPIFY WEBSITE */}
            {openSection === 'Shopify Website' && (
              <section className="content-section">
                <div className="section-header">
                  <h2>Shopify Website</h2>
                  <p>Launch and manage a beautiful, high-converting Shopify store with custom designs, automation tools, and ongoing support from our experts.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item"><div className="item-icon"><i className="fas fa-paint-brush"></i></div><h3>Custom Themes</h3><p>We design visually engaging and conversion-oriented Shopify themes that highlight your brand’s essence and enhance customer experience.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-store"></i></div><h3>Store Setup</h3><p>We configure everything from product listings to payment gateways, ensuring a seamless setup for fast and efficient store launches.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-th-large"></i></div><h3>App Integration</h3><p>Enhance your store’s functionality with app integrations for analytics, CRM, marketing automation, and inventory management.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-life-ring"></i></div><h3>Maintenance & Support</h3><p>Get continuous performance monitoring, troubleshooting, and upgrades to keep your Shopify store secure and up-to-date.</p></div>
                </div>
              </section>
            )}

            {/* REACTJS DEVELOPMENT */}
            {openSection === 'ReactJS Development' && (
              <section className="content-section">
                <div className="section-header">
                  <h2>ReactJS Development</h2>
                  <p>We develop dynamic, fast, and scalable web applications using ReactJS — built with clean architecture and modular design for long-term growth.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item"><div className="item-icon"><i className="fas fa-bolt"></i></div><h3>Web App Development</h3><p>We craft responsive and high-performance single-page applications with real-time updates and seamless user navigation.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-puzzle-piece"></i></div><h3>Component Development</h3><p>Our team builds reusable, modular React components for faster delivery, scalability, and easier future enhancements.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-layer-group"></i></div><h3>UI/UX Design</h3><p>Delivering modern interfaces that prioritize simplicity, performance, and engagement through interactive and user-friendly designs.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-network-wired"></i></div><h3>API Integration</h3><p>Integrate RESTful or GraphQL APIs for seamless data flow and dynamic, high-performing user experiences.</p></div>
                </div>
              </section>
            )}

            {/* MOBILE APP DEVELOPMENT */}
            {openSection === 'Mobile App Development' && (
              <section className="content-section">
                <div className="section-header">
                  <h2>Mobile App Development</h2>
                  <p>We create mobile apps that combine performance, design, and functionality — driving engagement and delivering measurable results for your business.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item"><div className="item-icon"><i className="fas fa-mobile"></i></div><h3>Native App Development</h3><p>Developed specifically for iOS and Android, our native apps deliver top-tier performance, advanced UI elements, and reliability.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-sync"></i></div><h3>Cross-Platform Development</h3><p>We use React Native and Flutter to build apps that work flawlessly across multiple devices with consistent performance.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-cloud"></i></div><h3>Backend Integration</h3><p>Robust backend architecture powered by AWS, Firebase, and Node.js ensures reliable data management and app scalability.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-tools"></i></div><h3>Maintenance & Support</h3><p>Our dedicated team monitors app performance, releases updates, and fixes bugs to keep your app running smoothly and securely.</p></div>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DigitalMarketing;
