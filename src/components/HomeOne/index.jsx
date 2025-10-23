import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";

import Footer from './Footer.jsx';
import Banner from './Homebanner.jsx';
import Service from './Service.jsx';
import Testimonial from './Testimonial.jsx';
import Header from './Header.jsx';
import ClientsHomeOne from './Clients.jsx';
import PortfolioGrid from './PortfolioGrid.jsx';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

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
         <Helmet>
        <title>Pranishaa | Creative Digital Marketing Agency</title>
        <meta
          name="description"
          content="Pranishaa helps businesses grow with innovative digital marketing, branding, and creative design solutions tailored to your brand goals."
        />
        <meta
          name="keywords"
          content="Digital Marketing, Branding Agency, Web Design, SEO, Social Media, PPC, Pranishaa"
        />
        <meta property="og:title" content="Pranishaa | Creative Digital Marketing Agency" />
        <meta property="og:description" content="Transform your business with Pranishaa's data-driven marketing and creative branding strategies." />
        <meta property="og:image" content="https://pranishaa.com/images/og-home.jpg" />
        <meta property="og:url" content="https://pranishaa.com/" />
      </Helmet>
            <Header action={drawerAction.toggle} />
            <Banner />
            <Service />
            <PortfolioGrid />
            <ClientsHomeOne />
            <Testimonial />
            <Footer /> 
        </>
    );
}

export default HomeOne;
