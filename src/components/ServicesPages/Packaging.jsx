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
        particleText="Packaging"
        heading=" "
        subheading="Innovative Packaging Designs That Capture Attention"
        description="We create custom packaging solutions that not only protect your product but also enhance its shelf appeal and strengthen brand recognition."
        buttonText="Get Free Consultation"
        background="/background.png"
        color="#ffffff"
        fontSize={140}
/>

            {/* SEO Services Section - Styled like the reference image */}
            <section className="seo-services-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>Packaging Design Services</h2>
                        <hr/>
                        <p>We understand the importance of effective packaging design as a critical part of building a strong brand. Our packaging design services are designed to help businesses create packaging that is both visually appealing and effective in communicating the brand’s message to the target audience. Our team of experienced designers works closely with clients to develop packaging designs that are both functional and aesthetically pleasing, ensuring that they stand out in the competitive market.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Discovery</h4>
                                <hr/>
                                <p>
                                We start by understanding your business, target audience, and design preferences, to develop a clear understanding of your brand.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Research</h4>
                                <hr/>
                                <p>We conduct thorough research on your target audience, competition, and industry trends to identify opportunities and challenges for packaging design.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Concept Development</h4>
                                <hr/>
                                <p>Based on our research and understanding of your brand, we develop multiple packaging design concepts that are unique and effective in communicating your brand’s message.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Design Refinement</h4>
                                <hr/>
                                <p>We work with you to refine the packaging design concepts based on your feedback and preferences, to develop a final packaging design that perfectly reflects your brand’s identity.</p>
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
