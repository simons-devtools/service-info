import React from 'react';
import Header2 from '../Default/Header2/Header2';
import EcomPage from './EcomPage/EcomPage';
import Footer from '../Default/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import loading from '../../Assets/Icons/load.gif';

const Ecommerce = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch('https://hnomism52server.herokuapp.com/themes')
            .then(res => res.json())
            .then(data => setApplications(data))
    }, [])

    return (
        <main>
            <Header2 />
            {
                applications.length <= 0 ? <img src={loading} alt="" className="loading" /> :
                    <EcomPage applications={applications} />
            }
            <Footer />
        </main>
    );
};

export default Ecommerce;