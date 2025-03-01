import React from 'react';
import { Link } from 'react-router-dom';

import ServiceBgImg from '../../assets/images/background/5.jpg';

const services = [
    { id: 1, icon: 'flaticon-business-035-helpline', title: 'Consultancy' },
    { id: 2, icon: 'flaticon-business-010-startup', title: 'Development' },
    { id: 3, icon: 'flaticon-business-032-megaphone', title: 'Marketing' },
    { id: 4, icon: 'flaticon-business-063-diamond', title: 'Softwares' },
];

function Service2HomeTwo({ className }) {
    return (
        <>
            <section className={`services-section-five ${className || ''}`} style={{ backgroundImage: `url(${ServiceBgImg})` }}>
                <div className="auto-container">
                    <div className="sec-title light text-center">
                        <span className="sub-title">Services we’re offering</span>
                        <h2>We Provide our Clients <br/>Best IT Services</h2>
                    </div>
                    <div className="row">
                        {services.map((service) => (
                            <div key={service.id} className="service-block-five col-lg-3 col-sm-6 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <i className={`icon ${service.icon}`}></i>
                                    </div>
                                    <h4 className="title">
                                        <Link to="/service-details">{service.title}</Link>
                                    </h4>
                                    <div className="text">Taking seamless key performance indicators offline to maximise the tail</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Service2HomeTwo;
