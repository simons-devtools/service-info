import React from 'react';
import '../HStylies/HAbout.modules.css';
import about from '../../../Assets/Home-images/home-about.png';
import appIcon from '../../../Assets/Icons/about-app-icon.png';
import webIcon from '../../../Assets/Icons/about-web-icon.png';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const HAbout = () => {
    return (
        <section className="about-wrapper">
            <Container>
                {/* Header contents */}
                <div className="home-about-header">
                    <h1>Who I am?</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, libero.</p>
                </div>

                <div className="home-about-body">
                    {/* Left contents */}
                    <div className="home-about-left">
                        <div className="home-about-left-top-content">
                            <p>Sit amet consectetur adipisicing elit. Laboriosam odit velit error tempore incidunt necessitatibus quod et facere eligendi maiores autem ex esse porro impedit eius minima temporibus fugiat quis! Doloremque deleniti ipsum quos voluptatibus rerum, aperiam quas adipisci ex consequuntur sit nobis accusamus pariatur deserunt laboriosam?</p>
                        </div>
                        <div className="home-about-left-bottom-content">
                            <div className="two-column-about-content">
                                <img src={appIcon} alt="" />
                                <h4>About my all applications</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur. Necessitatibus cat praesentium website cat.</p>
                                <Link to="/">Show More<ArrowRightAltIcon className="see-more-icons" /></Link>
                            </div>
                            <div className="two-column-about-content">
                                <img src={webIcon} alt="" />
                                <h4>Learn with my blog posts</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur. Necessitatibus cat praesentium website cat.</p>
                                <Link to="/">Read More<ArrowRightAltIcon className="see-more-icons" /></Link>
                            </div>
                        </div>
                    </div>

                    {/* Right contents */}
                    <div className="home-about-right">
                        <img src={about} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HAbout;