import React from 'react';
import { Link } from 'react-router-dom';

function ContactHomeFive({ className }) {
    return (
        <>
            <section className={`contact-section-three pull-up ${className || ''}`}>
				<div className="auto-container">
					<div className="row">
						{/* Info Column */}
						<div className="info-column col-lg-6 order-2">
							<div className="inner-column wow fadeInRight">
								<div className="sec-title">
									<div className="sub-title">Get in Touch</div>
									<h2>Get a free quote today</h2>
									<div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our company</div>
								</div>
								<div className="contact-info-box-two">
									<span className="icon fa fa-map-marker-alt"></span>
									<h6 className="title">Visit Us</h6>
									<div className="text">66 Road Broklyn Street, 600 New York, USA</div>
								</div>
								<div className="contact-info-box-two">
									<span className="icon fa fa-envelope"></span>
									<h6 className="title">Email address</h6>
									<div className="text"><a href="mailto:needhelp@company.com">needhelp@company.com</a></div>
								</div>
								<div className="contact-info-box-two">
									<span className="icon fa fa-phone"></span>
									<h6 className="title">Call now</h6>
									<div className="text"><a href="tel:+999000111222">+999 000 111 222</a></div>
								</div>
							</div>
						</div>

						{/* Form Column */}
						<div className="form-column col-lg-6">
							<div className="inner-column">
								{/* Contact Form */}
								<div className="contact-form-two style-two wow fadeInLeft">
									{/* Contact Form */}
									<form id="contact_form" name="contact_form" action="/" method="get">
										<div className="row">
											<div className="form-group col-md-6">
												<input type="text" name="form_name" placeholder="Your Name" required/>
											</div>
											<div className="form-group col-md-6">
												<input type="email" name="form_email" placeholder="Email Address" required/>
											</div>
											<div className="form-group col-md-6">
												<input type="text" name="form_phone" placeholder="Phone Number" required/>
											</div>
											<div className="form-group col-md-6">
												<input type="text" name="form_subject" placeholder="Subject" required/>
											</div>
											<div className="form-group col-lg-12">
												<textarea name="message" placeholder="Write Message" required></textarea>
											</div>
											<div className="form-group col-sm-12">
												<input name="form_botcheck" className="form-control" type="hidden" value="" />
												<button type="submit" className="theme-btn btn-style-one hvr-light" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>
											</div>
										</div>
									</form>
								</div>
								{/* End Contact Form */}

							</div>
						</div>
					</div>
				</div>
            </section>
        </>
    );
}

export default ContactHomeFive;
