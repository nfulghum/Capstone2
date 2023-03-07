import React, { useContext } from 'react';
import ProductHero from '../Product/ProductHero';
import ProductValues from '../Product/ProductValues';
import ProductHowItWorks from '../Product/ProductHowItWorks';
import AppFooter from './AppFooter';

const Home = () => {
    return (
        <>
            <ProductHero />
            <ProductValues />
            <ProductHowItWorks />
            <AppFooter />
        </>
    )
}

export default Home;