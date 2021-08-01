import React from 'react';
import './EcommerceWebApp.modules.css';
import EcomPageContent from './SubCompons/EcomPageContent';

const EcommerceWebApp = ({ applications, handleFeatureBtn, handleBuyBtn }) => {
    return (
        <section className="ecom-web-app-wrapper">
            <h2>E-commerce web applications</h2>
            <p>Free e-commerce web applications react themes and website templates. If you are looking for an easy way to represent your e-commerce web applications to the world these themes will help you to do it. Website templates for creative agency, design and photography.</p>
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