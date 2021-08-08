import React from 'react';
import './EcomModal.modules.css';
import ThemeInfo from './SubCompons/ThemeInfo';
import ThemeFeatures from './SubCompons/ThemeFeatures';
import ThemeCart from './SubCompons/ThemeCart';

const EcomModal = ({ modalApp, handleBuyBtn }) => {
    const { name, brand, date, version, image } = modalApp;

    return (
        <div className="modal-app-container">
            <div className="modal-app-wrapper">
                {/* Modal left contents */}
                <div className="modal-app-contents">
                    <div className="content-header">
                        <h1>{name} template</h1>
                        <h4>
                            Brand: {brand} |
                            <small> Released: {date} |</small>
                            <small> Version: {version}</small>
                        </h4>
                        <img src={image} alt="" />
                    </div>
                    <div className="content-info">
                        <ThemeInfo modalApp={modalApp} />
                    </div>
                </div>

                {/* Modal right contents */}
                <div className="modal-app-features">
                    <ThemeFeatures modalApp={modalApp} />
                    <ThemeCart
                        modalApp={modalApp}
                        handleBuyBtn={handleBuyBtn}
                    />
                </div>
            </div>
        </div>
    );
};

export default EcomModal;