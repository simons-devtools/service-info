import React from 'react';
import './MultiplePageContent.modules.css';

const MultiplePageContent = ({ application, handleFeatureBtn }) => {
    const { name, category, image } = application;

    return (
        <div
            className="multiple-app-container"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
            }}>
            <div className="multiple-app-info">
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

export default MultiplePageContent;