import React from 'react';
import { Link } from 'react-router-dom';

import CtaImg from '../../assets/images/resource/image-2.jpg';

function CTAHomeThree({ className }) {
    return (
        <>
            <section className={`call-to-action-two alternate p-0 overflow-hidden ${className || ''}`}>
				<div className="auto-container">
					<div className="outer-box wow fadeIn">
						<div className="image-box">
							<figure className="image"><img src={CtaImg} alt=""/></figure>
						</div>
						<div className="content-box">
							<div className="title-box">
							  <h3 className="title">We’re Ready <br/>Develop Your Site!</h3>
							</div>
							<div className="btn-box">
								<Link to="/services" className="theme-btn btn-style-two"><span className="btn-title">More Services</span></Link>
							</div>
						</div>
					</div>
				</div>
            </section>
        </>
    );
}

export default CTAHomeThree;
