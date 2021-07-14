import React from 'react';
import './Aside.modules.css';
import { Container } from '@material-ui/core';
import Main from './DashSections/Main/Main';
import OrdersList from './DashSections/OrdersList/OrdersList';
import Profile from './DashSections/Profile/Profile';
import AddBlogs from './DashSections/AddBlogs/AddBlogs';
import AddEcommerce from './DashSections/AddEcommerce/AddEcommerce';
import AddAdmins from './DashSections/AddAdmins/AddAdmins';
import BlogsList from './DashSections/BlogsList/BlogsList';
import EcommerceList from './DashSections/EcommerceList/EcommerceList';
import UsersList from './DashSections/UsersList/UsersList';
import AdminsList from './DashSections/AdminsList/AdminsList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Aside = () => {
    const routes = [
        {
            path: "/",
            exact: true,
            sidebar: () => '',
            main: () => <Main />
        },
        {
            path: "/order-list",
            sidebar: () => '',
            main: () => <OrdersList />
        },
        {
            path: "/my-account",
            sidebar: () => '',
            main: () => <Profile />
        },
        {
            path: "/add-blog",
            sidebar: () => '',
            main: () => <AddBlogs />
        },
        {
            path: "/add-ecommerce",
            sidebar: () => '',
            main: () => <AddEcommerce />
        },
        {
            path: "/add-admin",
            sidebar: () => '',
            main: () => <AddAdmins />
        },
        {
            path: "/blog-list",
            sidebar: () => '',
            main: () => <BlogsList />
        },
        {
            path: "/all-application",
            sidebar: () => '',
            main: () => <EcommerceList />
        },
        {
            path: "/user-board",
            sidebar: () => '',
            main: () => <UsersList />
        },
        {
            path: "/admin-manage",
            sidebar: () => '',
            main: () => <AdminsList />
        },
        {
            path: "/logout",
            sidebar: () => '',
            main: () => <h2>Logout 11</h2>
        },
    ];

    return (
        <Container>
            <Router>
                <div className="dash-nav-container">
                    <div className="dash-nav-aside">
                        <div>
                            <h1>Dashboard</h1>
                            <ul className="dash-navbar">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/order-list">Order list</Link></li>
                                <li><Link to="/my-account">My account</Link></li>
                                <li><Link to="/add-blog">Add blogs</Link></li>
                                <li><Link to="/add-ecommerce">Add e-commerce</Link></li>
                                <li><Link to="/add-admin">Add admins</Link></li>
                                <li><Link to="/blog-list">Blog list</Link></li>
                                <li><Link to="/all-application">All application</Link></li>
                                <li><Link to="/user-board">Users board</Link></li>
                                <li><Link to="/admin-manage">Admins manage</Link></li>
                                <li><Link to="/logout">Log out 1</Link></li>
                                <li><Link to="/logout">Log out 2</Link></li>
                                <li><Link to="/logout">Log out 3</Link></li>
                            </ul>
                        </div>
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.sidebar />}
                                />
                            ))}
                        </Switch>
                    </div>

                    <div className="dash-nav-main">
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </div>
                </div>
            </Router>
        </Container>
    );
};

export default Aside;