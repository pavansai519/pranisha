import React from 'react';
import CounterUp from '../../lib/CounterUp.jsx'; 

function FunfactHomeOne({ className }) {
    const percentage1 = 960;
    const percentage2 = 830;
    const percentage3 = 89;
    const percentage4 = 9;
    return (		
        <>
        <section className={`fun-fact-section pb-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="fact-counter">
                    <div className="row">
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp">
                            <div className="inner">
                                <i className="icon flaticon-business-060-graph"></i>
                                <div className="count-box"><span className="count-text justify-content-center"><CounterUp count={percentage1} time={3} /></span></div>
                                <h6 className="counter-title">Project completed</h6>
                            </div>
                        </div>
    
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner">
                                <i className="icon flaticon-business-035-helpline"></i>
                                <div className="count-box"><span className="count-text justify-content-center"><CounterUp count={percentage2} time={3} /></span></div>
                                <h6 className="counter-title">IT specialists</h6>
                            </div>
                        </div>
    
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner">
                                <i className="icon flaticon-business-020-hierarchy"></i>
                                <div className="count-box"><span className="count-text justify-content-center"><CounterUp count={percentage3} time={3} /></span></div>
                                <h6 className="counter-title">Satisfied clients</h6>
                            </div>
                        </div>
    
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner">
                                <i className="icon flaticon-business-048-coin"></i>
                                <div className="count-box"><span className="count-text justify-content-center"><CounterUp count={percentage4} time={3} /></span></div>
                                <h6 className="counter-title">Smart solutions</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		</>
    );
}

export default FunfactHomeOne;