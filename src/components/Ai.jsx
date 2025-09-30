import React, { useEffect, useState } from 'react';
import './Services.css';
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer.jsx";
import PageBanner from "./PageBanner.jsx";




const Branding = () => {
  const [activeSection, setActiveSection] = useState('Comprehensive AISolutions');
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [openSection, setOpenSection] = useState('Comprehensive AI Solutions'); // NEW state

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
    <Header/>
      <PageBanner title="Ai Services" breadcrumb="Ai Services" />
     <div className="branding-page">
      {/* Page Banner */}
      

      {/* Main Content */}
      <div className="branding-container">
        {/* Sticky Navigation Sidebar */}
        <aside className="services-sidebar">
          <h3>Our Services</h3>
          <nav className="services-nav">
            <ul>
              {/* Logo Design */}
              <li>
                <button 
                  className={`nav-items ${activeSection === 'Comprehensive AI Solutions' ? 'active' : ''}`}
                  onClick={() => scrollToSection('Comprehensive AI Solutions')}
                >
                  <i className="fas fa-pencil-alt"></i>
                  <span>Comprehensive AI Solutions</span>
                </button>
                {openSection === 'Comprehensive AI Solutions' && (
                  <ul className="sub-nav">
                    <li>AI Development</li>
                    <li>AI Consulting</li>
                    <li>Machine Learning</li>
                    <li>Generative AI</li>
                    <li>ChatGPT Integration</li>
                    <li>AI Analytics</li>


                  </ul>
                )}
              </li>

             
            </ul>
          </nav>
        </aside>

        {/* Scrollable Content Area */}
        <main className="services-content">
          {/* Logo Section */}
          <section id="Comprehensive AI Solutions" className="content-section">
            <div className="section-header">
              <h2>Comprehensive AI Solutions</h2>
              <p>We deliver end-to-end AI services that transform businesses with intelligent systems, advanced analytics, and machine learning solutions.</p>
            </div>
            <div className="content-grid">
              <div id="discovery" className={`content-item ${highlightedItem === 'discovery' ? 'highlighted' : ''}`}>
                <div className="item-icon"><i className="fas fa-search"></i></div>
                <h3>AI Development</h3>
                <p>Build tailored AI solutions using the latest technologies for smarter business operations.</p>
              </div>
              <div id="concept" className={`content-item ${highlightedItem === 'concept' ? 'highlighted' : ''}`}>
                <div className="item-icon"><i className="fas fa-lightbulb"></i></div>
                <h3>Concept Development</h3>
                <p>Strategic guidance and insights to optimize business processes with AI.</p>
              </div>
              <div id="refinement" className={`content-item ${highlightedItem === 'refinement' ? 'highlighted' : ''}`}>
                <div className="item-icon"><i className="fas fa-pen-fancy"></i></div>
                <h3>Design Refinement</h3>
                <p>Unlock actionable insights and predictive analytics to accelerate decision-making.</p>
              </div>
              <div id="finalization" className={`content-item ${highlightedItem === 'finalization' ? 'highlighted' : ''}`}>
                <div className="item-icon"><i className="fas fa-check-circle"></i></div>
                <h3>Finalization</h3>
                <p>Create innovative content and designs with AI-powered creativity tools...</p>
              </div>
              <div id="ChatGPT Integration" className={`content-item ${highlightedItem === 'ChatGPT Integration' ? 'highlighted' : ''}`}>
                <div className="item-icon"><i className="fas fa-check-circle"></i></div>
                <h3>ChatGPT Integration</h3>
                <p>Integrate AI chatbots for 24/7 personalized customer support and engagement.</p>
              </div>
              <div id="AI Analytics" className={`content-item ${highlightedItem === 'AI Analytics' ? 'highlighted' : ''}`}>
                <div className="item-icon"><i className="fas fa-check-circle"></i></div>
                <h3>AI Analytics</h3>
                <p>Transform data into actionable insights using advanced AI and analytics solutions..</p>
              </div>
            </div>
          </section>

         
        </main>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Branding;
