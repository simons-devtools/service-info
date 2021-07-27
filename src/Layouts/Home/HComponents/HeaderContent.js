import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../HStylies/HeaderContent.modules.css';

const HeaderContent = () => {
    return (
        <Container>
            <article>
                <h2>Normally to usefull and managements</h2>
                <h1>Welcome to my personal business site</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta facere repellat <br />
                    sed architecto dolorum est natus ex ipsum nemo animi dolore....
                </p>
                <Link to="/ecommerce">
                    <button type="button" className="outline-btn">My Applications</button>
                </Link>
                <Link to="/blogs">
                    <button type="button" className="outline-btn">Read my blog</button>
                </Link>
            </article>
        </Container>
    );
};

export default HeaderContent;