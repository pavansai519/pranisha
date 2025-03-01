import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeTwo/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Projects from './Projects.jsx';

function ProjectsPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="Projects"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/projects', title: 'Projects' },
                ]}
            />
            <Projects />
            <Footer />
            <BackToTop />
        </>
    );
}

export default ProjectsPages;
