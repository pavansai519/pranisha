import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import VideoImg from '../../assets/images/resource/video-img.jpg';

function VideoHomeThree({ className }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className={`video-section ${className || ''}`}>
				<div className="auto-container">
					<div className="outer-box">
						<div className="title-box text-center">
							<h3 className="title">Trusted IT Solution<br/> & Service Agency</h3>
						<div className="text">Web designing in a powerful way of just not an only professions, however, in a passion <br/>for our Company. We have to a tendency to believe</div>
						</div>
						<div className="video-box wow fadeInUp">
							<figure className="image"><img src={VideoImg} alt=""/></figure>
							<div className="content">
		                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play"></i></a>
								<h2 className="title">Watch Video</h2>
							</div>
						</div>
					</div>
				</div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

        </>
    );
}

export default VideoHomeThree;
