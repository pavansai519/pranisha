import React from 'react';
import { Link } from 'react-router-dom';

import TeamImg1 from '../../assets/images/resource/team-1.jpg';
import TeamImg2 from '../../assets/images/resource/team-2.jpg';
import TeamImg3 from '../../assets/images/resource/team-3.jpg';


function Team1({ className }) {
    return (
        <>
          <section className={`team-section ${className || ''}`}>
            <div className="anim-icons">
                <span className="icon icon-lines bounce-x"></span>
                <span className="icon icon-dots bounce-y"></span>
            </div>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Our feedbakcs</span>
                    <h2>EXPERTS READY TO SURVE</h2>
                </div>
                <div className="row">
                  {[
                    {
                      img: TeamImg1,
                      name: "Kevin Hardson",
                      designation: "designer",
                      socialLinks: [
                        { platform: "facebook", icon: "fab fa-facebook-f" },
                        { platform: "twitter", icon: "fab fa-twitter" },
                        { platform: "pinterest", icon: "fab fa-pinterest-p" },
                        { platform: "instagram", icon: "fab fa-instagram" }
                      ]
                    },
                    {
                      img: TeamImg2,
                      name: "Jessica Brown",
                      designation: "developer",
                      socialLinks: [
                        { platform: "facebook", icon: "fab fa-facebook-f" },
                        { platform: "twitter", icon: "fab fa-twitter" },
                        { platform: "pinterest", icon: "fab fa-pinterest-p" },
                        { platform: "instagram", icon: "fab fa-instagram" }
                      ]
                    },
                    {
                      img: TeamImg3,
                      name: "Michale Smith",
                      designation: "co founder",
                      socialLinks: [
                        { platform: "facebook", icon: "fab fa-facebook-f" },
                        { platform: "twitter", icon: "fab fa-twitter" },
                        { platform: "pinterest", icon: "fab fa-pinterest-p" },
                        { platform: "instagram", icon: "fab fa-instagram" }
                      ]
                    }
                  ].map((teamMember, index) => (
                    <div className="team-block col-lg-4 col-md-6 wow fadeInUp" key={index} data-wow-delay={`${index * 300}ms`}>
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image"><Link to="/team-details"><img src={teamMember.img} alt=""/></Link></figure>
                        </div>
                        <div className="info-box">
                          <h5 className="name"><Link to="/team-details">{teamMember.name}</Link></h5>
                          <span className="designation">{teamMember.designation}</span>
                          <div className="social-links">
                            {teamMember.socialLinks.map((social, idx) => (
                              <Link to="#" key={idx}><i className={social.icon}></i></Link>
                            ))}
                          </div>
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

export default Team1;
