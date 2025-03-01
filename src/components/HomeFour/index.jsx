import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Footer from '../HomeOne/Footer.jsx';
import Banner from './Banner.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Project from './Project.jsx';
import Video from './Video.jsx';
import Funfact from './Funfact.jsx';
import Team from './Team.jsx';
import Testimonial from './Testimonial.jsx';
import Contact from '../HomeTwo/Contact.jsx';
import Feature from './Feature.jsx';
import Blog from './Blog.jsx';
import Location from './Location.jsx';

function Home4() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>            
            <Header action={drawerAction.toggle} />
            <Banner />
            <About />
            <Project />
            <Video />
            <Funfact />
            <Team />
            <Testimonial />
            <Contact />
            <Feature />
            <Blog />
            <Location />
            <Footer /> 
            <BackToTop />
        </>
    );
}

export default Home4;
