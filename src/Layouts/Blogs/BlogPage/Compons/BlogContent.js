import React from 'react';
import { Link } from 'react-router-dom';
import './BlogContent.modules.css';

const BlogContent = (props) => {
    const { title, image } = props.blog;

    return (
        <div className="blog-posts">
            <Link to="/blogs">
                <img src={image} alt="" />
                <h2>{title}</h2>
            </Link>
            <p>
                Make your productive teams Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fusce pharetra ligula vitae mattis commodo.
                Phasellus consequat ipsum id mauris viverra, ac pulvinar dui fringilla. Ut suscipit ac turpis vitae accumsan.....
            </p>
        </div>
    );
};

export default BlogContent;