import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import Tab from './Tab.jsx'
import Aboutus from "./About.jsx";
import Banner from './Banner.jsx'
import PageBanner from '../PageBanner.jsx';



function AboutUs() {

    return (
        <>
        <Header />

      <PageBanner title="About Us" breadcrumb="About" />

           
            <Banner/>
            <Aboutus/>
            <Tab/> 
            <Footer />
        </>
    );
}

export default AboutUs;