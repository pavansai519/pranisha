import React from 'react';
import { Link } from 'react-router-dom';

import ServiceImg1 from '../../assets/images/resource/service-1.jpg';
import ServiceImg2 from '../../assets/images/resource/service-2.jpg';
import ServiceImg3 from '../../assets/images/resource/service-3.jpg';

function Services() {
    return (
        <>
        <section>
          <div className="container">
            <div className="row">
              <div className="service-block col-lg-4 col-md-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/service-details"><img src={ServiceImg1} alt=""/></Link></figure>
                    <div className="icon-box"><i className="icon flaticon-business-010-startup"></i></div>
                  </div>
                  <div className="content-box">
                    <h5 className="title"><Link to="/service-details">Product Development</Link></h5>
                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                    <Link to="/service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                  </div>
                </div>
              </div>
      
              <div className="service-block col-lg-4 col-md-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/service-details"><img src={ServiceImg2} alt=""/></Link></figure>
                    <div className="icon-box"><i className="icon flaticon-business-002-graph"></i></div>
                  </div>
                  <div className="content-box">
                    <h5 className="title"><Link to="/service-details">UI/UX Designing</Link></h5>
                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                    <Link to="/service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                  </div>
                </div>
              </div>
      
              <div className="service-block col-lg-4 col-md-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/service-details"><img src={ServiceImg3} alt=""/></Link></figure>
                    <div className="icon-box"><i className="icon flaticon-business-048-coin"></i></div>
                  </div>
                  <div className="content-box">
                    <h5 className="title"><Link to="/service-details">Digital Marketing</Link></h5>
                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                    <Link to="/service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                  </div>
                </div>
              </div>
      
              <div className="service-block col-lg-4 col-md-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/service-details"><img src={ServiceImg3} alt=""/></Link></figure>
                    <div className="icon-box"><i className="icon flaticon-business-002-graph"></i></div>
                  </div>
                  <div className="content-box">
                    <h5 className="title"><Link to="/service-details">Data Analysis</Link></h5>
                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                    <Link to="/service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                  </div>
                </div>
              </div>
      
              <div className="service-block col-lg-4 col-md-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/service-details"><img src={ServiceImg1} alt=""/></Link></figure>
                    <div className="icon-box"><i className="icon flaticon-business-048-coin"></i></div>
                  </div>
                  <div className="content-box">
                    <h5 className="title"><Link to="/service-details">Security System</Link></h5>
                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                    <Link to="/service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                  </div>
                </div>
              </div>
      
              <div className="service-block col-lg-4 col-md-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/service-details"><img src={ServiceImg2} alt=""/></Link></figure>
                    <div className="icon-box"><i className="icon flaticon-business-010-startup"></i></div>
                  </div>
                  <div className="content-box">
                    <h5 className="title"><Link to="/service-details">Data Visualization</Link></h5>
                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                    <Link to="/service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>   
        </>
    );
}

export default Services;
