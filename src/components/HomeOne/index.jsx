import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BackToTop from '../BackToTop.jsx';
import Footer from './Footer.jsx';
import Banner from './Banner.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import Testimonial from './Testimonial.jsx';
import Header from './Header.jsx';
import ClientsHomeOne from './Clients.jsx';
import PortfolioGrid from './PortfolioGrid.jsx';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 3000,  // animation duration
            offset: 120,     // start animation 120px before section enters viewport
            once: true,      // animate only once
            easing: 'ease-in-out'
        });
    }, []);

    return (
        <>
            <Header action={drawerAction.toggle} />

            <Banner />
            <About />
            <Service />
            <PortfolioGrid />
            <ClientsHomeOne />
            <Testimonial />
            <Footer /> 
            <BackToTop />
        </>
    );
}

export default HomeOne;
