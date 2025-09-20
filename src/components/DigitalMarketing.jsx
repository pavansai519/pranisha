import React, { useEffect } from 'react';
import Header from "./HomeOne/Header.jsx";
import Footer from './HomeOne/Footer.jsx';
import './Services.css';

import PageBanner from './PageBanner.jsx';
 
function DigitalMarketing() {
  useEffect(() => {
    const cells = document.querySelectorAll('.digital-box');
 
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1 });
 
    cells.forEach(cell => observer.observe(cell));
 
    return () => observer.disconnect();
  }, []);
    return (
        <>
            <Header />
        <PageBanner title="DigitalMarketing" breadcrumb="DigitalMarketing" />

            {/* Google Ads Section */}
            <section className="digital-google-ads">
                <div className="digital-container">
                    <div className="digital-title">
                        <span className="digital-subtitle">Ad Campaigns</span>
                        <h2>Google Ads</h2>
                        <hr />
                        <p>We offer a comprehensive range of Google Ads services to help your business reach its target audience and achieve its marketing goals...</p>
                    </div>
 
                    <div className="digital-row">
                        <div className="digital-col">
                            <div className="digital-box">
                                <h4>Search Ads</h4>
                                <hr />
                                <p>Our search ads services are designed to help you reach potential customers who are actively searching for products...</p>
                            </div>
                        </div>
                        <div className="digital-col">
                            <div className="digital-box">
                                <h4>Display Ads</h4>
                                <hr />
                                <p>Display ads are a highly effective way to raise brand awareness and drive traffic to your website...</p>
                            </div>
                        </div>
                        <div className="digital-col">
                            <div className="digital-box">
                                <h4>Shopping Ads</h4>
                                <hr />
                                <p>Shopping ads are a great way to promote your products and services to potential customers...</p>
                            </div>
                        </div>
                        <div className="digital-col">
                            <div className="digital-box">
                                <h4>YouTube Ads</h4>
                                <hr />
                                <p>With over 2 billion monthly active users, YouTube is an excellent platform for promoting your business...</p>
                            </div>
                        </div>
                        <div className="digital-col">
                            <div className="digital-box">
                                <h4>App Promotion</h4>
                                <hr />
                                <p>Our app promotion services are designed to help you promote your mobile app and increase downloads and installs...</p>
                            </div>
                        </div>
                        <div className="digital-col">
                            <div className="digital-box">
                                <h4>Local Ads</h4>
                                <hr />
                                <p>If you have a local business, our local ads services can help you reach potential customers in your area...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
            {/* Social Media Marketing Section */}
            <section className="digital-social-media">
                <div className="digital-container">
                    <div className="digital-title">
                        <span className="digital-subtitle">Ad Campaigns</span>
                        <h2>Social Media Marketing</h2>
                        <hr />
                        <p>We offer a comprehensive range of social media marketing services to help your business reach its target audience...</p>
                    </div>
 
                    <div className="digital-row">
                        <div className="digital-col">
                            <div className="digital-box">
                                <h4>Facebook Ads</h4>
                                <hr />
                                <p>With over 2.7 billion monthly active users, Facebook is one of the most popular social media platforms...</p>
                            </div>
                        </div>
                        <div className="digital-col">
                            <div className="digital-box">
                                <h4>Twitter Ads</h4>
                                <hr />
                                <p>Twitter is a fast-paced platform that’s ideal for real-time engagement and promoting your brand’s message...</p>
                            </div>
                        </div>
                        <div className="digital-col">
                            <div className="digital-box">
                                <h4>Instagram Ads</h4>
                                <hr />
                                <p>With over 1 billion monthly active users, Instagram is a highly visual platform ideal for promoting your brand’s message...</p>
                            </div>
                        </div>
                        <div className="digital-col">
                            <div className="digital-box">
                                <h4>LinkedIn Ads</h4>
                                <hr />
                                <p>LinkedIn is a professional networking platform that’s ideal for B2B businesses...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
            {/* Influencer Marketing Section */}
            <section className="digital-influencer-marketing">
                <div className="digital-container">
                    <div className="digital-title">
                        <span className="digital-subtitle">Ad Campaigns</span>
                        <h2>Influencer Marketing Services</h2>
                        <hr />
                        <p>We offer a comprehensive range of influencer marketing services to help your business reach its target audience...</p>
                    </div>
 
                    <div className="digital-row">
                        <div className="digital-col">
                            <div className="digital-box">
                                <h4>Influencer Identification</h4>
                                <hr />
                                <p>Our team will work with you to identify the right influencers for your campaign...</p>
                            </div>
                        </div>
                        <div className="digital-col">
                            <div className="digital-box">
                                <h4>Campaign Strategy</h4>
                                <hr />
                                <p>We will work with you to develop an influencer marketing campaign strategy that aligns with your business goals...</p>
                            </div>
                        </div>
                        <div className="digital-col">
                            <div className="digital-box">
                                <h4>Influencer Outreach and Management</h4>
                                <hr />
                                <p>Our team will handle all aspects of influencer outreach and management...</p>
                            </div>
                        </div>
                        <div className="digital-col">
                            <div className="digital-box">
                                <h4>Campaign Analysis and Reporting</h4>
                                <hr />
                                <p>We will provide you with regular reports on your campaign’s performance...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
            {/* Consultation Section */}
                {/* <section className="digital-consultation">
                    <div className="digital-container">
                        <div className="digital-consult-content">
                            <h5>We are here to answer your questions 24/7</h5>
                            <h2>Need A Consultation?</h2>
                            <p>Our clients achieve their business goals. Contact us today to learn more about our services...</p>
                            <a href="/contact" className="digital-btn-consult">Contact Us →</a>
                        </div>
                    </div>
                </section> */}
 
            <Footer />
        </>
    );
}
 
export default DigitalMarketing;
 
 