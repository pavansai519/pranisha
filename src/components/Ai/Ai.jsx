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
        particleText="Ai"
        fontFamily = 'Poppins'
        heading=" "
        subheading="AI-Powered Solutions to Transform Your Business"
        description="We leverage advanced AI technologies to automate processes, enhance customer experiences, and deliver intelligent insights that drive smarter business decisions."
        buttonText="Get Free Consultation"
       background="/background.png"
        color="#ffffff"
        fontSize={140}
/>


            {/* SEO Services Section - Styled like the reference image */}
            <section className="seo-services-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>Empower Your Business Transformation with Comprehensive AI Solutions</h2>
                        <hr/>
                        <p>We deliver end-to-end AI services designed to transform businesses. Leveraging an agile approach, we combine innovative methodologies with advanced AI technologies to ensure alignment with your company’s objectives. For us, Artificial Intelligence represents the future of computing, simulating human intelligence through smart systems and high-performance processing units. As a revolutionary force, AI continues to reshape industries at an unprecedented scale, driving the next-generation industrial revolution with its analytical prowess and adaptive intelligence.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Development</h4>
                                <hr/>
                                <p>Leverage our advanced AI development services to build tailored solutions using cutting-edge technologies. Collaborate with us to foster innovation and enhance operational efficiency across your enterprise.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Consulting</h4>
                                <hr/>
                                <p>Leverage our expert AI consulting services to gain strategic guidance and actionable insights. Harness advanced artificial intelligence technologies to drive significant growth and optimize operational efficiency across your business. </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Mobile App</h4>
                                <hr/>
                                <p>Transform mobile experiences with our AI-powered app development services. Integrate intelligent features and machine learning to create apps that adapt seamlessly to user behavior, maximizing functionality and engagement.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>ML & Analytics</h4>
                                <hr/>
                                <p>Unlock the potential of Machine Learning and Advanced Analytics with our expertise. We turn your data into actionable insights, forecast trends, and enable data-driven decisions to accelerate your business success.</p>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Generative AI</h4>
                                <hr/>
                                <p>Unlock limitless creativity with our Generative AI solutions. From producing unique content to crafting innovative designs, our services empower you to push creative boundaries and redefine innovation across industries.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>ChatGPT Solutions</h4>
                                <hr/>
                                <p>Enhance customer interactions with our ChatGPT Solutions. Seamlessly integrate AI-powered chatbots to provide personalized, efficient 24/7 support, boosting customer satisfaction and engagement.</p>
                            </div>
                        </div>

                        
                        
                    </div>
                </div>
            </section>
            <section className="consultation-section ">
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
