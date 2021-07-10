import React from 'react';
import './Footer.modules.css';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <Container>
                    <div className="footer-body">
                        <div className="footer-info">
                            <h2>Ours project info</h2>
                            <p>Suspendisse potenti ut tempus consequat accumsan donec.</p>
                            <ul>
                                <li><LocationOnIcon className="f-icons" /> Street Name & Number, Town, Postcode/Zip</li>
                                <li><PhoneIcon className="f-icons" /> +880 17xx-xxxxxx</li>
                                <li><MailOutlineIcon className="f-icons" /> info.domainamex@gmail.com</li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <h2>E-commerce support</h2>
                            <ul>
                                <li><Link to="/">Footer menu items</Link></li>
                                <li><Link to="/">Footer menu items</Link></li>
                                <li><Link to="/">Footer menu items</Link></li>
                                <li><Link to="/">Footer menu items</Link></li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <h2>Blogger support</h2>
                            <ul>
                                <li><Link to="/">Footer menu items</Link></li>
                                <li><Link to="/">Footer menu items</Link></li>
                                <li><Link to="/">Footer menu items</Link></li>
                                <li><Link to="/">Footer menu items</Link></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="footer-bottom-body">
                <Container>
                    <div className="footer-bottom-content">
                        <p>&copy; Copyright 2021 - All rights reserved by Domainamex</p>
                        <p>Template by OS Templates</p>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;