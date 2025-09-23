import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BackToTop from '../BackToTop.jsx';
import Footer from './Footer.jsx';
import Banner from './Banner.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import TeamSection from './Team.jsx';
import Testimonial from './Testimonial.jsx';
import Contact from './Contact.jsx';
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

            <div data-aos="fade-up"><Banner /></div>
            <div data-aos="fade-up" data-aos-delay="100"><About /></div>
            <div data-aos="fade-up" data-aos-delay="200"><Service /></div>
            <div data-aos="fade-up" data-aos-delay="300"><PortfolioGrid /></div>
            <div data-aos="fade-up" data-aos-delay="400"><ClientsHomeOne /></div>
            <div data-aos="fade-up" data-aos-delay="500"><TeamSection /></div>
            <div data-aos="fade-up" data-aos-delay="600"><Testimonial /></div>
            {/* <div data-aos="fade-up" data-aos-delay="700"><Contact /></div> */}

            <Footer /> 
            <BackToTop />
        </>
    );
}

export default HomeOne;
