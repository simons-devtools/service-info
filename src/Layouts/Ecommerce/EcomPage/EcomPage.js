import React from 'react';
import { Container } from '@material-ui/core';
import OnePageApp from './Compons/OnePageApp';
import MultiplePageApp from './Compons/MultiplePageApp';
import EcommerceWebApp from './Compons/EcommerceWebApp';

const EcomPage = () => {
    return (
        <section className="commerce-wrapper">
            <Container>
                <div className="commerce-main-body">
                    <div className="single-page-app">
                        <OnePageApp />
                    </div>
                    <div className="multiple-page-app">
                        <MultiplePageApp />
                    </div>
                    <div className="ecommerce-web-app">
                        <EcommerceWebApp />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default EcomPage;