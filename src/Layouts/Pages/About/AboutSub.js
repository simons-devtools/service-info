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
import { useState } from 'react';

const AboutSub = () => {
    const [classId, setClassId] = useState(1);

    // Identity route link:
    const handleChange = (addedId) => {
        setClassId(addedId);
    };

    // Sidebar menu routes:
    const routes = [
        {
            id: 1,
            path: "/about",
            exact: true,
            menu: 'About',
            main: () => <Resume />
        },
        {
            id: 2,
            path: "/contact",
            menu: 'Contact',
            main: () => <Contact />
        },
        {
            id: 3,
            path: "/skills",
            menu: 'Skills',
            main: () => <Skills />
        },
        {
            id: 4,
            path: "/experience",
            menu: 'Experience',
            main: () => <Experience />
        },
        {
            id: 5,
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
                                routes.map(route => <li onClick={() => handleChange(route.id)} key={route.id}>
                                    <Link to={route.path}
                                        className={classId === route.id ? 'classValue' : ''}
                                    >{route.menu}</Link>
                                </li>)
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