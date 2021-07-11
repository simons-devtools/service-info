import React from 'react';
import { Container } from '@material-ui/core';
import OnePageApp from './Compons/OnePageApp';
import MultiplePageApp from './Compons/MultiplePageApp';
import EcommerceWebApp from './Compons/EcommerceWebApp';

const EcomPage = ({ applications }) => {
    return (
        <Container>
            <OnePageApp applications={applications} />
            <MultiplePageApp applications={applications} />
            <EcommerceWebApp applications={applications} />
        </Container>
    );
};

export default EcomPage;