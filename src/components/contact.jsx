import React from 'react';
 // Make sure to create this CSS file

const ContactCTASection = () => {
  return (
    <section className="contact-cta-section">
      <div className="container">
        <div className="cta-left">
          <p className="section-intro">LET’S WORK TOGETHER<span className="dot">.</span></p>
          <h2 className="cta-heading">
            Wanna get in touch? <span className="highlight">Let’s talk</span>
          </h2>
          <p className="cta-description">
            We offer exceptional services tailored to a wide range of businesses that want to improve the effectiveness of their digital marketing activities with discernible returns on investment. We aim to get back to all enquiries rapidly.
          </p>
          <p className="cta-link">
            Interested in working with us? <a href="#contact">Contact us</a>
          </p>
        </div>
        <div className="cta-right">
          <p className="quote-description">
            Fill in our simple quotation request form for an indication of just how cost-effective we can be. We aim to have pricing available to review within 24 hours.
          </p>
          <a href="#start" className="start-project-link">Start a project</a>
        </div>
    
      </div>
    </section>
  );
};

export default ContactCTASection;
