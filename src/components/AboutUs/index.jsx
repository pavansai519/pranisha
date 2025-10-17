import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import Tab from './Tab.jsx'
import Aboutus from "./About.jsx";
import Banner from './Banner.jsx'
import PageBanner from '../PageBanner.jsx';
import { Helmet } from "react-helmet-async";



function AboutUs() {

    return (
        <>
         <Helmet>
                <title>about Us | Pranishaa - Let's Build Something Amazing</title>
                <meta
                  name="description"
                  content="Get in touch with Pranishaa for digital marketing, branding, and web development solutions. We're here to turn your ideas into impact."
                />
                <meta
                  name="keywords"
                  content="Contact Pranishaa, Digital Marketing Agency, Branding, Web Design, SEO Help"
                />
                <meta property="og:title" content="Contact Pranishaa" />
                <meta property="og:description" content="Reach out to Pranishaa for expert marketing, branding, and design services that drive business success." />
                <meta property="og:image" content="https://pranishaa.com/images/og-contact.jpg" />
                <meta property="og:url" content="https://pranishaa.com/contact" />
              </Helmet>
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