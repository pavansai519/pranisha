import React from 'react';
import { Link } from 'react-router-dom';
import Abo from '../assets/images/resource/abo.jpg';

const highlights = [
    { img: Abo, text: 'LogoDesign', link: '/branding/logodesign' },
    { img: Abo, text: 'Packaging', link: '/branding/packaging' },
    { img: Abo, text: 'Harding', link: '/branding/hoarding' },
    { img: Abo, text: 'Seo', link: '/digitalmarketing/seo' },
    { img: Abo, text: 'Smm', link: '/digitalmarketing/smm' },
    { img: Abo, text: 'Lead Generation', link: '/digitalmarketing/lead-gen' },
    { img: Abo, text: 'Influencer Marketing', link: '/digitalmarketing/influencer' },
    { img: Abo, text: 'Wordpress Development', link: '/webdevelopment/wordpress' },
    { img: Abo, text: 'App Development', link: '/webdevelopment/wordpress' },
    { img: Abo, text: 'React Js', link: '/webdevelopment/wordpress' },
    { img: Abo, text: 'Shopify', link: '/e-commerce/shopify' },
    { img: Abo, text: 'Magento', link: '/e-commerce/magento' },
    { img: Abo, text: 'Woocommerce', link: '/e-commerce/woocommerce' },
    { img: Abo, text: 'Ai', link: '/ai' }
];

function HighlightsSection() {
    return (
        <div className="highlights-section">
        <div className="heading-container">
            <span className="sub-title">WORK HIGHLIGHT</span>
            <h2 className="main-title">
                Here's Highlight of What You'll Get <br /> with Your Business Website:
            </h2>
        </div>
    
        <div className="highlights-container">
            {highlights.map((item, index) => (
                <Link key={index} to={item.link} className="highlight-item">
                    <img src={item.img} alt={item.text} className="circular-image" />
                    <span className="highlight-text">{item.text}</span>
                </Link>
            ))}
        </div>
    </div>
    
    );
}


export default HighlightsSection;
