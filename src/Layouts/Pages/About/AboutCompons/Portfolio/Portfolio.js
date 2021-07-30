import React from 'react';
import './Portfolio.modules.css';
import image from '../../../../../Assets/About-me/portfolio.jpg';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-img">
                <img src={image} alt="" />
            </div>
            <div className="portfolio-info">
                <h2>This is portfolio info</h2>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                    <li>Four</li>
                    <li>Five</li>
                </ul>
            </div>
        </div>
    );
};

export default Portfolio;