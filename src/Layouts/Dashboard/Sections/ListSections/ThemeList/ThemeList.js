import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../ListStyles.modules.css';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ThemeList = () => {
    const [themes, setThemes] = useState([]);

    // Loaded the all themes:
    useEffect(() => {
        fetch('http://localhost:5000/themes')
            .then(response => response.json())
            .then(data => setThemes(data))
    }, [])
    // console.log(themes);

    return (
        <div className="list-container">
            <h2>Themes list contents</h2>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th><SettingsEthernetIcon
                        style={{ verticalAlign: 'middle' }} />
                    </th>
                </tr>
                {
                    themes.map(theme =>
                        <tr>
                            <td><img src={theme.image} alt="" /></td>
                            <td>{theme.name}</td>
                            <td>{theme.brand}</td>
                            <td>{theme.category}</td>
                            <td>${theme.price}</td>
                            <td><MoreVertIcon /></td>
                        </tr>
                    )
                }
            </table>
        </div >
    );
};

export default ThemeList;