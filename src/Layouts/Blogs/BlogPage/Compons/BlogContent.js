import React from 'react';
import { Link } from 'react-router-dom';
import './BlogContent.modules.css';

const BlogContent = (props) => {
    const { _id, title, image, description } = props.blog;

    return (
        <div className="blog-posts">
            <Link to={`/blog-single/${_id}`}>
                <img src={image} alt="" />
                <h2>{title}</h2>
            </Link>
            <p>{description}</p>
        </div>
    );
};

export default BlogContent;