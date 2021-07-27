import React from 'react';
import './AboutSub.modules.css';
import Resume from './AboutCompons/Resume/Resume';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const AboutSub = () => {

    // Sidebar menu routes:
    const routes = [
        {
            path: "/",
            exact: true,
            menu: 'About',
            main: () => <Resume />
        },
        {
            path: "/BBBBB",
            menu: 'Contact',
            main: () => <h2>Contact</h2>
        },
        {
            path: "/DDDDD",
            menu: 'Skills',
            main: () => <h2>Skills</h2>
        },
        {
            path: "/EEEEE",
            menu: 'Experience',
            main: () => <h2>Experience</h2>
        },
        {
            path: "/FFFFF",
            menu: 'Portfolio',
            main: () => <h2>Portfolio</h2>
        }
    ];

    return (
        <div className="about-container">
            <Router>
                <div className="about-wrapper">
                    <div className="about-aside">
                        <ul className="about-navbar">
                            {
                                routes.map(route => <li key={route.length}><Link to={route.path}>{route.menu}</Link></li>)
                            }
                        </ul>
                    </div>

                    <div className="about-main">
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

export default AboutSub;