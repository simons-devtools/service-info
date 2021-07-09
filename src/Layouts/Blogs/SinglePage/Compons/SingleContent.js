import React from 'react';
import './SingleContent.modules.css';

const SingleContent = (props) => {
    const { title, image } = props.blog;

    return (
        <div className="blog-single-post">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>
                Make your productive teams Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fusce pharetra ligula vitae mattis commodo.
                Phasellus consequat ipsum id mauris viverra, ac pulvinar dui fringilla. Ut suscipit ac turpis vitae accumsan.....
            </p>
        </div>
    );
};

export default SingleContent;