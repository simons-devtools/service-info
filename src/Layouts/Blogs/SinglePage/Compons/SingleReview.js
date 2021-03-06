import React from 'react';
import './SingleReview.modules.css';

const SingleReview = (props) => {
    const { image, name, comment } = props.comment;

    return (
        <div className="single-review-wrapper">
            <div className="single-review-profile">
                <img src={image} alt="" />
            </div>
            <div className="single-review-info">
                <h3>{name}</h3>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default SingleReview;