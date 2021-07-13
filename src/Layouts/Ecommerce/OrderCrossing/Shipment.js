import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const Shipment = ({ modalTwoApp, orderId, handleModalClose }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    // Handle form Submition:
    const onSubmit = (data) => {
        let shipmentData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
        };
        const newOrder = { ...loggedInUser, shipment: shipmentData, application: modalTwoApp, orderId: orderId, status: 'pending' };
        // console.log(newOrder); // No 01
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => {
                // console.log('From server response', res) // No 02
                alert('Your order is successfully');
                handleModalClose();
            });
    };

    // Form styles:
    const input = {
        width: '100%',
        height: '30px',
        padding: '5px 10px',
        marginBottom: '20px',
        border: '1px solid #66b1ee',
    };
    const button = {
        color: 'azure',
        fontSize: '16px',
        textTransform: 'uppercase',
        width: '100%',
        height: '50px',
        padding: '5px 10px',
        border: '1px solid #66b1ee',
        backgroundColor: '#66b1ee',
        cursor: 'pointer',
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Your contact information</h3>
                <input placeholder="Your Name" type="name" {...register("name", { required: true })} style={input} /> <br />
                <input placeholder="Your Email" type="email" {...register("email", { required: true })} style={input} /> <br />
                <input placeholder="Your Phone" type="phone" {...register("phone", { required: true })} style={input} /> <br />
                <input placeholder="Your address" type="address" {...register("address", { required: true })} style={input} /> <br />
                <button type="submit" style={button}>Procced To Order</button>
            </form>
        </div>
    );
};

export default Shipment;