import React from 'react';
import './Header2.modules.css';
import NavbarTop from '../Navbar/NavbarTop';
import NavbarDwn from '../Navbar/NavbarDwn';

const Header2 = () => {
    return (
        <header>
            <NavbarTop />
            <NavbarDwn />
        </header>
    );
};

export default Header2;