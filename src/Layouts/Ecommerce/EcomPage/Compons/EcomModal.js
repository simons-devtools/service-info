import React from 'react';
import './EcomModal.modules.css';
import ModalLeft from './SubCompons/ModalLeft';
import ModalRight from './SubCompons/ModalRight';

const EcomModal = ({ modalApp, handleBuyBtn }) => {
    const { name, price, brand, date, version, image, discount } = modalApp;

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
                        <button className="order-btn">Theme source code</button>
                    </div>
                    {/* ..1 + 1.. */}
                    <div className="content-info">
                        {/* <h2>{name} contents details</h2> */}
                        <ModalLeft modalApp={modalApp} />
                    </div>
                </div>

                {/* Modal right contents */}
                <div className="modal-app-features">
                    {/* <button className="order-btn">Theme source code</button> */}
                    <div className="themes-features">
                        <ul>
                            <li>
                                <span>Theme version</span>
                                <span className="feature">{version}</span>
                            </li>
                            <li>
                                <span>React version</span>
                                <span className="feature">4.6 and 5.0.1</span>
                            </li>
                            <li>
                                <span>Last update</span>
                                <span className="feature">Jun 01, 2021</span>
                            </li>
                            <li>
                                <span>Created on</span>
                                <span className="feature">{date}</span>
                            </li>
                            <li>
                                <span>Theme brand</span>
                                <span className="feature">{brand}</span>
                            </li>
                        </ul>
                    </div>
                    {/* ............. */}
                    <div className="themes-cart">
                        {/* <button className="order-btn">Theme demo link</button> */}
                        <ul>
                            <li>
                                <strong>Price: </strong>
                                <span>${price}</span>
                            </li>
                            <li>
                                <strong>Discount: </strong>
                                <span>{discount}%</span>
                            </li>
                            <li>
                                <strong>Sub total: </strong>
                                <span>${price - price * discount / 100}</span>
                            </li>
                        </ul>
                        <button
                            onClick={() => handleBuyBtn(modalApp)}
                            className="order-btn">Procced to checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcomModal;