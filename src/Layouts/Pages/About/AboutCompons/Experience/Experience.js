import React from 'react';
import './Experience.modules.css';
import image from '../../../../../Assets/About-me/experience.jpg';
import design from '../../../../../Assets/Icons/design.png';
import developer from '../../../../../Assets/Icons/developer.png';

const Experience = () => {
    const experiences = [
        { _id: 1, name: 'Search engine optimization', inc: 'Platfrom: seoclerks', start: '02-01-2020', end: '30-02-2020', icon: design },
        { _id: 2, name: 'Junior web developer (php)', inc: 'Platfrom: fiverr', start: '11-03-2020', end: '21-11-2020', icon: design },
        { _id: 3, name: 'Junior web developer (js)', inc: 'Platfrom: Open source', start: '01-12-2020', end: 'Present', icon: developer },
        { _id: 4, name: 'Senior web developer', inc: 'Platfrom: Learning', start: 'Future', end: 'Unknow', icon: developer },
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