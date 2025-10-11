import React, { useEffect, useState } from 'react';
import './Services.css';
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer2.jsx";
import PageBanner from "./PageBanner.jsx";

const DigitalMarketing = () => {
  const [activeSection, setActiveSection] = useState('WordPress Website');
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [openSection, setOpenSection] = useState('WordPress Website');

    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      };
  
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
  
    // Switch whole section
    const scrollToSection = (sectionId) => {
      setHighlightedItem(null);
      setOpenSection(sectionId);
      setActiveSection(sectionId);
    };

  return (
    <>
      <Header />
      <PageBanner title="Web Development" breadcrumb="Web Development" />

      <div className="branding-page">
        <div className="branding-container">
          <aside className="services-sidebar">
            <h3>Our Services</h3>
            <nav className="services-nav">
              <ul>
                {/* SEO */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'WordPress Website' ? 'active' : ''}`}
                    onClick={() => scrollToSection('WordPress Website')}
                  >
                    <i className="fas fa-search"></i>
                    <span>WordPress Website</span>
                  </button>
                  {openSection === 'WordPress Website' && (
                    <ul className="sub-nav">
                      <li>Custom Design</li>
                      <li>Responsive Design</li>
                      <li>Custom Development</li>
                      <li>eCommerce Solutions</li>
                    </ul>
                  )}
                </li>

                {/* PPC */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'ReactJS Development' ? 'active' : ''}`}
                    onClick={() => scrollToSection('ReactJS Development')}
                  >
                    <i className="fas fa-ad"></i>
                    <span>ReactJS Development</span>
                  </button>
                  {openSection === 'ReactJS Development' && (
                    <ul className="sub-nav">
                      <li>ReactJS Web App Development</li>
                      <li>ReactJS UI/UX Design</li>
                      <li>ReactJS Plugin & Component Development</li>
                      <li>ReactJS API Integration</li>
                      {/* <li>ReactJS eCommerce Development</li> */}
                    </ul>
                  )}
                </li>

                {/* Social Media Marketing */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'Mobile App Development' ? 'active' : ''}`}
                    onClick={() => scrollToSection('Mobile App Development')}
                  >
                    <i className="fas fa-share-alt"></i>
                    <span>Mobile App Development</span>
                  </button>
                  {openSection === 'Mobile App Development' && (
                    <ul className="sub-nav">
                      <li>Native App Development</li>
                      <li>Cross-Platform App Development</li>
                      {/* <li>Programming Languages</li> */}
                      <li>Development Frameworks</li>
                      {/* <li>IDEs & Tools</li> */}
                      <li>Back-end Development</li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </aside>

          <main className="services-content">
            {/* SEO Section */}
              {openSection === 'WordPress Website' && (

            <section id="WordPress Website" className="content-section">
              <div className="section-header">
                <h2>WordPress Website</h2>
                <p>WordPress powers over 40% of all websites. Our WordPress services include creating beautiful, responsive websites that are easy to manage.</p>
              </div>
              <div className="content-grid">
                <div id="keyword" className={`content-item ${highlightedItem === 'keyword' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-key"></i></div>
                  <h3>Custom Design</h3>
                  <p>We create a custom design reflecting your brand identity and optimized for conversions.</p>
                </div>
                <div id="onpage" className={`content-item ${highlightedItem === 'onpage' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-file-alt"></i></div>
                  <h3>Responsive Design</h3>
                  <p>Your website will be fully responsive, looking perfect on any device.</p>
                </div>
                <div id="offpage" className={`content-item ${highlightedItem === 'offpage' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-link"></i></div>
                  <h3>Custom Development</h3>
                  <p>We build fast, secure websites using the latest WordPress technologies and frameworks.</p>
                </div>
                <div id="analytics" className={`content-item ${highlightedItem === 'analytics' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-chart-line"></i></div>
                  <h3>eCommerce Solutions</h3>
                  <p>Create user-friendly eCommerce websites to increase sales and conversions.</p>
                </div>
              </div>
            </section>
              )}
            {/* PPC Section */}
             {openSection === 'ReactJS Development' && (

            <section id="ReactJS Development" className="content-section">
              <div className="section-header">
                <h2>ReactJS Development</h2>
                <p>Build fast, scalable, and interactive web applications using ReactJS with reusable components, SPAs, and API integrations.</p>
              </div>
              <div className="content-grid">
                <div id="campaign" className={`content-item ${highlightedItem === 'campaign' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-bullseye"></i></div>
                  <h3>ReactJS Web App Development</h3>
                  <p>Develop SPAs and complex frontends ensuring smooth user experiences and fast load times.</p>
                </div>
                <div id="adcreation" className={`content-item ${highlightedItem === 'adcreation' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-ad"></i></div>
                  <h3>ReactJS UI/UX Design</h3>
                  <p>Create visually appealing, responsive, and interactive UI/UX components using modern frameworks.</p>
                </div>
                <div id="monitoring" className={`content-item ${highlightedItem === 'monitoring' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-eye"></i></div>
                  <h3>ReactJS Plugin & Component Development</h3>
                  <p>Build reusable and scalable React components and plugins tailored to your needs.</p>
                </div>
                <div id="optimization" className={`content-item ${highlightedItem === 'optimization' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-cogs"></i></div>
                  <h3>ReactJS API Integration</h3>
                  <p>Seamlessly integrate RESTful APIs, GraphQL, and third-party services like Stripe, Firebase, and AWS.</p>
                </div>
                {/* <div id="monitoring" className={`content-item ${highlightedItem === 'monitoring' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-eye"></i></div>
                  <h3>ReactJS eCommerce Development</h3>
                  <p>Create dynamic product pages, optimized checkout flows, and smooth shopping experiences.</p>
                </div> */}
              </div>
            </section>
             )}
            {/* Social Media Section */}
           {openSection === 'Mobile App Development' && (

            <section id="Mobile App Development" className="content-section">
              <div className="section-header">
                <h2>Mobile App Development</h2>
                <p>We develop innovative, user-friendly mobile applications using native, hybrid, and cross-platform technologies.</p>
              </div>
              <div className="content-grid">
                <div id="strategy" className={`content-item ${highlightedItem === 'strategy' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-lightbulb"></i></div>
                  <h3>Native App Development</h3>
                  <p>Develop apps optimized for iOS and Android using Swift, Objective-C, Java, and Kotlin.</p>
                </div>
                <div id="content" className={`content-item ${highlightedItem === 'content' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-photo-video"></i></div>
                  <h3>Cross-Platform App Development</h3>
                  <p>Create high-quality apps for multiple platforms using React Native, Flutter, or Xamarin.</p>
                </div>
                {/* <div id="engagement" className={`content-item ${highlightedItem === 'engagement' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-comments"></i></div>
                  <h3>Programming Languages</h3>
                  <p>We use JavaScript, Swift, Kotlin, Java, HTML, CSS, and more for mobile app development.</p>
                </div> */}
                <div id="ads" className={`content-item ${highlightedItem === 'ads' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-bullhorn"></i></div>
                  <h3>Development Frameworks</h3>
                  <p>Creating targeted ad campaigns for platforms like Facebook, Instagram, and LinkedIn. Utilize frameworks like React Native, Flutter, Xamarin, and Ionic for efficient app development.</p>
                </div>
                  {/* <div id="engagement" className={`content-item ${highlightedItem === 'engagement' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-comments"></i></div>
                  <h3>IDEs & Tools</h3>
                  <p>We use Xcode, Android Studio, Visual Studio, and Eclipse for robust app development.</p>
                </div> */}
                <div id="ads" className={`content-item ${highlightedItem === 'ads' ? 'highlighted' : ''}`}>
                  <div className="item-icon"><i className="fas fa-bullhorn"></i></div>
                  <h3>Back-end Development</h3>
                  <p>Support apps using AWS, Azure, Google Cloud, PHP, Node.js, and other technologies.</p>
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
