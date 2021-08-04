import React from 'react';

const ProjectContent = (props) => {
    const { title, date, image } = props.project;

    return (
        <div className="project">
            <div className="parent-div">
                <img src={image} alt="" />
            </div>
            <div className="child-div">
                <h2>{title}</h2>
                <h3>{date}</h3>
            </div>
        </div>
    );
};

export default ProjectContent;