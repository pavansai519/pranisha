import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import ParticleBanner from '../HomeOne/Pranisha.jsx';


function Seo() {
    return (
        <>
            <Header />
            <ParticleBanner
                imagePath="/logo1.png"
        heading=" "
        subheading="Scalable Cloud Solutions for Seamless Digital Transformation"
        description="We offer secure and efficient cloud services that streamline operations, enhance flexibility, and support your business’s growth in the digital era."
        buttonText="Get Free Consultation"
        color="#ffffff"
        fontSize={140}
/>
            {/* SEO Services Section - Styled like the reference image */}
            <section className="seo-services-section">
                <div className="auto-container">
                    <div className="sec-title">
                       <h2>Accelerate Your Digital Evolution with Scalable Cloud Solutions</h2>
                       <hr/>
                       <p>We provide comprehensive cloud services designed to elevate and future-proof your business. Embracing a flexible and secure approach, we harness cutting-edge cloud platforms to align with your operational goals and growth strategies. Cloud computing stands as the backbone of modern IT infrastructure, enabling seamless access, high availability, and unparalleled scalability across all environments. As a transformative technology, the cloud is redefining how organizations innovate, collaborate, and deliver value—driving digital agility and resilience in an ever-evolving landscape.</p>
                        </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Cloud Integration</h4>
                               <hr/>
                               <p>Seamlessly connect your business systems through our secure cloud integration solutions. We streamline data flows and workflows, enabling real-time collaboration, scalability, and agility across platforms.</p>
                               </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>AI & Machine Learning</h4>
                                <hr/>
                                <p>Enhance decision-making and automate operations using our advanced AI and machine learning services. Our models learn from your data, uncover patterns, and drive smarter business outcomes.</p>
                                </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Data Analytics</h4>
                                <hr/>
                                <p>Unlock insights from your data with our robust analytics solutions. From dashboards to predictive analytics, we empower businesses to make data-driven decisions with confidence.</p>
                                 </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>DevOps & Automation</h4>
                                <hr/>
                                <p>Accelerate your development cycles with our DevOps and CI/CD automation services. We help you deliver faster, reduce deployment risks, and maintain high-quality standards in every release.</p>
                                 </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Cloud Security</h4>
                                <hr/>
                                <p>Protect your digital infrastructure with enterprise-grade cloud security services. From threat detection to compliance enforcement, we ensure your data and operations remain secure and resilient.</p>
                                 </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Migration Services</h4>
                                <hr/>
                                <p>Move your legacy systems to the cloud with minimal disruption. Our end-to-end migration strategy ensures data integrity, zero downtime, and optimized performance in your new environment.</p>
                                 </div>
                        </div>

                        
                        
                    </div>
                </div>
            </section>
            <section className="consultation-section">
               <div className="auto-container">
                     <div className="consultation-content">
                     <h5>We are here to answer your questions 24/7</h5>
                       <h2>Need A Consultation?</h2>
                         <p>
                           Our clients achieve their business goals. Contact us today to learn more about our services
                           and how we can build a strong online presence.
                         </p>
                         <a href="/contact" className="btn-consult">Contact Us →</a>
                  </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </>
    );
}

export default Seo;
