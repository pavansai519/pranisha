import React from 'react';
import { Link } from 'react-router-dom';

import NewsImg1 from '../../assets/images/resource/news-1.jpg';
import NewsImg2 from '../../assets/images/resource/news-2.jpg';
import NewsImg3 from '../../assets/images/resource/news-3.jpg';

const newsData = [
  {
    image: NewsImg1,
    date: '28 OCT',
    title: 'Professional technology information & solutions are just like…',
    category: 'Technology',
    comments: 2,
    link: '/news-details',
  },
  {
    image: NewsImg2,
    date: '28 OCT',
    title: 'Professional technology information & solutions are just like…',
    category: 'Technology',
    comments: 2,
    link: '/news-details',
  },
  {
    image: NewsImg3,
    date: '28 OCT',
    title: 'Professional technology information & solutions are just like…',
    category: 'Technology',
    comments: 2,
    link: '/news-details',
  },
];

function BlogHome4({ className }) {   
    return (
        <>
          <section className={`news-section alternate ${className || ''}`}>
						<div className="bg-shape"></div>
						<div className="auto-container">
							<div className="sec-title text-center light">
								<span className="sub-title">from the blog</span>
								<h2>News & Articles</h2>
							</div>

							 <div className="row">
								{newsData.map((news, index) => (
								  <div key={index} className="news-block home4-style col-lg-4 col-md-6 wow fadeInUp">
								    <div className="inner-box">
								      <div className="image-box">
								        <figure className="image">
								          <Link to={news.link}>
								            <img src={news.image} alt={news.title} />
								          </Link>
								        </figure>
								        <span className="date"><b>{news.date.split(' ')[0]}</b> {news.date.split(' ')[1]}</span>
								      </div>
								      <div className="content-box">
								        <ul className="post-info">
								          <li><i className="fa fa-user"></i> by Admin</li>
								          <li><i className="fa fa-tag"></i> {news.category}</li>
								        </ul>
								        <h4 className="title"><Link to={news.link}>{news.title}</Link></h4>
								      </div>
								      <div className="bottom-box">
								        <Link to={news.link} className="read-more">
								          Read More <i className="fa fa-long-arrow-alt-right"></i>
								        </Link>
								        <div className="comments"><i className="fa fa-comments"></i> {news.comments}</div>
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

export default BlogHome4;
