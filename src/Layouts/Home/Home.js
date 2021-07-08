import React from 'react';
import HAbout from './HSections/HAbout';
import Header from './HSections/Header';
import Services from './HSections/Services';
import Projects from './HSections/Projects';
import Learn from './HSections/Learn';
import HBlogs from './HSections/HBlogs';

const Home = () => {
    return (
        <main>
            <Header />
            <HAbout />
            <Services />
            <Projects />
            <Learn />
            <HBlogs />
        </main>
    );
};

export default Home;