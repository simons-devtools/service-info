import React from 'react';
import './NavbarTop.modules.css';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const NavbarTop = () => {
    return (
        <Container>
            <nav className="navbar-top-wrapper">
                <ul className="navbar-top-left">
                    <li><Link to="/home"><HomeIcon className="left-icon" /></Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
                <ul className="navbar-top-right">
                    <li className="phone"><PhoneAndroidIcon className="right-icon" /> +880 17xx-xxxxxx</li>
                    <li><MailOutlineIcon className="right-icon" /> info.domainamex@gmail.com</li>
                </ul>
            </nav>
        </Container>
    );
};

export default NavbarTop;