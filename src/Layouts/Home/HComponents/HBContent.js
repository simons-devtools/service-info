import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const HBContent = (props) => {
    const { blog } = props;
    const { _id, title, image, description } = blog;

    // Shorting the description words:
    function shorten(description, max) {
        return description && description.length > max ?
            description.slice(0, max).split(' ').slice(0, -1).join(' ') : description
    }

    return (
        <div className="blog">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{shorten(description, 125)}.....</p>
            <Link to={`/blog-single/${_id}`}>Read More<ArrowRightAltIcon className="read-more-icons" /></Link>
        </div>
    );
};

export default HBContent;