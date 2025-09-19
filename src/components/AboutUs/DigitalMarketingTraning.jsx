import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Clients from '../HomeOne/Clients.jsx';
import { Link } from 'react-router-dom';


function AboutUs() {

    return (
        <>
        <Header />
            <PageTitle
                title="Digital Marketing Traning"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/about-us', title: 'About us' },
                ]}
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
                                  <figure className="image wow fadeIn"><img src="" alt=""/></figure>
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
            
            <section className="industries-section style-two">
                <div className="auto-container">
                    <div className="sec-title text-center light">
                        <span className="sub-title">WE OFFER BEST IT SERVICES</span>
                        <h2>Industries Verticals We Work For</h2>
                    </div>
                    <div className="row justify-content-center">
                      {[
                        { icon: "flaticon-business-011-dollar", title: "Banking" },
                        { icon: "flaticon-business-049-presentation", title: "Healthcare" },
                        { icon: "flaticon-business-061-meeting", title: "Education" },
                        { icon: "flaticon-business-030-settings", title: "Manufacturing" },
                        { icon: "flaticon-business-054-graph", title: "eCommerce" },
                        { icon: "flaticon-business-020-hierarchy", title: "Food & Beverages" }
                      ].map((item, index) => (
                        <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" key={index}>
                          <div className="inner-box">
                            <i className={`icon ${item.icon}`}></i>
                            <h6 className="title"><Link to="/service-details">{item.title}</Link></h6>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
            </section>
            <Clients />
            <Footer />
            <BackToTop />
        </>
    );
}

export default AboutUs;