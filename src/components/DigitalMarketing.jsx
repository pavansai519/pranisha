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
                      
                      <li>On-Page SEO</li>
                      <li>Off-Page SEO</li>
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
                      
                      <li>Google Ads Management</li>
                      <li>Google Analytics</li>
                      <li>GMB Optimization</li>
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
                    <span>Meta Ads</span>
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
                    <span>E Mail Marketing</span>
                  </button>
                  {openSection === 'influencer-marketing' && (
                    <ul className="sub-nav">
                      <li>Template Design</li>
                      <li>Campaign Strategy</li>
                      <li>Automation Setup</li>
                      <li>Analytics & Reporting</li>
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
        <h3>On-Page SEO</h3>
        <p>
         Enhance your website’s visibility by optimizing keywords, meta tags, headings, and internal links. Improve content structure and user experience to achieve higher search rankings and better engagement.
        </p>
      </div>

      <div id="offpage-smm" className={`content-item ${highlightedItem === 'offpage-smm' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fas fa-share-alt"></i></div>
        <h3>Off-Page SEO</h3>
        <p>
        Strengthen your online authority with powerful backlink strategies, guest posting, and brand mentions. Boost credibility through reputation management and community-driven SEO campaigns.
        </p>
      </div>

      <div id="ppc-ads" className={`content-item ${highlightedItem === 'ppc-ads' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fas fa-bullseye"></i></div>
        <h3>Technical SEO</h3>
        <p>
          Maximize website performance with complete technical optimization. Improve site speed, mobile responsiveness, and crawlability to ensure flawless indexing and long-term SEO success.
        </p>
      </div>

         <div id="social-content" className={`content-item ${highlightedItem === 'social-content' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fas fa-share-alt"></i></div>
        <h3>E-Commerce SEO</h3>
        <p>
        Increase sales with optimized product pages, keyword-driven descriptions, and improved site navigation. Enhance user experience to attract, engage, and convert customers more effectively.
        </p>
      </div>
    </div>
  </section>
)}


            {openSection === "google-ads" && (
  <section id="google-ads" className="content-section animate-in">
    <div className="section-header">
      <h2>Google Ads</h2>
      <p>Pranishaa Technologies provides end-to-end Google Ads management to help your business reach the right audience, increase conversions, and achieve measurable ROI efficiently.</p>
    </div>

    <div className="content-grid">
      <div id="search-ads" className={`content-item ${highlightedItem === 'search-ads' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fas fa-search"></i></div>
        <h3>Google Ads Management</h3>
        <p>Run highly targeted Google Search, Display, and YouTube campaigns that increase brand visibility, drive qualified leads, and maximize conversions for consistent business growth.</p>
      </div>

      <div id="display-ads" className={`content-item ${highlightedItem === 'display-ads' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fas fa-image"></i></div>
        <h3>Google Analytics</h3>
        <p>Track visitor behavior, campaign performance, and conversion metrics with Google Analytics to optimize strategies, improve ROI, and make smarter, data-driven marketing decisions.</p>
      </div>

      <div id="shopping-ads" className={`content-item ${highlightedItem === 'shopping-ads' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fas fa-shopping-cart"></i></div>
        <h3>Google My Business (GMB) Optimization</h3>
        <p>Enhance your local presence by optimizing GMB listings, responding to reviews, and improving your Maps visibility to attract nearby customers and increase conversions effectively.</p>
      </div>

      <div id="local-ads" className={`content-item ${highlightedItem === 'local-ads' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fas fa-map-marker-alt"></i></div>
        <h3>Local Ads</h3>
        <p>Target potential customers in your area with precise local advertising campaigns that increase foot traffic, lead generation, and sales for small and medium-sized businesses.</p>
      </div>
    </div>
  </section>
)}


           {openSection === "social-media" && (
  <section id="social-media" className="content-section animate-in">
    <div className="section-header">
      <h2>Meta Ads</h2>
      <p>Pranishaa Technologies creates targeted social media campaigns to increase brand awareness, drive engagement, and deliver measurable results across multiple platforms.</p>
    </div>

    <div className="content-grid">
      <div id="facebook-ads" className={`content-item ${highlightedItem === 'facebook-ads' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fab fa-facebook-f"></i></div>
        <h3>Facebook Ads</h3>
        <p>Run highly-targeted Facebook campaigns that reach your audience effectively, boost engagement, and generate quality leads to grow your business efficiently.</p>
      </div>

      <div id="twitter-ads" className={`content-item ${highlightedItem === 'twitter-ads' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fab fa-twitter"></i></div>
        <h3>Twitter Ads</h3>
        <p>Leverage Twitter ads to promote your brand in real-time, engage audiences, amplify your message, and drive meaningful conversions for your business.</p>
      </div>

      <div id="instagram-ads" className={`content-item ${highlightedItem === 'instagram-ads' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fab fa-instagram"></i></div>
        <h3>Instagram Ads</h3>
        <p>Create visually engaging Instagram campaigns that showcase your brand, increase followers, drive website traffic, and boost conversions effectively.</p>
      </div>

      <div id="linkedin-ads" className={`content-item ${highlightedItem === 'linkedin-ads' ? 'highlighted' : ''}`}>
        <div className="item-icon"><i className="fab fa-linkedin-in"></i></div>
        <h3>LinkedIn Ads</h3>
        <p>Use LinkedIn advertising to target professionals, enhance your B2B reach, strengthen brand credibility, and generate high-quality leads efficiently.</p>
      </div>
    </div>
  </section>
)}


            {openSection === "influencer-marketing" && (
              <section id="influencer-marketing" className="content-section animate-in">
                 <div className="section-header">
                <h2>E Mail Marketing</h2>
                <p>Drive results with targeted email marketing campaigns that engage subscribers, nurture leads, promote products or services, and build long-term customer relationships with measurable ROI.</p>
              </div>

              <div className="content-grid">
                <div id="influencer-identification" className={`content-item ${highlightedItem === 'influencer-identification' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-user-check"></i></div>
                  <h3>Template Design</h3>
                  <p>Design and develop visually appealing, fully responsive email templates that align with your brand, display perfectly on all devices, and drive higher engagement and click-through rates.</p>
                </div>

                <div id="campaign-strategy" className={`content-item ${highlightedItem === 'campaign-strategy' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-lightbulb"></i></div>
                  <h3>Campaign Strategy</h3>
                  <p>Plan and execute personalized email campaigns that engage your audience, nurture leads, promote products effectively, and deliver measurable results for business growth and retention.</p>
                </div>

                <div id="outreach" className={`content-item ${highlightedItem === 'outreach' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-envelope-open-text"></i></div>
                  <h3>Automation Setup</h3>
                  <p>Our team will handle all aspects of influencer outreach and management.</p>
                </div>

                <div id="analysis" className={`content-item ${highlightedItem === 'analysis' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-chart-line"></i></div>
                  <h3>Analytics & Reporting</h3>
                  <p>Monitor email campaign performance by analyzing open rates, click-throughs, and conversions, providing actionable insights to continuously improve engagement and maximize ROI for future campaigns.</p>
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
