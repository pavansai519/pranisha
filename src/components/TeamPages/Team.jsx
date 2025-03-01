import React from 'react';
import { Link } from 'react-router-dom';

import TeamImg1 from '../../assets/images/resource/team-1.jpg';
import TeamImg2 from '../../assets/images/resource/team-2.jpg';
import TeamImg3 from '../../assets/images/resource/team-3.jpg';

const teamip = [
  { id: 1, img: TeamImg1, title: "Kevin Martin", desig: "designer"},
  { id: 2, img: TeamImg2, title: "Aleesha Brown", desig: "co founder"},
  { id: 3, img: TeamImg3, title: "Sarah Albert", desig: "developer"},
];

function Team() {
    return (
        <>
        <section className="">
            <div className="container pb-70">
                <div className="row">
                    {teamip.map((teamip) => (
                        <div key={teamip.id} className="team-block col-lg-4 col-md-6">
                            <div className="inner-box mb-md-30">
                                <div className="image-box">
                                    <figure className="image"><Link to="/team-details"><img src={teamip.img} alt=""/></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h5 className="name"><Link to="/team-details">{teamip.title}</Link></h5>
                                    <span className="designation">{teamip.desig}</span>
                                    <ul className="social-links">
                                        <li><Link to="#"><span className="fab fa-twitter"></span></Link></li>
                                        <li><Link to="#"><span className="fab fa-facebook-f"></span></Link></li>
                                        <li><Link to="#"><span className="fab fa-instagram"></span></Link></li>
                                    </ul>
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

export default Team;
