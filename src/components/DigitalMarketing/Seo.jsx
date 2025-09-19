import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
// import HighlightsSection from '../HighlightsSection.jsx';
import ParticleBanner from '../HomeOne/Pranisha.jsx';


function Seo() {
    return (
        <>
            <Header />
             <ParticleBanner
        particleText="Seo"
        heading=" "
        subheading="Result-Driven SEO Services to Boost Online Visibility"
        description="We optimize your website with proven SEO strategies to improve rankings, increase organic traffic, and drive sustainable business growth."
        buttonText="Get Free Consultation"
        background="/background.png"
        color="#ffffff"
        fontSize={140}
/>
           
            {/* SEO Services Section */}
            <section className="seo-services-section">
    <div className="auto-container">
        <div className="sec-title">
            <span className="sub-title">Our SEO Services</span>
            <h2>Optimize Your Website for Better Rankings</h2>
            <hr/>
            <p>We offer a comprehensive range of SEO services to enhance your website’s visibility, improve search rankings, and drive organic traffic. Our services include keyword research, on-page optimization, off-page strategies, local SEO, and analytics reporting—each designed to boost your online presence and maximize results.</p>
        </div>

        <div className="row">
            <div className="col-md-6">
                <div className="seo-service-box">
                    <h4>Keyword Research</h4>
                    <hr/>
                    <p>Our team conducts in-depth keyword research to identify high-traffic and relevant keywords that help your website rank higher in search engine results pages (SERPs) and attract the right audience.</p>
                </div>
            </div>

            <div className="col-md-6">
                <div className="seo-service-box">
                    <h4>On-Page SEO</h4>
                    <hr/>
                    <p>We optimize your website’s content, meta tags, headers, and images to improve its relevance and authority, ensuring that it meets search engine best practices for higher rankings.</p>
                </div>
            </div>

            <div className="col-md-6">
                <div className="seo-service-box">
                    <h4>Off-Page SEO</h4>
                    <hr/>
                    <p>Our off-page SEO strategies include building high-quality backlinks, engaging in social media marketing, and submitting your website to relevant directories to boost domain authority.</p>
                </div>
            </div>

            <div className="col-md-6">
                <div className="seo-service-box">
                    <h4>Local SEO</h4>
                    <hr/>
                    <p>For businesses with a physical location, we optimize your Google My Business profile and implement local SEO strategies to increase visibility in local search results and drive foot traffic.</p>
                </div>
            </div>

            <div className="col-md-6">
                <div className="seo-service-box">
                    <h4>Analytics and Reporting</h4>
                    <hr/>
                    <p>We provide detailed reports on search rankings, website traffic, and key performance metrics, helping you make data-driven decisions to continuously improve your SEO strategy.</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <HighlightsSection/> */}
            {/* Consultation Section */}
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
