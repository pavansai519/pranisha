import React from 'react';
import { Link } from 'react-router-dom';

import NewsImg1 from '../../assets/images/resource/news-1.jpg';
import NewsImg2 from '../../assets/images/resource/news-2.jpg';
import NewsImg3 from '../../assets/images/resource/news-3.jpg';

function NewsGrid() {
  return (
    <>
    {/*  News Section */}
    <section>
      <div className="container pb-90">
        <div className="row">
          {[NewsImg1, NewsImg2, NewsImg3].map((img, index) => (
            <div className="news-block col-lg-4 col-md-6" key={index}>
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link to="/news-details"><img src={img} alt=""/></Link></figure>
                  <span className="date"><b>28</b> OCT</span>
                </div>
                <div className="content-box">
                  <ul className="post-info">
                    <li><i className="fa fa-user"></i> by Admin</li>
                    <li><i className="fa fa-tag"></i> Technology</li>
                  </ul>
                  <h4 className="title"><Link to="/news-details">Professional technology information & solutions are just like…</Link></h4>
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
    {/* End News Section */}
    </>
  );
}

export default NewsGrid;