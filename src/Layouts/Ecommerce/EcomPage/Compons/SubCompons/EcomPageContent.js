import React from 'react';
import './EcomPageContent.modules.css';
import DetailsIcon from '@material-ui/icons/Details';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const EcomPageContent = ({ application, handleFeatureBtn, handleBuyBtn }) => {
    const { name, price, brand, image, url } = application;

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
                    <button className="themes-btn">[<a href={url} target={`_blank`}>Demo</a>]</button>
                    <button
                        className="themes-btn"
                        onClick={() => handleFeatureBtn(application)}>
                        <DetailsIcon style={{ verticalAlign: 'middle', fontSize: 'large' }} />Detail
                    </button>
                    <button
                        className="themes-btn"
                        onClick={() => handleBuyBtn(application)}>
                        <ShoppingCartOutlinedIcon style={{ verticalAlign: 'middle', fontSize: 'large' }} />Buy
                    </button>
                    <strong><small className="price">[ ${price} ]</small></strong>
                </div>
            </div>
        </div>
    );
};

export default EcomPageContent;