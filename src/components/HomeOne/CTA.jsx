import React from 'react';
import { Link } from 'react-router-dom';

import CtaBg from '../../assets/images/background/1.jpg';
import abc from '../../assets/images/abc.png'
import Logo1 from '../../assets/images/resource/icon-logo.png';

function CTAHomeOne({ className }) {
    return (		
        <>
        <section className={`call-to-action pull-down ${className || ''}`}  style={{ backgroundImage: `url(${CtaBg})` }}>
            <div className="auto-container">
                <div className="title-box">
                    <div className="icon bounce-y"><img src={Logo1} alt=""/></div>
                    <h1 className="title">IT Solutions & Services <br/>at your Fingertips</h1>
                    <Link to="/services" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                </div>
            </div>
        </section>
		</>
    );
}

export default CTAHomeOne;