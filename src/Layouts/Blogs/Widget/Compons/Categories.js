import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.modules.css';

const Categories = ({ blogs }) => {
    return (
        <div className="categories-wrapper">
            <h2>Blogs topics</h2>
            <div className="category-body">
                <ul>
                    {
                        blogs.map((blog => <li key={blog._id}>
                            <Link to={`/bloggers/${blog.topics}`}>{blog.category}</Link>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Categories;