import React from 'react';
import Header2 from '../Default/Header2/Header2';
import Aside from './Aside';

const Dashboard = () => {
    const HeaderStyles = {
        position: 'sticky',
        top: '0',
    }

    return (
        <main>
            <div style={HeaderStyles}><Header2 /></div>
            <div className=""><Aside /></div>
        </main>
    );
};

export default Dashboard;