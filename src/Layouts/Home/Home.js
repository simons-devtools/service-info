import React from 'react';
import HAbout from './HSections/HAbout';
import Header from './HSections/Header';
import Services from './HSections/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <HAbout />
            <Services />
        </div>
    );
};

export default Home;