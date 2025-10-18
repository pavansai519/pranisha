import React, { useEffect, useState } from 'react';
import './Services.css';
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer2.jsx";
import PageBanner from "./PageBanner.jsx";
import { Helmet } from "react-helmet-async";

const DigitalMarketing = () => {
  const [activeSection, setActiveSection] = useState('google-ads');
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [openSection, setOpenSection] = useState('google-ads');

  // ❌ remove scroll listener useEffect

  // Keep IntersectionObserver if you want animations
  useEffect(() => {
    const observerOptions = { root: null, threshold: 0.18 };
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

  // ✅ Section switching
  const scrollToSection = (sectionId) => {
    setHighlightedItem(null);
    setOpenSection(sectionId);
    setActiveSection(sectionId);
  };

  return (
    <>
    <Helmet>
                <title>Digital Marketing | Creative Digital Marketing Agency</title>
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
      <Header />
      <PageBanner title="Digital Marketing" breadcrumb="Digital Marketing" />

      <div className="branding-page">
        <div className="branding-container">
          {/* Sidebar */}
          <aside className="services-sidebar">
            <h3>Our Services</h3>
            <nav className="services-nav">
              <ul>

{/*SEO */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'SEO' ? 'active' : ''}`}
                    onClick={() => scrollToSection('SEO')}
                  >
                    <i className="fas fa-search"></i>
                    <span>SEO</span>
                  </button>
                  {openSection === 'SEO' && (
                    <ul className="sub-nav">
                      
                      <li>On-Page Social Media Marketing</li>
                      <li>Off-Page Social Media Marketing </li>
                      <li>Pay-Per-Click (PPC) </li>
                      <li>Social Media Content</li>
                      {/* <li>App Promotion</li> */}
                      {/* <li>Local Ads</li> */}
                    </ul>
                  )}
                </li>

                {/* Google Ads */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'google-ads' ? 'active' : ''}`}
                    onClick={() => scrollToSection('google-ads')}
                  >
                    <i className="fas fa-bullhorn"></i>
                    <span>Google Ads</span>
                  </button>
                  {openSection === 'google-ads' && (
                    <ul className="sub-nav">
                      
                      <li>Search Ads</li>
                      <li>Display Ads</li>
                      <li>Shopping Ads</li>
                      {/* <li>YouTube Ads</li> */}
                      {/* <li>App Promotion</li> */}
                      <li>Local Ads</li>
                    </ul>
                  )}
                </li>

                {/* Social Media */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'social-media' ? 'active' : ''}`}
                    onClick={() => scrollToSection('social-media')}
                  >
                    <i className="fas fa-share-alt"></i>
                    <span>Social Media</span>
                  </button>
                  {openSection === 'social-media' && (
                    <ul className="sub-nav">
                      <li>Facebook Ads</li>
                      <li>Twitter Ads</li>
                      <li>Instagram Ads</li>
                      <li>LinkedIn Ads</li>
                    </ul>
                  )}
                </li>

                {/* Influencer */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'influencer-marketing' ? 'active' : ''}`}
                    onClick={() => scrollToSection('influencer-marketing')}
                  >
                    <i className="fas fa-user-friends"></i>
                    <span>Influencer Marketing</span>
                  </button>
                  {openSection === 'influencer-marketing' && (
                    <ul className="sub-nav">
                      <li>Identification</li>
                      <li>Campaign Strategy</li>
                      <li>Outreach & Management</li>
                      <li>Analysis & Reporting</li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </aside>

          {/* ✅ Only one section visible at a time */}
          <main className="services-content">





          {openSection === "SEO" && (
  <section id="seo" className="content-section animate-in">
    <div className="section-header">
      <h2>SEO</h2>
      <p>
Boost website visibility and attract targeted traffic with expert SEO, including on-page optimization, off-page link building, and technical strategies..
</p>

    </div>

    <div className="content-grid">
      <div id="onpage-smm" className={`content-item ${highlightedItem === 'onpage-smm' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fas fa-laptop-code"></i></div>
        <h3>On-Page Social Media Marketing </h3>
        <p>
         Maximize engagement with on-page SMM by optimizing profiles, creating keyword-rich posts, scheduling content, and analyzing performance to enhance visibility.
        </p>
      </div>

      <div id="offpage-smm" className={`content-item ${highlightedItem === 'offpage-smm' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fas fa-share-alt"></i></div>
        <h3>Off-Page Social Media Marketing </h3>
        <p>
        Increase reach and authority with off-page SMM, using backlinks, influencer collaborations, social campaigns, and community engagement to boost credibility.
        </p>
      </div>

      <div id="ppc-ads" className={`content-item ${highlightedItem === 'ppc-ads' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fas fa-bullseye"></i></div>
        <h3>Pay-Per-Click (PPC) </h3>
        <p>
          Generate instant traffic and measurable ROI with targeted PPC campaigns, optimizing ads on Google, Bing, and social platforms for leads.
        </p>
      </div>

         <div id="social-content" className={`content-item ${highlightedItem === 'social-content' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fas fa-share-alt"></i></div>
        <h3>Social Media Content</h3>
        <p>
         Boost engagement and brand visibility with tailored social media content, including posts, visuals, and reels that connect with your audience.
        </p>
      </div>
    </div>
  </section>
)}


            {openSection === "google-ads" && (
              <section id="google-ads" className="content-section animate-in">
               <div className="section-header">
                <h2>Google Ads</h2>
                <p>
                  We offer a comprehensive range of Google Ads services to help your business reach its target audience and achieve its marketing goals.
                </p>
              </div>

              <div className="content-grid">
                <div id="search-ads" className={`content-item ${highlightedItem === 'search-ads' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-search"></i></div>
                  <h3>Search Ads</h3>
                  <p>Our search ads services are designed to help you reach potential customers who are actively searching for products.</p>
                </div>

                <div id="display-ads" className={`content-item ${highlightedItem === 'display-ads' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-image"></i></div>
                  <h3>Display Ads</h3>
                  <p>Display ads are a highly effective way to raise brand awareness and drive traffic to your website.</p>
                </div>

                <div id="shopping-ads" className={`content-item ${highlightedItem === 'shopping-ads' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-shopping-cart"></i></div>
                  <h3>Shopping Ads</h3>
                  <p>Shopping ads are a great way to promote your products and services to potential customers.</p>
                </div>

                {/* <div id="youtube-ads" className={`content-item ${highlightedItem === 'youtube-ads' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-play-circle"></i></div>
                  <h3>YouTube Ads</h3>
                  <p>With over 2 billion monthly active users, YouTube is an excellent platform for promoting your business.</p>
                </div> */}

                {/* <div id="app-promotion" className={`content-item ${highlightedItem === 'app-promotion' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-mobile-alt"></i></div>
                  <h3>App Promotion</h3>
                  <p>Our app promotion services are designed to help you promote your mobile app and increase downloads and installs.</p>
                </div> */}

                <div id="local-ads" className={`content-item ${highlightedItem === 'local-ads' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <h3>Local Ads</h3>
                  <p>If you have a local business, our local ads services can help you reach potential customers in your area.</p>
                </div>
              </div>
              </section>
            )}

            {openSection === "social-media" && (
              <section id="social-media" className="content-section animate-in">
                <div className="section-header">
                <h2>Social Media Marketing</h2>
                <p>We offer a comprehensive range of social media marketing services to help your business reach its target audience.</p>
              </div>

              <div className="content-grid">
                <div id="facebook-ads" className={`content-item ${highlightedItem === 'facebook-ads' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fab fa-facebook-f"></i></div>
                  <h3>Facebook Ads</h3>
                  <p>With over 2.7 billion monthly active users, Facebook is one of the most popular social media platforms.</p>
                </div>

                <div id="twitter-ads" className={`content-item ${highlightedItem === 'twitter-ads' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fab fa-twitter"></i></div>
                  <h3>Twitter Ads</h3>
                  <p>Twitter is a fast-paced platform that’s ideal for real-time engagement and promoting your brand’s message.</p>
                </div>

                <div id="instagram-ads" className={`content-item ${highlightedItem === 'instagram-ads' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fab fa-instagram"></i></div>
                  <h3>Instagram Ads</h3>
                  <p>With over 1 billion monthly active users, Instagram is a highly visual platform ideal for promoting your brand’s message.</p>
                </div>

                <div id="linkedin-ads" className={`content-item ${highlightedItem === 'linkedin-ads' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fab fa-linkedin-in"></i></div>
                  <h3>LinkedIn Ads</h3>
                  <p>LinkedIn is a professional networking platform that’s ideal for B2B businesses.</p>
                </div>
              </div>
              </section>
            )}

            {openSection === "influencer-marketing" && (
              <section id="influencer-marketing" className="content-section animate-in">
                 <div className="section-header">
                <h2>Influencer Marketing</h2>
                <p>We offer a comprehensive range of influencer marketing services to help your business reach its target audience.</p>
              </div>

              <div className="content-grid">
                <div id="influencer-identification" className={`content-item ${highlightedItem === 'influencer-identification' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-user-check"></i></div>
                  <h3>Influencer Identification</h3>
                  <p>Our team will work with you to identify the right influencers for your campaign.</p>
                </div>

                <div id="campaign-strategy" className={`content-item ${highlightedItem === 'campaign-strategy' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-lightbulb"></i></div>
                  <h3>Campaign Strategy</h3>
                  <p>We will work with you to develop an influencer marketing campaign strategy that aligns with your business goals.</p>
                </div>

                <div id="outreach" className={`content-item ${highlightedItem === 'outreach' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-envelope-open-text"></i></div>
                  <h3>Influencer Outreach & Management</h3>
                  <p>Our team will handle all aspects of influencer outreach and management.</p>
                </div>

                <div id="analysis" className={`content-item ${highlightedItem === 'analysis' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-chart-line"></i></div>
                  <h3>Campaign Analysis and Reporting</h3>
                  <p>We will provide you with regular reports on your campaign’s performance.</p>
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
