import React from 'react';
import './EcomPageContent.modules.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DetailsIcon from '@material-ui/icons/Details';

const EcomPageContent = ({ application, handleFeatureBtn }) => {
    const { name, price, brand, image, url, code } = application;

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
                    <button className="themes-btn">
                        <ArrowBackIosIcon style={{ verticalAlign: 'middle', fontSize: 'small' }} />
                        <a href={code} target={`_blank`}>Code</a>
                        <ArrowForwardIosIcon style={{ verticalAlign: 'middle', fontSize: 'small' }} />
                    </button>
                    <button
                        className="themes-btn"
                        onClick={() => handleFeatureBtn(application)}>
                        <DetailsIcon style={{ verticalAlign: 'middle', fontSize: 'large' }} />Detail
                    </button>
                    <strong><small className="price">[ ${price} ]</small></strong>
                </div>
            </div>
        </div>
    );
};

export default EcomPageContent;