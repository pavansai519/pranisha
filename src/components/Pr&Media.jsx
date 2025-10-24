import React, { useEffect, useState } from 'react';
import './Services.css';
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer2.jsx";
import PageBanner from "./PageBanner.jsx";
import { Helmet } from "react-helmet-async";




const Branding = () => {
  const [activeSection, setActiveSection] = useState('Pr & Media');
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [openSection, setOpenSection] = useState('Pr & Media'); // NEW state

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
            <Helmet>
                    <title>Pr&media | Creative Digital Marketing Agency</title>
                    <meta
                      name="description"
                      content="Pranishaa helps businesses grow with innovative digital marketing, branding, and creative design solutions tailored to your brand goals."
                    />
                    <meta
                      name="keywords"
                      content="Digital Marketing, Branding Agency, Web Design, SEO, Social Media, PPC, Pranishaa"
                    />
                    <meta property="og:title" content="Pranishaa | Creative Digital Marketing Agency" />
                    <meta property="og:description" content="Transform your business with Pranishaa's data-driven marketing and creative branding strategies." />
                    <meta property="og:image" content="https://pranishaa.com/images/og-home.jpg" />
                    <meta property="og:url" content="https://pranishaa.com/" />
              </Helmet>
    <Header/>
      <PageBanner title="Pr & media" breadcrumb="Pr & media" />
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
                  className={`nav-items ${activeSection === 'Pr & Media' ? 'active' : ''}`}
                  onClick={() => scrollToSection('Pr & Media')}
                >
                  <i className="fas fa-pencil-alt"></i>
                  <span>Pr & Media</span>
                </button>
                {openSection === 'Pr & Media' && (
                  <ul className="sub-nav">
                    <li>Media Relations</li>
                    <li>Press Release Services</li>
                    {/* <li>Reputation Management</li> */}
                    <li>Thought Leadership</li>
                    <li>Event Promotion & Coverage</li>
                   {/* <li>Thought Leadership</li> */}


                  </ul>
                )}
              </li>

             
            </ul>
          </nav>
        </aside>

        {/* Scrollable Content Area */}
        <main className="services-content">
          {/* Logo Section */}
          <section id="logo-design" className="content-section">
            <div className="section-header">
              <h2>Elevate Your Brand Impact with StrategicPR & Media Solutions</h2>
              <p>We deliver end-to-end PR and media services designed to amplify brand visibility and foster public trust.  As a driving force and empower organizations to lead with confidence in a rapidly changing world.</p>
            </div>
           <div className="content-grid">
  <div
    id="discovery"
    className={`content-item ${highlightedItem === 'discovery' ? 'highlighted' : ''}`}
  >
    <div className="item-icon"><i className="fas fa-newspaper"></i></div>
    <h3>Media Relations</h3>
    <p>
      Strengthen your public presence with impactful media outreach. We build strategic relationships with journalists and outlets to
      secure coverage that boosts your brand’s credibility and trust.
    </p>
  </div>

  <div
    id="concept"
    className={`content-item ${highlightedItem === 'concept' ? 'highlighted' : ''}`}
  >
    <div className="item-icon"><i className="fas fa-bullhorn"></i></div>
    <h3>Press Release Services</h3>
    <p>
      Communicate your biggest milestones effectively with professionally crafted press releases. We handle writing, distribution,
      and media follow-up to ensure your news reaches the right audience at the right time.
    </p>
  </div>

  <div
    id="finalization"
    className={`content-item ${highlightedItem === 'finalization' ? 'highlighted' : ''}`}
  >
    <div className="item-icon"><i className="fas fa-user-tie"></i></div>
    <h3>Thought Leadership</h3>
    <p>
      Position your executives as industry influencers through strategic storytelling. We curate speaking opportunities, guest
      articles, and interviews to elevate your leadership’s voice in key conversations.
    </p>
  </div>

  <div
    id="Event Promotion & Coverage"
    className={`content-item ${highlightedItem === 'Event Promotion & Coverage' ? 'highlighted' : ''}`}
  >
    <div className="item-icon"><i className="fas fa-calendar-check"></i></div>
    <h3>Event Promotion & Coverage</h3>
    <p>
      Maximize exposure for your events with targeted PR campaigns. Whether it’s a product launch, webinar, or CSR initiative, we
      ensure media presence, buzz, and audience engagement.
    </p>
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
