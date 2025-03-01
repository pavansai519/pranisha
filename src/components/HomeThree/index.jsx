import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Footer from '../HomeOne/Footer.jsx';
import Banner from './Banner.jsx';
import Header from './Header.jsx';
import CTA from './CTA.jsx';
import About from './About.jsx';
import Video from './Video.jsx';
import Service from './Service.jsx';
import Team from './Team.jsx';
import Funfact from './Funfact.jsx';
import CTA2 from './CTA2.jsx';
import Testimonial from './Testimonial.jsx';
import Blog from './Blog.jsx';
import Clients from '../HomeOne/Clients.jsx';

function HomeThree() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>            
            <Header action={drawerAction.toggle} />
            <Banner />
            <CTA />
            <About />
            <Video />
            <Service />
            <Team />
            <Funfact />
            <CTA2 />
            <Testimonial />
            <Blog className="pb-0" />
            <Clients className="pt-0" />
            <Footer /> 
            <BackToTop />
        </>
    );
}

export default HomeThree;
