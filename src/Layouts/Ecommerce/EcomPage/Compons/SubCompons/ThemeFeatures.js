import React from 'react';
import './ThemeFeatures.modules.css';

const ThemeFeatures = ({ modalApp }) => {
    const { version, date, brand, react, relaced } = modalApp;

    // Themes features bundle:
    const themeFeatures = [
        { id: 1, name: 'Theme version', value: version },
        { id: 2, name: 'React version', value: react },
        { id: 3, name: 'Last update', value: relaced },
        { id: 4, name: 'Created on', value: date },
        { id: 5, name: 'Theme brand', value: brand },
    ];

    return (
        <div className="themes-features">
            <ul>
                {
                    themeFeatures.map(feature =>
                        <li key={feature.id}>
                            <span>{feature.name}</span>
                            <span className="feature">{feature.value}</span>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default ThemeFeatures;