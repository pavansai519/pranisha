import React from 'react';
import { Link } from 'react-router-dom';

function CTA2HomeThree({ className }) {
    return (
        <>
            <section className={`call-to-action-four ${className || ''}`}>
				<div className="auto-container">
					<div className="outer-box">
						<div className="title-box">
							<div className="sub-title">We’re here to help to grow your business.</div>
							<h3 className="title">Looking for the Best IT Business Solutions?</h3>
						</div>
						<div className="btn-box">
							<Link to="/about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
						</div>
					</div>
				</div>
            </section>
        </>
    );
}

export default CTA2HomeThree;
