import React from 'react';
import HAbout from './HSections/HAbout';
import Header from './HSections/Header';
import Services from './HSections/Services';
import Projects from './HSections/Projects';
import Learn from './HSections/Learn';

const Home = () => {
    return (
        <main>
            <Header />
            <HAbout />
            <Services />
            <Projects />
            <Learn />
        </main>
    );
};

export default Home;