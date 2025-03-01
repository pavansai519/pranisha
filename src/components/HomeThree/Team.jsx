import React from 'react';
import { Link } from 'react-router-dom';

import TeamImg1 from '../../assets/images/resource/team-1.jpg';
import TeamImg2 from '../../assets/images/resource/team-2.jpg';
import TeamImg3 from '../../assets/images/resource/team-3.jpg';

const teamh3 = [
  { id: 1, img: TeamImg1, title: "Adman Michel", poster: "by Admin"},
  { id: 2, img: TeamImg2, title: "Adman Michel", poster: "by Admin"},
  { id: 3, img: TeamImg3, title: "Adman Michel", poster: "by Admin"},
];

function TeamHomeThree({ className }) {
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
                {teamh3.map((teamh3) => (
                  <div key={teamh3.id} className="team-block-three col-lg-4 col-sm-6 wow fadeInUp">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image"><Link to="/team-details"><img src={teamh3.img} alt=""/></Link></figure>
                      </div>
                      <div className="info-box">
                        <h5 className="name"><Link to="/team-details">{teamh3.title}</Link></h5>
                        <span className="share-icon fa fa-share-alt"></span>
                        <div className="social-links">
                          <Link to="#"><i className="fab fa-twitter"></i></Link>
                          <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                          <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                          <Link to="#"><i className="fab fa-instagram"></i></Link>
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

export default TeamHomeThree;
