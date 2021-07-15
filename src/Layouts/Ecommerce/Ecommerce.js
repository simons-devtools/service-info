import React from 'react';
import Header2 from '../Default/Header2/Header2';
import EcomPage from './EcomPage/EcomPage';
import Footer from '../Default/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';

const Ecommerce = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/themes')
            .then(res => res.json())
            .then(data => setApplications(data))
    }, [])

    return (
        <main>
            <Header2 />
            <EcomPage applications={applications} />
            <Footer />
        </main>
    );
};

export default Ecommerce;