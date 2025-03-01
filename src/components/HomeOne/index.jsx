import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Footer from './Footer.jsx';
import Banner from './Banner.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import Funfact from './Funfact.jsx';
import Project from './Project.jsx';
import WCU from './WCU.jsx';
import Team from './Team.jsx';
import CTA from './CTA.jsx';
import Testimonial from './Testimonial.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';
import Clients from './Clients.jsx';
import Faq from './Faq.jsx';
import CTA2 from './CTA2.jsx';
import Header from './Header.jsx';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <About />
            <Service />
            <Project />
            <Funfact />
            <WCU />
            <Team />
            <CTA />
            <Testimonial />
            <Clients />
            <Faq />
            <Blog />
            <Contact />
            <CTA2 />
            <Footer /> 
            <BackToTop />
        </>
    );
}

export default HomeOne;