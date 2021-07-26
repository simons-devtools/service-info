import React from 'react';
import { Link } from 'react-router-dom';
import './EcomPageContent.modules.css';

const EcomPageContent = ({ application, handleFeatureBtn }) => {
    const { name, brand, image, url } = application;

    // For the live demo:
    let element = url ? <a href={url} className="hover-btn">Live demo</a> : <Link to="/ecommerce" className="hover-btn">No demo</Link>;

    return (
        <div
            className="ecom-app-container"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
            }}>
            <div className="ecom-app-info">
                <h3>{name}</h3>
                <p>Brand: {brand}</p>
                {element}
                <button
                    onClick={() => handleFeatureBtn(application)}
                    className="hover-btn">Features
                </button>
            </div>
        </div>
    );
};

export default EcomPageContent;