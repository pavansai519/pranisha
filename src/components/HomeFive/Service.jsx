import React from 'react';
import { Link } from 'react-router-dom';

import ServicetImg1 from '../../assets/images/resource/service-1.jpg';
import ServicetImg2 from '../../assets/images/resource/service-2.jpg';
import ServicetImg3 from '../../assets/images/resource/service-3.jpg';

const services = [
  {
    image: ServicetImg1,
    icon: 'flaticon-business-010-startup',
    title: 'Product Development',
    description: "We’ve designed a culture that allows our stewards to assimilate",
    link: '/service-details',
  },
  {
    image: ServicetImg2,
    icon: 'flaticon-business-002-graph',
    title: 'UI/UX Designing',
    description: "We’ve designed a culture that allows our stewards to assimilate",
    link: '/service-details',
  },
  {
    image: ServicetImg3,
    icon: 'flaticon-business-048-coin',
    title: 'Digital Marketing',
    description: "We’ve designed a culture that allows our stewards to assimilate",
    link: '/service-details',
  },
];

function ServiceHome5({ className }) {
    return (
        <>
            <section className={`services-section services-section-bg ${className || ''}`}>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Services we’re offering</span>
                        <h2>High quality products and services<br/> that we stand behind</h2>
                    </div>

                    <div className="row">
                        {services.map((service, index) => (
                          <div key={index} className="service-block col-lg-4 col-md-6 wow fadeInUp">
                            <div className="inner-box">
                              <div className="image-box">
                                <figure className="image">
                                  <Link to={service.link}>
                                    <img src={service.image} alt={service.title} />
                                  </Link>
                                </figure>
                                <div className="icon-box">
                                  <i className={`icon ${service.icon}`}></i>
                                </div>
                              </div>
                              <div className="content-box">
                                <h5 className="title">
                                  <Link to={service.link}>{service.title}</Link>
                                </h5>
                                <div className="text">{service.description}</div>
                                <Link to={service.link} className="read-more">
                                  read More <i className="fa fa-long-arrow-alt-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServiceHome5;
