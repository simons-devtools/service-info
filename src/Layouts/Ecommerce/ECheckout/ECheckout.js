import React from 'react';
import Payment from './Payment';
import Shipment from './Shipment';
import Welcome from './Welcome';

const ECheckout = () => {
    return (
        <main>
            <Payment />
            <Shipment />
            <Welcome />
        </main>
    );
};

export default ECheckout;