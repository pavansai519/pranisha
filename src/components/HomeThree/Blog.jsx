import React from 'react';
import { Link } from 'react-router-dom';

import NewsImg1 from '../../assets/images/resource/news-1.jpg';
import NewsImg2 from '../../assets/images/resource/news-2.jpg';
import NewsImg3 from '../../assets/images/resource/news-3.jpg';

const blogh3 = [
  { id: 1, img: NewsImg1, title: "Professional technology information & solutions are just like… ", poster: "by Admin", cmnt: "Technology" },
  { id: 2, img: NewsImg2, title: "Professional technology information & solutions are just like… ", poster: "by Admin", cmnt: "Technology" },
  { id: 3, img: NewsImg3, title: "Professional technology information & solutions are just like…", poster: "by Admin", cmnt: "Technology" },
];

function BlogHomeThree({ className }) {   
    return (
        <>
            <section className={`news-section ${className || ''}`}>
				<div className="auto-container">
					<div className="sec-title text-center">
						<span className="sub-title">from the blog</span>
						<h2>News & Articles</h2>
					</div>

					<div className="row">
	                    {blogh3.map((blogh3) => (
							<div key={blogh3.id} className="news-block col-lg-4 col-md-6 wow fadeInUp">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image"><Link to="/news-details"><img src={blogh3.img} alt=""/></Link></figure>
										<span className="date"><b>28</b> OCT</span>
									</div>
									<div className="content-box">
										<ul className="post-info">
											<li><i className="fa fa-user"></i> {blogh3.poster}</li>
											<li><i className="fa fa-tag"></i> {blogh3.cmnt}</li>
										</ul>
										<h4 className="title"><Link to="/news-details">{blogh3.title}</Link></h4>
									</div>
									<div className="bottom-box">
										<Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
										<div className="comments"><i className="fa fa-comments"></i> 02</div>
									</div>
								</div>
							</div>
	                    ))}
					</div>
				</div>
            </section>
        </>
    );
}

export default BlogHomeThree;
