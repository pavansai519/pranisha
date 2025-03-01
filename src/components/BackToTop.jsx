import React, { useEffect, useState } from 'react';

function BackToTop({ className = '' }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > window.innerHeight);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        isVisible && (
            <button
                className={`scroll-to-top scroll-to-target ${className}`} onClick={scrollToTop}
            >
                <i className="fa fa-angle-up" />
            </button>
        )
    );
}

export default BackToTop;