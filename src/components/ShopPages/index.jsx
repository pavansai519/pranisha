import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Products from './Products.jsx';

function ShopPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="Shop"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/products', title: 'Products' },
                ]}
            />
            <Products />
            <Footer />
            <BackToTop />
        </>
    );
}

export default ShopPages;
