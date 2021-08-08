import React from 'react';
import './Footer.modules.css';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <Container>
                    <div className="footer-body">
                        <div>
                            <div className="footer-info">
                                <h3>Project information - contact</h3>
                                <ul>
                                    <li><LocationOnIcon className="f-icons" />Rajshahi, Dhaka, Bangladesh 3062</li>
                                    <li><PhoneIcon className="f-icons" /> +880 1799-867752</li>
                                    <li><MailOutlineIcon className="f-icons" /> simon.hembrom52@gmail.com</li>
                                </ul>
                            </div>
                            <div className="footer-share-option">
                                <h5>FOLLOW ME</h5>
                                <ul>
                                    <li><FacebookIcon className="share-icons" style={{ fontSize: 'medium' }} /></li>
                                    <li><InstagramIcon className="share-icons" style={{ fontSize: 'medium' }} /></li>
                                    <li><LinkedInIcon className="share-icons" style={{ fontSize: 'medium' }} /></li>
                                    <li><TwitterIcon className="share-icons" style={{ fontSize: 'medium' }} /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-info">
                            <h3>E-commerce (e)</h3>
                            <ul>
                                <li><Link to="/">Contact With Me</Link></li>
                                <li><Link to="/">Track Your Order</Link></li>
                                <li><Link to="/">Start A Return</Link></li>
                                <li><Link to="/">Email Preferences</Link></li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <h3>Bloggers (b)</h3>
                            <ul>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Privacy Policy FAQs</Link></li>
                                <li><Link to="/">Terms of Use</Link></li>
                                <li><Link to="/">Request Personal Info</Link></li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <h3>Support section</h3>
                            <ul>
                                <li>Sat - Thu/ 9am - 10pm</li>
                                <li>Friday: Closed</li>
                                <li>Root# Rajshahi, Dhaka</li>
                                <li>Thanks for visited this site.</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="footer-bottom-body">
                <Container>
                    <div className="footer-bottom-content">
                        <p>&copy; Copyright 2021 - All right reserved by MsimonH</p>
                        <p>Template by OS Templates</p>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;