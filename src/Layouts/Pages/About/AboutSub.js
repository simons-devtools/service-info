import React from 'react';
import './AboutSub.modules.css';
import Resume from './AboutCompons/Resume/Resume';
import Contact from './AboutCompons/Contact/Contact';
import Skills from './AboutCompons/Skills/Skills';
import Experience from './AboutCompons/Experience/Experience';
import Portfolio from './AboutCompons/Portfolio/Portfolio';
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
            path: "/about",
            exact: true,
            menu: 'About',
            main: () => <Resume />
        },
        {
            path: "/contact",
            menu: 'Contact',
            main: () => <Contact />
        },
        {
            path: "/skills",
            menu: 'Skills',
            main: () => <Skills />
        },
        {
            path: "/experience",
            menu: 'Experience',
            main: () => <Experience />
        },
        {
            path: "/portfolio",
            menu: 'Portfolio',
            main: () => <Portfolio />
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