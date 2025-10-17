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
        <p>
          We organize impactful corporate events that communicate your brand’s purpose, foster engagement, and leave lasting impressions on attendees through exceptional planning, creative execution, and seamless coordination.
        </p>
      </div>
      <div className="content-grid">
        <div id="conferences" className="content-item">
          <div className="item-icon"><i className="fas fa-microphone"></i></div>
          <h3>Conferences</h3>
          <p>
            From concept to execution, we manage every detail of your corporate conference — including stage setup, branding, AV support, and guest coordination — ensuring a professional and memorable experience.
          </p>
        </div>

        <div id="launches" className="content-item">
          <div className="item-icon"><i className="fas fa-bullseye"></i></div>
          <h3>Product Launches</h3>
          <p>
            We craft innovative product launch events designed to excite audiences, boost media attention, and generate market buzz with creative storytelling, live demos, and immersive brand experiences.
          </p>
        </div>

        <div id="awards" className="content-item">
          <div className="item-icon"><i className="fas fa-trophy"></i></div>
          <h3>Award Ceremonies</h3>
          <p>
            Celebrate excellence in style with our award ceremonies that feature elegant stage design, seamless event flow, and customized experiences that make every recognition moment unforgettable.
          </p>
        </div>

        <div id="team-building" className="content-item">
          <div className="item-icon"><i className="fas fa-users-cog"></i></div>
          <h3>Team Building Activities</h3>
          <p>
            We plan engaging team-building events that inspire collaboration, motivation, and stronger workplace culture through interactive activities, creative challenges, and memorable shared experiences.
          </p>
        </div>
      </div>
    </section>
  )}

  {/* Brand Activations Section */}
  {openSection === 'brand-activations' && (
    <section id="brand-activations" className="content-section animate-in">
      <div className="section-header">
        <h2>Brand Activations</h2>
        <p>
          We bring your brand to life through experiential activations that spark emotional connections, drive engagement, and strengthen brand recognition among your ideal audience.
        </p>
      </div>
      <div className="content-grid">
        <div id="campaigns" className="content-item">
          <div className="item-icon"><i className="fas fa-star"></i></div>
          <h3>Experiential Campaigns</h3>
          <p>
            Our immersive campaigns create real-world brand experiences that emotionally connect with audiences, combining creativity, technology, and storytelling to boost brand visibility and loyalty.
          </p>
        </div>

        <div id="demos" className="content-item">
          <div className="item-icon"><i className="fas fa-cubes"></i></div>
          <h3>Product Demos</h3>
          <p>
            We design interactive product demos that showcase features and benefits in engaging ways, helping customers understand value through hands-on, memorable brand interactions.
          </p>
        </div>

        <div id="popup" className="content-item">
          <div className="item-icon"><i className="fas fa-store"></i></div>
          <h3>Pop-up Experiences</h3>
          <p>
            Our creative pop-up events generate excitement, draw crowds, and increase brand exposure through unique, temporary installations that deliver authentic and shareable experiences.
          </p>
        </div>

        <div id="influencer" className="content-item">
          <div className="item-icon"><i className="fas fa-user-tag"></i></div>
          <h3>Influencer Collaborations</h3>
          <p>
            We connect your brand with relevant influencers to co-create authentic content, expand reach, and enhance credibility across digital and social platforms for maximum impact.
          </p>
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
