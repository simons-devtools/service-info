import React from 'react';
import './EcomPageContent.modules.css';

const EcomPageContent = ({ application, handleFeatureBtn }) => {
    const { name, category, image } = application;

    return (
        <div
            className="ecom-app-container"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
            }}>
            <div className="ecom-app-info">
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

export default EcomPageContent;