import React from 'react';
import { Link } from 'react-router-dom';

import TeamImg1 from '../../assets/images/resource/team-1.jpg';
import TeamImg2 from '../../assets/images/resource/team-2.jpg';
import TeamImg3 from '../../assets/images/resource/team-3.jpg';
import TeamImg4 from '../../assets/images/resource/team-4.jpg';

const teamh4 = [
  { id: 1, img: TeamImg1, title: "Adman Michel", desig: "Web Developer"},
  { id: 2, img: TeamImg2, title: "Jessica Brown", desig: "Web Developer"},
  { id: 3, img: TeamImg3, title: "Richerd William", desig: "Web Developer"},
  { id: 4, img: TeamImg4, title: "Sara Albert", desig: "Web Developer"},
];

function TeamHome4({ className }) {
    return (
        <>
          <section className={`team-section-two ${className || ''}`}>
            <div className="auto-container">
              <div className="sec-title text-center">
                <span className="sub-title">Our team expert</span>
                <h2>Meet Professionals</h2>
              </div>
              <div className="row">
                {teamh4.map((teamh4) => (
                  <div key={teamh4.id} className="team-block-two col-lg-3 col-md-6 wow fadeInUp">
                    <div className="inner-box">
                      <div className="info-box">
                        <h5 className="name"><Link to="/team-details">{teamh4.title}</Link></h5>
                        <span className="designation">{teamh4.desig}</span>
                        <span className="share-icon fa fa-share-alt"></span>
                        <div className="social-links">
                          <Link to="#"><i className="fab fa-twitter"></i></Link>
                          <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                          <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                          <Link to="#"><i className="fab fa-instagram"></i></Link>
                        </div>
                      </div>
                      <div className="image-box">
                        <figure className="image"><Link to="/team-details"><img src={teamh4.img} alt=""/></Link></figure>
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

export default TeamHome4;
