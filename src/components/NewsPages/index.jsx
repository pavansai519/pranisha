import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeTwo/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import News from './News.jsx';

function NewsPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="News Grid"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/news', title: 'News' },
                ]}
            />
            <News />
            <Footer />
            <BackToTop />
        </>
    );
}

export default NewsPages;
