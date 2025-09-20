import React, { useEffect } from 'react';
import Header from './HomeOne/Header.jsx';
import Footer from './HomeOne/Footer.jsx';
import './Services.css';
import PageBanner from './PageBanner.jsx';
 
function Branding() {
  useEffect(() => {
    const cells = document.querySelectorAll('.branding-cell');
 
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1 });
 
    cells.forEach(cell => observer.observe(cell));
 
    return () => observer.disconnect();
  }, []);
 
  return (
    <>
      <Header />
       <PageBanner title="Branding" breadcrumb="Branding" />

      {/* Logo Design Section */}
      <section className="branding-logo-section">
        <div className="branding-container">
          <div className="branding-title">
            <h2>Logo Design - Creative Logo</h2>
            <hr />
            <p>
              We offer professional and creative logo design services to help your business establish a strong and memorable brand identity. Our team of experienced designers will work closely with you to understand your business, target audience, and design preferences, to create a logo that reflects your brand’s personality and values.
            </p>
          </div>
 
          <div className="branding-table">
            <div className="branding-cell">
              <h4>Discovery</h4>
              <p>We start by understanding your business, target audience, and design preferences, to develop a clear understanding of your brand.</p>
            </div>
            <div className="branding-cell">
              <h4>Concept Development</h4>
              <p>Our team of designers will brainstorm and develop multiple logo concepts, each with a unique style and design.</p>
            </div>
            <div className="branding-cell">
              <h4>Design Refinement</h4>
              <p>We work with you to refine the logo concepts based on your feedback and preferences, to develop a final logo design that perfectly reflects your brand’s identity.</p>
            </div>
            <div className="branding-cell">
              <h4>Finalization</h4>
              <p>We finalize the logo design, including the color scheme, typography, and other design elements, and provide you with the final logo files in various formats.</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Packaging Design Section */}
      <section className="branding-packaging-section">
        <div className="branding-container">
          <div className="branding-title">
            <h2>Packaging Design Services</h2>
            <hr />
            <p>
              We understand the importance of effective packaging design as a critical part of building a strong brand. Our packaging design services help businesses create packaging that is visually appealing and effective in communicating the brand’s message.
            </p>
          </div>
 
          <div className="branding-table">
            <div className="branding-cell">
              <h4>Discovery</h4>
              <p>We start by understanding your business, target audience, and design preferences, to develop a clear understanding of your brand.</p>
            </div>
            <div className="branding-cell">
              <h4>Research</h4>
              <p>We conduct thorough research on your target audience, competition, and industry trends to identify opportunities and challenges for packaging design.</p>
            </div>
            <div className="branding-cell">
              <h4>Concept Development</h4>
              <p>Based on our research and understanding of your brand, we develop multiple packaging design concepts that are unique and effective in communicating your brand’s message.</p>
            </div>
            <div className="branding-cell">
              <h4>Design Refinement</h4>
              <p>We work with you to refine the packaging design concepts based on your feedback and preferences, to develop a final packaging design that perfectly reflects your brand’s identity.</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Hoarding Design Section */}
      <section className="branding-hoarding-section">
        <div className="branding-container">
          <div className="branding-title">
            <h2>Hoarding Design Services</h2>
            <hr />
            <p>
              We specialize in creating visually stunning hoarding designs that help businesses make a lasting impression. Our team crafts custom designs that capture attention while reflecting your brand’s identity.
            </p>
          </div>
 
          <div className="branding-table">
            <div className="branding-cell">
              <h4>Why Choose Our Hoarding Design Services</h4>
              <p>We design hoardings that are aesthetically pleasing and effective in achieving marketing goals. Every design element resonates with your customers.</p>
            </div>
            <div className="branding-cell">
              <h4>Comprehensive Hoarding Design Solutions</h4>
              <p>We offer an end-to-end solution for all your hoarding design needs, starting from scratch or refreshing an existing design.</p>
            </div>
            <div className="branding-cell">
              <h4>Printing and Installation</h4>
              <p>We use high-quality materials and advanced printing techniques to ensure your hoardings stand out. We also provide seamless installation services.</p>
            </div>
            <div className="branding-cell">
              <h4>Maintenance and Removal</h4>
              <p>We offer ongoing maintenance to ensure your hoardings remain vibrant and handle the removal process efficiently when required.</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Consultation Section */}
      {/* <section className="branding-consult-section">
        <div className="branding-container">
          <div className="consult-box">
            <h5>We are here to answer your questions 24/7</h5>
            <h2>Need A Consultation?</h2>
            <p>
              Our clients achieve their business goals. Contact us today to learn more about our services and how we can build a strong online presence.
            </p>
            <a href="/contact" className="consult-btn">Contact Us →</a>
          </div>
        </div>
      </section> */}
 
      <Footer />
    </>
  );
}
 
export default Branding;
 