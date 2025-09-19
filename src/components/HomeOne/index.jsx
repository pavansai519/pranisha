import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Footer from './Footer.jsx';
import Banner from './Banner.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import TeamSection from './Team.jsx';
// import Faq from './Faq.jsx';
import Testimonial from './Testimonial.jsx';
// import Contact2 from './CTA2.jsx';
import Contact from './Contact.jsx';
// import Blog from './Blog.jsx';
// import Location from './Location.jsx';
import Header from './Header.jsx';
import ClientsHomeOne from './Clients.jsx';
import PortfolioGrid from './PortfolioGrid.jsx';


function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <About />
            <Service/>
            <PortfolioGrid/>
            <ClientsHomeOne/>
            <TeamSection/>
            {/* <Faq/> */}
            <Testimonial />
            {/* <Contact/> */}
            {/* <Blog/> */}
            {/* <Location/> */}
            {/* <Contact2/> */}
            
            <Footer /> 
            <BackToTop />
        </>
    );
}

export default HomeOne;