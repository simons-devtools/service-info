import React from 'react';
import './Skills.modules.css';
import image from '../../../../../Assets/About-me/skills.jpg';
import html5 from '../../../../../Assets/Icons/html.png';
import css3 from '../../../../../Assets/Icons/css.png';
import bootstrap from '../../../../../Assets/Icons/bootstrap.png';
import javascript from '../../../../../Assets/Icons/js.png';
import router from '../../../../../Assets/Icons/router.png';
import apis from '../../../../../Assets/Icons/api.png';

import mongodb from '../../../../../Assets/Icons/mongodb.png';
import express from '../../../../../Assets/Icons/express.png';
import react from '../../../../../Assets/Icons/react.png';
import node from '../../../../../Assets/Icons/node.png';
import wordpress from '../../../../../Assets/Icons/wordpress.png';

import github from '../../../../../Assets/Icons/github.png';
import vscode from '../../../../../Assets/Icons/vscode.png';
import firebase from '../../../../../Assets/Icons/firebase.png';
import heroku from '../../../../../Assets/Icons/heroku.png';
import chrome from '../../../../../Assets/Icons/chrome.png';

const Skills = () => {
    const comfortables = [
        { _id: 1, name: 'html5', icon: html5 },
        { _id: 2, name: 'Styles', icon: css3 },
        { _id: 3, name: 'Bootstrap', icon: bootstrap },
        { _id: 4, name: 'JavaScript', icon: javascript },
        { _id: 5, name: 'React-router', icon: router },
        { _id: 6, name: 'Rest APIs', icon: apis },
    ];
    const familiars = [
        { _id: 1, name: 'Mongodb', icon: mongodb },
        { _id: 2, name: 'Express.js', icon: express },
        { _id: 3, name: 'React.js', icon: react },
        { _id: 4, name: 'Node.js', icon: node },
        { _id: 5, name: 'Wordpress', icon: wordpress },
    ];
    const tools = [
        { _id: 1, name: 'Github', icon: github },
        { _id: 2, name: 'VS code', icon: vscode },
        { _id: 3, name: 'Firebase', icon: firebase },
        { _id: 4, name: 'Heroku', icon: heroku },
        { _id: 5, name: 'Chrome-tools', icon: chrome },
    ];

    const topics = [
        { _id: 1, title: 'Front-end design - 80%', info: 'Comfortable for the front-end applications design.' },
        { _id: 2, title: 'Back-end server - 60%', info: 'Server site web applications apis developed with mongodb.' },
        { _id: 3, title: 'Popular tools used - 70%', info: 'Comfortable for the front-end website/applications design.' },
    ];

    return (
        <div className="skills-container">
            <div className="skills-img">
                <img src={image} alt="" />
            </div>
            <div className="skills-info">
                <div className="skills">
                    <h3>Comfortable skillls</h3>
                    <ul>
                        {
                            comfortables.map(comfor =>
                                <li key={comfor._id}>
                                    <img src={comfor.icon} alt="" /> <br />
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="skills">
                    <h3>Familiar skillls</h3>
                    <ul>
                        {
                            familiars.map(famil =>
                                <li key={famil._id}>
                                    <img src={famil.icon} alt="" /> <br />
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="skills">
                    <h3>Tools skillls</h3>
                    <ul>
                        {
                            tools.map(tool =>
                                <li key={tool._id}>
                                    <img src={tool.icon} alt="" /> <br />
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="skills-parse">
                {
                    topics.map(topic =>
                        <div key={topic._id}>
                            <h4>{topic.title}</h4>
                            <p>{topic.info}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Skills;