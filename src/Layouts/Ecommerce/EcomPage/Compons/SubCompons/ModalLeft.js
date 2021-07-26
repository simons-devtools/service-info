import React from 'react';
import './ModalLeft.modules.css';

const ModalLeft = ({ modalApp }) => {
    return (
        <div className="contents-body">
            <h5>{modalApp.detail}</h5>
        </div>
    );
};

export default ModalLeft;