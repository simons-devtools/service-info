import React from 'react';
import './ModalStyles.modules.css';

const View = ({ singleBlog }) => {
    // console.log(singleBlog);
    const { author, category, date, description, image, title, topics, tags, _id } = singleBlog;

    return (
        <div className="view-body">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>ID: {_id}</p>
            <p>author: {author}</p>
            <p>category: {category}</p>
            <p>date: {date}</p>
            <p>topics: {topics}</p>
            <p>{description}</p>
            <p>Tags:</p>
            <ul>
                {
                    tags && tags.length ?
                        tags.map(tag => <li key={tag.length}>{tag}</li>) :
                        <li>This is tag place</li>
                }
            </ul>
        </div>
    );
};

export default View;