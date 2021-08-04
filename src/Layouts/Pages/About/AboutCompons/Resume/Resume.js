import React from 'react';
import './Resume.modules.css';
import image from '../../../../../Assets/About-me/me.png';
import GetAppIcon from '@material-ui/icons/GetApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Resume = () => {
    const aboutMe = [
        { _id: 1, topic: 'Age', info: '23 years' },
        { _id: 2, topic: 'Phone', info: '+880 1799-867752' },
        { _id: 3, topic: 'Email', info: 'simon.hembrom52@gmail.com' },
        { _id: 4, topic: 'Address', info: 'Tanore, Rajshahi, Dhaka BD' },
    ];

    // Social links:
    const socialMedia = [
        { id: 1, name: 'Github', path: 'https://github.com/c-moX' },
        { id: 2, name: 'Facebook', path: 'https://www.facebook.com/mr.simon.52/' },
        { id: 3, name: 'LinkedIn', path: 'https://www.linkedin.com/in/mr-simon-hembrom-932215218/' },
        { id: 4, name: 'My resume', path: 'https://drive.google.com/file/d/1vnOblp4-24rqx1rVII6UAQyysiVZMwbT/view?usp=sharing' },
    ];

    return (
        <div className="resume-container">
            <div className="resume-img">
                <img src={image} alt="" />
            </div>
            <div className="resume-body">
                <h2>Mr. simon Hembrom</h2>
                <h4>Full stack web developer</h4>
                <p>I am a Junior Web developer able to build a Web presence from the ground up - from concept, navigation, layout, and programming to UX and SEO. Skilled at writing well-designed, testable, and efficient code using the current version.</p>
                <ul className="about-info">
                    {
                        aboutMe.map(about =>
                            <li key={about._id}>
                                <strong>{about.topic}: </strong>
                                <span>{about.info}</span>
                            </li>
                        )
                    }
                </ul>
                <div className="download-follow">
                    <button className="cv-btn">
                        <a href={socialMedia[3].path} target={`_blank`}>
                            <GetAppIcon className="download-icon" />
                            Download CV
                        </a>
                    </button>
                    <div className="follow-option">
                        <strong>FOLLOW ME</strong>
                        <ul>
                            <li>
                                <a href={socialMedia[0].path} target={`_blank`}><GitHubIcon className="share-icons" style={{ fontSize: 'medium' }} /></a>
                            </li>
                            <li>
                                <a href={socialMedia[1].path} target={`_blank`}><FacebookIcon className="share-icons" style={{ fontSize: 'medium' }} /></a>
                            </li>
                            <li>
                                <a href={socialMedia[2].path} target={`_blank`}><LinkedInIcon className="share-icons" style={{ fontSize: 'medium' }} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;