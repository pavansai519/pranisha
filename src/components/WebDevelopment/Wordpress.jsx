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
        particleText="Wordpress"
        heading=" "
        subheading="Custom WordPress Solutions for Powerful Web Presence"
        description="We design and develop responsive, SEO-friendly WordPress websites that are easy to manage, visually appealing, and tailored to your brand's needs."
        buttonText="Get Free Consultation"
       background="/background.png"
        color="#ffffff"
        fontSize={140}
/>

            {/* SEO Services Section - Styled like the reference image */}
            <section className="seo-services-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">Web Designing</span>
                        <h2>WordPress Website</h2>
                        <hr/>
                        <p>WordPress is a popular content management system that powers over 40% of all websites on the internet. With its user-friendly interface and flexible functionality, WordPress allows us to create beautiful, responsive websites that are easy to manage and update.<br/>

                          Our WordPress website designing service includes:</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Custom Design</h4>
                                <hr/>
                                <p>
                                We’ll work closely with you to understand your business requirements and create a custom design that reflects your brand’s identity. Our team of designers will ensure that your website is visually appealing, easy to navigate, and optimized for conversions.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Responsive Design</h4>
                                <hr/>
                                <p>We’ll design your website to be fully responsive, ensuring that it looks great and functions seamlessly on all devices, including desktops, laptops, tablets, and smartphones. This will help you reach a wider audience and improve user experience.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Custom Development</h4>
                                <hr/>
                                <p>Our team of expert developers will build your website using the latest WordPress technologies and frameworks. We’ll ensure that your website is fast, secure, and optimized for search engines. We’ll also integrate any custom features or functionality that your business requires.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>eCommerce Solutions</h4>
                                <hr/>
                                <p>If you’re looking to sell products or services online, we can help you create a custom e-commerce website using WordPress. We’ll work with you to create a user-friendly shopping experience that encourages conversions and drives sales.</p>
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
