import React from 'react';
import { Link } from 'react-router-dom';

import FeatureImg1 from '../../assets/images/resource/feature-bg-1.jpg';

function FeatureHomeFour({ className }) {
    return (
        <>
            <section className={`features-section-four pull-down p-0 ${className || ''}`}>
				<div className="auto-container">
					<div className="row g-0">
						{/* Feature Block */}
						<div className="feature-block-four col-lg-6 wow fadeInLeft">
							<div className="inner-box">
			                    <div className="content" style={{ backgroundImage: `url(${FeatureImg1})` }}>
									<span className="icon flaticon-business-030-settings"></span>
									<h5 className="title">End to End Development</h5>
									<div className="text">There are many variations of available</div>
								</div>
							</div>
						</div>

						{/* Feature Block */}
						<div className="feature-block-four col-lg-6 wow fadeInRight">
							<div className="inner-box">
			                    <div className="content" style={{ backgroundImage: `url(${FeatureImg1})` }}>
									<span className="icon flaticon-business-035-helpline"></span>
									<h5 className="title">End to End Development</h5>
									<div className="text">There are many variations of available</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </section>
        </>
    );
}

export default FeatureHomeFour;
