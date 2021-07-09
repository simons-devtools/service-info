import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.modules.css';

const Categories = () => {
    const categories = [
        { "_id": 1, "name": "About react compons" },
        { "_id": 2, "name": "About node modules" },
        { "_id": 3, "name": "About material ui" },
        { "_id": 4, "name": "About bootstrap ux" },
        { "_id": 5, "name": "About mongodb cloud" },
    ];

    return (
        <div className="categories-wrapper">
            <h2>Categories</h2>
            <div className="category-body">
                <ul>
                    {
                        categories.map((category => <li key={category._id}>
                            <Link to="/blogs">{category.name}</Link>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Categories;