import React from 'react';
import './Experience.modules.css';
import image from '../../../../../Assets/About-me/experience.jpg';
import design from '../../../../../Assets/Icons/design.png';
import developer from '../../../../../Assets/Icons/developer.png';

const Experience = () => {
    const experiences = [
        { _id: 1, name: 'Junior web designer', inc: 'Job: Google Inc', start: '20-05-2020', end: '15-10-2020', icon: design },
        { _id: 2, name: 'Senior web designer', inc: 'Job: Apple Inc', start: '15-11-2020', end: '20-05-2021', icon: design },
        { _id: 3, name: 'Junior web developer', inc: 'Job: Microsoft Inc', start: '20-06-2021', end: '15-10-2021', icon: developer },
        { _id: 4, name: 'Senior web developer', inc: 'Job: Facebook Inc', start: '15-11-2021', end: 'Present', icon: developer },
    ];

    return (
        <div className="experience-container">
            <div className="experience-img">
                <img src={image} alt="" />
            </div>
            <div className="experience-info">
                <h2>My overall experience information</h2>
                <ul>
                    {
                        experiences.map(experience => <li key={experience._id}>
                            <img src={experience.icon} alt="" /> <br />
                            <strong>{experience.name}</strong> <br />
                            <span>{experience.start} - {experience.end}</span> <br />
                            <small>{experience.inc}</small> <br />
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Experience;