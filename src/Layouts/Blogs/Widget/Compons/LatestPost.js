import React from 'react';
import './LatestPost.modules.css';
import { Link } from 'react-router-dom';

const LatestPost = ({ blogs }) => {
    return (
        <div className="posts-wrapper">
            <h2>Latest posts</h2>
            <ul className="posts-body">
                {
                    blogs.map((blog) => <li key={blog._id}>
                        <Link to={`/blog-single/${blog._id}`}>
                            <img src={blog.image} alt="img" />
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default LatestPost;