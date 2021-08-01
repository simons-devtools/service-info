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
                    <h1>How to get and learn?</h1>
                    <p>This is my two kind of section overview. You can (1) get apps and (2) read blog posts.</p>
                </div>

                <div className="home-about-body">
                    {/* Left contents */}
                    <div className="home-about-left">
                        <div className="home-about-left-bottom-content">
                            <div className="two-column-about-content">
                                <img src={appIcon} alt="" />
                                <h4>About my all applications</h4>
                                <p>You can also find a list of your favorite web applications? Pls don't wory, I can help you.</p>
                                <Link to="/ecommerce">Show More<ArrowRightAltIcon className="see-more-icons" /></Link>
                            </div>
                            <div className="two-column-about-content">
                                <img src={webIcon} alt="" />
                                <h4>Learn with my blog posts</h4>
                                <p>You can also find a list of web apps related blog posts? Don't wory, please follow the link.</p>
                                <Link to="/blogs">Read More<ArrowRightAltIcon className="see-more-icons" /></Link>
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