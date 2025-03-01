import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import VideoImg from '../../assets/images/resource/image-6.jpg';
import VideoIcon from '../../assets/images/icons/icon-arrow.png';

function VideoHome4({ className }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className={`offer-section-two ${className || ''}`}>
				<div className="auto-container">
					<div className="row">
						{/* Content Column */}
						<div className="content-column col-lg-6">
							<div className="inner-column">
								<div className="sec-title light">
									<span className="sub-title">Welcome to tech</span>
									<h2>Your Success with the Best IT Solutions</h2>
								</div>
								<div className="info-box">
									<span className="count">01</span>
									<div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer.</div>
								</div>
								<div className="info-box">
									<span className="count">02</span>
									<div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer.
									</div>
								</div>
							</div>
						</div>

						{/* Content Column */}
						<div className="image-column col-lg-6">
							<div className="inner-column">
								<div className="image-box">
									<figure className="image"><img src={VideoImg} alt=""/></figure>
									<div className="video-box wow fadeIn">
										<h4 className="title">Watch our video</h4>
										<img className="arrow-icon" src={VideoIcon} alt=""/>
										<a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

        </>
    );
}

export default VideoHome4;