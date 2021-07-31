import React from 'react';
import './MultiplePageApp.modules.css';
import EcomPageContent from './SubCompons/EcomPageContent';

const MultiplePageApp = ({ applications, handleFeatureBtn, handleBuyBtn }) => {
    return (
        <section className="multiple-page-app-wrapper">
            <h2>Multiple page applications</h2>
            <div className="multiple-page-app-body">
                {
                    applications.map(app => app.category === 'multiple' ? <EcomPageContent
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

export default MultiplePageApp;