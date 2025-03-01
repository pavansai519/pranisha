import React from 'react';
import { Link } from 'react-router-dom';

import NewsImg1 from '../../assets/images/resource/news-1.jpg';
import NewsImg2 from '../../assets/images/resource/news-2.jpg';
import NewsImg3 from '../../assets/images/resource/news-3.jpg';

const newsData = [
  {
    id: 1,
    title: "Innovative IT Solutions for Modern Businesses",
    date: "31 Aug, 2023",
    image: NewsImg1,
    link: "/news-details"
  },
  {
    id: 2,
    title: "Cutting-Edge IT Tools You Can't Miss",
    date: "30 Sep, 2023",
    image: NewsImg2,
    link: "/news-details"
  },
  {
    id: 3,
    title: "IT Solutions Propel Industry Leaders FWD",
    date: "31 Oct, 2023",
    image: NewsImg3,
    link: "/news-details"
  }
];

function BlogHomeOne({ className }) {   
    return (
        <>
            <section className={`news-section ${className || ''}`}>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">from the blog</span>
                        <h2>News & Articles</h2>
                    </div>
                    <div className="row">
                      {newsData.map((news) => (
                        <div key={news.id} className="news-block-three col-lg-4 col-md-6 wow fadeInUp">
                          <div className="inner-box">
                            <div className="image-box">
                              <figure className="image">
                                <Link to={news.link}>
                                  <img src={news.image} alt={news.title} />
                                </Link>
                              </figure>
                              <span className="date">{news.date}</span>
                            </div>
                            <div className="content-box">
                              <h4 className="title">
                                <Link to={news.link}>{news.title}</Link>
                              </h4>
                              <ul className="post-info">
                                <li><i className="fa fa-user"></i> by Admin</li>
                                <li className="comments"><i className="fa fa-comments"></i> comments</li>
                              </ul>
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

export default BlogHomeOne;
