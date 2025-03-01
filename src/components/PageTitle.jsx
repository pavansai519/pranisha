import React from 'react';
import { Link } from 'react-router-dom';
import PageTitleBg from '../assets/images/background/page-title.jpg'; 

function HeroPageTitle({ title, breadcrumb = [] }) {
    return (
        <>
            
        <section className="page-title" style={{ backgroundImage: `url(${PageTitleBg})` }}>
            <div className="auto-container">
                <div className="title-outer">
                    <h1 className="title">{title}</h1>
                    <ul className="page-breadcrumb">
                        {breadcrumb.map((value) => (
                            <li key={Math.random()} className="breadcrumb-item">
                                <Link to={value.link}>{value.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
}

export default HeroPageTitle;
  