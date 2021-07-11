import React from 'react';
import './OnePageApp.modules.css';
import OnePageContent from './SubCompons/OnePageContent';

const OnePageApp = ({ applications }) => {
    return (
        <section className="one-page-app-wrapper">
            <h2>Single page applications</h2>
            <div className="one-page-app-body">
                {
                    applications.map(app => app.category === 'single' ? <OnePageContent
                        key={app._id}
                        application={app}
                    /> : '')
                }
            </div>
        </section>
    );
};

export default OnePageApp;