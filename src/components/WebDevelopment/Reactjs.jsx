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
        particleText="React"
        heading=" "
        subheading="Dynamic React Development for Modern Web Solutions"
        description="We deliver high-performance, scalable React applications with clean code, responsive design, and seamless user experiences to power your digital growth."
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
                        <h2>ReactJs Development</h2>
                        <hr/>
                        <p>ReactJS is a powerful JavaScript library for building fast, scalable, and interactive user interfaces. Developed by Facebook, it enables the creation of reusable components, making development efficient and maintainable. React supports single-page applications (SPAs) and integrates seamlessly with APIs, state management libraries, and frameworks like Next.js. Its virtual DOM enhances performance by minimizing re-renders. 

                            Whether you need a new mobile app, a redesign of your existing app, or ongoing app maintenance and support, we have the expertise to deliver. Contact us today to learn more about our app development services and how we can help your business succeed in the digital age.                            </p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>ReactJS Web App Development</h4>
                                <hr/>
                                <p>
                                Build high-performance, scalable, and interactive web applications using ReactJS. We develop single-page applications (SPAs) and complex frontends with reusable components, ensuring fast load times and smooth user experiences. Whether it’s an enterprise application, dashboard, or eCommerce platform, our ReactJS solutions provide a modern, responsive, and highly efficient user interface tailored to your business needs.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>ReactJS UI/UX Design</h4>
                                <hr/>
                                <p>Create visually appealing and user-friendly interfaces with ReactJS. We design interactive, responsive, and accessible UI/UX components using Material-UI, Tailwind CSS, or Bootstrap. Our focus on smooth navigation, optimized layouts, and performance-driven design enhances user engagement and satisfaction.  </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>ReactJS Plugin & Component Development</h4>
                                <hr/>
                                <p>Develop reusable, scalable, and modular React components and plugins. We create custom UI elements, widgets, and interactive features that integrate seamlessly with your applications, improving maintainability and performance. Whether you need a custom form, data table, or charting tool, we ensure a robust and reusable solution.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>ReactJS API Integration</h4>
                                <hr/>
                                <p>Seamlessly connect ReactJS applications with RESTful APIs, GraphQL, and third-party services like Stripe, Firebase, and AWS. We build dynamic applications that fetch and manage data efficiently, ensuring smooth communication between frontend and backend systems.</p>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>ReactJS eCommerce Development</h4>
                                <hr/>
                                <p>Develop high-performing, scalable eCommerce stores with ReactJS frameworks like Next.js, Gatsby, or Medusa.js. We create dynamic product pages, optimized checkout flows, and seamless API integrations for smooth shopping experiences, ensuring fast load times and better conversions</p>
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
