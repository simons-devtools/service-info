import React from 'react';
import { Container } from '@material-ui/core';
import OnePageApp from './Compons/OnePageApp';
import MultiplePageApp from './Compons/MultiplePageApp';
import EcommerceWebApp from './Compons/EcommerceWebApp';

const EcomPage = () => {
    return (
        <Container>
            <OnePageApp />
            <MultiplePageApp />
            <EcommerceWebApp />
        </Container>
    );
};

export default EcomPage;