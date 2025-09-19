import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import ParticleBanner from '../HomeOne/Pranisha.jsx';


function Seo() {
    return (
        <>
            <Header/> 
        <ParticleBanner
        particleText="Influencer"
        heading=" "
        subheading="Strategic Influencer Marketing to Amplify Your Brand"
        description="We connect your brand with the right influencers to boost visibility, build trust, and drive engagement across social media platforms."
        buttonText="Get Free Consultation"
       background="/background.png"
        color="#ffffff"
        fontSize={140}
/>
            {/* SEO Services Section - Styled like the reference image */}
            <section className="seo-services-section" >
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">Ad Campaigns</span>
                        <h2>Influencer Marketing Services</h2>
                        <hr/>
                        <p>We offer a comprehensive range of Google Ads services to help your business reach its target audience and achieve its marketing goals. Our services include search ads, display ads, shopping ads, YouTube ads, app promotion, and local ads, each designed to drive targeted traffic to your website and generate leads or sales.</p>
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
                                <h4>Campaign Strategy</h4>
                                <hr/>
                                <p>We will work with you to develop an influencer marketing campaign strategy that aligns with your business goals and targets your audience effectively. We will help you choose the right type of campaign, set goals and metrics, and create a content plan that resonates with your target audience.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Influencer Outreach and Management</h4>
                                <hr/>
                                <p>Our team will handle all aspects of influencer outreach and management, from initial contact to negotiating contracts and managing content creation. We will ensure that all content meets your brand’s standards and that all posts are optimized for maximum reach and engagement.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Campaign Analysis and Reporting</h4>
                                <hr/>
                                <p>We will provide you with regular reports on your campaign’s performance, including reach, engagement, and conversions. We will use these metrics to optimize your campaign and ensure that you are getting the best possible ROI.</p>
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
