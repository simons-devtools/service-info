import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../ListStyles.modules.css';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const AdminsList = () => {
    const [orders, setOrders] = useState([]);

    // Loaded the all orders:
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [])
    // console.log(orders);

    return (
        <div className="list-container">
            <h2>Orders list contents</h2>
            <table>
                <tr>
                    <th>Avater</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Order ID</th>
                    <th>Status</th>
                    <th><SettingsEthernetIcon
                        style={{ verticalAlign: 'middle' }} />
                    </th>
                </tr>
                {
                    orders.map(order =>
                        <tr>
                            <td><img src={order.photo} alt="" /></td>
                            <td>{order.shipment.email}</td>
                            <td>{order.shipment.phone}</td>
                            <td>{order.orderId}</td>
                            <td>{order.status}</td>
                            <td><MoreVertIcon /></td>
                        </tr>
                    )
                }
            </table>
        </div >
    );
};

export default AdminsList;