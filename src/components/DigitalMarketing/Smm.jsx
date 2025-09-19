import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import { Link } from 'react-router-dom';
import ParticleBanner from '../HomeOne/Pranisha.jsx';


function Smm() {
    return (
        <>
            <Header />
             <ParticleBanner
        particleText="Smm"
        heading="Who We Are"
        subheading="Powerful Social Media Marketing to Elevate Your Brand"
        description="We create engaging social media campaigns that build brand awareness, foster community, and drive meaningful interactions across all major platforms."
        buttonText="Get Free Consultation"
        background="/background.png"
        color="#ffffff"
        fontSize={140}
/>

            

            {/* SEO Services Section */}
            <section className="seo-services-section" >
    <div className="auto-container">
        <div className="sec-title">
            <span className="sub-title">Our SMM Services</span>
            <h2>Enhance Your Brand with Social Media Marketing</h2>
            <hr/>
            <p>We provide expert social media marketing (SMM) services to help businesses build a strong online presence, engage with their audience, and drive meaningful results. Our services include platform-specific strategies for Facebook, Instagram, LinkedIn, Twitter, and YouTube, ensuring your brand stands out in the digital space.</p>
        </div>

        <div className="row">
            <div className="col-md-6">
                <div className="seo-service-box">
                    <h4>Facebook Marketing</h4>
                    <hr/>
                    <p>With over 2 billion active users, Facebook is a must for businesses. Our Facebook SMM services include business page management, targeted advertising, content creation, and performance analytics to maximize engagement and conversions.</p>
                </div>
            </div>

            <div className="col-md-6">
                <div className="seo-service-box">
                    <h4>Instagram Marketing</h4>
                    <hr/>
                    <p>Instagram is a visual powerhouse, perfect for brand storytelling. We manage business profiles, run influencer collaborations, create stunning content, and analyze engagement metrics to drive growth.</p>
                </div>
            </div>

            <div className="col-md-6">
                <div className="seo-service-box">
                    <h4>LinkedIn Marketing</h4>
                    <hr/>
                    <p>As the world’s largest professional network, LinkedIn is ideal for B2B marketing. Our services include business profile optimization, targeted ads, thought leadership content creation, and networking strategies to expand your influence.</p>
                </div>
            </div>

            <div className="col-md-6">
                <div className="seo-service-box">
                    <h4>Twitter Marketing</h4>
                    <hr/>
                    <p>Twitter’s fast-paced environment requires strategic engagement. We create and manage business profiles, run ad campaigns, interact with your audience in real-time, and optimize content for maximum visibility.</p>
                </div>
            </div>

            <div className="col-md-6">
                <div className="seo-service-box">
                    <h4>YouTube Marketing</h4>
                    <hr/>
                    <p>With over 2 billion monthly users, YouTube is a key platform for video marketing. We manage YouTube channels, optimize videos for search, create compelling content, and run targeted ads to increase views and engagement.</p>
                </div>
            </div>
        </div>
    </div>
</section>

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

export default Smm;
