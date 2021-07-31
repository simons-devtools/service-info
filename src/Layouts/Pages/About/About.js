import React from 'react';
import Header2 from '../../Default/Header2/Header2';
import { Container } from '@material-ui/core';
import AboutSub from './AboutSub';

const About = () => {
    return (
        <div>
            <div><Header2 /></div>
            <Container><AboutSub /></Container>
        </div>
    );
};

export default About;