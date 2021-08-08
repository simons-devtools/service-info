import React from 'react';
import '../HStylies/Services.modules.css';
import { Container } from '@material-ui/core';
import consult from '../../../Assets/Home-images/Services/consult.jpg';
import portfolio from '../../../Assets/Home-images/Services/portfolio.jpg';
import blog from '../../../Assets/Home-images/Services/blog.png';
import ecommerce from '../../../Assets/Home-images/Services/ecommerce.jpg';
import bigCommerce from '../../../Assets/Home-images/Services/bigCommerce.png';
import ServiceContent from '../HComponents/ServiceContent';

const Services = () => {
    const services = [
        { "_id": 1, "name": "Free Consultation", "icon": consult },
        { "_id": 2, "name": "Portfolio theme", "icon": portfolio },
        { "_id": 3, "name": "blog website", "icon": blog },
        { "_id": 4, "name": "E-commerce app", "icon": ecommerce },
        { "_id": 5, "name": "Big-commerce app", "icon": bigCommerce },
    ];

    return (
        <section className="services-wrapper">
            <Container>
                <div className="services-header">
                    <h1>I am provided</h1>
                    <p>I'am really interested in working with your any kind of services.</p>
                </div>
                <div className="services-body">
                    <div className="services-content">
                        {
                            services.map(service => <ServiceContent
                                key={service._id}
                                service={service}
                            />)
                        }
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Services;