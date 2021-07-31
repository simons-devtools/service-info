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
                <h2>My portfolio information</h2>
                <p>Please! follow my home page, header section 'applications' button and finally click the link and show more portfolio themes.....</p>
            </div>
        </div>
    );
};

export default Portfolio;