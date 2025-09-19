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
        particleText={`Lead\nGeneration`} 
        heading=" "
        subheading="Targeted Lead Generation to Fuel Your Business Growth"
        description="We craft data-driven lead generation strategies that attract, engage, and convert high-quality prospects to help scale your business efficiently."
        buttonText="Get Free Consultation"
       background="/background.png"
        color="#ffffff"
        fontSize={140}
/>

            {/* SEO Services Section - Styled like the reference image */}
            <section className="seo-services-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">Ad Campaigns</span>
                        <h2>Google Ads</h2>
                        <hr/>
                        <p>We offer a comprehensive range of Google Ads services to help your business reach its target audience and achieve its marketing goals. Our services include search ads, display ads, shopping ads, YouTube ads, app promotion, and local ads, each designed to drive targeted traffic to your website and generate leads or sales.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Search Ads</h4>
                                <hr/>
                                <p> Our search ads services are designed to help you reach potential customers who are actively searching for products or services related to your business. We create highly targeted ad campaigns based on keyword research and audience targeting to ensure that your ads are seen by the right people at the right time.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Display Ads</h4>
                                <hr/>
                                <p>Display ads are a highly effective way to raise brand awareness and drive traffic to your website. Our display ads services include creating eye-catching and effective display ads, targeting the right audience, and optimizing your campaigns for maximum ROI.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Shopping Ads</h4>
                                <hr/>
                                <p>Shopping ads are a great way to promote your products and services to potential customers who are actively searching for them. Our shopping ads services include creating product feeds, optimizing your campaigns for maximum visibility, and tracking your performance to ensure that you are generating high-quality traffic and leads.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>YouTube Ads</h4>
                                <hr/>
                                <p>With over 2 billion monthly active users, YouTube is an excellent platform for promoting your business and reaching a highly engaged audience. Our YouTube ads services include creating video ads, targeting the right audience, and optimizing your campaigns for maximum ROI.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>App Promotion   </h4>
                                <hr/>
                                <p>Our app promotion services are designed to help you promote your mobile app and increase downloads and installs. We create highly targeted campaigns and use the latest ad formats to ensure that your app is seen by the right people.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Local Ads</h4>
                                <hr/>
                                <p>If you have a local business, our local ads services can help you reach potential customers in your area. We create highly targeted campaigns based on location targeting and other factors to ensure that your ads are seen by the right people in your area.</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>

            <section className="seo-services-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">Ad Campaigns</span>
                        <h2>Social Media Marketing</h2>
                        <hr/>
                        <p>We offer a comprehensive range of social media marketing services to help your business reach its target audience and achieve its marketing goals. Our services include Facebook Ads, Twitter Ads, Instagram Ads, and LinkedIn Ads, each designed to drive targeted traffic to your website and generate leads or sales.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Facebook Ads</h4>
                                <hr/>
                                <p> With over 2.7 billion monthly active users, Facebook is one of the most popular social media platforms. Our Facebook Ads services include creating highly targeted ad campaigns, managing your ad account, and analyzing your ad performance to ensure that you are reaching your target audience and generating high-quality leads.</p>
                           </div>
                      </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Twitter Ads</h4>
                                <hr/>
                                <p>Twitter is a fast-paced platform that’s ideal for real-time engagement and promoting your brand’s message. Our Twitter Ads services include creating highly engaging ad campaigns, managing your ad account, and leveraging Twitter’s unique features to drive traffic and leads.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Instagram Ads</h4>
                                <hr/>
                                <p>With over 1 billion monthly active users, Instagram is a highly visual platform that’s ideal for promoting your brand’s message and products. Our Instagram Ads services include creating eye-catching ad campaigns, managing your ad account, and leveraging Instagram’s unique features to drive traffic and leads.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>LinkedIn Ads</h4>
                                <hr/>
                                <p>LinkedIn is a professional networking platform that’s ideal for B2B businesses. Our LinkedIn Ads services include creating highly targeted ad campaigns, managing your ad account, and engaging with your network to build thought leadership and drive conversions.</p>
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
