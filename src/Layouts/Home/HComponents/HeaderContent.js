import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../HStylies/HeaderContent.modules.css';

const HeaderContent = () => {
    return (
        <Container>
            <article>
                <h2>Normally to usefull and managements</h2>
                <h1>Welcome to my portfolio & business site</h1>
                <p>
                    It's my business website that will help you get started with new web applications. Would you <br /> 
                    like to create a new application for your portfolio and business site? Don't worry!
                </p>
                <Link to="/ecommerce">
                    <button type="button" className="outline-btn">Applications</button>
                </Link>
                <Link to="/blogs">
                    <button type="button" className="outline-btn">Blog posts</button>
                </Link>
            </article>
        </Container>
    );
};

export default HeaderContent;