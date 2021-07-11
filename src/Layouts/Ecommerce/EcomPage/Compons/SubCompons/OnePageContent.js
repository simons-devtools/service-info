import React from 'react';
import './OnePageContent.modules.css';

const OnePageContent = ({ application }) => {
    const { name, category, image } = application;

    return (
        <div className="single-app-container">
            <div className="single-template-div">
                <img src={image} alt="" />
            </div>
            <div className="single-template-info">
                <h3>{name}</h3>
                <p>Category: {category}</p>
                <button className="ecommerce-btn">Live demo</button>
                <button className="ecommerce-btn">Buy now</button>
            </div>
        </div>
    );
};

export default OnePageContent;