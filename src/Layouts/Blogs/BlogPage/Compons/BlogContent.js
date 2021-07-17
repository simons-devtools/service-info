import React from 'react';
import { Link } from 'react-router-dom';
import './BlogContent.modules.css';

const BlogContent = (props) => {
    const { _id, title, image, description } = props.blog;

    // Shorting the description words:
    function shorten(description, max) {
        return description && description.length > max ?
            description.slice(0, max).split(' ').slice(0, -1).join(' ') : description
    }

    return (
        <div className="blog-posts">
            <Link to={`/blog-single/${_id}`}>
                <img src={image} alt="" />
                <h2>{title}</h2>
            </Link>
            {/* <p>{description}</p> */}
            <p>{shorten(description, 250)}.....</p>
        </div>
    );
};

export default BlogContent;