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
        particleText="Pr & Media"
        heading=" "
        subheading="Strategic PR & Media Services to Build Your Brand Image"
        description="We craft compelling PR campaigns and media strategies that boost your brand visibility, credibility, and engagement across traditional and digital channels."
        buttonText="Get Free Consultation"
        background="/background.png"
        color="#ffffff"
        fontSize={140}
/>

            {/* SEO Services Section - Styled like the reference image */}
            <section className="seo-services-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>Elevate Your Brand Impact with Strategic PR & Media Solutions</h2>
                         <hr/>
                         <p>We deliver end-to-end PR and media services designed to amplify brand visibility and foster public trust. By combining creative storytelling with strategic communication, we ensure that your message resonates across the right channels. For us, Public Relations is more than visibility—it's about building lasting credibility through meaningful engagement. As a driving force in brand evolution, PR continues to shape public perception, fuel media presence, and empower organizations to lead with confidence in a rapidly changing world.</p>
                          </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Media Relations</h4>
                                 <hr/>
                                 <p>Strengthen your public presence with impactful media outreach. We build strategic relationships with journalists and outlets to secure authentic coverage that boosts your brand’s credibility and trust.</p>
                                  </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Press Release Services</h4>
                                <hr/>
                                <p>Communicate your biggest milestones effectively with professionally crafted press releases. We handle writing, distribution, and media follow-up to ensure your news reaches the right audience at the right time.</p>
                                  </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Reputation Management</h4>
                                 <hr/>
                                 <p>Safeguard your brand’s image with proactive and responsive reputation strategies. From crisis communication to online sentiment monitoring, we help maintain public trust and confidence.</p>
                                   </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Thought Leadership</h4>
                                 <hr/>
                                 <p>Position your executives as industry influencers through strategic storytelling. We curate speaking opportunities, guest articles, and interviews to elevate your leadership’s voice in key conversations.</p>
                                   </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Event Promotion & Coverage</h4>
                                <hr/>
                                <p>Maximize exposure for your events with targeted PR campaigns. Whether it’s a product launch, webinar, or CSR initiative, we ensure media presence, buzz, and audience engagement.</p>
                                 </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Influencer & Digital PR</h4>
                                <hr/>
                                <p>Expand your reach through powerful digital PR and influencer collaboration. We identify relevant voices in your industry to amplify your message across social platforms and digital media.</p>
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
