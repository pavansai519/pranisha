import React from 'react';
import Header from './HomeOne/Header.jsx';
import Footer from './HomeOne/Footer.jsx';
import PageBanner from './PageBanner.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
import { faPhone, faEnvelope, faLocationDot, faUpload } from '@fortawesome/free-solid-svg-icons';
 
function AboutWithContact() {
  return (
    <>
     <Header/>
      <PageBanner title="Carrer" breadcrumb="Career" />
      {/* Contact Section */}
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
                  <label>
                    <input type="radio" name="role" value="Copy Writer" /> Content Writer
                  </label>
                  <label>
                    <input type="radio" name="role" value="Graphic Designer" /> Graphic Designer
                  </label>
                  <label>
                    <input type="radio" name="role" value="Web Developer" /> Web Developer
                  </label>
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
          </div>
        </div>
      </section>
 
      <Footer />
    </>
  );
}
 
export default AboutWithContact;
 
 