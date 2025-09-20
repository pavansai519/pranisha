import React, { useEffect } from 'react';
import Header from './HomeOne/Header.jsx';
import Footer from './HomeOne/Footer.jsx';
import './Services.css';

import PageBanner from './PageBanner.jsx';
 
 
function PRServices() {
  useEffect(() => {
    const boxes = document.querySelectorAll('.pr-box');
 
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pr-animate');
        } else {
          entry.target.classList.remove('pr-animate');
        }
      });
    }, { threshold: 0.1 });
 
    boxes.forEach(box => observer.observe(box));
    return () => observer.disconnect();
  }, []);
 
  return (
    <>
      <Header />
        <PageBanner title="PR & Media" breadcrumb="PR & Media" />
      {/* PR & Media Services Section */}
      <section className="pr-services-section">
        <div className="pr-container">
          <div className="pr-title-block">
            <h2>Elevate Your Brand Impact with Strategic <br /> PR & Media Solutions</h2>
            <hr/>
            <p>
              We deliver end-to-end PR and media services designed to amplify brand visibility and foster public trust. By combining creative storytelling with strategic communication, we ensure that your message resonates across the right channels. For us, Public Relations is more than visibility—it's about building lasting credibility through meaningful engagement. As a driving force in brand evolution, PR continues to shape public perception, fuel media presence, and empower organizations to lead with confidence in a rapidly changing world.
            </p>
          </div>
 
          <div className="pr-row">
            <div className="pr-col">
              <div className="pr-box">
                <h4>Media Relations</h4>
                <hr/>
                <p>Strengthen your public presence with impactful media outreach. We build strategic relationships with journalists and outlets to secure authentic coverage that boosts your brand’s credibility and trust.</p>
              </div>
            </div>
 
            <div className="pr-col">
              <div className="pr-box">
                <h4>Press Release Services</h4>
                <hr/>
                <p>Communicate your biggest milestones effectively with professionally crafted press releases. We handle writing, distribution, and media follow-up to ensure your news reaches the right audience at the right time.</p>
              </div>
            </div>
 
            <div className="pr-col">
              <div className="pr-box">
                <h4>Reputation Management</h4>
                <hr/>
                <p>Safeguard your brand’s image with proactive and responsive reputation strategies. From crisis communication to online sentiment monitoring, we help maintain public trust and confidence.</p>
              </div>
            </div>
 
            <div className="pr-col">
              <div className="pr-box">
                <h4>Thought Leadership</h4>
                <hr/>
                <p>Position your executives as industry influencers through strategic storytelling. We curate speaking opportunities, guest articles, and interviews to elevate your leadership’s voice in key conversations.</p>
              </div>
            </div>
 
            <div className="pr-col">
              <div className="pr-box">
                <h4>Event Promotion & Coverage</h4>
                <hr/>
                <p>Maximize exposure for your events with targeted PR campaigns. Whether it’s a product launch, webinar, or CSR initiative, we ensure media presence, buzz, and audience engagement.</p>
              </div>
            </div>
 
            <div className="pr-col">
              <div className="pr-box">
                <h4>Influencer & Digital PR</h4>
                <hr/>
                <p>Expand your reach through powerful digital PR and influencer collaboration. We identify relevant voices in your industry to amplify your message across social platforms and digital media.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Consultation Section */}
      {/* <section className="pr-consultation-section">
        <div className="pr-container">
          <div className="pr-consult-content">
            <h5>We are here to answer your questions 24/7</h5>
            <h2>Need A Consultation?</h2>
            <p>Our clients achieve their business goals. Contact us today to learn more about our services and how we can build a strong brand presence.</p>
            <a href="/contact" className="pr-btn-consult">Contact Us →</a>
          </div>
        </div>
      </section> */}
 
      <Footer />
    </>
  );
}
 
export default PRServices;