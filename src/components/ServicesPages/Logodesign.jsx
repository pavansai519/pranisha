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
        particleText={'Logo \nDesign'}
        heading=" "
        subheading="Crafting Unique Logos That Define Your Brand Identity"
        description="Our expert designers create memorable, professional logos tailored to reflect your brand’s personality, values, and vision across all platforms."
        buttonText="Get Free Consultation"
       background="/background.png"
        color="#ffffff"
        fontSize={140}
/>
            {/* SEO Services Section - Styled like the reference image */}
            <section className="seo-services-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>Logo Design - Creative Logo</h2>
                        <hr/>
                        <p>We offer professional and creative logo design services to help your business establish a strong and memorable brand identity. Our team of experienced designers will work closely with you to understand your business, target audience, and design preferences, to create a logo that reflects your brand’s personality and values.</p>
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
                                <h4>Concept Development</h4>
                                <hr/>
                                <p>Our team of designers will brainstorm and develop multiple logo concepts, each with a unique style and design.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Design Refinement</h4>
                                <hr/>
                                <p>We work with you to refine the logo concepts based on your feedback and preferences, to develop a final logo design that perfectly reflects your brand’s identity.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Finalization</h4>
                                <hr/>
                                <p>We finalize the logo design, including the color scheme, typography, and other design elements, and provide you with the final logo files in various formats, including vector and high-resolution raster formats.</p>
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
