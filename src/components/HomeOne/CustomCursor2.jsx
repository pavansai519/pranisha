import React, { useState, useEffect } from 'react';

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Find all portfolio cards and add event listeners
        const portfolioCards = document.querySelectorAll('.portfolio-card');
        portfolioCards.forEach(card => {
            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);
        });

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup function
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            portfolioCards.forEach(card => {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []); // Empty dependency array means this runs once on mount

    const cursorStyle = {
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isHovering ? 1 : 0,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0})`,
    };

    return (
        <div className="custom-cursor" style={cursorStyle}>
            View
        </div>
    );
}

export default CustomCursor;