import React from 'react';
import Header2 from '../Default/Header2/Header2';
import EcomPage from './EcomPage/EcomPage';
import Footer from '../Default/Footer/Footer';
import image1 from '../../Assets/Ecom-images/template-1.png';
import image2 from '../../Assets/Ecom-images/template-2.png';
import image3 from '../../Assets/Ecom-images/template-3.png';

const Ecommerce = () => {
    const applications = [
        { "_id": 1, "name": "Professional portfolio", "category": "single", "image": image1, },
        { "_id": 2, "name": "Company portfolio", "category": "single", "image": image2, },
        { "_id": 3, "name": "Business portfolio", "category": "single", "image": image3, },

        { "_id": 4, "name": "Professional blogger", "category": "multiple", "image": image3, },
        { "_id": 5, "name": "Company blogger", "category": "multiple", "image": image1, },
        { "_id": 6, "name": "Business blogger", "category": "multiple", "image": image2, },

        { "_id": 7, "name": "Professional commercial", "category": "ecommerce", "image": image2, },
        { "_id": 8, "name": "Company commercial", "category": "ecommerce", "image": image3, },
        { "_id": 9, "name": "Business commercial", "category": "ecommerce", "image": image1, },
        { "_id": 10, "name": "Business commercial", "category": "ecommerce", "image": image1, },
    ];

    return (
        <main>
            <Header2 />
            <EcomPage applications={applications} />
            <Footer />
        </main>
    );
};

export default Ecommerce;