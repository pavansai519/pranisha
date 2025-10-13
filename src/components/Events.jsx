import React, { useEffect, useState } from 'react';
import './Services.css';
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer2.jsx";
import PageBanner from "./PageBanner.jsx";

const Events = () => {
  const [activeSection, setActiveSection] = useState('corporate-events');
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [openSection, setOpenSection] = useState('corporate-events');

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

  // Switch section
  const scrollToSection = (sectionId) => {
    setHighlightedItem(null);
    setOpenSection(sectionId);
    setActiveSection(sectionId);
  };

  return (
    <>
      <Header />
      <PageBanner title="Event Management" breadcrumb="Events" />
      <div className="branding-page">
        <div className="branding-container">
          {/* Sidebar */}
          <aside className="services-sidebar">
            <h3>Our Events</h3>
            <nav className="services-nav">
              <ul>
                {/* Corporate Events */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'corporate-events' ? 'active' : ''}`}
                    onClick={() => scrollToSection('corporate-events')}
                  >
                    <i className="fas fa-briefcase"></i>
                    <span>Corporate Events</span>
                  </button>
                  {openSection === 'corporate-events' && (
                    <ul className="sub-nav">
                      <li>Conferences</li>
                      <li>Product Launches</li>
                      <li>Award Ceremonies</li>
                      <li>Team Building Activities</li>
                    </ul>
                  )}
                </li>

               

                {/* Brand Activations */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'brand-activations' ? 'active' : ''}`}
                    onClick={() => scrollToSection('brand-activations')}
                  >
                    <i className="fas fa-bullhorn"></i>
                    <span>Brand Activations</span>
                  </button>
                  {openSection === 'brand-activations' && (
                    <ul className="sub-nav">
                      <li>Experiential Campaigns</li>
                      <li>Product Demos</li>
                      <li>Pop-up Experiences</li>
                      <li>Influencer Collaborations</li>
                    </ul>
                  )}
                </li>

              
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="services-content">
            {/* Corporate Events Section */}
            {openSection === 'corporate-events' && (
              <section id="corporate-events" className="content-section animate-in">
                <div className="section-header">
                  <h2>Corporate Events</h2>
                  <p>We organize professional corporate events that reflect your brand’s vision, engage your audience, and deliver lasting impressions.</p>
                </div>
                <div className="content-grid">
                  <div id="conferences" className="content-item">
                    <div className="item-icon"><i className="fas fa-microphone"></i></div>
                    <h3>Conferences</h3>
                    <p>Seamless planning, technology integration, and logistics to deliver impactful corporate conferences.</p>
                  </div>
                  <div id="launches" className="content-item">
                    <div className="item-icon"><i className="fas fa-bullseye"></i></div>
                    <h3>Product Launches</h3>
                    <p>Creative product launch experiences designed to build hype and brand awareness among your audience.</p>
                  </div>
                  <div id="awards" className="content-item">
                    <div className="item-icon"><i className="fas fa-trophy"></i></div>
                    <h3>Award Ceremonies</h3>
                    <p>Elegant award ceremonies that celebrate excellence with premium stage design and event coordination.</p>
                  </div>
                            <div id="team-building" className="content-item">
                    <div className="item-icon"><i className="fas fa-users-cog"></i></div>
                    <h3>Team Building Activities</h3>
                    <p>We create engaging and collaborative team-building events that enhance employee bonding, motivation, and company culture.</p>
                </div>
                </div>
              </section>
            )}

           

            {/* Brand Activations Section */}
            {openSection === 'brand-activations' && (
              <section id="brand-activations" className="content-section animate-in">
                <div className="section-header">
                  <h2>Brand Activations</h2>
                  <p>We help brands engage audiences through immersive experiences that strengthen brand loyalty and recognition.</p>
                </div>
                <div className="content-grid">
                  <div id="campaigns" className="content-item">
                    <div className="item-icon"><i className="fas fa-star"></i></div>
                    <h3>Experiential Campaigns</h3>
                    <p>Interactive campaigns that connect your audience emotionally with your brand.</p>
                  </div>
                  <div id="demos" className="content-item">
                    <div className="item-icon"><i className="fas fa-cubes"></i></div>
                    <h3>Product Demos</h3>
                    <p>Hands-on demonstrations that showcase product features and benefits in a memorable way.</p>
                  </div>
                  <div id="popup" className="content-item">
                    <div className="item-icon"><i className="fas fa-store"></i></div>
                    <h3>Pop-up Experiences</h3>
                    <p>Creative temporary setups that captivate audiences and amplify your brand visibility.</p>
                  </div>
                            <div id="influencer" className="content-item">
                    <div className="item-icon"><i className="fas fa-user-tag"></i></div>
                    <h3>Influencer Collaborations</h3>
                    <p>Partner with the right influencers to promote your brand authentically and reach your target audience effectively.</p>
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

export default Events;
