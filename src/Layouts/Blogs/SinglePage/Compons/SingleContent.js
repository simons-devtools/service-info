import React from 'react';
import './SingleContent.modules.css';
import loading from '../../../../Assets/Icons/load.gif';

const SingleContent = ({ singleBlog }) => {
    // console.log(singleBlog);

    const { title, image, description } = singleBlog;

    return (
        <div className="blog-single-post">
            <img src={image ? image : loading} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default SingleContent;