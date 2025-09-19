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
        particleText="Magento"
        heading=" "
        subheading="Robust Magento Development for Scalable eCommerce Solutions"
        description="We create feature-rich, secure, and customizable Magento stores that deliver seamless shopping experiences and drive growth for your online business."
        buttonText="Get Free Consultation"
        background="/background.png"
        color="#ffffff"
        fontSize={140}
/>
            {/* SEO Services Section - Styled like the reference image */}
            <section className="seo-services-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>Achieve Ecommerce Goals Faster with our Magento Development Services</h2>
                        
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Custom Magento Development </h4>
                                <hr/>
                                <p>
                                With custom Magento development, businesses can craft a unique online shopping experience that resonates with customers.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Magento Store Development </h4>
                                <hr/>
                                <p>Craft high-performing online stores that provide exceptional shopping experiences with Magento store development.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Magento Theme Development</h4>
                                <hr/>
                                <p>With Magento theme development services, businesses can deliver a cohesive and engaging experience to customers.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Magento Extension Development</h4>
                                <hr/>
                                <p>Extend the default functionality of Magento eCommerce platforms with custom modules or plugin development.</p>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Magento Customization Services</h4>
                                <hr/>
                                <p>With Magento customization services, businesses can tailor their eCommerce stores to their unique requirements.</p>
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
