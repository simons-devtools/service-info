import React from 'react';
import HAbout from './HSections/HAbout';
import Header from './HSections/Header';
import Services from './HSections/Services';
import Projects from './HSections/Projects';

const Home = () => {
    return (
        <div>
            <Header />
            <HAbout />
            <Services />
            <Projects />
        </div>
    );
};

export default Home;