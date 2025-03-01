import React from 'react';
import { Link } from 'react-router-dom';

import CtaBg from '../../assets/images/background/1.jpg';
import CtaLogo from '../../assets/images/resource/icon-logo.png';

function CTA2Home5({ className }) {
    return (
        <>
            <section className={`call-to-action ${className || ''}`} style={{ backgroundImage: `url(${CtaBg})` }}>
				<div className="auto-container">
					<div className="title-box">
						<div className="icon bounce-y"><img src={CtaLogo} alt=""/></div>
						<h1 className="title">IT Solutions & Services <br/>at your Fingertips</h1>
						<Link to="/services" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
					</div>
				</div>
            </section>
        </>
    );
}

export default CTA2Home5;
