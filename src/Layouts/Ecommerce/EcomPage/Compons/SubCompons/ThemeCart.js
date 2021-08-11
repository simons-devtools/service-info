import React from 'react';
import './ThemeCart.modules.css';

const ThemeCart = ({ modalApp, handleBuyBtn }) => {
    const { price, discount, brand } = modalApp;

    return (
        <div className="themes-cart">
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
            {
                brand && brand.length > 0 && brand === 'Available' ? <button
                    onClick={() => handleBuyBtn(modalApp)}
                    className="order-btn">Procced to checkout
                </button> :
                    <button
                        className="order-btn unavailable">Theme Not Available
                    </button>
            }
        </div>
    );
};

export default ThemeCart;