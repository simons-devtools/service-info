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

    // Sidebar menu routes:
    const routes = [
        {
            path: "/",
            exact: true,
            menu: 'Home',
            main: () => <Main />
        },
        {
            path: "/order-list",
            menu: 'Order list',
            main: () => <OrdersList />
        },
        {
            path: "/my-account",
            menu: 'My account',
            main: () => <Profile />
        },
        {
            path: "/add-blog",
            menu: 'Add blogs',
            main: () => <AddBlogs />
        },
        {
            path: "/add-theme",
            menu: 'Add themes',
            main: () => <AddTheme />
        },
        {
            path: "/add-admin",
            menu: 'Add admins',
            main: () => <AddAdmins />
        },
        {
            path: "/blog-list",
            menu: 'Blog list',
            main: () => <BlogsList />
        },
        {
            path: "/theme-list",
            menu: 'Theme list',
            main: () => <ThemeList />
        },
        {
            path: "/user-board",
            menu: 'Users board',
            main: () => <UsersList />
        },
        {
            path: "/admin-board",
            menu: 'Admins board',
            main: () => <AdminsList />
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
                    <div id="dashMenu" className="dash-nav-aside">
                        <h1>Dashboard</h1>
                        <ul className="dash-navbar">
                            {
                                routes.map(route => <li key={route.length}><Link to={route.path}>{route.menu}</Link></li>)
                            }
                        </ul>
                        <button onClick={() => setLoggedInUser({})} className="logout-btn">Log out <ExitToAppIcon className="exit" /></button>
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
        </div>
    );
};

export default Aside;