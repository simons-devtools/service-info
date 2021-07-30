import React from 'react';
import './Experience.modules.css';
import image from '../../../../../Assets/About-me/experience.jpg';

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="experience-img">
                <img src={image} alt="" />
            </div>
            <div className="experience-info">
                <h2>This is experience info</h2>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                    <li>Four</li>
                    <li>Five</li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;