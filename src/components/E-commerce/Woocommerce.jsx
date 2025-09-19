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
        particleText="Woocommerce"
        heading=" "
        subheading="Custom WooCommerce Development for Flexible Online Stores"
        description="We build user-friendly, secure, and fully customizable WooCommerce websites that deliver smooth shopping experiences and support your business growth."
        buttonText="Get Free Consultation"
       background="/background.png"
        color="#ffffff"
        fontSize={140}
/>
            <section className="seo-services-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>WooCommerce Store Setup</h2>
                        <hr/>
                        <p>Get your WooCommerce store up and running with seamless installation, configuration, and customization. We set up essential features, including payment gateways, shipping methods, and tax settings, ensuring a smooth shopping experience. Whether starting fresh or revamping an existing store, we tailor the setup to match your business needs, optimizing performance and user experience for maximum conversions and growth.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Theme Customization</h4>
                                <hr/>
                                <p>
                                Customize your WooCommerce theme to reflect your brand’s identity with tailored designs, colors, fonts, and layouts. We enhance user experience by making your store visually appealing, mobile-responsive, and easy to navigate. Whether modifying an existing theme or developing a custom design, we ensure your store stands out, providing a professional and engaging shopping experience that drives sales and customer retention.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Plugin Development & Integration</h4>
                                <hr/>
                                <p>Extend your WooCommerce store’s functionality with custom plugins or seamless integration of third-party solutions. We develop, customize, and configure plugins to add new features like advanced filters, subscriptions, or booking systems. Whether you need payment gateway integration, CRM connections, or automation tools, we ensure smooth compatibility, security, and scalability to enhance your store’s efficiency and user experience. </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Product Management</h4>
                                <hr/>
                                <p>Manage your WooCommerce products efficiently with proper categorization, SEO-friendly descriptions, high-quality images, and optimized pricing strategies. We handle bulk uploads, product variations, stock management, and automation tools to keep your inventory organized. With our expertise, your store maintains an appealing, well-structured catalog, making it easy for customers to find and purchase products, ultimately increasing sales and improving user engagement.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>WooCommerce Security & Maintenance</h4>
                                <hr/>
                                <p>Keep your WooCommerce store secure and up-to-date with regular maintenance, security patches, and backups. We protect against threats like malware, hacking attempts, and data breaches by implementing firewalls, SSL certificates, and two-factor authentication. Our proactive approach ensures smooth operation, preventing downtime and safeguarding customer data while maintaining compliance with security standards.</p>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>Migration to WooCommerce</h4>
                                <hr/>
                                <p>Seamlessly migrate your store from Shopify, Magento, or any other platform to WooCommerce. We transfer products, customer data, orders, and SEO settings while ensuring minimal downtime. Our migration service ensures a smooth transition, preserving store functionality, design, and rankings while optimizing performance for better scalability and growth.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="seo-service-box">
                                <h4>WooCommerce API & Automation</h4>
                                <hr/>
                                <p>Automate WooCommerce processes by integrating APIs with CRM, ERP, and marketing tools. We connect your store with third-party services like Zapier, Mailchimp, and accounting software for seamless order processing, inventory management, and customer engagement. Our automation solutions save time, improve efficiency, and scale your business effortlessly.</p>
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
