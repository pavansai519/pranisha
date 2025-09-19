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
        particleText="Hoarding"
        heading=" "
        subheading="Eye-Catching Hoarding Designs That Demand Attention"
        description="We design impactful hoardings that maximize visibility, convey your brand message clearly, and leave a lasting impression on your audience."
        buttonText="Get Free Consultation"
       background="/background.png"
        color="#ffffff"
        fontSize={140}
/>

            {/* SEO Services Section - Styled like the reference image */}
            <section className="seo-services-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>Hoarding Design Services</h2>
                        <hr/>
                        <p>We specialize in creating visually stunning and impactful hoarding design services that help businesses of all sizes make a lasting impression. Our team of experienced designers works closely with you to craft custom designs that capture the attention of potential customers while reflecting your brand’s identity and message. Whether you’re launching a new product, promoting a service, or building brand awareness, our hoarding designs deliver impactful results.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Why Choose Our Hoarding Design Services </h4>
                                <hr/>
                                <p>At the heart of our service is a commitment to understanding your unique business and target audience. This insight allows us to design hoardings that are not only aesthetically pleasing but also highly effective in achieving your marketing goals. Our team ensures that every design element resonates with your customers, creating a powerful visual experience that communicates your message.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Comprehensive Hoarding Design Solutions</h4>
                                <hr/>
                                <p>We offer an end-to-end solution for all your hoarding design needs. Whether you’re starting from scratch or refreshing an existing design, we have the expertise and resources to bring your vision to life. Our services include.</p>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Printing and Installation</h4>
                                <hr/>
                                <p>We use high-quality materials and advanced printing techniques to ensure your hoarding design stands out. Our team also provides seamless installation services, making sure your hoardings are professionally displayed and aligned with your branding.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Maintenance and Removal</h4>
                                <hr/>
                                <p>Keeping your hoardings in pristine condition is essential for maintaining their effectiveness. We offer ongoing maintenance services to ensure your hoardings remain vibrant and impactful. When it’s time for a change, we handle the removal process with care and efficiency.</p>
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
