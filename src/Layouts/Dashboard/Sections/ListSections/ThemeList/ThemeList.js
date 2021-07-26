import React from 'react';
import '../ListStyles.modules.css';
import { useEffect } from 'react';
import { useState } from 'react';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import Options from './Options';
import View from './Modals/View';
import Edit from './Modals/Edit';
import Delete from './Modals/Delete';

const ThemeList = () => {
    const [themes, setThemes] = useState([]);
    const newThemes = themes.slice(0).reverse();
    const [singlePost, setSinglePost] = useState({});
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [optionValue, setOptionValue] = useState('');

    // Loaded the all themes:
    useEffect(() => {
        fetch('http://localhost:5000/themes')
            .then(response => response.json())
            .then(data => setThemes(data))
    }, [])

    // Options close and Modal open:
    const handleClose = (addedValue) => {
        if (addedValue === 'View') {
            setOptionValue(addedValue);
            const optionView = document.getElementById('optionView')
            optionView.style.display = 'block';
        }
        else if (addedValue === 'Edit') {
            setOptionValue(addedValue);
            const optionEdit = document.getElementById('optionEdit')
            optionEdit.style.display = 'block';
        }
        else if (addedValue === 'Delete') {
            setOptionValue(addedValue);
            const optionDelete = document.getElementById('optionDelete')
            optionDelete.style.display = 'block';
        }
        else {
            setOptionValue('');
        }
        setAnchorEl(null);
    };

    // Modal close:
    const modalClose = (addedValue) => {
        // console.log(addedValue);
        if (optionValue === 'View') {
            const optionView = document.getElementById('optionView')
            optionView.style.display = 'none';
        }
        else if (optionValue === 'Edit' || addedValue === 'Edit') {
            const optionEdit = document.getElementById('optionEdit')
            optionEdit.style.display = 'none';
        }
        else if (addedValue === 'Delete') {
            const optionDelete = document.getElementById('optionDelete')
            optionDelete.style.display = 'none';
        }
        else {
            setOptionValue('');
        }
    }

    return (
        <div>
            <h2>Themes list contents</h2>
            {/* Modal content below */}
            <div>
                <div id="optionView" className="option">
                    <strong onClick={modalClose} className="cross">X</strong>
                    <View
                        singleTheme={singlePost}
                        modalClose={modalClose}
                    />
                </div>
                <div id="optionEdit" className="option">
                    <strong onClick={modalClose} className="cross">X</strong>
                    <Edit
                        singleTheme={singlePost}
                        modalClose={modalClose}
                    />
                </div>
                <div id="optionDelete" className="option">
                    <Delete
                        singleThemeId={singlePost._id}
                        modalClose={modalClose}
                    />
                </div>
            </div>

            {/* Main content below */}
            <div className="list-container">
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
                        newThemes.map(theme =>
                            <tr key={theme._id}>
                                <td><img src={theme.image} alt="" /></td>
                                <td>{theme.name}</td>
                                <td>{theme.brand}</td>
                                <td>{theme.category}</td>
                                <td>${theme.price}</td>
                                <td><Options
                                    post={theme}
                                    setSinglePost={setSinglePost}
                                    handleClose={handleClose}
                                    anchorEl={anchorEl}
                                    setAnchorEl={setAnchorEl}
                                    open={open}
                                /></td>
                            </tr>
                        )
                    }
                </table>
            </div >
        </div>
    );
};

export default ThemeList;