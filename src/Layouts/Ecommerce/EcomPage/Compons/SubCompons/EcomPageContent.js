import React from 'react';
import './EcomPageContent.modules.css';

const EcomPageContent = ({ application }) => {
    const { name, category, image } = application;

    return (
        <div className="ecom-app-container">
            <div className="ecom-template-div">
                <img src={image} alt="" />
            </div>
            <div className="ecom-template-info">
                <h3>{name}</h3>
                <p>Category: {category}</p>
                <button className="ecommerce-btn">Live demo</button>
                <button className="ecommerce-btn">Features</button>
            </div>
        </div>
    );
};

export default EcomPageContent;