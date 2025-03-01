import React from 'react';
import { Link } from 'react-router-dom';

function CTA2Home3({ className }) {
    return (
        <>
            <section className={`call-to-action-three p-0 ${className || ''}`}>
				<div className="auto-container">
					<div className="outer-box">
						<div className="title-box">
							<span className="icon fa fa-network-wired"></span>
							<h5 className="title">Need IT solutions & services consultation?</h5>
						</div>
						<div className="btn-box">
							<Link to="/services" className="theme-btn btn-style-one"><span className="btn-title">get solution</span></Link>
						</div>
					</div>
				</div>
            </section>
        </>
    );
}

export default CTA2Home3;
