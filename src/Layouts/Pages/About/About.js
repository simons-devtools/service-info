import React from 'react';
import Header2 from '../../Default/Header2/Header2';
import Footer from '../../Default/Footer/Footer';
import { Container } from '@material-ui/core';
import AboutSub from './AboutSub';

const About = () => {
    return (
        <div>
            <div><Header2 /></div>
            <Container><AboutSub /></Container>
            {/* <Footer /> */}
        </div>
    );
};

export default About;