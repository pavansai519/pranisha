import React, { useEffect, useState } from 'react';
import './Services.css';
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer.jsx";
import PageBanner from "./PageBanner.jsx";

const Branding = () => {
  const [activeSection, setActiveSection] = useState('logo-design');
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [openSection, setOpenSection] = useState('logo-design');

  // Animate sections when in viewport
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
      <Header />
      <PageBanner title="Branding" breadcrumb="Branding" />
      <div className="branding-page">
        <div className="branding-container">
          {/* Sidebar */}
          <aside className="services-sidebar">
            <h3>Our Services</h3>
            <nav className="services-nav">
              <ul>
                {/* Logo Design */}
                <li>
                  <button 
                    className={`nav-items ${activeSection === 'logo-design' ? 'active' : ''}`}
                    onClick={() => scrollToSection('logo-design')}
                  >
                    <i className="fas fa-pencil-alt"></i>
                    <span>Logo Design</span>
                  </button>
                  {openSection === 'logo-design' && (
                    <ul className="sub-nav">
                      <li>Discovery</li>
                      <li>Concept Development</li>
                      <li>Design Refinement</li>
                      <li>Finalization</li>
                    </ul>
                  )}
                </li>

                {/* Packaging Design */}
                <li>
                  <button 
                    className={`nav-items ${activeSection === 'packaging-design' ? 'active' : ''}`}
                    onClick={() => scrollToSection('packaging-design')}
                  >
                    <i className="fas fa-box-open"></i>
                    <span>Packaging Design</span>
                  </button>
                  {openSection === 'packaging-design' && (
                    <ul className="sub-nav">
                      <li>Research</li>
                      <li>Concept Development</li>
                      <li>Design Refinement</li>
                      <li>Discovery</li>
                    </ul>
                  )}
                </li>

                {/* Hoarding Design */}
                <li>
                  <button 
                    className={`nav-items ${activeSection === 'hoarding-design' ? 'active' : ''}`}
                    onClick={() => scrollToSection('hoarding-design')}
                  >
                    <i className="fas fa-sign"></i>
                    <span>Hoarding Design</span>
                  </button>
                  {openSection === 'hoarding-design' && (
                    <ul className="sub-nav">
                      <li>Why Choose Us</li>
                      <li>Comprehensive Solutions</li>
                      <li>Printing & Installation</li>
                      <li>Maintenance & Removal</li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="services-content">
            {/* Logo Section */}
            {openSection === 'logo-design' && (
              <section id="logo-design" className="content-section animate-in">
                <div className="section-header">
                  <h2>Logo Design Services</h2>
                  <p>We offer professional and creative logo design services to help your business establish a strong and memorable brand identity. Our team of experienced designers will work closely with you to understand your business, target audience, and design preferences, to create a logo that reflects your brand’s personality and values.</p>
                </div>
                <div className="content-grid">
                  <div id="discovery" className="content-item">
                    <div className="item-icon"><i className="fas fa-search"></i></div>
                    <h3>Discovery</h3>
                    <p>We start by understanding your business, target audience, and design preferences, to develop a clear understanding of your brand.</p>
                  </div>
                  <div id="concept" className="content-item">
                    <div className="item-icon"><i className="fas fa-lightbulb"></i></div>
                    <h3>Concept Development</h3>
                    <p>Our team of designers will brainstorm and develop multiple logo concepts, each with a unique style and design.</p>
                  </div>
                  <div id="refinement" className="content-item">
                    <div className="item-icon"><i className="fas fa-pen-fancy"></i></div>
                    <h3>Design Refinement</h3>
                    <p>We work with you to refine the logo concepts based on your feedback and preferences, to develop a final logo design that perfectly reflects your brand’s identity.</p>
                  </div>
                  <div id="finalization" className="content-item">
                    <div className="item-icon"><i className="fas fa-check-circle"></i></div>
                    <h3>Finalization</h3>
                    <p>We finalize the logo design, including the color scheme, typography, and other design elements, and provide you with the final logo files in various formats.</p>
                  </div>
                </div>
              </section>
            )}

            {/* Packaging Section */}
            {openSection === 'packaging-design' && (
              <section id="packaging-design" className="content-section animate-in">
                <div className="section-header">
                  <h2>Packaging Design Services</h2>
                  <p>We understand the importance of effective packaging design as a critical part of building a strong brand. Our packaging design services help businesses create packaging that is visually appealing and effective in communicating the brand’s message.</p>
                </div>
                <div className="content-grid">
                  <div id="research" className="content-item">
                    <div className="item-icon"><i className="fas fa-analytics"></i></div>
                    <h3>Research</h3>
                    <p>We conduct thorough research on your target audience, competition, and industry trends to identify opportunities and challenges for packaging design.</p>
                  </div>
                  <div id="concept-dev" className="content-item">
                    <div className="item-icon"><i className="fas fa-paint-brush"></i></div>
                    <h3>Concept Development</h3>
                    <p>Based on our research and understanding of your brand, we develop multiple packaging design concepts that are unique and effective in communicating your brand’s message.</p>
                  </div>
                  <div id="design-refine" className="content-item">
                    <div className="item-icon"><i className="fas fa-cogs"></i></div>
                    <h3>Design Refinement</h3>
                    <p>We work with you to refine the packaging design concepts based on your feedback and preferences, to develop a final packaging design that perfectly reflects your brand’s identity.</p>
                  </div>
                  <div id="production" className="content-item">
                    <div className="item-icon"><i className="fas fa-industry"></i></div>
                    <h3>Discovery</h3>
                    <p>We start by understanding your business, target audience, and design preferences, to develop a clear understanding of your brand.</p>
                  </div>
                </div>
              </section>
            )}

            {/* Hoarding Section */}
            {openSection === 'hoarding-design' && (
              <section id="hoarding-design" className="content-section animate-in">
                <div className="section-header">
                  <h2>Hoarding Design Services</h2>
                  <p>We specialize in creating visually stunning hoarding designs that help businesses make a lasting impression. Our team crafts custom designs that capture attention while reflecting your brand’s identity.</p>
                </div>
                <div className="content-grid">
                  <div id="why-choose" className="content-item">
                    <div className="item-icon"><i className="fas fa-award"></i></div>
                    <h3>Why Choose Us</h3>
                    <p>We design hoardings that are aesthetically pleasing and effective in achieving marketing goals. Every design element resonates with your customers.</p>
                  </div>
                  <div id="solutions" className="content-item">
                    <div className="item-icon"><i className="fas fa-tools"></i></div>
                    <h3>Comprehensive Solutions</h3>
                    <p>We offer an end-to-end solution for all your hoarding design needs, starting from scratch or refreshing an existing design.</p>
                  </div>
                  <div id="printing" className="content-item">
                    <div className="item-icon"><i className="fas fa-print"></i></div>
                    <h3>Printing & Installation</h3>
                    <p>We use high-quality materials and advanced printing techniques to ensure your hoardings stand out. We also provide seamless installation services.</p>
                  </div>
                  <div id="maintenance" className="content-item">
                    <div className="item-icon"><i className="fas fa-hard-hat"></i></div>
                    <h3>Maintenance & Removal</h3>
                    <p>We offer ongoing maintenance to ensure your hoardings remain vibrant and handle the removal process efficiently when required.</p>
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

export default Branding;
