import React from 'react';
import './Aside.modules.css';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Main from './Sections/Root/Main/Main';
import Profile from './Sections/Root/Profile/Profile';
import AddBlogs from './Sections/AddSections/AddBlogs/AddBlogs';
import AddTheme from './Sections/AddSections/AddTheme/AddTheme';
import AddAdmins from './Sections/AddSections/AddAdmins/AddAdmins';
import BlogsList from './Sections/ListSections/BlogsList/BlogsList';
import ThemeList from './Sections/ListSections/ThemeList/ThemeList';
import UsersList from './Sections/ListSections/UsersList/UsersList';
import AdminsList from './Sections/ListSections/AdminsList/AdminsList';
import OrdersList from './Sections/ListSections/OrdersList/OrdersList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Aside = () => {
    const [toggle, setToggle] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [classId, setClassId] = useState(1);
    const [admins, setAdmins] = useState(false);

    useEffect(() => {
        // fetch('https://childserver.herokuapp.com/checkAdmins', {
        fetch('http://localhost:5000/checkAdmins', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setAdmins(true)
                } else {
                    setAdmins(false)
                }
            })
    })

    // Identity route link:
    const handleChange = (addedId) => {
        setClassId(addedId);
    };

    // Admins route menu routes:
    const routes = [
        {
            id: 1,
            name: 'users',
            users: [
                { id: 1, path: "/dashboard", exact: true, menu: 'Dashboard', main: () => <Main /> },
                { id: 2, path: "/my-order", menu: 'My order', main: () => <OrdersList /> },
                { id: 3, path: "/my-account", menu: 'My account', main: () => <Profile /> },
            ],
        },
        {
            id: 2,
            name: 'admins',
            admins: [
                { id: 4, path: "/add-blog", menu: 'Add blogs', main: () => <AddBlogs /> },
                { id: 5, path: "/add-theme", menu: 'Add themes', main: () => <AddTheme /> },
                { id: 6, path: "/add-admin", menu: 'Add admins', main: () => <AddAdmins /> },
                { id: 7, path: "/blog-list", menu: 'Blog list', main: () => <BlogsList /> },
                { id: 8, path: "/theme-list", menu: 'Theme list', main: () => <ThemeList /> },
                { id: 9, path: "/user-board", menu: 'Users board', main: () => <UsersList /> },
                { id: 10, path: "/admin-board", menu: 'Admins board', main: () => <AdminsList /> },
                { id: 11, path: "/extra-route", menu: 'Extra-route', main: () => <h2>Extra route contents</h2> },
            ],
        },
    ];

    // Humbarger toggle button func:
    function bargerBtn(condison) {
        const dashMenu = document.getElementById('dashMenu');
        if (toggle) {
            condison = false;
            setToggle(condison);
        } else {
            setToggle(condison);
        }
        toggle ? dashMenu.style.display = 'block' : dashMenu.style.display = 'none';
    };

    return (
        <div className="dashboard-container">
            <div
                onClick={() => bargerBtn(true)}
                id="humbargerBtn"
                className="humbarger">
                <HorizontalSplitIcon />
            </div>
            <Router>
                <div className="dash-nav-wrapper">
                    {/* Sidebar menu routes */}
                    <div id="dashMenu" className="dash-nav-aside">
                        <h1>Dashboard</h1>
                        <ul className="dash-navbar">
                            {
                                routes && routes.map(route => route.name === 'users' ? route.users.map(user => <li onClick={() => handleChange(user.id)} key={user.id}>
                                    <Link to={user.path}
                                        className={classId === user.id ? 'routeValue' : ''}
                                    >{user.menu}</Link>
                                </li>) : ''
                                )
                            }
                            {admins &&
                                routes && routes.map(route => route.name === 'admins' ? route.admins.map(admin => <li onClick={() => handleChange(admin.id)} key={admin.id}>
                                    <Link to={admin.path}
                                        className={classId === admin.id ? 'routeValue' : ''}
                                    >{admin.menu}</Link>
                                </li>) : ''
                                )
                            }
                        </ul>
                        <button onClick={() => setLoggedInUser({})} className="logout-btn"><ExitToAppIcon className="exit" /> Log out</button>
                    </div>

                    {/* Components routes */}
                    <div className="dash-nav-main">
                        <Switch>
                            {
                                routes && routes.map(route => route.name === 'users' ? route.users.map((user, index) => (
                                    <Route
                                        key={index}
                                        path={user.path}
                                        exact={user.exact}
                                        children={<user.main />}
                                    />
                                )) : '')
                            }
                            {admins &&
                                routes && routes.map(route => route.name === 'admins' ? route.admins.map((admin, index) => (
                                    <Route
                                        key={index}
                                        path={admin.path}
                                        exact={admin.exact}
                                        children={<admin.main />}
                                    />
                                )) : '')
                            }
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Aside;