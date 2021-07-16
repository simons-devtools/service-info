import React from 'react';
import './EcomModal.modules.css';
import ModalLeft from './SubCompons/ModalLeft';
import ModalRight from './SubCompons/ModalRight';

const EcomModal = ({ modalApp, handleBuyBtn }) => {
    const { name, category, image } = modalApp;

    return (
        <div className="modal-app-container">
            <div className="modal-app-wrapper">
                {/* Modal left contents */}
                <div className="modal-app-contents">
                    <div className="content-header">
                        <h1>{name}</h1>
                        <h4>Category: {category} | <small>version 1.5.2</small></h4>
                        <img src={image} alt="" />
                        <button className="modal-btn">Add cart</button>
                        <button onClick={() => handleBuyBtn(modalApp)} className="modal-btn">Buy now</button>
                    </div>
                    {/* ..1 + 1.. */}
                    <div className="content-info">
                        <h2>{name} contents sample</h2>
                        <ModalLeft />
                    </div>
                </div>


                {/* Modal right contents */}
                <div className="modal-app-features">
                    <div className="feature-header">
                        <p><span className="strong">Price: </span><span>$350</span></p>
                        <p><span className="strong">Support: </span><span>Any time</span></p>
                        <p><span className="strong">Demand: </span><span>high athurized</span></p>
                        <p><span className="strong">Guarranty: </span><span>Life time</span></p>
                    </div>
                    {/* ..1 + 1.. */}
                    <div className="feature-info">
                        <ModalRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcomModal;