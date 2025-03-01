import React from 'react';
import { Link } from 'react-router-dom';

function ServiceHome3({ className }) {
    return (
        <>
            <section className={`services-section-four layout_6 ${className || ''}`}>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Services we’re offering</span>
                        <h2>We Provide our Clients <br/>Best IT Services</h2>
                    </div>

                    <div className="row">
                      {[
                        {
                          icon: "flaticon-business-002-graph",
                          title: "Product Development",
                          link: "/service-details",
                          description: "Providing the solutions for tech business"
                        },
                        {
                          icon: "flaticon-business-012-startup",
                          title: "Digital Marketing",
                          link: "/service-details",
                          description: "Providing the solutions for tech business"
                        },
                        {
                          icon: "flaticon-business-046-like",
                          title: "Security System",
                          link: "/service-details",
                          description: "Providing the solutions for tech business"
                        },
                        {
                          icon: "flaticon-business-006-target",
                          title: "UI/UX Designing",
                          link: "/service-details",
                          description: "Providing the solutions for tech business"
                        }
                      ].map((service, index) => (
                        <div className="service-block-four col-lg-3 col-md-6 wow fadeInUp" key={index}>
                          <div className="inner-box">
                            <div className="icon-box">
                              <i className={`icon ${service.icon}`}></i>
                            </div>
                            <h5 className="title"><Link to={service.link}>{service.title}</Link></h5>
                            <div className="text">{service.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                </div>
            </section>
        </>
    );
}

export default ServiceHome3;
