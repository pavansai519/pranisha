import React from 'react';
import { Link } from 'react-router-dom';
import Abo from '../assets/images/resource/abo.jpg';


function HeroPageTitle({ title, breadcrumb = [], description }) {
    return (
        <section className="page-title" style={{ backgroundImage: `url($)` }}>
            <div className="auto-container">
                <div className="title-outer">
                    <h1 className="title">{title}</h1>
                    
                    {description && <p className="page-description">{description}</p>}

                    <ul className="page-breadcrumb">
                        {breadcrumb.map((value) => (
                            <li key={value.link} className="breadcrumb-item">
                                <Link to={value.link}>{value.title}</Link>
                            </li>
                        ))}
                    </ul>
                    
                </div>
            </div>
        </section>
    );
}

export default HeroPageTitle;
