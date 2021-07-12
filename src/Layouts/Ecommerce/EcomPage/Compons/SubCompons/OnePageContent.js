import React from 'react';
import './OnePageContent.modules.css';

const OnePageContent = ({ application, handleFeatureBtn }) => {
    const { name, category, image } = application;

    return (
        <div
            className="single-app-container"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
            }}>
            <div className="single-app-info">
                <h3>{name}</h3>
                <p>Category: {category}</p>
                <button className="ecommerce-btn">Live demo</button>
                <button
                    onClick={() => handleFeatureBtn(application)}
                    className="ecommerce-btn">Features
                </button>
            </div>
        </div>
    );
};

export default OnePageContent;