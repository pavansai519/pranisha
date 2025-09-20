import React, { useEffect } from 'react';
import Header from './HomeOne/Header.jsx';
import Footer from './HomeOne/Footer.jsx';
import './Services.css';

import PageBanner from './PageBanner.jsx';
 
 
function AiServices() {
  useEffect(() => {
    const boxes = document.querySelectorAll('.ai-box');
 
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ai-animate');
        } else {
          entry.target.classList.remove('ai-animate');
        }
      });
    }, { threshold: 0.1 });
 
    boxes.forEach(box => observer.observe(box));
    return () => observer.disconnect();
  }, []);
 
  return (
    <>
      <Header />
        <PageBanner title="AI Services" breadcrumb="AI Services" />
      {/* AI Development Section */}
      <section className="ai-section ai-development">
        <div className="ai-container">
          <div className="ai-title-block">
            <span className="ai-subtitle">AI </span>
            <h2 className="ai-main-title">Comprehensive AI Solutions</h2>
            <hr className="ai-separator"/>
            <p>
              We deliver end-to-end AI services that transform businesses with intelligent systems, advanced analytics, and machine learning solutions.
            </p>
          </div>
 
          <div className="ai-row">
            <div className="ai-col">
              <div className="ai-box">
                <h4>AI Development</h4>
                <hr/>
                <p>Build tailored AI solutions using the latest technologies for smarter business operations.</p>
              </div>
            </div>
            <div className="ai-col">
              <div className="ai-box">
                <h4>AI Consulting</h4>
                <hr/>
                <p>Strategic guidance and insights to optimize business processes with AI.</p>
              </div>
            </div>
            <div className="ai-col">
              <div className="ai-box">
                <h4>Machine Learning</h4>
                <hr/>
                <p>Unlock actionable insights and predictive analytics to accelerate decision-making.</p>
              </div>
            </div>
            <div className="ai-col">
              <div className="ai-box">
                <h4>Generative AI</h4>
                <hr/>
                <p>Create innovative content and designs with AI-powered creativity tools.</p>
              </div>
            </div>
            <div className="ai-col">
              <div className="ai-box">
                <h4>ChatGPT Integration</h4>
                <hr/>
                <p>Integrate AI chatbots for 24/7 personalized customer support and engagement.</p>
              </div>
            </div>
            <div className="ai-col">
              <div className="ai-box">
                <h4>AI Analytics</h4>
                <hr/>
                <p>Transform data into actionable insights using advanced AI and analytics solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Consultation Section */}
      {/* <section className="ai-section ai-consultation">
        <div className="ai-container">
          <div className="ai-consult-content">
            <h5>We are here to answer your questions 24/7</h5>
            <h2>Need A Consultation?</h2>
            <p>Contact us today to learn more about our AI services and how we can help your business grow with intelligent solutions.</p>
            <a href="/contact" className="ai-btn-consult">Contact Us →</a>
          </div>
        </div>
      </section> */}
 
      <Footer />
    </>
  );
}
 
export default AiServices;