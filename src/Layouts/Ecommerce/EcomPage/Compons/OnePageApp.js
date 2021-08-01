import React from 'react';
import './OnePageApp.modules.css';
import EcomPageContent from './SubCompons/EcomPageContent';

const OnePageApp = ({ applications, handleFeatureBtn, handleBuyBtn }) => {
    return (
        <section className="one-page-app-wrapper">
            <h2>Single page applications</h2>
            <p>Free single page react themes and website templates. If you are looking for an easy way to represent your single page to the world these themes will help you to do it. Website templates for creative agency, design and photography.</p>
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