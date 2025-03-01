import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeTwo/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Team from './Team.jsx';

function TeamGrid() {

    return (
        <>
        <Header />
            <PageTitle
                title="Team Grid"
                breadcrumb={[
                    { link: '', title: 'Home' },
                    { link: '/team', title: 'Team Grid' },
                ]}
            />
            <Team />
            <Footer />
            <BackToTop />
        </>
    );
}

export default TeamGrid;
