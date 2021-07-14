import React from 'react';
import Footer from '../Default/Footer/Footer';
import Header2 from '../Default/Header2/Header2';
import Main from './Main';

const Dashboard = () => {
    const HeaderStyles = {
        position: 'sticky',
        top: '0',
    }

    return (
        <main>
            <div style={HeaderStyles}><Header2 /></div>
            <Main />
            {/* <Footer /> */}
        </main>
    );
};

export default Dashboard;