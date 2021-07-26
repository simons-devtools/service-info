import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../ListStyles.modules.css';
import OrderStatus from './OrderStatus';

const AdminsList = () => {
    const [orders, setOrders] = useState([]);
    const [singleOrder, setSingleOrder] = useState({});

    // Loaded the all orders:
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [])

    // Handle status modal open button:
    const handleStatus = (addedOrder) => {
        setSingleOrder(addedOrder);
        const statusModal = document.getElementById("statusModal");
        statusModal.style.display = 'block';
    }

    // Handle status modal close button:
    const handleCancel = () => {
        const statusModal = document.getElementById("statusModal");
        statusModal.style.display = 'none';
    }

    return (
        <div className="list-container">
            <div id="statusModal" className="option">
                <strong onClick={handleCancel} className="cross">X</strong>
                <OrderStatus
                    singleOrder={singleOrder}
                    handleCancel={handleCancel}
                />
            </div>

            <h2>Orders list contents</h2>
            <table>
                <tr>
                    <th>Avater</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Order ID</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                {
                    orders.map(order =>
                        <tr>
                            <td><img src={order.photo} alt="" /></td>
                            <td>{order.shipment.email}</td>
                            <td>{order.shipment.phone}</td>
                            <td>{order.orderId}</td>
                            <td className="status-bar">{order.status}</td>
                            <td>
                                <button onClick={() => handleStatus(order)} className="btn-modify">Update</button>
                            </td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
};

export default AdminsList;