import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Footer from '../HomeOne/Footer.jsx';
import Banner from './Banner.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import Service2 from './Service2.jsx';
import Testimonial from './Testimonial.jsx';
import Pricing from './Pricing.jsx';
import Contact from './Contact.jsx';
import Project from './Project.jsx';
import Location from './Location.jsx';
import Map from './Map.jsx';
import Clients from '../HomeOne/Clients.jsx';
import Blog from './Blog.jsx';

function HomeTwo() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>            
            <Header action={drawerAction.toggle} />
            <Banner />
            <Service />
            <About />
            <Service2 />
            <Contact />
            <Project />
            <Pricing />
            <Testimonial />
            <Clients />
            <Blog />
            <Location />
            <Map />
            <Footer /> 
            <BackToTop />
        </>
    );
}

export default HomeTwo;
