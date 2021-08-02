import React from 'react';
import './NavbarTop.modules.css';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const NavbarTop = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);

    return (
        <Container>
            <nav className="navbar-top-wrapper">
                <ul className="navbar-top-left">
                    <li>
                        {
                            loggedInUser.isSiggedIn ? <img src={loggedInUser.photo} alt="" className="profile" /> :
                                <Link to="/"><HomeIcon className="left-icon" style={{ fontSize: 'medium' }} /></Link>
                        }
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/account/login">Login</Link></li>
                    <li><Link to="/account/register">Register</Link></li>
                </ul>
                <ul className="navbar-top-right">
                    <li className="phone"><PhoneIcon className="right-icon" style={{ fontSize: 'medium' }} /> +880 1799-867752</li>
                    <li><MailOutlineIcon className="right-icon" style={{ fontSize: 'medium' }} /> simon.hembrom52@gmail.com</li>
                </ul>
            </nav>
        </Container>
    );
};

export default NavbarTop;