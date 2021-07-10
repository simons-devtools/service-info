import React from 'react';
import './SingleReview.modules.css';
import image from '../../../../Assets/Icons/profile.png';

const SingleReview = () => {
    return (
        <div className="single-review-wrapper">
            <div className="single-review-profile">
                <img src={image} alt="" />
            </div>
            <div className="single-review-info">
                <h3>New blog commenter</h3>
                <p>
                    Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum,
                    sed arcu molestie, in quis ornare, rhoncus scelerisque velit, nam
                </p>
            </div>
        </div>
    );
};

export default SingleReview;