import React, { useEffect } from 'react';
import Header from "./HomeOne/Header.jsx";
import Footer from './HomeOne/Footer.jsx';
import './Services.css';

import PageBanner from './PageBanner.jsx';
 
function WebDevelopment() {
  useEffect(() => {
    const boxes = document.querySelectorAll('.wd-box');
 
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('wd-animate');
        } else {
          entry.target.classList.remove('wd-animate');
        }
      });
    }, { threshold: 0.1 });
 
    boxes.forEach(box => observer.observe(box));
    return () => observer.disconnect();
  }, []);
 
  return (
    <>
      <Header />
        <PageBanner title="Web Development" breadcrumb="Web Development" />
      {/* WordPress Section */}
      <section className="wd-section wd-wordpress">
        <div className="wd-container">
          <div className="wd-title-block">
            <span className="wd-subtitle">Web Designing</span>
            <h2 className="wd-main-title">WordPress Website</h2>
            <hr className="wd-separator"/>
            <p>
              WordPress powers over 40% of all websites. Our WordPress services include creating beautiful, responsive websites that are easy to manage.
            </p>
          </div>
 
          <div className="wd-row">
            <div className="wd-col">
              <div className="wd-box">
                <h4>Custom Design</h4>
                <hr/>
                <p>We create a custom design reflecting your brand identity and optimized for conversions.</p>
              </div>
            </div>
            <div className="wd-col">
              <div className="wd-box">
                <h4>Responsive Design</h4>
                <hr/>
                <p>Your website will be fully responsive, looking perfect on any device.</p>
              </div>
            </div>
            <div className="wd-col">
              <div className="wd-box">
                <h4>Custom Development</h4>
                <hr/>
                <p>We build fast, secure websites using the latest WordPress technologies and frameworks.</p>
              </div>
            </div>
            <div className="wd-col">
              <div className="wd-box">
                <h4>eCommerce Solutions</h4>
                <hr/>
                <p>Create user-friendly eCommerce websites to increase sales and conversions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* ReactJS Section */}
      <section className="wd-section wd-reactjs">
        <div className="wd-container">
          <div className="wd-title-block">
            <span className="wd-subtitle">Web Development</span>
            <h2 className="wd-main-title">ReactJS Development</h2>
            <hr className="wd-separator"/>
            <p>
              Build fast, scalable, and interactive web applications using ReactJS with reusable components, SPAs, and API integrations.
            </p>
          </div>
 
          <div className="wd-row">
            <div className="wd-col">
              <div className="wd-box">
                <h4>ReactJS Web App Development</h4>
                <hr/>
                <p>Develop SPAs and complex frontends ensuring smooth user experiences and fast load times.</p>
              </div>
            </div>
            <div className="wd-col">
              <div className="wd-box">
                <h4>ReactJS UI/UX Design</h4>
                <hr/>
                <p>Create visually appealing, responsive, and interactive UI/UX components using modern frameworks.</p>
              </div>
            </div>
            <div className="wd-col">
              <div className="wd-box">
                <h4>ReactJS Plugin & Component Development</h4>
                <hr/>
                <p>Build reusable and scalable React components and plugins tailored to your needs.</p>
              </div>
            </div>
            <div className="wd-col">
              <div className="wd-box">
                <h4>ReactJS API Integration</h4>
                <hr/>
                <p>Seamlessly integrate RESTful APIs, GraphQL, and third-party services like Stripe, Firebase, and AWS.</p>
              </div>
            </div>
            <div className="wd-col">
              <div className="wd-box">
                <h4>ReactJS eCommerce Development</h4>
                <hr/>
                <p>Create dynamic product pages, optimized checkout flows, and smooth shopping experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Mobile App Section */}
      <section className="wd-section wd-mobile-app">
        <div className="wd-container">
          <div className="wd-title-block">
            <span className="wd-subtitle">Web Development</span>
            <h2 className="wd-main-title">Mobile App Development</h2>
            <hr className="wd-separator"/>
            <p>
              We develop innovative, user-friendly mobile applications using native, hybrid, and cross-platform technologies.
            </p>
          </div>
 
          <div className="wd-row">
            <div className="wd-col">
              <div className="wd-box">
                <h4>Native App Development</h4>
                <hr/>
                <p>Develop apps optimized for iOS and Android using Swift, Objective-C, Java, and Kotlin.</p>
              </div>
            </div>
            <div className="wd-col">
              <div className="wd-box">
                <h4>Cross-Platform App Development</h4>
                <hr/>
                <p>Create high-quality apps for multiple platforms using React Native, Flutter, or Xamarin.</p>
              </div>
            </div>
            <div className="wd-col">
              <div className="wd-box">
                <h4>Programming Languages</h4>
                <hr/>
                <p>We use JavaScript, Swift, Kotlin, Java, HTML, CSS, and more for mobile app development.</p>
              </div>
            </div>
            <div className="wd-col">
              <div className="wd-box">
                <h4>Development Frameworks</h4>
                <hr/>
                <p>Utilize frameworks like React Native, Flutter, Xamarin, and Ionic for efficient app development.</p>
              </div>
            </div>
            <div className="wd-col">
              <div className="wd-box">
                <h4>IDEs & Tools</h4>
                <hr/>
                <p>We use Xcode, Android Studio, Visual Studio, and Eclipse for robust app development.</p>
              </div>
            </div>
            <div className="wd-col">
              <div className="wd-box">
                <h4>Back-end Development</h4>
                <hr/>
                <p>Support apps using AWS, Azure, Google Cloud, PHP, Node.js, and other technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Consultation Section */}
      {/* <section className="wd-section wd-consultation">
        <div className="wd-container">
          <div className="wd-consult-content">
            <h5>We are here to answer your questions 24/7</h5>
            <h2>Need A Consultation?</h2>
            <p>Contact us today to learn more about our services and how we can help your business grow online.</p>
            <a href="/contact" className="wd-btn-consult">Contact Us →</a>
          </div>
        </div>
      </section> */}
 
      <Footer />
    </>
  );
}
 
export default WebDevelopment;