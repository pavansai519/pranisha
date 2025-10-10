import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer.jsx";
import PageBanner from "./PageBanner.jsx";
 
export default function Policy() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
 
  return (
    <>
      <Header />
      <PageBanner title="Privacy Policy" />
 
      <section className="terms-section">
        <div className="container">
          <h2 data-aos="fade-up">Privacy Policy</h2>
          {/* <p className="update-date" data-aos="fade-up">
            Last Updated: October 2025
          </p> */}
 
          <div className="terms-content" data-aos="fade-up">
            <p className="points">
              At Pranisha Technologies, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the data you share with us through our website, services, and digital platforms.
            </p>
 
            <h3>1. Information We Collect</h3>
            <p>We may collect the following types of information from you:</p>
            <ul>
              <li className="points"> ∘ Personal Information: Name, email address, phone number, and company name when you contact us or fill out forms on our website.</li>
              <li className="points"> ∘ Business Information: Details related to your company, project requirements, or services you inquire about.</li>
              <li className="points"> ∘ Usage Data: Information about how you use our website, such as your IP address, browser type, and pages visited.</li>
              <li className="points"> ∘ Cookies: Small files stored on your device to improve your browsing experience and website performance.</li>
            </ul>
 
            <h3>2. How We Use Your Information</h3>
            <p className="points">We use your information to:</p>
            <ul>
              <li className="points"> ∘ Provide and manage our digital marketing, IT, PR & media, and event management services.</li>
              <li className="points"> ∘ Communicate with you regarding your inquiries, projects, and service updates.</li>
              <li className="points"> ∘ Improve our website, content, and customer experience.</li>
              <li className="points"> ∘ Send promotional materials, newsletters, or service updates (only if you have opted in).</li>
              <li className="points"> ∘ Comply with legal obligations and protect our rights.</li>
            </ul>
 
            <h3>3. Sharing Your Information</h3>
            <p className="points">
              We do not sell, rent, or trade your personal data. However, we may share it with trusted service providers who assist us in operating our business (e.g., hosting providers, analytics tools, or payment processors), or with legal authorities if required by law. All third parties are bound by confidentiality agreements and comply with data protection standards.
            </p>
 
            <h3>4. Data Security</h3>
            <p className="points">
              We implement appropriate technical and organizational measures to secure your data from unauthorized access, alteration, or disclosure. While we strive to protect your information, no method of transmission over the Internet is 100% secure.
            </p>
 
            <h3>5. Your Rights</h3>
            <p className="points">You have the right to:</p>
            <ul>
              <li className="points"> ∘ Access, update, or correct your personal information.</li>
              <li className="points"> ∘ Request deletion of your data (subject to legal or contractual limitations).</li>
              <li className="points"> ∘ Opt out of receiving marketing communications at any time.</li>
            </ul>
            <p className="points">
              To exercise your rights, please contact us at <a href="mailto:info@pranishaa.com">info@pranishaa.com</a>.
            </p>
 
            <h3>6. Cookies and Tracking Technologies</h3>
            <p className="points">
              Our website uses cookies to enhance user experience, analyze site traffic, and personalize content. You can modify your browser settings to disable cookies if you prefer.
            </p>
 
            <h3>7. Third-Party Links</h3>
            <p className="points">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices or content. We encourage you to review the privacy policies of any external sites you visit.
            </p>
 
            <h3>8. Updates to This Policy</h3>
            <p className="points">
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Last Updated" date.
            </p>
 
            <h3>9. Contact Us</h3>
            <p className="points">
              If you have any questions or concerns about this Privacy Policy or your data, please contact us at:
              <br />
              Pranisha Technologies
              <br />
              📧 Email: <a href="mailto:info@pranishaa.com">info@pranishaa.com</a>
              <br />
              🌐 Website:{" "}
              <a href="https://pranishaa.com" target="_blank" rel="noreferrer">
                https://pranishaa.com
              </a>
              <br />
              📍 Location: Kukatpally, Hyderabad, Telangana
            </p>
          </div>
        </div>
      </section>
 
      <Footer />
    </>
  );
}
 
 