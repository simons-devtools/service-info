import React from 'react';
import './ModalStyles.modules.css';

const View = ({ singleTheme }) => {
    const { _id, name, price, category, image, date, detail, features, version, author, discount, brand } = singleTheme;

    return (
        <div className="view-body">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>ID: {_id}</p>
            <p>author: {author}</p>
            <p>category: {category}</p>
            <p>date: {date}</p>
            <p>Price: {price}</p>
            <p>Detail: {detail}</p>
            <p>Features: {features}</p>
            <p>Version: {version}</p>
            <p>Discount: {discount}</p>
            <p>Brand: {brand}</p>
        </div>
    );
};

export default View;