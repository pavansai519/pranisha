import React from 'react';
import Header from '../HomeTwo/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import TestimonialImg1 from '../../assets/images/resource/testi-thumb-3.jpg';
import TestimonialImg2 from '../../assets/images/resource/testi-thumb-2.jpg';

function Testimonial() {
    return (
        <>
            <Header />
            <PageTitle
              title="Testimonial"
              breadcrumb={[
                { link: '/', title: 'Home' },
                { link: '/testimonial', title: 'Testimonial' },
              ]}
            />
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="testimonial-block-four mb-md-30">
                      <div className="inner-box">
                        <div className="content-box">
                          <span className="icon icon-quote"></span>
                          <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                          <div className="text">Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.</div>
                        </div>
                        <div className="info-box">
                          <figure className="thumb"><img src={TestimonialImg1} alt=""/></figure>
                          <h5 className="name">Jessica Brown</h5>
                          <span className="designation">Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="testimonial-block-four">
                      <div className="inner-box">
                        <div className="content-box">
                          <span className="icon icon-quote"></span>
                          <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                          <div className="text">Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.</div>
                        </div>
                        <div className="info-box">
                          <figure className="thumb"><img src={TestimonialImg2} alt=""/></figure>
                          <h5 className="name">Alesha Brown</h5>
                          <span className="designation">Co Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
        </>
    );
}

export default Testimonial;
