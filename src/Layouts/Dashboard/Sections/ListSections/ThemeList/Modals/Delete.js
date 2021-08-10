import React from 'react';
import './ModalStyles.modules.css';

const Delete = ({ singleThemeId, modalClose, setMessage }) => {
    // Delete the single theme:
    const handleDeleteBtn = (addedId) => {
        fetch(`https://hnomism52server.herokuapp.com/deleteTheme/${addedId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                // console.log('Deleted is', result);
                modalClose('Delete');
                setMessage({
                    isSuccess: true,
                    text: 'Your are successfully done',
                });
            })
    }

    return (
        <div className="delete-body">
            <h1>Are you sure delete this theme?</h1>
            <h4>THEME ID: {singleThemeId}</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid neque non repellendus ratione sunt sint quidem rerum animi nisi fugit, maiores maxime illo, eius odit quae tenetur id libero iste ex sit aspernatur autem magni nam accusamus. Fuga qui, quo tenetur voluptas, voluptates tempora animi iste consequuntur eos, placeat ipsum.</p>
            <button onClick={() => handleDeleteBtn(singleThemeId)} className="delete-btn">Delete</button>
            <button onClick={() => modalClose('Delete')} className="cancel-btn">Cancel</button>
        </div>
    );
};

export default Delete;