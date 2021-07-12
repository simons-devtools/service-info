import React from 'react';
import './MultiplePageApp.modules.css';
import MultiplePageContent from './SubCompons/MultiplePageContent';

const MultiplePageApp = ({ applications, handleFeatureBtn }) => {
    return (
        <section className="multiple-page-app-wrapper">
            <h2>Multiple page applications</h2>
            <div className="multiple-page-app-body">
                {
                    applications.map(app => app.category === 'multiple' ? <MultiplePageContent
                        key={app._id}
                        application={app}
                        handleFeatureBtn={handleFeatureBtn}
                    /> : '')
                }
            </div>
        </section>
    );
};

export default MultiplePageApp;