import React from 'react';
import '../HStylies/Header.modules.css';
import NavbarTop from '../../Default/Navbar/NavbarTop';
import NavbarDwn from '../../Default/Navbar/NavbarDwn';
import HeaderContent from '../HComponents/HeaderContent';

const Header = () => {
    return (
        <header>
            <NavbarTop />
            <NavbarDwn />
            <HeaderContent />
        </header>
    );
};

export default Header;