import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const HBContent = (props) => {
    const { title, image } = props.blog;

    return (
        <div className="blog">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur consectetur adipisicing elit. Ut quasi quasi omnis perferendis saepe optio vero.</p>
            <Link to="/">Read More<ArrowRightAltIcon className="read-more-icons" /></Link>
        </div>
    );
};

export default HBContent;