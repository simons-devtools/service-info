import React from 'react';
import './MultiplePageContent.modules.css';

const MultiplePageContent = ({ application }) => {
    const { name, category, image } = application;

    return (
        <div className="multiple-app-container">
            <div className="multiple-template-div">
                <img src={image} alt="" />
            </div>
            <div className="multiple-template-info">
                <h3>{name}</h3>
                <p>Category: {category}</p>
                <button className="ecommerce-btn">Live demo</button>
                <button className="ecommerce-btn">Features</button>
            </div>
        </div>
    );
};

export default MultiplePageContent;