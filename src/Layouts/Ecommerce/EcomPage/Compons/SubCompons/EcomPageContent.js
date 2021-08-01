import React from 'react';
import { Link } from 'react-router-dom';
import './EcomPageContent.modules.css';
import DetailsIcon from '@material-ui/icons/Details';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const EcomPageContent = ({ application, handleFeatureBtn, handleBuyBtn }) => {
    const { name, price, brand, image, url } = application;

    // For the live demo:
    let element = url ? <a href={url}>Demo</a> : <Link to="/ecommerce">Demo</Link>;

    return (
        <div className="themes-container">
            <div className="themes">
                <img src={image} alt="" />
            </div>
            <div className="themes-wrapper">
                <div className="themes-info">
                    <strong>
                        <span>{name}</span>
                        <small>[{brand}]</small>
                    </strong>
                </div>
                <div className="handle-themes">
                    <button className="themes-btn">#{element}</button>
                    <button className="themes-btn" onClick={() => handleFeatureBtn(application)}>
                        <DetailsIcon style={{ verticalAlign: 'middle', fontSize: 'large' }} />Detail
                    </button>
                    <button className="themes-btn" onClick={() => handleBuyBtn(application)}>
                        <ShoppingCartOutlinedIcon style={{ verticalAlign: 'middle', fontSize: 'large' }} />Buy
                    </button>
                    <span className="price">${price}</span>
                </div>
            </div>
        </div>
    );
};

export default EcomPageContent;