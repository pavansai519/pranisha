import React from 'react';
import { Link } from 'react-router-dom';

import Img1 from '../../assets/images/resource/image-2.jpg';

function CTA2HomeOne({ className }) {
    return (		
        <>
        <section className={`call-to-action-two p-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="outer-box wow fadeIn">
                    <div className="image-box">
                        <figure className="image"><img src={Img1} alt=""/></figure>
                    </div>
                    <div className="content-box">
                        <div className="title-box">
                            <h3 className="title">We’re Ready <br/>Develop Your Site!</h3>
                        </div>
                        <div className="btn-box">
                            <Link to="/about" className="theme-btn btn-style-two hvr-light"><span className="btn-title">More Services</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		</>
    );
}

export default CTA2HomeOne;