import React from 'react';
import './Delete.modules.css';

const Delete = ({ singleBlogId }) => {
    return (
        <div className="delete-body">
            <h1>Are you sure delete this post?</h1>
            <h4>BLOG ID: {singleBlogId}</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid neque non repellendus ratione sunt sint quidem rerum animi nisi fugit, maiores maxime illo, eius odit quae tenetur id libero iste ex sit aspernatur autem magni nam accusamus. Fuga qui, quo tenetur voluptas, voluptates tempora animi iste consequuntur eos, placeat ipsum.</p>
            <button className="delete-btn">Delete</button>
            <button className="cancel-btn">Cancel</button>
        </div>
    );
};

export default Delete;