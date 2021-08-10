import React from 'react';
import './ModalStyles.modules.css';

const Delete = ({ singleBlogId, modalClose, setMessage }) => {
    // Delete the single blog:
    const handleDeleteBtn = (addedId) => {
        fetch(`https://hnomism52server.herokuapp.com/deleteBlog/${addedId}`, {
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
            <h1>Are you sure delete this blog?</h1>
            <h4>BLOG ID: {singleBlogId}</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid neque non repellendus ratione sunt sint quidem rerum animi nisi fugit, maiores maxime illo, eius odit quae tenetur id libero iste ex sit aspernatur autem magni nam accusamus. Fuga qui, quo tenetur voluptas, voluptates tempora animi iste consequuntur eos, placeat ipsum.</p>
            <button onClick={() => handleDeleteBtn(singleBlogId)} className="delete-btn">Delete</button>
            <button onClick={() => modalClose('Delete')} className="cancel-btn">Cancel</button>
        </div>
    );
};

export default Delete;