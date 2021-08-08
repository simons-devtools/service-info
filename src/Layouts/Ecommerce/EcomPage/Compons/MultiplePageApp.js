import React from 'react';
import './MultiplePageApp.modules.css';
import EcomPageContent from './SubCompons/EcomPageContent';

const MultiplePageApp = ({ applications, handleFeatureBtn }) => {
    return (
        <section className="multiple-page-app-wrapper">
            <h2>Multiple page applications</h2>
            <p>Free multiple page react themes and website templates. If you are looking for an easy way to represent your multiple page to the world these themes will help you to do it. Website templates for creative agency, design and photography.</p>
            <div className="multiple-page-app-body">
                {
                    applications.map(app => app.category === 'multiple' ? <EcomPageContent
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