import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import Tab from './Tab.jsx'
import AboutMen from "../../assets/images/home/about.png"; 
import PageBanner from '../PageBanner.jsx';



function AboutUs() {

    return (
        <>
        <Header />

      <PageBanner title="About Us" breadcrumb="About" />

            <section className="about-section-six">
                <div className="auto-container">
                  <div className="row">
                      <div className="content-column col-xl-6 col-lg-7 order-2 wow fadeInRight"
                          data-wow-delay="600ms">
                          <div className="inner-column">
                              <div className="sec-title">
                                  <span className="sub-title">About Us</span>
                                  <h2>We do what we love & <br/>We love what we do.</h2>
                                  <div className="text">Pranisha means adding ‘love to life’. At Pranisha Technologies, 
                                    we firmly believe in adding a strategy to your brand and getting the brand to life. 
                                    We are a 360-degree digital marketing company and are poised to serve our clients’ marketing and communication aspirations. 
                                    <br/><br/>When we go “beyond” a mile to fulfill our client’s needs, and finally hear a “Yikes” from them. Our ultimate aim is that! We actively pursue data-driven solutions by providing customized solutions to ignite your brand.</div>
                              </div>
      
                             
                          </div>
                      </div>
      
                      <div className="image-column col-xl-6 col-lg-5">
                          <div className="inner-column wow fadeInLeft">
                              <div className="image-box">
                                  <img className="image wow fadeIn" src={AboutMen} alt=""/>
                                  {/* <div className="completed-projects">
                                      <strong>870+</strong>
                                      <div className="text">PROJECT DONE</div>
                                  </div> */}
                                  <div className="experience bounce-y">
                                      <strong>10</strong>
                                      <div className="text">Years of <br/>Experience</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            </section>

            
            <Tab/>
           
            <Footer />
            <BackToTop />
        </>
    );
}

export default AboutUs;