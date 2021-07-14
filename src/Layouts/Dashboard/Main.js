import React from 'react';
import './Main.modules.css';
import { Container } from '@material-ui/core';

const Main = () => {
    return (
        <Container>
            <div className="dash-nav-wrapper">
                <h1>Dashboard</h1>
                <ul className="dash-navbar">
                    <li>Home</li>
                    <li>Order list</li>
                    <li>My account</li>
                    <li>Add blogs</li>
                    <li>Add e-commerce</li>
                    <li>Add admins</li>
                    <li>Blogs list</li>
                    <li>All applications</li>
                    <li>Users board</li>
                    <li>Admins manage</li>
                    <li>Log out</li>
                    <li>Log out</li>
                    <li>Log out</li>
                </ul>
            </div>
        </Container>
    );
};

export default Main;