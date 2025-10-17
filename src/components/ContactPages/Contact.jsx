import React from 'react';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageBanner from '../PageBanner.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from "react-helmet-async";

import { faPhone, faEnvelope, faLocationDot, faUpload } from '@fortawesome/free-solid-svg-icons';

function AboutWithContact() {
  return (
    <>
     <Helmet>
        <title>Contact Us | Pranishaa - Let's Build Something Amazing</title>
        <meta
          name="description"
          content="Get in touch with Pranishaa for digital marketing, branding, and web development solutions. We're here to turn your ideas into impact."
        />
        <meta
          name="keywords"
          content="Contact Pranishaa, Digital Marketing Agency, Branding, Web Design, SEO Help"
        />
        <meta property="og:title" content="Contact Pranishaa" />
        <meta property="og:description" content="Reach out to Pranishaa for expert marketing, branding, and design services that drive business success." />
        <meta property="og:image" content="https://pranishaa.com/images/og-contact.jpg" />
        <meta property="og:url" content="https://pranishaa.com/contact" />
      </Helmet>
      
      <Header />
      {/* About Banner / Image */}
      <PageBanner title="Contact" breadcrumb="Contact" />

      

      {/* Contact Section - same as screenshot */}
      <section className="about-contact-section">
        <div className="container">
          <div className="contact-row">
            {/* Join Us */}
            <div className="contact-box">
              <h3>Join Us</h3>
              <form className="join-form">
                <input type="text" placeholder="Name" required />
                <div className="form-row">
                  <input type="email" placeholder="Email" required />
                  <input type="text" placeholder="Phone Number" required />
                </div>

                <p className="form-label">What is it that you seek.. at Pranisha?</p>
                <div className="form-options">
                  <label><input type="radio" name="role" value="Copy Writer" /> Content Writer</label>
                  <label><input type="radio" name="role" value="Graphic Designer" /> Graphic Designer</label>
                  <label><input type="radio" name="role" value="Web Developer" /> Web Developer</label>
                </div>

                <div className="upload-box">
                  <label htmlFor="resumeUpload" className="upload-btn">
                    <FontAwesomeIcon icon={faUpload} /> Upload Your Resume (PDF, DOC, DOCX)
                  </label>
                  <input id="resumeUpload" type="file" accept=".pdf,.doc,.docx" hidden />
                </div>

                <textarea placeholder="Tell us a bit about yourself" required></textarea>
                <button type="submit" className="btn-apply">Apply</button>
              </form>
            </div>

            {/* Get in Touch */}
            <div className="contact-box">
              <h3>Get in Touch</h3>
              <form className="touch-form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Phone" required />

                <p className="form-label">Services</p>
                <div className="form-options">
                  <label><input type="checkbox" /> Branding</label>
                  <label><input type="checkbox" /> Website</label>
                  <label><input type="checkbox" /> UI/UX</label>
                  <label><input type="checkbox" /> Others</label>
                </div>

                <textarea placeholder="Message" required></textarea>
                <button type="submit" className="btn-submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className='contact-info'>
          <h3>Hyderabad</h3>
          <ul>
            <li>
              1st Floor, Sri Sri Dwarkamai, Gokul plots Venkata Ramana Colony Kukatpally,<br/> Hyderabad, Telangana 500085
            </li>
            <li>
               info@pranisha.com
            </li>
            <li>
               tel:+919963326393
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutWithContact;
