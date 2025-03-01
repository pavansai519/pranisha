import React from 'react';
import { Link } from 'react-router-dom';

function CTAHome5({ className }) {
    return (
        <>
            <section className={`call-to-action-six p-0 ${className || ''}`}>
				<div className="auto-container">
					<div className="outer-box wow fadeIn">
						{/* Content Box */}
						<div className="content-box">
							<div className="title-box">
								<h4>Get Your IT Technology <br/> Solutions</h4>
							</div>
							{/* Image Box */}
							<div className="icon-box flex-shrink-0">
								<a href="mailto:domain@company.com"><i className="flaticon-business-008-email"></i></a>
							</div>
							<div className="info-number-box ms-3 ms-md-0">
								<small>Get professional help</small><br/> 92 666 888 000
							</div>
						</div>
					</div>
				</div>
            </section>
        </>
    );
}

export default CTAHome5;
