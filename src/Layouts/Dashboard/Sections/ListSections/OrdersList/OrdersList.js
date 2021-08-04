import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import '../ListStyles.modules.css';
import OrderStatus from './OrderStatus';
import { UserContext } from '../../../../../App';

const AdminsList = () => {
    const [orders, setOrders] = useState([]);
    const [singleOrder, setSingleOrder] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // Loaded the all orders:
    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [loggedInUser.email])

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
                    <th>Price</th>
                    <th>Order Id</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                {
                    orders.map(order =>
                        <tr>
                            <td><img src={order.photo} alt="" /></td>
                            <td>{order.shipment.email}</td>
                            <td>{order.shipment.phone}</td>
                            <td>${order.application.price}</td>
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