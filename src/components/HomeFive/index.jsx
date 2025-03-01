import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Footer from '../HomeOne/Footer.jsx';
import Banner from './Banner.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import Skill from './Skill.jsx';
import CTA from './CTA.jsx';
import CTA2 from './CTA2.jsx';
import CTA3 from './CTA3.jsx';
import Tab from './Tab.jsx';
import Project from './Project.jsx';
import WHC from './WHC.jsx';
import Contact from './Contact.jsx';
import Pricing from '../HomeTwo/Pricing.jsx';
import Map from '../HomeTwo/Map.jsx';
import Team from './Team.jsx';
import Blog from '../HomeThree/Blog.jsx';

function Home5() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <About />
            <Service />
            <Skill />
            <CTA />
            <CTA2 />
            <Tab />
            <Project />
            <WHC />
            <Contact />
            <Pricing className="pt-120" />
            <Team />
            <Blog />
            <CTA3 />
            <Map className="alternate pull-up" />
            <Footer />
            <BackToTop />
        </>
    );
}

export default Home5;
