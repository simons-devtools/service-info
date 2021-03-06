import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import '../ListStyles.modules.css';
import image from '../../../../../Assets/Extra-img/empty.png';
import OrderStatus from './OrderStatus';
import { UserContext } from '../../../../../App';

const AdminsList = () => {
    const [orders, setOrders] = useState([]);
    const [singleOrder, setSingleOrder] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // Loaded the all orders:
    useEffect(() => {
        fetch('https://hnomism52server.herokuapp.com/orders?email=' + loggedInUser.email, {
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
                    orders && orders.length > 0 ? orders.map(order =>
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
                    ) : <tr>
                        <td><img src={image} alt="" style={{ height: '150px' }} /></td>
                        <td>Your order is empty</td>
                    </tr>
                }
            </table>
        </div>
    );
};

export default AdminsList;