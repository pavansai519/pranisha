import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeTwo/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';

import PricingImg1 from '../../assets/images/resource/pricing-1.png';
import PricingImg2 from '../../assets/images/resource/pricing-2.png';

function Pricing() {
    return (
        <>
            <Header />
            <PageTitle
                title="Pricing"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/pricing', title: 'Pricing' },
                ]}
            />
			<section>
				<div className="container pb-70">
					<div className="row">
						<div className="col-xl-4 col-md-6">
							<div className="pricing-block">
								<div className="inner-box">
									<figure className="image"><img src={PricingImg1} alt=""/></figure>
									<div className="price-box">
										<h4 className="price"><sup>$</sup>49</h4>
										<span className="validaty">/ Monthly</span>
									</div>
									<h4 className="title">Basic Plan</h4>
									<ul className="features">
										<li>24/7 system monitoring</li>
										<li>Security management</li>
										<li>Patch management</li>
										<li>Remote support</li>
									</ul>
									<div className="btn-box">
										<Link to="/pricing" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Choose plan</span></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-6">
							<div className="pricing-block">
								<div className="inner-box">
									<figure className="image"><img src={PricingImg2} alt=""/></figure>
									<div className="price-box">
										<h4 className="price"><sup>$</sup>69</h4>
										<span className="validaty">/ Monthly</span>
									</div>
									<h4 className="title">Advance Plan</h4>
									<ul className="features">
										<li>24/7 system monitoring</li>
										<li>Security management</li>
										<li>Patch management</li>
										<li>Remote support</li>
									</ul>
									<div className="btn-box">
										<Link to="/pricing" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Choose plan</span></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-6">
							<div className="pricing-block">
								<div className="inner-box">
									<figure className="image"><img src={PricingImg1} alt=""/></figure>
									<div className="price-box">
										<h4 className="price"><sup>$</sup>99</h4>
										<span className="validaty">/ Monthly</span>
									</div>
									<h4 className="title">Premium Plan</h4>
									<ul className="features">
										<li>24/7 system monitoring</li>
										<li>Security management</li>
										<li>Patch management</li>
										<li>Remote support</li>
									</ul>
									<div className="btn-box">
										<Link to="/pricing" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Choose plan</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
            <Footer />
            <BackToTop />
        </>
    );
}


export default Pricing;
