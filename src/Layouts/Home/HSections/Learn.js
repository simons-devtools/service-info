import React from 'react';
import '../HStylies/Learn.modules.css';
import { Container } from '@material-ui/core';

const Learn = () => {
    return (
        <section className="learn-more-wrapper">
            <Container>
                <div className="learn-more-body">
                    <h1>Anything is wrong or report me?</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum odio nemo <br />
                        repellendus minima beatae cumque, accusantium saepe cum assumenda.
                    </p>
                    <button className="learn-btn">comming soon</button>
                </div>
            </Container>
        </section>
    );
};

export default Learn;