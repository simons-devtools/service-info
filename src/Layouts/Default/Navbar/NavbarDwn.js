import React from 'react';
import './NavbarDwn.modules.css';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Icons/logo.png';
// import profile from '../../../Assets/Icons/profile.png';

const NavbarDwn = () => {
    return (
        <nav className="navbar-main-wrapper">
            <Container>
                <div className="nav-main-body">
                    <div className="brand">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <ul className="navbar-main">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/ecommerce">Applications</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        {/* <li>
                            <img src={profile} alt="" />
                        </li> */}
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavbarDwn;