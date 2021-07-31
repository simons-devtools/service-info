import React from 'react';
import './EcommerceWebApp.modules.css';
import EcomPageContent from './SubCompons/EcomPageContent';

const EcommerceWebApp = ({ applications, handleFeatureBtn, handleBuyBtn }) => {
    return (
        <section className="ecom-web-app-wrapper">
            <h2>E-commerce web applications</h2>
            <div className="ecom-web-app-body">
                {
                    applications.map(app => app.category === 'ecommerce' ? <EcomPageContent
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

export default EcommerceWebApp;