import React from 'react';
import './OnePageApp.modules.css';
import EcomPageContent from './SubCompons/EcomPageContent';

const OnePageApp = ({ applications, handleFeatureBtn, handleBuyBtn }) => {
    return (
        <section className="one-page-app-wrapper">
            <h2>Single page applications</h2>
            <div className="one-page-app-body">
                {
                    applications.map(app => app.category === 'single' ? <EcomPageContent
                        key={app._id}
                        application={app}
                        handleFeatureBtn={handleFeatureBtn}
                        handleBuyBtn={handleBuyBtn}
                    /> : '')
                }
            </div>
        </section>
    );
};

export default OnePageApp;