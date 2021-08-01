import React from 'react';
import './ThemeInfo.modules.css';

const ThemeInfo = ({ modalApp }) => {
    return (
        <div className="contents-body">
            <h5>{modalApp.detail}</h5>
        </div>
    );
};

export default ThemeInfo;