import React from 'react';
import { Link } from 'react-router-dom';
import './pranisha-okai.css'

// Define 4 projects with specific image dimensions to match the layout
const projects = [
    { image: 'https://picsum.photos/seed/portrait1/600/800', title: 'Project One', category: 'Branding' },      // Tall
    { image: 'https://picsum.photos/seed/landscape1/800/600', title: 'Project Two', category: 'Web Dev' },     // Wide
    { image: 'https://picsum.photos/seed/square1/600/600', title: 'Project Three', category: 'UI/UX' },        // Square
    { image: 'https://picsum.photos/seed/portrait2/600/800', title: 'Project Four', category: 'E-commerce' }, // Tall
];

function PortfolioGrid() {
    return (
        <section id="portfolio" className="portfolio-grid-section">
            <div className="container">
                <div className="portfolio-grid-container">
                    {/* Left Column */}
                    <div className="portfolio-column-left">
                        <div className="portfolio-header">
                            <span className="sub-title">Recent Work</span>
                            <h2>Portfolio</h2>
                            <p>Take a look at our latest design projects. From our renowned clients, we have worked on various houses for latest multitasking.</p>
                        </div>
                        <div className="portfolio-card">
                            <img src={projects[0].image} alt={projects[0].title} />
                            <div className="card-info">
                                <h3>{projects[0].title}</h3>
                                <p>{projects[0].category}</p>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <img src={projects[2].image} alt={projects[2].title} />
                            <div className="card-info">
                                <h3>{projects[2].title}</h3>
                                <p>{projects[2].category}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="portfolio-column-right">
                        <div className="portfolio-card">
                            <img src={projects[1].image} alt={projects[1].title} />
                            <div className="card-info">
                                <h3>{projects[1].title}</h3>
                                <p>{projects[1].category}</p>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <img src={projects[3].image} alt={projects[3].title} />
                            <div className="card-info">
                                <h3>{projects[3].title}</h3>
                                <p>{projects[3].category}</p>
                            </div>
                        </div>
                        <div className="view-all-button-wrapper">
                            <Link to="/portfolio" className="view-all-btn">View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioGrid;