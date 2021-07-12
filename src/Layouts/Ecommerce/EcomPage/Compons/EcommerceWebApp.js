import React from 'react';
import './EcommerceWebApp.modules.css';
import EcomPageContent from './SubCompons/EcomPageContent';

const EcommerceWebApp = ({ applications, handleFeatureBtn }) => {
    return (
        <section className="ecom-web-app-wrapper">
            <h2>E-commerce web applications</h2>
            <div className="ecom-web-app-body">
                {
                    applications.map(app => app.category === 'ecommerce' ? <EcomPageContent
                        key={app._id}
                        application={app}
                        handleFeatureBtn={handleFeatureBtn}
                    /> : '')
                }
            </div>
        </section>
    );
};

export default EcommerceWebApp;