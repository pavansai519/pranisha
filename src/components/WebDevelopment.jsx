import React, { useEffect, useState } from 'react';
import './Services.css';
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer2.jsx";
import PageBanner from "./PageBanner.jsx";

const DigitalMarketing = () => {
  const [activeSection, setActiveSection] = useState('WordPress Website');
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [openSection, setOpenSection] = useState('WordPress Website');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.content-item, .content-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    setHighlightedItem(null);
    setOpenSection(sectionId);
    setActiveSection(sectionId);
  };

  return (
    <>
      <Header />
      <PageBanner title="Web Development" breadcrumb="Web Development" />

      <div className="branding-page">
        <div className="branding-container">
          <aside className="services-sidebar">
            <h3>Our Services</h3>
            <nav className="services-nav">
              <ul>
                {['WordPress Website', 'Magento Website', 'Shopify Website', 'ReactJS Development', 'Mobile App Development'].map((service) => (
                  <li key={service}>
                    <button
                      className={`nav-items ${activeSection === service ? 'active' : ''}`}
                      onClick={() => scrollToSection(service)}
                    >
                      <i className="fas fa-angle-right"></i>
                      <span>{service}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <main className="services-content">

            {/* === WORDPRESS WEBSITE === */}
            {openSection === 'WordPress Website' && (
              <section id="WordPress Website" className="content-section">
                <div className="section-header">
                  <h2>WordPress Website</h2>
                  <p>We craft high-performing, visually stunning WordPress websites optimized for speed, SEO, and user engagement — empowering your brand with flexibility and growth-ready designs.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-paint-brush"></i></div>
                    <h3>Custom Design</h3>
                    <p>We design unique WordPress layouts that match your brand’s personality, ensuring a seamless user experience that boosts engagement and conversion rates across all devices.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-laptop"></i></div>
                    <h3>Responsive Design</h3>
                    <p>Our websites are fully responsive, adapting flawlessly to any screen size, providing consistent performance and stunning visuals for mobile, tablet, and desktop users.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-code"></i></div>
                    <h3>Custom Development</h3>
                    <p>We build feature-rich websites using the latest WordPress technologies, focusing on functionality, security, and seamless integration with third-party tools and plugins.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-shopping-cart"></i></div>
                    <h3>eCommerce Solutions</h3>
                    <p>Our WooCommerce development enables easy product management, secure checkout, and customizable store designs to help you sell smarter and grow your online revenue.</p>
                  </div>
                </div>
              </section>
            )}

            {/* === MAGENTO WEBSITE === */}
            {openSection === 'Magento Website' && (
              <section id="Magento Website" className="content-section">
                <div className="section-header">
                  <h2>Magento Website</h2>
                  <p>Magento offers enterprise-level flexibility for online stores. We build secure, high-speed, and scalable Magento solutions that elevate your brand’s eCommerce experience.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-tools"></i></div>
                    <h3>Custom Development</h3>
                    <p>Our Magento developers create powerful, tailored eCommerce platforms with advanced functionalities, integrations, and a focus on performance optimization for higher conversions.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-mobile-alt"></i></div>
                    <h3>Responsive Design</h3>
                    <p>We ensure your Magento store delivers a seamless user experience across all devices with clean navigation, fast loading, and elegant visual presentation.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-plug"></i></div>
                    <h3>API & Extension Integration</h3>
                    <p>Integrate essential APIs like CRMs, payment gateways, and analytics tools to expand your store’s functionality while maintaining stability and scalability.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-tachometer-alt"></i></div>
                    <h3>Performance Optimization</h3>
                    <p>We optimize Magento websites for speed, SEO, and reliability — ensuring quick load times, minimal bounce rates, and superior search visibility.</p>
                  </div>
                </div>
              </section>
            )}

            {/* === SHOPIFY WEBSITE === */}
            {openSection === 'Shopify Website' && (
              <section id="Shopify Website" className="content-section">
                <div className="section-header">
                  <h2>Shopify Website</h2>
                  <p>Shopify makes it easy to start, run, and grow your online store. We provide expert Shopify solutions for design, development, and marketing success.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-palette"></i></div>
                    <h3>Custom Themes</h3>
                    <p>We create visually appealing, conversion-driven Shopify themes tailored to your brand identity, ensuring a captivating shopping experience for every customer.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-store"></i></div>
                    <h3>Store Setup</h3>
                    <p>Our team handles everything from product catalog setup to payment integration, giving you a fully functional Shopify store ready to launch and sell.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-th-large"></i></div>
                    <h3>App Integration</h3>
                    <p>We integrate essential Shopify apps for marketing automation, inventory management, analytics, and customer support to streamline your online business operations.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-headset"></i></div>
                    <h3>Maintenance & Support</h3>
                    <p>Enjoy ongoing maintenance and expert support to keep your Shopify store secure, updated, and optimized for consistent business performance and growth.</p>
                  </div>
                </div>
              </section>
            )}

            {/* === REACTJS DEVELOPMENT === */}
            {openSection === 'ReactJS Development' && (
              <section id="ReactJS Development" className="content-section">
                <div className="section-header">
                  <h2>ReactJS Development</h2>
                  <p>Build lightning-fast, scalable web apps using ReactJS — combining modern architecture, reusable components, and seamless integration for exceptional performance.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-bolt"></i></div>
                    <h3>Web App Development</h3>
                    <p>We create high-performance SPAs with ReactJS that offer smooth navigation, real-time updates, and an engaging experience optimized for every device.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-puzzle-piece"></i></div>
                    <h3>Component Development</h3>
                    <p>Our developers build modular and reusable components to ensure faster development cycles, cleaner code, and improved maintainability of your web applications.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-layer-group"></i></div>
                    <h3>UI/UX Design</h3>
                    <p>We combine creativity and usability to design interactive user interfaces that deliver seamless user experiences and boost engagement with intuitive navigation.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-link"></i></div>
                    <h3>API Integration</h3>
                    <p>We integrate RESTful APIs, GraphQL, and cloud services like AWS or Firebase to ensure real-time data synchronization and dynamic app performance.</p>
                  </div>
                </div>
              </section>
            )}

            {/* === MOBILE APP DEVELOPMENT === */}
            {openSection === 'Mobile App Development' && (
              <section id="Mobile App Development" className="content-section">
                <div className="section-header">
                  <h2>Mobile App Development</h2>
                  <p>We design and develop user-centric mobile applications that combine innovation, performance, and usability — helping businesses thrive in the digital era.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-mobile"></i></div>
                    <h3>Native App Development</h3>
                    <p>We build high-performance native apps for iOS and Android using Swift, Kotlin, and Java — optimized for speed, stability, and seamless functionality.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-sync"></i></div>
                    <h3>Cross-Platform Development</h3>
                    <p>Using frameworks like React Native and Flutter, we develop cross-platform apps that ensure consistent experiences while minimizing development time and costs.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-cloud"></i></div>
                    <h3>Backend Integration</h3>
                    <p>We integrate mobile apps with powerful backend systems like AWS, Firebase, and Node.js to provide real-time functionality and reliable data management.</p>
                  </div>
                  <div className="content-item">
                    <div className="item-icon"><i className="fas fa-shield-alt"></i></div>
                    <h3>Maintenance & Support</h3>
                    <p>Our dedicated team ensures continuous app performance monitoring, updates, and improvements to keep your application fast, secure, and bug-free.</p>
                  </div>
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
