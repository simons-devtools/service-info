import React from 'react';
import './ThemeFeatures.modules.css';

const ThemeFeatures = ({ modalApp }) => {
    // console.log(modalApp);
    const { version, date, brand } = modalApp;

    return (
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
    );
};

export default ThemeFeatures;