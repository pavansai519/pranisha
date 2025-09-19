import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Clients from '../HomeOne/Clients.jsx';
import { Link } from 'react-router-dom';
import aboutus from '../../assets/images/resource/about-us.png'
import Tab from './Tab.jsx'
import MenImg from '../../assets/images/resource/about-us.png';
import ParticleBanner from '../HomeOne/Pranisha.jsx';



function AboutUs() {

    return (
        <>
        <Header />
            <ParticleBanner
        particleText="About Us"
        heading=""
        subheading="Empowering Brands with Digital Innovation and Strategy"
        description="We are a results-driven digital agency dedicated to transforming ideas into impactful online experiences through expert strategy, creative design, and technology."
        buttonText="Get Free Consultation"
       background="/background.png"
        color="#ffffff"
        fontSize={140}
/>
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
      
                              {/* <div className="content-box">
                                  <div className="about-block-four">
                                      <i className="icon flaticon-business-018-startup"></i>
                                      <h3 className="title">Our Vision</h3><br/>
                                      <ul className="list-style-three">
                                        <li><b>To Deliver Optimum Insights</b> <p>Strategies, and conversions by churning out fresh marketing ideas.</p></li>
                                        <li><b>To not only innovate</b> <p>but also outperform competitors in every way possible.</p></li>
                                        <li><b>To bring commercial</b> <p>success for our valuable customers.</p></li>
                                      </ul>
                                  </div>
      
                                  <div className="about-block-four">
                                      <i className="icon flaticon-business-027-world"></i>
                                      <h5 className="title">Our Mission</h5>
                                      <div className="text">Sed non odio non elit porttitor tincidunt. Donec fermentum, elit sit amet</div>
                                  </div>
      
                                  <ul className="list-style-three">
                                      <li>Sed non odio non elit porttitor tincidunt donec</li>
                                      <li>Sed non odio non elit porttitor tinc</li>
                                  </ul>
                              </div> */}
      
                              {/* <div className="btm-box">
                                  <Link to="/about" className="theme-btn btn-style-three"><span className="btn-title">Discover more</span></Link>
                              </div> */}
                          </div>
                      </div>
      
                      <div className="image-column col-xl-6 col-lg-5">
                          <div className="inner-column wow fadeInLeft">
                              <div className="image-box">
                                  <figure className="image wow fadeIn"><img src={MenImg} alt=""/></figure>
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

            <section className="work-process-section">
             <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Work Process</span>
                    <h2>Our Work Process</h2>
                    <p>We execute industry level digital service concepts everyday and we enjoy being this thorough and precise.</p>
                </div>
                <div className="process-steps">
                    <div className="step">
                        <div className="circle blue">01</div>
                        <h3>Organize Campaign</h3>
                        <p>Tailored SEO campaigns with target keyword identification, content optimization, quality backlink building, and more, to improve search engine rankings and drive traffic.</p>
                    </div>
                    <div className="step">
                        <div className="circle green">02</div>
                        <h3>Monitoring Analysis</h3>
                        <p>Monitor & Analyze tracked data to gain insights into the effectiveness of SEO campaigns by identifying patterns, trends, and areas of improvement for better results.</p>
                    </div>
                    <div className="step">
                        <div className="circle teal">03</div>
                        <h3>Track Progress</h3>
                        <p>Track ProgressMonitoring website traffic, keyword rankings, and conversion rates is crucial to track the progress of an SEO campaign. This helps in identifying areas that need improvement.</p>
                    </div>
                    <div className="step">
                        <div className="circle pink">04</div>
                        <h3>Detailed Reporting</h3>
                        <p>We prioritize customer service by offering regular communication, detailed reporting, and proactive problem-solving to ensure client satisfaction with our services.</p>
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