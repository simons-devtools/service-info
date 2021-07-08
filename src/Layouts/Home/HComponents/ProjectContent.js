import React from 'react';
import { Link } from 'react-router-dom';

const ProjectContent = (props) => {
    const { title, image } = props.project;

    return (
        <div className="project">
            <Link to="/">
                <div className="parent-div">
                    <img src={image} alt="" />
                </div>
                <div className="child-div">
                    <h2>{title}</h2>
                    <h3>Date: 09-07-21</h3>
                </div>
            </Link>
        </div >
    );
};

export default ProjectContent;