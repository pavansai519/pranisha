import React from 'react';
import { Link } from 'react-router-dom';

import ProjectImg1 from '../../assets/images/resource/project-1.jpg';
import ProjectImg2 from '../../assets/images/resource/project-2.jpg';
import ProjectImg3 from '../../assets/images/resource/project-3.jpg';
import ProjectImg4 from '../../assets/images/resource/project-4.jpg';

function Projects() {
    return (
        <>
        <section>
          <div className="container">
            <div className="row g-3">
              {[ProjectImg1, ProjectImg2, ProjectImg3, ProjectImg4, ProjectImg1, ProjectImg2].map((img, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="project-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <Link to="/project-details" className="lightbox-image"><img src={img} alt="Project"/></Link>
                        </figure>
                        <Link to="/project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                      </div>
                      <div className="content-box">
                        <h4 className="title"><Link to="/project-details">Tech Solutions</Link></h4>
                        <span className="cat">DESIGN / IDEAS</span>
                      </div>
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

export default Projects;
