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
        particleText={'App \nDevelopment'}
        heading=" "
        subheading="Custom App Development to Drive Digital Success"
        description="We build user-friendly, scalable mobile and web applications tailored to your business needs, ensuring seamless performance and engaging user experiences."
        buttonText="Get Free Consultation"
        background="/background.png"
        color="#ffffff"
        fontSize={140}
/>

            {/* SEO Services Section - Styled like the reference image */}
            <section className="seo-services-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">Web Development</span>
                        <h2>Mobile App Development</h2>
                        <hr/>
                        <p>We specialize in creating innovative, user-friendly mobile applications for businesses of all sizes. Our team of experienced app developers use the latest technologies and best practices to build high-quality apps that deliver results.

                            We understand that your mobile app is often the primary touchpoint with your customers, which is why we take a user-centric approach to app development. Our team works closely with you to understand your business goals, target audience, and unique requirements, and then develops a strategy to build an app that delivers the results you want.

                            From initial design and development to ongoing maintenance and support, we provide end-to-end app development services. Our expertise includes native app development for iOS and Android, hybrid app development, cross-platform app development, and more. </p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Native App Development</h4>
                                <hr/>
                                <p>
                                Native app development involves creating an app specifically for a single platform, such as iOS or Android, using the platform’s native programming language and tools. For example, an iOS app would be developed using Swift or Objective-C, while an Android app would be developed using Java or Kotlin. This approach provides the best performance, as the app is optimized for the specific platform it is designed for, and can leverage the latest platform-specific features and functionalities.</p>
                            </div>
                        </div>

                        {/* <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Hybrid App Development</h4>
                                <hr/>
                                <p>Hybrid app development combines the best of both worlds by leveraging web technologies like HTML, CSS, and JavaScript to create a single app that works across multiple platforms. The app is developed using a single codebase that can be easily deployed on both iOS and Android devices, making it faster and more cost-effective than building separate native apps for each platform. Hybrid apps also have the advantage of being easily updated and maintained.  </p>
                            </div>
                        </div> */}

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Cross-Platform App Development</h4>
                                <hr/>
                                <p>Cross-platform app development is similar to hybrid app development in that it allows you to create a single app that works across multiple platforms, but it uses different tools and technologies to do so. Cross-platform app development typically involves using specialized frameworks and languages like React Native, Flutter, or Xamarin to create a high-quality app that looks and feels native on both iOS and Android devices. Cross-platform apps have the advantage of being faster and more cost-effective to develop than native apps, while still delivering a great user experience</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Programming Languages</h4>
                                <hr/>
                                <p>We use a variety of programming languages to develop mobile applications, including Swift, Objective-C, Java, Kotlin, JavaScript, HTML, and CSS.</p>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Development frameworks</h4>
                                <hr/>
                                <p>We use a range of development frameworks like React Native, Flutter, Xamarin, and Ionic to develop hybrid and cross-platform apps that work across multiple platforms.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Integrated Development Environments (IDEs)</h4>
                                <hr/>
                                <p>We use powerful IDEs like Xcode, Android Studio, Visual Studio, and Eclipse to develop native and hybrid apps for iOS and Android.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Back-end development</h4>
                                <hr/>
                                <p>We use a variety of back-end development technologies to support our mobile apps, including cloud-based services like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform, and programming languages like PHP, Ruby, and Node.js.</p>
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
