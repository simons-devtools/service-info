import { Container } from '@material-ui/core';
import React from 'react';
import '../HStylies/HeaderContent.modules.css';

const HeaderContent = () => {
    return (
        <Container>
            <article>
                <h2>Normally to usefull and managements</h2>
                <h1>Welcome to our consultation center</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta facere repellat <br />
                    sed architecto dolorum est natus ex ipsum nemo animi dolore....
                </p>
                <button type="button" className="outline-btn">Applications</button>
                <button type="button" className="outline-btn">Websites</button>
            </article>
        </Container>
    );
};

export default HeaderContent;