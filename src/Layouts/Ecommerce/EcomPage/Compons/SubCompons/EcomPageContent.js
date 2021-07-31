import React from 'react';
import { Link } from 'react-router-dom';
import './EcomPageContent.modules.css';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import DetailsIcon from '@material-ui/icons/Details';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const EcomPageContent = ({ application, handleFeatureBtn, handleBuyBtn }) => {
    const { name, brand, image, url } = application;

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
                        <small>{brand}</small>
                    </strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor unde sit rerum cumque. Blanditiis ullam nam commodi in odio.....</p>
                </div>
                <div className="handle-themes">
                    <button className="themes-btn live">
                        <DesktopWindowsIcon style={{ verticalAlign: 'middle', fontSize: 'medium' }} /> {element}
                    </button>
                    <button
                        className="themes-btn more"
                        onClick={() => handleFeatureBtn(application)}
                    >
                        <DetailsIcon style={{ verticalAlign: 'middle', fontSize: 'medium' }} /> More details
                    </button>
                    <button
                        className="themes-btn shop"
                        onClick={() => handleBuyBtn(application)}
                    >
                        <ShoppingCartIcon style={{ verticalAlign: 'middle', fontSize: 'medium' }} /> Buy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EcomPageContent;