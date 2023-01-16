import React, { useContext } from 'react';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import AppFooter from '../components/AppFooter';

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