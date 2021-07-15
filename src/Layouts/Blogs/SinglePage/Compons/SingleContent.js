import React from 'react';
import './SingleContent.modules.css';

const SingleContent = ({ singleBlog }) => {
    // console.log(singleBlog);

    const { title, image, description } = singleBlog;

    return (
        <div className="blog-single-post">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default SingleContent;