import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const ProjectContent = (props) => {
    const { title, image } = props.project;

    return (
        <div className="project">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque odio culpa eveniet possimus.</p>
            <Link to="/">Show more<ArrowRightAltIcon className="show-more-icons" /></Link>
        </div>
    );
};

export default ProjectContent;