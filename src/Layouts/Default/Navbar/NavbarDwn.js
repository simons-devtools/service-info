import React from 'react';
import './NavbarDwn.modules.css';
import logo from '../../../Assets/Icons/logo.png';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NavbarDwn = () => {
    // Theme Main Routes:
    const routes = [
        { id: 1, name: 'Documentation', path: '/' },
        { id: 2, name: 'Blogs', path: '/blogs' },
        { id: 3, name: 'Applications', path: '/ecommerce' },
        { id: 4, name: 'Dashboard', path: '/dashboard' },
    ];

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
                        {
                            routes.map(route => <li key={route.id}>
                                <Link to={route.path}>{route.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavbarDwn;