import React from 'react';
import HAbout from './HSections/HAbout';
import Header from './HSections/Header';
import Services from './HSections/Services';
import Projects from './HSections/Projects';
import Learn from './HSections/Learn';
import HBlogs from './HSections/HBlogs';
import Footer from '../Default/Footer/Footer';

const Home = () => {
    return (
        <main>
            <Header />
            <HAbout />
            <Services />
            <Projects />
            <Learn />
            <HBlogs />
            <Footer />
        </main>
    );
};

export default Home;