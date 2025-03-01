import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    { id: 1, icon: 'flaticon-business-002-graph', title: 'Product Development' },
    { id: 2, icon: 'flaticon-business-010-startup', title: 'Digital Marketing' },
    { id: 3, icon: 'flaticon-business-030-settings', title: 'Security System' },
    { id: 4, icon: 'flaticon-business-045-stationery', title: 'UI/UX Designing' },
    { id: 5, icon: 'flaticon-business-054-graph', title: 'Data Analysis' },
];

function ServiceHomeTwo({ className }) {
    return (
        <>
            <section className={`services-section-three ${className || ''}`}>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Services we’re offering</span>
                        <h2>We Provide our Clients <br/>Best IT Services</h2>
                    </div>
                    <div className="outer-box">
                        <div className="row justify-content-center">
                            {services.map((service) => (
                                <div key={service.id} className="service-block-three col wow fadeInUp">
                                    <div className="inner-box">
                                        <i className={`icon ${service.icon}`}></i>
                                        <h6 className="title">
                                            <Link to="/service-details">{service.title.split(' ')[0]} <br /> {service.title.split(' ')[1]}</Link>
                                        </h6>
                                        <div className="text">Providing the solutions for tech business</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServiceHomeTwo;
