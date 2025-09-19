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
        particleText="Shopify"
        heading=" "
        subheading="Tailored Shopify Solutions for Your Online Store Success"
        description="We design and develop stunning, conversion-focused Shopify stores that offer seamless user experiences and help grow your eCommerce business."
        buttonText="Get Free Consultation"
       background="/background.png"
        color="#ffffff"
        fontSize={140}
/>

            {/* SEO Services Section - Styled like the reference image */}
            <section className="seo-services-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>Shopify</h2>
                        <hr/>
                        <p>Welcome to our Shopify website service page! As a team of experienced designers and developers, we specialize in creating custom Shopify websites that are tailored to meet your business needs.

                         Shopify is a popular e-commerce platform that powers over 1 million online stores. With its user-friendly interface and powerful features, Shopify allows us to create beautiful, responsive websites that are easy to manage and update.

                        Our Shopify website service includes:</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Influencer Identification</h4>
                                <hr/>
                                <p>
                                Our team will work with you to identify the right influencers for your campaign based on your target audience, campaign goals, and budget. We will use our experience and expertise to help you find influencers who are aligned with your brand and who have an engaged and active following.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Custom Design</h4>
                                <hr/>
                                <p>We’ll work closely with you to understand your business requirements and create a custom design that reflects your brand’s identity. Our team of designers will ensure that your website is visually appealing, easy to navigate, and optimized for conversions.</p>
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
                                <p>Our team of expert developers will build your website using the latest Shopify technologies and frameworks. We’ll ensure that your website is fast, secure, and optimized for search engines. We’ll also integrate any custom features or functionality that your business requires.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>eCommerce Solutions</h4>
                                <hr/>
                                <p>Shopify is a powerful e-commerce platform that allows us to create custom online stores with ease. We’ll work with you to create a user-friendly shopping handle everything from security updates to content changes, so you can focus on your business. We’ll also provide training and support to ensure that you’re comfortable with managing and updating your Shopify store.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>App Integration</h4>
                                <hr/>
                                <p>Shopify has a wide range of apps and plugins that can help you enhance the functionality of your website. We’ll work with you to identify the apps that are best suited for your business and integrate them seamlessly into your website.</p>
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
